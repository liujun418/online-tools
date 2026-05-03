"use client";

import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";

const metadata = {
  title: "Roman Numeral Converter",
  description:
    "Convert between Roman numerals and Arabic numbers. Free online Roman numeral converter tool.",
  keywords: [
    "roman numeral converter",
    "roman numerals to numbers",
    "convert to roman numerals",
    "roman numeral translator",
    "arabic to roman",
    "roman numerals chart",
  ],
};

function toRoman(num: number): string {
  const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const symbols = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  let result = "";
  for (let i = 0; i < values.length; i++) {
    while (num >= values[i]) {
      result += symbols[i];
      num -= values[i];
    }
  }
  return result;
}

function fromRoman(s: string): number {
  const map: Record<string, number> = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    const curr = map[s[i]] || 0;
    const next = map[s[i + 1]] || 0;
    if (curr < next) {
      result -= curr;
    } else {
      result += curr;
    }
  }
  return result;
}

function isValidRoman(s: string): boolean {
  return /^[MDCLXVI]+$/.test(s.toUpperCase()) && fromRoman(s.toUpperCase()) > 0;
}

export default function RomanNumeralsClient() {
  const [arabic, setArabic] = useState("");
  const [roman, setRoman] = useState("");

  const toRomanResult = arabic && Number(arabic) > 0 && Number(arabic) <= 3999 ? toRoman(Number(arabic)) : "";
  const fromRomanResult = roman && isValidRoman(roman) ? fromRoman(roman.toUpperCase()).toString() : "";

  return (
    <ToolLayout {...metadata}>
      <div className="space-y-8">
        {/* Arabic to Roman */}
        <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900">
          <h3 className="mb-4 font-medium text-zinc-700 dark:text-zinc-300">
            Arabic Number → Roman Numeral
          </h3>
          <div className="flex items-center gap-3">
            <input
              type="number"
              min={1}
              max={3999}
              value={arabic}
              onChange={(e) => {
                setArabic(e.target.value);
              }}
              placeholder="Enter 1-3999"
              className="w-32 rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-900"
            />
            <span className="text-zinc-500 dark:text-zinc-400">→</span>
            <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              {toRomanResult || (
                <span className="text-base font-normal text-zinc-400 italic">Roman numeral</span>
              )}
            </span>
          </div>
        </div>

        {/* Roman to Arabic */}
        <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900">
          <h3 className="mb-4 font-medium text-zinc-700 dark:text-zinc-300">
            Roman Numeral → Arabic Number
          </h3>
          <div className="flex items-center gap-3">
            <input
              type="text"
              value={roman}
              onChange={(e) => setRoman(e.target.value)}
              placeholder="e.g. MMXXIV"
              className="w-32 rounded-lg border border-zinc-300 bg-white px-3 py-2 font-mono text-sm uppercase dark:border-zinc-700 dark:bg-zinc-900"
            />
            <span className="text-zinc-500 dark:text-zinc-400">→</span>
            <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              {fromRomanResult || (
                <span className="text-base font-normal text-zinc-400 italic">Arabic number</span>
              )}
            </span>
          </div>
        </div>

        {/* Common Roman numerals reference */}
        <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900">
          <h3 className="mb-4 font-medium text-zinc-700 dark:text-zinc-300">
            Common Roman Numerals
          </h3>
          <div className="grid grid-cols-3 gap-2 text-sm sm:grid-cols-6">
            {[
              [1, "I"],
              [4, "IV"],
              [5, "V"],
              [9, "IX"],
              [10, "X"],
              [50, "L"],
              [100, "C"],
              [500, "D"],
              [1000, "M"],
              [2024, "MMXXIV"],
              [2025, "MMXXV"],
              [3999, "MMMCMXCIX"],
            ].map(([num, rom]) => (
              <div key={rom} className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400">
                <span className="font-medium">{num}</span>
                <span>=</span>
                <span className="font-mono">{rom}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ToolLayout>
  );
}
