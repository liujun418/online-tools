"use client";

import { useState, useEffect } from "react";

interface Suggestion {
  id: number;
  text: string;
  createdAt: string;
}

export default function AdminSuggestions() {
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);

  useEffect(() => {
    try {
      const data = JSON.parse(localStorage.getItem("tb_suggestions") || "[]");
      setSuggestions(data.reverse());
    } catch {
      setSuggestions([]);
    }
  }, []);

  function clearAll() {
    localStorage.removeItem("tb_suggestions");
    setSuggestions([]);
  }

  function removeSuggestion(id: number) {
    const updated = suggestions.filter((s) => s.id !== id);
    localStorage.setItem("tb_suggestions", JSON.stringify(updated));
    setSuggestions(updated);
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">
            User Suggestions
          </h1>
          <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
            Tools suggested by your visitors. Data is stored locally in this browser.
          </p>
        </div>
        {suggestions.length > 0 && (
          <button
            onClick={clearAll}
            className="rounded-lg border border-red-200 px-3 py-1.5 text-xs font-medium text-red-600 transition-colors hover:bg-red-50 dark:border-red-800 dark:text-red-400 dark:hover:bg-red-900/20"
          >
            Clear All
          </button>
        )}
      </div>

      {suggestions.length === 0 ? (
        <div className="rounded-xl border border-dashed border-zinc-300 bg-zinc-50 p-12 text-center dark:border-zinc-700 dark:bg-zinc-900">
          <p className="text-zinc-500 dark:text-zinc-400">
            No suggestions yet. Share your site to start collecting feedback!
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {suggestions.map((s) => (
            <div
              key={s.id}
              className="flex items-start justify-between gap-4 rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-700 dark:bg-zinc-900"
            >
              <div className="flex-1">
                <p className="text-sm text-zinc-900 dark:text-white">{s.text}</p>
                <p className="mt-1 text-xs text-zinc-400 dark:text-zinc-500">
                  {new Date(s.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>
              <button
                onClick={() => removeSuggestion(s.id)}
                className="shrink-0 rounded p-1 text-zinc-400 hover:text-red-500"
                aria-label="Remove"
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
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
