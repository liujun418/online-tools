"use client";

import { useEffect, useRef, useState } from "react";
import { ADSENSE_CONFIG } from "@/lib/adsense";

interface AdUnitProps {
  className?: string;
  adSlot: string;
  format?: "auto" | "rectangle" | "horizontal";
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
    } catch {
      // AdSense script not loaded yet
    }

    // Poll to check if AdSense has actually populated the ad with content
    const interval = setInterval(() => {
      const el = ref.current;
      if (!el) return;
      const iframe = el.querySelector("iframe");
      // If no iframe yet, keep waiting
      if (!iframe) return;
      // Check if iframe has real dimensions (AdSense fills it with content)
      // An empty/unfilled ad iframe has near-zero height/width
      const rect = iframe.getBoundingClientRect();
      if (rect.height < 10 || rect.width < 10) {
        // Still empty, but maybe it will fill later — keep checking
        return;
      }
      // If the iframe exists but the container is tiny, AdSense didn't fill it
      if (rect.height <= 1 && rect.width <= 1) {
        setVisible(false);
        clearInterval(interval);
        return;
      }
      // Ad appears to be populated
      clearInterval(interval);
    }, 500);

    // Give up after 10 seconds if still empty
    const timeout = setTimeout(() => {
      setVisible(false);
      clearInterval(interval);
    }, 10000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  if (!visible) return null;

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
