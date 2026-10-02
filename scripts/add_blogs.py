# -*- coding: utf-8 -*-
import io

path = r"C:\Users\jun\online-tools\src\lib\blog.ts"
with io.open(path, encoding="utf-8") as f:
    content = f.read()

old = '\n];\n\nexport function getBlogPosts(): BlogPost[]'

new_blogs = r"""
  {
    slug: "unix-timestamp-log-timezones-debugging-guide",
    title: "Debugging Time Zones in Server Logs Using Unix Timestamps",
    description: "Your server logs show the same crash at 12:34:56 in New York and at 17:34:56 in Berlin, and you're trying to figure out who hit the API when. Without Unix timestamps, you'll guess wrong.",
    date: "2026-10-02",
    category: "Developer",
    tags: ["unix timestamp", "log debugging", "time zones", "UTC", "server logs"],
    relatedTools: ["unix-timestamp", "cron-parser", "json-formatter"],
    content: `<p>You ship a feature at 9am and someone reports a bug at 9am — but they're in Tokyo and you're in San Francisco, and the actual incidents happened twelve hours apart. Your logs show the right local time, but you've spent an hour chasing a ghost. Logging in Unix timestamps fixes this for good, and an <a href="/en/tools/unix-timestamp">Unix timestamp</a> converter lets you decode them back to whatever human time you need — no guessing, no daylight saving math, no arguing about who's correct.</p>

<h2>Why Local Time in Logs Is a Trap</h2>

<p>The problem with logging in local time is that local time isn't actually fixed. It changes twice a year for daylight saving in most countries, the timezone itself changes when a government redraws the map, and two servers in different regions don't agree on what "now" is. The counter-intuitive part is that humans read local times better but debug them worse — local times are easy to look at and easy to misread, while Unix timestamps are unambiguous and trivial to convert. Logging the Unix time alongside the message turns log analysis into arithmetic instead of guessing.</p>

<h2>How to Use Unix Times Effectively</h2>

<p>Log every event with the Unix timestamp in milliseconds, plus the ISO 8601 string in UTC, plus the user's timezone offset at the time of the event. Three pieces of information, and you can reconstruct anything. For the timestamp conversion, an <a href="/en/tools/unix-timestamp">Unix timestamp</a> tool gives you human-readable formats instantly. For scheduled jobs that fire at specific times, a <a href="/en/tools/cron-parser">cron parser</a> lets you see exactly when each scheduled task actually ran in UTC. And for searching JSON log entries, a <a href="/en/tools/json-formatter">JSON formatter</a> lets you compare timestamps across services side by side. Once you've got consistent Unix times everywhere, you'll never have to wonder whether the user's "noon" matches the server's "noon" — they don't, and now you can prove it.</p>

<h2>Log in Unix, Display in Local</h2>

<p>We covered the basics in our guide to <a href="/en/blog/unix-timestamp-converter-explained">Unix timestamp conversion explained</a>; the logging version is the same idea applied to debugging. Store the unambiguous value, display the human value, and stop wasting time figuring out when something actually happened.</p>`
  },
  {
    slug: "csv-to-json-cicd-test-fixtures-guide",
    title: "From Spreadsheet to Test Fixtures: CSV to JSON for CI/CD Pipelines",
    description: "Your QA team lives in spreadsheets and your tests live in JSON. You can either retype every row or you can convert the CSV to JSON once and use it everywhere — here's the workflow that actually scales.",
    date: "2026-10-02",
    category: "Developer",
    tags: ["CSV to JSON", "test fixtures", "CI/CD", "QA automation", "data pipeline"],
    relatedTools: ["csv-to-json", "json-formatter", "regex-tester"],
    content: `<p>Your QA team has two hundred test cases in a spreadsheet. They update it constantly. Your test suite needs JSON fixtures, but nobody wants to retype two hundred rows every time someone fixes a typo. A <a href="/en/tools/csv-to-json">CSV to JSON</a> converter turns the spreadsheet into a JSON fixture on every build, the test suite reads the JSON, and the QA team keeps working in Excel. Everyone stops fighting about file types and gets back to work.</p>

<h2>The Spreadsheet-to-Fixture Pipeline</h2>

<p>The pattern is simple: the QA team owns a CSV file in version control, the build pipeline runs CSV to JSON conversion, and the test suite consumes the JSON output. No human touches the JSON. No human retypes data. When QA adds a row to the spreadsheet, it's automatically in the next test run. The counter-intuitive part is that spreadsheets are better than JSON files for non-developers, even though JSON is better for tests. The fix isn't to make everyone use JSON — it's to make the conversion automatic so nobody has to.</p>

<h2>How to Make It Reliable</h2>

<p>Three rules. First, keep the CSV header row as your schema — that's where the JSON keys come from. Second, commit the converted JSON to a build artifact directory, not to the source tree, so it's always fresh. Third, validate the JSON with a <a href="/en/tools/json-formatter">JSON formatter</a> as part of the conversion step, so a typo in the CSV doesn't quietly produce malformed test data. For testing edge cases — what happens when a cell is empty, what happens with a quote in a quote — a <a href="/en/tools/regex-tester">regex tester</a> can help verify the parsing patterns against the CSV before they hit the pipeline. The whole thing runs in CI on every PR, takes seconds, and your QA team never has to touch JSON.</p>

<h2>Convert at the Edge, Not in the Code</h2>

<p>We covered legacy migrations in our guide to <a href="/en/blog/csv-to-json-converter-data-migration-legacy-systems">CSV to JSON for legacy systems</a>; the CI/CD version is the same idea applied to living data. Let the humans use the tool they like, convert it at the boundary, and the pipeline stays clean.</p>`
  },
  {
    slug: "html-entities-rss-xml-feed-escaping-guide",
    title: "Escaping HTML Entities in RSS and XML Feeds: Where Decoding Goes Wrong",
    description: "Your blog feeds have unreadable XML because half the entities are double-encoded and the other half are stripped. RSS parsers are strict — here's how to escape once and only once.",
    date: "2026-10-02",
    category: "Developer",
    tags: ["HTML entities", "RSS feed", "XML escaping", "data corruption", "feed validators"],
    relatedTools: ["html-entities", "url-encoder", "json-formatter"],
    content: `<p>You publish an RSS feed and it looks fine in the browser, but Feed Validator screams about malformed XML. The post titles show &amp;amp; instead of & and the body has stray entities like &nbsp; that nobody can read. The fix is to escape HTML entities exactly once, in the right place, and to stop double escaping them at every step. An <a href="/en/tools/html-entities">HTML entities</a> tool helps you see what's actually in your feed versus what's supposed to be there — usually the difference is one extra round of escaping.</p>

<h2>Why RSS Feeds Break So Easily</h2>

<p>RSS and Atom feeds are XML, and XML has rules about which characters must be escaped. The ampersand is the big one — every & in your content needs to become &amp; in the XML, and then the & in &amp; doesn't need to be escaped again. Most CMS systems escape once on save and then escape again on feed generation, which produces &amp;amp; in the output. The counter-intuitive part is that the bug is invisible in the database (where the content is correct) and only shows up in the feed (where it's been escaped twice). Tools that read the feed see the literal text &amp;amp; and display the ampersand, but tools that read the raw XML break.</p>

<h2>The Escape-Once Rule</h2>

<p>Escape once at the storage layer and never again. If your database stores the literal character (your post title contains "Tom & Jerry"), escape it once when generating the feed XML. Don't escape it again on display. Don't escape it again when generating social cards. Don't escape it again when sending notifications. Use an <a href="/en/tools/html-entities">HTML entities</a> tool to spot-check your feed: paste the raw XML in, see what gets decoded, and if you see &amp;amp; in the decoded output, you've double-escaped somewhere. For the URL fields in the feed, a <a href="/en/tools/url-encoder">URL encoder</a> catches the same kind of issue for links, since ampersands in URLs also need careful handling. For the JSON-LD that lives alongside the feed, a <a href="/en/tools/json-formatter">JSON formatter</a> catches the same kind of double-encoding in structured data. The rule is one escape per source, no exceptions.</p>

<h2>Escape Once, Validate Often</h2>

<p>We covered API corruption in our guide to <a href="/en/blog/html-entities-json-api-text-corruption-guide">HTML entities in JSON and APIs</a>; the feed version is the same idea with stricter parsers. Escape once, validate the output, and the feed stops breaking.</p>`
  },
  {
    slug: "perpetual-calendar-easter-computus-algorithm-guide",
    title: "Why Easter Moves Every Year: The Math Behind Computus",
    description: "Christmas is always December 25, but Easter bounces between March 22 and April 25. The reason isn't random — it's a 1,600-year-old algorithm balancing lunar cycles, equinox, and the day of the week.",
    date: "2026-10-02",
    category: "Calculator",
    tags: ["perpetual calendar", "Easter date", "Computus", "lunar calendar", "moveable feast"],
    relatedTools: ["perpetual-calendar", "unix-timestamp", "age-calculator"],
    content: `<p>You check the calendar and Easter is on April 9 this year, March 31 the year after, and April 16 the year after that. Christmas doesn't move, Thanksgiving is the fourth Thursday of November by federal rule, but Easter drifts all over the spring. The reason is that Easter is tied to the moon, not the sun — and computing it accurately took the Catholic Church 600 years of arguing. Look it up on a <a href="/en/tools/perpetual-calendar">perpetual calendar</a> and you can see the pattern: it never lands on the same date twice in a row.</p>

<h2>The Three Rules Behind Computus</h2>

<p>Easter is the first Sunday after the first full moon on or after the spring equinox. Three astronomical events — equinox, full moon, Sunday — have to line up, and they're measured in three different systems. The spring equinox is fixed by the church at March 21 for calculation purposes. The full moon is the ecclesiastical full moon, a calculated approximation based on the Metonic cycle (19 years that repeat lunar phases). Sunday is the day of the week. The counter-intuitive part is that the full moon used for Easter isn't the real astronomical full moon — it's a tabular approximation that drifts by a day or two from the actual sky. The algorithm that computes Easter is called Computus, and the most common version is the one Gauss published in 1800, refined by several people since.</p>

<h2>Why It Matters Beyond Easter</h2>

<p>Easter determines dozens of other moveable feasts — Carnival, Lent, Pentecost, Ascension Day, Trinity Sunday. Computing any of them means computing Easter first. For Western Easter, the algorithm is relatively simple. For Eastern Orthodox Easter, it uses the older Julian calendar and is even more constrained, which is why Orthodox Easter usually falls later. For software that needs to compute these dates, an <a href="/en/tools/unix-timestamp">Unix timestamp</a> tool lets you convert the calculated date to a precise moment, and an <a href="/en/tools/age-calculator">age calculator</a> can use the same algorithm to compute dates for historical or projected events. The 19-year Metonic cycle is also why the dates repeat in patterns — search for "easter dates 19-year cycle" and you'll see that the sequence of dates repeats with small variations every 19 years.</p>

<h2>The Calendar Is Older Than the Algorithm</h2>

<p>We covered perpetual calendar mathematics in our guide to <a href="/en/blog/perpetual-calendar-mathematics-february-29-2100">why February 29 skips in 2100</a>; the Easter version is the same complexity applied to a single moveable date. The math is older than most computer languages, and a few lines of code can compute any Easter date back to 325 AD.</p>`
  },
  {
    slug: "text-diff-legal-contract-redline-tracking-guide",
    title: "Text Diff for Legal Contracts: Tracking Changes Without the Original Document",
    description: "A counterparty sends you a redlined contract as a clean PDF — no track changes, no comments, just the new version. A text diff is the only way to see what they actually changed.",
    date: "2026-10-02",
    category: "Text Tools",
    tags: ["text diff", "legal contracts", "redline", "change tracking", "contract review"],
    relatedTools: ["text-diff", "word-counter", "base64-converter"],
    content: `<p>You get a contract back from a counterparty and it's a clean version, no track changes, no comments. They say it's mostly the same as what you sent, with a few small tweaks. The truth is usually somewhere between "mostly the same" and "fundamentally rewritten" and you'll never know without doing a real comparison. A <a href="/en/tools/text-diff">text diff</a> tool is the fastest way to turn their version against yours and see every line that changed — no lawyer required, no special software, just a clean side-by-side.</p>

<h2>Why You Should Always Diff Incoming Contracts</h2>

<p>Most contract negotiations are honest, but the small changes that get slipped through can be significant — a clause about governing law changed from New York to Delaware, a liability cap changed from $50,000 to $500,000, an auto-renewal clause appeared where it wasn't before. The counter-intuitive part is that these changes are designed to be hard to spot. They're written in legalese, they look similar to the original, and they assume you'll skim. A text diff makes them impossible to skim past, because every change is highlighted.</p>

<h2>How to Do a Real Contract Diff</h2>

<p>Convert both PDFs to plain text first (a <a href="/en/tools/text-diff">text diff</a> tool needs plain text, not formatted documents). Strip headers, footers, and page numbers if they shift between versions, so the diff doesn't show a thousand irrelevant line-break differences. Then run the diff and read every change — yes, every one. For each change, ask whether it changes the meaning, the obligations, the term, or the risk. If you're tracking how the contract has evolved over multiple rounds, a <a href="/en/tools/word-counter">word counter</a> can tell you roughly how much text was added or removed between versions. For storing the redlined comparison as a portable document, a <a href="/en/tools/base64-converter">base64 converter</a> can encode the comparison result for embedding in email or chat. The whole workflow takes ten minutes and catches changes that would otherwise take a lawyer an hour to find.</p>

<h2>Never Sign Without a Diff</h2>

<p>We covered diff in code review in our guide to <a href="/en/blog/text-diff-code-review-merge-conflict">text diff for code reviews</a>; the legal version is the same idea with higher stakes. Diff every contract, read every change, and don't trust anyone who says the changes are minor.</p>`
  },
  {
    slug: "fancy-text-generator-seo-unicode-serp-safety-guide",
    title: "Fancy Text in SEO: Why Search Engines Read Your Unicode Differently Than Humans",
    description: "Your Instagram bio has fancy text in 𝓯𝓪𝓷𝓬𝔂 fonts and it looks great. The search engine sees something completely different — sometimes nothing readable at all.",
    date: "2026-10-02",
    category: "Text Tools",
    tags: ["fancy text generator", "Unicode SEO", "search ranking", "SERP", "social media"],
    relatedTools: ["fancy-text-generator", "case-converter", "word-counter"],
    content: `<p>You use a <a href="/en/tools/fancy-text-generator">fancy text generator</a> to make your Instagram bio stand out, your tweet more eye-catching, or your product name more memorable. It works — humans see the fancy styling and notice. But search engines see something different: they see Unicode characters, not letters, and they treat them as a different language entirely. The fancy text that looks great in the feed is invisible to Google, doesn't appear in autocomplete, and won't help you in the slightest for SEO.</p>

<h2>What Search Engines Actually See</h2>

<p>Fancy text isn't letters — it's mathematical alphanumeric symbols from a Unicode block. The "fancy f" (𝓯) is not the letter f, it's a mathematical italic symbol that happens to look like one. Google's algorithm doesn't map these symbols to their base letters by default. Search for "𝓯𝓪𝓷𝓬𝔂" and you get zero results. Search for "fancy" and you get everything. The counter-intuitive part is that fancy text is invisible to search engines in the same way it's visible to humans — humans see letters, search engines see Unicode points. This means a brand name in fancy text gets indexed as a completely different string, and nobody searching for it will find you.</p>

<h2>When to Use It and When Not To</h2>

<p>Use fancy text in social media bios, profile names, and short-form display text where humans see it but search engines don't matter. Don't use it in product names, blog titles, page headers, or anything that needs to rank in search. Don't use it in URLs — Unicode in URLs is a security and compatibility nightmare. If you need to maintain a fancy look for branding purposes, keep the fancy version for display and the plain ASCII version for everything that touches search, links, or metadata. For converting between cases in your plain ASCII title, a <a href="/en/tools/case-converter">case converter</a> keeps the readable version formatted consistently, and a <a href="/en/tools/word-counter">word counter</a> can tell you if the fancy version is shorter or longer than the readable version, which matters when you need them to fit the same character limit. The fancy version is for humans, the readable version is for the index.</p>

<h2>Visible to Humans, Invisible to Search</h2>

<p>We covered how fancy text works in our explainer of <a href="/en/blog/what-is-fancy-text-generator">what fancy text generators actually do</a>; the SEO version is the same idea applied to ranking. Use it for looks, keep ASCII for search, and don't confuse the two.</p>`
  },
];

export function getBlogPosts(): BlogPost[]"""

assert content.count(old) == 1, "marker not found or not unique"
content = content.replace(old, new_blogs)
with io.open(path, "w", encoding="utf-8", newline="\n") as f:
    f.write(content)
print("OK free station blogs inserted")