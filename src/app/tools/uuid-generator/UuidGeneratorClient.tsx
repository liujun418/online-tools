"use client";

import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";

const metadata = {
  title: "UUID Generator",
  description:
    "Generate random UUID v4 identifiers for development. Free online UUID generator tool.",
};

function generateUUID(): string {
  return crypto.randomUUID();
}

export default function UuidGeneratorClient() {
  const [count, setCount] = useState(5);
  const [uuids, setUuids] = useState<string[]>([]);

  function handleGenerate() {
    const newUuids = Array.from({ length: count }, () => generateUUID());
    setUuids(newUuids);
  }

  function handleCopy(uuid: string) {
    navigator.clipboard.writeText(uuid);
  }

  function handleCopyAll() {
    navigator.clipboard.writeText(uuids.join("\n"));
  }

  return (
    <ToolLayout {...metadata}>
      <div className="flex items-center gap-4">
        <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
          Number of UUIDs:
        </label>
        <input
          type="number"
          min={1}
          max={50}
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
          className="w-20 rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-900"
        />
        <button
          onClick={handleGenerate}
          className="rounded-lg bg-blue-600 px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
        >
          Generate
        </button>
      </div>

      {uuids.length > 0 && (
        <>
          <button
            onClick={handleCopyAll}
            className="mt-4 rounded-lg bg-zinc-200 px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
          >
            Copy All
          </button>
          <div className="mt-4 rounded-lg border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900">
            {uuids.map((uuid, i) => (
              <div
                key={i}
                className="flex items-center justify-between border-b border-zinc-200 px-4 py-3 font-mono text-sm last:border-b-0 dark:border-zinc-800"
              >
                <span className="text-zinc-700 dark:text-zinc-300">{uuid}</span>
                <button
                  onClick={() => handleCopy(uuid)}
                  className="ml-2 rounded bg-zinc-200 px-2 py-1 text-xs text-zinc-600 transition-colors hover:bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700"
                >
                  Copy
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </ToolLayout>
  );
}
