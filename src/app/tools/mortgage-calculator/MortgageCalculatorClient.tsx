"use client";

import { useState, useMemo } from "react";
import ToolLayout from "@/components/ToolLayout";

const metadata = {
  title: "Mortgage Calculator",
  description:
    "Estimate your monthly mortgage payment with principal, interest, taxes, and insurance.",
  keywords: [
    "mortgage calculator",
    "home loan calculator",
    "monthly mortgage payment",
    "mortgage payment calculator",
    "house payment calculator",
    "amortization schedule",
  ],
};

export default function MortgageCalculatorClient({ locale = "en", dict }: { locale?: string; dict?: Record<string, unknown> } = {}) {
  const [price, setPrice] = useState("300000");
  const [down, setDown] = useState("60000");
  const [rate, setRate] = useState("6.5");
  const [years, setYears] = useState("30");
  const [tax, setTax] = useState("3000");
  const [insurance, setInsurance] = useState("1200");
  const mc = (dict as any)?.mortgageCalculator || {};

  const result = useMemo(() => {
    const p = parseFloat(price) - parseFloat(down);
    const r = parseFloat(rate) / 100 / 12;
    const n = parseFloat(years) * 12;
    const annualTax = parseFloat(tax) || 0;
    const annualInsurance = parseFloat(insurance) || 0;
    if (isNaN(p) || isNaN(r) || isNaN(n) || p <= 0 || n <= 0) return null;
    let principalAndInterest: number;
    if (r === 0) {
      principalAndInterest = p / n;
    } else {
      principalAndInterest = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    }
    const monthlyTax = annualTax / 12;
    const monthlyInsurance = annualInsurance / 12;
    const total = principalAndInterest + monthlyTax + monthlyInsurance;
    return {
      principalAndInterest: Math.round(principalAndInterest * 100) / 100,
      monthlyTax: Math.round(monthlyTax * 100) / 100,
      monthlyInsurance: Math.round(monthlyInsurance * 100) / 100,
      total: Math.round(total * 100) / 100,
      loanAmount: p,
    };
  }, [price, down, rate, years, tax, insurance]);

  const items = result
    ? [
        { label: mc.loanAmount || "Loan Amount", value: `$${result.loanAmount.toLocaleString()}` },
        { label: mc.principalInterest || "Principal & Interest", value: `$${result.principalAndInterest.toLocaleString()}` },
        { label: mc.propertyTax || "Property Tax", value: `$${result.monthlyTax.toLocaleString()}${mc.perMonth || "/mo"}` },
        { label: mc.homeInsurance || "Home Insurance", value: `$${result.monthlyInsurance.toLocaleString()}${mc.perMonth || "/mo"}` },
      ]
    : [];

  return (
    <ToolLayout {...metadata} locale={locale as any} dict={dict}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[
          [mc.homePrice || "Home Price ($)", price, setPrice] as const,
          [mc.downPayment || "Down Payment ($)", down, setDown] as const,
          [mc.interestRate || "Interest Rate (%)", rate, setRate] as const,
          [mc.loanTerm || "Loan Term (Years)", years, setYears] as const,
          [mc.annualPropertyTax || "Annual Property Tax ($)", tax, setTax] as const,
          [mc.annualInsurance || "Annual Insurance ($)", insurance, setInsurance] as const,
        ].map(([label, value, setter]) => (
          <div key={label as string}>
            <label className="mb-1 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
              {label}
            </label>
            <input
              type="number"
              value={value as string}
              onChange={(e) => (setter as (v: string) => void)(e.target.value)}
              className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-900"
            />
          </div>
        ))}
      </div>

      {result && (
        <>
          <div className="mt-6 rounded-lg bg-blue-600 p-6 text-center text-white">
            <div className="text-sm opacity-80">{mc.monthlyPayment || "Estimated Monthly Payment"}</div>
            <div className="text-4xl font-bold">${result.total.toLocaleString()}</div>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {items.map((item) => (
              <div key={item.label} className="rounded-lg border border-zinc-200 bg-zinc-50 p-3 text-center dark:border-zinc-800 dark:bg-zinc-900">
                <div className="text-xs text-zinc-500 dark:text-zinc-400">{item.label}</div>
                <div className="text-lg font-bold text-zinc-900 dark:text-white">{item.value}</div>
              </div>
            ))}
          </div>
        </>
      )}
    </ToolLayout>
  );
}
