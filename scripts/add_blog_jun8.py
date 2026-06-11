PATH = "C:/Users/jun/online-tools/src/lib/blog.ts"
with open(PATH, encoding="utf-8") as f:
    ts = f.read()

content = """<p>I had guests over last weekend. Six different people asked for the WiFi password. I spelled it out six times. Capital S, lowercase m, the letter a, lowercase l, lowercase l, underscore, c, a, t, the number 7. Three people typed it wrong. I spelled it again. A <a href="/en/tools/qr-code-generator">WiFi QR code</a> would have solved this in zero words.</p>

<p>QR codes are not just for restaurant menus. They encode any text into a scannable square. Here is what you can actually do with a QR code generator and why each use case saves real time.</p>

<h2>The WiFi QR Code That Saved My Sanity</h2>

<p>A WiFi QR code encodes your network name and password in a standard format. Scan it with any phone camera and the phone connects automatically. No typing. No spelling. No explaining that the underscore is above the hyphen key.</p>

<p>The format is <code>WIFI:S:YourNetworkName;T:WPA;P:YourPassword;;</code>. The <a href="/en/tools/qr-code-generator">QR code generator</a> handles this — paste the string, and download a ready-to-print QR code. Print it. Frame it. Put it on the fridge. Guests scan and connect.</p>

<h2>The Mistake: Putting Too Much Data in One QR Code</h2>

<p>I tried to put a 500-word document into a QR code. The code became dense, complex, and unreadable by most phone cameras. Counter-intuitive: QR codes work better with less data. A URL is ideal — 30-50 characters. A WiFi config is perfect. A vCard with name, phone, and email is fine. A full paragraph of text produces a QR code that is too dense to scan reliably.</p>

<p>The fix: if you need to share a lot of information, put it on a webpage and encode the URL in the QR code. The QR code stays clean and scannable. The webpage handles the heavy content.</p>

<h2>QR Codes vs Links: When Each Wins</h2>

<p>A link works when someone can click it. A QR code works when someone is looking at a physical object — a printed flyer, a product label, a business card, a sign on the wall. If the medium is physical and the device is a phone, a QR code bridges the gap instantly.</p>

<p>The <a href="/en/tools/qr-code-generator">free QR code generator</a> creates codes from URLs, text, WiFi credentials, or vCard contact info. Download as PNG. Print at any size. No signup, no watermark.</p>"""

post = """  {
    slug: "qr-code-wifi-practical-guide",
    title: "What to Do When Six People Ask for Your WiFi Password at the Same Time",
    description: "A WiFi QR code on your fridge ends the password spelling game forever. Here is how to make one and three other practical uses for QR codes.",
    date: "2026-06-08",
    category: "Tools",
    tags: ["QR code", "WiFi QR code", "QR code generator", "create QR code", "share WiFi password", "QR code uses"],
    relatedTools: ["qr-code-generator","url-encoder","text-to-slug"],
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
