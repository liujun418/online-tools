import { notFound } from "next/navigation";
import type { Metadata } from "next";
import CryptoPriceClient from "@/app/tools/crypto-price/CryptoPriceClient";
import { tools } from "@/lib/tools";
import { isValidLocale, getDictionary, Locale } from "@/lib/i18n";

const SITE_URL = "https://toolboxonline.club";
const SITE_NAME = "ToolBoxOnline";
const OG_IMAGE = `${SITE_URL}/og-default.png`;
const TOOL_ID = "crypto-price";
const LOCALE_OG: Record<string, string> = { en: "en_US", es: "es_ES", ar: "ar_SA" };

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const tool = tools.find((t) => t.id === TOOL_ID);
  if (!tool) return {};
  const name = (tool as any).nameTranslations?.[locale] || tool.name;
  const desc = (tool as any).descriptionTranslations?.[locale] || tool.description;
  const seoTitle = (tool as any).seoTitleTranslations?.[locale] || tool.seoTitle || tool.name;
  const seoDesc = (tool as any).seoDescriptionTranslations?.[locale] || tool.seoDescription || tool.description;
  return {
    title: `${seoTitle} | ${SITE_NAME}`, description: seoDesc,
    keywords: tool.seoKeywords?.join(", "),
    robots: { index: true, follow: true },
    alternates: { canonical: `${SITE_URL}/tools/${tool.id}`, languages: { "x-default": `${SITE_URL}/en/tools/${tool.id}`, en: `${SITE_URL}/en/tools/${tool.id}`, es: `${SITE_URL}/es/tools/${tool.id}`, ar: `${SITE_URL}/ar/tools/${tool.id}` } },
    openGraph: { type: "website", locale: LOCALE_OG[locale] || "en_US", url: `${SITE_URL}/${locale}/tools/${tool.id}`, siteName: SITE_NAME, title: `${seoTitle} | ${SITE_NAME}`, description: seoDesc, images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: name }] },
    twitter: { card: "summary_large_image", title: `${seoTitle} | ${SITE_NAME}`, description: seoDesc },
  };
}

export default async function ToolPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const tool = tools.find((t) => t.id === TOOL_ID);
  if (!tool) notFound();
  const dict = await getDictionary(locale);
  const toolTitle = (tool as any).nameTranslations?.[locale] || tool.name;
  const toolDescription = (tool as any).descriptionTranslations?.[locale] || tool.description;
  return <CryptoPriceClient locale={locale as Locale} dict={dict} titleOverride={toolTitle} descriptionOverride={toolDescription} />;
}
