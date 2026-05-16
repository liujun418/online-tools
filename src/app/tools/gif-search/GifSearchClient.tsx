"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import ToolLayout from "@/components/ToolLayout";

// Get free key at: https://developers.giphy.com/ → Create App → select "API"
const GIPHY_KEY = "YOUR_GIPHY_API_KEY";
const GIPHY_API = "https://api.giphy.com/v1/gifs";
const PAGE_SIZE = 20;

const metadata = {
  title: "GIF Search",
  description:
    "Search and download millions of trending GIFs from GIPHY. Keyword search, grid preview, one-click download, copy link. Free, no signup.",
  keywords: [
    "gif search", "animated gif", "gif download", "trending gif", "free gif",
    "giphy search", "gif finder", "funny gif", "reaction gif", "meme gif",
  ],
  toolId: "gif-search",
};

interface GifImage {
  url: string;
  width: string;
  height: string;
  size?: string;
  mp4?: string;
}

interface GifData {
  id: string;
  title: string;
  images: {
    original: GifImage;
    fixed_width: GifImage;
    fixed_height: GifImage;
    preview_gif: GifImage;
    downsized: GifImage;
  };
  url: string;
  username: string;
  source: string;
  rating: string;
}

export default function GifSearchClient({
  locale = "en",
  dict,
  titleOverride,
  descriptionOverride,
}: {
  locale?: string;
  dict?: Record<string, unknown>;
  titleOverride?: string;
  descriptionOverride?: string;
}) {
  const t = (dict as any)?.gifSearch || {};
  const tp = (dict as any)?.toolPage || {};
  const title = titleOverride || metadata.title;
  const description = descriptionOverride || metadata.description;

  const [query, setQuery] = useState("");
  const [rating, setRating] = useState("g");
  const [gifs, setGifs] = useState<GifData[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState("");
  const [offset, setOffset] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [selectedGif, setSelectedGif] = useState<GifData | null>(null);
  const [copied, setCopied] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [searchMode, setSearchMode] = useState(false);

  const gridRef = useRef<HTMLDivElement>(null);

  const fetchGifs = useCallback(async (search: string, newSearch: boolean, loadMore: boolean) => {
    const currentOffset = newSearch ? 0 : offset;
    if (loadMore) setLoadingMore(true);
    else setLoading(true);
    setError("");

    try {
      const params = new URLSearchParams({
        api_key: GIPHY_KEY,
        limit: PAGE_SIZE.toString(),
        offset: currentOffset.toString(),
        rating,
      });

      let url: string;
      if (search.trim()) {
        params.set("q", search.trim());
        params.set("lang", locale === "ar" ? "ar" : locale === "es" ? "es" : "en");
        url = `${GIPHY_API}/search?${params}`;
      } else {
        url = `${GIPHY_API}/trending?${params}`;
      }

      const res = await fetch(url);
      if (!res.ok) {
        if (res.status === 401 || res.status === 403) {
          throw new Error("API key invalid");
        }
        throw new Error("API error");
      }
      const json = await res.json();

      if (newSearch || !loadMore) {
        setGifs(json.data || []);
      } else {
        setGifs((prev) => [...prev, ...(json.data || [])]);
      }
      setTotalCount(json.pagination?.total_count || 0);
      setOffset(currentOffset + PAGE_SIZE);
    } catch (err: any) {
      if (!loadMore) setGifs([]);
      if (err.message === "API key invalid" || GIPHY_KEY === "YOUR_GIPHY_API_KEY") {
        setError("GIPHY API key required. Get a free key at developers.giphy.com → Create App → replace YOUR_GIPHY_API_KEY in GifSearchClient.tsx");
      } else {
        setError(t.error || "Unable to load GIFs. Please try again.");
      }
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  }, [offset, rating, locale, t.error]);

  // Initial load — trending
  useEffect(() => {
    fetchGifs("", true, false);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchMode(!!query.trim());
    setOffset(0);
    fetchGifs(query, true, false);
  };

  const handleLoadMore = () => {
    fetchGifs(query, false, true);
  };

  const handleRatingChange = (newRating: string) => {
    setRating(newRating);
    setOffset(0);
    setGifs([]);
    setLoading(true);
    // Re-fetch with new rating
    const params = new URLSearchParams({
      api_key: GIPHY_KEY,
      limit: PAGE_SIZE.toString(),
      offset: "0",
      rating: newRating,
    });
    if (query.trim()) {
      params.set("q", query.trim());
      params.set("lang", locale === "ar" ? "ar" : locale === "es" ? "es" : "en");
    }
    const url = query.trim()
      ? `${GIPHY_API}/search?${params}`
      : `${GIPHY_API}/trending?${params}`;
    fetch(url)
      .then((r) => r.json())
      .then((json) => {
        setGifs(json.data || []);
        setTotalCount(json.pagination?.total_count || 0);
        setOffset(PAGE_SIZE);
      })
      .catch(() => setError(t.error || "Unable to load GIFs."))
      .finally(() => setLoading(false));
  };

  const openDetail = (gif: GifData) => {
    setSelectedGif(gif);
    setCopied(false);
  };

  const closeDetail = () => {
    setSelectedGif(null);
    setCopied(false);
  };

  const copyLink = () => {
    if (!selectedGif) return;
    navigator.clipboard.writeText(selectedGif.url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const downloadGif = async () => {
    if (!selectedGif) return;
    setDownloading(true);
    try {
      const gifUrl = selectedGif.images.original.url;
      const res = await fetch(gifUrl);
      const blob = await res.blob();
      const blobUrl = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = blobUrl;
      a.download = `${selectedGif.title || selectedGif.id}.gif`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(blobUrl);
    } catch {
      // Fallback: open in new tab
      window.open(selectedGif.images.original.url, "_blank");
    } finally {
      setDownloading(false);
    }
  };

  // Keyboard: ESC to close modal
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape" && selectedGif) closeDetail();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [selectedGif]);

  const hasMore = gifs.length < totalCount;

  return (
    <ToolLayout
      title={title}
      description={description}
      keywords={metadata.keywords}
      toolId={metadata.toolId}
      locale={locale as any}
      dict={dict}
    >
      <div className="mx-auto max-w-6xl">
        {/* Search bar + filters */}
        <form onSubmit={handleSearch} className="mb-6 flex flex-col gap-2 sm:flex-row">
          <div className="relative flex-1">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t.searchPlaceholder || "Search GIFs..."}
              className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 pr-10 text-sm text-zinc-900 placeholder-zinc-400 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 dark:border-zinc-600 dark:bg-zinc-800 dark:text-white dark:placeholder-zinc-500"
            />
          </div>
          <div className="flex gap-2">
            <select
              value={rating}
              onChange={(e) => handleRatingChange(e.target.value)}
              className="rounded-xl border border-zinc-300 bg-white px-3 py-3 text-sm text-zinc-700 shadow-sm focus:border-purple-500 focus:outline-none dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-300"
              title={t.rating || "Rating"}
            >
              <option value="g">{t.ratingG || "G"}</option>
              <option value="pg">{t.ratingPg || "PG"}</option>
              <option value="pg-13">{t.ratingPg13 || "PG-13"}</option>
            </select>
            <button
              type="submit"
              className="rounded-xl bg-purple-600 px-5 py-3 text-sm font-semibold text-white hover:bg-purple-700 transition-colors"
            >
              {t.search || "Search"}
            </button>
          </div>
        </form>

        {/* Header */}
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
            {query.trim()
              ? `${searchMode ? `"${query}"` : query} · ${totalCount.toLocaleString()} GIFs`
              : `🔥 ${t.trending || "Trending"} · ${totalCount.toLocaleString()} GIFs`
            }
          </h2>
        </div>

        {/* Loading */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="h-10 w-10 animate-spin rounded-full border-3 border-purple-500 border-t-transparent" />
            <p className="mt-4 text-sm text-zinc-500">{t.loading || "Loading GIFs..."}</p>
          </div>
        )}

        {/* Error */}
        {error && !loading && (
          <div className="flex flex-col items-center py-20">
            <span className="text-4xl">🔑</span>
            <p className="mt-4 max-w-md text-center text-sm text-red-500">{error}</p>
            {GIPHY_KEY === "YOUR_GIPHY_API_KEY" && (
              <a
                href="https://developers.giphy.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 rounded-lg bg-purple-600 px-4 py-2 text-sm font-semibold text-white hover:bg-purple-700"
              >
                Get Free GIPHY API Key →
              </a>
            )}
          </div>
        )}

        {/* Empty */}
        {!loading && !error && gifs.length === 0 && (
          <div className="flex flex-col items-center py-20">
            <span className="text-4xl">🔍</span>
            <p className="mt-4 text-sm text-zinc-500">{t.noResults || "No GIFs found. Try a different keyword."}</p>
          </div>
        )}

        {/* GIF Grid */}
        {gifs.length > 0 && (
          <>
            <div
              ref={gridRef}
              className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4"
            >
              {gifs.map((gif) => (
                <button
                  key={gif.id}
                  onClick={() => openDetail(gif)}
                  className="group relative aspect-square overflow-hidden rounded-xl border border-zinc-200 bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:border-zinc-700 dark:bg-zinc-800"
                >
                  <img
                    src={gif.images.fixed_width.url}
                    alt={gif.title || "GIF"}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-2 opacity-0 transition-opacity group-hover:opacity-100">
                    <p className="truncate text-xs font-medium text-white">
                      {gif.title || "Untitled GIF"}
                    </p>
                  </div>
                </button>
              ))}
            </div>

            {/* Load More */}
            {hasMore && (
              <div className="mt-6 text-center">
                <button
                  onClick={handleLoadMore}
                  disabled={loadingMore}
                  className="rounded-xl border border-zinc-300 px-6 py-3 text-sm font-medium text-zinc-700 hover:bg-zinc-50 disabled:opacity-50 dark:border-zinc-600 dark:text-zinc-300 dark:hover:bg-zinc-800"
                >
                  {loadingMore ? (
                    <span className="flex items-center gap-2">
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-purple-500 border-t-transparent" />
                      {t.loading || "Loading..."}
                    </span>
                  ) : (
                    `↓ ${t.loadMore || "Load More"} (${gifs.length} / ${totalCount.toLocaleString()})`
                  )}
                </button>
              </div>
            )}
          </>
        )}

        {/* Detail Modal */}
        {selectedGif && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
            onClick={closeDetail}
          >
            <div
              className="relative max-h-[90vh] w-full max-w-2xl overflow-auto rounded-2xl bg-white shadow-2xl dark:bg-zinc-900"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                onClick={closeDetail}
                className="absolute right-3 top-3 z-10 rounded-full bg-black/40 p-1.5 text-white hover:bg-black/60"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* GIF */}
              <div className="flex items-center justify-center bg-zinc-100 p-4 dark:bg-zinc-800">
                <img
                  src={selectedGif.images.original.url}
                  alt={selectedGif.title || "GIF"}
                  className="max-h-[50vh] max-w-full rounded-lg object-contain"
                />
              </div>

              {/* Info + Actions */}
              <div className="p-5">
                <h3 className="text-base font-semibold text-zinc-900 dark:text-white">
                  {selectedGif.title || "Untitled GIF"}
                </h3>
                {selectedGif.username && (
                  <p className="mt-1 text-xs text-zinc-500">
                    by @{selectedGif.username}
                    {selectedGif.source && <span> · source: {selectedGif.source}</span>}
                  </p>
                )}
                <div className="mt-1 flex items-center gap-2 text-xs text-zinc-400">
                  <span>{selectedGif.images.original.width}×{selectedGif.images.original.height}</span>
                  {selectedGif.images.original.size && (
                    <span>· {(parseInt(selectedGif.images.original.size) / 1024).toFixed(0)} KB</span>
                  )}
                  <span>· {selectedGif.rating.toUpperCase()}</span>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  <button
                    onClick={downloadGif}
                    disabled={downloading}
                    className="rounded-lg bg-purple-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-purple-700 disabled:opacity-60 transition-colors"
                  >
                    {downloading ? "..." : `⬇ ${t.download || "Download GIF"}`}
                  </button>
                  <button
                    onClick={copyLink}
                    className="rounded-lg border border-zinc-300 px-4 py-2.5 text-sm font-medium text-zinc-700 hover:bg-zinc-50 dark:border-zinc-600 dark:text-zinc-300 dark:hover:bg-zinc-800 transition-colors"
                  >
                    {copied ? `✓ ${t.linkCopied || "Link copied!"}` : `🔗 ${t.copyLink || "Copy Link"}`}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Attribution + compliance */}
        <div className="mt-8 space-y-1 text-center">
          <p className="text-xs text-zinc-400">
            {t.poweredBy || "Powered by GIPHY"} —{" "}
            <a
              href="https://giphy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-zinc-600"
            >
              GIPHY
            </a>
          </p>
          <p className="text-xs text-zinc-400">
            {t.attribution || "All GIFs provided by GIPHY and belong to their original creators"}
          </p>
          <p className="text-xs text-zinc-400">
            {t.compliance || "This tool is for personal, non-commercial use only."}
          </p>
        </div>

        {/* Referral */}
        <div className="mt-6 rounded-xl border border-purple-200 bg-gradient-to-r from-purple-50 to-pink-50 p-4 text-center dark:border-purple-800 dark:from-purple-950/30 dark:to-pink-950/20">
          <p className="text-sm font-medium text-purple-800 dark:text-purple-300">
            {t.referralText || "Need more free tools? Try our other popular utilities!"}
          </p>
          <div className="mt-3 flex flex-wrap justify-center gap-2">
            <a
              href={`/${locale}/tools/global-weather`}
              className="rounded-lg bg-purple-600 px-4 py-2 text-sm font-semibold text-white hover:bg-purple-700 transition-colors"
            >
              🌤️ {t.tryWeather || "Global Weather"}
            </a>
            <a
              href={`/${locale}/tools/bing-wallpaper`}
              className="rounded-lg border border-purple-300 bg-white px-4 py-2 text-sm font-semibold text-purple-700 hover:bg-purple-50 transition-colors dark:border-purple-600 dark:bg-transparent dark:text-purple-300 dark:hover:bg-purple-900/20"
            >
              🖼️ {t.tryBing || "Bing 4K Wallpaper"}
            </a>
          </div>
        </div>
      </div>
    </ToolLayout>
  );
}
