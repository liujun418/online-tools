"use client";

import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";

const metadata = {
  title: "Percentage Calculator",
  description:
    "Calculate percentages, percentage change, and percentage of a number. Free online percentage calculator.",
  keywords: [
    "percentage calculator",
    "calculate percentage",
    "percent change calculator",
    "percentage of a number",
    "what percent calculator",
    "percentage formula",
  ],
};

export default function PercentageCalculatorClient({ locale = "en", dict, titleOverride, descriptionOverride }: {
  locale?: string; dict?: Record<string, unknown>;
  titleOverride?: string;
  descriptionOverride?: string;
} = {}) {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const [d, setD] = useState("");
  const pc = (dict as any)?.percentageCalculator || {};

  return (
    <ToolLayout {...metadata}
        title={titleOverride || metadata.title}
        description={descriptionOverride || metadata.description} locale={locale as any} dict={dict}>
      <div className="space-y-8">
        {/* What is X% of Y? */}
        <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900">
          <h3 className="mb-4 font-medium text-zinc-700 dark:text-zinc-300">
            {pc.whatIsXOfY || "What is X% of Y?"}
          </h3>
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm text-zinc-500 dark:text-zinc-400">{pc.whatIs || "What is"}</span>
            <input
              type="number"
              value={a}
              onChange={(e) => setA(e.target.value)}
              className="w-24 rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-900"
              placeholder="X"
            />
            <span className="text-sm text-zinc-500 dark:text-zinc-400">% {pc.of || "of"}</span>
            <input
              type="number"
              value={b}
              onChange={(e) => setB(e.target.value)}
              className="w-24 rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-900"
              placeholder="Y"
            />
            <span className="text-sm text-zinc-500 dark:text-zinc-400">?</span>
            {a && b && (
              <span className="text-lg font-bold text-blue-600 dark:text-blue-400">
                = {(Number(a) / 100) * Number(b)}
              </span>
            )}
          </div>
        </div>

        {/* X is what % of Y? */}
        <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900">
          <h3 className="mb-4 font-medium text-zinc-700 dark:text-zinc-300">
            {pc.xIsWhatPercentOfY || "X is what percent of Y?"}
          </h3>
          <div className="flex flex-wrap items-center gap-3">
            <input
              type="number"
              value={a}
              onChange={(e) => setA(e.target.value)}
              className="w-24 rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-900"
              placeholder="X"
            />
            <span className="text-sm text-zinc-500 dark:text-zinc-400">{pc.isWhatPercentOf || "is what % of"}</span>
            <input
              type="number"
              value={b}
              onChange={(e) => setB(e.target.value)}
              className="w-24 rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-900"
              placeholder="Y"
            />
            <span className="text-sm text-zinc-500 dark:text-zinc-400">?</span>
            {a && b && Number(b) !== 0 && (
              <span className="text-lg font-bold text-blue-600 dark:text-blue-400">
                = {((Number(a) / Number(b)) * 100).toFixed(2)}%
              </span>
            )}
          </div>
        </div>

        {/* % change from X to Y */}
        <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900">
          <h3 className="mb-4 font-medium text-zinc-700 dark:text-zinc-300">
            {pc.percentChange || "Percentage change from X to Y"}
          </h3>
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm text-zinc-500 dark:text-zinc-400">{pc.from || "From"}</span>
            <input
              type="number"
              value={c}
              onChange={(e) => setC(e.target.value)}
              className="w-24 rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-900"
              placeholder="X"
            />
            <span className="text-sm text-zinc-500 dark:text-zinc-400">{pc.to || "to"}</span>
            <input
              type="number"
              value={d}
              onChange={(e) => setD(e.target.value)}
              className="w-24 rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-900"
              placeholder="Y"
            />
            <span className="text-sm text-zinc-500 dark:text-zinc-400">?</span>
            {c && d && Number(c) !== 0 && (
              <span className="text-lg font-bold text-blue-600 dark:text-blue-400">
                = {(((Number(d) - Number(c)) / Number(c)) * 100).toFixed(2)}%
              </span>
            )}
          </div>
        </div>
      </div>
    </ToolLayout>
  );
}
