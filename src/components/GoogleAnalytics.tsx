"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function GoogleAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = pathname + searchParams.toString();
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("config", "G-B17KH1S3VM", {
        page_path: url,
      });
    }
  }, [pathname, searchParams]);

  return null;
}
