"use client";

import { useEffect, useRef, useState } from "react";
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
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      // AdSense script not loaded yet
    }

    // After AdSense attempts to render, check if the ad is empty
    const timer = setTimeout(() => {
      const el = ref.current;
      if (!el) return;
      // Check for AdSense error indicators: class="adsbygoogle" with no child iframe
      const hasIframe = el.querySelector("iframe");
      const hasAdText = el.textContent?.includes("Advertisement") || false;
      if (!hasIframe && !hasAdText) {
        setVisible(false);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <ins
      ref={ref}
      className={`adsbygoogle ${className ?? ""}`}
      style={{ display: "block", maxHeight: "90px", overflow: "hidden" }}
      data-ad-client={ADSENSE_CONFIG.publisherId}
      data-ad-slot={adSlot}
      data-ad-format={format}
    />
  );
}
