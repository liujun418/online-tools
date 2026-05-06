"use client";

import { useState, useMemo, useCallback } from "react";
import { lifeHacks, categories, type LifeHack } from "@/lib/lifeHacks";
import ToolLayout from "@/components/ToolLayout";

const metadata = {
  title: "Life Hacks — 100 Practical Tips for Everyday Problems",
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

  const filteredTips = useMemo(() => {
    let tips = lifeHacks;
    if (activeCategory !== "all") {
      tips = tips.filter((t) => t.category === activeCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      tips = tips.filter(
        (t) =>
          t.title.toLowerCase().includes(q) ||
          t.content.toLowerCase().includes(q)
      );
    }
    return tips;
  }, [activeCategory, searchQuery]);

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

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: lifeHacks.length };
    categories.forEach((cat) => {
      counts[cat.id] = lifeHacks.filter((t) => t.category === cat.id).length;
    });
    return counts;
  }, []);

  return (
    <ToolLayout {...metadata} locale={locale as any} dict={dict}>
      <div className="space-y-8">
        {/* Tip of the Day */}
        <section className="rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 p-6 dark:from-amber-950/30 dark:to-orange-950/30">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-2xl">{tipOfDay.emoji}</span>
            <h2 className="text-lg font-semibold text-amber-800 dark:text-amber-200">
              Tip of the Day
            </h2>
          </div>
          <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
            {tipOfDay.title}
          </h3>
          <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
            {tipOfDay.content}
          </p>
          <button
            onClick={shuffleTipOfDay}
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-amber-500 px-5 py-2 text-sm font-medium text-white shadow-sm transition-all hover:bg-amber-600 hover:shadow-md active:scale-95"
          >
            ✨ New Tip
          </button>
        </section>

        {/* Category Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          <button
            onClick={() => setActiveCategory("all")}
            className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-all ${
              activeCategory === "all"
                ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
                : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
            }`}
          >
            All ({categoryCounts.all})
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-all ${
                activeCategory === cat.id
                  ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
                  : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
              }`}
            >
              {cat.emoji} {cat.label} ({categoryCounts[cat.id]})
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search tips..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 pl-11 text-zinc-900 placeholder-zinc-400 shadow-sm transition-all focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/20 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:placeholder-zinc-500"
          />
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400">
            🔍
          </span>
        </div>

        {/* Result count */}
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          {searchQuery || activeCategory !== "all"
            ? `Showing ${filteredTips.length} of ${lifeHacks.length} tips`
            : `${lifeHacks.length} tips`}
        </p>

        {/* Tip Cards Grid */}
        {filteredTips.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2">
            {filteredTips.map((tip) => (
              <div
                key={tip.id}
                className="group rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5 dark:border-zinc-700 dark:bg-zinc-800/80"
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl shrink-0">{tip.emoji}</span>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-zinc-900 dark:text-white group-hover:text-amber-700 dark:group-hover:text-amber-300 transition-colors">
                      {tip.title}
                    </h3>
                    <p
                      className={`mt-1 text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed ${
                        expandedTips.has(tip.id) ? "" : "line-clamp-2"
                      }`}
                    >
                      {tip.content}
                    </p>
                    {!expandedTips.has(tip.id) && tip.content.length > 120 && (
                      <button
                        onClick={() => toggleExpand(tip.id)}
                        className="mt-1 text-xs font-medium text-amber-600 hover:text-amber-700 dark:text-amber-400 dark:hover:text-amber-300"
                      >
                        Read more →
                      </button>
                    )}
                    {expandedTips.has(tip.id) && (
                      <button
                        onClick={() => toggleExpand(tip.id)}
                        className="mt-1 text-xs font-medium text-amber-600 hover:text-amber-700 dark:text-amber-400 dark:hover:text-amber-300"
                      >
                        Show less ←
                      </button>
                    )}
                    <span className="mt-2 inline-block rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-500 dark:bg-zinc-700 dark:text-zinc-400">
                      {categories.find((c) => c.id === tip.category)?.emoji}{" "}
                      {categories.find((c) => c.id === tip.category)?.label}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-dashed border-zinc-300 bg-zinc-50 p-12 text-center dark:border-zinc-700 dark:bg-zinc-800/50">
            <span className="text-4xl mb-3 block">😕</span>
            <p className="text-zinc-600 dark:text-zinc-300 font-medium">
              No tips match your search.
            </p>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
              Try different keywords or clear your filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("all");
              }}
              className="mt-4 text-sm font-medium text-amber-600 hover:text-amber-700 dark:text-amber-400"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </ToolLayout>
  );
}
