"use client";

import { useState, useCallback, useRef, useMemo } from "react";
import { foodItems, foodCategories, type FoodItem } from "@/lib/foodPicker";
import ToolLayout from "@/components/ToolLayout";

const metadata = {
  title: "What Should I Eat? — Random Food Picker",
  description: "Can't decide what to eat? Let our random food picker decide! Browse western lunch, dinner, diet meals & comfort food. One-click random pick, calorie reference, block foods you don't like. Free & fun.",
  keywords: [
    "what should I eat", "random food picker", "meal decision wheel",
    "food picker", "lunch picker", "dinner ideas", "what to eat generator",
    "random lunch", "meal ideas", "food decision maker",
    "free food picker", "whats for lunch", "meal planner", "dinner spinner",
  ],
  toolId: "food-picker",
};

function getLocalized(item: FoodItem, locale: string): { name: string; desc: string } {
  if (locale === "es" && item.nameEs) return { name: item.nameEs, desc: item.descEs };
  if (locale === "ar" && item.nameAr) return { name: item.nameAr, desc: item.descAr };
  return { name: item.name, desc: item.desc };
}

function getCategoryLocalized(cat: typeof foodCategories[0], locale: string) {
  return {
    ...cat,
    name: locale === "es" ? cat.nameEs : locale === "ar" ? cat.nameAr : cat.name,
  };
}

const COLORS = [
  "from-amber-100 to-orange-100 border-amber-300 dark:from-amber-950/40 dark:to-orange-950/30 dark:border-amber-700",
  "from-emerald-100 to-teal-100 border-emerald-300 dark:from-emerald-950/40 dark:to-teal-950/30 dark:border-emerald-700",
  "from-sky-100 to-blue-100 border-sky-300 dark:from-sky-950/40 dark:to-blue-950/30 dark:border-sky-700",
  "from-rose-100 to-pink-100 border-rose-300 dark:from-rose-950/40 dark:to-pink-950/30 dark:border-rose-700",
  "from-violet-100 to-purple-100 border-violet-300 dark:from-violet-950/40 dark:to-purple-950/30 dark:border-violet-700",
];

