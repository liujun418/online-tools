"use client";

import { useState, useMemo } from "react";
import ToolLayout from "@/components/ToolLayout";

const metadata = {
  title: "ROI Calculator",
  description:
    "Calculate return on investment (ROI) percentage and profit. Free online ROI calculator.",
  keywords: [
    "roi calculator",
    "return on investment calculator",
    "roi percentage",
    "investment return calculator",
    "profit calculator",
    "roi formula",
  ],
};

export default function RoiCalculatorClient() {
  const [invested, setInvested] = useState("10000");
  const [returned, setReturned] = useState("15000");

  const result = useMemo(() => {
    const i = parseFloat(invested);
    const r = parseFloat(returned);
    if (isNaN(i) || isNaN(r) || i === 0) return null;
    const profit = r - i;
    const roi = (profit / i) * 100;
    return {
      profit: Math.round(profit * 100) / 100,
      roi: Math.round(roi * 100) / 100,
      isPositive: profit >= 0,
    };
  }, [invested, returned]);

  return (
    <ToolLayout {...metadata}>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
            Amount Invested ($)
          </label>
          <input
            type="number"
            value={invested}
            onChange={(e) => setInvested(e.target.value)}
            className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-900"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
            Amount Returned ($)
          </label>
          <input
            type="number"
            value={returned}
            onChange={(e) => setReturned(e.target.value)}
            className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-900"
          />
        </div>
      </div>

      {result && (
        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className={`rounded-lg border p-6 text-center ${result.isPositive ? "border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950" : "border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950"}`}>
            <div className="text-sm opacity-80">Profit / Loss</div>
            <div className={`text-3xl font-bold ${result.isPositive ? "text-green-700 dark:text-green-300" : "text-red-700 dark:text-red-300"}`}>
              {result.isPositive ? "+" : ""}${result.profit.toLocaleString()}
            </div>
          </div>
          <div className={`rounded-lg border p-6 text-center ${result.isPositive ? "border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950" : "border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950"}`}>
            <div className="text-sm opacity-80">ROI</div>
            <div className={`text-3xl font-bold ${result.isPositive ? "text-green-700 dark:text-green-300" : "text-red-700 dark:text-red-300"}`}>
              {result.isPositive ? "+" : ""}{result.roi}%
            </div>
          </div>
        </div>
      )}
    </ToolLayout>
  );
}
