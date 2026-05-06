import { redirect } from "next/navigation";
import { headers, cookies } from "next/headers";
import { isValidLocale, countryToLocale, defaultLocale } from "@/lib/i18n";

async function detectLocale(): Promise<string> {
  // 1. Cookie
  const cookieStore = await cookies();
  const localeCookie = cookieStore.get("locale")?.value;
  if (localeCookie && isValidLocale(localeCookie)) return localeCookie;

  // 2. Geo headers
  const headersList = await headers();
  const country = headersList.get("x-vercel-ip-country") ||
                  headersList.get("x-vercel-country") ||
                  headersList.get("cf-ipcountry");
  if (country) {
    const detected = (countryToLocale as Record<string, string>)[country];
    if (detected) return detected;
  }

  return defaultLocale;
}

export default async function RootPage() {
  redirect(`/${await detectLocale()}`);
}
