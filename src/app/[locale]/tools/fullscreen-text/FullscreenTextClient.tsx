"use client";

import { useState, useEffect, useCallback } from "react";
import ToolLayout from "@/components/ToolLayout";
import { isValidLocale, type Locale } from "@/lib/i18n";
import { tools } from "@/lib/tools";

function asLocale(locale: string): Locale {
  return (isValidLocale(locale) ? locale : "en") as Locale;
}

const tool = tools.find((t) => t.id === "fullscreen-text")!;

const BG_PRESETS = ["#ffffff", "#000000", "#f5f0e8", "#1a1a2e", "#e8f5e9", "#fff3e0", "#e3f2fd"];
const TEXT_PRESETS = ["#171717", "#ffffff", "#8b4513", "#e0e0e0", "#1b5e20", "#e65100", "#0d47a1"];

export default function FullscreenTextClient({ locale = "en" as Locale, dict }: { locale?: Locale; dict?: Record<string, unknown> }) {
  const t = (dict as any)?.fullscreenText || {};
  const [text, setText] = useState("");
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [bgColor, setBgColor] = useState("#f5f0e8");
  const [textColor, setTextColor] = useState("#171717");

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
    const style = document.createElement("style");
    style.id = "fs-text-hide";
    style.textContent = "#kofi-floating-chat, iframe[id*=kofi], .floatingchat-container, .floating-chat-kofi, [id*=ko-fi]{display:none!important}";
    document.head.appendChild(style);
    return () => {
      document.removeEventListener("keydown", handleKey);
      const s = document.getElementById("fs-text-hide");
      if (s) s.remove();
    };
  }, [isFullscreen, exitFullscreen]);

  if (isFullscreen) {
    return (
      <div
        className="fixed inset-0 z-[99999] flex items-center justify-center p-8 transition-colors duration-500 cursor-pointer"
        style={{ backgroundColor: bgColor, color: textColor }}
        onClick={exitFullscreen}
      >
        <div className="text-center select-none max-w-full max-h-full overflow-hidden">
          <div className="font-bold leading-tight whitespace-pre-wrap break-words" style={{ fontSize: "min(16vw, 16vh)" }}>
            {text || (t.placeholder || "Your text here")}
          </div>
        </div>
        <p className="absolute bottom-6 text-sm opacity-30" style={{ color: textColor }}>{t.exitHint || "Click anywhere or press Esc to exit"}</p>
      </div>
    );
  }

  return (
    <ToolLayout toolId="fullscreen-text" locale={asLocale(locale)} dict={dict}
      title={tool.seoTitle || tool.name}
      description={tool.seoDescription || tool.description}
      keywords={tool.seoKeywords || []}>
      <div className="space-y-6">
        {/* Text Input */}
        <div>
          <label className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300">{t.textLabel || "Your Text"}</label>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={4}
            placeholder={t.textPlaceholder || "Type anything — a message, a reminder, a quote..."}
            className="w-full rounded-xl border border-zinc-300 px-4 py-3 text-sm dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
          />
        </div>

        {/* Background Color */}
        <div>
          <label className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300">{t.bgColor || "Background Color"}</label>
          <div className="flex flex-wrap items-center gap-2">
            {BG_PRESETS.map((c) => (
              <button
                key={c}
                onClick={() => setBgColor(c)}
                className="h-8 w-8 rounded-full border-2 transition-all hover:scale-110"
                style={{ backgroundColor: c, borderColor: bgColor === c ? textColor : "transparent", outline: bgColor === c ? `2px solid ${textColor}` : "none", outlineOffset: "2px" }}
                title={c}
              />
            ))}
            <span className="mx-1 text-zinc-400">|</span>
            <input
              type="color"
              value={bgColor}
              onChange={(e) => setBgColor(e.target.value)}
              className="h-8 w-8 cursor-pointer rounded border border-zinc-300 p-0 dark:border-zinc-700"
              title={t.customColor || "Custom color"}
            />
          </div>
        </div>

        {/* Text Color */}
        <div>
          <label className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300">{t.textColor || "Text Color"}</label>
          <div className="flex flex-wrap items-center gap-2">
            {TEXT_PRESETS.map((c) => (
              <button
                key={c}
                onClick={() => setTextColor(c)}
                className="h-8 w-8 rounded-full border-2 transition-all hover:scale-110"
                style={{ backgroundColor: c, borderColor: textColor === c ? bgColor : "transparent", outline: textColor === c ? `2px solid ${bgColor}` : "none", outlineOffset: "2px" }}
                title={c}
              />
            ))}
            <span className="mx-1 text-zinc-400">|</span>
            <input
              type="color"
              value={textColor}
              onChange={(e) => setTextColor(e.target.value)}
              className="h-8 w-8 cursor-pointer rounded border border-zinc-300 p-0 dark:border-zinc-700"
              title={t.customColor || "Custom color"}
            />
          </div>
        </div>

        {/* Preview + Fullscreen */}
        <div className="flex flex-col items-center gap-4">
          <div
            className="flex w-full items-center justify-center rounded-2xl p-8 transition-colors duration-300"
            style={{ backgroundColor: bgColor, color: textColor, minHeight: "200px" }}
          >
            <div className="text-center select-none">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight whitespace-pre-wrap break-words">
                {text || (t.previewPlaceholder || "Your text will appear here")}
              </div>
            </div>
          </div>
          <button
            onClick={enterFullscreen}
            className="rounded-lg bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            {t.enterFullscreen || "Full Screen"}
          </button>
        </div>
      </div>
    </ToolLayout>
  );
}
