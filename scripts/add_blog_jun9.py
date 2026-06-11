PATH = "C:/Users/jun/online-tools/src/lib/blog.ts"
with open(PATH, encoding="utf-8") as f:
    ts = f.read()

content = """<p>Last Tuesday I spent an hour debugging a JSON file. The error message said "Unexpected token at line 1, column 342." I counted to column 342 manually. It was a trailing comma on line 17. The parser just pointed to the wrong line. A <a href="/en/tools/json-formatter">JSON validator</a> would have caught it in one second with the correct line number.</p>

<p>JSON errors are the worst kind of bug: they should not exist. Structured data should be structured. But one typo, one missing bracket, one unescaped quote, and the entire file breaks. Here are the four JSON errors that cost me real time and how to catch them instantly.</p>

<h2>The Trailing Comma That Cost Me an Hour</h2>

<p>JavaScript and Python allow trailing commas. JSON does not. A comma after the last item in an array or object is valid JS but breaks JSON parsing. Every time. The error message is almost always misleading — it points to the NEXT element after the comma, not the comma itself.</p>

<p>The fix: paste into a <a href="/en/tools/json-formatter">JSON formatter</a>. The validator highlights the exact line with the error and the correct column number. Counter-intuitive: when the error message points to a line that looks fine, check the line ABOVE it. The trailing comma is almost always on the previous line.</p>

<h2>The Unescaped Quote That Hid in Plain Sight</h2>

<p>My JSON contained user input: a name field with the value O'Brien. The apostrophe was fine. But someone named "Big John" with double quotes in their nickname broke the parser. The double quote inside a double-quoted string terminated the string early. The fix is escaping: <code>Big \\"John\\"</code>.</p>

<p>This is impossible to spot by eye in a 300-line JSON file. The validator catches it instantly because it knows that an unescaped quote inside a quoted string is always a syntax error.</p>

<h2>The Case Where Two Tools Disagree and Both Are Right</h2>

<p>I ran the same JSON through two validators. One said valid. One said invalid. Both were right. The difference: one used the strict JSON spec (RFC 8259), which forbids duplicate keys. The other used a lenient parser that silently keeps the last duplicate key. My application was losing data because one duplicate key was overwriting another.</p>

<p>The lesson: use a <a href="/en/tools/json-formatter">strict validator</a> that catches duplicate keys. A "valid JSON" that silently drops your data is worse than invalid JSON that refuses to parse.</p>

<p>The <a href="/en/tools/json-formatter">free JSON formatter and validator</a> catches trailing commas, missing brackets, unquoted keys, and unescaped characters with correct line numbers. Paste, validate, fix. One second instead of one hour.</p>"""

post = """  {
    slug: "json-debugging-nightmare-guide",
    title: "I Spent an Hour Debugging One JSON Error That a Validator Would Have Caught Instantly",
    description: "Trailing commas. Unescaped quotes. Duplicate keys that silently lose data. Four JSON errors that cost real time and how to catch each one in seconds.",
    date: "2026-06-09",
    category: "Developer",
    tags: ["JSON validator", "JSON formatter", "JSON error", "trailing comma", "debug JSON", "JSON parser error"],
    relatedTools: ["json-formatter","json-to-csv","csv-to-json"],
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
