import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isValidLocale, countryToLocale, defaultLocale } from "@/lib/i18n";

const ADMIN_USER = "jzerov";
const ADMIN_PASSWORD = "T3705456";
const locales = ["en", "es", "ar"] as const;
const PUBLIC_FILE = /\.(.*)$/;

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow API routes, static files, admin without locale redirect
  if (
    PUBLIC_FILE.test(pathname) ||
    pathname.startsWith("/api/") ||
    pathname.startsWith("/_next/") ||
    pathname.startsWith("/favicon.ico") ||
    pathname.startsWith("/admin")
  ) {
    // Still apply admin auth
    if (pathname.startsWith("/admin")) {
      return handleAdminAuth(request);
    }
    return NextResponse.next();
  }

  // Check if pathname already starts with a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // Redirect to locale-prefixed path
  const locale = detectLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

function handleAdminAuth(request: NextRequest) {
  const authHeader = request.headers.get("authorization");
  if (authHeader) {
    const base64 = authHeader.split(" ")[1];
    const decoded = atob(base64);
    const [user, password] = decoded.split(":");
    if (user === ADMIN_USER && password === ADMIN_PASSWORD) {
      return NextResponse.next();
    }
  }
  return new NextResponse("Unauthorized", {
    status: 401,
    headers: { "WWW-Authenticate": "Basic realm=ToolBoxOnline Admin" },
  });
}

function detectLocale(request: NextRequest) {
  // 1. Check cookie
  const localeCookie = request.cookies.get("locale")?.value;
  if (localeCookie && isValidLocale(localeCookie)) {
    return localeCookie;
  }

  // 2. Check geo headers
  const country = request.headers.get("x-vercel-ip-country") ||
                  request.headers.get("x-vercel-country") ||
                  request.headers.get("cf-ipcountry");
  if (country) {
    const detected = countryToLocale[country];
    if (detected) return detected;
  }

  // 3. Accept-Language fallback
  const acceptLanguage = request.headers.get("accept-language");
  if (acceptLanguage) {
    const preferred = acceptLanguage.split(",")[0]?.trim().split("-")[0];
    if (preferred === "es") return "es";
    if (preferred === "ar") return "ar";
  }

  return defaultLocale;
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
