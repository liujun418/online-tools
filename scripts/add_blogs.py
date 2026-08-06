"""Add 6 blogs to free station (325→331) — August 6, 2026"""
import os, sys

BLOG_FILE = r"C:\Users\jun\online-tools\src\lib\blog.ts"

with open(BLOG_FILE, "r", encoding="utf-8") as f:
    content = f.read()

old = '\n];\n\nexport function getBlogPosts(): BlogPost[]'

new_blogs = r"""
  {
    slug: "word-counter-academic-writing-word-count-requirements",
    title: "Word Counter for Academic Writing How to Meet Word Count Requirements Without Sacrificing Quality",
    description: "Your professor requires 2,500 words. You have 1,800. You need to expand without adding fluff. A word counter helps you track every paragraph. Here's the academic writing word count strategy.",
    date: "2026-08-06",
    category: "Text Tools",
    tags: ["word counter", "academic writing", "word count", "essay", "writing tips"],
    relatedTools: ["word-counter", "text-polish", "case-converter"],
    content: `<p>Your professor requires 2,500 words. You have written 1,800. You need 700 more words. The deadline is tomorrow. The temptation: add fluff, repeat yourself, use long sentences. The better approach: use a <a href="/en/tools/word-counter">word counter</a> to track your progress and identify underdeveloped sections. Here is the academic writing word count strategy.</p>

<h2>How to Meet Word Count Without Sacrificing Quality</h2>

<p><strong>Track paragraph by paragraph.</strong> Do not check the total word count at the end. Check each paragraph as you write. A <a href="/en/tools/word-counter">word counter</a> gives you instant feedback. If a paragraph is 50 words and the idea deserves 200 words, expand it. If a paragraph is 300 words and the idea is simple, trim it. The paragraph-level tracking keeps the essay balanced. <strong>Identify underdeveloped arguments.</strong> The word counter reveals which sections are thin. A 2,500-word essay typically has 5-7 paragraphs of 300-500 words each. If one paragraph is 100 words, the argument is underdeveloped. Add evidence, examples, or counterarguments. <strong>Use the text polisher for expansion.</strong> The <a href="/en/tools/text-polish">text polisher</a> can help you rephrase thin sentences into more substantive ones. Write a simple sentence. Run it through the polisher. The result is a more detailed version. <strong>Check character count for headlines.</strong> Some academic formats have headline character limits. The <a href="/en/tools/case-converter">case converter</a> helps with title case formatting. The word counter handles the body. The combination keeps the essay on track. The <a href="/en/tools/word-counter">word counter</a> is the tracking tool. The writer is the quality engine. The strategy is: write, check, expand, check again.</p>`
  },
  {
    slug: "password-generator-online-security-strong-memorable-passwords",
    title: "Password Generator for Online Security How to Create Strong, Memorable Passwords for Every Account Without Reusing the Same One",
    description: "You have 100 online accounts. You use the same password for 80 of them. One breach compromises everything. A password generator creates unique passwords for every account. Here's the online security guide.",
    date: "2026-08-06",
    category: "Developer Tools",
    tags: ["password generator", "online security", "strong passwords", "account security", "password manager"],
    relatedTools: ["password-generator", "uuid-generator", "hash-generator"],
    content: `<p>You have 100 online accounts. You use the same password for 80 of them. One service gets breached. The hacker has your email and password. They try it on your bank account. Your bank account is compromised. The problem is not the breach. The problem is password reuse. A <a href="/en/tools/password-generator">password generator</a> creates unique, strong passwords for every account. Here is the online security strategy.</p>

<h2>How to Create and Manage Strong Passwords</h2>

<p><strong>Use a password generator.</strong> A <a href="/en/tools/password-generator">password generator</a> creates random strings of characters. The password includes uppercase letters, lowercase letters, numbers, and symbols. The password is 16-20 characters long. The password is impossible to guess. The password is unique to each account. The generator handles the complexity. <strong>Do not memorize passwords.</strong> You cannot remember 100 unique 16-character passwords. Do not try. Use a password manager. The password manager stores all your passwords. You only need to remember one master password. The <a href="/en/tools/password-generator">password generator</a> creates the passwords. The password manager stores them. <strong>Use a UUID for account IDs.</strong> The <a href="/en/tools/uuid-generator">UUID generator</a> creates unique identifiers for account references. The <a href="/en/tools/hash-generator">hash generator</a> can verify password integrity. The combination is a complete security toolkit. <strong>Change passwords immediately after a breach.</strong> When a service announces a breach, change the password immediately. Use the password generator to create a new one. The old password is compromised. The new password is safe. The <a href="/en/tools/password-generator">password generator</a> is the creation tool. The password manager is the storage tool. The combination is: one strong password per account, all stored securely, all unique.</p>`
  },
  {
    slug: "calorie-calculator-meal-planning-weight-management",
    title: "Calorie Calculator for Meal Planning How to Track Your Daily Caloric Intake for Weight Management Without Obsessive Counting",
    description: "You want to lose weight. You need to eat fewer calories than you burn. But how many calories do you burn? A calorie calculator estimates your daily needs. Here's the meal planning guide for weight management.",
    date: "2026-08-06",
    category: "Calculator",
    tags: ["calorie calculator", "meal planning", "weight management", "calories", "nutrition"],
    relatedTools: ["calorie-calculator", "bmi-calculator", "percentage-calculator"],
    content: `<p>You want to lose weight. You know the principle: eat fewer calories than you burn. But how many calories do you burn? The answer depends on your age, gender, weight, height, and activity level. A <a href="/en/tools/calorie-calculator">calorie calculator</a> estimates your Total Daily Energy Expenditure (TDEE). Here is the meal planning guide for weight management.</p>

<h2>How to Use a Calorie Calculator for Meal Planning</h2>

<p><strong>Calculate your baseline.</strong> Use the <a href="/en/tools/calorie-calculator">calorie calculator</a> to estimate your TDEE. A 30-year-old woman who is 5'5" and 150 pounds with moderate exercise burns approximately 2,100 calories per day. A 35-year-old man who is 5'10" and 180 pounds with light exercise burns approximately 2,400 calories per day. The calculator gives you the starting point. <strong>Set your goal.</strong> Weight loss: eat 300-500 calories below your TDEE. Weight gain: eat 300-500 calories above your TDEE. Weight maintenance: eat at your TDEE. The percentage is simple math. The <a href="/en/tools/percentage-calculator">percentage calculator</a> helps you calculate the exact numbers. <strong>Track for one week.</strong> Do not track forever. Track for one week to understand your eating patterns. Use a food diary app. Write down everything you eat. Compare the total to your TDEE. The <a href="/en/tools/calorie-calculator">calorie calculator</a> is the planning tool. The food diary is the tracking tool. <strong>Check your BMI.</strong> Use the <a href="/en/tools/bmi-calculator">BMI calculator</a> to track your progress over time. The BMI is a screening tool. The calorie calculator is the planning tool. The combination is a complete weight management system. The <a href="/en/tools/calorie-calculator">calorie calculator</a> gives you the numbers. The discipline gives you the results.</p>`
  },
  {
    slug: "qr-code-generator-vs-qr-code-scanner-create-vs-read",
    title: "QR Code Generator vs QR Code Scanner Create vs Read — Two QR Code Tools for Different Moments in Digital Communication",
    description: "QR code generator creates codes from URLs. QR code scanner reads codes from images. Both are QR code tools. But one is for sending. One is for receiving.",
    date: "2026-08-06",
    category: "Developer Tools",
    tags: ["QR code generator", "QR code scanner", "QR code", "comparison", "digital communication"],
    relatedTools: ["qr-code-generator", "qr-code-scanner", "url-encoder"],
    content: `<p>You are a restaurant owner. You want customers to see your menu. You create a QR code that links to your menu page. You put the QR code on the table. Customers scan the QR code with their phones. They see the menu. The transaction is complete. The <a href="/en/tools/qr-code-generator">QR code generator</a> created the code. The customer's phone scanned it. Two different tools for two different moments.</p>

<p>The <a href="/en/tools/qr-code-generator">QR code generator</a> is a creation tool. You input a URL. The tool generates a QR code image. You download the image. You print it on a menu, a business card, a poster, or a product label. The QR code is a bridge. It connects the physical world to the digital world. The generator is the bridge builder.</p>

<p>The <a href="/en/tools/qr-code-scanner">QR code scanner</a> is a reading tool. You upload an image containing a QR code. The tool decodes the QR code. It shows you the URL or text embedded in the code. The scanner is useful when you receive a QR code in an image file and cannot scan it with your phone. You upload the image. The scanner reads the code. You get the URL. The scanner is the bridge crosser.</p>

<p>Both tools are essential. The <a href="/en/tools/qr-code-generator">QR code generator</a> creates the bridge. The <a href="/en/tools/qr-code-scanner">QR code scanner</a> crosses it. The <a href="/en/tools/url-encoder">URL encoder</a> helps prepare URLs for QR code embedding. The generator is for content creators. The scanner is for content consumers. Different tools. Different moments. Both QR code tools.</p>`
  },
  {
    slug: "json-formatter-vs-json-to-csv-format-vs-transform",
    title: "JSON Formatter vs JSON to CSV Format vs Transform — Two JSON Tools for Different Stages of Data Processing",
    description: "JSON formatter makes messy JSON readable. JSON to CSV converts JSON data into spreadsheet format. Both are JSON tools. But one is for debugging. One is for analysis.",
    date: "2026-08-06",
    category: "Developer Tools",
    tags: ["JSON formatter", "JSON to CSV", "JSON", "data processing", "comparison"],
    relatedTools: ["json-formatter", "json-to-csv", "csv-to-json"],
    content: `<p>You receive a JSON file from an API. The JSON is minified — no line breaks, no indentation, just a single line of 10,000 characters. You cannot read it. You cannot debug it. You use a <a href="/en/tools/json-formatter">JSON formatter</a>. The formatter adds indentation, line breaks, and color coding. The JSON is now readable. You can see the structure. You can find the data you need. The JSON formatter is a debugging tool. It makes the invisible visible.</p>

<p>Now you have the formatted JSON. You need to analyze the data in a spreadsheet. JSON is not a spreadsheet format. CSV is. You use a <a href="/en/tools/json-to-csv">JSON to CSV converter</a>. The converter takes the JSON array and transforms it into a CSV file. Each object becomes a row. Each property becomes a column. You open the CSV in Excel. You can sort, filter, and chart the data. The JSON to CSV converter is a transformation tool. It changes the data format.</p>

<p>Both tools are JSON tools. But they serve different stages. The <a href="/en/tools/json-formatter">JSON formatter</a> is for the <strong>inspection</strong> stage. You need to understand what the data contains. The <a href="/en/tools/json-to-csv">JSON to CSV converter</a> is for the <strong>analysis</strong> stage. You need to work with the data in a spreadsheet. The <a href="/en/tools/csv-to-json">CSV to JSON converter</a> handles the reverse transformation. The JSON formatter is a lens. The JSON to CSV converter is a bridge. One makes JSON readable. One makes JSON analyzable.</p>`
  },
  {
    slug: "temperature-converter-science-fahrenheit-celsius-kelvin",
    title: "The Science of Temperature Conversion How Fahrenheit, Celsius, and Kelvin Scales Work and Why We Need Three Different Systems",
    description: "Water freezes at 32°F, 0°C, or 273.15K. Three different numbers for the same physical phenomenon. Here's the science behind temperature conversion — and why three scales exist.",
    date: "2026-08-06",
    category: "Calculator",
    tags: ["temperature converter", "Fahrenheit", "Celsius", "Kelvin", "science"],
    relatedTools: ["temperature-converter", "unit-converter", "speed-converter"],
    content: `<p>Water freezes at 32°F, 0°C, or 273.15K. Three different numbers for the same physical phenomenon. Water boils at 212°F, 100°C, or 373.15K. Again, three different numbers. A <a href="/en/tools/temperature-converter">temperature converter</a> handles the conversion instantly. But understanding why three scales exist helps you choose the right one. Here is the science behind temperature conversion.</p>

<h2>Why Three Temperature Scales?</h2>

<p><strong>Fahrenheit (Daniel Fahrenheit, 1724).</strong> Fahrenheit based his scale on three fixed points: the temperature of a brine solution (0°F), the freezing point of water (32°F), and body temperature (96°F, later adjusted to 98.6°F). The scale has 180 degrees between freezing and boiling. This is useful for everyday weather — 0°F is very cold, 100°F is very hot. The <a href="/en/tools/temperature-converter">temperature converter</a> handles Fahrenheit conversions instantly.</p>

<p><strong>Celsius (Anders Celsius, 1742).</strong> Celsius based his scale on water: 0°C is the freezing point, 100°C is the boiling point. The scale has 100 degrees between freezing and boiling. This is useful for scientific work with water. The scale is intuitive: 0 is cold, 100 is hot. Most of the world uses Celsius. The <a href="/en/tools/temperature-converter">temperature converter</a> bridges the gap between Celsius and Fahrenheit.</p>

<p><strong>Kelvin (William Thomson, 1848).</strong> Kelvin is an absolute scale. 0K is absolute zero — the point where all molecular motion stops. There is no negative Kelvin. The scale uses the same degree size as Celsius. 0K = -273.15°C. Kelvin is essential for physics because it describes the actual energy of a system. The <a href="/en/tools/temperature-converter">temperature converter</a> handles Kelvin conversions. The <a href="/en/tools/unit-converter">unit converter</a> handles other measurement conversions. The <a href="/en/tools/speed-converter">speed converter</a> handles velocity conversions. The <a href="/en/tools/temperature-converter">temperature converter</a> is the tool. The science is the understanding. The combination is: three scales, one tool, instant conversion.</p>`
  },
];

export function getBlogPosts(): BlogPost[]"""

content = content.replace(old, new_blogs)

with open(BLOG_FILE, "w", encoding="utf-8") as f:
    f.write(content)

print("Free station: 325->331 done.")