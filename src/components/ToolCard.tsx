"use client";

import { useState, useEffect } from "react";
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

function isFavorite(id: string): boolean {
  try {
    const favs = JSON.parse(localStorage.getItem("tb_favorites") || "[]");
    return favs.includes(id);
  } catch {
    return false;
  }
}

function toggleFavorite(id: string): boolean {
  try {
    const favs = JSON.parse(localStorage.getItem("tb_favorites") || "[]");
    const next = favs.includes(id)
      ? favs.filter((f: string) => f !== id)
      : [...favs, id];
    localStorage.setItem("tb_favorites", JSON.stringify(next));
    return !favs.includes(id);
  } catch {
    return false;
  }
}

export default function ToolCard({ tool }: { tool: Tool }) {
  const [fav, setFav] = useState(false);

  useEffect(() => {
    setFav(isFavorite(tool.id));
  }, [tool.id]);

  function handleFavorite(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    setFav(toggleFavorite(tool.id));
  }

  return (
    <Link
      href={tool.path}
      className="group relative flex flex-col gap-3 rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-blue-700"
    >
      {/* Favorite button */}
      <button
        onClick={handleFavorite}
        className="absolute right-3 top-3 z-10 rounded-full p-1 text-zinc-300 transition-colors hover:text-zinc-500 dark:text-zinc-600 dark:hover:text-zinc-400"
        aria-label={fav ? "Remove from favorites" : "Add to favorites"}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill={fav ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={fav ? "text-amber-500" : ""}
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      </button>

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
