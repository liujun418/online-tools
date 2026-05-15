"use client";

import { useState, useEffect, useCallback } from "react";
import ToolLayout from "@/components/ToolLayout";

const API_URL = "https://ai-toolbox-api-production.up.railway.app/api/random-quote";

const metadata = {
  title: "Random Inspirational Quote",
  description: "Get random inspirational quotes from famous authors. One-click refresh, copy to clipboard, light/dark themes. Free, no signup.",
  keywords: ["random quote", "inspirational quote", "famous quote", "quote generator", "motivational quote", "daily quote"],
  toolId: "random-quote",
};

const THEMES = [
  { id: "light" as const, bg: "bg-gradient-to-br from-amber-50 to-orange-50", text: "text-zinc-800", sub: "text-zinc-500", border: "border-amber-200" },
  { id: "sepia" as const, bg: "bg-gradient-to-br from-yellow-100 to-amber-100", text: "text-amber-950", sub: "text-amber-700", border: "border-amber-300" },
  { id: "dark" as const, bg: "bg-gradient-to-br from-zinc-800 to-zinc-900", text: "text-zinc-100", sub: "text-zinc-400", border: "border-zinc-600" },
];

export default function RandomQuoteClient({
  locale = "en", dict, titleOverride, descriptionOverride,
}: {
  locale?: string; dict?: Record<string, unknown>;
  titleOverride?: string; descriptionOverride?: string;
}) {
  const t = (dict as any)?.randomQuote || {};
  const tp = (dict as any)?.toolPage || {};
  const title = titleOverride || metadata.title;
  const description = descriptionOverride || metadata.description;

  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const [themeIdx, setThemeIdx] = useState(0);
  const theme = THEMES[themeIdx];

  const fetchQuote = useCallback(async () => {
    setLoading(true); setError(""); setCopied(false);
    try {
      const res = await fetch(API_URL);
      if (!res.ok) throw new Error("API error");
      const data = await res.json();
      if (data.content) { setContent(data.content); setAuthor(data.author || "Unknown"); }
    } catch { setError("Unable to load quote. Please try again."); }
    finally { setLoading(false); }
  }, []);

  useEffect(() => { fetchQuote(); }, [fetchQuote]);

  const copyQuote = () => {
    const text = `"${content}" — ${author}`;
    navigator.clipboard.writeText(text).then(() => { setCopied(true); setTimeout(() => setCopied(false), 2000); });
  };

  const cycleTheme = () => setThemeIdx((p) => (p + 1) % THEMES.length);

  return (
    <ToolLayout title={title} description={description} keywords={metadata.keywords} toolId={metadata.toolId} locale={locale as any} dict={dict}>
      <div className="mx-auto max-w-xl">
        {loading && (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-amber-600 border-t-transparent" />
            <p className="mt-4 text-sm text-zinc-500">{t.loading || "Loading quote..."}</p>
          </div>
        )}

        {error && (
          <div className="flex flex-col items-center py-20">
            <p className="text-sm text-red-500">{error}</p>
            <button onClick={fetchQuote} className="mt-4 rounded-lg bg-amber-600 px-4 py-2 text-sm font-semibold text-white hover:bg-amber-700">{tp.tryAgain || "Try Again"}</button>
          </div>
        )}

        {!loading && content && (
          <>
            {/* Quote card */}
            <div className={`rounded-2xl border ${theme.border} ${theme.bg} p-8 shadow-sm sm:p-10`}>
              <p className={`text-xl leading-relaxed sm:text-2xl ${theme.text}`}>
                &ldquo;{content}&rdquo;
              </p>
              <p className={`mt-6 text-sm font-medium ${theme.sub}`}>
                — {author}
              </p>
            </div>

            {/* Actions */}
            <div className="mt-4 flex gap-2">
              <button onClick={fetchQuote} disabled={loading}
                className="flex-1 rounded-lg border border-zinc-300 px-4 py-2.5 text-sm font-medium text-zinc-700 hover:bg-zinc-50 dark:border-zinc-600 dark:text-zinc-300 dark:hover:bg-zinc-800">
                🎲 {t.refresh || "New Quote"}
              </button>
              <button onClick={copyQuote}
                className="flex-1 rounded-lg bg-amber-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-amber-700 transition-colors">
                {copied ? "✓ " + (t.copied || "Copied!") : "📋 " + (t.copy || "Copy Quote")}
              </button>
              <button onClick={cycleTheme}
                className="rounded-lg border border-zinc-300 px-3 py-2.5 text-sm font-medium text-zinc-700 hover:bg-zinc-50 dark:border-zinc-600 dark:text-zinc-300 dark:hover:bg-zinc-800">
                🎨
              </button>
            </div>
          </>
        )}

        {/* Attribution */}
        <p className="mt-6 text-center text-xs text-zinc-400">
          {t.poweredBy || "Quotes via ZenQuotes API"} · {t.disclaimer || "For non-commercial use only. Authors retain all rights."}
        </p>

        {/* Referral */}
        <div className="mt-6 rounded-xl border border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50 p-4 text-center dark:border-blue-800 dark:from-blue-950/30 dark:to-indigo-950/20">
          <p className="text-sm font-medium text-blue-800 dark:text-blue-300">{t.referralText || "Want more inspiration? Try our other free tools!"}</p>
          <div className="mt-3 flex flex-wrap justify-center gap-2">
            <a href={`/${locale}/tools/pet-wallpaper`} className="rounded-lg bg-amber-600 px-4 py-2 text-sm font-semibold text-white hover:bg-amber-700">🐾 {t.tryPet || "Pet Wallpaper"}</a>
            <a href={`/${locale}/tools/bing-wallpaper`} className="rounded-lg border border-amber-300 bg-white px-4 py-2 text-sm font-semibold text-amber-700 hover:bg-amber-50 dark:border-amber-600 dark:bg-transparent dark:text-amber-300 dark:hover:bg-amber-900/20">🖼️ {t.tryBing || "Bing Wallpaper"}</a>
          </div>
        </div>
      </div>
    </ToolLayout>
  );
}
