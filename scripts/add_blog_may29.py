PATH = "C:/Users/jun/online-tools/src/lib/blog.ts"
with open(PATH, encoding="utf-8") as f:
    ts = f.read()

content = """<p>You need a unique ID. Not a sequential number that someone can guess. A proper random identifier that will never collide. A <a href="/en/tools/uuid-generator">UUID generator</a> creates one in a single click.</p>

<p>UUIDs (Universally Unique Identifiers) are 128-bit numbers that are practically guaranteed to be unique. The version 4 UUID uses random generation — 122 random bits plus 6 fixed version/variant bits. The probability of generating two identical UUIDs is so low it is effectively zero.</p>

<h2>When UUIDs Are the Right Choice</h2>

<p><strong>Database primary keys in distributed systems.</strong> Auto-increment IDs break when you have multiple servers inserting simultaneously. UUIDs can be generated independently on any server and will never collide. This is why most distributed databases default to UUID primary keys.</p>

<p><strong>File and resource identifiers.</strong> Uploaded files, S3 objects, temporary resources — give them UUID names and you never worry about naming conflicts. No timestamp prefix, no counter, no logic. Just generate a UUID and move on.</p>

<p><strong>API request tracking.</strong> Generate a UUID per request, pass it through your system, and you can trace every request across every service by its ID. This is the foundation of distributed tracing.</p>

<p><strong>Idempotency keys.</strong> Payment processing, order creation, any operation that should only happen once — tag it with a UUID. If the same UUID comes in again, skip the operation. This prevents double-charging and duplicate orders.</p>

<h2>UUID vs Other ID Formats</h2>

<p>UUIDs are 36 characters with dashes. For URLs and filenames, strip the dashes to get a 32-character clean string. For databases, store as a native UUID type for efficient indexing. The <a href="/en/tools/uuid-generator">free UUID generator</a> creates version 4 UUIDs with one click. Pair it with the <a href="/en/tools/base64-converter">Base64 encoder</a> if you need a more compact representation.</p>"""

TEMPLATE = """  {{
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

slug = "uuid-generator-guide"
title = "What Is a UUID and Why Every Developer Uses Them"
desc = "UUIDs are random 128-bit identifiers that are practically guaranteed to be unique. Here is when to use them and why they beat auto-increment IDs."
dt = "2026-05-29"
cat = "Developer"
tags = '"UUID generator", "generate UUID", "UUID v4", "unique identifier", "GUID generator", "distributed database ID"'
tools = '"uuid-generator","base64-converter"'

post = TEMPLATE.format(slug, title, desc, dt, cat, tags, tools, content.strip())

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
print(f"Added. {len(ts)} chars")
