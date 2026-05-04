"use client";

import { useState } from "react";

export default function KofiWidget() {
  const [confirmOpen, setConfirmOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setConfirmOpen(true)}
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#00b9fe] px-4 py-2.5 text-sm font-semibold text-white shadow-lg transition-all hover:bg-[#00a0dc] hover:shadow-xl active:scale-95"
        aria-label="Support us on Ko-fi"
      >
        <svg viewBox="0 0 24 24" width="20" height="20" fill="white">
          <path d="M23.881 8.948c-.773-4.085-4.859-4.593-4.859-4.593H.723c-.604 0-.679.798-.679.798s-.082 7.324-.022 11.822c.164 2.424 2.586 2.672 2.586 2.672s8.267-.023 11.966-.049c2.438-.426 2.683-2.566 2.658-3.734 4.352.24 7.422-2.831 6.649-6.916zm-11.062 3.511c-1.246 1.453-4.011 3.976-4.011 3.976s-.121.119-.31.023c-.076-.057-.108-.09-.108-.09-.443-.441-3.368-3.049-4.034-3.954-.709-.965-1.041-2.7-.091-3.71.951-1.01 3.005-1.086 4.363.407 0 0 1.565-1.782 3.468-.963 1.904.82 1.832 3.011.723 4.311zm6.173.478c-.928.116-1.682.028-1.682.028V7.284h1.77s1.971.551 1.971 2.638c0 1.913-.985 2.667-2.059 3.015z" />
        </svg>
        Support Us
      </button>

      {confirmOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
          onClick={() => setConfirmOpen(false)}
        >
          <div
            className="relative w-full max-w-sm rounded-xl bg-white p-6 shadow-xl dark:bg-zinc-800"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setConfirmOpen(false)}
              className="absolute right-3 top-3 rounded p-1 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300"
              aria-label="Close"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>

            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
              Support ToolBoxOnline
            </h3>
            <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
              If you find our tools helpful, consider buying us a coffee on Ko-fi to keep the site running!
            </p>

            <a
              href="https://ko-fi.com/jzerov"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-[#00b9fe] py-3 text-sm font-semibold text-white transition-colors hover:bg-[#00a0dc]"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="white">
                <path d="M23.881 8.948c-.773-4.085-4.859-4.593-4.859-4.593H.723c-.604 0-.679.798-.679.798s-.082 7.324-.022 11.822c.164 2.424 2.586 2.672 2.586 2.672s8.267-.023 11.966-.049c2.438-.426 2.683-2.566 2.658-3.734 4.352.24 7.422-2.831 6.649-6.916zm-11.062 3.511c-1.246 1.453-4.011 3.976-4.011 3.976s-.121.119-.31.023c-.076-.057-.108-.09-.108-.09-.443-.441-3.368-3.049-4.034-3.954-.709-.965-1.041-2.7-.091-3.71.951-1.01 3.005-1.086 4.363.407 0 0 1.565-1.782 3.468-.963 1.904.82 1.832 3.011.723 4.311zm6.173.478c-.928.116-1.682.028-1.682.028V7.284h1.77s1.971.551 1.971 2.638c0 1.913-.985 2.667-2.059 3.015z" />
              </svg>
              Yes, Buy Me a Coffee!
            </a>

            <button
              onClick={() => setConfirmOpen(false)}
              className="mt-3 w-full rounded-lg border border-zinc-200 py-2.5 text-sm font-medium text-zinc-500 transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-700"
            >
              Maybe Later
            </button>
          </div>
        </div>
      )}
    </>
  );
}
