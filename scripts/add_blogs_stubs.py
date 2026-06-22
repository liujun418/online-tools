# Fix: insert BEFORE ]; (array closing), not after
import re

BLOG_FILE = r"C:\Users\jun\online-tools\src\lib\blog.ts"

with open(BLOG_FILE, "r", encoding="utf-8") as f:
    content = f.read()

# Find the array closing ]; that's on its own line
# Pattern: the last blog ends with `},` then `\n];\n` then export function
# We need to insert BEFORE ];
old = '\n];\n\nexport function getBlogPosts'
# Insert the new blogs between the last entry and ];
# The last blog entry ends with `  },` so we insert after that pattern

# Actually simpler: replace `];\n\nexport function getBlogPosts` with new blogs + `];\n\nexport function getBlogPosts`
new_blogs = r"""
  {
    slug: "color-contrast-checker-online-guide",
    title: "How to Check Color Contrast for Accessibility in 10 Seconds (No Design Skills Needed)",
    description: "Your color combo looks fine to you but fails WCAG for 1 in 12 people. Here's how to check contrast ratio in seconds without a design degree.",
    date: "2026-06-16",
    category: "Developer",
    tags: ["color contrast checker", "WCAG contrast", "accessibility check", "color accessibility", "contrast ratio"],
    relatedTools: ["color-contrast-checker", "color-converter", "css-minifier"],
    content: """
# CONTENT_PLACEHOLDER_1
""",
  },
  {
    slug: "decode-base64-image-online",
    title: "You Have a Base64 String and Need to See the Image — Here Is How to Decode It",
    description: "Someone sent you a data URI or a raw Base64 string and you need to actually see the image. No command line, no script. Just paste and view.",
    date: "2026-06-16",
    category: "Developer",
    tags: ["base64 to image", "decode base64 image", "base64 decoder", "data uri to image", "base64 viewer"],
    relatedTools: ["base64-to-image", "image-to-base64", "base64-converter"],
    content: """
# CONTENT_PLACEHOLDER_2
""",
  },
  {
    slug: "online-code-formatter-vs-prettier-vs-ide",
    title: "Online Code Formatter vs Prettier vs Your IDE: When to Use Which",
    description: "You don't always have your dev setup. Here's when a browser code formatter beats Prettier, when it doesn't, and how to choose the right tool for the job.",
    date: "2026-06-16",
    category: "Developer",
    tags: ["code formatter", "format code online", "online code beautifier", "Prettier alternative", "code formatting tools"],
    relatedTools: ["code-formatter", "json-formatter", "css-minifier"],
    content: """
# CONTENT_PLACEHOLDER_3
""",
  },
  {
    slug: "svg-minifier-comparison-test-2026",
    title: "I Ran 30 SVGs Through 4 Minifiers — Here Is Which One Saved the Most Bytes",
    description: "SVG files from design tools are bloated with metadata, comments, and editor cruft. I tested 4 SVG minification methods on 30 real-world files to find the winner.",
    date: "2026-06-16",
    category: "Developer",
    tags: ["svg minifier", "compress svg", "svg optimizer", "minify svg online", "svg file size"],
    relatedTools: ["svg-minifier", "css-minifier", "code-formatter"],
    content: """
# CONTENT_PLACEHOLDER_4
""",
  },
  {
    slug: "html-to-markdown-conversion-explained",
    title: "What Is HTML to Markdown Conversion? When Developers Need It and Why",
    description: "HTML to Markdown isn't just about pretty formatting. It's about making content portable across platforms. Here's when the conversion matters and how to do it right.",
    date: "2026-06-16",
    category: "Developer",
    tags: ["html to markdown", "convert html to markdown", "markdown converter", "html to md", "markdown format"],
    relatedTools: ["html-to-markdown", "markdown-preview", "code-formatter"],
    content: """
# CONTENT_PLACEHOLDER_5
""",
  },
  {
    slug: "scan-qr-code-from-screenshot-online",
    title: "What to Do When Someone Sends You a QR Code Screenshot Instead of a Link",
    description: "You got a QR code as an image, not a link you can click. Your phone is in the other room. Here's how to scan any QR code directly from your browser in seconds.",
    date: "2026-06-16",
    category: "Developer",
    tags: ["scan qr code online", "qr code scanner browser", "qr code from image", "qr code decoder", "scan qr without phone"],
    relatedTools: ["qr-code-scanner", "qr-code-generator", "url-encoder"],
    content: """
# CONTENT_PLACEHOLDER_6
""",
  },

"""

if old in content:
    content = content.replace(old, new_blogs + '\n];\n\nexport function getBlogPosts')
    with open(BLOG_FILE, "w", encoding="utf-8") as f:
        f.write(content)
    print("OK: 6 blog stubs inserted before ];")
else:
    print("ERROR: pattern not found")
    # Debug: show what's around ];
    idx = content.find('\n];')
    if idx >= 0:
        print("Found ]; at index", idx)
        print("Context:", repr(content[idx:idx+60]))
