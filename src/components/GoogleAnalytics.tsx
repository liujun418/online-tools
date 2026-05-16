"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function GoogleAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isFirst = useRef(true);

  useEffect(() => {
    // Skip first render — inline gtag('config') in layout already sent initial page_view
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }
    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : "");
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("config", "G-B17KH1S3VM", {
        page_path: url,
      });
    }
  }, [pathname, searchParams]);

  return null;
}
