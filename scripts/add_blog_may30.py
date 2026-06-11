PATH = "C:/Users/jun/online-tools/src/lib/blog.ts"
with open(PATH, encoding="utf-8") as f:
    ts = f.read()

content = """<p>You paste a URL into a message and it is 200 characters of gibberish. Tracking parameters, session IDs, UTF-8 characters double-encoded. The person receiving it cannot tell what the link actually is. A <a href="/en/tools/url-encoder">URL encoder</a> fixes this in seconds.</p>

<p>URL encoding is one of those things you do not think about until a link breaks. Here is what it does and the three situations where you need it.</p>

<h2>What URL Encoding Actually Does</h2>

<p>URLs can only contain a limited set of characters: A-Z, a-z, 0-9, hyphen, underscore, period, and tilde. Everything else — spaces, symbols, non-Latin characters, emoji — must be percent-encoded to work reliably.</p>

<p>Space becomes <code>%20</code>. Ampersand becomes <code>%26</code>. The Chinese characters for "hello" become <code>%E4%BD%A0%E5%A5%BD</code>. The browser decodes these back to readable text in the address bar, but the actual URL underneath is percent-encoded. If you skip encoding, the URL either breaks or produces unpredictable results depending on the browser and server.</p>

<h2>Three Times You Need URL Encoding</h2>

<p><strong>Building query strings.</strong> If your URL includes user input — a search term, a username, a form field — encode it. A search for "coffee & tea" needs the ampersand encoded as <code>%26</code>, otherwise the server interprets everything after & as a separate parameter. Results: broken query, missing data, confused users.</p>

<p><strong>Links with special characters.</strong> Square brackets in URLs (common in PHP-style query strings) should be encoded. Curly braces, pipes, backslashes — all need encoding. The encoder handles them automatically.</p>

<p><strong>Non-Latin text in URLs.</strong> If your URL contains Arabic, Chinese, Japanese, Korean, or any non-Latin script, it must be percent-encoded. Some browsers do this automatically. Many do not. Assume it will break and encode it preemptively.</p>

<h2>Common Mistakes</h2>

<p><strong>Double encoding.</strong> You encode a URL, then encode it again. <code>%20</code> becomes <code>%2520</code> (the % gets encoded to %25). The browser decodes once, leaving <code>%20</code> instead of a space. This happens when URL encoding is applied at multiple layers — your code encodes, then your framework encodes again.</p>

<p><strong>Encoding the entire URL.</strong> Only encode the parts that need it — query parameter values, path segments with special characters. Encoding the entire URL including <code>https://</code> produces broken results. The <a href="/en/tools/url-encoder">free URL encoder</a> handles this correctly.</p>

<p>Try it: paste a messy URL and see what gets encoded. The tool also decodes — paste a percent-encoded URL to see the original text.</p>"""

T = """  {{
    slug: "{}",
    title: "{}",
    description: "{}",
    date: "{}",
    category: "{}",
    tags: [{}],
    relatedTools: [{}],
    content: `
{}
`,
  }},
"""

post = T.format(
    "url-encoder-practical-guide",
    "URL Encoding Explained: Why Your Links Break and How to Fix Them",
    "Spaces become %20, ampersands become %26. URL encoding is the difference between a link that works and one that breaks. Here is when you need it.",
    "2026-05-30", "Developer",
    '"URL encoder", "URL encoding", "percent encoding", "encode URL online", "URL decoder", "fix broken links"',
    '"url-encoder","text-to-slug","base64-converter"',
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
