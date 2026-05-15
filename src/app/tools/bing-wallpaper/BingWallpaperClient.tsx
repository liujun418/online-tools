"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import ToolLayout from "@/components/ToolLayout";

const PROXY_API = "https://ai-toolbox-api-production.up.railway.app/api/bing-wallpaper";
const BING_BASE = "https://www.bing.com";

const metadata = {
  title: "Bing 4K Daily Wallpaper",
  description:
    "Download stunning Bing daily wallpapers in 4K, Full HD, and mobile resolutions. Browse 7-day history, random wallpapers, and one-click downloads. Free, no signup.",
  keywords: [
    "bing wallpaper", "4k wallpaper download", "daily wallpaper",
    "bing daily image", "hd wallpaper", "free wallpaper download",
    "bing background", "wallpaper of the day",
  ],
  toolId: "bing-wallpaper",
};

interface BingImage {
  startdate: string;
  fullstartdate: string;
  enddate: string;
  url: string;
  urlbase: string;
  copyright: string;
  copyrightlink: string;
  title: string;
  hsh: string;
}

type Resolution = "4k" | "1080p" | "mobile";

const RESOLUTIONS: { id: Resolution; label: string; suffix: string; desc: string }[] = [
  { id: "4k", label: "4K UHD", suffix: "_UHD.jpg", desc: "3840×2160" },
  { id: "1080p", label: "1920×1080", suffix: "_1920x1080.jpg", desc: "Full HD" },
  { id: "mobile", label: "Mobile", suffix: "_1080x1920.jpg", desc: "Portrait" },
];

