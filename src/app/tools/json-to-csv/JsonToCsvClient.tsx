"use client";

import { useState, useCallback } from "react";
import ToolLayout from "@/components/ToolLayout";

const metadata = {
  title: "JSON to CSV Converter",
  description:
    "Convert JSON data to CSV format for spreadsheets and databases.",
  keywords: [
    "json to csv",
    "convert json to csv",
    "json csv converter",
    "export json to csv",
    "json to excel",
    "json data to csv",
  ],
};

function jsonToCsv(json: string): string {
  const data = JSON.parse(json);
  const arr = Array.isArray(data) ? data : [data];
  if (arr.length === 0) return "";
  const headers = Object.keys(arr[0]);
  const escape = (val: unknown) => {
    const s = String(val ?? "");
    return s.includes(",") || s.includes('"') || s.includes("\n")
      ? `"${s.replace(/"/g, '""')}"`
      : s;
  };
  return [
    headers.join(","),
    ...arr.map((row) => headers.map((h) => escape(row[h])).join(",")),
  ].join("\n");
}

export default function JsonToCsvClient({ locale = "en", dict }: { locale?: string; dict?: Record<string, unknown> } = {}) {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleConvert = useCallback(() => {
    try {
      setError(null);
      setOutput(jsonToCsv(input));
    } catch (e) {
      setError((e as Error).message);
      setOutput("");
    }
  }, [input]);

  function handleCopy() {
    navigator.clipboard.writeText(output);
  }

  function handleDownload() {
    const blob = new Blob([output], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "data.csv";
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <ToolLayout {...metadata} locale={locale as any} dict={dict}>
      <textarea
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
          setOutput("");
          setError(null);
        }}
        placeholder='Paste JSON array here, e.g. [{"name":"Alice","age":30},{"name":"Bob","age":25}]'
        className="w-full rounded-lg border border-zinc-300 bg-white p-4 font-mono text-sm dark:border-zinc-700 dark:bg-zinc-900 dark:placeholder:text-zinc-600"
        rows={12}
      />
      {error && (
        <div className="mt-4 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700 dark:border-red-800 dark:bg-red-950 dark:text-red-400">
          Invalid JSON: {error}
        </div>
      )}
      <div className="mt-4 flex gap-2">
        <button
          onClick={handleConvert}
          disabled={!input.trim()}
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 disabled:opacity-50"
        >
          Convert to CSV
        </button>
      </div>
      {output && (
        <div className="mt-4">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm text-green-600 dark:text-green-400">
              Converted successfully
            </span>
            <div className="flex gap-2">
              <button
                onClick={handleCopy}
                className="rounded bg-zinc-200 px-3 py-1 text-xs font-medium text-zinc-600 transition-colors hover:bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700"
              >
                Copy
              </button>
              <button
                onClick={handleDownload}
                className="rounded bg-blue-600 px-3 py-1 text-xs font-medium text-white transition-colors hover:bg-blue-700"
              >
                Download CSV
              </button>
            </div>
          </div>
          <pre className="whitespace-pre-wrap rounded-lg border border-zinc-200 bg-zinc-50 p-4 font-mono text-sm dark:border-zinc-800 dark:bg-zinc-900">
            {output}
          </pre>
        </div>
      )}
    </ToolLayout>
  );
}
