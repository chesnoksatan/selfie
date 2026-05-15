import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { locales, defaultLocale, isLocale } from "@/lib/i18n/config";

function detectLocale(req: NextRequest): string {
  const cookie = req.cookies.get("NEXT_LOCALE")?.value;
  if (cookie && isLocale(cookie)) return cookie;

  const accept = req.headers.get("accept-language") ?? "";
  for (const lang of accept.split(",")) {
    const code = lang.split(";")[0]?.trim().toLowerCase().split("-")[0];
    if (code && isLocale(code)) return code;
  }
  return defaultLocale;
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Skip if already locale-prefixed
  const hasLocale = locales.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`),
  );
  if (hasLocale) return;

  const locale = detectLocale(req);
  const url = req.nextUrl.clone();
  url.pathname = pathname === "/" ? `/${locale}` : `/${locale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Skip _next internals, API, and any file with an extension (favicon, images, etc.)
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
