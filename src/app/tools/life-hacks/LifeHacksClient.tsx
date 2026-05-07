"use client";

import { useState, useMemo, useCallback, useEffect } from "react";
import { lifeHacks, categories, type LifeHack } from "@/lib/lifeHacks";
import ToolLayout from "@/components/ToolLayout";
import { localeDir } from "@/lib/i18n";

const metadata = {
  title: "Life Hacks — Practical Tips for Everyday Problems",
  description:
    "Browse 100 practical life hacks organized by category. From cleaning tricks to kitchen shortcuts, find quick solutions for everyday problems.",
  keywords: [
    "life hacks",
    "practical tips",
    "home tips",
    "cleaning tricks",
    "kitchen hacks",
    "everyday tips",
  ],
  toolId: "life-hacks",
};

const categoryTranslations: Record<string, Record<string, string>> = {
  cleaning: { es: "Limpieza", ar: "التنظيف" },
  kitchen: { es: "Cocina", ar: "المطبخ" },
  storage: { es: "Almacenamiento", ar: "التخزين" },
  laundry: { es: "Lavandería", ar: "الغسيل" },
  home: { es: "Mantenimiento del hogar", ar: "صيانة المنزل" },
  quickfixes: { es: "Soluciones rápidas", ar: "إصلاحات سريعة" },
};

const PAGE_SIZE = 20;

function getLocalizedHack(locale: string, hack: LifeHack): { title: string; content: string } {
  if (locale === "es" && hack.titleEs && hack.contentEs) {
    return { title: hack.titleEs, content: hack.contentEs };
  }
  if (locale === "ar" && hack.titleAr && hack.contentAr) {
    return { title: hack.titleAr, content: hack.contentAr };
  }
  return { title: hack.title, content: hack.content };
}

function loadFavorites(): Set<string> {
  try {
    const stored = localStorage.getItem("tb_life_hacks_favorites");
    return stored ? new Set(JSON.parse(stored)) : new Set();
  } catch {
    return new Set();
  }
}

