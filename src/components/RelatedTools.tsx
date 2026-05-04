"use client";

import Link from "next/link";
import { tools, type Tool } from "@/lib/tools";

const categoryColors: Record<string, string> = {
  text: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400",
  developer: "bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-400",
  calculator: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400",
  converter: "bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-400",
};

function getRelatedTools(toolId: string): Tool[] {
  const current = tools.find((t) => t.id === toolId);
  if (!current) return [];
  return tools
    .filter((t) => t.category === current.category && t.id !== toolId)
    .sort(() => Math.random() - 0.5)
    .slice(0, 4);
}

function RelatedCard({ tool }: { tool: Tool }) {
  return (
    <Link
      href={tool.path}
      className="group flex flex-col gap-2 rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-blue-700"
    >
      <div className="flex items-center justify-between">
        <span className="text-2xl">{tool.icon}</span>
        <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${categoryColors[tool.category]}`}>
          {tool.category.charAt(0).toUpperCase() + tool.category.slice(1)}
        </span>
      </div>
      <h3 className="text-sm font-semibold text-zinc-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
        {tool.name}
      </h3>
      <p className="text-xs leading-relaxed text-zinc-500 dark:text-zinc-400 line-clamp-2">
        {tool.description}
      </p>
    </Link>
  );
}

export default function RelatedTools({ toolId }: { toolId: string }) {
  const related = getRelatedTools(toolId);
  if (related.length === 0) return null;

  return (
    <section className="mt-12 border-t border-zinc-200 pt-8 dark:border-zinc-800">
      <h2 className="mb-6 text-xl font-semibold text-zinc-900 dark:text-white">
        Related Tools
      </h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {related.map((t) => (
          <RelatedCard key={t.id} tool={t} />
        ))}
      </div>
    </section>
  );
}
