import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | ToolBoxOnline",
  description: "Contact ToolBoxOnline for support or inquiries.",
};

export default function Contact() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
        Contact Us
      </h1>
      <p className="mt-4 text-zinc-500 dark:text-zinc-400">
        Have a question, suggestion, or bug report? We&apos;d love to hear from
        you.
      </p>
      <div className="mt-8 rounded-lg border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900">
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          Email:{" "}
          <a
            href="mailto:contact@toolboxonline.com"
            className="text-blue-600 hover:underline"
          >
            contact@toolboxonline.com
          </a>
        </p>
      </div>
    </div>
  );
}
