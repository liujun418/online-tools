"use client";

import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";

const metadata = {
  title: "Base64 Encoder/Decoder",
  description:
    "Encode and decode text to and from Base64 format. Free online Base64 tool.",
  keywords: [
    "base64 encoder",
    "base64 decoder",
    "base64 converter",
    "encode base64 online",
    "decode base64",
    "base64 online tool",
  ],
  toolId: "base64-converter",
};

export default function Base64ConverterClient() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [mode, setMode] = useState<"encode" | "decode">("encode");
  const [error, setError] = useState<string | null>(null);

  function handleConvert() {
    setError(null);
    try {
      if (mode === "encode") {
        setOutput(btoa(unescape(encodeURIComponent(input))));
      } else {
        setOutput(decodeURIComponent(escape(atob(input.trim()))));
      }
    } catch (e) {
      setError((e as Error).message);
      setOutput("");
    }
  }

  function handleSwap() {
    setMode(mode === "encode" ? "decode" : "encode");
    setInput(output);
    setOutput("");
    setError(null);
  }

  function handleCopy() {
    navigator.clipboard.writeText(output);
  }

  return (
    <ToolLayout {...metadata}>
      <div className="flex items-center gap-2">
        <button
          onClick={() => {
            setMode("encode");
            setOutput("");
            setError(null);
          }}
          className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
            mode === "encode"
              ? "bg-blue-600 text-white"
              : "bg-zinc-200 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
          }`}
        >
          Encode
        </button>
        <button
          onClick={() => {
            setMode("decode");
            setOutput("");
            setError(null);
          }}
          className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
            mode === "decode"
              ? "bg-blue-600 text-white"
              : "bg-zinc-200 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
          }`}
        >
          Decode
        </button>
        <button
          onClick={handleSwap}
          className="ml-2 rounded-lg bg-zinc-200 px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
        >
          Swap
        </button>
      </div>

      <div className="mt-4">
        <label className="mb-1 block text-sm font-medium text-zinc-500 dark:text-zinc-400">
          Input
        </label>
        <textarea
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            setOutput("");
            setError(null);
          }}
          placeholder={
            mode === "encode" ? "Enter text to encode..." : "Enter Base64 to decode..."
          }
          className="w-full rounded-lg border border-zinc-300 bg-white p-4 font-mono text-sm dark:border-zinc-700 dark:bg-zinc-900 dark:placeholder:text-zinc-600"
          rows={6}
        />
      </div>

      <button
        onClick={handleConvert}
        disabled={!input.trim()}
        className="mt-4 rounded-lg bg-blue-600 px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 disabled:opacity-50"
      >
        {mode === "encode" ? "Encode" : "Decode"}
      </button>

      {error && (
        <div className="mt-4 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700 dark:border-red-800 dark:bg-red-950 dark:text-red-400">
          Error: {error}
        </div>
      )}

      {output && (
        <div className="mt-4">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
              Result
            </label>
            <button
              onClick={handleCopy}
              className="rounded bg-zinc-200 px-3 py-1 text-xs font-medium text-zinc-700 transition-colors hover:bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
            >
              Copy
            </button>
          </div>
          <div className="mt-2 whitespace-pre-wrap rounded-lg border border-zinc-200 bg-zinc-50 p-4 font-mono text-sm dark:border-zinc-800 dark:bg-zinc-900">
            {output}
          </div>
        </div>
      )}
    </ToolLayout>
  );
}