export default function FoodPickerClient({
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
  const fp = (dict as any)?.foodPicker || {};
  const tp = (dict as any)?.toolPage || {};
  const title = titleOverride || metadata.title;
  const description = descriptionOverride || metadata.description;

  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [picked, setPicked] = useState<FoodItem | null>(null);
  const [spinning, setSpinning] = useState(false);
  const [colorIdx, setColorIdx] = useState(0);
  const [blocked, setBlocked] = useState<Set<string>>(new Set());
  const [showBlocked, setShowBlocked] = useState(false);
  const [copied, setCopied] = useState(false);
  const [animKey, setAnimKey] = useState(0);
  const spinRef = useRef<NodeJS.Timeout | null>(null);

  const available = useMemo(() => {
    let items = activeCategory === "all"
      ? foodItems
      : foodItems.filter((f) => f.category === activeCategory);
    items = items.filter((f) => !blocked.has(f.id));
    return items;
  }, [activeCategory, blocked]);

  const currentCat = useMemo(() => {
    if (activeCategory === "all") return null;
    return foodCategories.find((c) => c.id === activeCategory);
  }, [activeCategory]);

  const localizedCat = currentCat ? getCategoryLocalized(currentCat, locale) : null;

  const spin = useCallback(() => {
    if (available.length === 0) return;
    if (spinRef.current) clearInterval(spinRef.current);
    setSpinning(true);
    setCopied(false);

    let count = 0;
    const total = 15;
    spinRef.current = setInterval(() => {
      const item = available[Math.floor(Math.random() * available.length)];
      setPicked(item);
      setColorIdx((p) => (p + 1) % COLORS.length);
      setAnimKey((k) => k + 1);
      count++;
      if (count >= total) {
        clearInterval(spinRef.current!);
        spinRef.current = null;
        const final = available[Math.floor(Math.random() * available.length)];
        setPicked(final);
        setColorIdx((p) => (p + 1) % COLORS.length);
        setSpinning(false);
      }
    }, 80);
  }, [available]);

  const blockItem = useCallback((id: string) => {
    setBlocked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) { next.delete(id); } else { next.add(id); }
      return next;
    });
  }, []);

  const copyText = useCallback(() => {
    if (!picked) return;
    const loc = getLocalized(picked, locale);
    const text = `${fp.decided || "I decided to eat"}: ${picked.emoji} ${loc.name}\n${loc.desc}\n${fp.calories || "Calories"}: ${picked.calories}\n— ${fp.generatedBy || "via ToolBoxOnline Food Picker"}`;
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [picked, locale, fp]);

  const blockedItems = useMemo(() =>
    foodItems.filter((f) => blocked.has(f.id))
  , [blocked]);

  const referralSection = (
    <div className="rounded-xl border border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50 p-4 text-center dark:border-blue-800 dark:from-blue-950/30 dark:to-indigo-950/20">
      <p className="text-sm font-medium text-blue-800 dark:text-blue-300">
        {fp.referralText || "Want more fun? Try our other free tools!"}
      </p>
      <div className="mt-3 flex flex-wrap justify-center gap-2">
        <a href={`/${locale}/tools/random-quote`} className="rounded-lg bg-amber-600 px-4 py-2 text-sm font-semibold text-white hover:bg-amber-700 transition-colors">💬 {fp.tryQuote || "Random Quote"}</a>
        <a href={`/${locale}/tools/crypto-price`} className="rounded-lg border border-amber-300 bg-white px-4 py-2 text-sm font-semibold text-amber-700 hover:bg-amber-50 dark:border-amber-600 dark:bg-transparent dark:text-amber-300 dark:hover:bg-amber-900/20 transition-colors">📊 {fp.tryCrypto || "Crypto Prices"}</a>
        <a href={`/${locale}/tools/life-hacks`} className="rounded-lg border border-amber-300 bg-white px-4 py-2 text-sm font-semibold text-amber-700 hover:bg-amber-50 dark:border-amber-600 dark:bg-transparent dark:text-amber-300 dark:hover:bg-amber-900/20 transition-colors">💡 {fp.tryLifeHacks || "Life Hacks"}</a>
      </div>
    </div>
  );

  return (
    <ToolLayout title={title} description={description} keywords={metadata.keywords} toolId={metadata.toolId} locale={locale as any} dict={dict} referralChildren={referralSection}>
      <div className="mx-auto max-w-2xl">
        {/* Category Tabs */}
        <div className="mb-6">
          <p className="mb-3 text-sm font-medium text-zinc-600 dark:text-zinc-300">
            {fp.chooseCategory || "Choose a category and spin!"}
          </p>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => { setActiveCategory("all"); setPicked(null); }}
              className={`rounded-full px-4 py-2 text-sm font-medium border transition-all ${
                activeCategory === "all"
                  ? "bg-zinc-900 text-white border-zinc-900 dark:bg-white dark:text-zinc-900 dark:border-white"
                  : "bg-white text-zinc-600 border-zinc-200 hover:border-zinc-400 dark:bg-zinc-800/50 dark:text-zinc-400 dark:border-zinc-700 dark:hover:border-zinc-500"
              }`}
            >
              🎲 {fp.all || "All"}
            </button>
            {foodCategories.map((cat) => {
              const lcat = getCategoryLocalized(cat, locale);
              return (
                <button
                  key={cat.id}
                  onClick={() => { setActiveCategory(cat.id); setPicked(null); }}
                  className={`rounded-full px-4 py-2 text-sm font-medium border transition-all ${
                    activeCategory === cat.id
                      ? "bg-zinc-900 text-white border-zinc-900 dark:bg-white dark:text-zinc-900 dark:border-white"
                      : "bg-white text-zinc-600 border-zinc-200 hover:border-zinc-400 dark:bg-zinc-800/50 dark:text-zinc-400 dark:border-zinc-700 dark:hover:border-zinc-500"
                  }`}
                >
                  {lcat.icon} {lcat.name}
                </button>
              );
            })}
          </div>
          <p className="mt-2 text-xs text-zinc-400">
            {available.length} {fp.available || "available"} {activeCategory === "all" ? fp.total || "total" : ""}
          </p>
        </div>

        {/* Card */}
        <div className="relative mx-auto max-w-sm" style={{ perspective: "1000px" }}>
          <div
            key={animKey}
            className={`relative w-full rounded-2xl border-2 p-8 sm:p-10 shadow-lg bg-gradient-to-br ${COLORS[colorIdx]} transition-all duration-300`}
            style={{
              minHeight: "280px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              animation: spinning ? "cardFlip 0.15s ease-in-out" : "none",
            }}
          >
            {picked ? (
              <>
                <span className="text-6xl sm:text-7xl mb-4" role="img" aria-label={picked.name}>
                  {picked.emoji}
                </span>
                <h3 className="text-xl font-bold text-zinc-800 dark:text-zinc-100 sm:text-2xl">
                  {getLocalized(picked, locale).name}
                </h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  {getLocalized(picked, locale).desc}
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-white/60 dark:bg-zinc-800/60 px-3 py-1 text-xs font-medium text-zinc-600 dark:text-zinc-300 backdrop-blur-sm">
                    🔥 {picked.calories}
                  </span>
                  {localizedCat && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-white/60 dark:bg-zinc-800/60 px-3 py-1 text-xs font-medium text-zinc-600 dark:text-zinc-300 backdrop-blur-sm">
                      {localizedCat.icon} {localizedCat.name}
                    </span>
                  )}
                </div>
              </>
            ) : (
              <div className="flex flex-col items-center space-y-4 text-zinc-400 dark:text-zinc-500">
                <span className="text-6xl">🍽️</span>
                <p className="text-sm font-medium">{fp.tapToSpin || "Press the button below to spin!"}</p>
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex flex-wrap gap-3 justify-center">
          <button
            onClick={spin}
            disabled={spinning || available.length === 0}
            className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-8 py-3.5 text-base font-bold text-white shadow-lg shadow-amber-500/25 hover:from-amber-600 hover:to-orange-600 hover:shadow-xl hover:scale-105 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-300"
          >
            <span className={`${spinning ? "animate-spin" : ""} text-xl`}>🎲</span>
            {spinning ? (fp.spinning || "Spinning...") : (fp.spin || "Pick My Meal!")}
          </button>

          {picked && (
            <>
              <button
                onClick={copyText}
                className="inline-flex items-center gap-2 rounded-full border-2 border-zinc-300 dark:border-zinc-600 px-6 py-3 text-sm font-semibold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all"
              >
                {copied ? "✅ " + (tp.copied || "Copied!") : "📋 " + (fp.copy || "Copy")}
              </button>
              <button
                onClick={() => blockItem(picked.id)}
                className={`inline-flex items-center gap-2 rounded-full border-2 px-6 py-3 text-sm font-semibold transition-all ${
                  blocked.has(picked.id)
                    ? "border-red-300 bg-red-50 text-red-600 dark:border-red-700 dark:bg-red-950/30 dark:text-red-400"
                    : "border-zinc-300 dark:border-zinc-600 text-zinc-500 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800"
                }`}
                title={blocked.has(picked.id) ? (fp.unblock || "Unblock this food") : (fp.block || "Not interested? Block it")}
              >
                {blocked.has(picked.id) ? "✅ " + (fp.blocked || "Blocked") : "🚫 " + (fp.block || "Not for me")}
              </button>
            </>
          )}
        </div>

        {available.length === 0 && (
          <p className="mt-4 text-center text-sm text-red-500 dark:text-red-400">
            {fp.allBlocked || "All foods in this category are blocked! Unblock some or switch categories."}
          </p>
        )}

        {/* Blocked list */}
        {blocked.size > 0 && (
          <div className="mt-6">
            <button
              onClick={() => setShowBlocked(!showBlocked)}
              className="text-xs font-medium text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 underline underline-offset-2"
            >
              {showBlocked ? (fp.hideBlocked || "Hide blocked") : `${fp.blockedList || "Blocked foods"} (${blocked.size})`}
            </button>
            {showBlocked && blockedItems.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-2">
                {blockedItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => blockItem(item.id)}
                    className="inline-flex items-center gap-1 rounded-full border border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-950/20 px-3 py-1 text-xs text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-950/40 transition-all"
                  >
                    {item.emoji} {getLocalized(item, locale).name} ✕
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Disclaimer */}
        <p className="mt-8 text-center text-xs text-zinc-400 leading-relaxed">
          🎮 {fp.disclaimer || "This food picker is for entertainment purposes only. All food suggestions and calorie values are approximate and for reference only. Always consider your dietary needs, allergies, and personal preferences when choosing meals. We are not responsible for any food-related decisions made based on this tool."}
        </p>

        {/* Global CSS keyframes for card flip */}
        <style jsx global>{`
          @keyframes cardFlip {
            0% { transform: rotateY(0deg) scale(1); }
            50% { transform: rotateY(90deg) scale(0.95); }
            100% { transform: rotateY(0deg) scale(1); }
          }
        `}</style>
      </div>
    </ToolLayout>
  );
}
