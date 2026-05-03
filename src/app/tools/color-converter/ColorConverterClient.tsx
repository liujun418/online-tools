"use client";

import { useState, useMemo } from "react";
import ToolLayout from "@/components/ToolLayout";

const metadata = {
  title: "Color Converter",
  description:
    "Convert colors between HEX, RGB, and HSL formats with live preview. Free online color converter.",
};

function hexToRgb(hex: string): [number, number, number] | null {
  const m = hex.replace("#", "").match(/^([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
  return m ? [parseInt(m[1], 16), parseInt(m[2], 16), parseInt(m[3], 16)] : null;
}

function rgbToHsl(r: number, g: number, b: number): [number, number, number] {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h = 0, s = 0;
  const l = (max + min) / 2;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    if (max === r) h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
    else if (max === g) h = ((b - r) / d + 2) / 6;
    else h = ((r - g) / d + 4) / 6;
  }
  return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)];
}

function hslToRgb(h: number, s: number, l: number): [number, number, number] {
  h /= 360; s /= 100; l /= 100;
  let r, g, b;
  if (s === 0) { r = g = b = l; }
  else {
    const hue2rgb = (p: number, q: number, t: number) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1/6) return p + (q - p) * 6 * t;
      if (t < 1/2) return q;
      if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
      return p;
    };
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1/3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1/3);
  }
  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

function rgbToHex(r: number, g: number, b: number): string {
  return "#" + [r, g, b].map((c) => c.toString(16).padStart(2, "0")).join("");
}

export default function ColorConverterClient() {
  const [hex, setHex] = useState("#3B82F6");

  const rgb = hexToRgb(hex) || [59, 130, 246];
  const hsl = rgbToHsl(...rgb);

  return (
    <ToolLayout {...metadata}>
      <div className="flex items-center gap-4">
        <input
          type="color"
          value={hex}
          onChange={(e) => setHex(e.target.value)}
          className="h-16 w-16 cursor-pointer rounded-lg border-0"
        />
        <input
          type="text"
          value={hex}
          onChange={(e) => {
            setHex(e.target.value);
          }}
          className="w-32 rounded-lg border border-zinc-300 bg-white px-3 py-2 font-mono text-sm uppercase dark:border-zinc-700 dark:bg-zinc-900"
          placeholder="#000000"
        />
      </div>

      <div
        className="mt-6 h-24 w-full rounded-lg border border-zinc-200 dark:border-zinc-800"
        style={{ backgroundColor: hex }}
      />

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900">
          <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            HEX
          </div>
          <div className="font-mono text-lg text-zinc-700 dark:text-zinc-300">{hex.toUpperCase()}</div>
        </div>
        <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900">
          <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            RGB
          </div>
          <div className="font-mono text-lg text-zinc-700 dark:text-zinc-300">rgb({rgb.join(", ")})</div>
        </div>
        <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900">
          <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            HSL
          </div>
          <div className="font-mono text-lg text-zinc-700 dark:text-zinc-300">hsl({hsl.join(", ")})</div>
        </div>
      </div>

      <div className="mt-4 flex gap-2">
        {[hex, `rgb(${rgb.join(", ")})`, `hsl(${hsl.join(", ")})`].map((val) => (
          <button
            key={val}
            onClick={() => navigator.clipboard.writeText(val)}
            className="rounded-lg bg-zinc-200 px-3 py-1 text-xs font-medium text-zinc-700 transition-colors hover:bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
          >
            Copy {val.slice(0, 8)}...
          </button>
        ))}
      </div>
    </ToolLayout>
  );
}
