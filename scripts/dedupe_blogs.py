"""Remove duplicate blog post objects from blog.ts (free station).

Same char-level approach as ai-toolbox/scripts/dedupe_blogs.py: normalize to LF,
find top-level {...} objects in the blogPosts array, keep first occurrence of
each slug, drop later copies. Run with --apply to write.
"""
import re
import sys

BLOG_FILE = r"C:\Users\jun\online-tools\src\lib\blog.ts"
APPLY = "--apply" in sys.argv

with open(BLOG_FILE, "r", encoding="utf-8", newline="") as f:
    content = f.read()

content = content.replace("\r\n", "\n").replace("\r", "\n")


def find_matching(text, open_idx):
    depth = 0
    in_str = None
    i = open_idx
    n = len(text)
    while i < n:
        c = text[i]
        if in_str:
            if c == "\\":
                i += 2
                continue
            if c == in_str:
                in_str = None
        else:
            if c in "\"'`":
                in_str = c
            elif c == "[":
                depth += 1
            elif c == "]":
                depth -= 1
                if depth == 0:
                    return i
        i += 1
    return -1


def split_objects(body):
    objs = []
    depth = 0
    in_str = None
    start = -1
    i = 0
    n = len(body)
    while i < n:
        c = body[i]
        if in_str:
            if c == "\\":
                i += 2
                continue
            if c == in_str:
                in_str = None
        else:
            if c in "\"'`":
                in_str = c
            elif c == "{":
                if depth == 0:
                    start = i
                depth += 1
            elif c == "}":
                depth -= 1
                if depth == 0 and start >= 0:
                    objs.append((start, i + 1, body[start:i + 1]))
                    start = -1
        i += 1
    return objs


arr_start = content.index("export const blogPosts")
eq_idx = content.index("=", arr_start)
arr_open = content.index("[", eq_idx)
arr_close = find_matching(content, arr_open)
assert arr_close != -1, "could not find array close"
body = content[arr_open + 1:arr_close]

objs = split_objects(body)
print(f"Total top-level objects in array: {len(objs)}")

# Keep-LAST strategy: for each slug, keep its final occurrence (newer date),
# delete all earlier copies. Track positions per slug.
from collections import OrderedDict
positions = OrderedDict()  # slug -> list of (s, e)
for s, e, text in objs:
    m = re.search(r"slug:\s*['\"]([^'\"]+)['\"]", text)
    if not m:
        print(f"  WARN object at body {s}-{e} has no slug, keeping")
        continue
    slug = m.group(1)
    positions.setdefault(slug, []).append((s, e))

dup_ranges = []
for slug, occs in positions.items():
    if len(occs) <= 1:
        continue
    for s, e in occs[:-1]:  # all but the last occurrence
        end = e
        while end < len(body) and body[end] in " ,\t":
            end += 1
        dup_ranges.append((s, end, slug))
        print(f"  DUP line {content.count(chr(10), 0, arr_open + 1 + s) + 1}: {slug}")
seen = set(positions.keys())

print(f"Unique slugs kept: {len(seen)}")
print(f"Duplicate blocks to remove: {len(dup_ranges)}")

if not dup_ranges:
    print("Nothing to do.")
    sys.exit(0)

if not APPLY:
    print("Dry-run (no changes). Re-run with --apply to remove.")
    sys.exit(0)

for s, end, slug in sorted(dup_ranges, key=lambda x: -x[0]):
    nl = body.rfind("\n", 0, s)
    start = nl if nl != -1 else s
    abs_s = arr_open + 1 + start
    abs_e = arr_open + 1 + end
    content = content[:abs_s] + content[abs_e:]

with open(BLOG_FILE, "w", encoding="utf-8", newline="\n") as f:
    f.write(content)

print("Done. Removed duplicates.")
