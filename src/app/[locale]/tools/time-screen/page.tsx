import { getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import TimeScreenClient from "./TimeScreenClient";

export default async function TimeScreenPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  return <TimeScreenClient locale={locale as Locale} dict={dict} />;
}
