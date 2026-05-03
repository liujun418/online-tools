"use client";

import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";

const metadata = {
  title: "Age Calculator",
  description:
    "Calculate exact age in years, months, days, hours and more from any birth date. Free online age calculator.",
  keywords: [
    "age calculator",
    "calculate age from date of birth",
    "birthday calculator",
    "age in years months days",
    "how old am I",
    "date of birth calculator",
  ],
};

export default function AgeCalculatorClient() {
  const [birthDate, setBirthDate] = useState("");
  const [result, setResult] = useState<null | Record<string, number | string>>(null);

  function calculateAge() {
    if (!birthDate) return;
    const birth = new Date(birthDate);
    const now = new Date();
    if (birth > now) return;

    let years = now.getFullYear() - birth.getFullYear();
    let months = now.getMonth() - birth.getMonth();
    let days = now.getDate() - birth.getDate();

    if (days < 0) {
      months--;
      const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
      days += prevMonth.getDate();
    }
    if (months < 0) {
      years--;
      months += 12;
    }

    const totalDays = Math.floor((now.getTime() - birth.getTime()) / (1000 * 60 * 60 * 24));
    const totalWeeks = Math.floor(totalDays / 7);
    const totalHours = totalDays * 24;
    const totalMinutes = totalHours * 60;
    const nextBirthday = new Date(now.getFullYear(), birth.getMonth(), birth.getDate());
    if (nextBirthday <= now) nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
    const daysToNext = Math.ceil((nextBirthday.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));

    setResult({
      years,
      months,
      days,
      totalDays,
      totalWeeks,
      totalHours,
      totalMinutes,
      nextBirthday: daysToNext,
    });
  }

  const statItems = [
    { label: "Years", value: result?.years },
    { label: "Months", value: result?.months },
    { label: "Days", value: result?.days },
    { label: "Total days", value: result?.totalDays?.toLocaleString() },
    { label: "Total weeks", value: result?.totalWeeks?.toLocaleString() },
    { label: "Total hours", value: result?.totalHours?.toLocaleString() },
    { label: "Next birthday", value: result ? `in ${result.nextBirthday} days` : null },
  ];

  return (
    <ToolLayout {...metadata}>
      <div className="flex items-center gap-4">
        <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
          Date of birth:
        </label>
        <input
          type="date"
          value={birthDate}
          onChange={(e) => {
            setBirthDate(e.target.value);
            setResult(null);
          }}
          className="rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-900"
        />
        <button
          onClick={calculateAge}
          disabled={!birthDate}
          className="rounded-lg bg-blue-600 px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 disabled:opacity-50"
        >
          Calculate
        </button>
      </div>

      {result && (
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
          {statItems.map((item) => (
            item.value !== undefined && item.value !== null ? (
              <div
                key={item.label}
                className="rounded-lg border border-zinc-200 bg-zinc-50 p-4 text-center dark:border-zinc-800 dark:bg-zinc-900"
              >
                <div className="text-xl font-bold text-blue-600 dark:text-blue-400">
                  {item.value}
                </div>
                <div className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                  {item.label}
                </div>
              </div>
            ) : null
          ))}
        </div>
      )}
    </ToolLayout>
  );
}
