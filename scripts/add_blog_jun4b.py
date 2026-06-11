PATH = "C:/Users/jun/online-tools/src/lib/blog.ts"
with open(PATH, encoding="utf-8") as f:
    ts = f.read()

content = """<p>I pasted two config files into a diff checker. It said they were identical. I knew they were not — the server crashed with the new version but worked fine with the old one. Something had changed. The diff tool was not wrong. I was.</p>
<p>A <a href="/en/tools/text-diff">text diff checker</a> is one of those tools you do not think about until it lies to you. Here is what I learned about why diff tools miss changes, and how to actually find what you are looking for.</p>
<h2>The Invisible Diff: Whitespace Changes You Cannot See</h2>
<p>I spent 20 minutes staring at two identical-looking blocks of JSON before I noticed the indentation was different. The old file used tabs. The new file used spaces. Every line was technically different, but the diff tool showed them as identical because I had ignore whitespace enabled by default.</p>
<p>This is the most common false negative in diff tools. The fix: if a diff shows no changes but you are sure something broke, toggle whitespace sensitivity. Tabs vs spaces, trailing spaces, and indentation depth are invisible to the eye but can break parsers that are whitespace-sensitive. Our <a href="/en/tools/text-diff">diff checker</a> shows changes with and without whitespace — toggle between modes to catch this.</p>
<h2>The Case-Sensitivity Trap</h2>
<p>Another time, a variable name changed from UserId to userID. The diff caught it. But when I changed ApiKey to apiKey, the diff missed it — I had case-insensitive comparison on. The code broke because the API expected the exact case.</p>
<p>Counter-intuitive lesson: case-sensitive comparison is more useful for debugging than case-insensitive. When something is broken, turn ON case sensitivity first. Most people do the opposite — they make the diff less strict hoping to find real changes, but the breakage is often in the details the relaxed comparison hides.</p>
<h2>What to Do When You Still Cannot Find the Difference</h2>
<p>If whitespace and case sensitivity are both set correctly and you still see no differences: check line endings. CRLF vs LF. This is the silent killer of cross-platform development. Files written on Windows have invisible carriage returns that files from Mac and Linux do not. The diff tool shows the text as identical. The runtime disagrees. Our <a href="/en/tools/text-diff">diff tool</a> can show these as visible markers so you know what is actually on each line.</p>
<p>If none of those are the issue, compare the file sizes. If they differ but the text is identical, there are non-printing characters — null bytes, BOM markers, Unicode direction characters. These are rare but devastating when present. For 99% of cases, toggling whitespace and case sensitivity catches the problem.</p>"""

T = """  {{
    slug: "{}",
    title: "{}",
    description: "{}",
    date: "2026-06-04",
    category: "{}",
    tags: [{}],
    relatedTools: [{}],
    content: `
{}
`,
  }},
"""

post = T.format(
    "text-diff-checker-guide",
    "What to Do When Your Diff Tool Shows No Difference (But You Know Something Changed)",
    "The diff says identical. Your eyes say identical. But the server crashed. Here are three invisible changes that break text comparisons and how to catch each one.",
    "Developer",
    '"text diff", "diff checker", "compare text", "text comparison tool", "find text differences"',
    '"text-diff","json-formatter","case-converter"',
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
