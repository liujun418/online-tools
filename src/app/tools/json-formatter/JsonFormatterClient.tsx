"use client";

import { useState, useMemo } from "react";
import ToolLayout from "@/components/ToolLayout";

const metadata = {
  title: "JSON Formatter",
  description:
    "Format, minify, and validate JSON data with syntax highlighting. Free online JSON formatter tool.",
  keywords: [
    "json formatter",
    "json validator",
    "json beautifier",
    "json minifier",
    "format json online",
    "json pretty print",
    "validate json",
  ],
  toolId: "json-formatter",
};

export default function JsonFormatterClient({ locale = "en", dict }: { locale?: string; dict?: Record<string, unknown> } = {}) {
  const [input, setInput] = useState("");
  const [error, setError] = useState<string | null>(null);
  const jf = (dict as any)?.jsonFormatter || {};

  const { formatted, minified } = useMemo(() => {
    if (!input.trim()) return { formatted: "", minified: "" };
    try {
      const obj = JSON.parse(input);
      setError(null);
      return { formatted: JSON.stringify(obj, null, 2), minified: JSON.stringify(obj) };
    } catch (e) {
      setError((e as Error).message);
      return { formatted: "", minified: "" };
    }
  }, [input]);

  function handleFormat() { if (formatted) setInput(formatted); }
  function handleMinify() { if (minified) setInput(minified); }
  function handleCopy() { if (formatted) navigator.clipboard.writeText(formatted); }

  return (
    <ToolLayout {...metadata} locale={locale as any} dict={dict}>
      <div className="flex gap-2">
        <button onClick={handleFormat} disabled={!formatted} className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 disabled:opacity-50">
          {jf.format || "Format"}
        </button>
        <button onClick={handleMinify} disabled={!minified} className="rounded-lg bg-zinc-200 px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-300 disabled:opacity-50 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700">
          {jf.minify || "Minify"}
        </button>
        <button onClick={handleCopy} disabled={!formatted} className="rounded-lg bg-zinc-200 px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-300 disabled:opacity-50 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700">
          {jf.copy || "Copy"}
        </button>
      </div>

      {error && (
        <div className="mt-4 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700 dark:border-red-800 dark:bg-red-950 dark:text-red-400">
          {jf.invalid || "Invalid JSON"}: {error}
        </div>
      )}

      {!error && input.trim() && (
        <div className="mt-2 text-sm text-green-600 dark:text-green-400">
          {jf.valid || "Valid JSON"}
        </div>
      )}

      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder={jf.placeholder || "Paste your JSON here..."}
        className="mt-4 w-full rounded-lg border border-zinc-300 bg-white p-4 font-mono text-sm dark:border-zinc-700 dark:bg-zinc-900 dark:placeholder:text-zinc-600"
        rows={16}
      />
    </ToolLayout>
  );
}
