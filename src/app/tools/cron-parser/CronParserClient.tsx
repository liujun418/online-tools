"use client";

import { useState, useMemo } from "react";
import ToolLayout from "@/components/ToolLayout";

const metadata = {
  title: "Cron Expression Parser",
  description:
    "Parse cron expressions and see when your scheduled jobs will run. Get human-readable descriptions and next 10 execution times. Free online cron parser.",
  keywords: [
    "cron parser",
    "cron expression",
    "crontab",
    "cron schedule",
    "cron to human",
    "cron calculator",
    "next cron execution",
  ],
};

const DAY_NAMES = [
  "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",
];
const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

function parseField(field: string, min: number, max: number): number[] {
  const values: number[] = [];
  const parts = field.split(",");
  for (const part of parts) {
    if (part === "*") {
      for (let i = min; i <= max; i++) values.push(i);
    } else if (part.includes("/")) {
      const [range, stepStr] = part.split("/");
      const step = parseInt(stepStr, 10);
      if (isNaN(step) || step < 1) throw new Error("Invalid step");
      let rangeMin = min, rangeMax = max;
      if (range !== "*") {
        if (range.includes("-")) {
          [rangeMin, rangeMax] = range.split("-").map(Number);
        } else {
          rangeMin = parseInt(range, 10);
          rangeMax = max;
        }
      }
      for (let i = rangeMin; i <= rangeMax; i += step) values.push(i);
    } else if (part.includes("-")) {
      const [lo, hi] = part.split("-").map(Number);
      if (isNaN(lo) || isNaN(hi)) throw new Error("Invalid range");
      for (let i = lo; i <= hi; i++) values.push(i);
    } else {
      const v = parseInt(part, 10);
      if (isNaN(v)) throw new Error("Invalid value");
      values.push(v);
    }
  }
  return [...new Set(values)].sort((a, b) => a - b).filter((v) => v >= min && v <= max);
}

function describeCron(expr: string): string {
  const fields = expr.trim().split(/\s+/);
  if (fields.length !== 5) return "";

  try {
    const mins = parseField(fields[0], 0, 59);
    const hrs = parseField(fields[1], 0, 23);
    const dom = parseField(fields[2], 1, 31);
    const mon = parseField(fields[3], 1, 12);
    const dow = parseField(fields[4], 0, 7);

    let desc = "At ";

    // Time
    if (mins.length === 1 && hrs.length === 1) {
      const h = hrs[0];
      const ampm = h >= 12 ? "PM" : "AM";
      const h12 = h === 0 ? 12 : h > 12 ? h - 12 : h;
      desc += `${h12}:${String(mins[0]).padStart(2, "0")} ${ampm}`;
    } else if (mins.length === 60) {
      if (hrs.length === 1) {
        const h = hrs[0];
        const ampm = h >= 12 ? "PM" : "AM";
        const h12 = h === 0 ? 12 : h > 12 ? h - 12 : h;
        desc += `every minute past ${h12}:00 ${ampm}`;
      } else {
        desc += "every minute";
      }
    } else if (mins.length === 1 && mins[0] === 0 && hrs.length === 24) {
      desc += "every hour";
    } else {
      const minParts: string[] = [];
      if (mins.length < 60 && mins.length > 1) {
        minParts.push(`minutes ${mins.slice(0, 3).join(",")}${mins.length > 3 ? "..." : ""}`);
      }
      const hrParts: string[] = [];
      if (hrs.length < 24 && hrs.length > 1) {
        hrParts.push(`${hrs.length} hours`);
      }
      desc += minParts.join(" ") + (minParts.length && hrParts.length ? " of " : "") + hrParts.join(" ");
      if (!minParts.length && !hrParts.length) desc += "00:00 AM";
    }

    desc += ", ";

    // Day description
    const everyDay = dom.length === 31 && dow.length === 8;
    const everyMonth = mon.length === 12;

    if (everyDay && everyMonth) {
      if (dow.length === 8) {
        desc += "every day";
      } else {
        desc += "every day";
      }
    } else if (dow.length < 8 && dow.length > 0) {
      if (dow.length <= 3) {
        desc += dow.map((d) => DAY_NAMES[d === 7 ? 0 : d]).join(", ");
      } else if (dow.length === 5 && dow.includes(1) && dow.includes(5) && !dow.includes(0) && !dow.includes(6)) {
        desc += "every weekday";
      } else if (dow.length === 2 && dow.includes(0) && dow.includes(6)) {
        desc += "every weekend";
      } else {
        desc += `${dow.length} days of the week`;
      }
    } else if (dom.length < 31) {
      if (dom.length <= 3) {
        desc += `day ${dom.join(", ")}`;
      } else {
        desc += `${dom.length} days of the month`;
      }
    } else {
      desc += "every day";
    }

    if (mon.length < 12 && mon.length > 0) {
      if (mon.length <= 3) {
        desc += " in " + mon.map((m) => MONTH_NAMES[m - 1]).join(", ");
      } else {
        desc += ` in ${mon.length} months`;
      }
    }

    return desc;
  } catch {
    return "";
  }
}

