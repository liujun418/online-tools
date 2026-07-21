"""Add 6 blogs to free station (242→248) — July 21, 2026"""
import os, sys

BLOG_FILE = r"C:\Users\jun\online-tools\src\lib\blog.ts"

with open(BLOG_FILE, "r", encoding="utf-8") as f:
    content = f.read()

old = '\n];\n\nexport function getBlogPosts(): BlogPost[]'

new_blogs = r"""
  {
    slug: "emi-calculator-car-loan-vs-personal-loan-vs-home",
    title: "EMI Calculator Car Loan vs Personal Loan vs Home Loan How Interest Rates and Terms Differ Across Loan Types — and How to Compare Them",
    description: "A car loan at 6% for 5 years, a personal loan at 12% for 3 years, and a home loan at 7% for 20 years. The EMI calculator gives you the monthly payment. The strategy tells you which loan to choose.",
    date: "2026-07-21",
    category: "Calculators",
    tags: ["EMI calculator", "car loan", "personal loan", "home loan", "comparison"],
    relatedTools: ["emi-calculator", "loan-calculator", "mortgage-calculator"],
    content: `<p>You need to borrow $30,000. You have three options: a car loan at 6% for 5 years ($580/month), a personal loan at 12% for 3 years ($996/month), or a home equity loan at 7% for 20 years ($233/month). The <a href="/en/tools/emi-calculator">EMI calculator</a> gives you the monthly payment for each option. The monthly payment is the number. The strategy is how you choose between them.</p>

<p>The lowest monthly payment is not always the best choice. The lowest interest rate is not always the best choice. The best choice depends on: the total interest paid, the loan term, and the purpose of the loan. Here is how to compare loans across types — and how the EMI calculator helps you make the right decision.</p>

<h2>The Three Loan Types, Compared</h2>

<p><strong>Car loan:</strong> Lower interest rate (6-8%), shorter term (3-7 years), secured (the car is collateral). The interest rate is lower because the loan is secured — if you default, the lender repossesses the car. The term is shorter because cars depreciate quickly. A 7-year car loan on a car that is worth 50% of its original value after 5 years is a bad deal for the lender. Use the EMI calculator to compare: total interest paid vs the car's depreciated value. If the total interest exceeds the car's value at the end of the loan, you are paying more in interest than the car is worth.</p>

<p><strong>Personal loan:</strong> Higher interest rate (10-15%), shorter term (1-5 years), unsecured (no collateral). The interest rate is higher because the loan is unsecured — the lender has no collateral to seize if you default. The term is shorter because the lender wants their money back quickly. Use the EMI calculator to check: can you afford the higher monthly payment? A $30,000 personal loan at 12% for 3 years is $996/month — nearly double the car loan payment. The higher payment must fit in your budget.</p>

<p><strong>Home equity loan:</strong> Moderate interest rate (6-8%), longest term (10-30 years), secured (your home is collateral). The interest rate is lower because the loan is secured by your home — the lender's risk is low. The term is longer because homes appreciate (unlike cars) and the loan amounts are larger. The risk: you are putting your home at risk. If you default, you lose your home. The lower monthly payment is tempting. The risk is real.</p>

<h2>How to Use the EMI Calculator to Compare</h2>

<p>For each loan option, enter the same principal amount, the loan's interest rate, and the loan's term. The calculator gives you: monthly payment, total interest paid over the life of the loan, and total amount paid (principal + interest). Compare the three options across these three numbers. The monthly payment tells you what fits your budget. The total interest tells you what the loan actually costs. The total amount tells you the full financial commitment.</p>

<p>The decision: if you can afford the higher monthly payment, the personal loan's shorter term saves you the most total interest (but costs the most per month). If you need the lowest monthly payment, the home equity loan wins (but you are putting your home at risk). The car loan is the middle ground — moderate payment, moderate interest, secured by the car. The <a href="/en/tools/emi-calculator">EMI calculator</a> gives you the numbers. The strategy tells you which numbers matter. The decision is yours.</p>`
  },
  {
    slug: "html-to-markdown-content-migration-wordpress-static",
    title: "HTML to Markdown for Content Migration How to Move Your Blog from WordPress to a Static Site Generator Without Losing Your Formatting",
    description: "You have 500 blog posts in WordPress HTML. You want to migrate to a static site generator that uses Markdown. An HTML to Markdown converter handles the bulk conversion. Here's the migration workflow.",
    date: "2026-07-21",
    category: "Developer",
    tags: ["HTML to Markdown", "content migration", "WordPress", "static site", "Markdown"],
    relatedTools: ["html-to-markdown", "markdown-preview", "text-diff"],
    content: `<p>You have been blogging on WordPress for 10 years. 500 posts. All written in HTML — some in the Classic Editor, some in Gutenberg blocks, some in a page builder you no longer remember the name of. You want to migrate to a static site generator — Hugo, Astro, or Next.js with Markdown. The new platform is faster, cheaper, and more secure. But it requires your content to be in Markdown, not HTML. You have 500 HTML posts. You need them in Markdown by the end of the week.</p>

<p>An <a href="/en/tools/html-to-markdown">HTML to Markdown converter</a> handles the bulk conversion. But the conversion is a starting point, not a finished product. Here is the content migration workflow from WordPress HTML to static site Markdown.</p>

<h2>Step 1: Export Your WordPress Content</h2>

<p>WordPress provides a built-in export tool: Tools → Export → Export All Content. This downloads an XML file containing all your posts, pages, and metadata. The XML file is the master copy of your content. Every post's title, date, category, tags, and HTML body is in this file. Do not lose this file. The export is the source of truth for the migration.</p>

<h2>Step 2: Extract and Convert Each Post</h2>

<p>For each post in the XML export: extract the post title, date, slug, categories, and HTML body. Use the <a href="/en/tools/html-to-markdown">HTML to Markdown converter</a> to convert the HTML body to Markdown. The converter handles: headings (h1-h6 → # through ######), links and images (a href and img src → Markdown link and image syntax), lists (ul/ol/li → Markdown list syntax), bold and italic (strong/em → ** and *), and code blocks (pre/code → Markdown code block syntax).</p>

<p>The converter handles 90% of the conversion. The remaining 10% requires manual attention: embedded content (YouTube embeds, Twitter embeds, Gutenberg blocks — these may not convert cleanly), shortcodes (WordPress-specific shortcodes like [gallery] or [caption] — these have no Markdown equivalent and must be manually replaced), and tables (complex HTML tables with merged cells, alignment, and nested content may not convert cleanly).</p>

<h2>Step 3: Review and Fix the Converted Markdown</h2>

<p>For each converted post: preview the Markdown with the <a href="/en/tools/markdown-preview">Markdown preview</a> tool. Compare the preview to the original WordPress post. Look for: broken links (URLs that were relative in WordPress and are now absolute — or vice versa), missing images (image URLs that point to the old WordPress site), and formatting errors (headings that did not convert, lists that lost their nesting, code blocks that lost their language tags).</p>

<p>For a 500-post migration, you cannot manually review every post in detail. Triage: spot-check 10-20% of posts (50-100 posts) at 100% detail. For the remaining 80%, check the title, first paragraph, and any complex elements (tables, embeds, code blocks). The bulk conversion handles the straightforward content. The manual review catches the edge cases. The combination produces a migrated blog that is 95% clean — with the remaining 5% of issues fixable as you discover them.</p>

<h2>Step 4: Import into Your Static Site Generator</h2>

<p>Each converted post becomes a Markdown file with frontmatter: the title, date, slug, categories, and tags as YAML frontmatter, and the converted Markdown as the file body. The static site generator reads the Markdown files and generates the static site. The migration is complete. The blog is now running on a static site generator — faster, cheaper, and more secure than WordPress. The <a href="/en/tools/html-to-markdown">HTML to Markdown converter</a> handled the bulk of the work. You handled the edge cases. The migration took a week instead of a month.</p>`
  },
  {
    slug: "life-hacks-remote-workers-home-office-productivity",
    title: "Life Hacks for Remote Workers Home Office Productivity Desk Setup Tips and the Psychology of Working Where You Live",
    description: "Your bed is 10 feet from your desk. The refrigerator is 20 feet. The boundary between work and life has collapsed. Here are the life hacks that actually help remote workers stay productive and sane.",
    date: "2026-07-21",
    category: "Reference",
    tags: ["life hacks", "remote work", "home office", "productivity", "work-life balance"],
    relatedTools: ["life-hacks", "stopwatch-and-timer", "fullscreen-text"],
    content: `<p>You roll out of bed at 8:55 AM. You walk 10 feet to your desk. You are at work by 9:00 AM. You have not changed out of your pajamas. You have not seen the sun. You have not spoken to another human being. You work until 6:30 PM — because there is no commute to signal the end of the workday. You close your laptop. You are still at the same desk. You are now "home." But you never left "work." The boundary between work and life has collapsed. The bed is 10 feet away. The refrigerator is 20 feet. The world outside is... somewhere. You have not been out there in three days.</p>

<p>Remote work promised freedom. For many people, it delivered <strong>boundary collapse</strong>. The physical separation between work and life — the commute, the office, the change of environment — was doing more psychological work than we realized. Here are the life hacks that actually help remote workers rebuild the boundaries that remote work dissolved.</p>

<h2>Hack #1: The Fake Commute</h2>

<p>Before you start work, leave your home. Walk around the block — 10 minutes. Do not look at your phone. Do not check email. Just walk. This is your "commute." It signals to your brain: "We are transitioning from home mode to work mode." At the end of the workday, do the same walk. This is your "commute home." It signals: "We are transitioning from work mode to home mode." The walk is the boundary. The walk is the commute. The walk is the psychological separation that your home office cannot provide. Fifteen minutes of walking per day. Two transitions. One boundary. The fake commute is the most effective remote work life hack ever invented — because it replaces the one thing remote work took away: the physical separation between work and life.</p>

<h2>Hack #2: The Dedicated Work Space</h2>

<p>Do not work in your bedroom. Do not work on your couch. Do not work at the kitchen table. Have a dedicated workspace — even if it is a corner of a room. The dedicated space signals: "This is where work happens. Everywhere else is where life happens." When you are at the desk, you are working. When you are not at the desk, you are not working. The desk is the boundary. The desk is small. The psychological effect is large.</p>

<h2>Hack #3: The Hard Stop</h2>

<p>Set a hard stop time. When the time arrives, close your laptop. Do not "just finish this one thing." The hard stop is the boundary between work and life. Without a hard stop, work expands to fill all available time. The hard stop is the fence. The work is the pasture. Without the fence, the pasture is infinite. Set the fence. Close the laptop. The <a href="/en/tools/stopwatch-and-timer">timer</a> enforces the hard stop. The alarm is the boundary. The boundary is the sanity.</p>

<h2>Hack #4: The Social Lifeline</h2>

<p>Remote work is socially isolating. You do not see colleagues in the hallway. You do not have lunch with coworkers. You do not have casual conversations at the coffee machine. The isolation accumulates. The fix: schedule at least one social interaction per day. A phone call. A video chat. A coffee with a friend. A co-working session. The social interaction is not a distraction from work. It is a <strong>requirement</strong> for sustainable remote work. Humans are social animals. Remote work removes the social environment. The social lifeline rebuilds it — one deliberate interaction at a time.</p>

<p>Browse more life hacks at <a href="/en/tools/life-hacks">100 life hacks</a> — the remote work section has 20 more tips for surviving and thriving in the home office.</p>`
  },
  {
    slug: "barcode-generator-vs-md5-hash-product-id-vs-integrity",
    title: "Barcode Generator vs MD5 Hash Product Identification vs Data Integrity — Two Encoding Tools That Serve Completely Different Purposes",
    description: "A barcode identifies a product for a scanner. An MD5 hash verifies a file hasn't been corrupted. Both encode data. Both produce strings. But the purposes, algorithms, and use cases are unrelated.",
    date: "2026-07-21",
    category: "Developer",
    tags: ["barcode generator", "MD5", "hash", "product identification", "data integrity"],
    relatedTools: ["barcode-generator", "md5-generator", "hash-generator"],
    content: `<p>You scan a product at the grocery store. The barcode — a series of black and white lines — encodes a 12-digit number. The scanner reads the lines. The register looks up the price. The transaction is complete. The barcode is a <strong>product identifier</strong>. It answers: "What product is this?"</p>

<p>Now you download a software installer. The download page lists an MD5 hash: <code>d41d8cd98f00b204e9800998ecf8427e</code>. You run the installer through an <a href="/en/tools/md5-generator">MD5 generator</a>. The hash matches. The file is verified — it has not been corrupted or tampered with. The MD5 hash is a <strong>data integrity check</strong>. It answers: "Is this file exactly what it is supposed to be?"</p>

<p>Both tools encode data into strings. Both produce outputs that look like gibberish. But the purposes, algorithms, and use cases are completely different. Here is the difference.</p>

<h2>Barcode Generator: Encoding for Scanning</h2>

<p>A <a href="/en/tools/barcode-generator">barcode generator</a> converts a number (like a UPC product code) into a pattern of black and white lines that a laser scanner can read. The pattern is <strong>decodable</strong> — the scanner reads the pattern and recovers the original number. The encoding is one-to-one — each number produces a specific, unique barcode pattern. The barcode is designed to be read by a specific device (a laser scanner) in a specific context (retail checkout, inventory management, shipping).</p>

<p>Use barcode generator for: product identification, retail labeling, inventory tracking, and any context where a physical object needs to be identified by a scanner.</p>

<h2>MD5 Hash: Encoding for Verification</h2>

<p>An <a href="/en/tools/md5-generator">MD5 hash generator</a> converts any data (a file, a string, a password) into a 32-character hexadecimal string. The hash is <strong>non-reversible</strong> — you cannot recover the original data from the hash. The encoding is many-to-one — many different inputs can produce the same hash (though this is extremely unlikely for non-malicious uses). The hash is designed to verify that data has not changed — if the hash of the downloaded file matches the published hash, the file is intact.</p>

<p>Use MD5 hash for: file integrity verification, checksums, and non-security data deduplication. Do NOT use MD5 for security purposes — it is cryptographically broken for collision resistance. Use SHA-256 for security.</p>

<h2>Why Confusing Them Produces Nonsense</h2>

<p>If you try to scan an MD5 hash with a barcode scanner: the scanner reads the pattern, but the hash is 32 characters — too long for a standard barcode format, and the scanner does not know what to do with a hexadecimal string. If you try to verify a product with an MD5 hash: the hash of the product's barcode number is a 32-character string. It tells you nothing about the product. The hash verifies the data. The barcode identifies the product. Different tools. Different purposes.</p>

<p>Use <a href="/en/tools/barcode-generator">barcode generator</a> for identification and <a href="/en/tools/md5-generator">MD5 hash</a> for verification. Product identification and data integrity. Different encoding. Different purposes.</p>`
  },
  {
    slug: "base64-to-image-vs-image-to-base64-round-trip",
    title: "Base64 to Image vs Image to Base64 The Complete Image Encoding Round Trip — What Gets Preserved and What Gets Lost",
    description: "You encode an image to Base64 for transmission, then decode it back to an image. The round trip is lossless for the image data — but the file size grows by 33%. Here's what happens at each step.",
    date: "2026-07-21",
    category: "Developer",
    tags: ["Base64 to image", "image to Base64", "encoding", "decoding", "round trip"],
    relatedTools: ["base64-to-image", "image-to-base64", "base64-converter"],
    content: `<p>You have a 100KB PNG image. You encode it to Base64 with an <a href="/en/tools/image-to-base64">image to Base64</a> encoder. The output is a 133KB text string — 33% larger. You transmit the string through a JSON API. The recipient decodes it with a <a href="/en/tools/base64-to-image">Base64 to image</a> decoder. The output is a 100KB PNG image — identical to the original. The round trip is <strong>lossless</strong> for the image data. The 33% overhead is the cost of making binary data text-safe. The round trip works. But the overhead is permanent.</p>

<p>Here is exactly what happens at each step of the image encoding round trip — and when the round trip is NOT lossless.</p>

<h2>Step 1: Image → Base64 (Encoding)</h2>

<p>The encoding process: read the binary image file (PNG, JPEG, WebP, etc.), convert every 3 bytes (24 bits) of binary data into 4 Base64 characters (4 × 6 bits = 24 bits), and prepend the data URI prefix if needed: <code>data:image/png;base64,</code> followed by the encoded string. The output is 33% larger than the input. Every 3 bytes of the original image become 4 characters of Base64 text. The overhead is deterministic — you can calculate it exactly: encoded size = original size × 4/3, rounded up to the nearest multiple of 4.</p>

<p>The encoded string is <strong>text-safe</strong>. It can be transmitted through: JSON (as a string value), HTML (as a data URI), email (as an embedded image), and any text-based protocol (XML, YAML, CSV). The Base64 string is the image, expressed in a format that any text system can handle.</p>

<h2>Step 2: Base64 → Image (Decoding)</h2>

<p>The decoding process: remove the data URI prefix if present, convert every 4 Base64 characters back to 3 bytes of binary data, handle padding (= characters at the end of the string), and write the binary data to an image file. The output is identical to the original image — <strong>if the Base64 string was encoded correctly and transmitted without corruption</strong>. The image data is preserved exactly. PNG is still PNG. JPEG is still JPEG. The compression, the metadata, the color profile — all preserved.</p>

<h2>When the Round Trip Is NOT Lossless</h2>

<p>The round trip is lossless for the image data. But it is NOT lossless for: the file name (the original file name is not part of the Base64 encoding — it is lost), the file metadata (creation date, modification date, and other file system metadata are not encoded), and the image format (if the encoder strips the data URI prefix, the decoder needs to know the image format — PNG, JPEG, WebP — to write the correct file extension). The image pixels are preserved. The file metadata is lost. The round trip is lossless for the content. It is lossy for the context.</p>

<h2>When to Use the Round Trip (and When Not To)</h2>

<p>Use the round trip when: you need to transmit an image through a text-only channel, you need to embed an image in HTML or JSON, or you need to store an image in a text database. Do not use the round trip when: the image is large (the 33% overhead is significant), the image will be transmitted as binary anyway (HTTP file downloads, FTP), or performance is critical (encoding and decoding take CPU time).</p>

<p>Use <a href="/en/tools/image-to-base64">image to Base64</a> to encode and <a href="/en/tools/base64-to-image">Base64 to image</a> to decode. The round trip is lossless. The overhead is 33%. The convenience is the trade-off.</p>`
  },
  {
    slug: "ip-lookup-history-arpanet-to-modern-geolocation",
    title: "The History of IP Geolocation From ARPANET to Modern IP Lookup — How We Learned to Map the Internet to the Physical World",
    description: "In 1969, ARPANET had 4 nodes — all in the US. Today, there are billions of IP addresses distributed across every country. IP lookup tells you where any of them is. Here's the 50-year history.",
    date: "2026-07-21",
    category: "Reference",
    tags: ["IP lookup", "geolocation", "history", "ARPANET", "internet"],
    relatedTools: ["ip-lookup", "world-map", "ip-lookup"],
    content: `<p>In 1969, the ARPANET — the predecessor of the internet — connected four computers: UCLA, Stanford Research Institute, UC Santa Barbara, and the University of Utah. Every computer on the network had an IP address. You could look at the address and know exactly where the computer was — because there were only four of them, and they were all in the western United States. IP geolocation was trivial. The map was the network. The network was the map.</p>

<p>Today, there are billions of IP addresses distributed across every country on Earth. An <a href="/en/tools/ip-lookup">IP lookup</a> tool can tell you the approximate location of any of them — country, region, city, ISP. The tool is instant. The infrastructure behind it is the result of 50 years of internet history. Here is how IP geolocation evolved from a trivial lookup of four computers to a global system that maps billions of addresses to physical locations.</p>

<h2>1969-1990: The Era of Manual Mapping</h2>

<p>Hosts.txt — a single text file maintained by the Stanford Research Institute — mapped every hostname to its IP address. The file was manually updated. When a new computer joined the network, someone at SRI added its entry to the file. The file was distributed to every computer on the network. Every computer knew the address of every other computer. The system worked because the network was small — hundreds of computers, not billions. The hosts.txt file was the first IP geolocation database. It was maintained by hand. It was the size of a phone book — for a very small town.</p>

<p>The Domain Name System (DNS), introduced in 1983, replaced hosts.txt with a distributed, hierarchical system. DNS did not provide geolocation. It provided hostname-to-IP mapping. The geolocation problem — "where is this IP address physically located?" — was not yet a problem. The network was still small enough that you could roughly know where each IP was based on which institution owned it.</p>

<h2>1990-2010: The Era of Commercial Geolocation</h2>

<p>The commercialization of the internet in the 1990s created the geolocation industry. Companies like MaxMind, IP2Location, and IPinfo emerged to answer the question: "Where is this IP address?" They built databases by: querying WHOIS records (which organization owns this IP block? Where is the organization located?), analyzing network latency (how long does it take for a signal to reach this IP? The latency correlates with physical distance), and purchasing data from ISPs (which customer is using this IP address at this time?).</p>

<p>The databases were approximate. An IP address might be mapped to the ISP's headquarters, not the user's actual location. A mobile IP might be mapped to a city hundreds of miles away. The accuracy was: country level (95-99% accurate), region/state level (80-90% accurate), and city level (60-80% accurate). The IP lookup was a <strong>clue</strong>, not a <strong>proof</strong> of location. The accuracy was good enough for content localization (show the right language and currency). It was not good enough for law enforcement (do not send the police to the ISP's headquarters).</p>

<h2>2010-Present: The Era of Mobile and Privacy</h2>

<p>Smartphones, VPNs, and privacy regulations changed IP geolocation. Mobile IPs are especially unreliable — a phone on a cellular network might show an IP registered to a city hundreds of miles away. VPNs route traffic through servers in different countries — the IP location shows the VPN server, not the user. Privacy regulations (GDPR, CCPA) limit the collection and use of IP geolocation data. The accuracy of IP geolocation has <strong>decreased</strong> in the mobile era. The IP address is still a useful signal. It is no longer a reliable indicator of physical location.</p>

<p>The <a href="/en/tools/ip-lookup">IP lookup tool</a> gives you the approximate location of any IP address — country, region, city, ISP. The tool is instant. The accuracy is approximate. The IP address is a clue about location, not a proof of location. The 50-year journey from four computers in the western US to billions of IP addresses worldwide ended where it began: the IP address tells you where the computer is connected to the network. It does not tell you where the person using the computer is physically located. The distinction is the difference between the network and the world. The IP lookup maps the network. The world is still inferred.</p>`
  },
];

export function getBlogPosts(): BlogPost[]"""

content = content.replace(old, new_blogs)

with open(BLOG_FILE, "w", encoding="utf-8") as f:
    f.write(content)

print("Free station: 242->done.")