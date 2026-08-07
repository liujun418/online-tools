"""Add 6 blogs to free station (331→337) — August 7, 2026"""
import os, sys

BLOG_FILE = r"C:\Users\jun\online-tools\src\lib\blog.ts"

with open(BLOG_FILE, "r", encoding="utf-8") as f:
    content = f.read()

old = '\n];\n\nexport function getBlogPosts(): BlogPost[]'

new_blogs = r"""
  {
    slug: "base64-converter-developer-api-integration",
    title: "Base64 Converter for Developers How to Encode and Decode Data for API Integration Without Copy-Paste Errors",
    description: "An API requires an authorization header encoded in base64. You open a terminal, run a command, and get a long string. A base64 converter does it instantly in the browser. Here's the developer's base64 guide.",
    date: "2026-08-07",
    category: "Text Tools",
    tags: ["base64 converter", "base64", "API", "developer", "encode decode"],
    relatedTools: ["base64-converter", "json-formatter", "url-encoder"],
    content: `<p>You are integrating an API. The API requires an <code>Authorization</code> header: <code>Basic base64encode(username:password)</code>. You need to encode <code>admin:secret123</code> into base64. You could open a terminal and run <code>echo -n 'admin:secret123' | base64</code>. But you are on a Windows machine without base64 built in. You use a <a href="/en/tools/base64-converter">base64 converter</a> in the browser. You paste the text. The tool encodes it instantly. Here is the developer's base64 guide.</p>

<h2>How to Use a Base64 Converter in Development</h2>

<p><strong>Understand the use cases.</strong> Base64 appears everywhere in development: HTTP Basic authentication headers, email attachments, storing binary data in JSON, and embedding images in HTML. A <a href="/en/tools/base64-converter">base64 converter</a> handles all of these. The encode direction turns text or binary into a safe ASCII string. The decode direction turns the base64 string back into the original data. <strong>Encode for API authentication.</strong> Many APIs use Basic Auth. The header is <code>Basic</code> followed by the base64 encoding of <code>username:password</code>. Use the <a href="/en/tools/base64-converter">base64 converter</a> to encode the credential pair. The output is the header value. Copy it into your API client. <strong>Embed images in email or JSON.</strong> You can embed a small image as a data URI: <code>data:image/png;base64,AAAA...</code>. Upload the image or paste the binary, and the <a href="/en/tools/base64-converter">base64 converter</a> produces the data URI. The <a href="/en/tools/image-to-base64">image to base64</a> tool handles image inputs directly. <strong>Decode incoming data.</strong> When an API returns base64-encoded content, paste it into the converter and decode. The <a href="/en/tools/json-formatter">JSON formatter</a> helps inspect the surrounding JSON payload. The <a href="/en/tools/url-encoder">URL encoder</a> handles URL-safe variants. The <a href="/en/tools/base64-converter">base64 converter</a> is the workhorse. The developer is the engineer. The combination makes API integration faster.</p>`
  },
  {
    slug: "crypto-price-checker-investor-trend-tracking",
    title: "Crypto Price Checker for Investors How to Track Cryptocurrency Prices and Spot Trends Without Watching Charts All Day",
    description: "You own Bitcoin and Ethereum. You check prices five times a day. You feel anxious every time. A crypto price checker gives you the data when you need it. Here's the investor's price tracking strategy.",
    date: "2026-08-07",
    category: "Reference",
    tags: ["crypto price", "cryptocurrency", "investing", "Bitcoin", "Ethereum"],
    relatedTools: ["crypto-price", "income-tax-calculator", "roi-calculator"],
    content: `<p>You own Bitcoin and Ethereum. You check prices five times a day. Every dip makes you anxious. Every spike makes you excited. The emotional rollercoaster is exhausting. The data is the same whether you check once or five times. A <a href="/en/tools/crypto-price">crypto price checker</a> gives you the current price when you need it — without the constant checking. Here is the investor's price tracking strategy.</p>

<h2>How to Track Crypto Prices Effectively</h2>

<p><strong>Check once, not constantly.</strong> The price changes whether you watch or not. Checking five times a day does not change the outcome. It changes your stress level. Use the <a href="/en/tools/crypto-price">crypto price checker</a> once a day — or once a week — and make decisions from the data, not the emotion. <strong>Focus on the trend, not the day.</strong> A 3% daily dip is noise. A 30% monthly decline is a trend. The <a href="/en/tools/crypto-price">crypto price checker</a> shows the current price. Combine it with your own tracking to see the longer trend. <strong>Set a strategy before the emotion.</strong> Decide in advance: at what price do you buy more? At what price do you take profit? Write it down. When the price hits your target, execute. The <a href="/en/tools/roi-calculator">ROI calculator</a> helps you estimate returns on your position. <strong>Consider the tax impact.</strong> Crypto gains are taxable in many jurisdictions. Use the <a href="/en/tools/income-tax-calculator">income tax calculator</a> to estimate the tax on your gains before you sell. The <a href="/en/tools/crypto-price">crypto price checker</a> is the data tool. The <a href="/en/tools/roi-calculator">ROI calculator</a> is the planning tool. The <a href="/en/tools/income-tax-calculator">tax calculator</a> is the compliance tool. The investor is the decision-maker. The combination keeps emotion out of the process.</p>`
  },
  {
    slug: "md5-generator-file-integrity-checksum-verification",
    title: "MD5 Generator for Data Verification How to Verify File Integrity with Checksums After Downloads and Transfers",
    description: "You downloaded a software installer. The download could be corrupted or tampered with. The MD5 checksum tells you. Here's how to verify file integrity with an MD5 generator.",
    date: "2026-08-07",
    category: "Developer Tools",
    tags: ["MD5 generator", "checksum", "file integrity", "verification", "hash"],
    relatedTools: ["md5-generator", "hash-generator", "base64-converter"],
    content: `<p>You download a software installer from a mirror site. The file is 500MB. The download is slow. It finishes. But is the file the same as the official release? The mirror could have served a corrupted file. A malicious actor could have modified it. The MD5 checksum is the answer. The official site publishes the MD5 checksum of the file. You compute the MD5 of your downloaded file. If they match, the file is intact. Here is how to verify file integrity.</p>

<h2>How to Verify File Integrity with MD5</h2>

<p><strong>Understand the checksum.</strong> An MD5 checksum is a 32-character hexadecimal string computed from the file's content. Any change to the file — one bit — changes the checksum completely. It is a fingerprint of the file. The <a href="/en/tools/md5-generator">MD5 generator</a> computes the fingerprint from your input. <strong>Get the official checksum.</strong> Most software downloads publish the MD5 checksum on the official page. Copy it. <strong>Compute your file's checksum.</strong> Use the <a href="/en/tools/md5-generator">MD5 generator</a> on the file you downloaded. The tool computes the checksum of your file. Compare it to the official checksum. Match means the file is intact. Mismatch means the download is corrupted or tampered with — download again. <strong>Use it for text too.</strong> The <a href="/en/tools/md5-generator">MD5 generator</a> works on text as well. Hash a password before storing it (though stronger hashes are recommended for passwords). The <a href="/en/tools/hash-generator">hash generator</a> offers stronger algorithms. The <a href="/en/tools/base64-converter">base64 converter</a> handles encoding tasks. The <a href="/en/tools/md5-generator">MD5 generator</a> is the verification tool. The comparison is the verification step. The combination keeps your downloads safe.</p>`
  },
  {
    slug: "mortgage-calculator-vs-loan-calculator-borrowing-decisions",
    title: "Mortgage Calculator vs Loan Calculator Home Loan vs General Loan — Two Borrowing Calculators for Different Financial Decisions",
    description: "Mortgage calculator models a 30-year home loan with property taxes. Loan calculator models a 3-year car loan with simple interest. Both are borrowing calculators. But one is for homes. One is for everything else.",
    date: "2026-08-07",
    category: "Calculator",
    tags: ["mortgage calculator", "loan calculator", "comparison", "home loan", "borrowing"],
    relatedTools: ["mortgage-calculator", "loan-calculator", "compound-interest"],
    content: `<p>You are buying a home. The price is $350,000. You have a 20% down payment. You need a $280,000 mortgage at 6.5% for 30 years. You use a <a href="/en/tools/mortgage-calculator">mortgage calculator</a>. The calculator shows: $1,770 monthly payment (principal and interest), plus property taxes and insurance. The total monthly payment is about $2,200. The mortgage calculator is a specialized tool for home loans. It accounts for the long term, property taxes, and insurance.</p>

<p>Now you are buying a car. The price is $25,000. You have a $5,000 trade-in. You finance $20,000 at 7% for 5 years. You use a <a href="/en/tools/loan-calculator">loan calculator</a>. The calculator shows: $396 monthly payment, total interest of $3,760. The loan calculator is a general tool. It handles car loans, personal loans, and any installment loan. It models simple amortization without the property-specific extras.</p>

<p>Both are borrowing calculators. Both tell you the monthly payment and total cost. But the use cases differ. The <a href="/en/tools/mortgage-calculator">mortgage calculator</a> is for the biggest purchase of your life — a home. It includes property taxes, insurance, and long amortization. The <a href="/en/tools/loan-calculator">loan calculator</a> is for smaller, shorter loans. It is simpler and more flexible. The <a href="/en/tools/compound-interest">compound interest calculator</a> shows how interest grows over time. Different calculators for different purchases. Both essential for responsible borrowing.</p>`
  },
  {
    slug: "base-converter-vs-roman-numerals-number-systems",
    title: "Base Converter vs Roman Numerals Computer Numbers vs Ancient Numbers — Two Number System Tools for Different Eras",
    description: "Base converter handles binary, hex, and octal for developers. Roman numerals handles MMXXVI for history buffs. Both convert numbers. But one serves computers. One serves the past.",
    date: "2026-08-07",
    category: "Developer Tools",
    tags: ["base converter", "roman numerals", "number systems", "binary", "hexadecimal"],
    relatedTools: ["base-converter", "roman-numerals", "unix-timestamp"],
    content: `<p>A developer debugs a network packet. The protocol field is <code>0xFF</code> — hexadecimal. The developer needs to understand the binary value: 11111111. The <a href="/en/tools/base-converter">base converter</a> converts between binary, octal, decimal, and hexadecimal instantly. The developer enters <code>FF</code> in hex. The tool shows 255 in decimal and 11111111 in binary. The base converter is a computer tool. It works with the number systems computers use.</p>

<p>A student writes a history essay about the Roman Empire. The date is 2026. The student needs the Roman numeral: MMXXVI. The <a href="/en/tools/roman-numerals">roman numerals converter</a> converts 2026 to MMXXVI instantly. The tool also works in reverse — enter <code>MCMXCVIII</code> and get 1998. The roman numerals converter is a historical tool. It works with the number system the Romans used.</p>

<p>Both are number conversion tools. Both convert between different representations. But the use cases are worlds apart. The <a href="/en/tools/base-converter">base converter</a> serves developers — binary, hex, and octal are the languages of computers. The <a href="/en/tools/roman-numerals">roman numerals converter</a> serves historians and students — Roman numerals appear in movie credits, building dates, and book chapters. The <a href="/en/tools/unix-timestamp">unix timestamp converter</a> handles time in developer format. The <a href="/en/tools/base-converter">base converter</a> is for the machine age. The <a href="/en/tools/roman-numerals">roman numerals converter</a> is for the ancient world. Different eras. Different tools. Both number systems worth understanding.</p>`
  },
  {
    slug: "base64-to-image-science-binary-text-representation",
    title: "The Science of Base64 How Text Represents Binary Image Data and Why Every Image on the Web Works This Way",
    description: "Images are binary files. Text protocols can't carry binary directly. Base64 solves the problem by encoding binary as text. Here's how base64 to image conversion works — the invisible technology behind the web.",
    date: "2026-08-07",
    category: "Developer Tools",
    tags: ["base64", "image", "binary", "encoding", "data URI"],
    relatedTools: ["base64-to-image", "image-to-base64", "base64-converter"],
    content: `<p>Every image on the web is, at its core, a string of binary data — millions of 1s and 0s. Binary data cannot travel safely through text-based protocols. Email, JSON, and many APIs are text-based. If you embed raw binary in text, it breaks. This is the problem base64 solves. A <a href="/en/tools/base64-to-image">base64 to image</a> tool demonstrates the whole process. Here is the science behind it.</p>

<h2>How Base64 Encoding Works</h2>

<p><strong>The problem.</strong> Binary data uses all 256 byte values — including bytes that mean "end of message" or "control character" in text protocols. Embedding raw binary in text corrupts the data. The solution: represent the binary using only the 64 safe characters — A-Z, a-z, 0-9, +, and /. That is why it is called <strong>base64</strong> — 64 characters. <strong>The encoding.</strong> Base64 takes 3 bytes of binary (24 bits) and splits them into 4 groups of 6 bits. Each 6-bit group maps to one of the 64 characters. The result is a text string that safely represents the binary. The <a href="/en/tools/base64-to-image">base64 to image</a> tool shows the relationship: paste a base64 string, get the image back. <strong>The data URI.</strong> On the web, images are often embedded as data URIs: <code>data:image/png;base64,iVBORw0KG...</code>. The browser decodes the base64 and renders the image. No separate file request needed. The <a href="/en/tools/image-to-base64">image to base64</a> tool creates these data URIs from image files. <strong>The trade-off.</strong> Base64 is about 33% larger than the original binary — 4 characters for every 3 bytes. That is the price of safety. The <a href="/en/tools/base64-converter">base64 converter</a> handles the general encode/decode. The <a href="/en/tools/base64-to-image">base64 to image</a> tool is the visible proof. The science is elegant. The web runs on it.</p>`
  },
];

export function getBlogPosts(): BlogPost[]"""

content = content.replace(old, new_blogs)

with open(BLOG_FILE, "w", encoding="utf-8") as f:
    f.write(content)

print("Free station: 331->337 done.")