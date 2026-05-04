"use client";

import { useState } from "react";
import { tools } from "@/lib/tools";
import ToolCard from "@/components/ToolCard";

const categories = [
  { key: "text", label: "Text Tools", id: "text-tools" },
  { key: "developer", label: "Developer Tools", id: "developer-tools" },
  { key: "calculator", label: "Calculators", id: "calculators" },
  { key: "converter", label: "Converters", id: "converters" },
];

export default function Home() {
  const [search, setSearch] = useState("");
  const query = search.toLowerCase().trim();

  const filteredTools = query
    ? tools.filter(
        (t) =>
          t.name.toLowerCase().includes(query) ||
          t.description.toLowerCase().includes(query)
      )
    : tools;

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      {/* Hero */}
      <section className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
          Free Online Tools
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-500 dark:text-zinc-400">
          Fast, free, and easy-to-use online tools. No signup required.
          Everything runs in your browser — your data stays private.
        </p>
        <p className="mx-auto mt-2 text-sm text-zinc-400 dark:text-zinc-500">
          {tools.length} tools available now, more coming soon
        </p>

        {/* Search */}
        <div className="relative mx-auto mt-6 max-w-md">
          <svg
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400"
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
            placeholder="Search tools..."
            className="w-full rounded-lg border border-zinc-300 bg-white py-3 pl-10 pr-10 text-sm transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-zinc-700 dark:bg-zinc-900 dark:placeholder:text-zinc-600 dark:focus:border-blue-400 dark:focus:ring-blue-400/20"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300"
              aria-label="Clear search"
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

      {/* Filtered Results */}
      {query ? (
        <section>
          <h2 className="mb-6 text-2xl font-semibold text-zinc-900 dark:text-white">
            {filteredTools.length > 0
              ? `${filteredTools.length} result${filteredTools.length !== 1 ? "s" : ""} for "${search}"`
              : "No tools found"}
          </h2>
          {filteredTools.length > 0 && (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {filteredTools.map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>
          )}
        </section>
      ) : (
        categories.map((cat) => {
          const catTools = filteredTools.filter((t) => t.category === cat.key);
          return (
            <section id={cat.id} key={cat.key} className="mb-12">
              <h2 className="mb-6 flex items-baseline gap-3 text-2xl font-semibold text-zinc-900 dark:text-white">
                {cat.label}
                <span className="text-sm font-normal text-zinc-400 dark:text-zinc-500">
                  {catTools.length} tool{catTools.length !== 1 ? "s" : ""}
                </span>
              </h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {catTools.map((tool) => (
                  <ToolCard key={tool.id} tool={tool} />
                ))}
              </div>
            </section>
          );
        })
      )}
    </div>
  );
}
