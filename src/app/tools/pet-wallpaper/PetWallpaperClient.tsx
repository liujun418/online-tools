"use client";

import { useState, useEffect, useCallback } from "react";
import ToolLayout from "@/components/ToolLayout";

const PETS = [
  {
    id: "cat" as const, icon: "🐱", name: "Cat",
    api: "https://cataas.com/cat?json=true",
    getUrl: (d: any) => d?.url || d?.image || "",
    credit: "thecatapi.com / Cataas",
  },
  {
    id: "dog" as const, icon: "🐶", name: "Dog",
    api: "https://dog.ceo/api/breeds/image/random",
    getUrl: (d: any) => d?.message || "",
    credit: "Dog CEO API",
  },
  {
    id: "fox" as const, icon: "🦊", name: "Fox",
    api: "https://randomfox.ca/floof/",
    getUrl: (d: any) => d?.image || "",
    credit: "randomfox.ca",
  },
];

type PetId = (typeof PETS)[number]["id"];

const metadata = {
  title: "Random Pet Wallpaper",
  description: "Get random cute cat, dog, and fox wallpapers. One-click refresh, fullscreen preview, free download. No signup required.",
  keywords: ["pet wallpaper", "cute cat", "dog photo", "fox image", "random pet", "animal wallpaper", "cute animal"],
  toolId: "pet-wallpaper",
};

export default function PetWallpaperClient({
  locale = "en", dict, titleOverride, descriptionOverride,
}: {
  locale?: string; dict?: Record<string, unknown>;
  titleOverride?: string; descriptionOverride?: string;
}) {
  const t = (dict as any)?.petWallpaper || {};
  const tp = (dict as any)?.toolPage || {};
  const title = titleOverride || metadata.title;
  const description = descriptionOverride || metadata.description;

  const [pet, setPet] = useState<PetId>("cat");
  const [imageUrl, setImageUrl] = useState("");
  const [credit, setCredit] = useState("");
  const [loading, setLoading] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);

  const fetchImage = useCallback(async (petId: PetId) => {
    setLoading(true); setPet(petId);
    const p = PETS.find((x) => x.id === petId)!;
    try {
      const res = await fetch(p.api);
      if (!res.ok) throw new Error("API error");
      const data = await res.json();
      const url = p.getUrl(data);
      if (url) { setImageUrl(url); setCredit(p.credit); }
    } catch { /* keep current */ }
    finally { setLoading(false); }
  }, []);

  useEffect(() => { fetchImage("cat"); }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const download = () => {
    if (!imageUrl) return;
    window.open(imageUrl, "_blank", "noopener,noreferrer");
  };

  const currentPet = PETS.find((p) => p.id === pet)!;

  return (
    <ToolLayout title={title} description={description} keywords={metadata.keywords} toolId={metadata.toolId} locale={locale as any} dict={dict}>
      {/* Fullscreen overlay */}
      {fullscreen && imageUrl && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95" onClick={() => setFullscreen(false)}>
          <button onClick={() => setFullscreen(false)} className="absolute right-4 top-4 rounded-full bg-white/20 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm hover:bg-white/30">✕ Close</button>
          <img src={imageUrl} alt="Pet" className="max-h-full max-w-full object-contain" />
        </div>
      )}

      <div className="mx-auto max-w-2xl">
        {/* Pet tabs */}
        <div className="mb-4 flex gap-2">
          {PETS.map((p) => (
            <button key={p.id} onClick={() => fetchImage(p.id)} disabled={loading}
              className={`flex-1 rounded-xl border px-4 py-3 text-center text-lg font-semibold transition-all disabled:opacity-50 ${
                pet === p.id ? "border-amber-400 bg-amber-50 text-amber-800 shadow-sm dark:border-amber-500 dark:bg-amber-900/20 dark:text-amber-300"
                : "border-zinc-200 text-zinc-600 hover:border-zinc-300 dark:border-zinc-700 dark:text-zinc-400 dark:hover:border-zinc-600"
              }`}>
              {p.icon} <span className="hidden sm:inline">{p.name}</span>
            </button>
          ))}
        </div>

        {/* Image card */}
        <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-700 dark:bg-zinc-900">
          <div className="relative flex aspect-square items-center justify-center bg-zinc-100 dark:bg-zinc-800">
            {loading ? (
              <div className="flex flex-col items-center gap-2">
                <div className="h-8 w-8 animate-spin rounded-full border-2 border-amber-600 border-t-transparent" />
                <span className="text-sm text-zinc-400">{t.loading || "Loading..."}</span>
              </div>
            ) : imageUrl ? (
              <img src={imageUrl} alt="Random pet" className="h-full w-full object-cover" />
            ) : (
              <p className="text-zinc-400">{t.clickTab || "Click a tab above to load a cute pet!"}</p>
            )}
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-2 border-t border-zinc-100 px-4 py-3 dark:border-zinc-800 sm:px-6">
            <button onClick={() => fetchImage(pet)} disabled={loading}
              className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50 dark:border-zinc-600 dark:text-zinc-300 dark:hover:bg-zinc-800">
              🎲 {t.refresh || "Refresh"}
            </button>
            <button onClick={() => setFullscreen(true)} disabled={!imageUrl}
              className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50 disabled:opacity-40 dark:border-zinc-600 dark:text-zinc-300 dark:hover:bg-zinc-800">
              🔍 {t.fullscreen || "Fullscreen"}
            </button>
            <button onClick={download} disabled={!imageUrl}
              className="ml-auto rounded-lg bg-amber-600 px-4 py-2 text-sm font-semibold text-white hover:bg-amber-700 disabled:opacity-40 transition-colors">
              ⬇ {t.download || "Download"}
            </button>
          </div>
        </div>

        {/* Attribution */}
        <p className="mt-4 text-center text-xs text-zinc-400">
          {currentPet.icon} {t.poweredBy || "Powered by"} {credit} ·{" "}
          <span className="text-zinc-400">{t.disclaimer || "Images are provided by third-party APIs for non-commercial use. No copyright ownership claimed."}</span>
        </p>

        {/* Referral */}
        <div className="mt-6 rounded-xl border border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50 p-4 text-center dark:border-blue-800 dark:from-blue-950/30 dark:to-indigo-950/20">
          <p className="text-sm font-medium text-blue-800 dark:text-blue-300">{t.referralText || "Love animals? Try our other free tools!"}</p>
          <div className="mt-3 flex flex-wrap justify-center gap-2">
            <a href={`/${locale}/tools/bing-wallpaper`} className="rounded-lg bg-amber-600 px-4 py-2 text-sm font-semibold text-white hover:bg-amber-700">🖼️ {t.tryBing || "Bing 4K Wallpaper"}</a>
            <a href={`/${locale}/tools/nasa-apod`} className="rounded-lg border border-amber-300 bg-white px-4 py-2 text-sm font-semibold text-amber-700 hover:bg-amber-50 dark:border-amber-600 dark:bg-transparent dark:text-amber-300 dark:hover:bg-amber-900/20">🔭 {t.tryNasa || "NASA APOD"}</a>
          </div>
        </div>
      </div>
    </ToolLayout>
  );
}
