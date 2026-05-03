import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | ToolBoxOnline",
  description: "Privacy policy for ToolBoxOnline.",
};

export default function Privacy() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
        Privacy Policy
      </h1>
      <p className="mt-4 text-zinc-500 dark:text-zinc-400">
        Last updated: May 3, 2026
      </p>
      <div className="mt-8 space-y-6 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
        <p>
          ToolBoxOnline (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;)
          operates this website. All tools on this site process data locally in
          your browser. We do not collect, store, or transmit any personal data
          or content you enter into our tools.
        </p>
        <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">
          Data Processing
        </h2>
        <p>
          All text processing, encoding, formatting, and other tool functions
          are performed client-side using JavaScript in your browser. Your data
          never leaves your device.
        </p>
        <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">
          Advertising
        </h2>
        <p>
          We use Google AdSense to display advertisements on our site. Google
          may use cookies to serve ads based on your prior visits to this and
          other websites. You can opt out of personalized advertising by
          visiting{" "}
          <a
            href="https://www.google.com/settings/ads"
            className="text-blue-600 hover:underline"
          >
            Google Ads Settings
          </a>
          .
        </p>
        <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">
          Contact
        </h2>
        <p>
          If you have questions about this privacy policy, please contact us at
          the address listed on our Contact page.
        </p>
      </div>
    </div>
  );
}
