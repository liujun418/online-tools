export interface FAQItem {
  question: string;
  answer: string;
}

export interface Tool {
  id: string;
  name: string;
  description: string;
  category: "text" | "developer" | "calculator" | "converter";
  icon: string;
  path: string;
  seoTitle?: string;
  seoDescription?: string;
  seoKeywords?: string[];
  howToUse?: string[];
  faq?: FAQItem[];
}

export const tools: Tool[] = [
  // Text Tools
  {
    id: "word-counter",
    name: "Word Counter",
    description:
      "Count words, characters, sentences, and paragraphs in your text in real-time.",
    category: "text",
    icon: "📝",
    path: "/tools/word-counter",
    seoTitle: "Free Word Counter - Count Words, Characters & Sentences Online",
    seoDescription: "Count words, characters, sentences, and paragraphs in real-time. Free online word counter with reading time and speaking time estimates. Perfect for essays, blog posts, and social media. No signup required.",
    seoKeywords: [
      "word counter", "character counter", "word count online",
      "count words in text", "sentence counter", "paragraph counter",
      "reading time calculator", "free word counter tool",
      "how many words in my text", "online text counter",
      "character count with spaces", "word counter for essays"
    ],
    howToUse: [
      "Paste or type your text into the input field above.",
      "View your word count, character count, sentence count, and paragraph count instantly.",
      "Check the estimated reading time and speaking time for your content.",
      "Use the statistics to ensure your text meets word limits for essays, articles, or social media posts.",
      "Copy or export your text once you're satisfied with the count."
    ],
    faq: [
      { question: "How does this word counter work?", answer: "The word counter analyzes your text in real-time as you type or paste it. It counts words by detecting spaces between words, characters including or excluding spaces, sentences by identifying punctuation marks, and paragraphs by detecting line breaks. All processing happens instantly in your browser." },
      { question: "Does this word counter count spaces and punctuation?", answer: "Yes. The character count includes both spaces and punctuation. You can also see the character count without spaces, which is useful for platforms that have specific character limits." },
      { question: "Is my text data stored or sent anywhere?", answer: "No. All text processing happens locally in your browser. Your text is never sent to any server or stored anywhere. Your privacy is fully protected." },
      { question: "Can I use this word counter for academic essays?", answer: "Absolutely. This tool is perfect for academic writing. It provides accurate word counts that match what most word processors like Microsoft Word and Google Docs report. It's ideal for checking essay word limits, abstract lengths, and dissertation chapter counts." },
      { question: "What is the average reading speed this tool uses?", answer: "The reading time estimate is based on an average reading speed of 200-250 words per minute for English text. The speaking time estimate uses approximately 130 words per minute, which is the average speaking pace." }
    ]
  },
  {
    id: "case-converter",
    name: "Case Converter",
    description:
      "Convert text to uppercase, lowercase, title case, or sentence case instantly.",
    category: "text",
    icon: "🔤",
    path: "/tools/case-converter",
  },
  {
    id: "lorem-ipsum",
    name: "Lorem Ipsum Generator",
    description:
      "Generate placeholder text for your designs, mockups, and wireframes.",
    category: "text",
    icon: "📄",
    path: "/tools/lorem-ipsum",
  },
  {
    id: "text-to-slug",
    name: "Text to Slug",
    description:
      "Convert any text into a URL-friendly slug string for clean URLs.",
    category: "text",
    icon: "🔗",
    path: "/tools/text-to-slug",
  },
  {
    id: "text-diff",
    name: "Text Diff Checker",
    description:
      "Compare two texts and highlight the differences side by side.",
    category: "text",
    icon: "📋",
    path: "/tools/text-diff",
  },
  {
    id: "remove-duplicate-lines",
    name: "Remove Duplicate Lines",
    description:
      "Remove duplicate lines from text while preserving order. Clean up your lists instantly.",
    category: "text",
    icon: "🧹",
    path: "/tools/remove-duplicate-lines",
  },
  {
    id: "text-repeater",
    name: "Text Repeater",
    description:
      "Repeat any text or string a specified number of times instantly.",
    category: "text",
    icon: "🔁",
    path: "/tools/text-repeater",
  },
  // Developer Tools
  {
    id: "json-formatter",
    name: "JSON Formatter",
    description:
      "Format, minify, and validate JSON data with syntax highlighting.",
    category: "developer",
    icon: "{ }",
    path: "/tools/json-formatter",
    seoTitle: "Free JSON Formatter & Validator - Beautify & Minify JSON Online",
    seoDescription: "Format and beautify JSON with syntax highlighting. Validate, minify, and prettify JSON data instantly. Free online JSON formatter for developers. No signup required.",
    seoKeywords: [
      "json formatter", "json beautifier", "json validator",
      "prettify json online", "minify json", "json pretty print",
      "format json online", "json syntax checker", "json format tool",
      "how to format json", "free json formatter"
    ],
    howToUse: [
      "Paste your raw or minified JSON data into the input field.",
      "Click 'Format' to beautify the JSON with proper indentation, or 'Minify' to compress it.",
      "View the formatted output with syntax highlighting in the result panel.",
      "Copy the formatted JSON to your clipboard or download it as a file.",
      "If your JSON is invalid, the tool will highlight the error so you can fix it."
    ],
    faq: [
      { question: "What is JSON formatting?", answer: "JSON formatting (also called beautifying or pretty printing) is the process of converting minified or compact JSON into a human-readable structure with proper indentation and line breaks. This makes it much easier to read, debug, and understand complex JSON data." },
      { question: "Is this JSON formatter free to use?", answer: "Yes, this JSON formatter is completely free with no signup required. You can format, minify, and validate unlimited JSON data directly in your browser." },
      { question: "Does this tool validate my JSON?", answer: "Yes. When you paste JSON and click format, the tool will validate the syntax. If there are errors like missing commas, unclosed brackets, or invalid characters, it will alert you to the specific issue." },
      { question: "Is my JSON data sent to any server?", answer: "No. All JSON processing happens locally in your browser. Your data never leaves your device, making it safe to use with sensitive or private JSON data." }
    ]
  },
  {
    id: "base64-converter",
    name: "Base64 Encoder/Decoder",
    description: "Encode and decode text to and from Base64 format instantly.",
    category: "developer",
    icon: "🔄",
    path: "/tools/base64-converter",
    seoTitle: "Free Base64 Encoder/Decoder - Encode & Decode Text Online",
    seoDescription: "Encode text to Base64 or decode Base64 strings back to readable text. Fast, free online Base64 converter with no length limits. No signup required.",
    seoKeywords: [
      "base64 encoder", "base64 decoder", "base64 converter",
      "encode to base64 online", "decode base64 online", "base64 tool",
      "base64 encode decode free", "online base64 converter",
      "how to decode base64", "base64 text encoder"
    ],
    howToUse: [
      "Select 'Encode' to convert text to Base64, or 'Decode' to convert Base64 back to text.",
      "Paste your text or Base64 string into the input field.",
      "View the converted result instantly in the output panel.",
      "Copy the result to your clipboard with one click."
    ],
    faq: [
      { question: "What is Base64 encoding?", answer: "Base64 is a method of encoding binary data into ASCII text characters. It's commonly used to embed images in HTML/CSS, encode email attachments, and safely transmit binary data over text-based protocols like HTTP and JSON." },
      { question: "How do I decode a Base64 string?", answer: "Simply select the 'Decode' mode, paste your Base64 string into the input field, and the decoded text will appear instantly in the output panel. The tool handles multi-line Base64 strings automatically." },
      { question: "Is there a limit to how much text I can encode?", answer: "There is no practical limit. You can encode or decode text of any length directly in your browser. Processing speed depends on your device's capabilities." },
      { question: "Is my data secure when using this tool?", answer: "Yes. All encoding and decoding happens locally in your browser. No data is sent to any server, ensuring your information remains private." }
    ]
  },
  {
    id: "url-encoder",
    name: "URL Encoder/Decoder",
    description:
      "Encode or decode URLs and URL components for web development.",
    category: "developer",
    icon: "🌐",
    path: "/tools/url-encoder",
  },
  {
    id: "hash-generator",
    name: "Hash Generator",
    description:
      "Generate SHA-1, SHA-256, and SHA-512 hashes from any text input.",
    category: "developer",
    icon: "#️⃣",
    path: "/tools/hash-generator",
  },
  {
    id: "uuid-generator",
    name: "UUID Generator",
    description: "Generate random UUID v4 identifiers for development.",
    category: "developer",
    icon: "🆔",
    path: "/tools/uuid-generator",
  },
  {
    id: "regex-tester",
    name: "Regex Tester",
    description:
      "Test and debug regular expressions with real-time match highlighting.",
    category: "developer",
    icon: "🔍",
    path: "/tools/regex-tester",
  },
  {
    id: "markdown-preview",
    name: "Markdown Preview",
    description:
      "Write Markdown and see a live HTML preview as you type. Free Markdown editor.",
    category: "developer",
    icon: "📑",
    path: "/tools/markdown-preview",
  },
  {
    id: "css-minifier",
    name: "CSS Minifier",
    description:
      "Minify and beautify CSS code. Remove whitespace and comments for production.",
    category: "developer",
    icon: "🎨",
    path: "/tools/css-minifier",
  },
  {
    id: "unix-timestamp",
    name: "Unix Timestamp Converter",
    description:
      "Convert Unix timestamps to human-readable dates and vice versa.",
    category: "developer",
    icon: "⏱️",
    path: "/tools/unix-timestamp",
  },
  // Calculators
  {
    id: "password-generator",
    name: "Password Generator",
    description:
      "Generate strong, secure passwords with customizable length and character options.",
    category: "calculator",
    icon: "🔐",
    path: "/tools/password-generator",
    seoTitle: "Free Password Generator - Create Strong & Secure Passwords Online",
    seoDescription: "Generate strong, random passwords with customizable length, characters, and symbols. Free online password generator for maximum security. No data stored.",
    seoKeywords: [
      "password generator", "random password generator", "strong password creator",
      "secure password generator online", "generate random password", "password maker",
      "free password generator tool", "how to create a strong password",
      "random password generator with symbols", "long password generator"
    ],
    howToUse: [
      "Choose your desired password length (8-128 characters recommended).",
      "Select which character types to include: uppercase, lowercase, numbers, and symbols.",
      "Click 'Generate' to create a random secure password instantly.",
      "Copy the password to your clipboard using the copy button.",
      "Use the strength indicator to verify your password meets security requirements."
    ],
    faq: [
      { question: "How does this password generator work?", answer: "This tool uses cryptographically secure random number generation (crypto.getRandomValues) built into your browser. This produces truly random passwords that are not predictable, unlike pseudo-random generators used by less secure tools." },
      { question: "Is it safe to use an online password generator?", answer: "Yes, because all password generation happens locally in your browser. The generated password is never sent over the internet or stored on any server. You can verify this by using the tool with your network disconnected — it works perfectly offline." },
      { question: "How long should my password be?", answer: "Security experts recommend at least 12 characters for general use, and 16+ characters for sensitive accounts like banking or email. Longer passwords with mixed character types are exponentially harder to crack." },
      { question: "Should I include symbols in my password?", answer: "Including uppercase letters, lowercase letters, numbers, and symbols maximizes password entropy, making it significantly harder to crack through brute force attacks. We recommend enabling all character types for the strongest passwords." }
    ]
  },
  {
    id: "age-calculator",
    name: "Age Calculator",
    description:
      "Calculate exact age in years, months, and days from any birth date.",
    category: "calculator",
    icon: "🎂",
    path: "/tools/age-calculator",
    seoTitle: "Free Age Calculator - Calculate Your Exact Age in Years, Months & Days",
    seoDescription: "Calculate your exact age in years, months, weeks, and days. Free online age calculator from any birth date. See next birthday countdown too. No signup required.",
    seoKeywords: [
      "age calculator", "calculate my age", "how old am i",
      "age calculator by date of birth", "exact age calculator",
      "calculate age in years months and days", "birthday calculator",
      "age calculator online free", "how many days until my birthday",
      "date of birth age calculator"
    ],
    howToUse: [
      "Enter your date of birth using the date picker or type it manually (YYYY-MM-DD format).",
      "Click 'Calculate' or press Enter to see your results instantly.",
      "View your exact age displayed in years, months, weeks, and days.",
      "Check the countdown to your next birthday and see what day of the week you were born on.",
      "Calculate the age for any other date by changing the reference date."
    ],
    faq: [
      { question: "How is age calculated?", answer: "The age calculator determines the difference between your birth date and today's date (or a custom reference date). It calculates the exact number of years, months, and days, accounting for varying month lengths and leap years." },
      { question: "Can I calculate age for a past or future date?", answer: "Yes. You can change the reference date from today to any other date in the past or future. This is useful for calculating age at a specific point in time, such as for legal documents or planning purposes." },
      { question: "Does this calculator account for leap years?", answer: "Yes. The age calculator properly accounts for leap years (366-day years that occur every 4 years) and the varying number of days in each month when calculating your exact age." },
      { question: "How many days until my next birthday?", answer: "After entering your birth date, the tool automatically calculates and displays the number of days remaining until your next birthday, along with the day of the week it falls on." }
    ]
  },
  {
    id: "percentage-calculator",
    name: "Percentage Calculator",
    description:
      "Calculate percentages, percentage change, and percentage of a number instantly.",
    category: "calculator",
    icon: "📊",
    path: "/tools/percentage-calculator",
  },
  {
    id: "bmi-calculator",
    name: "BMI Calculator",
    description:
      "Calculate your Body Mass Index (BMI) and see your weight category.",
    category: "calculator",
    icon: "⚖️",
    path: "/tools/bmi-calculator",
    seoTitle: "Free BMI Calculator - Calculate Your Body Mass Index Online",
    seoDescription: "Calculate your BMI instantly with metric or imperial units. See your weight category, ideal weight range, and health tips. Free online BMI calculator for adults.",
    seoKeywords: [
      "bmi calculator", "body mass index calculator", "calculate bmi online",
      "bmi calculator metric", "bmi calculator imperial", "what is my bmi",
      "bmi chart", "healthy weight calculator", "bmi calculator free",
      "body mass index checker online"
    ],
    howToUse: [
      "Enter your height in either centimeters/meters or feet/inches.",
      "Enter your weight in kilograms or pounds.",
      "Click 'Calculate' to see your BMI result instantly.",
      "View your BMI value and corresponding weight category (underweight, normal, overweight, or obese).",
      "Check the ideal weight range for your height to understand your target."
    ],
    faq: [
      { question: "What is BMI?", answer: "BMI (Body Mass Index) is a numerical value calculated from your weight and height. It's used as a screening tool to categorize whether a person is underweight, normal weight, overweight, or obese based on standard ranges established by the World Health Organization (WHO)." },
      { question: "How is BMI calculated?", answer: "BMI is calculated by dividing your weight in kilograms by your height in meters squared (kg/m²). For imperial units, the formula is (weight in pounds / (height in inches)²) × 703." },
      { question: "What is a healthy BMI range?", answer: "According to WHO guidelines, a healthy BMI range for adults is 18.5 to 24.9. Below 18.5 is considered underweight, 25.0-29.9 is overweight, and 30.0 or above is obese." },
      { question: "Is BMI accurate for everyone?", answer: "BMI is a useful general indicator but has limitations. It doesn't account for muscle mass, bone density, or fat distribution. Athletes with high muscle mass may have a high BMI despite being healthy. It's best used as one of several health indicators." }
    ]
  },
  {
    id: "unit-converter",
    name: "Unit Converter",
    description:
      "Convert between length, weight, temperature, and other units easily.",
    category: "calculator",
    icon: "📐",
    path: "/tools/unit-converter",
  },
  // Converters
  {
    id: "base-converter",
    name: "Number Base Converter",
    description:
      "Convert numbers between binary, octal, decimal, and hexadecimal systems.",
    category: "converter",
    icon: "🔢",
    path: "/tools/base-converter",
  },
  {
    id: "roman-numerals",
    name: "Roman Numeral Converter",
    description:
      "Convert between Roman numerals and Arabic numbers in both directions.",
    category: "converter",
    icon: "🏛️",
    path: "/tools/roman-numerals",
  },
  {
    id: "color-converter",
    name: "Color Converter",
    description:
      "Convert colors between HEX, RGB, and HSL formats with live preview.",
    category: "converter",
    icon: "🎨",
    path: "/tools/color-converter",
    seoTitle: "Free Color Converter - HEX to RGB to HSL with Live Preview",
    seoDescription: "Convert colors between HEX, RGB, and HSL formats instantly. Live color preview with copy-paste values. Free online color converter for designers and developers.",
    seoKeywords: [
      "color converter", "hex to rgb converter", "rgb to hsl converter",
      "hex to hsl converter", "color format converter", "rgb hex converter",
      "online color converter", "color converter tool free",
      "convert hex color code", "hsl to rgb converter"
    ],
    howToUse: [
      "Enter a color value in any format: HEX (#FF5733), RGB (rgb(255,87,51)), or HSL (hsl(11,100%,60%)).",
      "View the converted values in all formats displayed side by side.",
      "See the live color preview update in real-time as you type.",
      "Click any value to copy it to your clipboard.",
      "Use the color picker to select a color visually and get all format values."
    ],
    faq: [
      { question: "What are HEX, RGB, and HSL color formats?", answer: "HEX represents colors as a 6-digit hexadecimal code (e.g., #FF5733). RGB uses red, green, and blue values from 0-255. HSL represents colors as hue (0-360°), saturation (0-100%), and lightness (0-100%), which is more intuitive for humans to understand." },
      { question: "How do I convert HEX to RGB?", answer: "Enter your HEX color code (with or without the # symbol) and the tool instantly displays the equivalent RGB values. For example, #FF5733 converts to RGB(255, 87, 51)." },
      { question: "Why should I use HSL instead of RGB?", answer: "HSL is often preferred by designers because it's more intuitive. You can adjust the hue to change the color, saturation for vividness, and lightness for brightness — all independently. It's also the format used in modern CSS." },
      { question: "Can I use this color converter for web design?", answer: "Yes. This tool supports all standard web color formats. You can convert between any format and directly copy the values for use in CSS, HTML, JavaScript, or design software like Figma and Photoshop." }
    ]
  },
  {
    id: "html-entities",
    name: "HTML Entity Encoder",
    description:
      "Encode or decode HTML entities and special characters safely.",
    category: "converter",
    icon: "<>",
    path: "/tools/html-entities",
  },
  {
    id: "json-to-csv",
    name: "JSON to CSV Converter",
    description:
      "Convert JSON data to CSV format for spreadsheets and databases.",
    category: "converter",
    icon: "📊",
    path: "/tools/json-to-csv",
  },
  {
    id: "csv-to-json",
    name: "CSV to JSON Converter",
    description:
      "Convert CSV data to JSON format for APIs and web applications.",
    category: "converter",
    icon: "📋",
    path: "/tools/csv-to-json",
  },
  {
    id: "image-to-base64",
    name: "Image to Base64",
    description:
      "Convert images to Base64 encoded strings for embedding in code.",
    category: "converter",
    icon: "🖼️",
    path: "/tools/image-to-base64",
  },
  {
    id: "loan-calculator",
    name: "Loan Calculator",
    description:
      "Calculate monthly payments, total interest, and amortization for loans.",
    category: "calculator",
    icon: "🏦",
    path: "/tools/loan-calculator",
  },
  {
    id: "mortgage-calculator",
    name: "Mortgage Calculator",
    description:
      "Estimate your monthly mortgage payment with taxes and insurance.",
    category: "calculator",
    icon: "🏠",
    path: "/tools/mortgage-calculator",
  },
  {
    id: "calorie-calculator",
    name: "Calorie Calculator",
    description:
      "Estimate daily calorie needs based on age, weight, height, and activity.",
    category: "calculator",
    icon: "🍎",
    path: "/tools/calorie-calculator",
  },
  {
    id: "roi-calculator",
    name: "ROI Calculator",
    description:
      "Calculate return on investment (ROI) percentage and profit amount.",
    category: "calculator",
    icon: "📈",
    path: "/tools/roi-calculator",
  },
  {
    id: "compound-interest",
    name: "Compound Interest Calculator",
    description:
      "See how your money grows over time with compound interest calculations.",
    category: "calculator",
    icon: "💰",
    path: "/tools/compound-interest",
  },
  {
    id: "income-tax-calculator",
    name: "Income Tax Calculator",
    description:
      "Estimate your take-home pay after income tax deductions.",
    category: "calculator",
    icon: "💵",
    path: "/tools/income-tax-calculator",
  },
  {
    id: "tip-calculator",
    name: "Tip Calculator",
    description:
      "Calculate tip amount, split the bill, and figure out per-person cost.",
    category: "calculator",
    icon: "💳",
    path: "/tools/tip-calculator",
  },
  {
    id: "discount-calculator",
    name: "Discount Calculator",
    description:
      "Calculate discounted price, savings amount, and discount percentage.",
    category: "calculator",
    icon: "🏷️",
    path: "/tools/discount-calculator",
  },
  {
    id: "pregnancy-calculator",
    name: "Pregnancy Due Date Calculator",
    description:
      "Estimate your due date based on last menstrual period with trimester info.",
    category: "calculator",
    icon: "👶",
    path: "/tools/pregnancy-calculator",
  },
  {
    id: "random-number-generator",
    name: "Random Number Generator",
    description:
      "Generate random numbers within a specified range with customizable options.",
    category: "calculator",
    icon: "🎲",
    path: "/tools/random-number-generator",
  },
  {
    id: "zodiac-sign",
    name: "Zodiac Sign Finder",
    description:
      "Find your zodiac sign by birth date with traits and compatibility info.",
    category: "text",
    icon: "⭐",
    path: "/tools/zodiac-sign",
  },
  {
    id: "random-name-generator",
    name: "Random Name Generator",
    description:
      "Generate random names for characters, profiles, or testing.",
    category: "text",
    icon: "👤",
    path: "/tools/random-name-generator",
  },
  {
    id: "fancy-text-generator",
    name: "Fancy Text Generator",
    description:
      "Convert text to fancy Unicode fonts for social media bios and posts.",
    category: "text",
    icon: "✨",
    path: "/tools/fancy-text-generator",
  },
  {
    id: "hashtag-generator",
    name: "Hashtag Generator",
    description:
      "Generate relevant hashtags for Instagram, Twitter, and TikTok.",
    category: "text",
    icon: "#️⃣",
    path: "/tools/hashtag-generator",
  },
  {
    id: "youtube-thumbnail",
    name: "YouTube Thumbnail Size Tool",
    description:
      "YouTube thumbnail size guide and preview tool with best practice tips.",
    category: "developer",
    icon: "🎬",
    path: "/tools/youtube-thumbnail",
  },
  {
    id: "perpetual-calendar",
    name: "Perpetual Calendar",
    description:
      "Interactive calendar with world holidays, week numbers, and historical events on any date.",
    category: "calculator",
    icon: "📅",
    path: "/tools/perpetual-calendar",
  },
  {
    id: "md5-generator",
    name: "MD5 Hash Generator",
    description:
      "Generate MD5 hash from any text input instantly. Free online MD5 generator.",
    category: "developer",
    icon: "🔒",
    path: "/tools/md5-generator",
  },
  {
    id: "qr-code-generator",
    name: "QR Code Generator",
    description:
      "Generate QR codes from texts, URLs, emails, or any string. Download as PNG.",
    category: "developer",
    icon: "📱",
    path: "/tools/qr-code-generator",
  },
  {
    id: "quotes",
    name: "Famous Quotes Directory",
    description:
      "Search and discover famous quotes from world-renowned figures.",
    category: "text",
    icon: "💬",
    path: "/tools/quotes",
    seoTitle: "Famous Quotes - Inspirational & Motivational Quotes Online",
    seoDescription: "Browse and search hundreds of famous quotes from world-renowned figures. Filter by category, author, or keyword. Free inspirational quotes collection for daily motivation.",
    seoKeywords: [
      "famous quotes", "inspirational quotes", "motivational quotes",
      "quote by author", "best quotes online", "daily quotes",
      "famous sayings", "quote search tool", "quotes about life",
      "wisdom quotes", "motivational sayings", "famous quotes by category"
    ],
    howToUse: [
      "Browse quotes organized by category: courage, wisdom, love, success, and more.",
      "Use the search bar to find quotes by person name, quote text, or keyword.",
      "Click the Quote of the Day for daily inspiration.",
      "Click on any quote to see its full details including source, date, and tags.",
      "Click on any tag to discover related quotes on the same topic."
    ],
    faq: [
      { question: "How many quotes are in this collection?", answer: "This collection features over 500 famous quotes from world-renowned figures including philosophers, leaders, scientists, artists, and writers. Quotes are organized by theme for easy browsing." },
      { question: "Can I search for quotes by a specific person?", answer: "Yes. Simply type the person's name in the search bar (e.g., 'Einstein', 'Gandhi') and the tool will show all quotes by that author along with quotes mentioning that name." },
      { question: "Are the quote sources and dates accurate?", answer: "We make every effort to provide accurate source information and dates. Quotes are attributed to documented sources such as books, speeches, interviews, and letters. Some attributions are based on historical consensus." },
      { question: "How can I use these quotes?", answer: "These quotes are great for daily inspiration, social media posts, speeches, writing, presentations, or simply reflecting on wisdom from great minds throughout history." }
    ]
  },
  {
    id: "ai-tools",
    name: "Free AI Tools Directory",
    description:
      "Curated directory of the best free AI tools for writing, images, video, coding, and more.",
    category: "developer",
    icon: "🧭",
    path: "/tools/ai-tools",
  },
];
