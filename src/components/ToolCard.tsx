import Link from "next/link";
import { Tool } from "@/lib/tools";

const categoryColors: Record<Tool["category"], string> = {
  text: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400",
  developer: "bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-400",
  calculator: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400",
  converter: "bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-400",
};

const categoryLabels: Record<Tool["category"], string> = {
  text: "Text",
  developer: "Dev",
  calculator: "Calculator",
  converter: "Converter",
};

export default function ToolCard({ tool }: { tool: Tool }) {
  return (
    <Link
      href={tool.path}
      className="group flex flex-col gap-3 rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-blue-700"
    >
      <div className="flex items-start justify-between">
        <span className="text-3xl">{tool.icon}</span>
        <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${categoryColors[tool.category]}`}>
          {categoryLabels[tool.category]}
        </span>
      </div>
      <h3 className="text-lg font-semibold text-zinc-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
        {tool.name}
      </h3>
      <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
        {tool.description}
      </p>
    </Link>
  );
}
