"""Add 6 blogs to free station (284→290) — July 28, 2026"""
import os, sys

BLOG_FILE = r"C:\Users\jun\online-tools\src\lib\blog.ts"

with open(BLOG_FILE, "r", encoding="utf-8") as f:
    content = f.read()

old = '\n];\n\nexport function getBlogPosts(): BlogPost[]'

new_blogs = r"""
  {
    slug: "perpetual-calendar-genealogy-research-dating-documents",
    title: "Perpetual Calendar for Genealogy Research How to Date Historical Documents and Verify Family Events",
    description: "A family Bible says your ancestor was born on 'Tuesday, March 15, 1887.' A perpetual calendar confirms: March 15, 1887 was indeed a Tuesday. The document is authentic. Here's the genealogy dating guide.",
    date: "2026-07-28",
    category: "Reference",
    tags: ["perpetual calendar", "genealogy", "historical", "dating", "verification"],
    relatedTools: ["perpetual-calendar", "age-calculator", "pregnancy-calculator"],
    content: `<p>You are researching your family history. You find a family Bible with a handwritten record: "John William Thompson, born Tuesday, March 15, 1887." The date is specific. The day of the week is included. This is a clue to authenticity. You open a <a href="/en/tools/perpetual-calendar">perpetual calendar</a> and check: March 15, 1887. The calendar confirms: it was a Tuesday. The document is likely authentic — someone who was fabricating a birth date would not typically include the correct day of the week. The perpetual calendar verified the document. The genealogy research moved forward.</p>

<p>Here is how genealogists use perpetual calendars to date and verify historical documents.</p>

<h2>Verifying Dates with Day-of-Week Matching</h2>

<p>Historical documents often include the day of the week along with the date. This is a built-in verification check. If a document says "Thursday, June 10, 1921" and the perpetual calendar confirms June 10, 1921 was a Thursday, the document is likely authentic. If the days do not match, the document may be: misdated, a transcription error, or a fabrication. The perpetual calendar is the verification tool. The day of the week is the authenticity check. The match is the evidence.</p>

<h2>Dating Undated Documents</h2>

<p>Some historical documents have a day of the week and a partial date: "Monday, the 15th of [month missing], 1902." The perpetual calendar can find all months in 1902 where the 15th fell on a Monday. The result narrows the possibilities. Combined with other clues (the document's content, the paper type, the handwriting), the date can be narrowed to a specific month. The perpetual calendar is the dating tool. The historical context is the confirmation.</p>

<h2>Calculating Ages at Historical Events</h2>

<p>You find a census record from June 1, 1900 that lists your ancestor's age as 35. You know their birth date was March 15, 1865. The perpetual calendar confirms: they would have been 35 years, 2 months, and 17 days old on June 1, 1900 — consistent with the census record. The perpetual calendar verified the age. The census record is corroborated. The <a href="/en/tools/perpetual-calendar">perpetual calendar</a> is the genealogy researcher's verification tool. Dates, days, and ages — all confirmed with one tool.</p>`
  },
  {
    slug: "stopwatch-timer-cooking-professional-kitchen-timing",
    title: "Stopwatch and Timer for Cooking Professional Kitchen Timing Without a Chef's Watch",
    description: "Your recipe requires precise timing — 3 minutes sear, 8 minutes simmer, 12 minutes bake. A stopwatch and timer tracks every stage. Here's the home cook's precision timing guide.",
    date: "2026-07-28",
    category: "Fun & Media",
    tags: ["stopwatch", "timer", "cooking", "kitchen", "precision"],
    relatedTools: ["stopwatch-and-timer", "time-screen", "scoreboard"],
    content: `<p>You are cooking a complex meal: seared scallops (3 minutes per side), risotto (18 minutes, stirring constantly), roasted vegetables (22 minutes at 400°F), and a chocolate soufflé (12 minutes — do not open the oven). Four dishes. Four different timing requirements. Your phone timer can handle one thing at a time. A <a href="/en/tools/stopwatch-and-timer">stopwatch and timer</a> handles all of them. Here is the home cook's precision timing guide.</p>

<h2>The Multi-Dish Timing Problem</h2>

<p>Professional kitchens have a chef or expediter who calls out times. Home cooks have a phone timer that tracks one thing. The multi-dish timing problem: the scallops need 3 minutes, the risotto needs 18 minutes, the vegetables need 22 minutes, and the soufflé needs 12 minutes. You need to start each at the right time so everything finishes together. The timer tracks each dish. You track the overall plan. The timer is the precision tool. The plan is the strategy.</p>

<h2>The Timing Strategy: Work Backwards</h2>

<p>Start with the dish that takes the longest (roasted vegetables, 22 minutes). Work backwards: vegetables in at T-22, soufflé in at T-12, risotto started at T-20 (2 minutes prep, 18 minutes stirring), and scallops seared at T-6 (3 minutes per side, 1 minute rest). The timer tracks each stage. You follow the plan. Everything finishes at the same time. The meal is served hot. The <a href="/en/tools/stopwatch-and-timer">stopwatch and timer</a> is the precision tool that makes multi-dish cooking possible. The phone timer is for one dish. The multi-timer is for a feast.</p>`
  },
  {
    slug: "hash-generator-blockchain-developers-merkle-trees",
    title: "Hash Generator for Blockchain Developers How to Verify Transactions and Understand Merkle Trees",
    description: "Blockchain technology is built on cryptographic hashes. Every transaction, every block, every Merkle tree depends on hash functions. A hash generator helps you understand the foundation. Here's the developer's guide.",
    date: "2026-07-28",
    category: "Developer",
    tags: ["hash generator", "blockchain", "Merkle tree", "SHA-256", "cryptography"],
    relatedTools: ["hash-generator", "md5-generator", "uuid-generator"],
    content: `<p>Blockchain technology — Bitcoin, Ethereum, and thousands of other cryptocurrencies — is built on a foundation of cryptographic hashes. Every transaction is hashed. Every block is hashed. The Merkle tree that summarizes all transactions in a block is built from hashes. Understanding hashes is understanding blockchain. A <a href="/en/tools/hash-generator">hash generator</a> lets you experiment with the fundamental building block. Here is the developer's guide.</p>

<h2>What a Hash Does in Blockchain</h2>

<p>A cryptographic hash function takes any input and produces a fixed-size output — a hash. The key properties that make hashes useful for blockchain: deterministic (same input always produces the same hash), one-way (you cannot reconstruct the input from the hash), and avalanche effect (changing one bit of the input changes the entire hash). These properties enable: transaction verification (the hash of a transaction proves it has not been altered), block chaining (each block contains the hash of the previous block — changing one block changes all subsequent blocks), and Merkle trees (transactions are hashed, then the hashes are hashed together, producing a single root hash that summarizes all transactions).</p>

<h2>Experimenting with the Hash Generator</h2>

<p>Use the <a href="/en/tools/hash-generator">hash generator</a> to understand hashing: hash a transaction string, change one character, hash again — observe the avalanche effect. Hash two transaction hashes together — this is how Merkle trees work. Hash a block header — this is how block chaining works. The hash generator is the learning tool. The blockchain is the application. The hash is the foundation.</p>`
  },
  {
    slug: "text-sorter-vs-remove-duplicate-lines-sorting-vs-dedup",
    title: "Text Sorter vs Remove Duplicate Lines Sorting vs Deduplication — Two Text Tools That Often Work Together but Serve Different Purposes",
    description: "Text sorter organizes lines by order. Remove duplicate lines eliminates repeated lines. Both clean text. Both are essential for data preparation. But they do different things.",
    date: "2026-07-28",
    category: "Text Tools",
    tags: ["text sorter", "remove duplicates", "sorting", "deduplication", "comparison"],
    relatedTools: ["text-sorter", "remove-duplicate-lines", "word-counter"],
    content: `<p>You have a list of 5,000 email addresses: unsorted, with duplicates. You need: the list alphabetized, and duplicates removed. You use a <a href="/en/tools/text-sorter">text sorter</a> to alphabetize. You use a <a href="/en/tools/remove-duplicate-lines">remove duplicate lines</a> tool to deduplicate. Two tools. Two operations. One clean list.</p>

<p>Text sorter organizes. Remove duplicate lines eliminates. Both clean text. Both are essential for data preparation. But they do different things. The text sorter answers: "What order are these lines in?" The remove duplicate lines tool answers: "Which lines appear more than once?" Sorting makes duplicates adjacent. Deduplication removes the adjacent copies. The two tools are sequential: sort first, deduplicate second. Sorting without deduplication leaves duplicates. Deduplication without sorting misses non-adjacent duplicates. Together, they produce a clean, sorted, deduplicated list. Use <a href="/en/tools/text-sorter">text sorter</a> to sort and <a href="/en/tools/remove-duplicate-lines">remove duplicate lines</a> to deduplicate. Order and uniqueness. Two tools. One clean dataset.</p>`
  },
  {
    slug: "gif-search-vs-youtube-thumbnail-animated-vs-static",
    title: "GIF Search vs YouTube Thumbnail Animated Expression vs Static Preview — Two Media Tools for Different Moments in Content Creation",
    description: "GIF search finds the perfect reaction animation for a tweet. YouTube thumbnail preview checks how your video thumbnail looks at every size. Both are media tools. Both are free. But they serve different creative moments.",
    date: "2026-07-28",
    category: "Fun & Media",
    tags: ["GIF search", "YouTube thumbnail", "animated", "static", "comparison"],
    relatedTools: ["gif-search", "youtube-thumbnail", "pet-wallpaper"],
    content: `<p>You are promoting your new YouTube video. You need two things: a reaction GIF for the announcement tweet, and a verified thumbnail for the video itself. You use <a href="/en/tools/gif-search">GIF search</a> for the tweet. You use <a href="/en/tools/youtube-thumbnail">YouTube thumbnail preview</a> for the video. Both are media tools. Both are free. But they serve different moments in the content creation workflow.</p>

<p>GIF search is for <strong>expression</strong> — finding the perfect animated reaction to communicate emotion. YouTube thumbnail preview is for <strong>optimization</strong> — verifying your thumbnail is readable at every size. The GIF is the social media amplifier. The thumbnail is the click-through driver. Different tools. Different moments. Same creator. Use <a href="/en/tools/gif-search">GIF search</a> for the tweet and <a href="/en/tools/youtube-thumbnail">thumbnail preview</a> for the video.</p>`
  },
  {
    slug: "uuid-mathematics-version-4-collision-probability",
    title: "The Mathematics of UUIDs Why Version 4 UUIDs Will Never Collide — and the Mind-Boggling Scale of 2^122",
    description: "A UUID v4 has 122 random bits. That is 5.3 × 10^36 possible values. If every person on Earth generated 1 billion UUIDs per second, it would take 10 billion years to have a 50% chance of a single collision. Here's the math.",
    date: "2026-07-28",
    category: "Developer",
    tags: ["UUID", "mathematics", "collision", "probability", "GUID"],
    relatedTools: ["uuid-generator", "random-number-generator", "hash-generator"],
    content: `<p>You generate a UUID v4 with a <a href="/en/tools/uuid-generator">UUID generator</a>: <code>550e8400-e29b-41d4-a716-446655440000</code>. The UUID is 36 characters, 32 hex digits, 128 bits total. 122 of those bits are random. That is 2^122 possible values — approximately 5.3 × 10^36. This number is so large that the human brain cannot intuitively grasp it. Here is an attempt: if every person on Earth (8 billion) generated 1 billion UUIDs per second, it would take approximately 10 billion years to have a 50% chance of a single collision. The universe is 13.8 billion years old. A UUID collision is less likely than the universe ending before you finish reading this sentence.</p>

<p>The UUID v4 is designed for one purpose: to be generated independently by different systems without coordination, with a negligible probability of collision. Your web server, your mobile app, and your database replica can all generate UUIDs without talking to each other. The mathematics guarantees they will not collide. The <a href="/en/tools/uuid-generator">UUID generator</a> produces a UUID v4 in milliseconds. The mathematics guarantees it will be unique. The scale of 2^122 is the guarantee.</p>`
  },
];

export function getBlogPosts(): BlogPost[]"""

content = content.replace(old, new_blogs)

with open(BLOG_FILE, "w", encoding="utf-8") as f:
    f.write(content)

print("Free station: 284->done.")