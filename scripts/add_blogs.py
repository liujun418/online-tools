"""Add 6 blogs to free station (366->372) - August 14, 2026"""
BLOG_FILE = r"C:\Users\jun\online-tools\src\lib\blog.ts"

with open(BLOG_FILE, "r", encoding="utf-8") as f:
    content = f.read()

old = '\n];\n\nexport function getBlogPosts(): BlogPost[]'

new_blogs = r"""
  {
    slug: "text-to-slug-seo-urls-cms-workflow",
    title: "How to Turn Any Title Into an SEO-Friendly URL Slug (CMS Workflow)",
    description: "Your post title is 'How To Bake Sourdough Bread \u2014 A Beginner's Guide!' and the URL should be /how-to-bake-sourdough-bread. Here's the step-by-step slug workflow for CMS editors.",
    date: "2026-08-14",
    category: "Text Tools",
    tags: ["text to slug", "URL slug", "SEO", "CMS workflow", "content editing"],
    relatedTools: ["text-to-slug", "url-encoder", "case-converter"],
    content: `<p>You finish a post called "How To Bake Sourdough Bread \u2014 A Beginner's Guide!" and paste the title into your CMS. The URL that comes back is <code>/post/4321?title=How%20To%20Bake%20Sourdough%20Bread</code>. Nobody is going to share that. A clean URL \u2014 <code>/how-to-bake-sourdough-bread</code> \u2014 tells readers and search engines what the page is about before they click. That's what a <a href="/en/tools/text-to-slug">text to slug converter</a> does: it turns a messy title into a URL-ready slug in one step.</p>

<h2>The Slug Workflow in Five Steps</h2>

<p><strong>Step 1: Lowercase everything.</strong> URLs are case-sensitive. <code>How-To-Bake</code> and <code>how-to-bake</code> can be treated as different pages. Slugs are always lowercase. <strong>Step 2: Remove punctuation.</strong> The em dash, the exclamation mark, the apostrophe in "Beginner's" \u2014 all of it has to go. They break URL parsing or add noise. <strong>Step 3: Replace spaces with hyphens.</strong> Underscores are technically valid, but hyphens are the convention and search engines treat them as word separators. <strong>Step 4: Drop stop words when it helps.</strong> "A" and "The" at the start add nothing to <code>how-to-bake-sourdough-bread</code>. You usually don't need them. <strong>Step 5: Verify the result.</strong> Paste the title into the <a href="/en/tools/text-to-slug">text to slug tool</a>, copy the output, and paste it into your CMS slug field before you publish.</p>

<p>If the slug still contains characters that need escaping \u2014 a non-ASCII letter, a symbol that survived \u2014 run it through the <a href="/en/tools/url-encoder">URL encoder</a> to see what the browser actually sends. The <a href="/en/tools/case-converter">case converter</a> helps when you need the title in a consistent format for the meta tag at the same time.</p>

<h2>Slug Mistakes That Cost Rankings</h2>

<p><strong>The common mistake: editing the URL after you publish.</strong> Changing a slug breaks every inbound link and every bookmark. The old URL returns a 404, and you lose the ranking you already earned. The fix: set the slug once, before hitting publish, and add a redirect if you ever change it later.</p>

<p><strong>The counter-intuitive part: shorter is usually better.</strong> New writers think a long, descriptive slug helps SEO. In practice, a short slug with the main keyword beats a long one that buries it. <code>/how-to-bake-sourdough-bread</code> outranks <code>/baking/2026/recipes/sourdough/how-to-bake-sourdough-bread-for-beginners</code> because the keyword sits at the front and the extra words dilute it.</p>

<p>For a deeper look at how slugs fit into your overall URL structure, see our guide on <a href="/en/blog/url-slug-best-practices-seo-guide">URL slug best practices</a>. When you're ready, <a href="/en/tools/text-to-slug">our text to slug converter</a> generates the clean slug in a second \u2014 no manual fixing of em dashes and apostrophes.</p>`
  },
  {
    slug: "remove-duplicate-lines-csv-data-cleaning",
    title: "How to Clean Duplicate Rows From a CSV Export Before Your CRM Import",
    description: "You export 5,000 contacts and 800 are duplicates. Importing them all would double-send your email campaign. Here's how to dedupe a CSV before the import.",
    date: "2026-08-14",
    category: "Text",
    tags: ["remove duplicate lines", "CSV cleaning", "data hygiene", "CRM import", "dedupe"],
    relatedTools: ["remove-duplicate-lines", "text-sorter", "csv-to-json"],
    content: `<p>You export 5,000 contacts from your old CRM to bring them into the new one. You're about to hit import when you spot the problem: the export contains the same customers twice, sometimes three times. Different columns are filled in on different rows \u2014 but the email address repeats. If you import as-is, your first email campaign goes to the same person 800 times, and your unsubscribe rate explodes. A <a href="/en/tools/remove-duplicate-lines">remove duplicate lines</a> tool cleans the list before it ever touches your CRM.</p>

<h2>How to Dedupe a CSV Before the Import</h2>

<p><strong>Step 1: Decide what counts as a duplicate.</strong> In a contact list, the email address is almost always the key. Two rows with the same email are the same person, even when the name fields differ. <strong>Step 2: Extract the column you'll dedupe on.</strong> If the email is the first column, copy just that column into the <a href="/en/tools/remove-duplicate-lines">remove duplicate lines</a> tool. Paste it in, and the tool keeps one copy of each unique value while dropping the repeats. <strong>Step 3: Count what you lost.</strong> The tool shows the before and after. 5,000 rows down to 4,200 means 800 duplicates \u2014 exactly the people you would have emailed twice.</p>

<p><strong>Step 4: Reassemble the clean list.</strong> Paste the deduped values back over the original column and save a new CSV. Run it through the <a href="/en/tools/text-sorter">text sorter</a> to sort the final list alphabetically so it matches your CRM import format, and double-check the header row is intact.</p>

<h2>Why You Shouldn't Just Trust Excel</h2>

<p>Excel has a Remove Duplicates feature, but it only works on exact full-row matches. In a real export, two rows for the same person rarely match exactly \u2014 one has the middle initial, the other doesn't. Row-based dedup misses those. <strong>Dedupe on a single column catches what Excel's row comparison misses.</strong> That's the counter-intuitive part: you usually want to dedupe on one field, not the whole row.</p>

<p>The common mistake is deduping after the import instead of before. Once duplicates live in your CRM, you're merging records, cleaning merge fields, and untangling which phone number is current. The <a href="/en/tools/csv-to-json">CSV to JSON</a> tool helps you inspect the data in a structured way if you want to see the duplicates before you clean. We compared the full workflow against Excel's approach in <a href="/en/blog/remove-duplicate-lines-vs-excel-dedup">our Excel dedup comparison</a>. Clean first, import second \u2014 you'll never have to merge 800 records by hand. <a href="/en/tools/remove-duplicate-lines">Our dedupe tool</a> does the cleanup in seconds.</p>`
  },
  {
    slug: "cron-parser-database-backup-scheduling",
    title: "Scheduling Database Backups With Cron (And Checking the Expression Before It Runs)",
    description: "You set a cron job to back up your database at 2am. It never ran. Here's how to write and verify cron expressions for backups and maintenance.",
    date: "2026-08-14",
    category: "Developer",
    tags: ["cron", "database backup", "cron expression", "server maintenance", "scheduling"],
    relatedTools: ["cron-parser", "unix-timestamp", "text-diff"],
    content: `<p>You add a cron job to back up your database every night at 2am. The next morning you check: nothing ran. You look at the expression you wrote \u2014 <code>0 2 * * *</code> \u2014 and it looks right. But it was 2pm, not 2am. A twelve-hour mistake that cost you a night of backups. Cron expressions are compact and unforgiving, and the wrong one fails silently. That's why you verify the expression before you deploy it, with a <a href="/en/tools/cron-parser">cron parser</a>.</p>

<h2>Reading a Cron Expression in Five Fields</h2>

<p>A cron expression has five fields: minute, hour, day of month, month, day of week. <code>0 2 * * *</code> means "at minute 0 of hour 2, every day" \u2014 2:00am. <code>30 3 * * 1</code> means "at 3:30am on Mondays only." <code>*/15 * * * *</code> means "every 15 minutes."</p>

<p>The trap is that day-of-month and day-of-week combine with OR logic in most cron implementations. <code>0 2 1 * 1</code> runs on the first of the month AND on every Monday \u2014 not on Mondays that happen to be the first. That's the counter-intuitive part that catches everyone eventually.</p>

<h2>Scheduling a Database Backup You Can Trust</h2>

<p><strong>Step 1: Pick a time when traffic is low.</strong> For most small sites, 2-3am works. Avoid the top of the hour if your host's other tenants also back up at :00 \u2014 a busy disk slows the job. <strong>Step 2: Write the expression and check it.</strong> Paste it into the <a href="/en/tools/cron-parser">cron parser</a> and confirm the next run times match what you intend. The parser shows the next five occurrences, so a wrong hour jumps out immediately. <strong>Step 3: Add logging.</strong> Redirect the job output to a file so you can see when it runs: <code>0 2 * * * /backup.sh &gt;&gt; /var/log/backup.log</code>. The <a href="/en/tools/text-diff">text diff</a> tool is handy when you compare two versions of a crontab file to spot what changed after an edit.</p>

<p><strong>Step 4: Verify the day-of-week logic.</strong> The common mistake is assuming day-of-month and day-of-week mean AND. If you write <code>0 2 15 * 5</code> expecting "the 15th when it's a Friday," you actually get "the 15th OR any Friday" \u2014 about four times more often than you intended. The parser's occurrence list shows this immediately.</p>

<p>The counter-intuitive tip: test the backup script by hand first, then schedule it. A cron job can't fix a script that fails on its own. Run <code>bash /backup.sh</code>, confirm the dump file exists, then wire up the schedule. The <a href="/en/tools/unix-timestamp">Unix timestamp</a> tool helps you check timezone math when your server runs in UTC but you think in local time \u2014 2am local might be <code>18 2 * * *</code> or worse. For the fundamentals of cron syntax, read <a href="/en/blog/cron-parser-crontab-schedules-explained">our guide to crontab schedules</a>. When your expression is ready, <a href="/en/tools/cron-parser">our cron parser</a> validates it before it ever goes live.</p>`
  },
  {
    slug: "base64-converter-vs-hash-generator-reversible-vs-one-way",
    title: "Base64 vs SHA-256: The Encoding That Reverses and the Hash That Doesn't",
    description: "Base64 and hashing both turn text into gibberish. One reverses cleanly, the other is one-way. Here's when to use each \u2014 and why mixing them up is a security bug.",
    date: "2026-08-14",
    category: "Developer",
    tags: ["base64", "hash", "SHA-256", "encoding vs hashing", "security"],
    relatedTools: ["base64-converter", "hash-generator", "md5-generator"],
    content: `<p>You're building an API and you need to hide a token in a URL. You paste it into a base64 converter, get a clean string, and ship it. Later you read that you should "hash" passwords \u2014 and someone tells you base64 is basically the same thing. It's not. Base64 reverses. Hashing doesn't. Getting them mixed up is a security bug that's easy to make and hard to notice. Here's the difference, and when to use each.</p>

<h2>Base64: Encoding You Can Reverse</h2>

<p>Base64 takes bytes and represents them with 64 safe characters. It exists so binary data \u2014 an image, a token, a file \u2014 can travel through systems that only handle text: a JSON field, a URL, an email body. The key property: <strong>it's reversible</strong>. Run the base64 string through a decoder and you get the original bytes back, exactly. The <a href="/en/tools/base64-converter">base64 converter</a> does both directions. Base64 is not encryption and it's not a secret \u2014 anyone can decode it.</p>

<h2>Hashing: One-Way by Design</h2>

<p>A hash \u2014 SHA-256, MD5, bcrypt \u2014 also turns input into a fixed-length string, but it's designed so you can't get the input back. The same input always produces the same hash, but the process is one-way. That's why passwords are stored as hashes: if the database leaks, the attacker gets <code>a2f3...</code> strings, not passwords. The <a href="/en/tools/hash-generator">hash generator</a> computes these for you, and the <a href="/en/tools/md5-generator">MD5 generator</a> covers the legacy algorithm still used for checksums.</p>

<h2>When People Mix Them Up \u2014 and How It Bites</h2>

<p>The common mistake: base64-encoding a password "for security" and storing that. Base64 is reversible, so anyone who reads the database has the password. <strong>The fix: hash passwords, encode data.</strong> If you need the original back, encode with base64. If you only need to verify it, hash it.</p>

<p>The counter-intuitive part: hashing makes data unrecoverable, which is why you can't "decode" a hash to recover the original. Searching a database for the hash of a known value works \u2014 that's how attackers use rainbow tables \u2014 but reversing it is the whole point of the algorithm. For file integrity, a hash works as a fingerprint: hash the file, store the value, re-hash later and compare. Our guide to <a href="/en/blog/base64-encoding-explained">base64 encoding</a> walks through the reversible side in detail. If your data needs reversing, <a href="/en/tools/base64-converter">our base64 converter</a> handles it. If it needs fingerprinting, <a href="/en/tools/hash-generator">our hash generator</a> is the tool.</p>`
  },
  {
    slug: "random-name-generator-vs-random-number-generator-creative-vs-technical",
    title: "Random Name Generator vs Random Number Generator: Creative vs Technical Randomness",
    description: "One picks 'Elena' out of a character list. The other picks 42 out of a range. Both are random, but they solve different problems. Here's when each fits.",
    date: "2026-08-14",
    category: "Fun & Media",
    tags: ["random name generator", "random number generator", "randomness", "creative tools", "comparison"],
    relatedTools: ["random-name-generator", "random-number-generator", "uuid-generator"],
    content: `<p>Your role-playing group needs a name for the new blacksmith NPC. Your experiment needs a number to pick which participant gets which condition. Both problems feel like "give me something random." But the name generator and the number generator work differently and serve different purposes. Here's how to tell which one you actually need.</p>

<h2>The Name Generator Picks From a Meaningful Set</h2>

<p>A <a href="/en/tools/random-name-generator">random name generator</a> holds a curated list of names \u2014 first names, last names, sometimes themed lists \u2014 and picks one. It's random within the set, but the set itself is chosen by a human. That's the key: <strong>the name generator's randomness is cultural, not mathematical</strong>. It gives you "Elena" or "Marcus," not "a8f2c1." You use it when you need something that reads as a name: characters, usernames, test accounts.</p>

<h2>The Number Generator Produces a Value You Can Analyze</h2>

<p>A <a href="/en/tools/random-number-generator">random number generator</a> produces a value from a range \u2014 1 to 100, or 0 to 1, or any bounds you set. The numbers are meant to be studied: a sample for a test, a seed for a procedure, a fair tie-breaker. <strong>Its randomness is mathematical</strong>, and that matters when the outcome feeds into a calculation or a statistical test.</p>

<h2>Why the Distinction Matters</h2>

<p>The common mistake: using a number generator when you need a name, then mapping numbers to a list by hand. "Person 7" is useless in a story. <strong>Use the name generator when the output has to look like a name, and the number generator when the output has to be analyzed.</strong></p>

<p>The counter-intuitive part: true randomness is often the last thing you want. For repeatable tests you want a seedable generator \u2014 the same seed gives the same sequence. That's where a <a href="/en/tools/uuid-generator">UUID generator</a> enters the picture: it produces globally unique identifiers that are random but practically collision-free, which is what you want for database keys rather than a plain random number. For a deeper look at why random numbers aren't always fair, read <a href="/en/blog/random-number-generator-beyond-dice-rolls">our guide to random number generation</a>. When you need a character, <a href="/en/tools/random-name-generator">the name generator</a> is your tool; when you need a sample, <a href="/en/tools/random-number-generator">the number generator</a> is yours.</p>`
  },
  {
    slug: "translate-history-machine-translation-neural",
    title: "The History of Machine Translation: From Rule-Based Rules to Neural Networks",
    description: "The first machine translator was a bilingual dictionary in a box. Today's neural models translate whole sentences with context. Here's how machine translation got here.",
    date: "2026-08-14",
    category: "Reference",
    tags: ["machine translation", "translation history", "neural networks", "Google Translate", "NLP"],
    relatedTools: ["translate", "case-converter", "text-to-slug"],
    content: `<p>You paste a paragraph into an online translator and get a readable result in under a second. Fifty years ago, the same task produced word soup. The gap between then and now is the story of machine translation \u2014 from hand-written rules to the neural networks that translate with context today. Here's how the field got here.</p>

<h2>The Rule-Based Era: Bilingual Dictionaries in Code</h2>

<p>The earliest systems, from the 1950s through the 1990s, worked on rules. Linguists wrote dictionaries and grammar rules by hand: "for Spanish to English, the adjective follows the noun, so swap them." The output was literal and brittle. A sentence translated word-by-word lost its order and meaning. The <a href="/en/tools/translate">translate tool</a> today is nothing like those systems, but the rule-based era proved the idea was possible.</p>

<h2>The Statistical Turn: Let the Data Speak</h2>

<p>In the 1990s, systems stopped hand-writing rules and started counting. Researchers aligned huge collections of already-translated documents \u2014 the Canadian parliament's bilingual Hansard records were a goldmine \u2014 and built translation from statistics: "this English word often appears with this French word." Quality jumped, but the models had no real understanding. Long sentences still fell apart, and rare words were guesswork.</p>

<h2>Neural Networks: Context Finally Arrives</h2>

<p>Around 2016, neural machine translation replaced statistics. Instead of matching phrases, a neural network reads the whole sentence, builds an internal representation of its meaning, and generates the translation from that representation. The result reads naturally because the model learned from millions of examples how whole sentences relate across languages. The <a href="/en/tools/translate">online translator</a> you use now is built on this approach.</p>

<h2>What Machine Translation Still Gets Wrong</h2>

<p>The common mistake: assuming fluency means accuracy. A neural translation of a technical sentence can read perfectly and be subtly wrong, because idioms and culture don't survive word-for-word. We covered why in our guide to <a href="/en/blog/translate-idioms-cultural-references-accurate-translation">translating idioms and cultural references</a>. The counter-intuitive part: a missing period between two clauses can change how a neural model segments the sentence and flip the meaning. Clean text translates better.</p>

<p>Machine translation went from hand-written rules to statistical counting to neural context in seventy years. Knowing which era's weakness you're hitting \u2014 rules, statistics, or context \u2014 tells you where to double-check the output. The <a href="/en/tools/case-converter">case converter</a> and <a href="/en/tools/text-to-slug">text to slug</a> tools handle the formatting side when you work with translated content.</p>`
  },
];

export function getBlogPosts(): BlogPost[]"""

content = content.replace(old, new_blogs)

with open(BLOG_FILE, "w", encoding="utf-8", newline="\n") as f:
    f.write(content)

print("Free station: 366->372 objects done.")
