import type { Metadata } from "next";
import Script from "next/script";
import { Suspense } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import KofiWidget from "@/components/KofiWidget";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { getDictionary } from "@/lib/i18n";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://toolboxonline.club";
const SITE_NAME = "ToolBoxOnline";

export const metadata: Metadata = {
  title: `${SITE_NAME} — Free Online Tools for Everyone`,
  description: "Free online tools for text, development, calculations, and conversions.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Free Online Tools for Everyone`,
    description: "Free online tools for text, development, calculations, and conversions.",
    images: [{ url: `${SITE_URL}/og-default.png`, width: 1200, height: 630, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Free Online Tools for Everyone`,
    description: "Free online tools for text, development, calculations, and conversions.",
    images: [`${SITE_URL}/og-default.png`],
  },
  alternates: {
    canonical: SITE_URL,
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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const dict = await getDictionary("en");

  return (
    <html
      lang="en"
      dir="ltr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
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
        <Header locale="en" dict={dict} />
        <main className="flex-1">{children}</main>
        <Footer locale="en" dict={dict} />
        <KofiWidget />
        <Suspense fallback={null}>
          <GoogleAnalytics />
        </Suspense>
      </body>
    </html>
  );
}
