"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import ThemeToggle from "@/components/ThemeToggle";
import { locales, localeNames, Locale } from "@/lib/i18n";

interface MobileMenuProps {
  locale?: string;
  dict?: Record<string, unknown>;
}

export default function MobileMenu({ locale = "en", dict }: MobileMenuProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [showLang, setShowLang] = useState(false);

  const switchLocale = (newLocale: Locale) => {
    document.cookie = `locale=${newLocale}; path=/; max-age=31536000`;
    const segments = pathname.split("/").filter(Boolean);
    if (segments.length > 0 && ["en", "es", "ar"].includes(segments[0])) {
      segments[0] = newLocale;
    } else {
      segments.unshift(newLocale);
    }
    router.push("/" + segments.join("/"));
  };

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const nav = (dict as any)?.nav || {};
  const isRTL = locale === "ar";

  const navItems = [
    { label: nav.home || "Home", href: `/${locale}` },
    { label: nav.text || "Text", href: `/${locale}/category/text` },
    { label: nav.dev || "Dev", href: `/${locale}/category/developer` },
    { label: nav.calculators || "Calculators", href: `/${locale}/category/calculator` },
    { label: nav.reference || "Reference", href: `/${locale}/category/reference` },
    { label: nav.media || "Fun & Media", href: `/${locale}/category/media` },
  ];

  return (
    <>
      {/* Hamburger button */}
      <button
        onClick={() => setOpen(true)}
        className="rounded-lg p-2 text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800 md:hidden"
        aria-label="Open menu"
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Drawer panel */}
      <div
        className={`fixed inset-y-0 z-50 w-72 transform bg-white shadow-xl transition-transform duration-300 ease-in-out dark:bg-zinc-950 md:hidden ${
          isRTL ? "left-0" : "right-0"
        } ${open ? "translate-x-0" : isRTL ? "-translate-x-full" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-zinc-200 px-4 py-4 dark:border-zinc-800">
          <span className="text-lg font-bold text-zinc-900 dark:text-white">ToolBox</span>
          <button
            onClick={() => setOpen(false)}
            className="rounded-lg p-2 text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-800"
            aria-label="Close menu"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col gap-1 px-4 py-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href.split("/")[0]))
                  ? "bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-white"
                  : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="mx-4 border-t border-zinc-200 dark:border-zinc-800" />

        {/* AI Tools link */}
        <div className="px-4 py-4">
          <a
            href="https://ai.toolboxonline.club"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-lg px-3 py-2 text-sm font-medium text-amber-600 hover:text-amber-700 dark:text-amber-400 dark:hover:text-amber-300"
          >
            AI Tools ✨
          </a>
        </div>

        <div className="mx-4 border-t border-zinc-200 dark:border-zinc-800" />

        {/* Footer: Language + Dark mode */}
        <div className="flex items-center justify-between px-4 py-4">
          <div className="relative">
            <button
              onClick={() => setShowLang(!showLang)}
              className="rounded-lg px-3 py-2 text-sm text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
            >
              {localeNames[locale as Locale] || "English"}
              <svg className="ms-1 inline-block h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {showLang && (
              <div
                className={`absolute bottom-full z-50 mb-1 min-w-[120px] rounded-lg border border-zinc-200 bg-white py-1 shadow-lg dark:border-zinc-700 dark:bg-zinc-900 ${
                  isRTL ? "right-0" : "left-0"
                }`}
              >
                {locales.map((l) => (
                  <button
                    key={l}
                    onClick={() => { switchLocale(l); setShowLang(false); }}
                    className={`block w-full px-4 py-1.5 text-left text-sm ${
                      l === locale ? "font-semibold text-zinc-900 dark:text-white" : "text-zinc-600 dark:text-zinc-400"
                    } hover:bg-zinc-100 dark:hover:bg-zinc-800`}
                  >
                    {localeNames[l]}
                  </button>
                ))}
              </div>
            )}
          </div>
          <ThemeToggle locale={locale} dict={dict} />
        </div>
      </div>
    </>
  );
}
