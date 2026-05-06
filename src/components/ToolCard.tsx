import Link from "next/link";
import { Tool } from "@/lib/tools";
import { Locale } from "@/lib/i18n";

const categoryColors: Record<Tool["category"], string> = {
  text: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400",
  developer: "bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-400",
  calculator: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400",
  converter: "bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-400",
};

const categoryLabels: Record<Tool["category"], Record<Locale, string>> = {
  text: { en: "Text", es: "Texto", ar: "نص" },
  developer: { en: "Dev", es: "Desarrollador", ar: "مطور" },
  calculator: { en: "Calculator", es: "Calculadora", ar: "حاسبة" },
  converter: { en: "Converter", es: "Conversor", ar: "محول" },
};

export default function ToolCard({ tool, locale = "en" }: { tool: Tool; locale?: Locale }) {
  const name = (tool as any).nameTranslations?.[locale] || tool.name;
  const description = (tool as any).descriptionTranslations?.[locale] || tool.description;
  const path = `/${locale}/tools/${tool.id}`;
  const catLabel = categoryLabels[tool.category]?.[locale] || categoryLabels[tool.category].en;

  return (
    <Link
      href={path}
      className="group flex flex-col gap-3 rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-blue-700"
    >
      <div className="flex items-start justify-between">
        <span className="text-3xl">{tool.icon}</span>
        <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${categoryColors[tool.category]}`}>
          {catLabel}
        </span>
      </div>
      <h3 className="text-lg font-semibold text-zinc-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
        {name}
      </h3>
      <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
        {description}
      </p>
    </Link>
  );
}
