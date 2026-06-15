"use client";

import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";

function minifySvg(svg: string): string {
  return svg
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/<\?xml[\s\S]*?\?>/gi, "")
    .replace(/<!DOCTYPE[\s\S]*?>/gi, "")
    .replace(/\s+/g, " ")
    .replace(/>\s+</g, "><")
    .replace(/\s*([<>/="])\s*/g, "$1")
    .replace(/\s*\/>/g, "/>")
    .trim();
}

export default function SvgMinifierClient({
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
  const sm = (dict as any)?.svgMinifier || {};

  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleMinify = () => {
    if (!input.trim()) return;
    setOutput(minifySvg(input));
  };

  const originalSize = input ? new Blob([input]).size : 0;
  const minifiedSize = output ? new Blob([output]).size : 0;
  const savings = originalSize > 0 && minifiedSize > 0
    ? (((originalSize - minifiedSize) / originalSize) * 100).toFixed(1)
    : "0";

  const metadata = {
    title: "SVG Minifier — Compress SVG Files Online",
    description: "Minify SVG code by removing comments, whitespace, and unnecessary metadata. Reduce file size for faster web pages.",
    keywords: ["svg minifier", "compress svg", "optimize svg", "svg optimizer", "minify svg online"],
    toolId: "svg-minifier",
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
        <textarea
          value={input}
          onChange={(e) => { setInput(e.target.value); setOutput(""); }}
          placeholder={sm.placeholder || "Paste your SVG here..."}
          rows={12}
          className="w-full rounded-lg border border-zinc-300 bg-white p-4 font-mono text-sm dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
        />

        {/* Minify Button */}
        <button
          onClick={handleMinify}
          disabled={!input.trim()}
          className="rounded-lg bg-blue-600 px-6 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-50"
        >
          {sm.minify || "Minify"}
        </button>

        {/* Stats */}
        {output && (
          <p className="text-sm text-green-600 dark:text-green-400">
            {(sm.reduced || "Reduced from {{original}}B to {{minified}}B ({{savings}}% smaller)")
              .replace("{{original}}", originalSize.toString())
              .replace("{{minified}}", minifiedSize.toString())
              .replace("{{savings}}", savings)}
          </p>
        )}

        {/* Output */}
        {output && (
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                {sm.result || "Result"}
              </span>
              <button
                onClick={() => navigator.clipboard.writeText(output)}
                className="rounded bg-zinc-200 px-3 py-1 text-xs font-medium text-zinc-700 hover:bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
              >
                {sm.copy || "Copy"}
              </button>
            </div>
            <textarea
              readOnly
              value={output}
              rows={12}
              className="w-full rounded-lg border border-zinc-300 bg-zinc-50 p-4 font-mono text-sm dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
            />
          </div>
        )}
      </div>
    </ToolLayout>
  );
}