function loadHelpfulCounts(): Record<string, number> {
  try {
    const stored = localStorage.getItem("tb_life_hacks_helpful");
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
}

export default function LifeHacksClient({
  locale = "en",
  dict,
}: {
  locale?: string;
  dict?: Record<string, unknown>;
} = {}) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [tipOfDay, setTipOfDay] = useState<LifeHack>(() => {
    return lifeHacks[Math.floor(Math.random() * lifeHacks.length)];
  });
  const [expandedTips, setExpandedTips] = useState<Set<string>>(new Set());
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [favorites, setFavorites] = useState<Set<string>>(loadFavorites);
  const [helpfulCounts, setHelpfulCounts] = useState<Record<string, number>>(loadHelpfulCounts);
  const [copiedTip, setCopiedTip] = useState<string | null>(null);
  const [sortByHelpful, setSortByHelpful] = useState(false);
  const lh = (dict as any)?.lifeHacks || {};

  const dir = localeDir[locale as keyof typeof localeDir] || "ltr";

  // Persist favorites
  useEffect(() => {
    try {
      localStorage.setItem("tb_life_hacks_favorites", JSON.stringify(Array.from(favorites)));
    } catch {}
  }, [favorites]);

  // Persist helpful counts
  useEffect(() => {
    try {
      localStorage.setItem("tb_life_hacks_helpful", JSON.stringify(helpfulCounts));
    } catch {}
  }, [helpfulCounts]);

  // Reset pagination when filters change
  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [activeCategory, searchQuery]);

  const localizedCategories = useMemo(() => {
    return categories.map((cat) => ({
      ...cat,
      label: categoryTranslations[cat.id]?.[locale] || cat.label,
    }));
  }, [locale]);

  const filteredTips = useMemo(() => {
    let tips = lifeHacks;
    if (activeCategory === "favorites") {
      tips = tips.filter((t) => favorites.has(t.id));
    } else if (activeCategory !== "all") {
      tips = tips.filter((t) => t.category === activeCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      tips = tips.filter((t) => {
        const { title, content } = getLocalizedHack(locale, t);
        return title.toLowerCase().includes(q) || content.toLowerCase().includes(q);
      });
    }
    if (sortByHelpful) {
      tips = [...tips].sort((a, b) => (helpfulCounts[b.id] || 0) - (helpfulCounts[a.id] || 0));
    }
    return tips;
  }, [activeCategory, searchQuery, locale, favorites, sortByHelpful, helpfulCounts]);

  const visibleTips = useMemo(() => {
    return filteredTips.slice(0, visibleCount);
  }, [filteredTips, visibleCount]);

  const shuffleTipOfDay = useCallback(() => {
    let newTip: LifeHack;
    do {
      newTip = lifeHacks[Math.floor(Math.random() * lifeHacks.length)];
    } while (newTip.id === tipOfDay.id && lifeHacks.length > 1);
    setTipOfDay(newTip);
  }, [tipOfDay]);

  const toggleExpand = useCallback((id: string) => {
    setExpandedTips((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }, []);

  const toggleFavorite = useCallback((id: string) => {
    setFavorites((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }, []);

  const incrementHelpful = useCallback((id: string) => {
    setHelpfulCounts((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  }, []);

  const handleShareTip = useCallback(async (tip: LifeHack) => {
    const { title } = getLocalizedHack(locale, tip);
    const url = `${window.location.href.split("#")[0]}#${tip.id}`;
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (isMobile && navigator.share) {
      try {
        await navigator.share({ title, url, text: title });
        return;
      } catch {}
    }

    try {
      await navigator.clipboard.writeText(`${title} — ${url}`);
      setCopiedTip(tip.id);
      setTimeout(() => setCopiedTip(null), 2000);
    } catch {}
  }, [locale]);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: lifeHacks.length };
    categories.forEach((cat) => {
      counts[cat.id] = lifeHacks.filter((t) => t.category === cat.id).length;
    });
    counts.favorites = favorites.size;
    return counts;
  }, [favorites]);

  const tipOfDayLocalized = getLocalizedHack(locale, tipOfDay);

  return (
    <ToolLayout {...metadata} locale={locale as any} dict={dict}>
      <div className="space-y-8">
        {/* Tip of the Day */}
        <section className="rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 p-6 dark:from-amber-950/30 dark:to-orange-950/30">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-2xl">{tipOfDay.emoji}</span>
            <h2 className="text-lg font-semibold text-amber-800 dark:text-amber-200">
              {lh.tipOfDay || "Tip of the Day"}
            </h2>
          </div>
          <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
            {tipOfDayLocalized.title}
          </h3>
          <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
            {tipOfDayLocalized.content}
          </p>
          <button
            onClick={shuffleTipOfDay}
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-amber-500 px-5 py-2 text-sm font-medium text-white shadow-sm transition-all hover:bg-amber-600 hover:shadow-md active:scale-95"
          >
            ✨ {lh.newTip || "New Tip"}
          </button>
        </section>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => { setActiveCategory("all"); setSortByHelpful(false); }}
            className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-all ${
              activeCategory === "all"
                ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
                : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
            }`}
          >
            {lh.all || "All"} ({categoryCounts.all})
          </button>
          {localizedCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => { setActiveCategory(cat.id); setSortByHelpful(false); }}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-all ${
                activeCategory === cat.id
                  ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
                  : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
              }`}
            >
              {cat.emoji} {cat.label} ({categoryCounts[cat.id]})
            </button>
          ))}
          {favorites.size > 0 && (
            <button
              onClick={() => { setActiveCategory("favorites"); setSortByHelpful(false); }}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-all ${
                activeCategory === "favorites"
                  ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
                  : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
              }`}
            >
              ❤️ {lh.favorites || "Favorites"} ({categoryCounts.favorites})
            </button>
          )}
        </div>

        {/* Search */}
        <div className="relative">
          <input
            type="text"
            placeholder={lh.searchPlaceholder || "Search tips..."}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 pl-11 text-zinc-900 placeholder-zinc-400 shadow-sm transition-all focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/20 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:placeholder-zinc-500"
          />
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400">
            🔍
          </span>
        </div>

        {/* Result count and sort */}
        <div className="flex items-center justify-between">
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            {searchQuery || (activeCategory !== "all" && activeCategory !== "favorites")
              ? (lh.showing?.replace("{{shown}}", String(visibleTips.length)).replace("{{total}}", String(filteredTips.length)) || `Showing ${visibleTips.length} of ${filteredTips.length} tips`)
              : (lh.tipsCount?.replace("{{count}}", String(filteredTips.length)) || `${filteredTips.length} tips`)}
          </p>
          {filteredTips.length > 0 && (
            <button
              onClick={() => setSortByHelpful((p) => !p)}
              className={`text-sm font-medium transition-colors ${
                sortByHelpful
                  ? "text-amber-600 dark:text-amber-400"
                  : "text-zinc-500 hover:text-amber-600 dark:text-zinc-400 dark:hover:text-amber-400"
              }`}
            >
              👍 {lh.sortByHelpful || "Most helpful"}
            </button>
          )}
        </div>

        {/* Tip Cards Grid */}
        {visibleTips.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2">
            {visibleTips.map((tip) => {
              const localized = getLocalizedHack(locale, tip);
              const isFav = favorites.has(tip.id);
              const helpfulCount = helpfulCounts[tip.id] || 0;
              const isCopied = copiedTip === tip.id;

              return (
                <div
                  key={tip.id}
                  className="group rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5 dark:border-zinc-700 dark:bg-zinc-800/80"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-2xl shrink-0">{tip.emoji}</span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-semibold text-zinc-900 dark:text-white group-hover:text-amber-700 dark:group-hover:text-amber-300 transition-colors">
                          {localized.title}
                        </h3>
                        <div className="flex items-center gap-1 shrink-0">
                          <button
                            onClick={() => handleShareTip(tip)}
                            className="rounded-full p-1 text-zinc-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                            title={lh.share || "Share"}
                            aria-label={lh.share || "Share"}
                          >
                            {isCopied ? (
                              <svg className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                            ) : (
                              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342A8.968 8.968 0 0114.743 7.12a4.47 4.47 0 003.535-1.646A8.968 8.968 0 0120.393 12a4.47 4.47 0 00-1.646 3.535A8.968 8.968 0 0112 19.316a4.47 4.47 0 00-3.535-1.646A8.968 8.968 0 015.607 10.78a4.47 4.47 0 001.646-3.535A8.968 8.968 0 0114 5.265" />
                              </svg>
                            )}
                          </button>
                          <button
                            onClick={() => toggleFavorite(tip.id)}
                            className="rounded-full p-1 transition-colors"
                            title={isFav ? (lh.removeFromFavorites || "Remove from favorites") : (lh.addToFavorites || "Add to favorites")}
                            aria-label={isFav ? (lh.removeFromFavorites || "Remove from favorites") : (lh.addToFavorites || "Add to favorites")}
                          >
                            {isFav ? (
                              <svg className="h-4 w-4 text-red-500 fill-current" viewBox="0 0 24 24">
                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                              </svg>
                            ) : (
                              <svg className="h-4 w-4 text-zinc-400 hover:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                              </svg>
                            )}
                          </button>
                        </div>
                      </div>
                      <p
                        className={`mt-1 text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed ${
                          expandedTips.has(tip.id) ? "" : "line-clamp-2"
                        }`}
                        dir={locale === "ar" ? "rtl" : "ltr"}
                      >
                        {localized.content}
                      </p>
                      {!expandedTips.has(tip.id) && tip.content.length > 120 && (
                        <button
                          onClick={() => toggleExpand(tip.id)}
                          className="mt-1 text-xs font-medium text-amber-600 hover:text-amber-700 dark:text-amber-400 dark:hover:text-amber-300"
                        >
                          {lh.readMore || "Read more"}
                        </button>
                      )}
                      {expandedTips.has(tip.id) && (
                        <button
                          onClick={() => toggleExpand(tip.id)}
                          className="mt-1 text-xs font-medium text-amber-600 hover:text-amber-700 dark:text-amber-400 dark:hover:text-amber-300"
                        >
                          {lh.showLess || "Show less"}
                        </button>
                      )}
                      <div className="mt-2 flex items-center gap-2">
                        <span className="inline-block rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-500 dark:bg-zinc-700 dark:text-zinc-400">
                          {categoryTranslations[tip.category]?.[locale] || categories.find((c) => c.id === tip.category)?.label}
                        </span>
                        <button
                          onClick={() => incrementHelpful(tip.id)}
                          className="inline-flex items-center gap-1 rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-500 hover:text-amber-600 dark:bg-zinc-700 dark:text-zinc-400 dark:hover:text-amber-400 transition-colors"
                        >
                          👍 {lh.helpful || "Helpful"} {helpfulCount > 0 && `(${helpfulCount})`}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="rounded-xl border border-dashed border-zinc-300 bg-zinc-50 p-12 text-center dark:border-zinc-700 dark:bg-zinc-800/50">
            <span className="text-4xl mb-3 block">😕</span>
            <p className="text-zinc-600 dark:text-zinc-300 font-medium">
              {lh.noResults || "No tips match your search."}
            </p>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
              {lh.tryDifferent || "Try different keywords or clear your filters."}
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("all");
                setSortByHelpful(false);
              }}
              className="mt-4 text-sm font-medium text-amber-600 hover:text-amber-700 dark:text-amber-400"
            >
              {lh.clearFilters || "Clear all filters"}
            </button>
          </div>
        )}

        {/* Load More */}
        {visibleTips.length < filteredTips.length && (
          <div className="flex justify-center">
            <button
              onClick={() => setVisibleCount((prev) => prev + PAGE_SIZE)}
              className="rounded-full border border-zinc-300 bg-white px-6 py-2.5 text-sm font-medium text-zinc-700 shadow-sm transition-all hover:bg-zinc-50 hover:shadow-md dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
            >
              {lh.loadMore || `Load More (${filteredTips.length - visibleTips.length} remaining)`}
            </button>
          </div>
        )}
      </div>
    </ToolLayout>
  );
}
