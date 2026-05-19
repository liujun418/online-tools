import Link from "next/link";
import type { Metadata } from "next";
import { isValidLocale, getDictionary, Locale } from "@/lib/i18n";
import { getBlogPosts } from "@/lib/blog";
import { tools as allTools } from "@/lib/tools";

const SITE_URL = "https://toolboxonline.club";

export const metadata: Metadata = {
  title: "ToolBoxOnline Blog — Free Tool Guides, Tips & Tutorials",
  description: "Practical guides for getting the most out of free online tools. Tips for developers, writers, students, and anyone who works online.",
  openGraph: { title: "ToolBoxOnline Blog", description: "Free tool guides, tips, and tutorials.", url: `${SITE_URL}/en/blog`, type: "website" },
};

export default async function BlogIndex({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isValidLocale(locale)) return null;
  const dict = await getDictionary(locale as Locale);
  const posts = getBlogPosts();

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <nav className="mb-8 text-sm text-zinc-500 dark:text-zinc-400">
        <Link href={`/${locale}`} className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
        <span className="mx-2">/</span>
        <span className="font-medium text-zinc-900 dark:text-white">Blog</span>
      </nav>

      <header className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">ToolBoxOnline Blog</h1>
        <p className="mt-3 text-base text-zinc-600 dark:text-zinc-400">Practical guides for free online tools. No fluff, no AI-generated filler — just useful stuff.</p>
      </header>

      <div className="space-y-6">
        {posts.map((post) => {
          const related = (post.relatedTools || []).map((id) => allTools.find((t) => t.id === id)).filter(Boolean);
          return (
            <article key={post.slug} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:border-zinc-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700">
              <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-400 mb-2">
                <time dateTime={post.date}>{post.date}</time>
                <span className="rounded-full bg-blue-50 px-2 py-0.5 text-blue-600 dark:bg-blue-900/30 dark:text-blue-300">{post.category}</span>
              </div>
              <Link href={`/${locale}/blog/${post.slug}`} className="group">
                <h2 className="text-xl font-semibold text-zinc-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">{post.title}</h2>
              </Link>
              <p className="mt-2 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">{post.description}</p>
              {related.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {related.map((t: any) => (
                    <Link key={t.id} href={`/${locale}/tools/${t.id}`} className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700">{t.icon} {t.name}</Link>
                  ))}
                </div>
              )}
            </article>
          );
        })}
      </div>
    </div>
  );
}
