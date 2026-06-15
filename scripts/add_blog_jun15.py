PATH = "C:/Users/jun/online-tools/src/lib/blog.ts"
with open(PATH, encoding="utf-8") as f: ts = f.read()

c="""<p>I wrote a regex to validate email addresses. It worked on my test cases. Then a user tried to sign up with "john.doe+tag@example.co.uk" and it failed. I spent 3 hours debugging the pattern. A <a href="/en/tools/regex-tester">regex tester tool</a> would have caught the edge case in 10 seconds.</p>

<p>Regular expressions are powerful but unforgiving. A missing anchor, a misplaced quantifier, or a forgotten character class can break everything. And when they do, the error messages are almost useless.</p>

<h2>The Email Regex That Failed at "john.doe+tag@example.co.uk"</h2>

<p>I used the pattern <code>^[\\w.-]+@[\\w.-]+\\.[a-zA-Z]{2,}$</code>. It matches most emails. But it doesn't match addresses with a plus sign in the local part. That's a common email pattern for filtering and testing. The regex failed because <code>\\w</code> doesn't include the plus character.</p>

<p>The fix: change <code>[\\w.-]</code> to <code>[\\w.+/-]</code> to include the plus sign and other valid characters. A regex tester would have let me paste both the pattern and test cases like "john.doe+tag@example.co.uk" and see the mismatch instantly.</p>

<h2>The Anchor Mistake That Cost Me 2 Hours</h2>

<p>Another time, I wrote a regex to match phone numbers: <code>\\d{3}-\\d{3}-\\d{4}</code>. It worked when testing with "123-456-7890" but also matched "a123-456-7890b" as part of a longer string. The problem was missing anchors.</p>

<p>Anchors <code>^</code> (start) and <code>$</code> (end) force the regex to match the entire string. Without them, it matches any substring. The fix: <code>^\\d{3}-\\d{3}-\\d{4}$</code>. A regex tester would have shown both matches and non-matches in real time.</p>

<h2>The Regex Flag That Made Everything Case-Insensitive</h2>

<p>I wrote a regex to match URLs: <code>^https://[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$</code>. It failed on URLs with uppercase letters like "HTTPS://EXAMPLE.COM". The fix was adding the case-insensitive flag <code>i</code>.</p>

<p>Counter-intuitive: many developers forget flags. A regex tester lets you toggle flags and see the results immediately. Our <a href="/en/tools/regex-tester">free regex tester</a> has real-time highlighting, groups, positions, and code snippets for 10 programming languages.</p>

<h2>The Quantifier That Greedily Matched Too Much</h2>

<p>I used <code>.*</code> to match text between two tags: <code>&lt;title&gt;.*&lt;/title&gt;</code>. It matched from the first <code>&lt;title&gt;</code> to the last <code>&lt;/title&gt;</code> on the entire page. The fix was making the quantifier lazy: <code>.*?</code>.</p>

<p>Lazy quantifiers match as little as possible. Greedy quantifiers match as much as possible. A regex tester shows you exactly what your regex is matching by highlighting the full match in the test text.</p>

<p>Regular expressions are not magic. They are just patterns. A <a href="/en/tools/regex-tester">regex tester tool</a> takes the guesswork out of writing and debugging them. Paste your pattern, test text, and see matches in real time.</p>
"""

post = f"""  {{
    slug: "regex-tester-debugging-mistake",
    title: "I Spent 3 Hours Debugging a Regex That a Tester Would Have Caught in 10 Seconds",
    description: "Missing anchors, misplaced quantifiers, and forgotten flags break regex. A regex tester catches these edge cases instantly.",
    date: "2026-06-15",
    category: "Developer",
    tags: ["regex tester", "regex debugging", "email regex", "phone regex", "lazy quantifier", "regex flags"],
    relatedTools: ["regex-tester","text-diff","base64-converter"],
    content: `
{c.strip()}
`,
  }},
"""

ts = ts[:ts.rfind("];")] + "\n" + post + "\n];\n"
if "export function getBlogPosts" not in ts:
    ts += "export function getBlogPosts(): BlogPost[] { return blogPosts.sort((a,b)=>new Date(b.date).getTime()-new Date(a.date).getTime()); }\nexport function getBlogPost(slug:string): BlogPost|undefined { return blogPosts.find(p=>p.slug===slug); }\n"
with open(PATH, "w", encoding="utf-8") as f: f.write(ts)
print(f"OK {len(ts)}")
