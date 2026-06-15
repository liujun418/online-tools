"use client";

import { useState, useMemo } from "react";
import ToolLayout from "@/components/ToolLayout";

function hexToRgb(hex: string): [number, number, number] | null {
  const clean = hex.replace("#", "");
  if (!/^[0-9a-fA-F]{6}$/.test(clean)) return null;
  return [
    parseInt(clean.slice(0, 2), 16),
    parseInt(clean.slice(2, 4), 16),
    parseInt(clean.slice(4, 6), 16),
  ];
}

function relativeLuminance(r: number, g: number, b: number): number {
  const [rs, gs, bs] = [r, g, b].map((c) => {
    c = c / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

function contrastRatio(fgHex: string, bgHex: string): number | null {
  const fg = hexToRgb(fgHex);
  const bg = hexToRgb(bgHex);
  if (!fg || !bg) return null;
  const l1 = relativeLuminance(...fg) + 0.05;
  const l2 = relativeLuminance(...bg) + 0.05;
  return Math.max(l1, l2) / Math.min(l1, l2);
}

interface WcagResult {
  level: string;
  threshold: number;
  pass: boolean;
}

export default function ColorContrastCheckerClient({
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
  const cc = (dict as any)?.colorContrastChecker || {};

  const [fg, setFg] = useState("#000000");
  const [bg, setBg] = useState("#FFFFFF");

  const ratio = useMemo(() => contrastRatio(fg, bg), [fg, bg]);

  const results: WcagResult[] = useMemo(() => {
    if (ratio === null) return [];
    return [
      { level: cc.aaNormal || "AA Normal", threshold: 4.5, pass: ratio >= 4.5 },
      { level: cc.aaLarge || "AA Large", threshold: 3, pass: ratio >= 3 },
      { level: cc.aaaNormal || "AAA Normal", threshold: 7, pass: ratio >= 7 },
      { level: cc.aaaLarge || "AAA Large", threshold: 4.5, pass: ratio >= 4.5 },
    ];
  }, [ratio, cc.aaNormal, cc.aaLarge, cc.aaaNormal, cc.aaaLarge]);

  const metadata = {
    title: "Color Contrast Checker — WCAG Accessibility Tool",
    description: "Check color contrast ratios for WCAG 2.1 compliance. Enter foreground and background colors to see pass/fail results for AA and AAA levels.",
    keywords: ["color contrast checker", "WCAG contrast", "accessibility checker", "color accessibility", "contrast ratio"],
    toolId: "color-contrast-checker",
  };

  return (
    <ToolLayout
      title={titleOverride || metadata.title}
      description={descriptionOverride || metadata.description}
      keywords={metadata.keywords}
      toolId={metadata.toolId}
      locale={locale as any}
      dict={dict}
    >
      <div className="space-y-6">
        {/* Color Pickers */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              {cc.foreground || "Foreground Color"}
            </label>
            <div className="flex items-center gap-3">
              <input
                type="color"
                value={fg}
                onChange={(e) => setFg(e.target.value)}
                className="h-10 w-10 cursor-pointer rounded border border-zinc-300 dark:border-zinc-600"
              />
              <input
                type="text"
                value={fg}
                onChange={(e) => {
                  const v = e.target.value;
                  if (/^#[0-9a-fA-F]{0,6}$/.test(v)) setFg(v);
                }}
                onBlur={(e) => {
                  const v = e.target.value;
                  if (/^#[0-9a-fA-F]{6}$/.test(v)) setFg(v);
                }}
                className="w-28 rounded-lg border border-zinc-300 bg-white px-3 py-2 font-mono text-sm dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
                placeholder="#000000"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              {cc.background || "Background Color"}
            </label>
            <div className="flex items-center gap-3">
              <input
                type="color"
                value={bg}
                onChange={(e) => setBg(e.target.value)}
                className="h-10 w-10 cursor-pointer rounded border border-zinc-300 dark:border-zinc-600"
              />
              <input
                type="text"
                value={bg}
                onChange={(e) => {
                  const v = e.target.value;
                  if (/^#[0-9a-fA-F]{0,6}$/.test(v)) setBg(v);
                }}
                onBlur={(e) => {
                  const v = e.target.value;
                  if (/^#[0-9a-fA-F]{6}$/.test(v)) setBg(v);
                }}
                className="w-28 rounded-lg border border-zinc-300 bg-white px-3 py-2 font-mono text-sm dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
                placeholder="#FFFFFF"
              />
            </div>
          </div>
        </div>

        {/* Preview */}
        <div
          className="rounded-xl border border-zinc-200 p-8 text-center text-xl font-semibold dark:border-zinc-700"
          style={{ color: fg, backgroundColor: bg }}
        >
          {cc.previewText || "The quick brown fox jumps over the lazy dog."}
        </div>

        {/* Contrast Ratio */}
        {ratio !== null && (
          <div className="text-center">
            <span className="text-sm text-zinc-500 dark:text-zinc-400">
              {cc.contrastRatio || "Contrast Ratio"}
            </span>
            <div className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
              {ratio.toFixed(2)}:1
            </div>
          </div>
        )}

        {/* WCAG Results */}
        {results.length > 0 && (
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {results.map((r) => (
              <div
                key={r.level}
                className={`rounded-lg border p-3 text-center ${
                  r.pass
                    ? "border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950"
                    : "border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950"
                }`}
              >
                <div className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                  {r.level}
                </div>
                <div className="text-xs text-zinc-400 dark:text-zinc-500">
                  ≥ {r.threshold}:1
                </div>
                <div
                  className={`mt-1 text-sm font-bold ${
                    r.pass
                      ? "text-green-700 dark:text-green-400"
                      : "text-red-700 dark:text-red-400"
                  }`}
                >
                  {r.pass ? (cc.pass || "Pass") : (cc.fail || "Fail")}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </ToolLayout>
  );
}
