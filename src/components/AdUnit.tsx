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

let globalPushed = false;

export default function AdUnit({
  className,
  adSlot,
  format = "auto",
}: AdUnitProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only push once globally — the layout script handles initial load,
    // and for SPA navigations we push once per new page render.
    const el = containerRef.current;
    if (!el) return;
    const ins = el.querySelector("ins");
    if (!ins || ins.querySelector("iframe")) return; // already has an ad

    try {
      if (!globalPushed) {
        globalPushed = true;
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        // Reset after a tick so next navigation can push again
        setTimeout(() => { globalPushed = false; }, 100);
      }
    } catch {
      // AdSense not loaded
    }
  }, []);

  return (
    <div ref={containerRef}>
      <ins
        className={`adsbygoogle ${className ?? ""}`}
        style={{ display: "block" }}
        data-ad-client={ADSENSE_CONFIG.publisherId}
        data-ad-slot={adSlot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
}
