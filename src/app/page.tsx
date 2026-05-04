import type { Metadata } from "next";
import HomeClient from "./HomeClient";

const SITE_URL = "https://www.toolboxonline.club";
const SITE_NAME = "ToolBoxOnline";

export const metadata: Metadata = {
  title: `${SITE_NAME} — Free Online Tools for Everyone`,
  description:
    "Free online tools for text, development, calculations, and conversions. No signup, browser-based, instant results.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Free Online Tools for Everyone`,
    description: "Free online tools for text, development, calculations, and conversions. No signup, browser-based, instant results.",
    images: [{ url: `${SITE_URL}/og-default.png`, width: 1200, height: 630, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Free Online Tools for Everyone`,
    description: "Free online tools for text, development, calculations, and conversions. No signup, browser-based, instant results.",
    images: [`${SITE_URL}/og-default.png`],
  },
};

export default function Home() {
  return <HomeClient />;
}
