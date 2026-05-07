"use client";

import { useState, useCallback } from "react";
import ToolLayout from "@/components/ToolLayout";

const metadata = {
  title: "Random Number Generator",
  description:
    "Generate random numbers within a range with customizable options.",
  keywords: [
    "random number generator",
    "random number picker",
    "number generator",
    "RNG",
    "random integer",
    "lottery number generator",
  ],
};

export default function RandomNumberClient({ locale = "en", dict }: { locale?: string; dict?: Record<string, unknown> } = {}) {
  const [min, setMin] = useState("1");
  const [max, setMax] = useState("100");
  const [count, setCount] = useState(1);
  const [decimals, setDecimals] = useState(0);
  const [allowDuplicates, setAllowDuplicates] = useState(true);
  const [sortResult, setSortResult] = useState(false);
  const [numbers, setNumbers] = useState<number[]>([]);
  const rn = (dict as any)?.randomNumberGenerator || {};

  const handleGenerate = useCallback(() => {
    const lo = parseFloat(min);
    const hi = parseFloat(max);
    const n = parseInt(String(count));
    const d = parseInt(String(decimals));
    if (isNaN(lo) || isNaN(hi) || lo >= hi || n < 1) return;

    const maxAttempts = n * 100;
    const results: number[] = [];
    const seen = new Set<string>();

    for (let i = 0; i < maxAttempts && results.length < n; i++) {
      const rand = lo + Math.random() * (hi - lo);
      const rounded = parseFloat(rand.toFixed(Math.max(0, d)));
      const key = String(rounded);
      if (!allowDuplicates && seen.has(key)) continue;
      seen.add(key);
      results.push(rounded);
    }

    if (sortResult) results.sort((a, b) => a - b);
    setNumbers(results);
  }, [min, max, count, decimals, allowDuplicates, sortResult]);

  return (
    <ToolLayout {...metadata} locale={locale as any} dict={dict}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <label className="mb-1 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
            {rn.minimum || "Minimum"}
          </label>
          <input
            type="number"
            value={min}
            onChange={(e) => setMin(e.target.value)}
            className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-900"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
            {rn.maximum || "Maximum"}
          </label>
          <input
            type="number"
            value={max}
            onChange={(e) => setMax(e.target.value)}
            className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-900"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
            {rn.quantity || "Quantity"}
          </label>
          <input
            type="number"
            min={1}
            max={50}
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
            className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-900"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
            {rn.decimalPlaces || "Decimal Places"}
          </label>
          <input
            type="number"
            min={0}
            max={10}
            value={decimals}
            onChange={(e) => setDecimals(Number(e.target.value))}
            className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-900"
          />
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-6">
        <label className="flex items-center gap-2 text-sm text-zinc-700 dark:text-zinc-300">
          <input
            type="checkbox"
            checked={allowDuplicates}
            onChange={(e) => setAllowDuplicates(e.target.checked)}
            className="h-4 w-4 rounded border-zinc-300 text-blue-600"
          />
          {rn.allowDuplicates || "Allow Duplicates"}
        </label>
        <label className="flex items-center gap-2 text-sm text-zinc-700 dark:text-zinc-300">
          <input
            type="checkbox"
            checked={sortResult}
            onChange={(e) => setSortResult(e.target.checked)}
            className="h-4 w-4 rounded border-zinc-300 text-blue-600"
          />
          {rn.sortResults || "Sort Results"}
        </label>
      </div>

      <button
        onClick={handleGenerate}
        className="mt-6 rounded-lg bg-blue-600 px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
      >
        {rn.generate || "Generate"}
      </button>

      {numbers.length > 0 && (
        <div className="mt-4 rounded-lg border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900">
          <div className="flex flex-wrap gap-2">
            {numbers.map((n, i) => (
              <span
                key={i}
                className="rounded-full bg-blue-100 px-4 py-2 text-lg font-bold text-blue-700 dark:bg-blue-900 dark:text-blue-300"
              >
                {n}
              </span>
            ))}
          </div>
          <button
            onClick={() => navigator.clipboard.writeText(numbers.join(", "))}
            className="mt-3 rounded bg-zinc-200 px-3 py-1 text-xs font-medium text-zinc-600 transition-colors hover:bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700"
          >
            {rn.copyAll || "Copy All"}
          </button>
        </div>
      )}
    </ToolLayout>
  );
}
