"""Add 6 blogs to free station (337→343) — August 8, 2026"""
import os, sys

BLOG_FILE = r"C:\Users\jun\online-tools\src\lib\blog.ts"

with open(BLOG_FILE, "r", encoding="utf-8") as f:
    content = f.read()

old = '\n];\n\nexport function getBlogPosts(): BlogPost[]'

new_blogs = r"""
  {
    slug: "url-encoder-web-developers-query-string-parameters",
    title: "URL Encoder for Web Developers How to Handle Special Characters in Query Strings and API Parameters Without Breaking Links",
    description: "A search query contains spaces, symbols, and non-ASCII characters. In a URL, they break the link. URL encoding fixes it. Here's the web developer's guide to safe, shareable URLs.",
    date: "2026-08-08",
    category: "Developer Tools",
    tags: ["URL encoder", "URL encoding", "query string", "API parameters", "web development"],
    relatedTools: ["url-encoder", "json-formatter", "base64-converter"],
    content: `<p>You are building a search page. The user searches for "blue jeans size 32". The query needs to go in the URL: <code>/search?q=blue jeans size 32</code>. The spaces break the URL. A browser truncates or misparses it. The fix is URL encoding. The space becomes <code>%20</code>. The result: <code>/search?q=blue%20jeans%20size%2032</code>. A <a href="/en/tools/url-encoder">URL encoder</a> does this conversion instantly. Here is the web developer's guide.</p>

<h2>How to Encode URLs Correctly</h2>

<p><strong>Understand why encoding matters.</strong> URLs allow a limited character set. Letters, numbers, and a few symbols are safe. Spaces, quotes, ampersands, and non-ASCII characters are not. A space in a URL either breaks the link or gets misinterpreted. URL encoding replaces each unsafe character with a <code>%</code> followed by its hex code. The <a href="/en/tools/url-encoder">URL encoder</a> handles the conversion. <strong>Encode query parameters.</strong> When building a URL with query parameters, encode each parameter value. A value with an ampersand (<code>&</code>) must be encoded as <code>%26</code>, or the server reads it as a new parameter. The <a href="/en/tools/url-encoder">URL encoder</a> prevents this. <strong>Handle non-ASCII text.</strong> A search for "café" contains an accented character. The encoded form is <code>caf%C3%A9</code>. Email addresses, names, and product names all need this treatment. The <a href="/en/tools/json-formatter">JSON formatter</a> helps inspect API responses. The <a href="/en/tools/base64-converter">base64 converter</a> handles a different encoding. <strong>Decode when reading.</strong> When you receive an encoded URL, decode it to read the actual value. The <a href="/en/tools/url-encoder">URL encoder</a> works both ways. Encode for sending. Decode for reading. The combination keeps your links safe, shareable, and functional.</p>`
  },
  {
    slug: "tip-calculator-dining-out-split-bill-fairly",
    title: "Tip Calculator for Dining Out How to Calculate Tips and Split Bills Fairly in Any Group Without Awkward Math at the Table",
    description: "A table of six. The bill is $214.80. Some ordered appetizers, some didn't. The tip depends on service. A tip calculator handles the math. Here's the stress-free dining out guide.",
    date: "2026-08-08",
    category: "Calculator",
    tags: ["tip calculator", "dining out", "split bill", "tip", "group dining"],
    relatedTools: ["tip-calculator", "percentage-calculator", "discount-calculator"],
    content: `<p>A table of six. The bill is $214.80. The service was excellent — a 20% tip is appropriate. The tip is $42.96. The total is $257.76. Divided by six: $42.96 each. But some people ordered appetizers and dessert. Some had water instead of wine. A simple split is not always fair. A <a href="/en/tools/tip-calculator">tip calculator</a> handles the math. Here is the stress-free dining out guide.</p>

<h2>How to Calculate Tips and Split Bills</h2>

<p><strong>Calculate the tip first.</strong> The tip is a percentage of the pre-tax bill. Standard ranges: 15% for average service, 18% for good service, 20% for excellent service. A <a href="/en/tools/tip-calculator">tip calculator</a> computes the tip, the total, and the per-person amount instantly. Enter the bill, the tip percentage, and the number of people. The tool does the rest. <strong>Split fairly, not always equally.</strong> An equal split is fair when everyone ordered similar items. It is unfair when one person ordered the most expensive dish and another had only soup. The fair approach: each person pays their own share of the pre-tax bill, then everyone splits the tip equally (the tip rewards the service, not the food). The <a href="/en/tools/tip-calculator">tip calculator</a> shows the per-person total. <strong>Handle the tax correctly.</strong> Tips are usually calculated on the pre-tax amount, not the post-tax total. The <a href="/en/tools/percentage-calculator">percentage calculator</a> helps if you need custom percentages. The <a href="/en/tools/discount-calculator">discount calculator</a> is useful for happy-hour specials. The <a href="/en/tools/tip-calculator">tip calculator</a> is the dining tool. The conversation is the social skill. The combination keeps the group happy and the math accurate.</p>`
  },
  {
    slug: "random-quote-generator-content-creators-perfect-quote",
    title: "Random Quote Generator for Content Creators How to Find the Perfect Quote for Your Post, Presentation, or Social Media Without Searching for Hours",
    description: "Your presentation needs an opening quote. Your Instagram post needs a caption. A random quote generator gives you options in seconds. Here's the content creator's quote discovery workflow.",
    date: "2026-08-08",
    category: "Fun & Media",
    tags: ["random quote", "quote generator", "content creator", "social media", "inspiration"],
    relatedTools: ["random-quote", "fancy-text-generator", "hashtag-generator"],
    content: `<p>Your presentation needs an opening quote. The quote sets the tone. It frames your argument. You search the internet for 30 minutes and find nothing that fits. A <a href="/en/tools/random-quote">random quote generator</a> gives you curated options in seconds. You browse a few, find one that fits, and move on. Here is the content creator's quote discovery workflow.</p>

<h2>How to Find the Perfect Quote</h2>

<p><strong>Browse with an open mind.</strong> You think you know what quote you want. You have a topic, not a quote. Open the <a href="/en/tools/random-quote">random quote generator</a> and browse. A quote you did not expect might be perfect. The generator serves a new quote each time — keep clicking until one resonates. <strong>Match the quote to the mood.</strong> An inspirational quote fits a motivational post. A humorous quote fits a lighthearted post. A thought-provoking quote fits an opinion piece. The <a href="/en/tools/random-quote">random quote generator</a> surfaces a variety. You choose the mood that matches your content. <strong>Format the quote for the platform.</strong> A quote for Instagram needs visual formatting. Use the <a href="/en/tools/fancy-text-generator">fancy text generator</a> to style the quote text. A quote for a post needs a hashtag. Use the <a href="/en/tools/hashtag-generator">hashtag generator</a> to find related tags. <strong>Attribute properly.</strong> If the quote has a known author, attribute it. The <a href="/en/tools/random-quote">random quote generator</a> provides the attribution. The content creator is the curator. The quote is the hook. The combination turns a good post into a memorable one.</p>`
  },
  {
    slug: "discount-calculator-vs-percentage-calculator-price-reductions",
    title: "Discount Calculator vs Percentage Calculator Price Reductions vs General Percentages — Two Math Tools for Different Shopping Questions",
    description: "Discount calculator computes the final price after a sale. Percentage calculator computes any percentage of any number. Both handle percentages. But one is for shopping. One is for everything.",
    date: "2026-08-08",
    category: "Calculator",
    tags: ["discount calculator", "percentage calculator", "shopping", "comparison", "sales"],
    relatedTools: ["discount-calculator", "percentage-calculator", "tip-calculator"],
    content: `<p>The store is having a sale. A $120 jacket is 25% off. You want to know the final price. You use a <a href="/en/tools/discount-calculator">discount calculator</a>. The calculator shows: the discount is $30, the final price is $90. The discount calculator is a specialized shopping tool. It answers one question: what is the price after the discount? It handles percentage off, sale price, and original price — the three values in any sale.</p>

<p>Now you are analyzing your budget. Your rent is $1,400 out of a $4,200 monthly income. What percentage is your rent? You use a <a href="/en/tools/percentage-calculator">percentage calculator</a>. The calculator shows: 33.3%. The percentage calculator is a general math tool. It computes any percentage of any number: 15% of 80, what percent 25 is of 200, or a 12% increase on $50. It is not tied to shopping. It works everywhere.</p>

<p>Both tools handle percentages. But the use cases differ. The <a href="/en/tools/discount-calculator">discount calculator</a> is for <strong>shopping</strong> — it understands sales, discounts, and final prices. The <a href="/en/tools/percentage-calculator">percentage calculator</a> is for <strong>everything</strong> — general percentage math for budgets, grades, statistics, and more. The <a href="/en/tools/tip-calculator">tip calculator</a> is another specialized percentage tool for dining. The <a href="/en/tools/discount-calculator">discount calculator</a> is the shopping companion. The <a href="/en/tools/percentage-calculator">percentage calculator</a> is the general-purpose workhorse. Different questions. Different tools. Both worth having.</p>`
  },
  {
    slug: "fancy-text-generator-vs-fullscreen-text-creative-typography-vs-focus-mode",
    title: "Fancy Text Generator vs Fullscreen Text Creative Typography vs Focus Mode — Two Text Tools for Different Writing Moments",
    description: "Fancy text styles a quote for social media. Fullscreen text turns your screen into a giant text display. Both are text tools. But one is for style. One is for focus.",
    date: "2026-08-08",
    category: "Text Tools",
    tags: ["fancy text", "fullscreen text", "typography", "focus mode", "comparison"],
    relatedTools: ["fancy-text-generator", "fullscreen-text", "random-quote"],
    content: `<p>You are posting a motivational quote to Instagram. The text needs to stand out. Plain text is boring. You use a <a href="/en/tools/fancy-text-generator">fancy text generator</a>. The tool converts your text into stylized versions: bold, italic, circled, script, and more. You pick a style that matches the mood. The styled text becomes your caption. The fancy text generator is a <strong>style</strong> tool. It makes text visually distinctive.</p>

<p>Now you are giving a presentation over video. You want the audience to read a key phrase — a single word, a short phrase. You use a <a href="/en/tools/fullscreen-text">fullscreen text</a> tool. The tool displays your text in huge letters across the entire screen. The phrase is unmissable. The fullscreen text tool is a <strong>focus</strong> tool. It makes text impossible to ignore.</p>

<p>Both are text tools. Both take plain text and change its presentation. But the purposes differ. The <a href="/en/tools/fancy-text-generator">fancy text generator</a> is for <strong>creative typography</strong> — social media captions, bios, and designs where style matters. The <a href="/en/tools/fullscreen-text">fullscreen text</a> is for <strong>focus mode</strong> — presentations, announcements, and reminders where visibility matters. The <a href="/en/tools/random-quote">random quote generator</a> provides the text to display. The <a href="/en/tools/fancy-text-generator">fancy text generator</a> makes it pretty. The <a href="/en/tools/fullscreen-text">fullscreen text</a> makes it seen. Different moments. Different tools.</p>`
  },
  {
    slug: "morse-code-science-dots-dashes-digital-age",
    title: "The Science of Morse Code How Dots and Dashes Transmit Information and Why This 180-Year-Old Code Still Matters",
    description: "SOS in Morse code is three dots, three dashes, three dots. Simple. Yet it has saved countless lives at sea. Here's the science of Morse code — and why it still matters in the digital age.",
    date: "2026-08-08",
    category: "Developer Tools",
    tags: ["Morse code", "dots and dashes", "encoding", "communication", "history"],
    relatedTools: ["morse-code", "text-to-slug", "base64-converter"],
    content: `<p>In 1844, Samuel Morse sent the first telegraph message: "What hath God wrought?" The message traveled as electrical pulses — short ones (dots) and long ones (dashes). Each letter of the alphabet has a unique dot-dash pattern. A for <code>.-</code>, B for <code>-...</code>, SOS for <code>...---...</code>. The system is simple. The impact was revolutionary. A <a href="/en/tools/morse-code">Morse code translator</a> lets you explore the code today. Here is the science behind it.</p>

<h2>How Morse Code Works</h2>

<p><strong>The basic unit.</strong> Morse code uses two signals: a dot (short signal) and a dash (long signal — three times the length of a dot). Letters are separated by a short pause. Words are separated by a longer pause. The pattern of dots and dashes encodes each character. The <a href="/en/tools/morse-code">Morse code translator</a> converts text to dots and dashes and back. <strong>Frequent letters get short codes.</strong> Morse assigned the shortest patterns to the most common letters. E is a single dot (<code>.</code>). T is a single dash (<code>-</code>). The most frequent letters are the fastest to send. This is an early example of optimizing for frequency — the same principle behind modern data compression. <strong>Why it still matters.</strong> Morse code works with any signal that can be on or off: radio waves, light, sound, even tapping. It was the international distress signal (SOS) for over a century. It still appears in amateur radio, aviation, and emergency signaling. The <a href="/en/tools/morse-code">Morse code translator</a> keeps the skill alive. The <a href="/en/tools/text-to-slug">text to slug converter</a> handles a different kind of encoding for URLs. The <a href="/en/tools/base64-converter">base64 converter</a> handles binary-to-text encoding. The <a href="/en/tools/morse-code">Morse code translator</a> is the code's keeper. The science is elegant. The history is rich. The code endures.</p>`
  },
];

export function getBlogPosts(): BlogPost[]"""

content = content.replace(old, new_blogs)

with open(BLOG_FILE, "w", encoding="utf-8") as f:
    f.write(content)

print("Free station: 337->343 done.")