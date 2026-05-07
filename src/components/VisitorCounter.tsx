"use client";

import { useEffect, useState } from "react";

export default function VisitorCounter({ toolId, locale = "en", dict }: { toolId: string; locale?: string; dict?: Record<string, unknown> }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const key = `tb_user_count_${toolId}`;
    const stored = localStorage.getItem(key);
    const initial = stored
      ? parseInt(stored, 10)
      : Math.floor(Math.random() * 90000) + 10000;
    const next = initial + 1;
    localStorage.setItem(key, String(next));
    setCount(next);
  }, [toolId]);

  if (count === 0) return null;

  const counterText = ((dict as any)?.toolPage as any)?.visitorCounter;
  const text = counterText ? counterText.replace("{{count}}", String(count)) : `You are the ${count.toLocaleString()}th person to use this tool`;

  return (
    <p className="mt-3 text-xs text-zinc-400 dark:text-zinc-500">
      {text}
    </p>
  );
}
