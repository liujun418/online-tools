import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | ToolBoxOnline",
  description: "Terms of service for ToolBoxOnline.",
};

export default function Terms() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
        Terms of Service
      </h1>
      <p className="mt-4 text-zinc-500 dark:text-zinc-400">
        Last updated: May 3, 2026
      </p>
      <div className="mt-8 space-y-6 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
        <p>
          By accessing and using ToolBoxOnline, you accept and agree to be bound
          by these terms of service.
        </p>
        <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">
          Use of Service
        </h2>
        <p>
          ToolBoxOnline provides free online tools for personal and commercial
          use. All processing is done client-side in your browser. We make no
          guarantees about the accuracy or completeness of tool outputs.
        </p>
        <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">
          No Warranty
        </h2>
        <p>
          The service is provided &quot;as is&quot; without warranties of any
          kind. We do not warrant that the service will be uninterrupted or
          error-free.
        </p>
        <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">
          Limitation of Liability
        </h2>
        <p>
          In no event shall ToolBoxOnline be liable for any damages arising from
          the use or inability to use this service.
        </p>
      </div>
    </div>
  );
}
