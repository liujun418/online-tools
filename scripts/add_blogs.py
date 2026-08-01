"""Add 6 blogs to free station (301→307) — August 1, 2026"""
import os, sys

BLOG_FILE = r"C:\Users\jun\online-tools\src\lib\blog.ts"

with open(BLOG_FILE, "r", encoding="utf-8") as f:
    content = f.read()

old = '\n];\n\nexport function getBlogPosts(): BlogPost[]'

new_blogs = r"""
  {
    slug: "tip-calculator-international-tipping-customs-by-country",
    title: "Tip Calculator for International Travel How to Navigate Tipping Customs in 20 Countries Without Embarrassing Yourself",
    description: "Tipping rules vary wildly by country — 20% in the US, 0% in Japan, 10% in France. A tip calculator handles the math. But you still need to know the rules. Here's the international tipping guide.",
    date: "2026-08-01",
    category: "Calculator",
    tags: ["tip calculator", "international travel", "tipping customs", "countries", "etiquette"],
    relatedTools: ["tip-calculator", "percentage-calculator", "translate"],
    content: `<p>You are at a restaurant in Tokyo. The service is excellent. You reach for your wallet to leave a tip. Your Japanese friend puts a hand on your arm. "No," they say quietly. "It's insulting." In Japan, tipping is not just unnecessary — it is offensive. Good service is a professional obligation, not something to be rewarded with extra money. A tip suggests the worker needs a bribe to do their job. You put your wallet away. You learned the rule just in time.</p>

<p>Now you are in New York. The bill is $87. You need to tip. The standard is 15-20%. You use a <a href="/en/tools/tip-calculator">tip calculator</a> to figure out exactly what to leave. The math is easy. The rules are hard. Here is the international tipping guide.</p>

<h2>Tipping Rules by Region</h2>

<p><strong>United States and Canada:</strong> 15-20% at restaurants. Tip on the pre-tax amount. Bartenders: $1-2 per drink. Hotel housekeeping: $2-5 per night. Taxi: 10-15%. The US has the most aggressive tipping culture in the world because tipped workers are paid below minimum wage — tips are their income, not a bonus.</p>

<p><strong>Europe:</strong> Service is usually included in the bill (check for "service compris"). If not, 5-10%. In France, a 15% service charge is legally included. Leaving a small extra (1-2 euros) is appreciated but not required. In Germany, round up to the nearest euro. In the UK, 10-12.5% is standard if service is not included.</p>

<p><strong>East Asia:</strong> Generally no tipping. In Japan, tipping is considered rude. In China, tipping is not expected and may be refused. In South Korea, no tipping at restaurants or taxis. The exception: high-end international hotels may accept tips in all three countries.</p>

<p><strong>Southeast Asia:</strong> Varies. Thailand: 10% at tourist restaurants, round up at local spots. Vietnam: not expected but appreciated. Singapore: 10% service charge is usually included. Indonesia: 5-10% at tourist restaurants.</p>

<p>The <a href="/en/tools/tip-calculator">tip calculator</a> handles the math. You handle the cultural knowledge. The combination keeps you from embarrassing yourself in 20 countries.</p>`
  },
  {
    slug: "fancy-text-generator-social-media-bio-profile-optimization",
    title: "Fancy Text Generator for Social Media How to Optimize Your Bio and Profile with Unicode Text Styles That Stand Out",
    description: "Your social media bio is the most valuable 150 characters you own. Fancy text makes it stand out in a sea of plain text. Here's the bio optimization guide for every platform.",
    date: "2026-08-01",
    category: "Text Tools",
    tags: ["fancy text generator", "social media", "bio", "profile", "Unicode"],
    relatedTools: ["fancy-text-generator", "hashtag-generator", "word-counter"],
    content: `<p>Your social media bio is 150 characters. It is the first thing people see after your profile picture. It determines whether they follow you, click your link, or scroll past. Most bios are plain text. They blend in. A <a href="/en/tools/fancy-text-generator">fancy text generator</a> makes your bio visually distinct — using Unicode text styles that render natively on every platform without images or special formatting.</p>

<h2>Platform-by-Platform Bio Strategy</h2>

<p><strong>Instagram:</strong> 150 characters. Use fancy text for your name field (the bold text under your profile picture), not the bio itself. The name field is searchable. 𝔹𝕠𝕝𝕕 𝕟𝕒𝕞𝕖𝕤 catch the eye. The bio stays readable. Break lines with emojis as bullet points.</p>

<p><strong>Twitter/X:</strong> 160 characters. Use one fancy text element — your headline or a keyword. Ｆｕｌｌｗｉｄｔｈ text stands out in the timeline. Do not over-style. One element is interesting. Two is cluttered.</p>

<p><strong>TikTok:</strong> 80 characters. Extremely short. Use fancy text for exactly one word — the key descriptor. "𝔽𝕚𝕥𝕟𝕖𝕤𝕤 coach | Helping you get stronger" is stronger than "Fitness coach | Helping you get stronger." The fancy text creates a visual anchor. The eye goes there first.</p>

<p><strong>LinkedIn:</strong> Use sparingly. LinkedIn is professional. A single fancy text element in the headline — like a bolded keyword — can work. 𝔽𝕦𝕝𝕝-𝕤𝕥𝕒𝕔𝕜 𝔻𝕖𝕧𝕖𝕝𝕠𝕡𝕖𝕣 is memorable. A full bio in script font is not. Professionalism first.</p>

<p>The <a href="/en/tools/fancy-text-generator">fancy text generator</a> converts plain text to Unicode styles in one click. Type your text. Choose a style. Paste into your bio. The effect is immediate. The bio is transformed. In a sea of plain text, fancy text is the signal.</p>`
  },
  {
    slug: "random-name-generator-fiction-writers-character-naming",
    title: "Random Name Generator for Fiction Writers How to Name Characters That Feel Real — Without Spending Hours on Baby Name Websites",
    description: "You need to name 30 characters for your novel. Baby name websites give you the same 100 names. A random name generator gives you thousands of combinations in seconds. Here's the character naming guide.",
    date: "2026-08-01",
    category: "Fun & Media",
    tags: ["random name generator", "fiction", "writing", "character", "naming"],
    relatedTools: ["random-name-generator", "fancy-text-generator", "dice-roller"],
    content: `<p>You are writing a novel. You have 30 characters. Each needs a name. You open a baby name website. The top 10 names for boys: Liam, Noah, Oliver, James, Elijah, Mateo, Theodore, Henry, Lucas, William. The top 10 for girls: Olivia, Emma, Charlotte, Amelia, Sophia, Mia, Isabella, Ava, Evelyn, Luna. These are real names. Real people have them. But every other writer is using the same list. Your characters sound like a preschool class roster from 2024.</p>

<p>A <a href="/en/tools/random-name-generator">random name generator</a> gives you variety. It combines first names and last names from a broader pool. It generates combinations you would not think of. It does not replace your judgment. It expands your options.</p>

<h2>How to Use a Name Generator for Fiction</h2>

<p><strong>Generate 50 names.</strong> Do not stop at the first 10. The first 10 will feel like random combinations. By name 30, patterns emerge. You start seeing which names fit your characters. <strong>Filter by era.</strong> A character born in 1920 should not be named Jayden. A character born in 2020 should not be named Gertrude. The name generator does not know your character's age. You do. <strong>Check meaning.</strong> A name's meaning can add subtext. A character named "Mara" (bitter in Hebrew) carries a different weight than "Beatrice" (bringer of happiness). <strong>Vary the cast.</strong> Your 30 characters should not all have 5-letter names starting with different letters. Variety is realism. <strong>Say them out loud.</strong> A name that looks good on paper might be awkward to pronounce. The <a href="/en/tools/random-name-generator">random name generator</a> gives you options. You choose. The generator accelerates brainstorming. The writer makes the final call.</p>`
  },
  {
    slug: "unix-timestamp-vs-perpetual-calendar-machine-time-vs-human-time",
    title: "Unix Timestamp vs Perpetual Calendar Machine Time vs Human Time — Two Time Tools for Completely Different Audiences",
    description: "Unix timestamp counts seconds since 1970. Perpetual calendar shows any date in any year. Both handle time. But one is for machines. One is for humans.",
    date: "2026-08-01",
    category: "Developer",
    tags: ["Unix timestamp", "perpetual calendar", "time", "machine", "comparison"],
    relatedTools: ["unix-timestamp", "perpetual-calendar", "time-screen"],
    content: `<p>A server logs an error: "timestamp: 1722499200." A developer uses a <a href="/en/tools/unix-timestamp">Unix timestamp converter</a> to translate it: August 1, 2024, 12:00:00 UTC. The timestamp is a single number. The converter turns it into a human-readable date. The tool is for machines speaking to humans.</p>

<p>Now a genealogist is researching a family record from 1752. "Born: September 3, 1752." The genealogist uses a <a href="/en/tools/perpetual-calendar">perpetual calendar</a> to check: what day of the week was September 3, 1752? The answer: it did not exist in Britain and its colonies. September 1752 skipped 11 days when Britain adopted the Gregorian calendar. September 2 was followed by September 14. The perpetual calendar reveals this. The tool is for humans navigating history.</p>

<p>Both tools handle time. Both are essential. But the audiences are completely different. The Unix timestamp converter is for developers debugging systems. The perpetual calendar is for researchers, historians, and planners navigating human calendars. The Unix timestamp is a single number — efficient, universal, machine-readable. The perpetual calendar is a visual grid — comprehensive, contextual, human-readable. Machine time is linear and absolute. Human time is irregular and political — with leap years, calendar reforms, and cultural variations. The <a href="/en/tools/unix-timestamp">Unix timestamp</a> and the <a href="/en/tools/perpetual-calendar">perpetual calendar</a> are the bridge between these two worlds of time.</p>`
  },
  {
    slug: "percentage-calculator-vs-discount-calculator-general-math-vs-shopping-math",
    title: "Percentage Calculator vs Discount Calculator General Math vs Shopping Math — When to Use Which Tool",
    description: "Percentage calculator handles any percent problem. Discount calculator is specialized for shopping. Both use the same math. But the use cases are completely different.",
    date: "2026-08-01",
    category: "Calculator",
    tags: ["percentage calculator", "discount calculator", "shopping", "math", "comparison"],
    relatedTools: ["percentage-calculator", "discount-calculator", "tip-calculator"],
    content: `<p>You need to calculate what 17% of 340 is. You use a <a href="/en/tools/percentage-calculator">percentage calculator</a>. The answer: 57.8. The tool solved a general math problem. You could have been calculating a test score, a tax rate, or a statistical percentage. The percentage calculator handles any percent problem.</p>

<p>Now you are shopping. A jacket is $85 with a 30% discount. You use a <a href="/en/tools/discount-calculator">discount calculator</a>. You enter the original price and the discount percentage. The tool tells you: you save $25.50, and the final price is $59.50. The discount calculator solved a specific shopping problem. It is specialized for the retail context.</p>

<p>Both tools use the same math: <code>amount × percentage / 100</code>. The percentage calculator is the general tool. The discount calculator is the specialized tool. Use the percentage calculator when you need to calculate any percent of any number — test scores, commissions, tax rates, growth rates, and statistical proportions. Use the discount calculator when you are shopping and want to know the final price after a discount. The specialized tool gives you the final price directly. The general tool gives you the percent value. The math is the same. The context is different. The right tool depends on what you are doing.</p>`
  },
  {
    slug: "morse-code-neuroscience-pattern-recognition-brain-auditory-processing",
    title: "The Neuroscience of Morse Code How Your Brain Learns to Hear Patterns in Dots and Dashes — and Why It's Surprisingly Good for Cognitive Health",
    description: "Learning Morse code activates brain regions for pattern recognition, auditory processing, and motor planning. Research shows it may improve working memory and cognitive flexibility. Here's the neuroscience.",
    date: "2026-08-01",
    category: "Fun & Media",
    tags: ["morse code", "neuroscience", "brain", "pattern recognition", "cognitive health"],
    relatedTools: ["morse-code", "text-repeater", "reaction-test"],
    content: `<p>Morse code is 180 years old. It was invented for the telegraph. It should have died with it. But Morse code survived — through radio, through aviation, through the digital age. Pilots still learn it. Ham radio operators still use it. And now neuroscientists are discovering something surprising: learning Morse code is good for your brain.</p>

<h2>What Happens in Your Brain When You Learn Morse Code</h2>

<p>Learning Morse code activates three brain networks simultaneously. <strong>Auditory processing:</strong> the brain learns to distinguish short tones (dots) from long tones (dashes). The temporal lobe — specifically the primary auditory cortex — becomes more efficient at rapid temporal discrimination. <strong>Pattern recognition:</strong> the brain maps sequences of dots and dashes to letters. This is not rote memorization. It is pattern learning. The brain's pattern recognition systems — distributed across the parietal and frontal lobes — strengthen with practice. <strong>Motor planning:</strong> sending Morse code requires precise timing of finger movements. The motor cortex and cerebellum coordinate the rhythm. The result: three brain networks are exercised simultaneously. This is cross-network training.</p>

<p>Research on older adults learning Morse code shows improvements in working memory and cognitive flexibility — the ability to switch between mental tasks. The mechanism is not fully understood. The hypothesis: learning a new symbolic system in adulthood triggers neuroplasticity — the brain's ability to form new connections. The <a href="/en/tools/morse-code">Morse code translator</a> is the entry point. You do not need to memorize the code to use it. But if you choose to learn it, your brain will thank you. The 180-year-old code is a cognitive workout in disguise.</p>`
  },
];

export function getBlogPosts(): BlogPost[]"""

content = content.replace(old, new_blogs)

with open(BLOG_FILE, "w", encoding="utf-8") as f:
    f.write(content)

print("Free station: 301->307 done.")