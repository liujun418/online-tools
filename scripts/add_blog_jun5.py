PATH = "C:/Users/jun/online-tools/src/lib/blog.ts"
with open(PATH, encoding="utf-8") as f:
    ts = f.read()

content = """<p>I manually typed a URL slug last week: "how to build a rest api in python 2025 guide." It took me four tries. First I used spaces. Then I forgot to lowercase the REST. Then I left in the parentheses. By the time I got it right, I had wasted two minutes on what a <a href="/en/tools/text-to-slug">text to slug converter</a> does in one click.</p>

<p>URL slugs seem trivial until you get them wrong. A bad slug breaks links, hurts SEO, and looks unprofessional. A good slug is invisible — it just works. Here is how to get good slugs every time.</p>

<h2>What Makes a URL Slug Good</h2>

<p>A good slug is lowercase, uses hyphens not underscores, contains no special characters, and is roughly 3-6 words. It should be readable by humans. You should be able to look at a slug and know what the page is about without seeing the title.</p>

<p>The slug for this article should be something like <code>what-makes-a-good-url-slug</code>. Not <code>article-1472</code>, not <code>what-makes-a-good-url-slug-in-2025-complete-guide-with-examples</code>, and definitely not <code>What Makes a Good URL Slug?</code> with spaces and capitals.</p>

<p>The <a href="/en/tools/text-to-slug">slug converter</a> handles the rules automatically: lowercases everything, replaces spaces and underscores with hyphens, removes special characters, collapses multiple hyphens, and trims to a reasonable length.</p>

<h2>The Mistake That Broke My Analytics</h2>

<p>I once changed a blog post title from "10 Tips for Better Writing" to "12 Tips for Better Writing" but forgot to update the slug. Google had indexed the old URL. Readers who bookmarked the old title saw a page that did not match. The mismatch between title and URL confused both users and search engines.</p>

<p>Counter-intuitive lesson: once a slug is published and indexed, do not change it unless you set up a 301 redirect. The slug is permanent. If you might change the title later, make the slug intentionally generic and let the title do the descriptive work. A slug like <code>better-writing-tips</code> works whether you have 10, 12, or 20 tips. Tying the slug to a number in the title creates a future problem.</p>

<h2>When Manual Slugs Are Better</h2>

<p>Automated slug converters remove everything non-standard. Sometimes you want to keep something. A product name with a plus sign. A technical term with a slash. An abbreviation in caps. The converter will strip or lowercase these.</p>

<p>In these cases, generate the slug with the tool, then manually edit the result. The tool does 95% of the work. You fix the 5% where context matters. This hybrid approach is faster than manual and more accurate than fully automated.</p>

<p>The <a href="/en/tools/text-to-slug">free slug converter</a> works in any browser. Paste your title, get a slug, tweak if needed, and paste it into your CMS. Two seconds instead of two minutes of trial and error.</p>"""

T = """  {{
    slug: "{}",
    title: "{}",
    description: "{}",
    date: "2026-06-05",
    category: "{}",
    tags: [{}],
    relatedTools: [{}],
    content: `
{}
`,
  }},
"""

post = T.format(
    "url-slug-vs-manual-guide",
    "URL Slug Generator vs Manual Editing — Why I Stopped Typing Slugs by Hand",
    "I typed a slug four times before getting it right. A slug converter does it in one click. But sometimes manual edits matter. Here is when to use each.",
    "Developer",
    '"URL slug", "slug generator", "text to slug", "SEO URL", "pretty URL", "slug vs manual"',
    '"text-to-slug","url-encoder","case-converter"',
    content.strip()
)

ts = ts[:ts.rfind("];")] + "\n" + post + "\n];\n"

if "export function getBlogPosts" not in ts:
    ts += """
export function getBlogPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
"""

with open(PATH, "w", encoding="utf-8") as f:
    f.write(ts)
print(f"Done. {len(ts)} chars")
