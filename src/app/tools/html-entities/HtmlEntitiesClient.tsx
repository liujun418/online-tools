"use client";

import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";

const metadata = {
  title: "HTML Entity Encoder",
  description:
    "Encode or decode HTML entities and special characters safely.",
  keywords: [
    "html entity encoder",
    "html entity decoder",
    "encode html entities",
    "decode html entities",
    "escape html characters",
    "unescape html",
    "special characters encoder",
  ],
};

export default function HtmlEntitiesClient({ locale = "en", dict }: { locale?: string; dict?: Record<string, unknown> } = {}) {
  const [input, setInput] = useState("");
  const [encoded, setEncoded] = useState("");
  const [decoded, setDecoded] = useState("");
  const he = (dict as any)?.htmlEntities || {};

  function handleEncode() {
    setEncoded(
      input
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;")
    );
  }

  function handleDecode() {
    setDecoded(
      input
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&quot;/g, '"')
        .replace(/&#039;/g, "'")
        .replace(/&amp;/g, "&")
    );
  }

  return (
    <ToolLayout {...metadata} locale={locale as any} dict={dict}>
      <textarea
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
          setEncoded("");
          setDecoded("");
        }}
        placeholder={he.placeholder || "Enter text with special characters to encode/decode..."}
        className="w-full rounded-lg border border-zinc-300 bg-white p-4 font-mono text-sm dark:border-zinc-700 dark:bg-zinc-900 dark:placeholder:text-zinc-600"
        rows={8}
      />
      <div className="mt-4 flex gap-2">
        <button
          onClick={handleEncode}
          disabled={!input.trim()}
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 disabled:opacity-50"
        >
          {he.encode || "Encode"}
        </button>
        <button
          onClick={handleDecode}
          disabled={!input.trim()}
          className="rounded-lg bg-zinc-200 px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-300 disabled:opacity-50 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
        >
          {he.decode || "Decode"}
        </button>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        {encoded && (
          <div>
            <label className="mb-2 block text-sm font-medium text-zinc-500 dark:text-zinc-400">
              {he.encoded || "Encoded"}
            </label>
            <div className="flex items-center justify-between rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-2 dark:border-zinc-800 dark:bg-zinc-900">
              <code className="whitespace-pre-wrap break-all font-mono text-sm">
                {encoded}
              </code>
              <button
                onClick={() => navigator.clipboard.writeText(encoded)}
                className="ml-2 shrink-0 rounded bg-zinc-200 px-3 py-1 text-xs font-medium text-zinc-600 transition-colors hover:bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700"
              >
                {he.copy || "Copy"}
              </button>
            </div>
          </div>
        )}
        {decoded && (
          <div>
            <label className="mb-2 block text-sm font-medium text-zinc-500 dark:text-zinc-400">
              {he.decoded || "Decoded"}
            </label>
            <div className="flex items-center justify-between rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-2 dark:border-zinc-800 dark:bg-zinc-900">
              <code className="whitespace-pre-wrap break-all font-mono text-sm">
                {decoded}
              </code>
              <button
                onClick={() => navigator.clipboard.writeText(decoded)}
                className="ml-2 shrink-0 rounded bg-zinc-200 px-3 py-1 text-xs font-medium text-zinc-600 transition-colors hover:bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700"
              >
                {he.copy || "Copy"}
              </button>
            </div>
          </div>
        )}
      </div>
    </ToolLayout>
  );
}
