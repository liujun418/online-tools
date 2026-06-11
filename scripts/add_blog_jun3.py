PATH = "C:/Users/jun/online-tools/src/lib/blog.ts"
with open(PATH, encoding="utf-8") as f:
    ts = f.read()

content = """<p>Someone sent me JSON with a trailing comma on line 42. The error message said "Unexpected token" and pointed to line 1. I searched line 1 for five minutes before realizing it was the comma at the end of line 42. A <a href="/en/tools/json-formatter">JSON validator</a> would have caught it in one second.</p>

<p>JSON is the default data format of the web. Every API returns it. Every config file uses it. And almost everyone has spent time debugging a JSON syntax error that was actually something else entirely. Here are the five most common JSON mistakes and how to catch them instantly.</p>

<h2>1. Trailing Commas</h2>

<p>JavaScript allows trailing commas. JSON does not. A comma after the last item in an array or object is legal in JS but breaks JSON parsing. This is the single most common JSON error because developers write JSON the same way they write JavaScript objects.</p>

<p>The fix: use a <a href="/en/tools/json-formatter">JSON validator</a> that highlights errors with line numbers. The validator points to the exact position of the trailing comma instead of giving you a generic parse error.</p>

<h2>2. Unquoted Keys</h2>

<p>JSON requires double quotes around keys. <code>{name: "Alice"}</code> is valid JavaScript but invalid JSON. The correct format is <code>{"name": "Alice"}</code>. This mistake happens when writing JSON by hand instead of generating it with a library.</p>

<h2>3. Single Quotes Instead of Double</h2>

<p>JSON uses double quotes exclusively. <code>'hello'</code> is a valid Python or JavaScript string but invalid JSON. The correct format is <code>"hello"</code>. This is the second most common error after trailing commas, especially for Python developers who are used to single quotes.</p>

<h2>4. Unescaped Characters</h2>

<p>If your JSON value contains a double quote, a backslash, or a control character, it must be escaped with a backslash. A value like <code>"He said "hello""</code> breaks because the parser sees the inner quotes as the end of the string. The fix: <code>"He said \\"hello\\""</code>.</p>

<h2>5. Wrong Data Types</h2>

<p>A number in quotes like <code>"42"</code> is a string, not a number. A bare word like <code>true</code> is a boolean, but <code>"true"</code> is a string. These type mismatches pass validation but break your application logic. The <a href="/en/tools/json-formatter">tree view</a> helps spot these — values are color-coded by type so strings, numbers, booleans, and null are visually distinct.</p>

<p>Paste your JSON into the <a href="/en/tools/json-formatter">free formatter</a>. If it has errors, the validator tells you exactly where. If it is valid but messy, the formatter structures it with collapsible sections. No IDE needed.</p>"""

T = """  {{
    slug: "{}",
    title: "{}",
    description: "{}",
    date: "2026-06-03",
    category: "{}",
    tags: [{}],
    relatedTools: [{}],
    content: `
{}
`,
  }},
"""

post = T.format(
    "json-formatter-common-mistakes",
    "The 5 Most Common JSON Mistakes and How to Catch Them Instantly",
    "Trailing commas, unquoted keys, single quotes, unescaped characters, and type mismatches. These break JSON parsing constantly. Here is how to spot and fix each one.",
    "Developer",
    '"JSON mistakes", "JSON syntax errors", "JSON validator", "trailing comma JSON", "JSON formatter online", "fix JSON errors"',
    '"json-formatter","json-to-csv","csv-to-json"',
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
