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
];
