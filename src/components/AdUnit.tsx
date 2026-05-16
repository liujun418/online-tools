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
  format = "rectangle",
}: AdUnitProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const ins = el.querySelector("ins");
    if (!ins) return;

    // Already has an ad loaded
    if (ins.querySelector("iframe")) return;

    let attempts = 0;
    const maxAttempts = 10;

    const tryPush = () => {
      attempts++;
      if (window.adsbygoogle) {
        try {
          window.adsbygoogle.push({});
        } catch (e: any) {
          // "already have ads" — fine, no-op
          if (e?.message?.includes("already have ads")) return;
        }
      } else if (attempts < maxAttempts) {
        setTimeout(tryPush, 300);
      }
    };

    // Small delay to ensure DOM is settled after navigation
    const t = setTimeout(tryPush, 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <div ref={containerRef} style={{ textAlign: "center" }}>
      <ins
        className={`adsbygoogle ${className ?? ""}`}
        style={{ display: "block" }}
        data-ad-client={ADSENSE_CONFIG.publisherId}
        data-ad-slot={adSlot}
        data-ad-format={format}
      />
    </div>
  );
}
