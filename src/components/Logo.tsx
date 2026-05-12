"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
    const observer = new MutationObserver(() => {
      setDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  return (
    <Link href="/" className="flex shrink-0 items-center">
      {!dark ? (
        <Image
          src="/logo.png"
          alt="ToolBoxOnline"
          width={220}
          height={55}
          className="h-10 w-auto"
          priority
        />
      ) : (
        <Image
          src="/logo-dark.png"
          alt="ToolBoxOnline"
          width={220}
          height={55}
          className="h-10 w-auto"
          priority
        />
      )}
    </Link>
  );
}
