"""Fix backtick escaping in blog.ts template literals."""
PATH = "C:/Users/jun/online-tools/src/lib/blog.ts"
with open(PATH, encoding="utf-8") as f:
    content = f.read()

# Replace problematic backtick sequences inside template literal content
# Strategy: use HTML entities &#96; for backticks that should be displayed as code
BT = chr(96)  # backtick character

# Fix: multiple escaped backticks from earlier broken edits
# 12 backticks before 'python' or alone
content = content.replace(BT*12 + "python", "&#96;&#96;&#96;python")
content = content.replace(BT*12, "&#96;&#96;&#96;")

# Fix inline code display backticks
content = content.replace(BT + "inline code" + BT, "&#96;inline code&#96;")

# Fix any remaining triple backticks inside template literal content
# These appear at the START of a code block inside content
content = content.replace("\n" + BT*3 + "python\n", "\n&#96;&#96;&#96;python\n")
content = content.replace("\n" + BT*3 + "\n", "\n&#96;&#96;&#96;\n")

print(f"Before: {len(content)}")
print(f"Backtick count: {content.count(BT)}")

with open(PATH, "w", encoding="utf-8") as f:
    f.write(content)
print("Done")
