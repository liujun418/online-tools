"use client";

import { useState, useEffect, useCallback } from "react";
import ToolLayout from "@/components/ToolLayout";

const PROXY_API = "https://ai-toolbox-api-production.up.railway.app/api/nasa-apod";

const metadata = {
  title: "NASA Astronomy Picture of the Day",
  description:
    "Explore the cosmos with NASA's daily astronomy picture. Browse history, random discoveries, and download HD images. Powered by NASA APOD. Free, no signup.",
  keywords: [
    "nasa apod", "astronomy picture of the day", "space photo daily",
    "nasa daily image", "hubble image", "space wallpaper", "astronomy photo",
    "nasa picture", "cosmos image", "galaxy photo",
  ],
  toolId: "nasa-apod",
};

interface ApodData {
  title: string;
  explanation: string;
  url: string;
  hdurl?: string;
  date: string;
  copyright?: string;
  media_type: "image" | "video";
  thumbnail_url?: string;
}

function formatDate(dateStr: string): string {
  if (!dateStr || dateStr.length < 10) return dateStr;
  const [y, m, d] = dateStr.split("-");
  return new Date(`${y}-${m}-${d}`).toLocaleDateString("en-US", {
    year: "numeric", month: "long", day: "numeric",
  });
}

function getYoutubeId(url: string): string | null {
  const m = url?.match(/(?:embed\/|watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
  return m ? m[1] : null;
}

export default function NasaApodClient({
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
  const t = (dict as any)?.nasaApod || {};
  const tp = (dict as any)?.toolPage || {};
  const title = titleOverride || metadata.title;
  const description = descriptionOverride || metadata.description;

  const [today, setToday] = useState<ApodData | null>(null);
  const [history, setHistory] = useState<ApodData[]>([]);
  const [current, setCurrent] = useState<ApodData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const todayStr = new Date().toISOString().slice(0, 10);

  const fetchToday = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(PROXY_API);
      if (!res.ok) throw new Error("API failed");
      const data: ApodData = await res.json();
      setToday(data);
      setCurrent(data);
    } catch {
      setError("Unable to load NASA APOD. Please try again.");
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchHistory = useCallback(async () => {
    try {
      const end = new Date();
      end.setDate(end.getDate() - 1);
      const start = new Date();
      start.setDate(start.getDate() - 7);
      const res = await fetch(
        `${PROXY_API}?start_date=${start.toISOString().slice(0, 10)}&end_date=${end.toISOString().slice(0, 10)}`
      );
      if (!res.ok) return;
      const data: ApodData[] = await res.json();
      if (Array.isArray(data)) {
        // Filter images only, reverse for chronological order
        setHistory(data.filter((d) => d.media_type === "image").reverse());
      }
    } catch { /* non-critical */ }
  }, []);

  useEffect(() => {
    fetchToday();
    fetchHistory();
  }, [fetchToday, fetchHistory]);

  const goDate = async (dateStr: string) => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`${PROXY_API}?date=${dateStr}`);
      if (!res.ok) throw new Error("Not found");
      const data: ApodData = await res.json();
      setCurrent(data);
    } catch {
      setError("No APOD available for this date.");
    } finally {
      setLoading(false);
    }
  };

  const goRandom = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`${PROXY_API}?count=1`);
      if (!res.ok) throw new Error("API failed");
      const data: ApodData[] = await res.json();
      if (data.length) setCurrent(data[0]);
    } catch {
      setError("Unable to fetch random APOD.");
    } finally {
      setLoading(false);
    }
  };

  const downloadImage = () => {
    const url = current?.hdurl || current?.url;
    if (!url) return;
    const a = document.createElement("a");
    a.href = url;
    a.download = `nasa-apod-${current!.date}.jpg`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
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
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-indigo-600 border-t-transparent" />
            <p className="mt-4 text-sm text-zinc-500">{t.loading || "Loading astronomy picture..."}</p>
          </div>
        )}

        {/* Error */}
        {error && !loading && (
          <div className="flex flex-col items-center py-20">
            <p className="text-sm text-red-500">{error}</p>
            <button onClick={fetchToday} className="mt-4 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700">
              {tp.tryAgain || "Try Again"}
            </button>
          </div>
        )}

        {/* Main content */}
        {!loading && current && (
          <>
            {/* Main card */}
            <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-700 dark:bg-zinc-900">
              {/* Image / Video */}
              <div className="relative bg-black">
                {current.media_type === "video" ? (
                  getYoutubeId(current.url) ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${getYoutubeId(current.url)}`}
                      className="aspect-video w-full"
                      allowFullScreen
                    />
                  ) : (
                    <div className="flex aspect-video items-center justify-center bg-zinc-900 text-zinc-400">
                      <a href={current.url} target="_blank" rel="noopener noreferrer" className="text-indigo-400 underline">
                        {t.watchVideo || "Watch Video on NASA"}
                      </a>
                    </div>
                  )
                ) : (
                  <img
                    src={current.url}
                    alt={current.title}
                    className="max-h-[600px] w-full object-contain"
                  />
                )}
              </div>

              {/* Info */}
              <div className="border-t border-zinc-100 px-4 py-4 dark:border-zinc-800 sm:px-6">
                <h2 className="text-lg font-bold text-zinc-900 dark:text-white sm:text-xl">
                  {current.title}
                </h2>
                <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-zinc-500">
                  <span>{formatDate(current.date)}</span>
                  {current.copyright && (
                    <>
                      <span>·</span>
                      <span>© {current.copyright}</span>
                    </>
                  )}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {current.explanation}
                </p>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-2 border-t border-zinc-100 px-4 py-3 dark:border-zinc-800 sm:px-6">
                <button
                  onClick={() => goDate(current ? getPrevDate(current.date) : todayStr)}
                  className="rounded-lg border border-zinc-300 px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50 dark:border-zinc-600 dark:text-zinc-300 dark:hover:bg-zinc-800"
                >
                  ← {t.prevDay || "Previous"}
                </button>
                <button
                  onClick={() => goDate(current ? getNextDate(current.date) : todayStr)}
                  className="rounded-lg border border-zinc-300 px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50 dark:border-zinc-600 dark:text-zinc-300 dark:hover:bg-zinc-800"
                >
                  {t.nextDay || "Next"} →
                </button>
                <button
                  onClick={goRandom}
                  className="rounded-lg border border-zinc-300 px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50 dark:border-zinc-600 dark:text-zinc-300 dark:hover:bg-zinc-800"
                >
                  🎲 {t.random || "Random"}
                </button>
                {current.media_type === "image" && (
                  <button
                    onClick={downloadImage}
                    className="ml-auto rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700 transition-colors"
                  >
                    ⬇ {t.download || "Download HD"}
                  </button>
                )}
              </div>
            </div>

            {/* History thumbnails */}
            {history.length > 0 && (
              <div className="mt-8">
                <h3 className="mb-3 text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                  {t.recentDays || "Recent 7 Days"}
                </h3>
                <div className="grid grid-cols-4 gap-2 sm:grid-cols-7">
                  {history.map((item) => (
                    <button
                      key={item.date}
                      onClick={() => goDate(item.date)}
                      className={`overflow-hidden rounded-lg border-2 transition-all ${
                        current.date === item.date
                          ? "border-indigo-500 shadow-md"
                          : "border-transparent opacity-70 hover:opacity-100"
                      }`}
                    >
                      <img
                        src={item.url}
                        alt={item.title}
                        className="aspect-square w-full object-cover"
                        loading="lazy"
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* NASA Attribution */}
            <div className="mt-6 space-y-1 text-center text-xs text-zinc-400">
              <p>
                <a
                  href="https://apod.nasa.gov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-zinc-600"
                >
                  {t.poweredBy || "Powered by NASA APOD"} — Astronomy Picture of the Day
                </a>
              </p>
              <p>
                NASA images are generally not copyrighted and may be used for educational
                or informational purposes. For specific usage rights, see{" "}
                <a
                  href="https://www.nasa.gov/multimedia/guidelines/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  NASA Media Usage Guidelines
                </a>.
              </p>
            </div>

            {/* AI Tools referral */}
            <div className="mt-6 rounded-xl border border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50 p-4 text-center dark:border-blue-800 dark:from-blue-950/30 dark:to-indigo-950/20">
              <p className="text-sm font-medium text-blue-800 dark:text-blue-300">
                {t.referralText || "Inspired by the cosmos? Create your own stunning images with our free AI tools!"}
              </p>
              <div className="mt-3 flex flex-wrap justify-center gap-2">
                <a
                  href="https://ai.toolboxonline.club/tools/ai-image-generator"
                  className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700 transition-colors"
                >
                  🎨 {t.tryAiImage || "AI Image Generator"}
                </a>
                <a
                  href={`/${locale}/tools/bing-wallpaper`}
                  className="rounded-lg border border-indigo-300 bg-white px-4 py-2 text-sm font-semibold text-indigo-700 hover:bg-indigo-50 transition-colors dark:border-indigo-600 dark:bg-transparent dark:text-indigo-300 dark:hover:bg-indigo-900/20"
                >
                  🖼️ {t.tryBing || "Bing 4K Wallpaper"}
                </a>
              </div>
            </div>
          </>
        )}
      </div>
    </ToolLayout>
  );
}

// Date helpers
function getPrevDate(dateStr: string): string {
  const d = new Date(dateStr + "T12:00:00Z");
  d.setDate(d.getDate() - 1);
  return d.toISOString().slice(0, 10);
}

function getNextDate(dateStr: string): string {
  const d = new Date(dateStr + "T12:00:00Z");
  d.setDate(d.getDate() + 1);
  const today = new Date().toISOString().slice(0, 10);
  return d.toISOString().slice(0, 10) > today ? today : d.toISOString().slice(0, 10);
}
