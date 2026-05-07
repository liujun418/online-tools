"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import Logo from "@/components/Logo";
import SuggestToolButton from "@/components/SuggestToolButton";
import { locales, localeNames, Locale } from "@/lib/i18n";

function getNav(dict: Record<string, unknown> | undefined) {
  const nav = (dict as any)?.nav || {};
  return {
    home: (nav.home as string) || "Home",
    text: (nav.text as string) || "Text",
    dev: (nav.dev as string) || "Dev",
    calculators: (nav.calculators as string) || "Calculators",
    converters: (nav.converters as string) || "Converters",
    suggest: (nav.suggest as string) || "Suggest a Tool",
  };
}

export default function Header({
  locale = "en",
  dict,
}: {
  locale?: string;
  dict?: Record<string, unknown>;
}) {
  const [showLang, setShowLang] = useState(false);
  const nav = getNav(dict);
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: Locale) => {
    // Set cookie for middleware
    document.cookie = `locale=${newLocale}; path=/; max-age=31536000`;
    // Replace locale in pathname
    const segments = pathname.split("/").filter(Boolean);
    if (segments.length > 0 && ["en", "es", "ar"].includes(segments[0])) {
      segments[0] = newLocale;
    } else {
      segments.unshift(newLocale);
    }
    router.push("/" + segments.join("/"));
  };

  return (
    <header className="border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Logo />
        <nav className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400 sm:gap-5">
          {/* Language Switcher */}
          <div className="relative">
            <button
              onClick={() => setShowLang(!showLang)}
              className="rounded px-2 py-1 hover:text-zinc-900 dark:hover:text-white"
              aria-label={((dict as any)?.toolPage as any)?.switchLanguage || "Switch language"}
            >
              {localeNames[locale as Locale] || "English"}
              <svg className="ms-1 inline-block h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {showLang && (
              <div className="absolute end-0 z-50 mt-1 rounded-lg border border-zinc-200 bg-white py-1 shadow-lg dark:border-zinc-700 dark:bg-zinc-900">
                {locales.map((l) => (
                  <button
                    key={l}
                    onClick={() => switchLocale(l)}
                    className={`block w-full px-4 py-1.5 text-start text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800 ${
                      l === locale ? "font-semibold text-zinc-900 dark:text-white" : "text-zinc-600 dark:text-zinc-400"
                    }`}
                  >
                    {localeNames[l]}
                  </button>
                ))}
              </div>
            )}
          </div>

          <Link href={`/${locale}`} className="hover:text-zinc-900 dark:hover:text-white">
            {nav.home}
          </Link>
          <Link href={`/${locale}/#text-tools`} className="hidden hover:text-zinc-900 dark:hover:text-white sm:inline">
            {nav.text}
          </Link>
          <Link href={`/${locale}/#developer-tools`} className="hidden hover:text-zinc-900 dark:hover:text-white sm:inline">
            {nav.dev}
          </Link>
          <Link href={`/${locale}/#calculators`} className="hidden hover:text-zinc-900 dark:hover:text-white sm:inline">
            {nav.calculators}
          </Link>
          <Link href={`/${locale}/#converters`} className="hidden hover:text-zinc-900 dark:hover:text-white sm:inline">
            {nav.converters}
          </Link>
          <div className="ms-1 flex items-center gap-3 border-s border-zinc-200 ps-3 dark:border-zinc-800">
            <SuggestToolButton locale={locale} dict={dict} />
            <ThemeToggle locale={locale} dict={dict} />
          </div>
        </nav>
      </div>
    </header>
  );
}
