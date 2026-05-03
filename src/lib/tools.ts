export interface Tool {
  id: string;
  name: string;
  description: string;
  category: "text" | "developer" | "calculator" | "converter";
  icon: string;
  path: string;
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
  },
  {
    id: "base64-converter",
    name: "Base64 Encoder/Decoder",
    description: "Encode and decode text to and from Base64 format instantly.",
    category: "developer",
    icon: "🔄",
    path: "/tools/base64-converter",
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
  },
  {
    id: "age-calculator",
    name: "Age Calculator",
    description:
      "Calculate exact age in years, months, and days from any birth date.",
    category: "calculator",
    icon: "🎂",
    path: "/tools/age-calculator",
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
];
