"use client";

import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";

const metadata = {
  title: "Hash Generator",
  description:
    "Generate SHA-1, SHA-256, and SHA-512 hashes from text input. Free online hash generator tool.",
  keywords: [
    "hash generator",
    "sha256 generator",
    "sha1 hash",
    "sha512 hash",
    "hash calculator online",
    "text to hash",
    "sha256 online",
  ],
};

async function computeHash(text: string, algorithm: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(text);
  const hashBuffer = await crypto.subtle.digest(algorithm, data);
  return Array.from(new Uint8Array(hashBuffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export default function HashGeneratorClient({ locale = "en", dict }: { locale?: string; dict?: Record<string, unknown> } = {}) {
  const [text, setText] = useState("");
  const [hashes, setHashes] = useState<Record<string, string>>({});

  async function handleGenerate() {
    if (!text) return;
    const sha1 = await computeHash(text, "SHA-1");
    const sha256 = await computeHash(text, "SHA-256");
    const sha512 = await computeHash(text, "SHA-512");
    setHashes({ "SHA-1": sha1, "SHA-256": sha256, "SHA-512": sha512 });
  }

  function handleCopy(hash: string) {
    navigator.clipboard.writeText(hash);
  }

  return (
    <ToolLayout {...metadata} locale={locale as any} dict={dict}>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text to hash..."
        className="w-full rounded-lg border border-zinc-300 bg-white p-4 font-mono text-sm dark:border-zinc-700 dark:bg-zinc-900 dark:placeholder:text-zinc-600"
        rows={4}
      />
      <button
        onClick={handleGenerate}
        disabled={!text}
        className="mt-4 rounded-lg bg-blue-600 px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 disabled:opacity-50"
      >
        Generate Hashes
      </button>

      {Object.entries(hashes).map(([algo, hash]) => (
        <div key={algo} className="mt-4">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
              {algo}
            </label>
            <button
              onClick={() => handleCopy(hash)}
              className="rounded bg-zinc-200 px-3 py-1 text-xs font-medium text-zinc-700 transition-colors hover:bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
            >
              Copy
            </button>
          </div>
          <div className="mt-1 rounded-lg border border-zinc-200 bg-zinc-50 p-3 font-mono text-xs break-all dark:border-zinc-800 dark:bg-zinc-900">
            {hash}
          </div>
        </div>
      ))}
    </ToolLayout>
  );
}
