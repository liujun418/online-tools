"use client";

import { useState, useMemo } from "react";
import ToolLayout from "@/components/ToolLayout";

const metadata = {
  title: "Remove Duplicate Lines",
  description:
      "Remove duplicate lines from text while preserving order. Clean up your lists instantly.",
  keywords: [
    "remove duplicate lines",
    "remove duplicates from text",
    "deduplicate text",
    "remove duplicate lines online",
    "unique lines tool",
    "text cleaner",
  ],
};

export default function RemoveDuplicateLinesClient({ locale = "en", dict }: { locale?: string; dict?: Record<string, unknown> } = {}) {
  const [input, setInput] = useState("");
  const [trimLines, setTrimLines] = useState(true);
  const [ignoreCase, setIgnoreCase] = useState(false);
  const rdl = (dict as any)?.removeDuplicateLines || {};

  const { result, removed } = useMemo(() => {
    if (!input) return { result: "", removed: 0 };
    const seen = new Set<string>();
    const lines: string[] = [];
    let removedCount = 0;
    for (const line of input.split("\n")) {
      const processed = trimLines ? line.trim() : line;
      const key = ignoreCase ? processed.toLowerCase() : processed;
      if (key === "" && processed === "") {
        lines.push(line);
        continue;
      }
      if (seen.has(key)) {
        removedCount++;
      } else {
        seen.add(key);
        lines.push(line);
      }
    }
    return { result: lines.join("\n"), removed: removedCount };
  }, [input, trimLines, ignoreCase]);

  return (
    <ToolLayout {...metadata} locale={locale as any} dict={dict}>
      <div className="flex flex-wrap items-center gap-4">
        <label className="flex items-center gap-2 text-sm text-zinc-700 dark:text-zinc-300">
          <input
            type="checkbox"
            checked={trimLines}
            onChange={(e) => setTrimLines(e.target.checked)}
            className="h-4 w-4 rounded border-zinc-300 text-blue-600"
          />
          {rdl.trimWhitespace || "Trim whitespace"}
        </label>
        <label className="flex items-center gap-2 text-sm text-zinc-700 dark:text-zinc-300">
          <input
            type="checkbox"
            checked={ignoreCase}
            onChange={(e) => setIgnoreCase(e.target.checked)}
            className="h-4 w-4 rounded border-zinc-300 text-blue-600"
          />
          {rdl.ignoreCase || "Ignore case"}
        </label>
      </div>

      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder={rdl.placeholder || "Paste text with duplicate lines..."}
        className="mt-4 w-full rounded-lg border border-zinc-300 bg-white p-4 font-mono text-sm dark:border-zinc-700 dark:bg-zinc-900"
        rows={12}
      />

      {result && (
        <div className="mt-4">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm text-green-600 dark:text-green-400">
              {rdl.removed?.replace("{{count}}", String(removed)).replace("{{s}}", removed !== 1 ? "s" : "") || `Removed ${removed} duplicate line${removed !== 1 ? "s" : ""}`}
            </span>
            <button
              onClick={() => navigator.clipboard.writeText(result)}
              className="rounded bg-zinc-200 px-3 py-1 text-xs font-medium text-zinc-700 transition-colors hover:bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
            >
              {rdl.copy || "Copy"}
            </button>
          </div>
          <textarea
            readOnly
            value={result}
            className="w-full rounded-lg border border-zinc-200 bg-zinc-50 p-4 font-mono text-sm dark:border-zinc-800 dark:bg-zinc-900"
            rows={12}
          />
        </div>
      )}
    </ToolLayout>
  );
}
