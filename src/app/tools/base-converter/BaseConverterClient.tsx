"use client";

import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";

const metadata = {
  title: "Number Base Converter",
  description:
    "Convert numbers between binary, octal, decimal, and hexadecimal systems. Free online base converter.",
  keywords: [
    "number base converter",
    "binary to decimal",
    "hex to decimal",
    "binary converter",
    "hexadecimal converter",
    "octal to decimal",
    "base converter online",
  ],
};

export default function BaseConverterClient({ locale = "en", dict }: { locale?: string; dict?: Record<string, unknown> } = {}) {
  const [input, setInput] = useState("");
  const [base, setBase] = useState<2 | 8 | 10 | 16>(10);
  const [error, setError] = useState<string | null>(null);

  const num = input.trim() ? parseInt(input, base) : NaN;

  const results = [
    { label: "Binary (Base 2)", value: Number.isNaN(num) ? "" : num.toString(2) },
    { label: "Octal (Base 8)", value: Number.isNaN(num) ? "" : num.toString(8) },
    { label: "Decimal (Base 10)", value: Number.isNaN(num) ? "" : num.toString(10) },
    {
      label: "Hexadecimal (Base 16)",
      value: Number.isNaN(num) ? "" : num.toString(16).toUpperCase(),
    },
  ];

  const bases: { label: string; value: 2 | 8 | 10 | 16 }[] = [
    { label: "Binary", value: 2 },
    { label: "Decimal", value: 10 },
    { label: "Hexadecimal", value: 16 },
    { label: "Octal", value: 8 },
  ];

  return (
    <ToolLayout {...metadata} locale={locale as any} dict={dict}>
      <div className="flex items-center gap-4">
        <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
          Input base:
        </label>
        <select
          value={base}
          onChange={(e) => {
            setBase(Number(e.target.value) as 2 | 8 | 10 | 16);
            setInput("");
            setError(null);
          }}
          className="rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-900"
        >
          {bases.map((b) => (
            <option key={b.value} value={b.value}>
              {b.label}
            </option>
          ))}
        </select>
      </div>

      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
          setError(null);
        }}
        placeholder={`Enter a ${bases.find((b) => b.value === base)?.label} number...`}
        className="mt-4 w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 font-mono text-sm dark:border-zinc-700 dark:bg-zinc-900 dark:placeholder:text-zinc-600"
      />

      {error && (
        <div className="mt-4 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700 dark:border-red-800 dark:bg-red-950 dark:text-red-400">
          {error}
        </div>
      )}

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {results.map((r) => (
          <div
            key={r.label}
            className="rounded-lg border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900"
          >
            <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              {r.label}
            </div>
            <div className="font-mono text-sm text-zinc-700 dark:text-zinc-300 break-all">
              {r.value || (
                <span className="text-zinc-400 italic">Result will appear here</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </ToolLayout>
  );
}
