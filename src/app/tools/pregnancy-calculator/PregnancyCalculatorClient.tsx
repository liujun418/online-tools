"use client";

import { useState, useMemo } from "react";
import ToolLayout from "@/components/ToolLayout";

const metadata = {
  title: "Pregnancy Due Date Calculator",
  description:
    "Estimate your due date, current week of pregnancy, and key milestones.",
  keywords: [
    "pregnancy calculator",
    "due date calculator",
    "pregnancy week calculator",
    "EDD calculator",
    "conception date calculator",
  ],
};

export default function PregnancyCalculatorClient({ locale = "en", dict }: { locale?: string; dict?: Record<string, unknown> } = {}) {
  const [lmp, setLmp] = useState("");
  const pg = (dict as any)?.pregnancyCalculator || {};

  const result = useMemo(() => {
    if (!lmp) return null;
    const lmpDate = new Date(lmp);
    if (isNaN(lmpDate.getTime())) return null;

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const lmpNormalized = new Date(lmpDate);
    lmpNormalized.setHours(0, 0, 0, 0);

    const diffMs = today.getTime() - lmpNormalized.getTime();
    if (diffMs < 0) return null; // LMP can't be in the future

    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    // Naegele's rule: LMP + 280 days
    const dueDate = new Date(lmpNormalized);
    dueDate.setDate(dueDate.getDate() + 280);

    const currentWeek = Math.floor(diffDays / 7);
    const currentDay = diffDays % 7;

    // Trimester
    let trimester: string;
    if (currentWeek < 13) trimester = "firstTrimester";
    else if (currentWeek < 27) trimester = "secondTrimester";
    else trimester = "thirdTrimester";

    const weeksRemaining = Math.max(0, 40 - currentWeek);

    // Key milestones
    const milestones = [
      { week: 12, label: "endFirstTrimester" },
      { week: 20, label: "halfwayPoint" },
      { week: 24, label: "viabilityMilestone" },
      { week: 28, label: "thirdTrimesterStarts" },
      { week: 37, label: "fullTerm" },
      { week: 40, label: "dueDateMilestone" },
    ];

    return {
      lmp: lmpNormalized,
      dueDate,
      currentWeek,
      currentDay,
      trimester,
      weeksRemaining,
      daysRemaining: weeksRemaining * 7 + Math.max(0, 7 - currentDay - 1),
      milestones,
    };
  }, [lmp]);

  return (
    <ToolLayout {...metadata} locale={locale as any} dict={dict}>
      <div>
        <label className="mb-1 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
          {pg.lmpLabel || "First Day of Last Menstrual Period (LMP)"}
        </label>
        <input
          type="date"
          value={lmp}
          onChange={(e) => setLmp(e.target.value)}
          className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-900"
        />
      </div>

      {result && (
        <>
          <div className="mt-6 rounded-lg bg-pink-500 p-6 text-center text-white">
            <div className="text-sm opacity-80">{pg.dueDate || "Estimated Due Date"}</div>
            <div className="text-4xl font-bold">
              {result.dueDate.toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-3 text-center dark:border-zinc-800 dark:bg-zinc-900">
              <div className="text-xs text-zinc-500 dark:text-zinc-400">{pg.currentWeek || "Current Week"}</div>
              <div className="text-xl font-bold">
                Week {result.currentWeek}+{result.currentDay}
              </div>
            </div>
            <div className="rounded-lg border border-blue-200 bg-blue-50 p-3 text-center dark:border-blue-800 dark:bg-blue-950">
              <div className="text-xs text-blue-500 dark:text-blue-400">{pg.trimester || "Trimester"}</div>
              <div className="text-sm font-bold">{pg[result.trimester] || result.trimester}</div>
            </div>
            <div className="rounded-lg border border-green-200 bg-green-50 p-3 text-center dark:border-green-800 dark:bg-green-950">
              <div className="text-xs text-green-500 dark:text-green-400">{pg.daysRemaining || "Days Remaining"}</div>
              <div className="text-xl font-bold">{result.daysRemaining}</div>
            </div>
            <div className="rounded-lg border border-purple-200 bg-purple-50 p-3 text-center dark:border-purple-800 dark:bg-purple-950">
              <div className="text-xs text-purple-500 dark:text-purple-400">{pg.conceptionApprox || "Conception Approx."}</div>
              <div className="text-xs font-bold">
                {new Date(result.lmp.getTime() + 14 * 86400000).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })}
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="mb-3 text-lg font-semibold text-zinc-900 dark:text-white">
              {pg.milestones || "Key Milestones"}
            </h3>
            <div className="space-y-2">
              {result.milestones.map((m) => {
                const reached = result.currentWeek >= m.week;
                return (
                  <div
                    key={m.week}
                    className={`flex items-center gap-3 rounded-lg border px-4 py-2 ${
                      reached
                        ? "border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950"
                        : "border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900"
                    }`}
                  >
                    <span
                      className={`h-2 w-2 rounded-full ${
                        reached ? "bg-green-500" : "bg-zinc-300 dark:bg-zinc-600"
                      }`}
                    />
                    <span className="text-sm text-zinc-700 dark:text-zinc-300">
                      Week {m.week}: {pg[m.label] || m.label}
                      {reached && " ✓"}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}
    </ToolLayout>
  );
}
