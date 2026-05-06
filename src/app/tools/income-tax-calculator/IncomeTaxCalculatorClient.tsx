"use client";

import { useState, useMemo } from "react";
import ToolLayout from "@/components/ToolLayout";

const metadata = {
  title: "Income Tax Calculator",
  description:
    "Estimate your take-home pay after income tax deductions. Free online income tax calculator.",
  keywords: [
    "income tax calculator",
    "salary calculator",
    "take home pay calculator",
    "net income calculator",
    "paycheck calculator",
    "after tax calculator",
  ],
};

// Simplified US 2024 single filer tax brackets
const brackets = [
  { min: 0, max: 11600, rate: 0.10 },
  { min: 11600, max: 47150, rate: 0.12 },
  { min: 47150, max: 100525, rate: 0.22 },
  { min: 100525, max: 191950, rate: 0.24 },
  { min: 191950, max: 243725, rate: 0.32 },
  { min: 243725, max: 609350, rate: 0.35 },
  { min: 609350, max: Infinity, rate: 0.37 },
];

export default function IncomeTaxCalculatorClient({ locale = "en", dict }: { locale?: string; dict?: Record<string, unknown> } = {}) {
  const [salary, setSalary] = useState("75000");
  const [filingStatus, setFilingStatus] = useState<"single" | "married">("single");

  const result = useMemo(() => {
    const gross = parseFloat(salary);
    if (isNaN(gross) || gross <= 0) return null;

    // Standard deduction 2024
    const standardDeduction = filingStatus === "married" ? 29200 : 14600;
    const taxable = Math.max(0, gross - standardDeduction);

    let tax = 0;
    for (const bracket of brackets) {
      if (taxable <= bracket.min) break;
      tax += (Math.min(taxable, bracket.max) - bracket.min) * bracket.rate;
    }

    const ficaRate = 0.0765; // 6.2% Social Security + 1.45% Medicare
    const fica = gross * ficaRate;
    const totalTax = tax + fica;
    const net = gross - totalTax;

    return {
      gross,
      standardDeduction,
      taxableIncome: Math.round(taxable),
      federalTax: Math.round(tax),
      fica: Math.round(fica),
      totalTax: Math.round(totalTax),
      netPay: Math.round(net),
      effectiveRate: Math.round((totalTax / gross) * 1000) / 10,
      monthlyNet: Math.round(net / 12),
      biweeklyNet: Math.round(net / 26),
    };
  }, [salary, filingStatus]);

  return (
    <ToolLayout {...metadata} locale={locale as any} dict={dict}>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
            Annual Gross Income ($)
          </label>
          <input
            type="number"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-900"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
            Filing Status
          </label>
          <select
            value={filingStatus}
            onChange={(e) => setFilingStatus(e.target.value as "single" | "married")}
            className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-900"
          >
            <option value="single">Single</option>
            <option value="married">Married Filing Jointly</option>
          </select>
        </div>
      </div>

      {result && (
        <>
          <div className="mt-6 rounded-lg bg-blue-600 p-6 text-center text-white">
            <div className="text-sm opacity-80">Estimated Annual Take-Home Pay</div>
            <div className="text-4xl font-bold">${result.netPay.toLocaleString()}</div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-3 text-center dark:border-zinc-800 dark:bg-zinc-900">
              <div className="text-xs text-zinc-500 dark:text-zinc-400">Gross</div>
              <div className="text-sm font-bold">${result.gross.toLocaleString()}</div>
            </div>
            <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-center dark:border-red-800 dark:bg-red-950">
              <div className="text-xs text-red-500 dark:text-red-400">Federal Tax</div>
              <div className="text-sm font-bold">${result.federalTax.toLocaleString()}</div>
            </div>
            <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-center dark:border-red-800 dark:bg-red-950">
              <div className="text-xs text-red-500 dark:text-red-400">FICA (SS + Medicare)</div>
              <div className="text-sm font-bold">${result.fica.toLocaleString()}</div>
            </div>
            <div className="rounded-lg border border-green-200 bg-green-50 p-3 text-center dark:border-green-800 dark:bg-green-950">
              <div className="text-xs text-green-500 dark:text-green-400">Effective Rate</div>
              <div className="text-sm font-bold">{result.effectiveRate}%</div>
            </div>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-4 text-center dark:border-zinc-800 dark:bg-zinc-900">
              <div className="text-sm text-zinc-500 dark:text-zinc-400">Monthly Net Pay</div>
              <div className="text-xl font-bold text-zinc-900 dark:text-white">${result.monthlyNet.toLocaleString()}</div>
            </div>
            <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-4 text-center dark:border-zinc-800 dark:bg-zinc-900">
              <div className="text-sm text-zinc-500 dark:text-zinc-400">Biweekly Net Pay</div>
              <div className="text-xl font-bold text-zinc-900 dark:text-white">${result.biweeklyNet.toLocaleString()}</div>
            </div>
          </div>
        </>
      )}
    </ToolLayout>
  );
}
