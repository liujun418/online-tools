import HomeClient from "./HomeClient";
import { isValidLocale, getDictionary } from "@/lib/i18n";
import { notFound } from "next/navigation";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const dict = await getDictionary(locale);

  return <HomeClient locale={locale} dict={dict} />;
}
