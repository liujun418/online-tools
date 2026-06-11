PATH = "C:/Users/jun/online-tools/src/lib/blog.ts"
with open(PATH, encoding="utf-8") as f:
    ts = f.read()

content = """<p>I needed to send someone a 2KB icon embedded directly in an HTML email. No external images allowed — the email client blocks them. A <a href="/en/tools/image-to-base64">Base64 image converter</a> turned the icon into a text string I pasted directly into an img tag. The image displayed. No file upload, no external URL, no blocked content.</p>

<p>Base64 encoding turns any image into a text string. It makes the data about 33% larger but eliminates the HTTP request. Here is when that trade-off is worth it and when it is not.</p>

<h2>The Email Signature Problem Solved</h2>

<p>Email clients block external images by default. Your logo, your headshot, your social media icons — all invisible until the recipient clicks "display images." A Base64-encoded image is embedded directly in the HTML. No external source to block. The image loads with the email.</p>

<p>The <a href="/en/tools/image-to-base64">image to Base64 converter</a> processes your image in the browser. Nothing is uploaded to any server. Drag an image, get the data URI string, paste it into your HTML. The format is <code>&lt;img src="data:image/png;base64,iVBORw0K..." /&gt;</code>.</p>

<h2>The Mistake: Base64-Encoding a 2MB Photo</h2>

<p>I tried Base64-encoding a 2MB product photo for a webpage. The encoded string was 2.6MB of text embedded in my HTML. The browser had to download and parse 2.6MB before rendering anything. The page loaded in 4 seconds instead of 1. Counter-intuitive: Base64 is only worth it for images under 5KB. Above that, the HTTP request is faster than the Base64 overhead.</p>

<p>A 2KB icon as a separate file: one HTTP request, 2KB download, cached by browser for future visits. The same icon as Base64: zero HTTP requests, 2.6KB embedded in HTML, NEVER cached, re-downloaded every page load. For icons under 5KB used on a single page, Base64 wins. For anything larger or used on multiple pages, regular image files win.</p>

<p>The <a href="/en/tools/image-to-base64">free image to Base64 converter</a> works on PNG, JPG, WebP, and SVG. Images up to 10MB. For small icons, logos, and email signatures, it is the fastest way to embed images without external files.</p>"""

post = """  {
    slug: "image-to-base64-practical-guide",
    title: "How to Embed an Image Directly in HTML Without a Separate File",
    description: "Turn any image into a Base64 data URI string and paste it directly into an img tag. No file upload, no external URL, no blocked content.",
    date: "2026-06-10",
    category: "Developer",
    tags: ["image to Base64", "Base64 image", "embed image HTML", "data URI", "image to text", "Base64 converter"],
    relatedTools: ["image-to-base64","base64-converter","url-encoder"],
    content: `
"""

post += content.strip() + "\n`,\n  },\n"

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
