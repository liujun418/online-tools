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
    seoTitle: "Free Case Converter - Uppercase, Lowercase, Title Case Online",
    seoDescription: "Convert text to uppercase, lowercase, title case, sentence case, or alternating case instantly. Free online text case converter. No signup required.",
    seoKeywords: [
      "case converter", "text case converter", "uppercase converter",
      "lowercase converter", "title case converter", "sentence case converter",
      "change text case online", "convert uppercase to lowercase",
      "text case changer free", "online case converter tool"
    ],
    howToUse: [
      "Paste or type your text into the input field above.",
      "Click the desired case button: UPPERCASE, lowercase, Title Case, or Sentence case.",
      "View the converted text appear instantly in the output panel.",
      "Copy the result to your clipboard with one click."
    ],
    faq: [
      { question: "What is title case?", answer: "Title case capitalizes the first letter of each major word in a text. It's commonly used for headlines, book titles, and article headings. Minor words like 'a', 'an', 'the', 'in', 'on' are typically left lowercase." },
      { question: "What is sentence case?", answer: "Sentence case capitalizes only the first letter of each sentence, leaving the rest lowercase. This is the standard format for body text, paragraphs, and most writing." },
      { question: "Does this tool work with multiple paragraphs?", answer: "Yes. You can paste text with multiple paragraphs, and each case conversion mode will properly handle all paragraphs in your text." },
      { question: "Is my text sent to any server?", answer: "No. All text conversion happens locally in your browser. Your text never leaves your device." }
    ]
  },
  {
    id: "lorem-ipsum",
    name: "Lorem Ipsum Generator",
    description:
      "Generate placeholder text for your designs, mockups, and wireframes.",
    category: "text",
    icon: "📄",
    path: "/tools/lorem-ipsum",
    seoTitle: "Free Lorem Ipsum Generator - Placeholder Text for Design Mockups",
    seoDescription: "Generate customizable Lorem Ipsum placeholder text for your designs, mockups, and wireframes. Choose paragraphs, sentences, or words. Free online Lorem Ipsum generator.",
    seoKeywords: [
      "lorem ipsum generator", "placeholder text generator",
      "lorem ipsum text online", "dummy text generator",
      "generate lorem ipsum", "placeholder text for design",
      "free lorem ipsum tool", "lorem ipsum paragraphs",
      "lorem ipsum generator online", "mockup text generator"
    ],
    howToUse: [
      "Select the type of content you need: paragraphs, sentences, or words.",
      "Choose the number of units you want to generate.",
      "Click 'Generate' to create your Lorem Ipsum placeholder text.",
      "Copy the generated text and paste it into your design, mockup, or wireframe."
    ],
    faq: [
      { question: "What is Lorem Ipsum?", answer: "Lorem Ipsum is standard placeholder text used in the design and publishing industries. It's derived from a Latin text by Cicero from 45 BC. It's used to fill layouts so clients can focus on design rather than content." },
      { question: "Can I choose how many paragraphs to generate?", answer: "Yes. You can specify the exact number of paragraphs, sentences, or words you need. This lets you generate precisely the amount of placeholder text your design requires." },
      { question: "Is Lorem Ipsum text free to use?", answer: "Yes. Lorem Ipsum is in the public domain and completely free to use for any purpose, including commercial projects." },
      { question: "Why not just use real text as a placeholder?", answer: "Real text can distract viewers from evaluating the design itself. Lorem Ipsum provides realistic-looking text without meaningful content, keeping the focus on layout, typography, and visual design." }
    ]
  },
  {
    id: "text-to-slug",
    name: "Text to Slug",
    description:
      "Convert any text into a URL-friendly slug string for clean URLs.",
    category: "text",
    icon: "🔗",
    path: "/tools/text-to-slug",
    seoTitle: "Free Text to Slug Converter - Generate URL-Friendly Slugs Online",
    seoDescription: "Convert any text or title into a clean, URL-friendly slug string. Remove special characters, lowercase, and hyphenate automatically. Free online slug generator.",
    seoKeywords: [
      "text to slug converter", "slug generator", "url slug generator",
      "generate slug from title", "url-friendly slug", "slug creator",
      "convert text to url slug", "seo slug generator",
      "online slug generator free", "slugify text online"
    ],
    howToUse: [
      "Enter your text, title, or heading in the input field.",
      "View the URL-friendly slug generated instantly below.",
      "Copy the slug to use in your CMS, blog URL, or routing configuration.",
      "The tool automatically removes special characters, lowercases letters, and replaces spaces with hyphens."
    ],
    faq: [
      { question: "What is a URL slug?", answer: "A URL slug is the part of a URL that identifies a specific page in a human-readable format. For example, in 'example.com/blog/my-first-post', 'my-first-post' is the slug." },
      { question: "Why are slugs important for SEO?", answer: "Clean, descriptive slugs help search engines understand what your page is about. They also make URLs more readable and clickable for users, which can improve click-through rates." },
      { question: "What characters are removed from slugs?", answer: "Special characters, punctuation marks, and non-alphanumeric symbols are stripped out. Spaces are replaced with hyphens, and all letters are converted to lowercase for URL compatibility." },
      { question: "Can I customize the slug separator?", answer: "This tool uses hyphens as the standard separator, which is the most common convention. If you need underscores or another separator, you can do a find-and-replace after generating the slug." }
    ]
  },
  {
    id: "text-diff",
    name: "Text Diff Checker",
    description:
      "Compare two texts and highlight the differences side by side.",
    category: "text",
    icon: "📋",
    path: "/tools/text-diff",
    seoTitle: "Free Text Diff Checker - Compare Two Texts & Find Differences",
    seoDescription: "Compare two texts side by side and highlight differences instantly. Find added, removed, or changed lines. Free online text diff tool. No signup required.",
    seoKeywords: [
      "text diff checker", "compare two texts", "text comparison tool",
      "find text differences", "text difference checker", "compare text online",
      "text diff tool free", "difference finder text",
      "online text comparison", "text diff checker online"
    ],
    howToUse: [
      "Paste your original text in the first input field.",
      "Paste the modified or second text in the second input field.",
      "Click 'Compare' to see a side-by-side comparison.",
      "Added lines are highlighted in green, removed lines in red, and unchanged lines remain neutral."
    ],
    faq: [
      { question: "How does the text diff tool work?", answer: "The tool compares both texts line by line and character by character. It uses a diffing algorithm to identify additions, deletions, and modifications between the two versions." },
      { question: "Is there a limit to how much text I can compare?", answer: "There's no strict limit. You can compare texts of any length. Very large texts may take a moment to process, but the tool handles documents, code files, and articles efficiently." },
      { question: "Can I use this to compare code files?", answer: "Yes. This tool works great for comparing source code, configuration files, or any text-based content. It highlights exactly what changed between versions." },
      { question: "Is my text data stored anywhere?", answer: "No. All text comparison happens locally in your browser. Neither text is sent to any server or stored." }
    ]
  },
  {
    id: "remove-duplicate-lines",
    name: "Remove Duplicate Lines",
    description:
      "Remove duplicate lines from text while preserving order. Clean up your lists instantly.",
    category: "text",
    icon: "🧹",
    path: "/tools/remove-duplicate-lines",
    seoTitle: "Remove Duplicate Lines - Clean Up Lists & Text Online Free",
    seoDescription: "Remove duplicate lines from any text while preserving the original order. Clean up email lists, keywords, and data. Free online duplicate line remover.",
    seoKeywords: [
      "remove duplicate lines", "deduplicate text", "remove duplicates online",
      "delete duplicate lines", "clean up duplicate text", "dedup text tool",
      "remove repeated lines", "duplicate line remover free",
      "clean duplicate lines from list", "text deduplicator"
    ],
    howToUse: [
      "Paste your text with duplicate lines into the input field.",
      "Click 'Remove Duplicates' to process the text.",
      "View the cleaned text with all duplicate lines removed while keeping original order.",
      "Copy the result and use it in your application, spreadsheet, or document."
    ],
    faq: [
      { question: "Does this tool preserve the original line order?", answer: "Yes. Duplicate lines are removed while keeping the first occurrence of each line in its original position. This preserves the logical order of your list or text." },
      { question: "What counts as a duplicate line?", answer: "A duplicate line is an exact match — including the same text, spacing, and capitalization. Lines that differ even by a single character or space are treated as unique." },
      { question: "Can I use this to clean up email lists?", answer: "Yes. This is one of the most common use cases. Paste your email list, remove duplicates, and get a clean list ready for your mailing campaign." },
      { question: "Is there a limit to how many lines I can process?", answer: "There's no strict limit. The tool can handle thousands of lines efficiently. Very large files may take a few seconds to process." }
    ]
  },
  {
    id: "text-repeater",
    name: "Text Repeater",
    description:
      "Repeat any text or string a specified number of times instantly.",
    category: "text",
    icon: "🔁",
    path: "/tools/text-repeater",
    seoTitle: "Free Text Repeater - Repeat Text & Strings Online Instantly",
    seoDescription: "Repeat any text, word, or string a specified number of times. Add separators between repetitions. Free online text repeater tool. No signup required.",
    seoKeywords: [
      "text repeater", "repeat text online", "string repeater",
      "repeat string n times", "text duplicator", "repeat text tool",
      "copy paste repeater", "repeat words online",
      "text repeater online free", "how to repeat text"
    ],
    howToUse: [
      "Enter the text or string you want to repeat in the input field.",
      "Set the number of times you want it repeated.",
      "Optionally add a separator between repetitions (like a comma, space, or newline).",
      "Click 'Repeat' to generate the output and copy it to your clipboard."
    ],
    faq: [
      { question: "Why would I need a text repeater?", answer: "Text repeaters are useful for generating test data, creating patterned text, filling forms, or repeating characters for visual separators (like dashed lines in comments)." },
      { question: "Can I add a separator between repeated text?", answer: "Yes. You can specify any separator — space, comma, newline, or any custom character — to appear between each repetition." },
      { question: "Is there a maximum number of repetitions?", answer: "You can repeat text as many times as you need. Very large numbers of repetitions will produce correspondingly large output." },
      { question: "Does this tool work offline?", answer: "Yes. All text repetition happens locally in your browser. No internet connection is needed after the page loads." }
    ]
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
    seoTitle: "Free URL Encoder/Decoder - Encode & Decode URLs Online",
    seoDescription: "Encode URLs with percent-encoding or decode percent-encoded URLs back to readable text. Free online URL encoder/decoder for web developers. No signup required.",
    seoKeywords: [
      "url encoder", "url decoder", "percent encoding",
      "encode url online", "decode url online", "url encode decode",
      "url encoding tool", "percent encode url",
      "free url encoder", "url encoder decoder online"
    ],
    howToUse: [
      "Select 'Encode' to convert a URL to percent-encoded format, or 'Decode' to decode it back.",
      "Paste your URL or encoded string into the input field.",
      "View the result instantly in the output panel.",
      "Copy the encoded or decoded URL to your clipboard."
    ],
    faq: [
      { question: "What is URL encoding?", answer: "URL encoding (also called percent-encoding) converts special characters in URLs into a format that can be safely transmitted over the internet. Characters like spaces, ampersands, and equals signs are converted to %XX format." },
      { question: "When should I use URL encoding?", answer: "URL encoding is needed when passing special characters in query strings, form data, or API requests. It ensures that characters like &, =, ?, and spaces don't break the URL structure." },
      { question: "What characters get encoded?", answer: "Reserved characters (? & = # +), unsafe characters (spaces, angle brackets, quotes, curly braces, pipes, backslashes, carets, tildes, square brackets), and non-ASCII characters (like accented letters or Chinese characters) are all encoded." },
      { question: "Does this tool handle full URLs with query strings?", answer: "Yes. You can encode or decode complete URLs including query parameters and fragments. The tool properly handles all special characters throughout the entire URL." }
    ]
  },
  {
    id: "hash-generator",
    name: "Hash Generator",
    description:
      "Generate SHA-1, SHA-256, and SHA-512 hashes from any text input.",
    category: "developer",
    icon: "#️⃣",
    path: "/tools/hash-generator",
    seoTitle: "Free Hash Generator - SHA-1, SHA-256, SHA-512 Online",
    seoDescription: "Generate SHA-1, SHA-256, and SHA-512 hash digests from any text input. Fast, free online hash generator for developers. No signup required.",
    seoKeywords: [
      "hash generator", "sha256 generator", "sha512 generator",
      "sha1 generator", "hash calculator online", "generate sha hash",
      "sha256 hash online", "text to hash converter",
      "free hash generator", "sha hash generator online"
    ],
    howToUse: [
      "Enter the text you want to hash in the input field.",
      "View SHA-1, SHA-256, and SHA-512 hash digests generated instantly.",
      "Click any hash value to copy it to your clipboard.",
      "Use the hashes for file verification, data integrity checks, or cryptographic purposes."
    ],
    faq: [
      { question: "What is a cryptographic hash?", answer: "A cryptographic hash is a fixed-length string of characters generated from input data using a one-way mathematical function. Even a tiny change in the input produces a completely different hash, making it useful for verifying data integrity." },
      { question: "What is the difference between SHA-1, SHA-256, and SHA-512?", answer: "They produce different length outputs: SHA-1 generates 160-bit hashes, SHA-256 generates 256-bit hashes, and SHA-512 generates 512-bit hashes. SHA-256 and SHA-512 are considered more secure than SHA-1, which has known vulnerabilities." },
      { question: "Can I hash files with this tool?", answer: "This tool hashes text input. For file hashing, you can copy the file's text content into the input field. For binary files, you may need a dedicated file hashing tool." },
      { question: "Is my input data sent to any server?", answer: "No. All hash generation happens locally in your browser using the Web Crypto API. Your text is never transmitted or stored." }
    ]
  },
  {
    id: "uuid-generator",
    name: "UUID Generator",
    description: "Generate random UUID v4 identifiers for development.",
    category: "developer",
    icon: "🔑",
    path: "/tools/uuid-generator",
    seoTitle: "Free UUID Generator - Generate UUID v4 Identifiers Online",
    seoDescription: "Generate random UUID v4 identifiers instantly. Generate single or multiple UUIDs with copy-to-clipboard support. Free online UUID generator for developers.",
    seoKeywords: [
      "uuid generator", "uuid v4 generator", "generate uuid online",
      "random uuid generator", "uuid creator", "guid generator",
      "uuid generator free", "generate multiple uuids",
      "uuid v4 online", "universal unique identifier generator"
    ],
    howToUse: [
      "Click 'Generate' to create a random UUID v4 identifier.",
      "Set the number of UUIDs to generate multiple at once.",
      "Click any UUID to copy it to your clipboard.",
      "Use UUIDs as unique identifiers for database records, API keys, or session tokens."
    ],
    faq: [
      { question: "What is a UUID?", answer: "A UUID (Universally Unique Identifier) is a 128-bit number used to uniquely identify information in computer systems. UUID v4, the most common version, uses random numbers to generate identifiers with an extremely low collision probability." },
      { question: "How unique are UUID v4 identifiers?", answer: "The chance of generating two identical UUID v4 values is approximately 1 in 5.3 × 10^36. You would need to generate billions of UUIDs per second for billions of years to have even a small chance of collision." },
      { question: "Are these UUIDs cryptographically secure?", answer: "Yes. This tool uses the Web Crypto API's cryptographically secure random number generator (crypto.getRandomValues) to produce UUIDs that are not predictable." },
      { question: "Can I generate UUIDs offline?", answer: "Yes. All UUID generation happens locally in your browser. No internet connection is needed after the page loads." }
    ]
  },
  {
    id: "regex-tester",
    name: "Regex Tester",
    description:
      "Test and debug regular expressions with real-time match highlighting.",
    category: "developer",
    icon: "🔍",
    path: "/tools/regex-tester",
    seoTitle: "Free Regex Tester - Test & Debug Regular Expressions Online",
    seoDescription: "Test and debug regular expressions with real-time match highlighting. Support for flags, groups, and replacement patterns. Free online regex tester.",
    seoKeywords: [
      "regex tester", "regular expression tester", "regex debugger",
      "test regex online", "regex checker", "regexp tester",
      "regex match tester", "online regex tool",
      "free regex tester", "regex pattern tester"
    ],
    howToUse: [
      "Enter your regular expression pattern in the pattern field.",
      "Set flags (global, case-insensitive, multiline) as needed.",
      "Paste your test text in the input area below.",
      "View matching highlights, group captures, and match details in real-time."
    ],
    faq: [
      { question: "What is a regular expression?", answer: "A regular expression (regex or regexp) is a sequence of characters that defines a search pattern. It's used for text matching, validation, search-and-replace operations, and data extraction in programming and text editors." },
      { question: "What regex flavor does this tool use?", answer: "This tool uses JavaScript's RegExp engine, which is compatible with most modern programming languages including Python, Java, and PHP, though some advanced features may vary between implementations." },
      { question: "Can I test capture groups?", answer: "Yes. The tool highlights all matches and displays capture group information. You can see exactly which parts of your text match each group in your pattern." },
      { question: "What flags are supported?", answer: "The tool supports the standard JavaScript regex flags: g (global), i (case-insensitive), m (multiline), s (dotAll), and u (unicode)." }
    ]
  },
  {
    id: "markdown-preview",
    name: "Markdown Preview",
    description:
      "Write Markdown and see a live HTML preview as you type. Free Markdown editor.",
    category: "developer",
    icon: "📑",
    path: "/tools/markdown-preview",
    seoTitle: "Free Markdown Preview Editor - Live HTML Preview as You Type",
    seoDescription: "Write Markdown and see a live HTML preview in real-time. Free online Markdown editor with syntax highlighting. Perfect for README files, documentation, and blog posts.",
    seoKeywords: [
      "markdown preview", "markdown editor online", "live markdown preview",
      "markdown to html converter", "write markdown online",
      "markdown editor free", "online markdown viewer",
      "markdown previewer", "md to html online",
      "markdown live editor"
    ],
    howToUse: [
      "Start typing Markdown in the left editor panel.",
      "View the rendered HTML preview update in real-time on the right.",
      "Use standard Markdown syntax: headers, lists, bold, italic, links, images, code blocks, and tables.",
      "Copy the rendered HTML or export your Markdown file when done."
    ],
    faq: [
      { question: "What Markdown features are supported?", answer: "This editor supports all standard Markdown features: headings (H1-H6), bold and italic text, lists (ordered and unordered), links, images, code blocks (inline and fenced), blockquotes, horizontal rules, and tables." },
      { question: "Can I use GitHub Flavored Markdown?", answer: "Yes. This editor supports GitHub Flavored Markdown (GFM) extensions including task lists, strikethrough text, and fenced code blocks with syntax highlighting." },
      { question: "Is my Markdown saved anywhere?", answer: "No. Your Markdown is processed entirely in your browser. Nothing is sent to or stored on any server." },
      { question: "Can I use this to write README files?", answer: "Absolutely. This is perfect for drafting and previewing README.md files for GitHub repositories, documentation, or blog posts before publishing." }
    ]
  },
  {
    id: "css-minifier",
    name: "CSS Minifier",
    description:
      "Minify and beautify CSS code. Remove whitespace and comments for production.",
    category: "developer",
    icon: "🎨",
    path: "/tools/css-minifier",
    seoTitle: "Free CSS Minifier & Beautifier - Compress CSS Online",
    seoDescription: "Minify CSS to reduce file size and improve page load speed. Also beautify compressed CSS for readability. Free online CSS minifier tool. No signup required.",
    seoKeywords: [
      "css minifier", "minify css online", "css compressor",
      "css beautifier", "compress css", "css minify tool",
      "free css minifier", "css optimizer online",
      "minify css free", "css compression tool"
    ],
    howToUse: [
      "Paste your CSS code into the input field.",
      "Click 'Minify' to compress the CSS by removing whitespace, comments, and unnecessary characters.",
      "Click 'Beautify' to format minified CSS back into readable structure.",
      "Copy the result to use in your production stylesheet."
    ],
    faq: [
      { question: "What does CSS minification do?", answer: "CSS minification removes unnecessary whitespace, comments, line breaks, and redundant code to reduce file size. This speeds up page load times and reduces bandwidth usage." },
      { question: "How much can minification reduce CSS file size?", answer: "Typically, minification reduces CSS file size by 10-20%. The exact reduction depends on how well-formatted the original CSS is — heavily commented and formatted CSS sees bigger reductions." },
      { question: "Is minified CSS safe for production?", answer: "Yes. Minified CSS is functionally identical to the original — only whitespace and comments are removed. It's the standard practice for production websites." },
      { question: "Can I beautify minified CSS back to readable format?", answer: "Yes. The beautify feature reformats compressed CSS with proper indentation and line breaks, making it easy to read and edit again." }
    ]
  },
  {
    id: "unix-timestamp",
    name: "Unix Timestamp Converter",
    description:
      "Convert Unix timestamps to human-readable dates and vice versa.",
    category: "developer",
    icon: "⏱️",
    path: "/tools/unix-timestamp",
    seoTitle: "Free Unix Timestamp Converter - Convert Epoch Time Online",
    seoDescription: "Convert Unix timestamps (epoch time) to human-readable dates and vice versa. View current Unix time. Free online timestamp converter for developers.",
    seoKeywords: [
      "unix timestamp converter", "epoch time converter", "convert unix timestamp",
      "unix time to date", "date to unix timestamp", "epoch converter",
      "current unix time", "unix timestamp online",
      "epoch time converter online", "timestamp converter free"
    ],
    howToUse: [
      "View the current Unix timestamp displayed at the top of the page.",
      "Enter a Unix timestamp to convert it to a human-readable date and time.",
      "Enter a date and time to convert it to a Unix timestamp.",
      "Choose your timezone to see timestamps in your local time."
    ],
    faq: [
      { question: "What is a Unix timestamp?", answer: "A Unix timestamp (also called epoch time or POSIX time) is the number of seconds that have elapsed since January 1, 1970 (UTC). It's the standard time representation used by most operating systems and programming languages." },
      { question: "Why do developers use Unix timestamps?", answer: "Unix timestamps provide a universal, timezone-independent way to represent time. They're easy to store in databases, compare mathematically, and are supported by virtually every programming language." },
      { question: "What is the Year 2038 problem?", answer: "The Year 2038 problem occurs when 32-bit signed integers storing Unix timestamps overflow on January 19, 2038. Modern 64-bit systems don't have this issue and can represent timestamps for billions of years." },
      { question: "Does this tool handle timezones?", answer: "Yes. You can convert timestamps to any timezone. The tool shows both UTC and your local time equivalents for clarity." }
    ]
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
    seoTitle: "Free Percentage Calculator - Calculate %, Change & Of a Number",
    seoDescription: "Calculate percentages, percentage change between two numbers, and what percentage one number is of another. Free online percentage calculator. No signup required.",
    seoKeywords: [
      "percentage calculator", "calculate percentage", "percentage change calculator",
      "what is x percent of y", "percentage difference calculator",
      "calculate percentage online", "percent calculator free",
      "how to calculate percentage", "percentage increase calculator",
      "online percentage calculator"
    ],
    howToUse: [
      "Choose the type of percentage calculation you need: percentage of a number, percentage change, or what percentage one number is of another.",
      "Enter your values in the appropriate input fields.",
      "View the calculated percentage result instantly.",
      "Use the result for financial calculations, grade computations, or data analysis."
    ],
    faq: [
      { question: "How do I calculate the percentage of a number?", answer: "To find X% of a number, multiply the number by X and divide by 100. For example, 25% of 200 = (200 × 25) ÷ 100 = 50." },
      { question: "How is percentage change calculated?", answer: "Percentage change = ((new value - original value) ÷ original value) × 100. A positive result means an increase; a negative result means a decrease." },
      { question: "Can this calculator handle negative numbers?", answer: "Yes. You can calculate percentages with negative numbers, which is useful for financial scenarios like losses, temperature changes, or stock price movements." },
      { question: "Is this calculator accurate for financial calculations?", answer: "Yes. The calculations use precise arithmetic. However, for official financial reporting, you should round results according to your local accounting standards." }
    ]
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
    seoTitle: "Free Unit Converter - Convert Length, Weight, Temperature & More",
    seoDescription: "Convert between metric and imperial units for length, weight, temperature, volume, and speed. Free online unit converter. No signup required.",
    seoKeywords: [
      "unit converter", "metric to imperial converter", "length converter",
      "weight converter", "temperature converter", "volume converter",
      "unit conversion online", "free unit converter tool",
      "cm to inches converter", "kg to lbs converter"
    ],
    howToUse: [
      "Select the unit category you want to convert (length, weight, temperature, volume, or speed).",
      "Choose the input and output units from the dropdown menus.",
      "Enter your value and view the converted result instantly.",
      "Use the swap button to quickly reverse the conversion direction."
    ],
    faq: [
      { question: "What unit categories are supported?", answer: "This converter supports length (meters, feet, inches, etc.), weight (kilograms, pounds, ounces, etc.), temperature (Celsius, Fahrenheit, Kelvin), volume (liters, gallons, cups, etc.), and speed (mph, km/h, m/s)." },
      { question: "How accurate are the conversions?", answer: "All conversions use precise conversion factors and are accurate to many decimal places. Results are rounded for readability but you can see the full precision." },
      { question: "Can I convert between any two units?", answer: "You can convert between any two units within the same category. For example, you can convert meters to feet, or kilograms to pounds, but not meters to kilograms." },
      { question: "Is this tool suitable for cooking measurements?", answer: "Yes. The volume converter includes common cooking measurements like cups, tablespoons, teaspoons, and milliliters, making it useful for recipe conversions." }
    ]
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
    seoTitle: "Free Number Base Converter - Binary, Octal, Decimal, Hex Converter",
    seoDescription: "Convert numbers between binary, octal, decimal, and hexadecimal systems instantly. Free online number base converter for developers and students.",
    seoKeywords: [
      "number base converter", "binary to decimal converter", "hex to decimal",
      "decimal to binary converter", "octal converter", "base converter online",
      "binary octal decimal hex converter", "convert number bases",
      "free base converter", "number system converter"
    ],
    howToUse: [
      "Select the input number base (binary, octal, decimal, or hexadecimal).",
      "Enter your number in the input field.",
      "View the number converted to all other bases instantly.",
      "Use the tool for programming, networking, or computer science studies."
    ],
    faq: [
      { question: "What are number bases?", answer: "Number bases are different systems for representing numbers. Binary (base 2) uses digits 0-1, octal (base 8) uses 0-7, decimal (base 10) uses 0-9, and hexadecimal (base 16) uses 0-9 and A-F." },
      { question: "Why do I need to convert between number bases?", answer: "Number base conversion is essential in computer science and programming. Binary is used for low-level operations, hexadecimal for memory addresses and colors, and decimal for everyday calculations." },
      { question: "Can I enter negative numbers?", answer: "Yes. You can enter negative numbers in any base, and the tool will convert them correctly to all other bases." },
      { question: "What's the maximum number size?", answer: "The tool can handle very large numbers — up to the safe integer limit of JavaScript (approximately 9 × 10^15). This is sufficient for most programming and educational use cases." }
    ]
  },
  {
    id: "roman-numerals",
    name: "Roman Numeral Converter",
    description:
      "Convert between Roman numerals and Arabic numbers in both directions.",
    category: "converter",
    icon: "🏛️",
    path: "/tools/roman-numerals",
    seoTitle: "Free Roman Numeral Converter - Convert Roman to Arabic Numbers Online",
    seoDescription: "Convert Roman numerals to Arabic numbers and vice versa instantly. Free online Roman numeral converter. Supports numbers 1-3,999,999.",
    seoKeywords: [
      "roman numeral converter", "roman to arabic converter",
      "arabic to roman numeral converter", "roman numeral calculator",
      "convert roman numerals", "roman numeral to number",
      "roman numeral converter online", "free roman numeral tool",
      "roman numbers converter", "what is this roman numeral"
    ],
    howToUse: [
      "Enter a Roman numeral (like XIV) to convert it to an Arabic number.",
      "Or enter an Arabic number (like 2024) to convert it to Roman numerals.",
      "View the conversion result instantly.",
      "Use it for dates, clock faces, outline numbering, or historical research."
    ],
    faq: [
      { question: "What are Roman numerals?", answer: "Roman numerals are a numeral system originating in ancient Rome, using combinations of letters: I (1), V (5), X (10), L (50), C (100), D (500), and M (1000)." },
      { question: "What is the largest number this converter handles?", answer: "This converter supports numbers from 1 to 3,999,999. Standard Roman numerals go up to 3,999, and this tool extends that with overline notation for larger numbers." },
      { question: "How do Roman numerals work?", answer: "Roman numerals are read left to right, with values added together. When a smaller numeral appears before a larger one, it's subtracted (e.g., IV = 4, IX = 9, XL = 40)." },
      { question: "Where are Roman numerals used today?", answer: "Roman numerals are still used for clock faces, movie copyright dates, book chapters, monarch numbering (Queen Elizabeth II), Super Bowl numbering, and formal outline structures." }
    ]
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
    seoTitle: "Free HTML Entity Encoder/Decoder - Encode Special Characters Online",
    seoDescription: "Encode text to HTML entities or decode HTML entities back to readable text. Free online HTML entity encoder/decoder for web developers.",
    seoKeywords: [
      "html entity encoder", "html entity decoder", "encode html entities",
      "decode html entities", "html special characters", "html encoding",
      "html entity converter", "escape html online",
      "free html entity encoder", "html encode decode online"
    ],
    howToUse: [
      "Paste your text with special characters or HTML entities into the input field.",
      "Click 'Encode' to convert special characters to HTML entities.",
      "Click 'Decode' to convert HTML entities back to readable characters.",
      "Copy the result for use in your HTML, templates, or web content."
    ],
    faq: [
      { question: "What are HTML entities?", answer: "HTML entities are special codes used to display reserved characters in HTML. For example, < is &lt;, > is &gt;, and & is &amp;. They prevent the browser from interpreting these characters as HTML tags." },
      { question: "When should I encode HTML entities?", answer: "You should encode HTML entities whenever you need to display special characters in web pages without the browser interpreting them as markup. This is essential for displaying code snippets, mathematical symbols, or text containing angle brackets." },
      { question: "What characters are encoded?", answer: "The tool encodes reserved HTML characters: less-than, greater-than, ampersand, double quote, and single quote. It also handles common symbols like copyright, registered trademark, euro, and pound signs." },
      { question: "Does encoding affect how the page looks?", answer: "No. Encoded entities render exactly the same as the original characters in the browser. The encoding only affects the source code, not the visual output." }
    ]
  },
  {
    id: "json-to-csv",
    name: "JSON to CSV Converter",
    description:
      "Convert JSON data to CSV format for spreadsheets and databases.",
    category: "converter",
    icon: "📊",
    path: "/tools/json-to-csv",
    seoTitle: "Free JSON to CSV Converter - Convert JSON to Spreadsheet Format",
    seoDescription: "Convert JSON arrays to CSV format for easy import into Excel, Google Sheets, or databases. Free online JSON to CSV converter. No signup required.",
    seoKeywords: [
      "json to csv converter", "convert json to csv", "json to csv online",
      "json to excel converter", "json to spreadsheet", "export json to csv",
      "json to csv free", "online json csv converter",
      "json to csv tool", "convert api data to csv"
    ],
    howToUse: [
      "Paste your JSON array data into the input field.",
      "Click 'Convert' to transform the JSON into CSV format.",
      "Preview the CSV output and verify the column alignment.",
      "Copy the CSV data to paste into Excel, Google Sheets, or save as a .csv file."
    ],
    faq: [
      { question: "What format should my JSON be in?", answer: "Your JSON should be an array of objects where each object represents a row. For example: [{\"name\":\"John\",\"age\":30},{\"name\":\"Jane\",\"age\":25}]. Nested objects are flattened into columns." },
      { question: "Can I convert nested JSON to CSV?", answer: "Yes. Nested objects and arrays are automatically flattened. Nested keys are joined with dots (e.g., 'address.city' becomes a column name) to create a flat CSV structure." },
      { question: "What delimiter does the CSV use?", answer: "The converter uses commas as delimiters by default. If your data contains commas, values are properly quoted to prevent formatting issues." },
      { question: "Can I use this with API data?", answer: "Yes. If your API returns JSON array data, simply copy the response and paste it into the converter. This is commonly used to export API results to spreadsheets for analysis." }
    ]
  },
  {
    id: "csv-to-json",
    name: "CSV to JSON Converter",
    description:
      "Convert CSV data to JSON format for APIs and web applications.",
    category: "converter",
    icon: "📋",
    path: "/tools/csv-to-json",
    seoTitle: "Free CSV to JSON Converter - Convert CSV Data to JSON Format",
    seoDescription: "Convert CSV data to JSON format for APIs, web apps, and databases. Free online CSV to JSON converter with formatted output. No signup required.",
    seoKeywords: [
      "csv to json converter", "convert csv to json", "csv to json online",
      "csv to json api", "import csv to json", "csv json converter",
      "csv to json free", "online csv json tool",
      "convert spreadsheet to json", "csv to json array"
    ],
    howToUse: [
      "Paste your CSV data into the input field (with or without headers).",
      "Click 'Convert' to transform the CSV into JSON format.",
      "View the formatted JSON output with proper structure.",
      "Copy the JSON data for use in your API, application, or database."
    ],
    faq: [
      { question: "Does the first row need to be headers?", answer: "The converter can work with or without headers. If the first row looks like column names, it will be used as JSON keys. Otherwise, numeric keys (0, 1, 2...) are generated." },
      { question: "What CSV formats are supported?", answer: "The tool supports standard CSV with comma delimiters, as well as semicolon-delimited and tab-separated values. It handles quoted fields containing commas and escaped characters." },
      { question: "Can I convert large CSV files?", answer: "Yes. The converter handles large CSV files efficiently. For very large files (millions of rows), consider processing in smaller batches to avoid browser memory limits." },
      { question: "What type of JSON output do I get?", answer: "The output is a JSON array of objects, where each object represents a row and each key-value pair represents a column. This format is directly usable with most APIs and JavaScript applications." }
    ]
  },
  {
    id: "image-to-base64",
    name: "Image to Base64",
    description:
      "Convert images to Base64 encoded strings for embedding in code.",
    category: "converter",
    icon: "🖼️",
    path: "/tools/image-to-base64",
    seoTitle: "Free Image to Base64 Converter - Encode Images to Data URIs Online",
    seoDescription: "Convert images (PNG, JPG, GIF, SVG) to Base64 encoded strings for embedding in CSS, HTML, or code. Free online image to Base64 converter.",
    seoKeywords: [
      "image to base64 converter", "image to base64 online",
      "encode image to base64", "image to data uri",
      "base64 image encoder", "convert image to base64 string",
      "free image base64 converter", "image to base64 tool",
      "svg to base64", "png to base64 converter"
    ],
    howToUse: [
      "Upload an image file (PNG, JPG, GIF, SVG, WebP) or drag and drop it into the upload area.",
      "View the Base64 encoded string generated instantly.",
      "Copy the full data URI (including prefix) for embedding in HTML or CSS.",
      "Copy just the Base64 string if you need to construct the data URI manually."
    ],
    faq: [
      { question: "What is Base64 image encoding?", answer: "Base64 image encoding converts an image file into a text string that can be embedded directly in HTML, CSS, or JavaScript. This eliminates the need for separate image files and HTTP requests." },
      { question: "What image formats are supported?", answer: "This tool supports PNG, JPG/JPEG, GIF, SVG, and WebP formats. The output preserves the original MIME type in the data URI prefix." },
      { question: "When should I embed images as Base64?", answer: "Base64 embedding is ideal for small images like icons, logos, and UI elements. It reduces HTTP requests and speeds up page loading. However, large images should remain as separate files for better caching." },
      { question: "How does Base64 affect file size?", answer: "Base64 encoding increases file size by approximately 33% compared to the original binary. This trade-off is usually worth it for small images since it eliminates a separate HTTP request." }
    ]
  },
  {
    id: "loan-calculator",
    name: "Loan Calculator",
    description:
      "Calculate monthly payments, total interest, and amortization for loans.",
    category: "calculator",
    icon: "🏦",
    path: "/tools/loan-calculator",
    seoTitle: "Free Loan Calculator - Monthly Payment & Interest Calculator Online",
    seoDescription: "Calculate monthly loan payments, total interest, and amortization schedule. Free online loan calculator for personal loans, auto loans, and more.",
    seoKeywords: [
      "loan calculator", "monthly payment calculator", "loan payment calculator",
      "calculate loan payments", "loan amortization calculator",
      "personal loan calculator", "auto loan calculator",
      "loan interest calculator", "free loan calculator online",
      "how much is my monthly loan payment"
    ],
    howToUse: [
      "Enter the loan amount (principal) you want to borrow.",
      "Enter the annual interest rate and loan term in years.",
      "Click 'Calculate' to see your monthly payment, total interest, and total cost.",
      "Review the amortization schedule to see how each payment is split between principal and interest."
    ],
    faq: [
      { question: "How is the monthly loan payment calculated?", answer: "Monthly payment = P × (r(1+r)^n) / ((1+r)^n - 1), where P is the principal, r is the monthly interest rate, and n is the number of payments. This is the standard amortization formula used by banks." },
      { question: "What is an amortization schedule?", answer: "An amortization schedule is a table showing each payment over the loan term, broken down into principal and interest portions. Early payments are mostly interest; later payments are mostly principal." },
      { question: "Does this calculator include taxes and insurance?", answer: "This calculator focuses on principal and interest payments. For mortgages, you would need to add property taxes and insurance separately to get your full monthly payment." },
      { question: "Can I use this for any type of loan?", answer: "Yes. This calculator works for any fixed-rate loan including personal loans, auto loans, student loans, and business loans. Just enter your specific loan terms." }
    ]
  },
  {
    id: "mortgage-calculator",
    name: "Mortgage Calculator",
    description:
      "Estimate your monthly mortgage payment with taxes and insurance.",
    category: "calculator",
    icon: "🏠",
    path: "/tools/mortgage-calculator",
    seoTitle: "Free Mortgage Calculator - Monthly Payment with Taxes & Insurance",
    seoDescription: "Estimate your monthly mortgage payment including principal, interest, property taxes, and insurance. Free online mortgage calculator for home buyers.",
    seoKeywords: [
      "mortgage calculator", "monthly mortgage payment calculator",
      "mortgage payment estimator", "home loan calculator",
      "mortgage calculator with taxes", "mortgage calculator with insurance",
      "free mortgage calculator", "house payment calculator",
      "mortgage payment calculator online", "how much house can i afford"
    ],
    howToUse: [
      "Enter the home price and your down payment amount or percentage.",
      "Enter the interest rate and loan term (typically 15 or 30 years).",
      "Add property tax and homeowners insurance estimates for a complete picture.",
      "View your total monthly mortgage payment broken down by component."
    ],
    faq: [
      { question: "What is included in a mortgage payment?", answer: "A full mortgage payment (PITI) includes Principal (loan repayment), Interest (cost of borrowing), Taxes (property taxes), and Insurance (homeowners insurance). Some mortgages also include PMI (private mortgage insurance)." },
      { question: "How much down payment do I need?", answer: "Conventional loans typically require 20% down to avoid PMI. FHA loans allow as low as 3.5% down. VA loans and USDA loans may allow 0% down for eligible borrowers." },
      { question: "What is PMI and when is it required?", answer: "PMI (Private Mortgage Insurance) is required when your down payment is less than 20% of the home price. It protects the lender and typically costs 0.3-1.5% of the loan amount annually." },
      { question: "How accurate is this mortgage estimate?", answer: "This calculator provides a good estimate based on the information you provide. Actual payments may vary based on your credit score, lender fees, specific insurance costs, and local property tax rates." }
    ]
  },
  {
    id: "calorie-calculator",
    name: "Calorie Calculator",
    description:
      "Estimate daily calorie needs based on age, weight, height, and activity.",
    category: "calculator",
    icon: "🔥",
    path: "/tools/calorie-calculator",
    seoTitle: "Free Calorie Calculator - Daily Calorie Needs & TDEE Estimator",
    seoDescription: "Calculate your daily calorie needs based on age, weight, height, gender, and activity level. Free TDEE calculator for weight loss, maintenance, or gain goals.",
    seoKeywords: [
      "calorie calculator", "daily calorie needs calculator",
      "tdee calculator", "calorie intake calculator",
      "calculate daily calories", "calorie needs estimator",
      "how many calories should i eat", "calorie calculator for weight loss",
      "free calorie calculator", "daily calorie intake calculator"
    ],
    howToUse: [
      "Enter your age, gender, weight, and height.",
      "Select your activity level from sedentary to very active.",
      "Choose your goal: lose weight, maintain, or gain weight.",
      "View your recommended daily calorie intake and macronutrient breakdown."
    ],
    faq: [
      { question: "What is TDEE?", answer: "TDEE (Total Daily Energy Expenditure) is the total number of calories your body burns in a day, including your basal metabolic rate (BMR) and physical activity. It's the foundation for determining your calorie needs." },
      { question: "How many calories should I eat to lose weight?", answer: "A safe weight loss rate is 0.5-1 pound per week, which requires a daily deficit of 250-500 calories from your TDEE. Never go below 1,200 calories per day for women or 1,500 for men without medical supervision." },
      { question: "How accurate is this calculator?", answer: "This calculator uses the Mifflin-St Jeor equation, which is considered one of the most accurate BMR formulas. However, individual metabolism varies, so use this as a starting point and adjust based on your results." },
      { question: "Does this calculator account for muscle mass?", answer: "This calculator uses standard formulas that estimate BMR based on weight, height, age, and gender. For more precise results that account for body composition, a DEXA scan or professional assessment is recommended." }
    ]
  },
  {
    id: "roi-calculator",
    name: "ROI Calculator",
    description:
      "Calculate return on investment (ROI) percentage and profit amount.",
    category: "calculator",
    icon: "📈",
    path: "/tools/roi-calculator",
    seoTitle: "Free ROI Calculator - Return on Investment Percentage Calculator",
    seoDescription: "Calculate your return on investment (ROI) percentage and profit. Compare investment options and analyze business profitability. Free online ROI calculator.",
    seoKeywords: [
      "roi calculator", "return on investment calculator",
      "calculate roi percentage", "investment return calculator",
      "profit calculator", "business roi calculator",
      "free roi calculator", "roi percentage calculator",
      "return on investment tool", "calculate investment returns"
    ],
    howToUse: [
      "Enter your initial investment amount (cost).",
      "Enter the final value or return amount.",
      "Click 'Calculate' to see your ROI percentage and net profit.",
      "Use the result to compare investment opportunities or evaluate business decisions."
    ],
    faq: [
      { question: "What is ROI?", answer: "ROI (Return on Investment) measures the profitability of an investment. It's calculated as ((final value - initial cost) ÷ initial cost) × 100, expressed as a percentage." },
      { question: "What is a good ROI?", answer: "A 'good' ROI depends on the investment type and risk level. Stock market investments historically average 7-10% annually. Real estate typically targets 8-12%. For business projects, companies often require 15-20% minimum ROI." },
      { question: "Can ROI be negative?", answer: "Yes. A negative ROI means you lost money on the investment. For example, if you invested $1,000 and got back $800, your ROI is -20%." },
      { question: "Does this calculator account for time?", answer: "This calculator shows simple ROI. For comparing investments over different time periods, you should also consider annualized ROI, which accounts for the duration of the investment." }
    ]
  },
  {
    id: "compound-interest",
    name: "Compound Interest Calculator",
    description:
      "See how your money grows over time with compound interest calculations.",
    category: "calculator",
    icon: "💰",
    path: "/tools/compound-interest",
    seoTitle: "Free Compound Interest Calculator - See How Your Money Grows",
    seoDescription: "Calculate compound interest with customizable principal, rate, time, and compounding frequency. Free online compound interest calculator with growth visualization.",
    seoKeywords: [
      "compound interest calculator", "calculate compound interest",
      "compound interest growth calculator", "savings calculator",
      "investment growth calculator", "compound interest formula",
      "free compound interest calculator", "compound interest online",
      "how much will my savings grow", "compound interest estimator"
    ],
    howToUse: [
      "Enter your initial principal (starting investment amount).",
      "Enter the annual interest rate and investment duration in years.",
      "Choose the compounding frequency (daily, monthly, quarterly, or annually).",
      "Add regular contributions to see how they accelerate your growth."
    ],
    faq: [
      { question: "What is compound interest?", answer: "Compound interest is interest calculated on both the initial principal and accumulated interest from previous periods. It's often called 'interest on interest' and is the most powerful force in growing wealth over time." },
      { question: "How often should interest compound?", answer: "More frequent compounding produces higher returns. Daily compounding yields slightly more than monthly, which yields more than quarterly or annually. The difference is small for short periods but significant over decades." },
      { question: "What is the Rule of 72?", answer: "The Rule of 72 is a quick way to estimate how long it takes for an investment to double. Divide 72 by your annual interest rate. For example, at 8% interest, your money doubles in approximately 9 years (72÷8=9)." },
      { question: "How do regular contributions affect compound interest?", answer: "Regular contributions dramatically increase your total growth. Adding even small amounts monthly can multiply your final balance. This is the core principle behind retirement savings plans like 401(k)s." }
    ]
  },
  {
    id: "income-tax-calculator",
    name: "Income Tax Calculator",
    description:
      "Estimate your take-home pay after income tax deductions.",
    category: "calculator",
    icon: "💵",
    path: "/tools/income-tax-calculator",
    seoTitle: "Free Income Tax Calculator - Estimate Take-Home Pay After Tax",
    seoDescription: "Estimate your take-home pay after federal and state income tax. Free online income tax calculator with detailed breakdown of deductions.",
    seoKeywords: [
      "income tax calculator", "take home pay calculator",
      "salary after tax calculator", "net pay calculator",
      "income tax estimator", "calculate income tax online",
      "free income tax calculator", "paycheck calculator",
      "salary calculator after tax", "how much tax will i pay"
    ],
    howToUse: [
      "Enter your gross annual salary or hourly wage.",
      "Select your filing status and state.",
      "Add any deductions or additional income sources.",
      "View your estimated take-home pay with a detailed tax breakdown."
    ],
    faq: [
      { question: "How accurate is this income tax estimate?", answer: "This calculator provides a general estimate based on current tax brackets and standard deductions. Actual taxes may vary based on specific deductions, credits, and local taxes not included in this calculation." },
      { question: "What deductions are included?", answer: "The calculator includes standard federal income tax deductions based on your filing status. It does not include state-specific deductions, local taxes, or itemized deductions." },
      { question: "Does this calculator handle self-employment income?", answer: "This calculator is designed for W-2 employees. Self-employed individuals should account for additional self-employment tax (Social Security and Medicare) which is approximately 15.3%." },
      { question: "How often are tax rates updated?", answer: "Tax brackets and rates are updated annually based on IRS guidelines. This calculator uses the most current tax year data available." }
    ]
  },
  {
    id: "tip-calculator",
    name: "Tip Calculator",
    description:
      "Calculate tip amount, split the bill, and figure out per-person cost.",
    category: "calculator",
    icon: "💳",
    path: "/tools/tip-calculator",
    seoTitle: "Free Tip Calculator - Calculate Tip & Split the Bill Instantly",
    seoDescription: "Calculate tip amount, split the bill among friends, and see per-person cost. Free online tip calculator for restaurants and services.",
    seoKeywords: [
      "tip calculator", "gratuity calculator", "calculate tip",
      "split the bill calculator", "restaurant tip calculator",
      "tip percentage calculator", "how much to tip",
      "free tip calculator", "tip and split calculator",
      "bill splitter with tip", "tip calculator online"
    ],
    howToUse: [
      "Enter the total bill amount.",
      "Select your desired tip percentage (15%, 18%, 20%, or custom).",
      "Enter the number of people splitting the bill.",
      "View the tip amount, total with tip, and per-person cost instantly."
    ],
    faq: [
      { question: "What is the standard tip percentage?", answer: "In the United States, the standard tip at restaurants is 15-20% for good service. 18-20% is common for sit-down restaurants, 15% for casual dining, and 10% or less for poor service." },
      { question: "Should I tip on the pre-tax or post-tax amount?", answer: "It's customary to tip on the pre-tax amount (the subtotal before sales tax is added). However, many people tip on the total including tax for simplicity." },
      { question: "How do I split a tip among a group?", answer: "Calculate the total tip amount based on your chosen percentage, then divide by the number of people. This calculator does both steps automatically." },
      { question: "When should I not leave a tip?", answer: "Tips are generally expected for sit-down restaurant service, bars, taxis, and personal services. You typically don't need to tip at fast-food restaurants, self-service establishments, or when a mandatory service charge is already included." }
    ]
  },
  {
    id: "discount-calculator",
    name: "Discount Calculator",
    description:
      "Calculate discounted price, savings amount, and discount percentage.",
    category: "calculator",
    icon: "🏷️",
    path: "/tools/discount-calculator",
    seoTitle: "Free Discount Calculator - Calculate Sale Price & Savings Online",
    seoDescription: "Calculate discounted price, savings amount, and discount percentage. Free online discount calculator for sales, coupons, and promotions.",
    seoKeywords: [
      "discount calculator", "sale price calculator", "calculate discount",
      "discount percentage calculator", "savings calculator",
      "price after discount", "discount calculator online",
      "free discount calculator", "how much will i save",
      "calculate percentage off"
    ],
    howToUse: [
      "Enter the original price of the item.",
      "Enter the discount percentage or the discount amount.",
      "View the final sale price and your total savings instantly.",
      "Use it to compare deals and determine the best value."
    ],
    faq: [
      { question: "How do I calculate a discount?", answer: "Discounted price = Original price × (1 - Discount percentage ÷ 100). For example, a $100 item with 25% off costs $100 × (1 - 0.25) = $75." },
      { question: "How do I find the discount percentage?", answer: "Discount percentage = ((Original price - Sale price)  Original price) × 100. For example, if an item goes from $80 to $60, the discount is ((80-60)/80) × 100 = 25%." },
      { question: "Can I stack multiple discounts?", answer: "Multiple percentage discounts are applied sequentially, not added together. For example, 20% off followed by 10% off means: first reduce by 20%, then reduce the new price by 10%. The total discount is 28%, not 30%." },
      { question: "Does this calculator work with tax?", answer: "This calculator focuses on the discount amount. To get the final price with tax, multiply the discounted price by (1 + tax rate ÷ 100)." }
    ]
  },
  {
    id: "pregnancy-calculator",
    name: "Pregnancy Due Date Calculator",
    description:
      "Estimate your due date based on last menstrual period with trimester info.",
    category: "calculator",
    icon: "👶",
    path: "/tools/pregnancy-calculator",
    seoTitle: "Free Pregnancy Due Date Calculator - Estimate Your Baby's Due Date",
    seoDescription: "Calculate your estimated due date based on your last menstrual period. See trimester breakdown and key pregnancy milestones. Free online pregnancy calculator.",
    seoKeywords: [
      "pregnancy calculator", "due date calculator", "baby due date",
      "pregnancy due date estimator", "when is my baby due",
      "pregnancy week calculator", "trimester calculator",
      "free pregnancy calculator", "due date by lmp",
      "pregnancy timeline calculator"
    ],
    howToUse: [
      "Enter the first day of your last menstrual period (LMP).",
      "Click 'Calculate' to see your estimated due date.",
      "View your current week of pregnancy and trimester information.",
      "See key milestones and important dates throughout your pregnancy."
    ],
    faq: [
      { question: "How is the due date calculated?", answer: "The due date is calculated using Naegele's rule: add 280 days (40 weeks) to the first day of your last menstrual period. This is the standard method used by healthcare providers worldwide." },
      { question: "How accurate is the due date?", answer: "Only about 5% of babies are born on their exact due date. Most deliveries occur between 38-42 weeks. The due date is an estimate that helps track pregnancy progress and plan care." },
      { question: "What are the three trimesters?", answer: "First trimester: weeks 1-12 (organ development). Second trimester: weeks 13-26 (growth and movement). Third trimester: weeks 27-40 (final growth and preparation for birth)." },
      { question: "Can I use this if I know my conception date instead?", answer: "Yes. If you know your conception date, add 266 days (38 weeks) instead of 280 days. The LMP method is more commonly used because conception dates are harder to pinpoint." }
    ]
  },
  {
    id: "random-number-generator",
    name: "Random Number Generator",
    description:
      "Generate random numbers within a specified range with customizable options.",
    category: "calculator",
    icon: "🎲",
    path: "/tools/random-number-generator",
    seoTitle: "Free Random Number Generator - Generate Random Numbers Online",
    seoDescription: "Generate random numbers within any range. Choose quantity, allow duplicates, and sort results. Free online random number generator.",
    seoKeywords: [
      "random number generator", "generate random numbers",
      "random number picker", "random number between",
      "free random number generator", "rng online",
      "random number tool", "generate random integer",
      "random number generator online free", "pick a random number"
    ],
    howToUse: [
      "Set the minimum and maximum range for your random numbers.",
      "Choose how many numbers you want to generate.",
      "Optionally allow or disallow duplicate numbers.",
      "Click 'Generate' and copy the results."
    ],
    faq: [
      { question: "How are random numbers generated?", answer: "This tool uses the browser's cryptographically secure random number generator (crypto.getRandomValues) for true randomness, not predictable pseudo-random algorithms." },
      { question: "What is the difference between true random and pseudo-random?", answer: "True random numbers are generated from physical phenomena (like electronic noise) and are completely unpredictable. Pseudo-random numbers use mathematical formulas that can theoretically be predicted if you know the seed value." },
      { question: "Can I generate unique random numbers without duplicates?", answer: "Yes. Enable the 'no duplicates' option and the tool will ensure each generated number is unique within your specified range." },
      { question: "What is the maximum range I can use?", answer: "You can generate random numbers within any reasonable range. Very large ranges with 'no duplicates' enabled may be limited by the number of unique values available in that range." }
    ]
  },
  {
    id: "zodiac-sign",
    name: "Zodiac Sign Finder",
    description:
      "Find your zodiac sign by birth date with traits and compatibility info.",
    category: "text",
    icon: "⭐",
    path: "/tools/zodiac-sign",
    seoTitle: "Free Zodiac Sign Finder - Find Your Star Sign by Birth Date",
    seoDescription: "Find your zodiac sign by entering your birth date. Learn about your star sign traits, strengths, weaknesses, and compatibility with other signs.",
    seoKeywords: [
      "zodiac sign finder", "what is my zodiac sign", "star sign calculator",
      "find my zodiac sign", "zodiac sign by birthday", "astrology sign finder",
      "zodiac traits", "sun sign calculator",
      "free zodiac sign finder", "what star sign am i"
    ],
    howToUse: [
      "Enter your birth date using the date picker.",
      "View your zodiac sign with its symbol and date range.",
      "Read about your sign's personality traits, strengths, and weaknesses.",
      "Check compatibility with other zodiac signs."
    ],
    faq: [
      { question: "What are the 12 zodiac signs?", answer: "The 12 zodiac signs are: Aries, Taurus, Gemini, Cancer, Leo, Virgo, Libra, Scorpio, Sagittarius, Capricorn, Aquarius, and Pisces. Each sign covers approximately one month of the year." },
      { question: "How do I know which zodiac sign I am?", answer: "Your zodiac sign (sun sign) is determined by your birth date. Enter your birthday in this tool and it will instantly tell you your sign along with detailed information." },
      { question: "What if my birthday is on a cusp?", answer: "If your birthday falls on the transition date between two signs, the exact time and location of your birth determine your sign. This tool uses the standard date ranges; for precise determination, consult an astrological chart." },
      { question: "Are zodiac signs based on science?", answer: "Zodiac signs are part of astrology, which is considered a pseudoscience. While many people find meaning and entertainment in zodiac traits, there is no scientific evidence supporting astrological predictions." }
    ]
  },
  {
    id: "random-name-generator",
    name: "Random Name Generator",
    description:
      "Generate random names for characters, profiles, or testing.",
    category: "text",
    icon: "👤",
    path: "/tools/random-name-generator",
    seoTitle: "Free Random Name Generator - Generate Random Names Online",
    seoDescription: "Generate random first and last names for characters, game profiles, testing, or brainstorming. Choose gender and quantity. Free online name generator.",
    seoKeywords: [
      "random name generator", "generate random names",
      "random first name generator", "random last name generator",
      "character name generator", "fake name generator",
      "free name generator", "random names online",
      "name generator tool", "random person name generator"
    ],
    howToUse: [
      "Choose the gender: male, female, or both.",
      "Set the number of names you want to generate.",
      "Click 'Generate' to create random names instantly.",
      "Copy any name for use in your project, story, or testing data."
    ],
    faq: [
      { question: "Where do the names come from?", answer: "The names are drawn from a curated database of common first names and surnames from various cultures and backgrounds. Combinations are generated randomly to create unique name pairings." },
      { question: "Can I generate names for specific cultures?", answer: "This tool generates a diverse mix of names from various cultural backgrounds. For culture-specific names, you may want to use a specialized name generator." },
      { question: "Are these real people's names?", answer: "The first names and last names are real names, but the combinations are generated randomly. They do not correspond to specific real individuals." },
      { question: "What can I use these random names for?", answer: "Common uses include: character names for writing, test data for software development, placeholder names for designs, game character names, pen names, and brainstorming inspiration." }
    ]
  },
  {
    id: "fancy-text-generator",
    name: "Fancy Text Generator",
    description:
      "Convert text to fancy Unicode fonts for social media bios and posts.",
    category: "text",
    icon: "✨",
    path: "/tools/fancy-text-generator",
    seoTitle: "Free Fancy Text Generator - Stylish Unicode Fonts for Social Media",
    seoDescription: "Convert text to fancy Unicode fonts and stylish text for Instagram, Twitter, TikTok, and Facebook bios. Free online fancy text generator.",
    seoKeywords: [
      "fancy text generator", "stylish text generator", "unicode font generator",
      "cool text for instagram", "fancy font generator", "aesthetic text",
      "text style generator", "fancy text for social media",
      "free fancy text generator", "instagram bio font generator"
    ],
    howToUse: [
      "Enter your text in the input field.",
      "View your text converted to multiple fancy Unicode font styles.",
      "Click any style to copy it to your clipboard.",
      "Paste the fancy text into your social media bio, post, or message."
    ],
    faq: [
      { question: "How does the fancy text generator work?", answer: "The tool maps each letter of your text to special Unicode characters that look like styled versions of regular letters. These aren't actual fonts — they're mathematical alphanumeric symbols that most platforms display correctly." },
      { question: "Will fancy text work on all social media platforms?", answer: "Fancy Unicode text works on most platforms including Instagram, Twitter, TikTok, Facebook, and WhatsApp. However, some older devices may not render all Unicode characters correctly." },
      { question: "Does fancy text affect accessibility?", answer: "Yes. Screen readers may not read fancy Unicode text correctly, as they interpret the mathematical symbols rather than the intended letters. It's best used sparingly for emphasis rather than for important information." },
      { question: "Can I use fancy text in emails or websites?", answer: "You can use fancy Unicode text in emails and websites, but rendering depends on the recipient's device and email client. It's safest for social media platforms where Unicode support is consistent." }
    ]
  },
  {
    id: "hashtag-generator",
    name: "Hashtag Generator",
    description:
      "Generate relevant hashtags for Instagram, Twitter, and TikTok.",
    category: "text",
    icon: "#️⃣",
    path: "/tools/hashtag-generator",
    seoTitle: "Free Hashtag Generator - Generate Hashtags for Instagram & TikTok",
    seoDescription: "Generate relevant hashtags for Instagram, Twitter, TikTok, and Facebook based on your topic or keywords. Free online hashtag generator to boost your reach.",
    seoKeywords: [
      "hashtag generator", "instagram hashtag generator",
      "tiktok hashtag generator", "twitter hashtag generator",
      "generate hashtags", "hashtag finder", "hashtag tool",
      "free hashtag generator", "best hashtags for instagram",
      "hashtag generator online"
    ],
    howToUse: [
      "Enter your topic, keyword, or describe your content.",
      "View a list of relevant and trending hashtags generated for your topic.",
      "Copy all hashtags or select specific ones to use.",
      "Paste the hashtags into your social media post to increase discoverability."
    ],
    faq: [
      { question: "How many hashtags should I use on Instagram?", answer: "Instagram allows up to 30 hashtags per post. Research suggests 15-20 well-chosen hashtags perform best. Use a mix of popular, niche, and branded hashtags for optimal reach." },
      { question: "How many hashtags should I use on TikTok?", answer: "TikTok recommends 3-5 hashtags per video. Use a mix of trending hashtags and niche-specific tags to maximize discoverability without looking spammy." },
      { question: "How does this hashtag generator work?", answer: "The generator analyzes your input keywords and suggests relevant hashtags based on topic matching, trending patterns, and common hashtag combinations used in your niche." },
      { question: "Can I use the same hashtags for every post?", answer: "It's better to vary your hashtags between posts. Instagram may flag accounts that use identical hashtag sets repeatedly as spam. Rotate between relevant hashtag groups for best results." }
    ]
  },
  {
    id: "youtube-thumbnail",
    name: "YouTube Thumbnail Size Tool",
    description:
      "YouTube thumbnail size guide and preview tool with best practice tips.",
    category: "developer",
    icon: "🎬",
    path: "/tools/youtube-thumbnail",
    seoTitle: "YouTube Thumbnail Size Guide - Best Dimensions & Tips for 2026",
    seoDescription: "Complete guide to YouTube thumbnail dimensions, file size limits, and best practices. Free thumbnail size checker and preview tool for YouTube creators.",
    seoKeywords: [
      "youtube thumbnail size", "youtube thumbnail dimensions",
      "youtube thumbnail guide", "best youtube thumbnail size",
      "youtube thumbnail maker", "youtube thumbnail template",
      "youtube thumbnail specs", "youtube thumbnail best practices",
      "youtube thumbnail checker", "youtube thumbnail tool"
    ],
    howToUse: [
      "Review the recommended YouTube thumbnail dimensions and specifications.",
      "Use the preview tool to see how your thumbnail will look on different devices.",
      "Follow the best practice tips for creating clickable thumbnails.",
      "Ensure your image meets YouTube's requirements before uploading."
    ],
    faq: [
      { question: "What is the ideal YouTube thumbnail size?", answer: "The recommended YouTube thumbnail size is 1280 × 720 pixels (16:9 aspect ratio), with a minimum width of 640 pixels. The file should be under 2MB and in JPG, PNG, GIF, or BMP format." },
      { question: "What makes a good YouTube thumbnail?", answer: "Good thumbnails use high-contrast colors, readable text (large fonts), expressive faces, and clear visual hierarchy. The thumbnail should be understandable even at small sizes on mobile devices." },
      { question: "Can I change a thumbnail after uploading a video?", answer: "Yes. You can change your YouTube thumbnail at any time by going to YouTube Studio, selecting the video, clicking 'Edit', and uploading a new thumbnail image." },
      { question: "Do thumbnails affect video performance?", answer: "Yes. Thumbnails significantly impact click-through rate (CTR), which is one of the most important ranking factors on YouTube. A compelling thumbnail can dramatically increase views." }
    ]
  },
  {
    id: "perpetual-calendar",
    name: "Perpetual Calendar",
    description:
      "Interactive calendar with world holidays, week numbers, and historical events on any date.",
    category: "calculator",
    icon: "📅",
    path: "/tools/perpetual-calendar",
    seoTitle: "Free Perpetual Calendar - Any Date, World Holidays & Week Numbers",
    seoDescription: "Interactive perpetual calendar for any date. Check world holidays, week numbers, day of the week, and historical events. Free online calendar tool.",
    seoKeywords: [
      "perpetual calendar", "online calendar", "calendar for any date",
      "world holiday calendar", "week number calendar",
      "what day of the week", "calendar lookup tool",
      "free perpetual calendar", "interactive calendar online",
      "historical events calendar"
    ],
    howToUse: [
      "Navigate to any year and month using the calendar controls.",
      "Click any date to see detailed information including day of week and week number.",
      "Highlighted dates show world holidays and observances.",
      "Use the search feature to find specific dates or holidays."
    ],
    faq: [
      { question: "What is a perpetual calendar?", answer: "A perpetual calendar is a calendar that can display any date across any year, past or future. Unlike annual calendars that show only one year, a perpetual calendar lets you explore dates across centuries." },
      { question: "What holidays does this calendar show?", answer: "The calendar includes major international holidays, national observances from various countries, and cultural celebrations. Holiday coverage continues to expand." },
      { question: "Can I find what day of the week a historical date was?", answer: "Yes. Navigate to any date in history and the calendar will show you exactly what day of the week it was. This is useful for historical research and genealogy." },
      { question: "How are week numbers calculated?", answer: "Week numbers follow the ISO 8601 standard, where week 1 is the week containing the first Thursday of the year. This is the international standard used in most countries." }
    ]
  },
  {
    id: "md5-generator",
    name: "MD5 Hash Generator",
    description:
      "Generate MD5 hash from any text input instantly. Free online MD5 generator.",
    category: "developer",
    icon: "🔒",
    path: "/tools/md5-generator",
    seoTitle: "Free MD5 Hash Generator - Generate MD5 Checksum Online",
    seoDescription: "Generate MD5 hash checksums from any text input instantly. Free online MD5 generator for file verification and data integrity checks.",
    seoKeywords: [
      "md5 generator", "md5 hash generator", "generate md5 hash",
      "md5 checksum generator", "md5 calculator online",
      "text to md5", "md5 hash online", "free md5 generator",
      "md5 hash tool", "online md5 calculator"
    ],
    howToUse: [
      "Enter the text you want to generate an MD5 hash for.",
      "View the MD5 hash digest generated instantly.",
      "Click the hash to copy it to your clipboard.",
      "Use the hash for file verification, data integrity checks, or legacy system compatibility."
    ],
    faq: [
      { question: "What is an MD5 hash?", answer: "MD5 (Message-Digest Algorithm 5) produces a 128-bit (32-character hexadecimal) hash value from input data. It's commonly used for file integrity verification and checksums." },
      { question: "Is MD5 still secure?", answer: "MD5 is no longer considered cryptographically secure due to collision vulnerabilities discovered in 2004. It should not be used for password hashing or security-critical applications. Use SHA-256 instead for security purposes." },
      { question: "What is MD5 still used for?", answer: "MD5 is still useful for non-security purposes like file checksums, detecting accidental data corruption, and legacy system compatibility where MD5 hashes are already in use." },
      { question: "Can I use MD5 for password storage?", answer: "No. MD5 should never be used for password storage. Use bcrypt, Argon2, or PBKDF2 instead. MD5 is too fast and vulnerable to rainbow table and brute force attacks." }
    ]
  },
  {
    id: "qr-code-generator",
    name: "QR Code Generator",
    description:
      "Generate QR codes from texts, URLs, emails, or any string. Download as PNG.",
    category: "developer",
    icon: "📱",
    path: "/tools/qr-code-generator",
    seoTitle: "Free QR Code Generator - Create QR Codes from Text, URL, Email",
    seoDescription: "Generate QR codes from URLs, text, emails, phone numbers, or WiFi credentials. Download as PNG for print or digital use. Free online QR code generator.",
    seoKeywords: [
      "qr code generator", "create qr code", "qr code maker",
      "free qr code generator", "qr code from url", "qr code from text",
      "qr code generator online", "generate qr code free",
      "qr code creator", "download qr code"
    ],
    howToUse: [
      "Select the type of content: URL, text, email, phone number, or WiFi.",
      "Enter your content in the appropriate fields.",
      "View the QR code generated instantly with a live preview.",
      "Download the QR code as a PNG image for printing or digital use."
    ],
    faq: [
      { question: "What can I encode in a QR code?", answer: "QR codes can encode URLs, plain text, email addresses, phone numbers, SMS messages, WiFi credentials, vCards (contact info), and more. The most common use is encoding website URLs." },
      { question: "How much data can a QR code hold?", answer: "QR codes can store up to 7,089 numeric digits, 4,296 alphanumeric characters, or 2,953 bytes of binary data. More data results in a denser, harder-to-scan code." },
      { question: "Do QR codes expire?", answer: "Static QR codes (like those generated by this tool) never expire. The encoded data is permanent. Dynamic QR codes that redirect to URLs can be changed or deactivated by the service provider." },
      { question: "What size should I print my QR code?", answer: "For reliable scanning, print QR codes at least 2 × 2 cm (0.8 × 0.8 inches). Larger sizes are better for scanning from a distance. Ensure high contrast between the code and background." }
    ]
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
    id: "book-of-answers",
    name: "Book of Answers",
    description:
      "A digital Book of Answers for fun decision-making and guidance. Focus on your question and receive a random, thoughtfully curated response.",
    category: "text",
    icon: "📖",
    path: "/tools/book-of-answers",
    seoTitle: "Book of Answers Online - Free Random Answer Generator for Guidance & Fun",
    seoDescription: "A digital Book of Answers for fun decision-making and psychological guidance. Close your eyes, focus on your question, then tap to reveal a random answer from 500+ curated responses. Free online oracle tool.",
    seoKeywords: [
      "book of answers", "book of answers online", "random answer generator",
      "decision maker tool", "free oracle tool", "what should i do tool",
      "random decision generator", "book of answers free online",
      "fun decision tool", "random yes or no generator"
    ],
    howToUse: [
      "Think of a question you'd like guidance on — it can be about anything.",
      "Close your eyes and hold the question in mind for 3–5 seconds.",
      "Click the book cover or press 'Open Your Answer' to reveal your answer.",
      "Read your answer with an open mind and see how it resonates with you.",
      "Click 'Ask Another Question' to reset and receive a new answer for a different question."
    ],
    faq: [
      { question: "How does the Book of Answers work?", answer: "The Book of Answers randomly selects one response from a curated collection of 500+ answers across five categories: affirmation, denial, suggestion, healing, and humor. The selection is purely random, giving each answer an equal chance of appearing." },
      { question: "Are the answers in the Book of Answers real?", answer: "The answers are thoughtfully curated short phrases designed to provide psychological comfort, inspiration, and perspective. They draw on the Barnum effect — vague but relatable statements that users can personally connect with and interpret for their own situations." },
      { question: "Is this Book of Answers free to use?", answer: "Yes, the Book of Answers is completely free with no limits. You can ask as many questions as you'd like. No signup or account is required." },
      { question: "Should I take the answers seriously?", answer: "The Book of Answers is designed as a fun, reflective tool. While the answers aren't meant to replace professional advice, many people find them helpful for breaking through decision paralysis, gaining a fresh perspective, or simply having a moment of mindful reflection." },
      { question: "Does this tool store my questions or answers?", answer: "No. Everything happens in your browser. Your questions, answers, and usage data are never stored, tracked, or sent anywhere. Your privacy is fully protected." }
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
    seoTitle: "Free AI Tools Directory - Best Free AI Tools for Writing, Images & Code",
    seoDescription: "Curated directory of the best free AI tools for writing, image generation, video editing, coding assistance, and more. Updated regularly with new AI tools.",
    seoKeywords: [
      "free ai tools", "ai tools directory", "best ai tools",
      "free ai writing tools", "free ai image generator",
      "ai coding tools", "ai tools list", "free ai tools online",
      "ai tools for students", "best free ai tools 2026"
    ],
    howToUse: [
      "Browse AI tools organized by category: writing, images, video, coding, audio, and productivity.",
      "Click any tool to see its details, features, and direct link.",
      "Use the filter to narrow down tools by category or use case.",
      "Bookmark this page for the latest additions to the free AI tools collection."
    ],
    faq: [
      { question: "Are all the tools in this directory really free?", answer: "Yes. Every tool listed in this directory offers a free tier or is completely free to use. Some tools may have premium features, but the free version provides substantial functionality." },
      { question: "How often is the directory updated?", answer: "The directory is updated regularly as new AI tools are released and existing tools change their pricing or features. We aim to add new tools and verify existing listings weekly." },
      { question: "Can I suggest an AI tool to be added?", answer: "Yes! We welcome suggestions for free AI tools that would benefit our community. Use the contact form to submit a tool for review and inclusion." },
      { question: "What categories of AI tools are included?", answer: "The directory covers writing assistants, image generators, video editing tools, coding assistants, audio tools, productivity apps, chatbots, and more. New categories are added as the AI landscape evolves." }
    ]
  },
];
