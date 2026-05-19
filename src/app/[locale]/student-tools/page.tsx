import type { Metadata } from "next";
import { isValidLocale, getDictionary, Locale } from "@/lib/i18n";
import { freeTopics } from "@/lib/topics";
import TopicPage from "@/components/TopicPage";

const TOPIC_ID = "student-tools";
const SITE_URL = "https://toolboxonline.club";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const topic = freeTopics.find((t) => t.id === TOPIC_ID);
  const title = `${topic?.title || "Student Tools"} — ToolBoxOnline`;
  const desc = topic?.description || "";
  return { title, description: desc, openGraph: { title, description: desc, url: `${SITE_URL}/${locale}/${TOPIC_ID}`, type: "website" }, twitter: { card: "summary_large_image", title, description: desc } };
}

export default async function TopicPageWrapper({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isValidLocale(locale)) return null;
  const dict = await getDictionary(locale as Locale);
  const topic = freeTopics.find((t) => t.id === TOPIC_ID)!;
  return <TopicPage topic={topic} locale={locale} dict={dict as Record<string, unknown>} />;
}