export default function BingWallpaperClient({
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
  const t = (dict as any)?.bingWallpaper || {};
  const tp = (dict as any)?.toolPage || {};
  const title = titleOverride || metadata.title;
  const description = descriptionOverride || metadata.description;

  const [images, setImages] = useState<BingImage[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [resolution, setResolution] = useState<Resolution>("1080p");
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState("");
  const [hasMore, setHasMore] = useState(true);
  const idxRef = useRef(0);

  const fetchImages = useCallback(async (idx = 0) => {
    setLoading(idx === 0);
    setLoadingMore(idx > 0);
    setError("");
    try {
      const res = await fetch(`${PROXY_API}?idx=${idx}`);
      if (!res.ok) throw new Error("Failed to fetch");
      const data = await res.json();
      if (data.images?.length) {
        setImages(data.images);
        setCurrentIdx(0);
        idxRef.current = idx;
        setHasMore(data.images.length >= 8);
      } else if (idx === 0) {
        setError("No images found");
      } else {
        setHasMore(false);
      }
    } catch {
      if (idx === 0) setError("Unable to load wallpapers. Please try again.");
      else setHasMore(false);
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  }, []);

  const loadMore = useCallback(() => {
    const nextIdx = idxRef.current + 8;
    fetchImages(nextIdx);
  }, [fetchImages]);

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  const current = images[currentIdx];
  const total = images.length;

  const getImageUrl = useCallback(
    (img: BingImage, res: Resolution) => `${BING_BASE}${img.urlbase}${RESOLUTIONS.find((r) => r.id === res)!.suffix}`,
    []
  );

  const getThumbUrl = useCallback(
    (img: BingImage) => `${BING_BASE}${img.url}&pid=hp`,
    []
  );

  const goNext = () => setCurrentIdx((p) => (p + 1) % total);
  const goPrev = () => setCurrentIdx((p) => (p - 1 + total) % total);
  const goRandom = () => {
    let next: number;
    do {
      next = Math.floor(Math.random() * total);
    } while (next === currentIdx && total > 1);
    setCurrentIdx(next);
  };

  const downloadImage = () => {
    if (!current) return;
    const url = getImageUrl(current, resolution);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <ToolLayout
      title={title}
      description={description}
      keywords={metadata.keywords}
      toolId={metadata.toolId}
      locale={locale as any}
      dict={dict}
    >
      <div className="mx-auto max-w-5xl">
        {/* Loading */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-blue-600 border-t-transparent" />
            <p className="mt-4 text-sm text-zinc-500">{t.loading || "Loading wallpapers..."}</p>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="flex flex-col items-center py-20">
            <p className="text-sm text-red-500">{error}</p>
            <button
              onClick={fetchImages}
              className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
            >
              {tp.tryAgain || "Try Again"}
            </button>
          </div>
        )}

        {/* Main content */}
        {!loading && !error && current && (
          <>
            {/* Resolution switcher */}
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <div className="flex rounded-lg border border-zinc-200 bg-zinc-50 p-1 dark:border-zinc-700 dark:bg-zinc-800">
                {RESOLUTIONS.map((r) => (
                  <button
                    key={r.id}
                    onClick={() => setResolution(r.id)}
                    className={`rounded-md px-3 py-1.5 text-xs font-medium transition-all sm:px-4 sm:text-sm ${
                      resolution === r.id
                        ? "bg-white text-zinc-900 shadow-sm dark:bg-zinc-700 dark:text-white"
                        : "text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300"
                    }`}
                  >
                    <span className="hidden sm:inline">{r.label}</span>
                    <span className="sm:hidden">{r.id === "4k" ? "4K" : r.id === "1080p" ? "FHD" : "📱"}</span>
                    <span className="ml-1 text-[10px] text-zinc-400">{r.desc}</span>
                  </button>
                ))}
              </div>

              <div className="text-xs text-zinc-400">
                {currentIdx + 1} / {total}
              </div>
            </div>

            {/* Wallpaper card */}
            <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-700 dark:bg-zinc-900">
              {/* Image */}
              <div className="relative">
                <img
                  src={getImageUrl(current, resolution)}
                  alt={current.title || current.copyright}
                  className={`w-full ${resolution === "mobile" ? "aspect-[9/16] object-cover sm:aspect-auto sm:max-h-[600px] sm:object-contain" : "aspect-video object-cover sm:max-h-[600px] sm:object-contain"}`}
                />
              </div>

              {/* Info bar */}
              <div className="border-t border-zinc-100 px-4 py-3 dark:border-zinc-800 sm:px-6">
                <h2 className="text-base font-semibold text-zinc-900 dark:text-white sm:text-lg">
                  {current.title || "Bing Daily Wallpaper"}
                </h2>
                <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400 sm:text-sm">
                  {current.copyright}
                </p>
                <p className="mt-0.5 text-xs text-zinc-400">
                  {current.enddate
                    ? new Date(
                        `${current.enddate.slice(0, 4)}-${current.enddate.slice(4, 6)}-${current.enddate.slice(6, 8)}`
                      ).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
                    : ""}
                </p>
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap gap-2 border-t border-zinc-100 px-4 py-3 dark:border-zinc-800 sm:px-6">
                <button onClick={goPrev} className="rounded-lg border border-zinc-300 px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50 dark:border-zinc-600 dark:text-zinc-300 dark:hover:bg-zinc-800">
                  ← {t.prev || "Previous"}
                </button>
                <button onClick={goNext} className="rounded-lg border border-zinc-300 px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50 dark:border-zinc-600 dark:text-zinc-300 dark:hover:bg-zinc-800">
                  {t.next || "Next"} →
                </button>
                <button onClick={goRandom} className="rounded-lg border border-zinc-300 px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50 dark:border-zinc-600 dark:text-zinc-300 dark:hover:bg-zinc-800">
                  🎲 {t.random || "Random"}
                </button>
                {hasMore && (
                  <button
                    onClick={loadMore}
                    disabled={loadingMore}
                    className="rounded-lg border border-zinc-300 px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50 disabled:opacity-50 dark:border-zinc-600 dark:text-zinc-300 dark:hover:bg-zinc-800"
                  >
                    {loadingMore ? "..." : t.loadMore || "Load More →"}
                  </button>
                )}
                <button
                  onClick={downloadImage}
                  className="ml-auto rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
                >
                  ⬇ {t.download || "Download"}
                </button>
              </div>
            </div>

            {/* History thumbnails */}
            {images.length > 1 && (
              <div className="mt-8">
                <h3 className="mb-3 text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                  {t.recentDays || "History"}
                </h3>
                <div className="grid grid-cols-4 gap-2 sm:grid-cols-7">
                  {images.map((img, i) => (
                    <button
                      key={img.hsh || i}
                      onClick={() => setCurrentIdx(i)}
                      className={`overflow-hidden rounded-lg border-2 transition-all ${
                        i === currentIdx
                          ? "border-blue-500 shadow-md"
                          : "border-transparent opacity-70 hover:opacity-100"
                      }`}
                    >
                      <img
                        src={getThumbUrl(img)}
                        alt={img.title || `Day ${i + 1}`}
                        className="aspect-video w-full object-cover"
                        loading="lazy"
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Copyright */}
            <p className="mt-6 text-center text-xs text-zinc-400">
              © Microsoft Bing —{" "}
              <a
                href="https://www.bing.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-zinc-600"
              >
                {t.bingCopyright || "Wallpapers provided by Bing.com"}
              </a>
            </p>

            {/* AI tools referral */}
            <div className="mt-6 rounded-xl border border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50 p-4 text-center dark:border-blue-800 dark:from-blue-950/30 dark:to-indigo-950/20">
              <p className="text-sm font-medium text-blue-800 dark:text-blue-300">
                {t.referralText || "Love this wallpaper? Try our AI tools to create your own stunning images!"}
              </p>
              <div className="mt-3 flex flex-wrap justify-center gap-2">
                <a
                  href="https://ai.toolboxonline.club/tools/ai-image-generator"
                  className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
                >
                  🎨 {t.tryAiImage || "AI Image Generator"}
                </a>
                <a
                  href="https://ai.toolboxonline.club/tools/background-remover"
                  className="rounded-lg border border-blue-300 bg-white px-4 py-2 text-sm font-semibold text-blue-700 hover:bg-blue-50 transition-colors dark:border-blue-600 dark:bg-transparent dark:text-blue-300 dark:hover:bg-blue-900/20"
                >
                  ✂️ {t.tryBgRemover || "Background Remover"}
                </a>
              </div>
            </div>
          </>
        )}
      </div>
    </ToolLayout>
  );
}
