export const locales = ["en", "es", "ar"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  en: "English",
  es: "Español",
  ar: "العربية",
};

export const localeDir: Record<Locale, "ltr" | "rtl"> = {
  en: "ltr",
  es: "ltr",
  ar: "rtl",
};

export const countryToLocale: Record<string, Locale> = {
  // Spanish-speaking countries
  ES: "es", MX: "es", AR: "es", CO: "es", PE: "es", VE: "es", CL: "es",
  EC: "es", GT: "es", CU: "es", BO: "es", DO: "es", HN: "es", PY: "es",
  SV: "es", NI: "es", CR: "es", PA: "es", UY: "es", GQ: "es",
  // Arabic-speaking countries
  SA: "ar", AE: "ar", EG: "ar", IQ: "ar", MA: "ar", DZ: "ar", SD: "ar",
  LY: "ar", JO: "ar", LB: "ar", TN: "ar", KW: "ar", OM: "ar", QA: "ar",
  BH: "ar", YE: "ar", SY: "ar", PS: "ar", MR: "ar", SO: "ar", DJ: "ar",
  KM: "ar",
};

export function isValidLocale(locale: string): locale is Locale {
  return (locales as readonly string[]).includes(locale);
}

export function detectLocaleFromCountry(country: string | undefined): Locale {
  if (!country) return defaultLocale;
  return countryToLocale[country] ?? defaultLocale;
}

const dictionaries: Record<string, () => Promise<Record<string, unknown>>> = {
  en: () => import("@/locales/en/common.json").then((m) => m.default),
  es: () => import("@/locales/es/common.json").then((m) => m.default),
  ar: () => import("@/locales/ar/common.json").then((m) => m.default),
};

export async function getDictionary(locale: Locale): Promise<Record<string, unknown>> {
  return dictionaries[locale]();
}

export function getLocaleFromPath(pathname: string): Locale {
  const segments = pathname.split("/").filter(Boolean);
  const first = segments[0];
  if (isValidLocale(first)) return first;
  return defaultLocale;
}

export function stripLocaleFromPath(pathname: string): string {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length > 0 && isValidLocale(segments[0])) {
    return "/" + segments.slice(1).join("/");
  }
  return pathname;
}
