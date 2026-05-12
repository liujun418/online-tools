import Link from "next/link";

function getFooter(dict: Record<string, unknown> | undefined) {
  const f = (dict as any)?.footer || {};
  return {
    copyright: (f.copyright as string) || "ToolBoxOnline. All rights reserved.",
    about: (f.about as string) || "About",
    privacy: (f.privacy as string) || "Privacy Policy",
    terms: (f.terms as string) || "Terms of Service",
    contact: (f.contact as string) || "Contact",
  };
}

export default function Footer({
  locale = "en",
  dict,
}: {
  locale?: string;
  dict?: Record<string, unknown>;
}) {
  const f = getFooter(dict);

  return (
    <footer className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between">
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            &copy; {new Date().getFullYear()} {f.copyright}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-zinc-500 dark:text-zinc-400">
            <a
              href="https://ai.toolboxonline.club"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-900 dark:hover:text-white"
              title="AI-powered tools: avatar generator, photo restorer, PDF converter"
            >
              AI Tools ✨
            </a>
            <Link href={`/${locale}/about`} className="hover:text-zinc-900 dark:hover:text-white">
              {f.about}
            </Link>
            <Link href={`/${locale}/privacy`} className="hover:text-zinc-900 dark:hover:text-white">
              {f.privacy}
            </Link>
            <Link href={`/${locale}/terms`} className="hover:text-zinc-900 dark:hover:text-white">
              {f.terms}
            </Link>
            <Link href={`/${locale}/contact`} className="hover:text-zinc-900 dark:hover:text-white">
              {f.contact}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