function getNextExecutions(expr: string, count: number = 10): Date[] {
  const results: Date[] = [];
  try {
    const fields = expr.trim().split(/\s+/);
    if (fields.length !== 5) return results;
    const mins = parseField(fields[0], 0, 59);
    const hrs = parseField(fields[1], 0, 23);
    const dom = parseField(fields[2], 1, 31);
    const mon = parseField(fields[3], 1, 12);
    const dow = parseField(fields[4], 0, 7);

    let current = new Date();
    current.setSeconds(0, 0);
    current.setMinutes(current.getMinutes() + 1);

    let iterations = 0;
    const maxIterations = 525600; // 1 year of minutes
    while (results.length < count && iterations < maxIterations) {
      const m = current.getMinutes();
      const h = current.getHours();
      const d = current.getDate();
      const mo = current.getMonth() + 1;
      const w = current.getDay();
      const lastDay = new Date(current.getFullYear(), mo, 0).getDate();

      if (
        mins.includes(m) &&
        hrs.includes(h) &&
        dom.includes(d) &&
        mon.includes(mo) &&
        (dow.includes(w) || dow.includes(7))
      ) {
        results.push(new Date(current));
      }

      current = new Date(current.getTime() + 60000);
      if (d > lastDay) {
        current.setDate(1);
        current.setMonth(current.getMonth() + 1);
      }
      iterations++;
    }
  } catch {}
  return results;
}

export default function CronParserClient({
  locale = "en",
  dict,
  titleOverride,
  descriptionOverride,
}: {
  locale?: string;
  dict?: Record<string, unknown>;
  titleOverride?: string;
  descriptionOverride?: string;
} = {}) {
  const [expression, setExpression] = useState("");
  const cp = (dict as any)?.cronParser || {};

  const trimmed = expression.trim();
  const fields = trimmed.split(/\s+/);
  const valid = fields.length === 5 && trimmed.length > 0;

  const description = useMemo(() => (valid ? describeCron(trimmed) : ""), [trimmed, valid]);
  const executions = useMemo(() => (valid ? getNextExecutions(trimmed) : []), [trimmed, valid]);

  return (
    <ToolLayout
      {...metadata}
      title={titleOverride || metadata.title}
      description={descriptionOverride || metadata.description}
      locale={locale as any}
      dict={dict}
    >
      <input
        type="text"
        value={expression}
        onChange={(e) => setExpression(e.target.value)}
        placeholder={
          cp.placeholder || "Enter cron expression... (e.g. */5 * * * *)"
        }
        className="w-full rounded-lg border border-zinc-300 bg-white p-4 font-mono text-lg dark:border-zinc-700 dark:bg-zinc-900 dark:placeholder:text-zinc-600"
      />

      {trimmed && !valid && (
        <div className="mt-4 rounded-lg border border-red-300 bg-red-50 p-4 text-sm text-red-700 dark:border-red-800 dark:bg-red-950 dark:text-red-400">
          {cp.invalidExpression || "Invalid cron expression"} — {fields.length < 5 ? "Need 5 fields (minute hour day month weekday)" : "Too many fields (expected 5)"}
        </div>
      )}

      {description && (
        <div className="mt-6 rounded-lg border border-green-200 bg-green-50 p-4 dark:border-green-800 dark:bg-green-950">
          <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-green-600 dark:text-green-400">
            {cp.description || "Description"}
          </div>
          <div className="text-lg font-medium text-green-800 dark:text-green-200">
            {description}
          </div>
        </div>
      )}

      {executions.length > 0 && (
        <div className="mt-6">
          <h3 className="mb-3 text-sm font-semibold text-zinc-700 dark:text-zinc-300">
            {cp.nextExecutions || "Next Executions"}
          </h3>
          <div className="space-y-2">
            {executions.map((d, i) => (
              <div
                key={i}
                className="flex items-center gap-4 rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-3 dark:border-zinc-800 dark:bg-zinc-900"
              >
                <span className="text-xs font-semibold text-zinc-400 dark:text-zinc-500">
                  #{i + 1}
                </span>
                <code className="font-mono text-sm text-zinc-700 dark:text-zinc-300">
                  {d.toLocaleString()}
                </code>
              </div>
            ))}
          </div>
        </div>
      )}
    </ToolLayout>
  );
}