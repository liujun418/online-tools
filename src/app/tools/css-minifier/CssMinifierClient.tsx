"use client";

import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";

const metadata = {
  title: "CSS Minifier",
  description:
    "Minify and beautify CSS code. Remove whitespace and comments for production.",
  keywords: [
    "css minifier",
    "css compressor",
    "minify css online",
    "css beautifier",
    "css formatter",
    "remove css whitespace",
  ],
};

function minifyCss(css: string): string {
  return css
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/\s+/g, " ")
    .replace(/\s*([{}:;,>+~])\s*/g, "$1")
    .replace(/;}/g, "}")
    .trim();
}

function beautifyCss(css: string): string {
  let indent = 0;
  let result = "";
  const chars = css.replace(/\s+/g, " ").trim().split("");
  for (let i = 0; i < chars.length; i++) {
    const c = chars[i];
    if (c === "{") {
      result += " {\n" + "  ".repeat(++indent);
    } else if (c === "}") {
      result = result.trimEnd();
      result += "\n" + "  ".repeat(--indent) + "}\n" + "  ".repeat(indent);
    } else if (c === ";") {
      result += ";\n" + "  ".repeat(indent);
    } else if (c === ",") {
      result += ",\n" + "  ".repeat(indent);
    } else {
      result += c;
    }
  }
  return result.trim();
}

export default function CssMinifierClient() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [mode, setMode] = useState<"minify" | "beautify">("minify");

  function handleProcess() {
    if (!input.trim()) return;
    setOutput(mode === "minify" ? minifyCss(input) : beautifyCss(input));
  }

  function handleCopy() {
    navigator.clipboard.writeText(output);
  }

  const originalSize = new Blob([input]).size;
  const minifiedSize = new Blob([output]).size;
  const savings = originalSize > 0 ? (((originalSize - minifiedSize) / originalSize) * 100).toFixed(1) : 0;

  return (
    <ToolLayout {...metadata}>
      <div className="flex gap-2">
        <button
          onClick={() => { setMode("minify"); setOutput(""); }}
          className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
            mode === "minify" ? "bg-blue-600 text-white" : "bg-zinc-200 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
          }`}
        >
          Minify
        </button>
        <button
          onClick={() => { setMode("beautify"); setOutput(""); }}
          className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
            mode === "beautify" ? "bg-blue-600 text-white" : "bg-zinc-200 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
          }`}
        >
          Beautify
        </button>
      </div>

      <textarea
        value={input}
        onChange={(e) => { setInput(e.target.value); setOutput(""); }}
        placeholder="Paste your CSS here..."
        className="mt-4 w-full rounded-lg border border-zinc-300 bg-white p-4 font-mono text-sm dark:border-zinc-700 dark:bg-zinc-900 dark:placeholder:text-zinc-600"
        rows={12}
      />

      <div className="mt-4 flex gap-2">
        <button
          onClick={handleProcess}
          disabled={!input.trim()}
          className="rounded-lg bg-blue-600 px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 disabled:opacity-50"
        >
          {mode === "minify" ? "Minify" : "Beautify"}
        </button>
      </div>

      {output && (
        <div className="mt-4">
          {mode === "minify" && (
            <div className="mb-2 text-sm text-green-600 dark:text-green-400">
              Reduced from {originalSize.toLocaleString()}B to {minifiedSize.toLocaleString()}B ({savings}% smaller)
            </div>
          )}
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Result</label>
            <button onClick={handleCopy} className="rounded bg-zinc-200 px-3 py-1 text-xs font-medium text-zinc-700 transition-colors hover:bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700">
              Copy
            </button>
          </div>
          <textarea
            readOnly
            value={output}
            className="mt-2 w-full rounded-lg border border-zinc-200 bg-zinc-50 p-4 font-mono text-sm dark:border-zinc-800 dark:bg-zinc-900"
            rows={12}
          />
        </div>
      )}
    </ToolLayout>
  );
}
