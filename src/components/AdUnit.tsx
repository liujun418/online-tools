"use client";

import { useEffect, useRef } from "react";
import { ADSENSE_CONFIG } from "@/lib/adsense";

interface AdUnitProps {
  className?: string;
  adSlot: string;
  format?: "auto" | "rectangle" | "horizontal";
}

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

export default function AdUnit({
  className,
  adSlot,
  format = "auto",
}: AdUnitProps) {
  const ref = useRef<HTMLModElement>(null);

  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // AdSense script not loaded yet
    }
  }, []);

  return (
    <ins
      ref={ref}
      className={`adsbygoogle ${className ?? ""}`}
      style={{ display: "block" }}
      data-ad-client={ADSENSE_CONFIG.publisherId}
      data-ad-slot={adSlot}
      data-ad-format={format}
    />
  );
}
