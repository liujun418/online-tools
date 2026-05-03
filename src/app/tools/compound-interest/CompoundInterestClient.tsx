"use client";

import { useState, useMemo } from "react";
import ToolLayout from "@/components/ToolLayout";

const metadata = {
  title: "Compound Interest Calculator",
  description:
    "See how your money grows over time with compound interest calculations.",
  keywords: [
    "compound interest calculator",
    "compound interest formula",
    "investment growth calculator",
    "savings calculator",
    "compound interest calculator with monthly contributions",
  ],
};

export default function CompoundInterestClient() {
  const [principal, setPrincipal] = useState("10000");
  const [rate, setRate] = useState("7");
  const [years, setYears] = useState("20");
  const [monthly, setMonthly] = useState("100");
  const [compounds, setCompounds] = useState("12");

  const result = useMemo(() => {
    const p = parseFloat(principal);
    const r = parseFloat(rate) / 100;
    const t = parseFloat(years);
    const m = parseFloat(monthly);
    const n = parseInt(compounds);
    if (isNaN(p) || isNaN(r) || isNaN(t) || isNaN(m) || t <= 0) return null;

    // Future value of initial principal
    const fvPrincipal = p * Math.pow(1 + r / n, n * t);
    // Future value of monthly contributions
    const ratePerPeriod = r / n;
    const totalPeriods = n * t;
    const fvContributions = ratePerPeriod === 0
      ? m * 12 * t
      : m * ((Math.pow(1 + ratePerPeriod, totalPeriods) - 1) / ratePerPeriod) * (1 + ratePerPeriod);

    const totalAmount = Math.round((fvPrincipal + fvContributions) * 100) / 100;
    const totalContributions = Math.round((p + m * 12 * t) * 100) / 100;
    const totalInterest = Math.round((totalAmount - totalContributions) * 100) / 100;

    return { totalAmount, totalContributions, totalInterest };
  }, [principal, rate, years, monthly, compounds]);

  return (
    <ToolLayout {...metadata}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[
          ["Initial Deposit ($)", principal, setPrincipal] as const,
          ["Annual Rate (%)", rate, setRate] as const,
          ["Time (Years)", years, setYears] as const,
          ["Monthly Contribution ($)", monthly, setMonthly] as const,
          ["Compounding Frequency", compounds, setCompounds] as const,
        ].map(([label, value, setter], i) => (
          <div key={label}>
            <label className="mb-1 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
              {label}
            </label>
            {i === 4 ? (
              <select
                value={value as string}
                onChange={(e) => (setter as (v: string) => void)(e.target.value)}
                className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-900"
              >
                <option value="1">Annually</option>
                <option value="4">Quarterly</option>
                <option value="12">Monthly</option>
                <option value="365">Daily</option>
              </select>
            ) : (
              <input
                type="number"
                value={value as string}
                onChange={(e) => (setter as (v: string) => void)(e.target.value)}
                className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-900"
              />
            )}
          </div>
        ))}
      </div>

      {result && (
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-4 text-center dark:border-zinc-800 dark:bg-zinc-900">
            <div className="text-xs text-zinc-500 dark:text-zinc-400">Total Contributions</div>
            <div className="text-xl font-bold text-zinc-900 dark:text-white">${result.totalContributions.toLocaleString()}</div>
          </div>
          <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 text-center dark:border-blue-800 dark:bg-blue-950">
            <div className="text-xs text-blue-600 dark:text-blue-400">Interest Earned</div>
            <div className="text-xl font-bold text-blue-700 dark:text-blue-300">${result.totalInterest.toLocaleString()}</div>
          </div>
          <div className="rounded-lg border border-green-200 bg-green-50 p-4 text-center dark:border-green-800 dark:bg-green-950">
            <div className="text-xs text-green-600 dark:text-green-400">Future Value</div>
            <div className="text-2xl font-bold text-green-700 dark:text-green-300">${result.totalAmount.toLocaleString()}</div>
          </div>
        </div>
      )}
    </ToolLayout>
  );
}
