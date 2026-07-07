"use client";

import { useState, useMemo } from "react";
import ToolLayout from "@/components/ToolLayout";

const metadata = {
  title: "Text Sorter",
  description:
    "Sort lines of text alphabetically, by length, numerically, or randomly. Remove duplicates, ignore case, trim whitespace. Free online text sorter.",
  keywords: [
    "text sorter",
    "sort lines",
    "alphabetical sorter",
    "sort text online",
    "line sorter",
    "text organizer",
    "sort text alphabetically",
  ],
};

type SortMode = "az" | "za" | "length" | "length-desc" | "random" | "reverse" | "numeric";

export default function TextSorterClient({
  locale = "en",
  dict,
  titleOverride,
  descriptionOverride,
}: {
  locale?: string;
  dict?: Record<string, unknown>;
  titleOverride?: string;
  descriptionOverride?: string;
} = {}) {
  const [text, setText] = useState("");
  const [sortMode, setSortMode] = useState<SortMode>("az");
  const [removeDupes, setRemoveDupes] = useState(false);
  const [ignoreCase, setIgnoreCase] = useState(false);
  const [trimLines, setTrimLines] = useState(false);
  const ts = (dict as any)?.textSorter || {};

  const sorted = useMemo(() => {
    let lines = text.split("\n");
    if (trimLines) lines = lines.map((l) => l.trim());
    lines = lines.filter((l) => l !== "" || text.endsWith("\n") || text.includes("\n\n"));

    let processed = [...lines];

    // Sort
    switch (sortMode) {
      case "az":
        processed.sort((a, b) => {
          const ca = ignoreCase ? a.toLowerCase() : a;
          const cb = ignoreCase ? b.toLowerCase() : b;
          return ca.localeCompare(cb);
        });
        break;
      case "za":
        processed.sort((a, b) => {
          const ca = ignoreCase ? a.toLowerCase() : a;
          const cb = ignoreCase ? b.toLowerCase() : b;
          return cb.localeCompare(ca);
        });
        break;
      case "length":
        processed.sort((a, b) => a.length - b.length);
        break;
      case "length-desc":
        processed.sort((a, b) => b.length - a.length);
        break;
      case "random":
        for (let i = processed.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [processed[i], processed[j]] = [processed[j], processed[i]];
        }
        break;
      case "reverse":
        processed.reverse();
        break;
      case "numeric":
        processed.sort((a, b) => {
          const na = parseFloat(a);
          const nb = parseFloat(b);
          if (!isNaN(na) && !isNaN(nb)) return na - nb;
          if (!isNaN(na)) return -1;
          if (!isNaN(nb)) return 1;
          return a.localeCompare(b);
        });
        break;
    }

    // Remove duplicates
    if (removeDupes) {
      const seen = new Set<string>();
      processed = processed.filter((l) => {
        const key = ignoreCase ? l.toLowerCase() : l;
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
      });
    }

    return processed;
  }, [text, sortMode, removeDupes, ignoreCase, trimLines]);

  const modes: { key: SortMode; label: string }[] = [
    { key: "az", label: ts.sortAZ || "A → Z" },
    { key: "za", label: ts.sortZA || "Z → A" },
    { key: "length", label: ts.sortByLength || "By Length" },
    { key: "length-desc", label: ts.sortByLengthDesc || "By Length ↓" },
    { key: "random", label: ts.randomize || "Randomize" },
    { key: "reverse", label: ts.reverseOrder || "Reverse" },
    { key: "numeric", label: ts.numericSort || "Numeric" },
  ];

  return (
    <ToolLayout
      {...metadata}
      title={titleOverride || metadata.title}
      description={descriptionOverride || metadata.description}
      locale={locale as any}
      dict={dict}
    >
      <div className="grid gap-4 lg:grid-cols-2">
        {/* Input */}
        <div>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder={ts.placeholder || "Type or paste your text here..."}
            className="w-full rounded-lg border border-zinc-300 bg-white p-4 font-mono text-sm dark:border-zinc-700 dark:bg-zinc-900 dark:placeholder:text-zinc-600"
            rows={16}
          />
        </div>

        {/* Output */}
        <div>
          <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900 min-h-[384px]">
            {sorted.length > 0 ? (
              <pre className="font-mono text-sm text-zinc-700 dark:text-zinc-300 whitespace-pre-wrap">
                {sorted.join("\n")}
              </pre>
            ) : (
              <span className="text-sm italic text-zinc-400">
                {ts.emptyText || "Your sorted text will appear here"}
              </span>
            )}
          </div>
          <div className="mt-2 text-xs text-zinc-500 dark:text-zinc-400">
            {sorted.length} {sorted.length === 1 ? "line" : "lines"}
          </div>
        </div>
      </div>

      {/* Sort modes */}
      <div className="mt-4 flex flex-wrap gap-2">
        {modes.map((m) => (
          <button
            key={m.key}
            onClick={() => setSortMode(m.key)}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
              sortMode === m.key
                ? "bg-blue-600 text-white"
                : "bg-zinc-200 text-zinc-700 hover:bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
            }`}
          >
            {m.label}
          </button>
        ))}
      </div>

      {/* Options */}
      <div className="mt-4 flex flex-wrap gap-4">
        <label className="flex items-center gap-2 text-sm text-zinc-700 dark:text-zinc-300 cursor-pointer">
          <input
            type="checkbox"
            checked={removeDupes}
            onChange={(e) => setRemoveDupes(e.target.checked)}
            className="rounded border-zinc-300 dark:border-zinc-700"
          />
          {ts.removeDuplicates || "Remove Duplicates"}
        </label>
        <label className="flex items-center gap-2 text-sm text-zinc-700 dark:text-zinc-300 cursor-pointer">
          <input
            type="checkbox"
            checked={ignoreCase}
            onChange={(e) => setIgnoreCase(e.target.checked)}
            className="rounded border-zinc-300 dark:border-zinc-700"
          />
          {ts.ignoreCase || "Ignore Case"}
        </label>
        <label className="flex items-center gap-2 text-sm text-zinc-700 dark:text-zinc-300 cursor-pointer">
          <input
            type="checkbox"
            checked={trimLines}
            onChange={(e) => setTrimLines(e.target.checked)}
            className="rounded border-zinc-300 dark:border-zinc-700"
          />
          {ts.trimLines || "Trim Lines"}
        </label>
      </div>

      <div className="mt-4 flex gap-3">
        <button
          onClick={() => navigator.clipboard.writeText(sorted.join("\n"))}
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
        >
          Copy Sorted
        </button>
        <button
          onClick={() => setText("")}
          className="rounded-lg bg-zinc-200 px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
        >
          {ts.clear || "Clear"}
        </button>
      </div>
    </ToolLayout>
  );
}