"use client";

import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";

const metadata = {
  title: "Text Repeater",
  description:
    "Repeat any text or string a specified number of times. Free online text repeater tool.",
};

export default function TextRepeaterClient() {
  const [input, setInput] = useState("");
  const [count, setCount] = useState(5);
  const [separator, setSeparator] = useState("newline");
  const [result, setResult] = useState("");

  function handleRepeat() {
    if (!input) return;
    const sep = separator === "newline" ? "\n" : separator === "space" ? " " : separator === "comma" ? ", " : separator;
    setResult(Array(count).fill(input).join(sep));
  }

  return (
    <ToolLayout {...metadata}>
      <div className="flex flex-wrap items-center gap-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter text to repeat..."
          className="flex-1 rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-900"
        />
        <div className="flex items-center gap-2">
          <label className="text-sm text-zinc-500 dark:text-zinc-400">×</label>
          <input
            type="number"
            min={1}
            max={10000}
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
            className="w-20 rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-900"
          />
        </div>
        <select
          value={separator}
          onChange={(e) => setSeparator(e.target.value)}
          className="rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-900"
        >
          <option value="newline">New line</option>
          <option value="space">Space</option>
          <option value="comma">Comma</option>
          <option value="">No separator</option>
        </select>
      </div>

      <button
        onClick={handleRepeat}
        disabled={!input}
        className="mt-4 rounded-lg bg-blue-600 px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 disabled:opacity-50"
      >
        Repeat
      </button>

      {result && (
        <div className="mt-4">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm text-zinc-500 dark:text-zinc-400">
              Result ({result.length} characters)
            </span>
            <button
              onClick={() => navigator.clipboard.writeText(result)}
              className="rounded bg-zinc-200 px-3 py-1 text-xs font-medium text-zinc-700 transition-colors hover:bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
            >
              Copy
            </button>
          </div>
          <div className="whitespace-pre-wrap rounded-lg border border-zinc-200 bg-zinc-50 p-4 font-mono text-sm dark:border-zinc-800 dark:bg-zinc-900">
            {result}
          </div>
        </div>
      )}
    </ToolLayout>
  );
}
