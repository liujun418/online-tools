"use client";

import { useState, useEffect, useCallback } from "react";
import ToolLayout from "@/components/ToolLayout";
import { isValidLocale, type Locale } from "@/lib/i18n";
import { tools } from "@/lib/tools";

function asLocale(locale: string): Locale {
  return (isValidLocale(locale) ? locale : "en") as Locale;
}

const tool = tools.find((t) => t.id === "time-screen")!;

function formatTime(d: Date): string {
  const h = d.getHours().toString().padStart(2, "0");
  const m = d.getMinutes().toString().padStart(2, "0");
  const s = d.getSeconds().toString().padStart(2, "0");
  return `${h}:${m}:${s}`;
}

function formatDate(d: Date, locale: string): string {
  return d.toLocaleDateString(locale === "ar" ? "ar-SA" : locale === "es" ? "es-ES" : "en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function TimeScreenClient({ locale = "en" as Locale, dict }: { locale?: Locale; dict?: Record<string, unknown> }) {
  const t = (dict as any)?.timeScreen || {};
  const [time, setTime] = useState(new Date());
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [bgMode, setBgMode] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleFS = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", handleFS);
    return () => document.removeEventListener("fullscreenchange", handleFS);
  }, []);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }, []);

  const bgClass = bgMode === "dark"
    ? "bg-black text-white"
    : "bg-white text-zinc-900";

  return (
    <ToolLayout toolId="time-screen" locale={asLocale(locale)} dict={dict}
      title={tool.seoTitle || tool.name}
      description={tool.seoDescription || tool.description}
      keywords={tool.seoKeywords || []}>
      {/* Time Display */}
      <div className={`flex flex-col items-center justify-center rounded-2xl transition-colors duration-500 ${bgClass}`} style={{ minHeight: "60vh" }}>
        <div className="text-center select-none">
          <div className="font-mono text-7xl sm:text-8xl md:text-9xl font-bold tracking-tighter tabular-nums">
            {formatTime(time)}
          </div>
          <div className="mt-3 text-lg sm:text-xl opacity-60 font-medium">
            {formatDate(time, locale)}
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        <button
          onClick={() => setBgMode(bgMode === "dark" ? "light" : "dark")}
          className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
        >
          {bgMode === "dark" ? (t.lightMode || "Light Background") : (t.darkMode || "Dark Background")}
        </button>
        <button
          onClick={toggleFullscreen}
          className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
        >
          {isFullscreen ? (t.exitFullscreen || "Exit Fullscreen") : (t.enterFullscreen || "Full Screen")}
        </button>
      </div>
    </ToolLayout>
  );
}
