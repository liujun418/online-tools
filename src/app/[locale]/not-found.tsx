"use client";

import Link from "next/link";
import { use } from "react";

export default function NotFound({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);

  const messages: Record<string, { title: string; desc: string; home: string }> = {
    en: { title: "Page Not Found", desc: "The page you're looking for doesn't exist.", home: "Go Home" },
    es: { title: "Página No Encontrada", desc: "La página que buscas no existe.", home: "Ir al Inicio" },
    ar: { title: "الصفحة غير موجودة", desc: "الصفحة التي تبحث عنها غير موجودة.", home: "العودة للرئيسية" },
  };

  const msg = messages[locale] || messages.en;

  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="text-6xl font-bold text-zinc-300 dark:text-zinc-700">404</h1>
      <h2 className="mt-4 text-2xl font-semibold text-zinc-900 dark:text-white">{msg.title}</h2>
      <p className="mt-2 text-zinc-500 dark:text-zinc-400">{msg.desc}</p>
      <Link
        href={`/${locale}`}
        className="mt-6 rounded-lg bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
      >
        {msg.home}
      </Link>
    </div>
  );
}
