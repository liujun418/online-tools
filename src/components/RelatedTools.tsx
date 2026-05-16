"use client";

import Link from "next/link";
import { tools, type Tool } from "@/lib/tools";
import { Locale } from "@/lib/i18n";

const categoryColors: Record<string, string> = {
  text: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400",
  developer: "bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-400",
  calculator: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400",
  reference: "bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-400",
  media: "bg-pink-100 text-pink-700 dark:bg-pink-900/40 dark:text-pink-400",
};

const catLabels: Record<string, Record<Locale, string>> = {
  text: { en: "Text", es: "Texto", ar: "نص" },
  developer: { en: "Dev", es: "Desarrollador", ar: "مطور" },
  calculator: { en: "Calculator", es: "Calculadora", ar: "حاسبة" },
  reference: { en: "Reference", es: "Referencia", ar: "مرجع" },
  media: { en: "Media", es: "Media", ar: "وسائط" },
};

function getRelatedTools(toolId: string): Tool[] {
  const current = tools.find((t) => t.id === toolId);
  if (!current) return [];
  return tools
    .filter((t) => t.category === current.category && t.id !== toolId)
    .sort(() => Math.random() - 0.5)
    .slice(0, 4);
}

function RelatedCard({ tool, locale }: { tool: Tool; locale: Locale }) {
  const name = (tool as any).nameTranslations?.[locale] || tool.name;
  const desc = (tool as any).descriptionTranslations?.[locale] || tool.description;
  const path = `/${locale}/tools/${tool.id}`;
  const catLabel = catLabels[tool.category]?.[locale] || tool.category;

  return (
    <Link
      href={path}
      className="group flex flex-col gap-2 rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-blue-700"
    >
      <div className="flex items-center justify-between">
        <span className="text-2xl">{tool.icon}</span>
        <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${categoryColors[tool.category]}`}>
          {catLabel}
        </span>
      </div>
      <h3 className="text-sm font-semibold text-zinc-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
        {name}
      </h3>
      <p className="text-xs leading-relaxed text-zinc-500 dark:text-zinc-400 line-clamp-2">
        {desc}
      </p>
    </Link>
  );
}

export default function RelatedTools({ toolId, locale = "en", dict }: { toolId: string; locale?: Locale; dict?: Record<string, unknown> }) {
  const related = getRelatedTools(toolId);
  if (related.length === 0) return null;

  const title = ((dict as any)?.toolPage as any)?.relatedTools || "Related Tools";

  return (
    <section className="mt-12 border-t border-zinc-200 pt-8 dark:border-zinc-800">
      <h2 className="mb-6 text-xl font-semibold text-zinc-900 dark:text-white">
        {title}
      </h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {related.map((t) => (
          <RelatedCard key={t.id} tool={t} locale={locale} />
        ))}
      </div>
    </section>
  );
}
