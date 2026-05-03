export interface Tool {
  id: string;
  name: string;
  description: string;
  category: "text" | "developer";
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
];
