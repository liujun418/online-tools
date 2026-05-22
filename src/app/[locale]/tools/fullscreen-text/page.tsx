import { getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import FullscreenTextClient from "./FullscreenTextClient";

export default async function FullscreenTextPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  return <FullscreenTextClient locale={locale as Locale} dict={dict} />;
}
