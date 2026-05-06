"use client";

import { useState, useCallback } from "react";
import ToolLayout from "@/components/ToolLayout";

const metadata = {
  title: "Password Generator",
  description:
    "Generate strong, secure passwords with customizable length and character options. Free online password generator.",
  keywords: [
    "password generator",
    "strong password generator",
    "random password generator",
    "secure password creator",
    "generate password online",
    "password maker",
  ],
  toolId: "password-generator",
};

function generatePassword(length: number, options: { upper: boolean; lower: boolean; numbers: boolean; symbols: boolean }): string {
  const chars: string[] = [];
  if (options.upper) chars.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""));
  if (options.lower) chars.push(..."abcdefghijklmnopqrstuvwxyz".split(""));
  if (options.numbers) chars.push(..."0123456789".split(""));
  if (options.symbols) chars.push(..."!@#$%^&*()_+-=[]{}|;:,.<>?".split(""));
  if (chars.length === 0) return "";

  const array = new Uint32Array(length);
  crypto.getRandomValues(array);
  return Array.from(array, (n) => chars[n % chars.length]).join("");
}

export default function PasswordGeneratorClient({ locale = "en", dict }: { locale?: string; dict?: Record<string, unknown> } = {}) {
  const [length, setLength] = useState(16);
  const [options, setOptions] = useState({
    upper: true,
    lower: true,
    numbers: true,
    symbols: true,
  });
  const [passwords, setPasswords] = useState<string[]>([]);
  const [count, setCount] = useState(5);

  const handleGenerate = useCallback(() => {
    const newPasswords = Array.from({ length: count }, () =>
      generatePassword(length, options)
    );
    setPasswords(newPasswords);
  }, [length, options, count]);

  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  function handleCopy(pw: string, index: number) {
    navigator.clipboard.writeText(pw);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 1500);
  }

  return (
    <ToolLayout {...metadata} locale={locale as any} dict={dict}>
      <div className="flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-2">
          <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
            Length:
          </label>
          <input
            type="number"
            min={4}
            max={128}
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-20 rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-900"
          />
        </div>
        <div className="flex items-center gap-2">
          <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
            Count:
          </label>
          <input
            type="number"
            min={1}
            max={20}
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
            className="w-20 rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-900"
          />
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-4">
        {(
          [
            ["upper", "A-Z"],
            ["lower", "a-z"],
            ["numbers", "0-9"],
            ["symbols", "!@#$"],
          ] as [keyof typeof options, string][]
        ).map(([key, label]) => (
          <label key={key} className="flex items-center gap-2 text-sm text-zinc-700 dark:text-zinc-300">
            <input
              type="checkbox"
              checked={options[key]}
              onChange={(e) => setOptions({ ...options, [key]: e.target.checked })}
              className="h-4 w-4 rounded border-zinc-300 text-blue-600"
            />
            {label}
          </label>
        ))}
      </div>

      <button
        onClick={handleGenerate}
        className="mt-6 rounded-lg bg-blue-600 px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
      >
        Generate Passwords
      </button>

      {passwords.length > 0 && (
        <div className="mt-4 space-y-2">
          {passwords.map((pw, i) => (
            <div
              key={i}
              className="flex items-center justify-between rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-3 font-mono text-sm dark:border-zinc-800 dark:bg-zinc-900"
            >
              <span className="text-zinc-700 dark:text-zinc-300 break-all">{pw}</span>
              <button
                onClick={() => handleCopy(pw, i)}
                className={`ml-2 shrink-0 rounded px-3 py-1 text-xs font-medium transition-colors ${
                  copiedIndex === i
                    ? "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400"
                    : "bg-zinc-200 text-zinc-600 hover:bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700"
                }`}
              >
                {copiedIndex === i ? "Copied!" : "Copy"}
              </button>
            </div>
          ))}
        </div>
      )}
    </ToolLayout>
  );
}
