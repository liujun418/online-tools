"use client";

import { useState, useEffect } from "react";

export default function VisitorCounter({ toolId }: { toolId: string }) {
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

  return (
    <p className="mt-3 text-xs text-zinc-400 dark:text-zinc-500">
      You are the{" "}
      <span className="font-semibold text-zinc-600 dark:text-zinc-300">
        {count.toLocaleString()}
      </span>
      th person to use this tool
    </p>
  );
}
