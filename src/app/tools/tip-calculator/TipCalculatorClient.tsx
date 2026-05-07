"use client";

import { useState, useMemo } from "react";
import ToolLayout from "@/components/ToolLayout";

const metadata = {
  title: "Tip Calculator",
  description:
    "Calculate tip amount, split the bill, and figure out per-person cost.",
  keywords: [
    "tip calculator",
    "gratuity calculator",
    "split bill calculator",
    "restaurant tip calculator",
    "tip percentage",
    "bill splitter",
  ],
};

const tipPresets = [10, 15, 18, 20, 25];

export default function TipCalculatorClient({ locale = "en", dict }: { locale?: string; dict?: Record<string, unknown> } = {}) {
  const [bill, setBill] = useState("50");
  const [tipPercent, setTipPercent] = useState("15");
  const [split, setSplit] = useState("1");
  const tc = (dict as any)?.tipCalculator || {};

  const result = useMemo(() => {
    const b = parseFloat(bill);
    const t = parseFloat(tipPercent);
    const s = parseInt(split) || 1;
    if (isNaN(b) || isNaN(t) || b <= 0 || t < 0) return null;

    const tipAmount = b * (t / 100);
    const total = b + tipAmount;
    const perPerson = total / Math.max(1, s);
    const tipPerPerson = tipAmount / Math.max(1, s);

    return {
      bill: b,
      tipPercent: t,
      tipAmount: Math.round(tipAmount * 100) / 100,
      total: Math.round(total * 100) / 100,
      split: Math.max(1, s),
      perPerson: Math.round(perPerson * 100) / 100,
      tipPerPerson: Math.round(tipPerPerson * 100) / 100,
    };
  }, [bill, tipPercent, split]);

  return (
    <ToolLayout {...metadata} locale={locale as any} dict={dict}>
      <div className="grid gap-4 sm:grid-cols-3">
        <div>
          <label className="mb-1 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
            {tc.billAmount || "Bill Amount ($)"}
          </label>
          <input
            type="number"
            value={bill}
            onChange={(e) => setBill(e.target.value)}
            className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-900"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
            {tc.tipPercentage || "Tip Percentage (%)"}
          </label>
          <div className="flex gap-2">
            <input
              type="number"
              value={tipPercent}
              onChange={(e) => setTipPercent(e.target.value)}
              className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-900"
            />
          </div>
          <div className="mt-2 flex flex-wrap gap-2">
            {tipPresets.map((p) => (
              <button
                key={p}
                onClick={() => setTipPercent(String(p))}
                className={`rounded-lg px-3 py-1 text-xs font-medium transition-colors ${
                  tipPercent === String(p)
                    ? "bg-blue-600 text-white"
                    : "bg-zinc-200 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                }`}
              >
                {p}%
              </button>
            ))}
          </div>
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
            {tc.splitBetween || "Split Between"}
          </label>
          <input
            type="number"
            min={1}
            max={20}
            value={split}
            onChange={(e) => setSplit(e.target.value)}
            className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-900"
          />
        </div>
      </div>

      {result && (
        <>
          <div className="mt-6 rounded-lg bg-blue-600 p-6 text-center text-white">
            <div className="text-sm opacity-80">{tc.totalWithTip || "Total with Tip"}</div>
            <div className="text-4xl font-bold">${result.total.toLocaleString()}</div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-3 text-center dark:border-zinc-800 dark:bg-zinc-900">
              <div className="text-xs text-zinc-500 dark:text-zinc-400">{tc.bill || "Bill"}</div>
              <div className="text-sm font-bold">${result.bill.toLocaleString()}</div>
            </div>
            <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-center dark:border-red-800 dark:bg-red-950">
              <div className="text-xs text-red-500 dark:text-red-400">{tc.tipAmount || "Tip Amount"}</div>
              <div className="text-sm font-bold">${result.tipAmount.toLocaleString()}</div>
            </div>
            <div className="rounded-lg border border-green-200 bg-green-50 p-3 text-center dark:border-green-800 dark:bg-green-950">
              <div className="text-xs text-green-500 dark:text-green-400">{tc.perPerson || "Per Person"}</div>
              <div className="text-sm font-bold">${result.perPerson.toLocaleString()}</div>
            </div>
            <div className="rounded-lg border border-green-200 bg-green-50 p-3 text-center dark:border-green-800 dark:bg-green-950">
              <div className="text-xs text-green-500 dark:text-green-400">{tc.tipPerPerson || "Tip Per Person"}</div>
              <div className="text-sm font-bold">${result.tipPerPerson.toLocaleString()}</div>
            </div>
          </div>
        </>
      )}
    </ToolLayout>
  );
}
