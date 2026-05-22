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
  const [showDate, setShowDate] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const enterFullscreen = useCallback(async () => {
    try { await document.documentElement.requestFullscreen(); } catch {}
    setIsFullscreen(true);
  }, []);

  const exitFullscreen = useCallback(async () => {
    if (document.fullscreenElement) {
      try { await document.exitFullscreen(); } catch {}
    }
    setIsFullscreen(false);
  }, []);

  useEffect(() => {
    const handleFSChange = () => {
      if (!document.fullscreenElement) setIsFullscreen(false);
    };
    document.addEventListener("fullscreenchange", handleFSChange);
    return () => document.removeEventListener("fullscreenchange", handleFSChange);
  }, []);

  useEffect(() => {
    if (!isFullscreen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") exitFullscreen();
    };
    document.addEventListener("keydown", handleKey);
    // Hide Kofi and any floating third-party widgets when fullscreen
    const style = document.createElement("style");
    style.id = "time-screen-fs";
    style.textContent = "#kofi-floating-chat, iframe[id*=kofi], .floatingchat-container, .floating-chat-kofi, [id*=ko-fi]{display:none!important}";
    document.head.appendChild(style);
    return () => {
      document.removeEventListener("keydown", handleKey);
      const s = document.getElementById("time-screen-fs");
      if (s) s.remove();
    };
  }, [isFullscreen, exitFullscreen]);

  const bgClass = bgMode === "dark"
    ? "bg-black text-white"
    : "bg-white text-zinc-900";

  if (isFullscreen) {
    return (
      <div
        className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center transition-colors duration-500 cursor-pointer ${bgClass}`}
        onClick={exitFullscreen}
      >
        <div className="text-center select-none">
          <div className="font-mono text-[10vw] sm:text-[12vw] md:text-9xl font-bold tracking-tighter tabular-nums leading-none">
            {formatTime(time)}
          </div>
          {showDate && (
            <div className="mt-4 text-lg sm:text-2xl md:text-3xl opacity-40 font-medium">
              {formatDate(time, locale)}
            </div>
          )}
        </div>
        <p className="absolute bottom-8 text-sm opacity-25">{t.exitHint || "Click anywhere or press Esc to exit"}</p>
      </div>
    );
  }

  return (
    <ToolLayout toolId="time-screen" locale={asLocale(locale)} dict={dict}
      title={tool.seoTitle || tool.name}
      description={tool.seoDescription || tool.description}
      keywords={tool.seoKeywords || []}>
      <div className={`flex flex-col items-center justify-center rounded-2xl transition-colors duration-500 ${bgClass}`} style={{ minHeight: "60vh" }}>
        <div className="text-center select-none">
          <div className="font-mono text-7xl sm:text-8xl md:text-9xl font-bold tracking-tighter tabular-nums">
            {formatTime(time)}
          </div>
          {showDate && (
            <div className="mt-3 text-lg sm:text-xl opacity-50 font-medium">
              {formatDate(time, locale)}
            </div>
          )}
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        <button
          onClick={() => setBgMode(bgMode === "dark" ? "light" : "dark")}
          className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
        >
          {bgMode === "dark" ? (t.lightMode || "Light Background") : (t.darkMode || "Dark Background")}
        </button>
        <button
          onClick={() => setShowDate(!showDate)}
          className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
        >
          {showDate ? (t.hideDate || "Hide Date") : (t.showDate || "Show Date")}
        </button>
        <button
          onClick={enterFullscreen}
          className="rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          {t.enterFullscreen || "Full Screen"}
        </button>
      </div>
    </ToolLayout>
  );
}
