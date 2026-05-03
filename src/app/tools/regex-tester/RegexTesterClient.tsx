"use client";

import { useState, useMemo } from "react";
import ToolLayout from "@/components/ToolLayout";

const metadata = {
  title: "Regex Tester",
  description:
    "Test and debug regular expressions with real-time match highlighting. Free online regex tester.",
};

export default function RegexTesterClient() {
  const [pattern, setPattern] = useState("");
  const [flags, setFlags] = useState("gi");
  const [text, setText] = useState("");

  const { matches, error } = useMemo(() => {
    if (!pattern || !text) return { matches: [], error: null };
    try {
      const regex = new RegExp(pattern, flags);
      const results: { match: string; index: number }[] = [];
      let match;
      let i = 0;
      while ((match = regex.exec(text)) !== null && i < 1000) {
        results.push({ match: match[0], index: match.index });
        if (!regex.global) break;
        i++;
      }
      return { matches: results, error: null };
    } catch (e) {
      return { matches: [], error: (e as Error).message };
    }
  }, [pattern, flags, text]);

  return (
    <ToolLayout {...metadata}>
      <div className="flex flex-wrap items-center gap-4">
        <div className="flex flex-1 items-center gap-1">
          <span className="text-zinc-400">/</span>
          <input
            type="text"
            value={pattern}
            onChange={(e) => setPattern(e.target.value)}
            placeholder="Enter regex pattern..."
            className="flex-1 rounded-lg border border-zinc-300 bg-white px-3 py-2 font-mono text-sm dark:border-zinc-700 dark:bg-zinc-900 dark:placeholder:text-zinc-600"
          />
          <span className="text-zinc-400">/</span>
          <input
            type="text"
            value={flags}
            onChange={(e) => setFlags(e.target.value)}
            placeholder="flags"
            className="w-16 rounded-lg border border-zinc-300 bg-white px-2 py-2 font-mono text-sm dark:border-zinc-700 dark:bg-zinc-900"
          />
        </div>
      </div>

      {error && (
        <div className="mt-4 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700 dark:border-red-800 dark:bg-red-950 dark:text-red-400">
          {error}
        </div>
      )}

      {matches.length > 0 && (
        <div className="mt-4">
          <h3 className="mb-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">
            {matches.length} match{matches.length !== 1 ? "es" : ""} found:
          </h3>
          <div className="flex flex-wrap gap-2">
            {matches.map((m, i) => (
              <span
                key={i}
                className="rounded bg-blue-100 px-2 py-1 font-mono text-sm text-blue-800 dark:bg-blue-900 dark:text-blue-200"
              >
                {m.match}
              </span>
            ))}
          </div>
        </div>
      )}

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text to test against..."
        className="mt-4 w-full rounded-lg border border-zinc-300 bg-white p-4 font-mono text-sm dark:border-zinc-700 dark:bg-zinc-900 dark:placeholder:text-zinc-600"
        rows={12}
      />
    </ToolLayout>
  );
}
