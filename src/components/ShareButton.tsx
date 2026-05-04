"use client";

import { useState } from "react";

export default function ShareButton() {
  const [copied, setCopied] = useState(false);

  async function handleShare() {
    const url = window.location.href;
    const title = document.title;

    if (navigator.share) {
      try {
        await navigator.share({ title, url });
        return;
      } catch {
        // User cancelled
      }
    }

    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard not available
    }
  }

  return (
    <div className="flex items-center gap-2">
      {/* Share */}
      <button
        onClick={handleShare}
        className="flex items-center gap-1.5 rounded-lg border border-zinc-200 px-3 py-1.5 text-xs font-medium text-zinc-500 transition-colors hover:border-blue-300 hover:text-blue-600 dark:border-zinc-700 dark:text-zinc-400 dark:hover:border-blue-700 dark:hover:text-blue-400"
        aria-label="Share this tool"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="18" cy="5" r="3" />
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="19" r="3" />
          <path d="m8.59 13.51 6.83 3.98" />
          <path d="m15.41 6.51-6.82 3.98" />
        </svg>
        {copied ? "Copied!" : "Share"}
      </button>

      {/* Bookmark */}
      <div className="relative group">
        <button
          className="flex items-center gap-1.5 rounded-lg border border-zinc-200 px-3 py-1.5 text-xs font-medium text-zinc-500 transition-colors hover:border-blue-300 hover:text-blue-600 dark:border-zinc-700 dark:text-zinc-400 dark:hover:border-blue-700 dark:hover:text-blue-400"
          aria-label="Bookmark this tool"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
          </svg>
          Bookmark
        </button>
        <div className="absolute right-0 top-full z-50 mt-2 hidden w-64 rounded-lg border border-zinc-200 bg-white p-3 shadow-lg group-hover:block dark:border-zinc-700 dark:bg-zinc-800 sm:right-auto sm:w-72">
          <p className="text-xs text-zinc-600 dark:text-zinc-300">
            Press{" "}
            <kbd className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-zinc-800 dark:bg-zinc-700 dark:text-zinc-200">
              Ctrl+D
            </kbd>{" "}
            (or{" "}
            <kbd className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-zinc-800 dark:bg-zinc-700 dark:text-zinc-200">
              +D
            </kbd>
            ) to add this tool to your bookmarks.
          </p>
        </div>
      </div>
    </div>
  );
}
