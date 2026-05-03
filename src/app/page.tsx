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
        <div className="mx-auto mt-6 max-w-md">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search tools..."
            className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-sm dark:border-zinc-700 dark:bg-zinc-900 dark:placeholder:text-zinc-600"
          />
        </div>
      </section>

      {/* Filtered Results */}
      {query ? (
        <section>
          <h2 className="mb-6 text-2xl font-semibold text-zinc-900 dark:text-white">
            {filteredTools.length > 0
              ? `Results for "${search}"`
              : "No tools found"}
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {filteredTools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </section>
      ) : (
        categories.map((cat) => {
          const catTools = filteredTools.filter((t) => t.category === cat.key);
          return (
            <section id={cat.id} key={cat.key} className="mb-12">
              <h2 className="mb-6 text-2xl font-semibold text-zinc-900 dark:text-white">
                {cat.label}
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
