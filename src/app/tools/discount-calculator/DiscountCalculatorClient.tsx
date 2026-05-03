"use client";

import { useState, useMemo } from "react";
import ToolLayout from "@/components/ToolLayout";

const metadata = {
  title: "Discount Calculator",
  description:
    "Calculate discounted price, savings amount, and discount percentage.",
  keywords: [
    "discount calculator",
    "percentage discount",
    "sale price calculator",
    "percent off calculator",
    "savings calculator",
  ],
};

export default function DiscountCalculatorClient() {
  const [mode, setMode] = useState<"percent" | "reverse">("percent");
  const [original, setOriginal] = useState("100");
  const [discount, setDiscount] = useState("20");
  const [salePrice, setSalePrice] = useState("80");

  const result = useMemo(() => {
    const o = parseFloat(original);
    const d = parseFloat(discount);
    const s = parseFloat(salePrice);
    if (isNaN(o) || o <= 0) return null;

    if (mode === "percent") {
      if (isNaN(d) || d < 0) return null;
      const saved = o * (d / 100);
      const final_ = o - saved;
      return {
        original: o,
        discountPercent: d,
        saved: Math.round(saved * 100) / 100,
        finalPrice: Math.round(final_ * 100) / 100,
        salePrice: 0,
      };
    } else {
      if (isNaN(s) || s < 0) return null;
      const pct = ((o - s) / o) * 100;
      const saved = o - s;
      return {
        original: o,
        salePrice: s,
        discountPercent: Math.round(pct * 100) / 100,
        saved: Math.round(saved * 100) / 100,
        finalPrice: 0,
      };
    }
  }, [mode, original, discount, salePrice]);

  if (!result) return (
    <ToolLayout {...metadata}>
      <div className="flex gap-2">
        <button onClick={() => setMode("percent")} className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${mode === "percent" ? "bg-blue-600 text-white" : "bg-zinc-200 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"}`}>% Off</button>
        <button onClick={() => setMode("reverse")} className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${mode === "reverse" ? "bg-blue-600 text-white" : "bg-zinc-200 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"}`}>Find Discount %</button>
      </div>
      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        <div><label className="mb-1 block text-sm font-medium text-zinc-700 dark:text-zinc-300">Original Price ($)</label><input type="number" value={original} onChange={(e) => setOriginal(e.target.value)} className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-900" /></div>
        {mode === "percent" ? <div><label className="mb-1 block text-sm font-medium text-zinc-700 dark:text-zinc-300">Discount (%)</label><input type="number" value={discount} onChange={(e) => setDiscount(e.target.value)} className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-900" /></div> : <div><label className="mb-1 block text-sm font-medium text-zinc-700 dark:text-zinc-300">Sale Price ($)</label><input type="number" value={salePrice} onChange={(e) => setSalePrice(e.target.value)} className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-900" /></div>}
      </div>
    </ToolLayout>
  );

  return (
    <ToolLayout {...metadata}>
      <div className="flex gap-2">
        <button onClick={() => setMode("percent")} className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${mode === "percent" ? "bg-blue-600 text-white" : "bg-zinc-200 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"}`}>% Off</button>
        <button onClick={() => setMode("reverse")} className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${mode === "reverse" ? "bg-blue-600 text-white" : "bg-zinc-200 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"}`}>Find Discount %</button>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        <div><label className="mb-1 block text-sm font-medium text-zinc-700 dark:text-zinc-300">Original Price ($)</label><input type="number" value={original} onChange={(e) => setOriginal(e.target.value)} className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-900" /></div>
        {mode === "percent" ? <div><label className="mb-1 block text-sm font-medium text-zinc-700 dark:text-zinc-300">Discount (%)</label><input type="number" value={discount} onChange={(e) => setDiscount(e.target.value)} className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-900" /></div> : <div><label className="mb-1 block text-sm font-medium text-zinc-700 dark:text-zinc-300">Sale Price ($)</label><input type="number" value={salePrice} onChange={(e) => setSalePrice(e.target.value)} className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-900" /></div>}
      </div>

      <div className="mt-6 rounded-lg bg-green-600 p-6 text-center text-white">
        <div className="text-sm opacity-80">{mode === "percent" ? "Sale Price" : "Discount Percentage"}</div>
        <div className="text-4xl font-bold">{mode === "percent" ? `$${result.finalPrice.toLocaleString()}` : `${result.discountPercent}%`}</div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
        <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-3 text-center dark:border-zinc-800 dark:bg-zinc-900"><div className="text-xs text-zinc-500 dark:text-zinc-400">Original</div><div className="text-sm font-bold">${result.original.toLocaleString()}</div></div>
        <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-center dark:border-red-800 dark:bg-red-950"><div className="text-xs text-red-500 dark:text-red-400">Discount</div><div className="text-sm font-bold">{mode === "percent" ? `${result.discountPercent}%` : `$${result.salePrice.toLocaleString()}`}</div></div>
        <div className="rounded-lg border border-green-200 bg-green-50 p-3 text-center dark:border-green-800 dark:bg-green-950"><div className="text-xs text-green-500 dark:text-green-400">Saved</div><div className="text-sm font-bold">${result.saved.toLocaleString()}</div></div>
      </div>
    </ToolLayout>
  );
}
