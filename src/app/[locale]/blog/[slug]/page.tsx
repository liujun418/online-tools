import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { isValidLocale, Locale } from "@/lib/i18n";
import { getBlogPost, getBlogPosts } from "@/lib/blog";
import { tools as allTools } from "@/lib/tools";

const SITE_URL = "https://toolboxonline.club";

export function generateStaticParams() {
  return getBlogPosts().flatMap((post) =>
    ["en", "es", "ar"].map((locale) => ({ locale, slug: post.slug }))
  );
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} — ToolBoxOnline Blog`,
    description: post.description,
    keywords: post.tags?.join(", "),
    openGraph: { title: post.title, description: post.description, url: `${SITE_URL}/en/blog/${slug}`, type: "article" },
    twitter: { card: "summary_large_image", title: post.title, description: post.description },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (!isValidLocale(locale)) notFound();
  const post = getBlogPost(slug);
  if (!post) notFound();

  const related = (post.relatedTools || []).map((id) => allTools.find((t) => t.id === id)).filter(Boolean);

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <nav className="mb-8 text-sm text-zinc-500 dark:text-zinc-400">
        <Link href={`/${locale}`} className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
        <span className="mx-2">/</span>
        <Link href={`/${locale}/blog`} className="hover:text-blue-600 dark:hover:text-blue-400">Blog</Link>
        <span className="mx-2">/</span>
        <span className="font-medium text-zinc-900 dark:text-white truncate">{post.title}</span>
      </nav>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "BlogPosting",
        headline: post.title, description: post.description,
        datePublished: post.date,
        url: `${SITE_URL}/${locale}/blog/${slug}`,
        author: { "@type": "Organization", name: "ToolBoxOnline" },
        publisher: { "@type": "Organization", name: "ToolBoxOnline", url: SITE_URL },
        keywords: post.tags?.join(", "),
      })}} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/${locale}` },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/${locale}/blog` },
          { "@type": "ListItem", position: 3, name: post.title },
        ],
      })}} />

      <header className="mb-8">
        <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-400 mb-3">
          <time dateTime={post.date}>{post.date}</time>
          <span className="rounded-full bg-blue-50 px-2 py-0.5 text-blue-600 dark:bg-blue-900/30 dark:text-blue-300">{post.category}</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">{post.title}</h1>
        <p className="mt-3 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">{post.description}</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {post.tags?.map((tag) => (
            <span key={tag} className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">{tag}</span>
          ))}
        </div>
      </header>

      <div className="prose prose-zinc dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />

      {related.length > 0 && (
        <section className="mt-12 rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
          <h2 className="mb-4 text-lg font-semibold text-zinc-900 dark:text-white">Tools mentioned in this article</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {related.map((t: any) => (
              <Link key={t.id} href={`/${locale}/tools/${t.id}`} className="flex items-center gap-3 rounded-xl border border-zinc-100 bg-zinc-50 p-3 transition-all hover:border-blue-200 hover:bg-blue-50/50 dark:border-zinc-700 dark:bg-zinc-800/50 dark:hover:border-blue-700">
                <span className="text-xl">{t.icon}</span>
                <div className="min-w-0">
                  <p className="text-sm font-medium text-zinc-900 dark:text-white">{t.name}</p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 truncate">{t.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <div className="mt-8">
        <Link href={`/${locale}/blog`} className="text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400">Back to all articles</Link>
      </div>
    </div>
  );
}
