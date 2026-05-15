"use client";

import { useState, useEffect, useCallback } from "react";
import { tools } from "@/lib/tools";
import ToolCard from "@/components/ToolCard";
import { Locale, localeDir } from "@/lib/i18n";

const categoryKeys = ["text", "developer", "calculator", "converter"] as const;

const categories = [
  { key: "text", label: "", id: "text-tools" },
  { key: "developer", label: "", id: "developer-tools" },
  { key: "calculator", label: "", id: "calculators" },
  { key: "converter", label: "", id: "converters" },
];

function PromoCarousel({ locale }: { locale: string }) {
  const slides = [
    {
      type: "ai" as const,
      href: "https://ai.toolboxonline.club",
      target: "_blank",
      gradient: "from-blue-600 to-purple-600",
      icon: "✨",
      title: "AI ToolBox — AI-Powered Photo & Document Tools",
      desc: "Background removal, avatar generation, photo restoration, PDF to Word — all in one place",
      cta: "Try Now →",
    },
    {
      type: "lateral" as const,
      href: `/${locale}/tools/lateral-thinking`,
      gradient: "from-indigo-800 via-purple-800 to-slate-900",
      icon: "🧩",
      title: "Lateral Thinking Puzzle — Free Brain Teasers",
      desc: "AI-generated mysteries, hints, and reveals. Test your reasoning skills now!",
      cta: "Play Now →",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    if (hovering) return;
    const t = setInterval(() => setCurrent((p) => (p + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, [hovering]);

  return (
    <div
      className="relative mb-12 overflow-hidden rounded-2xl"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <div className="relative h-28 sm:h-32">
        <div
          className="flex h-full transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((s, i) => (
            <a
              key={i}
              href={s.href}
              target={s.type === "ai" ? "_blank" : undefined}
              rel={s.type === "ai" ? "noopener noreferrer" : undefined}
              className={`flex h-full w-full shrink-0 items-center justify-between bg-gradient-to-r ${s.gradient} px-6 py-5 text-white shadow-lg sm:px-10`}
            >
              <div className="text-start">
                <p className="text-lg font-bold sm:text-xl">
                  {s.icon} {s.title}
                </p>
                <p className="mt-1 text-sm text-white/80">{s.desc}</p>
              </div>
              <span className="ml-4 shrink-0 rounded-lg bg-white/20 px-4 py-2 text-sm font-semibold backdrop-blur-sm transition-colors hover:bg-white/30">
                {s.cta}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-2.5 left-1/2 flex -translate-x-1/2 gap-1.5 rounded-full bg-black/20 px-2.5 py-1.5 backdrop-blur-sm">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 rounded-full transition-all ${
              i === current ? "w-4 bg-white" : "w-1.5 bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function HomeClient({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Record<string, unknown>;
}) {
  const [search, setSearch] = useState("");
  const query = search.toLowerCase().trim();

  const home = (dict as any).home || {};
  const cats = (dict as any).categories || {};
  const catList = categories.map((c) => ({
    ...c,
    label: (cats as any)[c.key] || c.key,
  }));

  const filteredTools = query
    ? tools.filter(
        (t) => {
          const name = (t as any).nameTranslations?.[locale] || t.name;
          const desc = (t as any).descriptionTranslations?.[locale] || t.description;
          return name.toLowerCase().includes(query) || desc.toLowerCase().includes(query);
        }
      )
    : tools;

  const dir = localeDir[locale];
  const toolsLabel = home.tools || "tools";
  const clearSearchLabel = home.clearSearch || "Clear search";

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6" dir={dir}>
      {/* Hero */}
      <section className="mb-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
          {home.heroTitle || "Free Online Tools"}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-500 dark:text-zinc-400">
          {home.heroDescription || "Fast, free, and easy-to-use online tools."}
        </p>
        <p className="mx-auto mt-2 text-sm text-zinc-400 dark:text-zinc-500">
          {tools.length} {home.toolsCount || `${toolsLabel} available now`}
        </p>

        {/* Search */}
        <div className="relative mx-auto mt-6 max-w-md">
          <svg
            className="pointer-events-none absolute start-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={home.searchPlaceholder || "Search tools..."}
            className="w-full rounded-lg border border-zinc-300 bg-white py-3 ps-10 pe-10 text-sm transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-zinc-700 dark:bg-zinc-900 dark:placeholder:text-zinc-600 dark:focus:border-blue-400 dark:focus:ring-blue-400/20"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute end-3 top-1/2 -translate-y-1/2 rounded text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300"
              aria-label={clearSearchLabel}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          )}
        </div>
      </section>

      {/* Promo Banner Carousel */}
      <PromoCarousel locale={locale} />

      {/* Filtered Results */}
      {query ? (
        <section>
          <h2 className="mb-6 text-2xl font-semibold text-zinc-900 dark:text-white">
            {filteredTools.length > 0
              ? `${filteredTools.length} ${home.resultsFor?.replace("{{s}}", filteredTools.length !== 1 ? "s" : "").replace("{{query}}", search) || `${filteredTools.length} ${toolsLabel}`}`
              : home.noResults || "No tools found"}
          </h2>
          {filteredTools.length > 0 && (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {filteredTools.map((tool) => (
                <ToolCard key={tool.id} tool={tool} locale={locale} />
              ))}
            </div>
          )}
        </section>
      ) : (
        catList.map((cat) => {
          const catTools = filteredTools.filter((t) => t.category === cat.key);
          return (
            <section id={cat.id} key={cat.key} className="mb-12">
              <h2 className="mb-6 flex items-baseline gap-3 text-2xl font-semibold text-zinc-900 dark:text-white">
                {cat.label}
                <span className="text-sm font-normal text-zinc-400 dark:text-zinc-500">
                  {catTools.length} {toolsLabel}
                </span>
              </h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {catTools.map((tool) => (
                  <ToolCard key={tool.id} tool={tool} locale={locale} />
                ))}
              </div>
            </section>
          );
        })
      )}
    </div>
  );
}
