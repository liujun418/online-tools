"""Add 6 blogs to free station (343→349) — August 10, 2026"""
import os, sys

BLOG_FILE = r"C:\Users\jun\online-tools\src\lib\blog.ts"

with open(BLOG_FILE, "r", encoding="utf-8") as f:
    content = f.read()

old = '\n];\n\nexport function getBlogPosts(): BlogPost[]'

new_blogs = r"""
  {
    slug: "age-calculator-document-preparation-exact-age",
    title: "Age Calculator for Document Preparation How to Calculate Exact Ages for Forms, Applications, and Official Records",
    description: "A school enrollment form asks for the child's exact age in years, months, and days. A visa application needs your age on a specific date. An age calculator gives the precise answer. Here's the document preparation guide.",
    date: "2026-08-10",
    category: "Calculator",
    tags: ["age calculator", "documents", "applications", "exact age", "forms"],
    relatedTools: ["age-calculator", "perpetual-calendar", "percentage-calculator"],
    content: `<p>You are enrolling your child in school. The form asks for the exact age in years, months, and days. You know the birth date: March 14, 2019. Today is August 10, 2026. The child is 7 years, 4 months, and 27 days old. Calculating this by hand is error-prone. An <a href="/en/tools/age-calculator">age calculator</a> gives the precise answer instantly. Here is the document preparation guide.</p>

<h2>How to Calculate Exact Ages for Documents</h2>

<p><strong>Enter the birth date and the target date.</strong> Most documents need your age on a specific date — the date of application, not today. An <a href="/en/tools/age-calculator">age calculator</a> lets you enter both dates. The result is the exact age in years, months, and days. <strong>Understand the common uses.</strong> School enrollment needs the exact age. Visa applications need the age on the application date. Insurance quotes need the age at the policy start. Clinical research records need the age at enrollment. The <a href="/en/tools/age-calculator">age calculator</a> handles all of them. <strong>Verify the day count.</strong> Some forms ask for the age in days only — particularly for infants and young children. The <a href="/en/tools/age-calculator">age calculator</a> shows the total day count. The <a href="/en/tools/perpetual-calendar">perpetual calendar</a> helps confirm the day of the week for a given date. <strong>Double-check before submitting.</strong> An age error on an official document causes delays. The <a href="/en/tools/age-calculator">age calculator</a> is accurate to the day. The <a href="/en/tools/percentage-calculator">percentage calculator</a> handles any percentage-related fields. The combination produces accurate, submission-ready documents.</p>`
  },
  {
    slug: "html-to-markdown-documentation-readme-conversion",
    title: "HTML to Markdown for Documentation How to Convert Web Pages into Clean Markdown for Readme Files and Developer Docs",
    description: "You found a great article with code examples. You want it as Markdown for your project's documentation. An HTML to Markdown converter cleans up the conversion. Here's the documentation workflow.",
    date: "2026-08-10",
    category: "Developer Tools",
    tags: ["HTML to Markdown", "documentation", "Readme", "conversion", "developer"],
    relatedTools: ["html-to-markdown", "code-formatter", "markdown-preview"],
    content: `<p>You are writing documentation for your open-source project. You find a great tutorial with code examples that explains a concept perfectly. You want to include it in your README. Copying the HTML and pasting it into Markdown produces a mess — inline styles, tags, and broken formatting. An <a href="/en/tools/html-to-markdown">HTML to Markdown converter</a> produces clean Markdown. Here is the documentation workflow.</p>

<h2>How to Convert HTML to Clean Markdown</h2>

<p><strong>Understand the conversion.</strong> HTML uses tags: <code>&lt;h1&gt;</code>, <code>&lt;p&gt;</code>, <code>&lt;strong&gt;</code>, <code>&lt;a&gt;</code>. Markdown uses symbols: <code>#</code>, <code>**</code>, <code>[text](url)</code>. The <a href="/en/tools/html-to-markdown">HTML to Markdown converter</a> maps HTML tags to Markdown syntax automatically. Headings become <code>#</code>, paragraphs become plain text, links become <code>[text](url)</code>. <strong>Clean the source first.</strong> The conversion quality depends on the source. Remove inline styles, navigation menus, and ad code before converting. The <a href="/en/tools/html-to-markdown">converter</a> works best on article content, not full web pages. <strong>Format code blocks.</strong> The converter turns <code>&lt;pre&gt;&lt;code&gt;</code> blocks into fenced code blocks with backticks. The <a href="/en/tools/code-formatter">code formatter</a> cleans up the code itself. The <a href="/en/tools/markdown-preview">Markdown preview</a> tool shows how the final Markdown renders. <strong>Verify the output.</strong> Run the converted Markdown through a preview tool. Check that headings, lists, and code blocks render correctly. The <a href="/en/tools/html-to-markdown">HTML to Markdown converter</a> is the conversion tool. The developer is the editor. The combination produces clean, documented README files.</p>`
  },
  {
    slug: "global-weather-travel-planning-pack-checklist",
    title: "Global Weather Checker for Travel Planning How to Check Weather Conditions at Your Destination Before You Pack",
    description: "You are flying to Tokyo next week. Is it rainy season? Do you need a light jacket or a winter coat? A global weather checker gives you the forecast. Here's the traveler's packing workflow.",
    date: "2026-08-10",
    category: "Reference",
    tags: ["global weather", "weather forecast", "travel planning", "packing", "destination"],
    relatedTools: ["global-weather", "world-map", "unit-converter"],
    content: `<p>You are flying to Tokyo next week. The flight is booked. The hotel is booked. Now you need to pack. The problem: you do not know the weather in Tokyo. Is it rainy season? Do you need a light jacket or a winter coat? You check a <a href="/en/tools/global-weather">global weather checker</a>. The forecast shows 26°C with a 60% chance of afternoon rain. You pack a light rain jacket. Here is the traveler's packing workflow.</p>

<h2>How to Plan Your Packing with a Weather Checker</h2>

<p><strong>Check the forecast for the full trip.</strong> Do not check today's weather. Check the forecast for the dates you will be there. The <a href="/en/tools/global-weather">global weather checker</a> shows the forecast for your destination. Look at the range: highs, lows, and precipitation. <strong>Convert the temperature.</strong> Weather reports may use Celsius or Fahrenheit, depending on the region. Tokyo uses Celsius. If you think in Fahrenheit, use the <a href="/en/tools/unit-converter">unit converter</a> to convert. 26°C is about 79°F — light clothing weather. <strong>Plan for rain.</strong> The forecast shows precipitation probability. A 60% chance of rain means pack an umbrella or rain jacket. A 20% chance means you can skip it. The <a href="/en/tools/global-weather">global weather checker</a> shows the probability. <strong>Check the location.</strong> The <a href="/en/tools/world-map">world map explorer</a> shows where your destination is geographically. Different regions have different weather patterns. The <a href="/en/tools/global-weather">global weather checker</a> is the forecasting tool. The <a href="/en/tools/world-map">world map</a> is the context tool. The combination produces a well-packed suitcase.</p>`
  },
  {
    slug: "case-converter-vs-text-to-slug-formatting-vs-slug-creation",
    title: "Case Converter vs Text to Slug Formatting Text vs Creating URL Slugs — Two Text Transformation Tools for Different Purposes",
    description: "Case converter changes text between lowercase, UPPERCASE, and Title Case. Text to slug creates URL-friendly versions. Both transform text. But one is for display. One is for links.",
    date: "2026-08-10",
    category: "Text Tools",
    tags: ["case converter", "text to slug", "URL slug", "comparison", "text transformation"],
    relatedTools: ["case-converter", "text-to-slug", "url-encoder"],
    content: `<p>You are writing a blog post. The title is "The Complete Guide to Home Espresso". You paste the title into your CMS. The CMS uses a slug for the URL: <code>/the-complete-guide-to-home-espresso</code>. Before publishing, you need to check the title case. You use a <a href="/en/tools/case-converter">case converter</a> to verify the title is in Title Case. The case converter is a <strong>display</strong> tool. It changes text between lowercase, UPPERCASE, Title Case, and Sentence case — for how the text appears to readers.</p>

<p>Now you create the URL slug. The slug needs to be lowercase, hyphenated, and free of spaces and special characters. You use a <a href="/en/tools/text-to-slug">text to slug converter</a>. The tool converts "The Complete Guide to Home Espresso" into <code>the-complete-guide-to-home-espresso</code>. The text to slug converter is a <strong>link</strong> tool. It creates the URL-friendly version that appears in the browser's address bar.</p>

<p>Both are text transformation tools. Both change the form of the text. But the purposes differ. The <a href="/en/tools/case-converter">case converter</a> is for <strong>display formatting</strong> — how the text reads on the page, in a headline, or in a list. The <a href="/en/tools/text-to-slug">text to slug converter</a> is for <strong>URL creation</strong> — how the content is identified in the address bar. The <a href="/en/tools/url-encoder">URL encoder</a> handles special characters in URLs. The <a href="/en/tools/case-converter">case converter</a> makes the title readable. The <a href="/en/tools/text-to-slug">text to slug converter</a> makes the link shareable. Different tools. Different moments in the same publishing workflow.</p>`
  },
  {
    slug: "world-map-vs-ip-lookup-geography-reference-vs-location-discovery",
    title: "World Map vs IP Lookup Geography Reference vs Location Discovery — Two Location Tools for Different Questions",
    description: "World map shows you every country, city, and landmark. IP lookup tells you where a device is connected from. Both are location tools. But one is a reference. One is an investigation.",
    date: "2026-08-10",
    category: "Reference",
    tags: ["world map", "IP lookup", "geography", "location", "comparison"],
    relatedTools: ["world-map", "ip-lookup", "global-weather"],
    content: `<p>Your child is doing a geography homework project on South America. They need to know the countries, capitals, and major cities. You open a <a href="/en/tools/world-map">world map explorer</a>. The map shows the continent, the country boundaries, and the major cities. Your child studies the geography. The world map is a <strong>reference</strong> tool. It answers: where is this place? What is near it? What are the boundaries?</p>

<p>Now you are troubleshooting a website. A user in another country reports an error. You want to know where the user is connecting from. You use an <a href="/en/tools/ip-lookup">IP lookup</a> tool. You enter the IP address. The tool shows the approximate location — the country, region, and city. The IP lookup is an <strong>investigation</strong> tool. It answers: where is this device connecting from?</p>

<p>Both are location tools. Both work with geography. But the use cases differ. The <a href="/en/tools/world-map">world map explorer</a> is for <strong>geographic knowledge</strong> — learning, planning, and understanding the physical world. The <a href="/en/tools/ip-lookup">IP lookup</a> is for <strong>digital discovery</strong> — tracing connections, troubleshooting, and understanding where online activity originates. The <a href="/en/tools/global-weather">global weather checker</a> uses location for forecasts. The <a href="/en/tools/world-map">world map</a> is the physical reference. The <a href="/en/tools/ip-lookup">IP lookup</a> is the digital investigation. Different questions. Different tools.</p>`
  },
  {
    slug: "cron-parser-science-scheduling-syntax",
    title: "The Science of Cron Expressions How Scheduling Syntax Tells Computers Exactly When to Run Your Tasks",
    description: "0 2 * * * looks like gibberish. To a computer, it means 'every day at 2am.' That's a cron expression — five fields that control automated tasks. Here's how the syntax works.",
    date: "2026-08-10",
    category: "Developer Tools",
    tags: ["cron parser", "cron expression", "scheduling", "automation", "syntax"],
    relatedTools: ["cron-parser", "unix-timestamp", "text-to-slug"],
    content: `<p>You deploy a server. You want to run a database backup every day at 2am. You write a cron expression: <code>0 2 * * *</code>. To a human, it is gibberish. To the computer, it is precise: run the task at minute 0, hour 2, every day of the month, every month, every day of the week. A <a href="/en/tools/cron-parser">cron parser</a> translates this syntax into plain language. Here is how cron expressions work.</p>

<h2>How Cron Expression Syntax Works</h2>

<p><strong>The five fields.</strong> A cron expression has five fields, separated by spaces: minute, hour, day of month, month, and day of week. <code>0 2 * * *</code> means minute 0, hour 2, any day of month, any month, any day of week — every day at 2:00am. The <a href="/en/tools/cron-parser">cron parser</a> breaks each field down and explains the schedule in plain language. <strong>Special characters.</strong> The asterisk <code>*</code> means "every." A slash <code>*/15</code> means "every 15" — <code>*/15 * * * *</code> runs every 15 minutes. A comma <code>1,15</code> means "and" — <code>0 9,18 * * *</code> runs at 9am and 6pm. A hyphen <code>1-5</code> means a range — <code>0 9 * * 1-5</code> runs at 9am on weekdays. <strong>Common mistakes.</strong> The day-of-week and day-of-month fields are both optional — leaving both as <code>*</code> runs daily. Setting both to specific values can produce confusing schedules. A <a href="/en/tools/cron-parser">cron parser</a> catches these before they break your automation. <strong>Verify before deploying.</strong> Run the expression through the <a href="/en/tools/cron-parser">cron parser</a> to confirm the schedule is what you intended. The <a href="/en/tools/unix-timestamp">unix timestamp converter</a> handles time-based values. The <a href="/en/tools/cron-parser">cron parser</a> is the translator. The five-field syntax is the language. The combination keeps your automated tasks running on schedule.</p>`
  },
];

export function getBlogPosts(): BlogPost[]"""

content = content.replace(old, new_blogs)

with open(BLOG_FILE, "w", encoding="utf-8") as f:
    f.write(content)

print("Free station: 343->349 done.")