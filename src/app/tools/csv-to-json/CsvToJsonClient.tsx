"use client";

import { useState, useCallback } from "react";
import ToolLayout from "@/components/ToolLayout";

const metadata = {
  title: "CSV to JSON Converter",
  description:
    "Convert CSV data to JSON format for APIs and web applications.",
  keywords: [
    "csv to json",
    "convert csv to json",
    "csv json converter",
    "csv to json online",
    "import csv to json",
    "csv data to json",
  ],
};

function csvToJson(csv: string): string {
  const lines = csv.trim().split("\n");
  if (lines.length < 2) return "[]";
  const headers = lines[0].split(",").map((h) => h.trim().replace(/^"|"$/g, ""));
  const parseLine = (line: string) => {
    const values: string[] = [];
    let current = "";
    let inQuotes = false;
    for (let i = 0; i < line.length; i++) {
      const c = line[i];
      if (c === '"') {
        if (inQuotes && line[i + 1] === '"') {
          current += '"';
          i++;
        } else {
          inQuotes = !inQuotes;
        }
      } else if (c === "," && !inQuotes) {
        values.push(current.trim());
        current = "";
      } else {
        current += c;
      }
    }
    values.push(current.trim());
    return values;
  };
  const result = lines.slice(1).map((line) => {
    const values = parseLine(line);
    const obj: Record<string, string> = {};
    headers.forEach((h, i) => {
      obj[h] = values[i] ?? "";
    });
    return obj;
  });
  return JSON.stringify(result, null, 2);
}

export default function CsvToJsonClient({ locale = "en", dict }: { locale?: string; dict?: Record<string, unknown> } = {}) {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleConvert = useCallback(() => {
    try {
      setError(null);
      setOutput(csvToJson(input));
    } catch (e) {
      setError((e as Error).message);
      setOutput("");
    }
  }, [input]);

  function handleCopy() {
    navigator.clipboard.writeText(output);
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
        placeholder="Paste CSV data here, e.g.\nname,age\nAlice,30\nBob,25"
        className="w-full rounded-lg border border-zinc-300 bg-white p-4 font-mono text-sm dark:border-zinc-700 dark:bg-zinc-900 dark:placeholder:text-zinc-600"
        rows={12}
      />
      {error && (
        <div className="mt-4 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700 dark:border-red-800 dark:bg-red-950 dark:text-red-400">
          Error: {error}
        </div>
      )}
      <div className="mt-4 flex gap-2">
        <button
          onClick={handleConvert}
          disabled={!input.trim()}
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 disabled:opacity-50"
        >
          Convert to JSON
        </button>
      </div>
      {output && (
        <div className="mt-4">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm text-green-600 dark:text-green-400">
              Converted successfully
            </span>
            <button
              onClick={handleCopy}
              className="rounded bg-zinc-200 px-3 py-1 text-xs font-medium text-zinc-600 transition-colors hover:bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700"
            >
              Copy
            </button>
          </div>
          <pre className="whitespace-pre-wrap rounded-lg border border-zinc-200 bg-zinc-50 p-4 font-mono text-sm dark:border-zinc-800 dark:bg-zinc-900">
            {output}
          </pre>
        </div>
      )}
    </ToolLayout>
  );
}
