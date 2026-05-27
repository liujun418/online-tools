"""Add 1 blog post for May 26."""
PATH = "C:/Users/jun/online-tools/src/lib/blog.ts"
with open(PATH, encoding="utf-8") as f:
    ts = f.read()

post = """  {
    slug: "base64-image-converter-guide",
    title: "How to Convert an Image to Base64 (and Why You'd Want To)",
    description: "Turn any image into a Base64 data URI string you can embed directly in HTML or CSS. No file uploads, no extra HTTP requests.",
    date: "2026-05-26",
    category: "Developer",
    tags: ["image to base64", "base64 image converter", "convert image to base64", "data URI", "embed image HTML", "base64 encoder"],
    relatedTools: ["image-to-base64", "base64-converter"],
    content: `""" + """<p>You need a small icon on your webpage. Normally, the browser makes an HTTP request to fetch the image file. For a tiny 2KB icon, the request overhead (DNS, connection, headers) is larger than the image itself. A <a href="/en/tools/image-to-base64">Base64 image converter</a> eliminates that request entirely.</p>

<p>Here is what Base64 image encoding actually does, when to use it, and when to avoid it.</p>

<h2>What Base64 Image Encoding Does</h2>

<p>It takes a binary image file (PNG, JPG, WebP, SVG) and converts it into a long text string. That string can be pasted directly into an HTML <code>img</code> tag or CSS <code>background-image</code>. The browser decodes it and renders the image without making a separate network request.</p>

<p>The format looks like this:</p>

<pre><code>&lt;img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA..." /&gt;</code></pre>

<p>Everything after <code>base64,</code> is the encoded image data. The browser reads it, decodes it, and displays the image — all in one step, no additional request.</p>

<h2>When Base64 Images Make Sense</h2>

<p><strong>Very small images.</strong> Icons, logos, decorative elements under 5KB. The Base64 string adds about 33% overhead compared to the binary file, but you save an entire HTTP request. For tiny images, the trade-off is worth it.</p>

<p><strong>Email signatures.</strong> Email clients often block external images. A Base64-encoded logo or signature image is embedded directly in the HTML and displays without being blocked. This is the most common practical use case.</p>

<p><strong>Single-file HTML documents.</strong> If you need to share a complete HTML page as one file (reports, invoices, templates), Base64-encode all images so they travel with the HTML. No broken image links.</p>

<p><strong>CSS backgrounds for small elements.</strong> A repeating 50x50px texture pattern encoded as Base64 in your CSS file eliminates a request for a tiny file.</p>

<h2>When NOT to Use Base64 Images</h2>

<p><strong>Large images.</strong> A 500KB photo becomes a 665KB Base64 string. It bloats your HTML or CSS file, blocks rendering (the browser has to download the entire string before it can parse the page), and is not cached separately. Regular image files are cached by the browser; Base64 strings are re-downloaded every time the page loads.</p>

<p><strong>Images used on multiple pages.</strong> A logo that appears on every page should be a regular image file — the browser caches it once and reuses it. A Base64 logo in the HTML would be downloaded again on every page.</p>

<p><strong>Images that change often.</strong> Every time you update a Base64 image, you have to regenerate the entire string. With a regular image file, you just swap the file.</p>

<p>The <a href="/en/tools/image-to-base64">free image to Base64 converter</a> does the conversion in your browser — your image never leaves your computer. Drop an image, get the Base64 string, paste it where you need it.</p>"""

ts = ts[:ts.rfind("];")] + "\n" + post + """`

  },
];

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
