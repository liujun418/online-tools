"use client";

import { useState, useMemo } from "react";
import ToolLayout from "@/components/ToolLayout";

const metadata = {
  title: "Loan Calculator",
  description:
    "Calculate monthly payments, total interest, and amortization for loans.",
  keywords: [
    "loan calculator",
    "monthly payment calculator",
    "loan payment calculator",
    "amortization calculator",
    "personal loan calculator",
    "calculate loan interest",
  ],
};

export default function LoanCalculatorClient({ locale = "en", dict }: { locale?: string; dict?: Record<string, unknown> } = {}) {
  const [principal, setPrincipal] = useState("10000");
  const [rate, setRate] = useState("5");
  const [years, setYears] = useState("3");

  const result = useMemo(() => {
    const p = parseFloat(principal);
    const r = parseFloat(rate) / 100 / 12;
    const n = parseFloat(years) * 12;
    if (isNaN(p) || isNaN(r) || isNaN(n) || p <= 0 || n <= 0) return null;
    if (r === 0) return { monthly: p / n, total: p, interest: 0 };
    const monthly = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const total = monthly * n;
    return { monthly: Math.round(monthly * 100) / 100, total: Math.round(total * 100) / 100, interest: Math.round((total - p) * 100) / 100 };
  }, [principal, rate, years]);

  return (
    <ToolLayout {...metadata} locale={locale as any} dict={dict}>
      <div className="grid gap-4 sm:grid-cols-3">
        <div>
          <label className="mb-1 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
            Loan Amount ($)
          </label>
          <input
            type="number"
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
            className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-900"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
            Annual Rate (%)
          </label>
          <input
            type="number"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-900"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
            Term (Years)
          </label>
          <input
            type="number"
            value={years}
            onChange={(e) => setYears(e.target.value)}
            className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-900"
          />
        </div>
      </div>

      {result && (
        <div className="mt-6 grid grid-cols-3 gap-4">
          <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-4 text-center dark:border-zinc-800 dark:bg-zinc-900">
            <div className="text-xs text-zinc-500 dark:text-zinc-400">Monthly Payment</div>
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">${result.monthly.toLocaleString()}</div>
          </div>
          <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-4 text-center dark:border-zinc-800 dark:bg-zinc-900">
            <div className="text-xs text-zinc-500 dark:text-zinc-400">Total Payment</div>
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">${result.total.toLocaleString()}</div>
          </div>
          <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-4 text-center dark:border-zinc-800 dark:bg-zinc-900">
            <div className="text-xs text-zinc-500 dark:text-zinc-400">Total Interest</div>
            <div className="text-2xl font-bold text-red-600 dark:text-red-400">${result.interest.toLocaleString()}</div>
          </div>
        </div>
      )}
    </ToolLayout>
  );
}
