"use client";

import { useState, useMemo } from "react";
import ToolLayout from "@/components/ToolLayout";

function detectFormat(raw: string): string {
  const trimmed = raw.trim();
  if (trimmed.startsWith("iVBORw0KGgo")) return "png";
  if (trimmed.startsWith("/9j/")) return "jpeg";
  if (trimmed.startsWith("R0lGOD")) return "gif";
  if (trimmed.startsWith("UklGR")) return "webp";
  if (trimmed.startsWith("PHN2") || trimmed.includes("<svg")) return "svg+xml";
  return "png";
}

function buildDataUri(raw: string): { src: string; format: string } | null {
  const trimmed = raw.trim();
  if (!trimmed) return null;

  // Already a data URI
  if (trimmed.startsWith("data:image/")) {
    const fmt = trimmed.match(/data:image\/(\w+);?/)?.[1] || "png";
    return { src: trimmed, format: fmt };
  }

  // Raw base64 - detect format from magic bytes
  const fmt = detectFormat(trimmed);
  return { src: `data:image/${fmt};base64,${trimmed}`, format: fmt };
}

export default function Base64ToImageClient({
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
  const bti = (dict as any)?.base64ToImage || {};

  const [input, setInput] = useState("");
  const [error, setError] = useState<string | null>(null);

  const result = useMemo(() => {
    setError(null);
    if (!input.trim()) return null;
    try {
      const r = buildDataUri(input);
      if (!r) return null;
      // Validate by testing atob
      const b64 = r.src.includes("base64,") ? r.src.split("base64,")[1] : "";
      if (b64) {
        try { atob(b64); } catch { setError(bti.error || "Invalid Base64 string"); return null; }
      }
      return r;
    } catch {
      setError(bti.error || "Invalid Base64 string");
      return null;
    }
  }, [input, bti.error]);

  const metadata = {
    title: "Base64 to Image Converter — Decode Online",
    description: "Convert Base64 encoded strings back to image files. Preview and download PNG, JPEG, GIF, WebP, or SVG images instantly.",
    keywords: ["base64 to image", "convert base64 to image", "base64 decoder", "decode base64 image", "base64 to png"],
    toolId: "base64-to-image",
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
      <div className="space-y-4">
        {/* Input */}
        <div>
          <label className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
            Base64 Input
          </label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={bti.placeholder || "Paste your Base64 string here..."}
            rows={6}
            className="w-full rounded-lg border border-zinc-300 bg-white p-4 font-mono text-sm dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
          />
        </div>

        {/* Error */}
        {error && (
          <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700 dark:border-red-800 dark:bg-red-950 dark:text-red-300">
            {error}
          </div>
        )}

        {/* Format Badge + Preview */}
        {result && !error && (
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-sm text-zinc-500 dark:text-zinc-400">
                {bti.format || "Detected format"}:
              </span>
              <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700 dark:bg-blue-900 dark:text-blue-300">
                {result.format.toUpperCase()}
              </span>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                {bti.preview || "Preview"}
              </label>
              <div className="rounded-lg border border-zinc-200 bg-[repeating-conic-gradient(#e5e7eb_0%_25%,transparent_0%_50%)_50%/20px_20px] p-4 dark:border-zinc-700">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={result.src}
                  alt="Decoded preview"
                  className="mx-auto max-h-64 max-w-full rounded object-contain"
                  onError={() => setError(bti.error || "Invalid Base64 string")}
                />
              </div>
            </div>

            {/* Download */}
            <a
              href={result.src}
              download={`decoded-image.${result.format === "svg+xml" ? "svg" : result.format}`}
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-2 text-sm font-medium text-white hover:bg-blue-700"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              {bti.download || "Download Image"}
            </a>
          </div>
        )}
      </div>
    </ToolLayout>
  );
}
