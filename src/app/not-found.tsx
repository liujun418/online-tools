import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found | ToolBoxOnline",
  description: "The page you're looking for doesn't exist.",
};

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-3xl items-center px-4 py-24 text-center sm:px-6">
      <div className="w-full">
        <h1 className="text-8xl font-bold text-zinc-200 dark:text-zinc-800">
          404
        </h1>
        <h2 className="mt-4 text-2xl font-semibold text-zinc-900 dark:text-white">
          Page Not Found
        </h2>
        <p className="mx-auto mt-3 max-w-md text-zinc-500 dark:text-zinc-400">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="mt-8 inline-block rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
