"use client";

import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";

const metadata = {
  title: "URL Encoder/Decoder",
  description:
    "Encode or decode URLs and URL components. Free online URL encoding tool.",
  keywords: [
    "url encoder",
    "url decoder",
    "url encode online",
    "url decode online",
    "percent encoding",
    "encodeURIComponent",
    "url encoding tool",
  ],
};

export default function UrlEncoderClient({ locale = "en", dict }: { locale?: string; dict?: Record<string, unknown> } = {}) {
  const [input, setInput] = useState("");
  const [encoded, setEncoded] = useState("");
  const [decoded, setDecoded] = useState("");
  const [error, setError] = useState<string | null>(null);
  const ue = (dict as any)?.urlEncoder || {};

  function handleEncode() {
    if (input.trim()) {
      setEncoded(encodeURIComponent(input));
      setError(null);
    }
  }

  function handleDecode() {
    if (input.trim()) {
      try {
        setDecoded(decodeURIComponent(input));
        setError(null);
      } catch (e) {
        setError((e as Error).message);
        setDecoded("");
      }
    }
  }

  return (
    <ToolLayout {...metadata} locale={locale as any} dict={dict}>
      <textarea
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
          setEncoded("");
          setDecoded("");
          setError(null);
        }}
        placeholder={ue.placeholder || "Enter URL or text to encode/decode..."}
        className="w-full rounded-lg border border-zinc-300 bg-white p-4 font-mono text-sm dark:border-zinc-700 dark:bg-zinc-900 dark:placeholder:text-zinc-600"
        rows={6}
      />
      <div className="mt-4 flex gap-2">
        <button
          onClick={handleEncode}
          disabled={!input.trim()}
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 disabled:opacity-50"
        >
          {ue.encode || "Encode"}
        </button>
        <button
          onClick={handleDecode}
          disabled={!input.trim()}
          className="rounded-lg bg-zinc-200 px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-300 disabled:opacity-50 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
        >
          {ue.decode || "Decode"}
        </button>
      </div>

      {error && (
        <div className="mt-4 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700 dark:border-red-800 dark:bg-red-950 dark:text-red-400">
          {ue.error || "Error"}: {error}
        </div>
      )}

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {encoded && (
          <div>
            <label className="mb-1 block text-sm font-medium text-zinc-500 dark:text-zinc-400">
              {ue.encoded || "Encoded"}
            </label>
            <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-4 font-mono text-sm break-all dark:border-zinc-800 dark:bg-zinc-900">
              {encoded}
            </div>
          </div>
        )}
        {decoded && (
          <div>
            <label className="mb-1 block text-sm font-medium text-zinc-500 dark:text-zinc-400">
              {ue.decoded || "Decoded"}
            </label>
            <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-4 font-mono text-sm break-all dark:border-zinc-800 dark:bg-zinc-900">
              {decoded}
            </div>
          </div>
        )}
      </div>
    </ToolLayout>
  );
}
