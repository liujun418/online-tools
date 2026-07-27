"""Add 6 blogs to free station (278→284) — July 27, 2026"""
import os, sys

BLOG_FILE = r"C:\Users\jun\online-tools\src\lib\blog.ts"

with open(BLOG_FILE, "r", encoding="utf-8") as f:
    content = f.read()

old = '\n];\n\nexport function getBlogPosts(): BlogPost[]'

new_blogs = r"""
  {
    slug: "base-converter-computer-science-students-binary-hex",
    title: "Base Converter for Computer Science Students How to Master Binary Hex and Decimal Conversions Without a Calculator",
    description: "Your CS exam requires manual binary-to-hex conversion. A base converter helps you practice — but the real skill is understanding the patterns. Here's the computer science student's guide to number bases.",
    date: "2026-07-27",
    category: "Developer",
    tags: ["base converter", "computer science", "binary", "hex", "students"],
    relatedTools: ["base-converter", "binary-converter", "hex-converter"],
    content: `<p>You are a computer science student. Your exam requires you to convert between binary, hexadecimal, and decimal — by hand, without a calculator. You open a <a href="/en/tools/base-converter">base converter</a> to check your answers. The converter is the verification tool. The understanding is the exam skill. Here is the computer science student's guide to number bases.</p>

<h2>The Three Bases You Actually Need</h2>

<p><strong>Binary (base-2):</strong> The language of computers. Every digital system is built on binary. You need to read binary to understand: bitwise operations, memory addresses, and data representation. The pattern: each position is a power of 2. 1010 = 8 + 0 + 2 + 0 = 10 in decimal.</p>

<p><strong>Hexadecimal (base-16):</strong> The human-readable shorthand for binary. One hex digit = 4 binary digits. 1010 1100 = AC in hex. Hex is used for: color codes (#3B82F6), memory addresses (0x7FFF), and binary data display. The pattern: hex digits 0-9 and A-F represent 0-15. The conversion from binary to hex is the easiest: group binary digits into 4-bit chunks, convert each chunk to hex. This is the skill you need for the exam.</p>

<p><strong>Decimal (base-10):</strong> The human number system. You already know it. The skill is converting between decimal and binary/hex. The method: repeated division by the target base, collecting remainders. Convert 42 to binary: 42 ÷ 2 = 21 remainder 0, 21 ÷ 2 = 10 remainder 1, 10 ÷ 2 = 5 remainder 0, 5 ÷ 2 = 2 remainder 1, 2 ÷ 2 = 1 remainder 0, 1 ÷ 2 = 0 remainder 1. Read remainders bottom to top: 101010. The <a href="/en/tools/base-converter">base converter</a> verifies your answer. The method is the exam skill. The converter is the practice tool.</p>`
  },
  {
    slug: "roman-numerals-modern-design-typography-branding-tattoo",
    title: "Roman Numerals in Modern Design How Typography Branding and Tattoo Culture Keep an Ancient Number System Alive",
    description: "Super Bowl LIX. Copyright MCMLXXXVII. King Charles III. Roman numerals survive because they look prestigious. Here's how designers use Roman numerals in the 21st century.",
    date: "2026-07-27",
    category: "Reference",
    tags: ["Roman numerals", "design", "typography", "branding", "tattoo"],
    relatedTools: ["roman-numerals", "base-converter", "perpetual-calendar"],
    content: `<p>Super Bowl LIX. Copyright MCMLXXXVII on a film. A tattoo reading "IV.XVII.MMXX" on someone's forearm. Roman numerals should have died 500 years ago. Instead, they are everywhere in modern design — not for mathematical reasons, but for <strong>aesthetic</strong> reasons. Roman numerals signal prestige, tradition, and permanence. A <a href="/en/tools/roman-numerals">Roman numeral converter</a> helps you generate the correct numerals. The design sense tells you when to use them.</p>

<h2>Roman Numerals in Branding</h2>

<p>Luxury brands use Roman numerals to signal heritage and exclusivity. A watch with "IV" on the face feels more prestigious than one with "4." A product line named "Mark III" feels more established than "Mark 3." The Roman numeral premium is the cognitive bias that complexity signals importance. The converter generates the correct numeral. The brand strategy deploys it effectively.</p>

<h2>Roman Numerals in Tattoos</h2>

<p>Roman numeral tattoos are one of the most popular tattoo genres — dates of birth, wedding anniversaries, memorial dates. The Roman numeral format transforms a date from a piece of data into a piece of art. "6.15.1990" is a date on a form. "VI.XV.MCMXC" is a permanent inscription. The <a href="/en/tools/roman-numerals">Roman numeral converter</a> ensures the date is correct. The tattoo artist ensures it is beautiful. The permanence is the point.</p>

<h2>Roman Numerals in Film and Television</h2>

<p>The Motion Picture Association has required Roman numeral copyright dates since 1930. The practical reason was to make the date harder to read at a glance. Today it is purely tradition. The Super Bowl uses Roman numerals to sound like a gladiatorial event. The converter generates the numerals. The tradition preserves them. Roman numerals are not a number system anymore. They are a <strong>design language</strong>. The converter ensures the grammar is correct. The design ensures the impact is felt.</p>`
  },
  {
    slug: "password-generator-developers-api-key-token-creation",
    title: "Password Generator for Developers How to Create Secure API Keys Access Tokens and Cryptographic Salts",
    description: "Your API needs secure access tokens. Your database needs cryptographic salts. A password generator creates cryptographically random strings for all of them. Here's the developer's guide.",
    date: "2026-07-27",
    category: "Developer",
    tags: ["password generator", "API key", "token", "cryptographic", "developer"],
    relatedTools: ["password-generator", "uuid-generator", "hash-generator"],
    content: `<p>You are building an API. You need: access tokens for authentication, API keys for third-party integrations, and cryptographic salts for password hashing. Each requires a long, random, unguessable string. You could type random characters on your keyboard. That is not random. Human-generated "randomness" follows patterns — patterns that attackers exploit. You need a <a href="/en/tools/password-generator">password generator</a> configured for cryptographic randomness.</p>

<h2>What Developers Need from a Password Generator</h2>

<p><strong>Access tokens:</strong> 32-64 characters, mixed case + digits, no symbols (symbols can cause issues in HTTP headers). Example: a 64-character token has 384 bits of entropy — effectively unguessable. Use the generator with these settings.</p>

<p><strong>API keys:</strong> 32-40 characters, mixed case + digits, often with a prefix for identification. Example: <code>sk_live_</code> + 32 random characters. The prefix identifies the key type. The random string is the secret. The generator creates the random string. You add the prefix.</p>

<p><strong>Cryptographic salts:</strong> 16-32 characters, full character set including symbols. The salt is combined with the password before hashing. Each password gets a unique salt. The generator creates a unique salt for each password. The salt prevents rainbow table attacks. The generator ensures the salt is truly random.</p>

<h2>The Difference Between Passwords and Developer Tokens</h2>

<p>Passwords are for humans to remember (or store in a password manager). Developer tokens are for machines to use. They should be: longer (64+ characters — machines do not need to remember them), fully random (no patterns, no dictionary words), and never displayed to users. The <a href="/en/tools/password-generator">password generator</a> handles both. Configure the length and character set. The generator creates the random string. You integrate it into your application.</p>`
  },
  {
    slug: "md5-generator-vs-uuid-generator-hash-vs-unique-id",
    title: "MD5 Generator vs UUID Generator Hash vs Unique Identifier — Two Tools That Produce Strings but Serve Completely Different Purposes",
    description: "MD5 generates a hash of data for verification. UUID generates a unique identifier for databases. Both produce strings. Both look random. But the purposes are unrelated.",
    date: "2026-07-27",
    category: "Developer",
    tags: ["MD5", "UUID", "hash", "unique ID", "comparison"],
    relatedTools: ["md5-generator", "uuid-generator", "hash-generator"],
    content: `<p>You need to verify a downloaded file is intact. You use an <a href="/en/tools/md5-generator">MD5 generator</a> to hash the file. The hash matches the published hash. The file is verified. The MD5 hash is a <strong>fingerprint</strong> of the file's content. Same input always produces the same hash. Different input produces a different hash.</p>

<p>Now you need a unique identifier for a database record. You use a <a href="/en/tools/uuid-generator">UUID generator</a> to create a UUID. The UUID is guaranteed to be unique. The UUID is a <strong>random identifier</strong>. Each call produces a different UUID. The same input is never seen again.</p>

<p>Both produce strings. Both look random. But the purposes are completely different. MD5 is deterministic — same input = same output. UUID is random — each call = different output. MD5 is for verification. UUID is for identification. Use MD5 when you need to verify data integrity. Use UUID when you need a unique identifier. Different purposes. Different tools.</p>`
  },
  {
    slug: "time-screen-vs-stopwatch-clock-display-vs-elapsed-time",
    title: "Time Screen vs Stopwatch Clock Display vs Elapsed Time — Two Time Tools That Show You Time in Completely Different Ways",
    description: "Time screen shows the current time — large, bold, and impossible to ignore. Stopwatch measures elapsed time — from zero to whenever you stop. Both are time tools. Both show numbers. But the numbers mean different things.",
    date: "2026-07-27",
    category: "Fun & Media",
    tags: ["time screen", "stopwatch", "clock", "elapsed", "comparison"],
    relatedTools: ["time-screen", "stopwatch-and-timer", "fullscreen-text"],
    content: `<p>You open a <a href="/en/tools/time-screen">time screen</a>. The current time fills the display: 10:47 AM. The time updates every second. You leave it open on a spare monitor. The time is always visible. The tool is a <strong>clock</strong> — it tells you what time it is now.</p>

<p>Now you start a <a href="/en/tools/stopwatch-and-timer">stopwatch</a>. The display shows 00:00:00. You click start. The numbers begin counting up: 00:00:01, 00:00:02, 00:00:03... The stopwatch measures <strong>elapsed time</strong> — how long something takes. The tool is a <strong>measurement device</strong> — it tells you how long something took.</p>

<p>Both are time tools. Both show numbers. But the numbers mean completely different things. The time screen answers: "What time is it?" The stopwatch answers: "How long did that take?" The time screen is for orientation. The stopwatch is for measurement. Use the <a href="/en/tools/time-screen">time screen</a> to know the time. Use the <a href="/en/tools/stopwatch-and-timer">stopwatch</a> to measure duration. Clock and stopwatch. Different questions. Different tools.</p>`
  },
  {
    slug: "book-of-answers-history-divination-i-ching-to-digital",
    title: "The History of Divination Tools From the I Ching to the Book of Answers — How Humans Have Been Seeking Random Guidance for 3,000 Years",
    description: "The I Ching (1000 BCE) used yarrow stalks to generate random hexagrams. The Book of Answers uses a random number generator. Different tools. Same human need: guidance in the face of uncertainty.",
    date: "2026-07-27",
    category: "Reference",
    tags: ["book of answers", "divination", "history", "I Ching", "randomness"],
    relatedTools: ["book-of-answers", "coin-flip", "random-number-generator"],
    content: `<p>The I Ching (Book of Changes), dating to approximately 1000 BCE, is one of the oldest divination tools in human history. The method: toss 50 yarrow stalks, divide them into piles, count the remainders, and generate a hexagram — a pattern of six lines, each either broken or unbroken. The hexagram corresponds to one of 64 readings — philosophical texts that offer guidance. The randomness of the yarrow stalks generated the hexagram. The wisdom of the text provided the guidance. The I Ching did not predict the future. It provided a <strong>framework for reflection</strong> — a random prompt that helped the user think about their situation from a new perspective.</p>

<p>Three thousand years later, the <a href="/en/tools/book-of-answers">Book of Answers</a> does the same thing. You ask a question. The tool generates a random response. The response is not a prediction. It is a <strong>provocation</strong> — a random prompt that helps you reflect on your situation. The technology changed from yarrow stalks to random number generators. The purpose did not change: guidance in the face of uncertainty. The yarrow stalks were random. The algorithm is random. The randomness is the mechanism. The reflection is the purpose. The I Ching and the Book of Answers are the same tool — separated by 3,000 years of technology. The human need for guidance is the constant. The tools for generating randomness are the variable.</p>`
  },
];

export function getBlogPosts(): BlogPost[]"""

content = content.replace(old, new_blogs)

with open(BLOG_FILE, "w", encoding="utf-8") as f:
    f.write(content)

print("Free station: 278->done.")