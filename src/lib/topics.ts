import type { TopicData } from "@/components/TopicPage";

export const freeTopics: TopicData[] = [
  {
    id: "student-tools",
    icon: "🎓",
    title: "Free Online Tools for Students",
    description: "Essential free tools every student needs — calculators, converters, text tools, and study aids. No downloads, no ads clutter, just useful tools for homework and learning.",
    intro: "Students spend hours searching for reliable online tools. We've organized the best free tools for students in one place. Calculate your age, BMI, or loan payments. Convert units for science homework. Count words for essays. Generate Lorem Ipsum for design projects. Check your writing with case converters and text diff tools. All tools are free to use, work on any device, and require no registration. Bookmark this page for quick access whenever you need a homework helper or study tool.",
    toolIds: [
      "age-calculator", "percentage-calculator", "bmi-calculator", "unit-converter",
      "base-converter", "roman-numerals", "word-counter", "case-converter",
      "lorem-ipsum", "text-diff", "loan-calculator", "mortgage-calculator",
    ],
    faq: [
      { question: "What are the best free online tools for students?", answer: "Essential free tools for students include calculators (age, percentage, BMI, loan), unit converters for science and math homework, word counters for essays and assignments, text tools like case converters and diff checkers, and Lorem Ipsum generators for design and layout projects. All of these are available free on our site with no registration required." },
      { question: "Do these student tools work on mobile?", answer: "Yes — all our student tools are fully responsive and work on phones, tablets, and laptops. Use them in the classroom, library, or at home with any device." },
      { question: "Are these tools really free for students?", answer: "Yes, completely free. No registration, no credit card, no hidden fees. We support the site through non-intrusive advertising while keeping all tools accessible to students worldwide." },
    ],
  },
  {
    id: "developer-tools",
    icon: "💻",
    title: "Free Online Developer Tools",
    description: "Essential utilities for developers — JSON formatter, Base64 encoder, regex tester, hash generator, and more. All tools run in your browser with no server uploads.",
    intro: "Every developer needs a toolkit of reliable utilities. Our developer tools cover the full workflow: format and validate JSON, encode/decode Base64 and URLs, generate UUIDs and secure passwords, test regular expressions, minify CSS, convert timestamps, and preview Markdown. All tools process data entirely in your browser — no data is ever sent to our servers. Whether you're debugging an API response, generating test data, or preparing code for production, these free online developer tools save you time and keep your data private.",
    toolIds: [
      "json-formatter", "base64-converter", "url-encoder", "hash-generator",
      "uuid-generator", "regex-tester", "css-minifier", "unix-timestamp",
      "password-generator", "html-entities", "markdown-preview", "text-diff",
      "color-converter", "base-converter",
    ],
    faq: [
      { question: "Are these developer tools safe for sensitive data?", answer: "Yes — all our developer tools run locally in your browser. Your JSON, code, and passwords never leave your device. No data is uploaded to our servers, making these tools safe for debugging production data and generating secure credentials." },
      { question: "What developer tools are included?", answer: "Our developer toolkit includes JSON formatter/validator, Base64 encoder/decoder, URL encoder/decoder, hash generator (MD5, SHA-1, SHA-256), UUID generator, regex tester, CSS minifier, Unix timestamp converter, password generator, HTML entity converter, Markdown preview, text diff checker, color converter, and base converter. All are free to use." },
      { question: "Do I need to install anything?", answer: "No installation required. All tools work directly in your browser. Just open the tool and start using it — perfect for quick debugging sessions or when working on machines where you can't install software." },
    ],
  },
  {
    id: "image-tools",
    icon: "🖼️",
    title: "Free Online Image & Wallpaper Tools",
    description: "Discover stunning wallpapers, NASA astronomy photos, GIF search, and image color tools. Fresh content updated daily from the best sources on the web.",
    intro: "Find beautiful images without leaving your browser. Browse Bing's daily wallpaper featuring stunning photography from around the world. Explore NASA's Astronomy Picture of the Day for breathtaking space imagery. Search millions of GIFs for the perfect reaction or meme. Get adorable pet wallpapers to brighten your desktop. Use the color converter and picker for your design projects. All image tools source content from official APIs ensuring high quality and regular updates.",
    toolIds: [
      "bing-wallpaper", "nasa-apod", "gif-search", "pet-wallpaper",
      "color-converter", "random-quote",
    ],
    faq: [
      { question: "Where do the wallpapers come from?", answer: "Bing Wallpaper shows Microsoft Bing's daily homepage image — professional photography curated by Bing's editorial team. NASA APOD features astronomy images from NASA's official Astronomy Picture of the Day archive. Pet Wallpaper sources cute animal photos from Unsplash. All images are properly attributed to their sources." },
      { question: "Can I download and use these images?", answer: "Yes, you can download the images for personal use. For commercial use, check the specific license of each image source. Bing wallpapers are generally for personal use only. NASA images are typically public domain." },
    ],
  },
  {
    id: "seo-tools",
    icon: "🔍",
    title: "Free Online SEO & Content Tools",
    description: "Improve your website's search rankings with free SEO tools — word counter, case converter, slug generator, keyword tools, and more. Essential for bloggers and marketers.",
    intro: "SEO success starts with the right tools. Count words and characters for meta descriptions and title tags. Convert text case for headlines and URLs. Generate SEO-friendly URL slugs from any text. Preview Markdown before publishing. Create hashtag strategies for social media distribution. Use the IP lookup and user agent parser to understand your traffic. All tools are free and designed to help bloggers, content marketers, and SEO professionals work more efficiently without expensive monthly subscriptions.",
    toolIds: [
      "word-counter", "case-converter", "text-to-slug", "markdown-preview",
      "hashtag-generator", "ip-lookup", "fancy-text-generator", "lorem-ipsum",
    ],
    faq: [
      { question: "What SEO tools do I need as a beginner?", answer: "Start with a word counter for optimizing content length, a case converter for formatting headlines, a slug generator for SEO-friendly URLs, and a Markdown preview for content formatting. These four free tools cover the basics of on-page SEO content optimization." },
      { question: "How do I write SEO-friendly titles and descriptions?", answer: "Use our word counter to check character counts (50-60 characters for titles, 150-160 for meta descriptions). Use the case converter to format titles properly. Use the slug generator to create clean, keyword-rich URLs. Consistently applying these formatting rules improves click-through rates from search results." },
      { question: "Are there any paid SEO tools on this site?", answer: "No — every tool on ToolBoxOnline is completely free. We believe essential SEO tools should be accessible to everyone, from hobby bloggers to professional marketers." },
    ],
  },
  {
    id: "writing-tools",
    icon: "✍️",
    title: "Free Online Writing & Text Tools",
    description: "Improve your writing with free text tools — word counter, case converter, text diff, Markdown preview, Lorem Ipsum generator, and more. Perfect for writers, editors, and students.",
    intro: "Write better, faster, and more efficiently with our collection of writing tools. Count words and characters for any document. Convert text between uppercase, lowercase, title case, and more. Compare text versions with the diff checker to spot changes. Generate Lorem Ipsum placeholder text for layouts. Create fancy text and hashtags for social media. Preview Markdown before publishing to your blog or documentation site. Whether you're drafting an essay, preparing a blog post, or writing code documentation, these free text tools streamline your writing workflow.",
    toolIds: [
      "word-counter", "case-converter", "lorem-ipsum", "text-diff",
      "remove-duplicate-lines", "text-repeater", "markdown-preview",
      "fancy-text-generator", "hashtag-generator", "random-quote",
    ],
    faq: [
      { question: "What writing tools are essential for bloggers?", answer: "A word counter for checking article length, a case converter for formatting headlines, a text diff tool for comparing draft revisions, a Markdown preview for formatting posts, a slug generator for URLs, and a hashtag generator for social media promotion. All are available free on ToolBoxOnline." },
      { question: "Can I check my essay word count here?", answer: "Yes — our word counter instantly shows word count, character count (with and without spaces), sentences, paragraphs, and reading time. Just paste your text and see the results." },
    ],
  },
];
