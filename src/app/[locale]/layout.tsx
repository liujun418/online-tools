import type { Metadata } from "next";
import Script from "next/script";
import { Suspense } from "react";
import { Geist, Geist_Mono, Noto_Sans_Arabic } from "next/font/google";
import { notFound } from "next/navigation";
import { headers } from "next/headers";
import "@/app/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import KofiWidget from "@/components/KofiWidget";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { locales, defaultLocale, isValidLocale, localeDir, getDictionary } from "@/lib/i18n";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSansArabic = Noto_Sans_Arabic({
  variable: "--font-noto-sans-arabic",
  subsets: ["arabic"],
});

const SITE_URL = "https://toolboxonline.club";
const SITE_NAME = "ToolBoxOnline";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};

  const dict = await getDictionary(locale);
  const home = (dict as any).home || {};

  const localeMap: Record<string, string> = { en: "en_US", es: "es_ES", ar: "ar_SA" };
  const OG_IMAGE = `${SITE_URL}/og-default.png`;

  return {
    title: `${SITE_NAME} — ${home.heroTitle || "Free Online Tools for Everyone"}`,
    description: home.heroDescription || "Free online tools for text, development, calculations, and conversions.",
    openGraph: {
      type: "website",
      locale: localeMap[locale] || "en_US",
      url: `${SITE_URL}/${locale}`,
      siteName: SITE_NAME,
      title: `${SITE_NAME} — ${home.heroTitle || "Free Online Tools for Everyone"}`,
      description: home.heroDescription || "Free online tools.",
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: SITE_NAME }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${SITE_NAME} — ${home.heroTitle || "Free Online Tools for Everyone"}`,
      description: home.heroDescription || "Free online tools.",
      images: [OG_IMAGE],
    },
    alternates: {
      languages: {
        en: `${SITE_URL}/en`,
        es: `${SITE_URL}/es`,
        ar: `${SITE_URL}/ar`,
      },
    },
    other: {
      "google-adsense-account": "ca-pub-9954245854077897",
    },
  };
}

export default async function RootLayout({
  params,
  children,
}: {
  params: Promise<{ locale: string }>;
  children: React.ReactNode;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const dict = await getDictionary(locale);
  const dir = localeDir[locale];
  const fontClass = locale === "ar"
    ? `${geistSans.variable} ${geistMono.variable} ${notoSansArabic.variable}`
    : `${geistSans.variable} ${geistMono.variable}`;

  return (
    <html
      lang={locale}
      dir={dir}
      className={`${fontClass} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://googleads.g.doubleclick.net" crossOrigin="anonymous" />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-B17KH1S3VM"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive" dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-B17KH1S3VM');
          `,
        }} />
      </head>
      <body className="flex min-h-full flex-col bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
        <Script
          id="adsense-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  window.adsbygoogle = window.adsbygoogle || [];
                  window.adsbygoogle.push({});
                } catch(e) {}
              })();
            `,
          }}
        />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9954245854077897"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <Header locale={locale} dict={dict} />
        <main className="flex-1">{children}</main>
        <Footer locale={locale} dict={dict} />
        <KofiWidget />
        <Suspense fallback={null}>
          <GoogleAnalytics />
        </Suspense>
      </body>
    </html>
  );
}
