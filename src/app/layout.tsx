import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";

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
  description: "Free online tools for text, development, calculations, and more.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Free Online Tools for Everyone`,
    description: "Free online tools for text, development, calculations, and more.",
    images: [{ url: `${SITE_URL}/og-default.png`, width: 1200, height: 630, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Free Online Tools for Everyone`,
    description: "Free online tools for text, development, calculations, and more.",
    images: [`${SITE_URL}/og-default.png`],
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      "x-default": `${SITE_URL}/en`,
      en: `${SITE_URL}/en`,
      es: `${SITE_URL}/es`,
      ar: `${SITE_URL}/ar`,
    },
  },
  other: {
    "google-adsense-account": "ca-pub-9954245854077897",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
      </head>
      {children}
    </html>
  );
}
