"""Add 6 blogs to free station (295→301) — July 31, 2026"""
import os, sys

BLOG_FILE = r"C:\Users\jun\online-tools\src\lib\blog.ts"

with open(BLOG_FILE, "r", encoding="utf-8") as f:
    content = f.read()

old = '\n];\n\nexport function getBlogPosts(): BlogPost[]'

new_blogs = r"""
  {
    slug: "online-translator-travel-essential-phrases-real-time-conversation",
    title: "Online Translator for Travel How to Communicate in Any Country with Just Your Phone",
    description: "You are in a country where you do not speak the language. An online translator turns your phone into a real-time communication tool. Here's the essential travel translation guide.",
    date: "2026-07-31",
    category: "Text Tools",
    tags: ["online translator", "travel", "phrases", "real-time", "communication"],
    relatedTools: ["translate", "morse-code", "text-to-slug"],
    content: `<p>You arrive in a country where you do not speak the language. You need to: ask for directions, order food, negotiate a taxi fare, and handle an emergency. You do not have time to learn the language. You have a phone and a <a href="/en/tools/translate">free online translator</a>. Here is the essential travel translation guide.</p>

<h2>The 10 Phrases You Actually Need</h2>

<p>You do not need to learn the language. You need 10 phrases, translated and saved: "Hello," "Thank you," "Where is...", "How much?", "The bill, please," "I need help," "Do you speak English?", "Sorry, I don't understand," "Where is the bathroom?", and "Call a doctor." These 10 phrases cover 80% of travel communication. Use the <a href="/en/tools/translate">translator</a> to translate them before your trip. Save them on your phone. The translator handles everything else — real-time translation of responses, menus, signs, and unexpected situations. The 10 phrases are the essentials. The translator is the backup for everything else.</p>

<h2>Real-Time Conversation Mode</h2>

<p>For conversations, type what you want to say in English. Translate to the local language. Show the translation to the person you are speaking with. They respond. Type their response (or use voice input) back into English. The conversation is slow but functional. The translator bridges the language gap. The conversation happens. The <a href="/en/tools/translate">free online translator</a> is the universal communication tool — no language learning required.</p>`
  },
  {
    slug: "text-repeater-developer-load-testing-data-generation",
    title: "Text Repeater for Developers How to Generate Test Data and Simulate Load with Simple Text Multiplication",
    description: "You need 10,000 rows of test data for a load test. A text repeater generates them in seconds. Here's the developer's test data generation guide.",
    date: "2026-07-31",
    category: "Developer",
    tags: ["text repeater", "load testing", "test data", "generation", "developer"],
    relatedTools: ["text-repeater", "word-counter", "text-sorter"],
    content: `<p>You are load-testing a registration API. You need 10,000 test email addresses. You could write a script. Or you could use a <a href="/en/tools/text-repeater">text repeater</a> — type a template email, multiply it 10,000 times with newline separators, and paste the output into your load testing tool. The generation took 10 seconds. The script would have taken 10 minutes to write and debug. The text repeater is the faster tool for one-off test data generation.</p>

<h2>When to Use a Text Repeater vs a Script</h2>

<p>Use the text repeater for: one-time test data generation (a few thousand rows), simple patterns (repeated strings, incremental IDs), and quick placeholder content. Write a script for: complex data generation (names, addresses, varied data), data that requires randomization or uniqueness, and repeatable test data pipelines. The text repeater is the quick tool. The script is the comprehensive tool. Use the right one for the job.</p>`
  },
  {
    slug: "url-encoder-seo-canonical-urls-parameter-management",
    title: "URL Encoder for SEO How to Manage Canonical URLs Query Parameters and Special Characters",
    description: "Your URL contains spaces, ampersands, and non-ASCII characters. A URL encoder makes them safe for search engines. Here's the SEO URL management guide.",
    date: "2026-07-31",
    category: "Developer",
    tags: ["URL encoder", "SEO", "canonical", "parameters", "encoding"],
    relatedTools: ["url-encoder", "text-to-slug", "html-entities"],
    content: `<p>Your website generates URLs with query parameters: <code>?q=coffee & tea&page=1</code>. The space and ampersand will break the URL structure. Search engines may index the broken URL — or worse, index multiple versions of the same page with different parameter encodings. A <a href="/en/tools/url-encoder">URL encoder</a> makes URLs safe for search engines by converting special characters to percent-encoded equivalents. The encoded URL is: <code>?q=coffee%20%26%20tea&page=1</code>. The URL is valid. The search engine indexes it correctly. The encoding is invisible to users. It is essential for SEO.</p>

<h2>When to Encode URLs for SEO</h2>

<p>Encode when: URLs contain spaces or special characters, URLs contain non-ASCII characters (accents, non-Latin scripts), or you are setting canonical URL tags. The <a href="/en/tools/url-encoder">URL encoder</a> handles the encoding automatically. Paste the URL. Copy the encoded version. Use it in your canonical tags, sitemaps, and internal links. The encoded URL is the canonical version. The unencoded URL redirects to the encoded version. The search engine indexes one URL. The SEO value is consolidated.</p>`
  },
  {
    slug: "text-diff-vs-json-formatter-line-comparison-vs-data-structure",
    title: "Text Diff vs JSON Formatter Line Comparison vs Data Structure — Two Developer Tools for Completely Different Debugging Tasks",
    description: "Text diff compares two files line by line. JSON formatter structures data for readability. Both are debugging tools. Both work on text. But they solve completely different problems.",
    date: "2026-07-31",
    category: "Developer",
    tags: ["text diff", "JSON formatter", "comparison", "structure", "debugging"],
    relatedTools: ["text-diff", "json-formatter", "code-formatter"],
    content: `<p>You have two versions of a configuration file — before and after a deployment. What changed? You use a <a href="/en/tools/text-diff">text diff</a> tool. It compares the files line by line and highlights every difference. The diff shows exactly what changed between the two versions.</p>

<p>Now you have a single JSON response from an API — 200,000 characters in one collapsed line. What is in this data? You use a <a href="/en/tools/json-formatter">JSON formatter</a>. It adds structure, indentation, and tree view. The formatter makes the data readable.</p>

<p>Text diff answers: "What changed between these two files?" JSON formatter answers: "What is the structure of this data?" Both work on text. Both are essential developer tools. But the questions they answer are completely different. Use <a href="/en/tools/text-diff">text diff</a> for comparison and <a href="/en/tools/json-formatter">JSON formatter</a> for structure.</p>`
  },
  {
    slug: "dice-roller-vs-coin-flip-probability-distribution-vs-binary-outcome",
    title: "Dice Roller vs Coin Flip Probability Distribution vs Binary Outcome — Two Random Tools for Different Types of Decisions",
    description: "Dice produce numbers with bell curve distributions. Coin flips produce binary outcomes. Both are random. Both help make decisions. But the types of decisions they support are completely different.",
    date: "2026-07-31",
    category: "Fun & Media",
    tags: ["dice roller", "coin flip", "probability", "random", "comparison"],
    relatedTools: ["dice-roller", "coin-flip", "random-number-generator"],
    content: `<p>You need to decide between two restaurants. You flip a <a href="/en/tools/coin-flip">coin</a>. Heads = Restaurant A. Tails = Restaurant B. The coin lands on heads. You go to Restaurant A. The decision was binary. The tool was a coin flip.</p>

<p>Now you are designing a game mechanic. You need to determine how much damage a sword does — with a predictable average and rare extreme outcomes. You roll <a href="/en/tools/dice-roller">dice</a>. 2d6 produces damage from 2-12, with 7 being most common and 2 and 12 being rare. The decision was probabilistic. The tool was dice.</p>

<p>Both are random. Both help make decisions. But a coin flip is for binary choices — yes/no, A/B. Dice are for multi-outcome choices with probability distributions. Use the <a href="/en/tools/coin-flip">coin flip</a> for yes/no. Use the <a href="/en/tools/dice-roller">dice roller</a> for distributions.</p>`
  },
  {
    slug: "pet-wallpaper-science-animal-cuteness-psychology",
    title: "The Science of Animal Photography Why We Find Certain Animals Cute — and Why Looking at Pet Photos Reduces Stress",
    description: "Looking at photos of cute animals lowers cortisol, increases dopamine, and improves focus. The effect is measurable. Here's the neuroscience of why pet photos make us feel better.",
    date: "2026-07-31",
    category: "Fun & Media",
    tags: ["pet wallpaper", "cute", "neuroscience", "stress", "psychology"],
    relatedTools: ["pet-wallpaper", "bing-wallpaper", "nasa-apod"],
    content: `<p>You have a stressful day. You open a <a href="/en/tools/pet-wallpaper">pet wallpaper</a> and look at a photo of a golden retriever puppy. You feel better. This is not a placebo. Research shows that viewing images of cute animals: lowers cortisol (the stress hormone), increases dopamine (the reward neurotransmitter), and improves focus and fine motor performance. The effect is measurable, consistent, and documented in multiple studies. Here is the science.</p>

<h2>The Neuroscience of Cute</h2>

<p>The human brain responds to "cute" features — large eyes relative to face size, round face, small nose and mouth — with a dopamine release in the nucleus accumbens, the brain's reward center. These features are characteristic of infant mammals, including human babies. The brain's response to cuteness is an evolutionary adaptation: caring for infants is essential for species survival, so the brain rewards the behavior with dopamine. The response triggers for any cute stimulus — human babies, animal babies, or adult animals with neotenous (infant-like) features. Looking at cute animal photos hijacks the brain's caregiving reward system. The dopamine release feels good. The cortisol reduction reduces stress. The combination improves mood and cognitive performance.</p>

<p>The <a href="/en/tools/pet-wallpaper">pet wallpaper</a> is not just decoration. It is a micro-dose of dopamine — scientifically validated, side-effect free. The puppy photo is medicine.</p>`
  },
];

export function getBlogPosts(): BlogPost[]"""

content = content.replace(old, new_blogs)

with open(BLOG_FILE, "w", encoding="utf-8") as f:
    f.write(content)

print("Free station: 295->done.")