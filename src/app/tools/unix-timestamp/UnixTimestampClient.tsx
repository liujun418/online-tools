"use client";

import { useState, useMemo, useEffect } from "react";
import ToolLayout from "@/components/ToolLayout";

const metadata = {
  title: "Unix Timestamp Converter",
  description:
    "Convert Unix timestamps to human-readable dates and vice versa. Free online timestamp converter.",
  keywords: [
    "unix timestamp converter",
    "timestamp to date",
    "epoch converter",
    "unix time converter",
    "convert timestamp",
    "epoch to date",
    "current unix timestamp",
  ],
};

export default function UnixTimestampClient({ locale = "en", dict }: { locale?: string; dict?: Record<string, unknown> } = {}) {
  const [input, setInput] = useState(Math.floor(Date.now() / 1000).toString());
  const [now, setNow] = useState(Math.floor(Date.now() / 1000));
  const ut = (dict as any)?.unixTimestamp || {};

  useEffect(() => {
    const interval = setInterval(() => setNow(Math.floor(Date.now() / 1000)), 1000);
    return () => clearInterval(interval);
  }, []);

  const dateResult = useMemo(() => {
    const ts = parseInt(input);
    if (isNaN(ts)) return null;
    const ms = ts < 1e12 ? ts * 1000 : ts;
    const d = new Date(ms);
    if (isNaN(d.getTime())) return null;
    return {
      utc: d.toUTCString(),
      local: d.toLocaleString(),
      iso: d.toISOString(),
      relative: getRelativeTime(d, ut),
    };
  }, [input]);

  const isoResult = useMemo(() => {
    if (!input.trim() || isNaN(new Date(input).getTime())) return null;
    const d = new Date(input);
    return Math.floor(d.getTime() / 1000);
  }, [input]);

  return (
    <ToolLayout {...metadata} locale={locale as any} dict={dict}>
      <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-4 text-center dark:border-zinc-800 dark:bg-zinc-900">
        <div className="text-sm text-zinc-500 dark:text-zinc-400">{ut.currentTimestamp || "Current Unix Timestamp"}</div>
        <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 font-mono">{now}</div>
      </div>

      <div className="mt-6 space-y-6">
        {/* Timestamp to Date */}
        <div>
          <h3 className="mb-3 font-medium text-zinc-700 dark:text-zinc-300">
            {ut.timestampToDate || "Timestamp → Date"}
          </h3>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={ut.placeholder || "Enter Unix timestamp..."}
            className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-2 font-mono text-sm dark:border-zinc-700 dark:bg-zinc-900"
          />
          {dateResult && (
            <div className="mt-3 space-y-2 rounded-lg border border-zinc-200 bg-zinc-50 p-4 text-sm dark:border-zinc-800 dark:bg-zinc-900">
              <div><span className="text-zinc-500 dark:text-zinc-400">{ut.utcLabel || "UTC"}: </span><span className="font-mono">{dateResult.utc}</span></div>
              <div><span className="text-zinc-500 dark:text-zinc-400">{ut.localLabel || "Local"}: </span><span className="font-mono">{dateResult.local}</span></div>
              <div><span className="text-zinc-500 dark:text-zinc-400">{ut.isoLabel || "ISO"}: </span><span className="font-mono">{dateResult.iso}</span></div>
              <div><span className="text-zinc-500 dark:text-zinc-400">{ut.relativeLabel || "Relative"}: </span><span className="text-blue-600 dark:text-blue-400">{dateResult.relative}</span></div>
            </div>
          )}
        </div>

        {/* Date to Timestamp */}
        <div>
          <h3 className="mb-3 font-medium text-zinc-700 dark:text-zinc-300">
            {ut.dateToTimestamp || "Date → Timestamp"}
          </h3>
          <input
            type="datetime-local"
            onChange={(e) => {
              const ts = e.target.value ? Math.floor(new Date(e.target.value).getTime() / 1000) : "";
              if (ts) setInput(ts.toString());
            }}
            className="rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-900"
          />
          {isoResult !== null && (
            <div className="mt-3 rounded-lg border border-zinc-200 bg-zinc-50 p-4 font-mono text-lg dark:border-zinc-800 dark:bg-zinc-900">
              <span className="font-bold text-blue-600 dark:text-blue-400">{isoResult}</span>
            </div>
          )}
        </div>
      </div>
    </ToolLayout>
  );
}

function getRelativeTime(date: Date, t: Record<string, string>): string {
  const now = new Date();
  const diff = date.getTime() - now.getTime();
  const abs = Math.abs(diff);
  const seconds = Math.floor(abs / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  const fmt = (key: string, count: number) => {
    const template = t[key] || "";
    return template.replace("{{count}}", String(count)).replace("{{s}}", count > 1 ? "s" : "");
  };

  if (seconds < 60) return t.justNow || "just now";
  if (minutes < 60) return diff > 0 ? fmt("inMinutes", minutes) : fmt("minutesAgo", minutes);
  if (hours < 24) return diff > 0 ? fmt("inHours", hours) : fmt("hoursAgo", hours);
  return diff > 0 ? fmt("inDays", days) : fmt("daysAgo", days);
}
