PATH = "C:/Users/jun/online-tools/src/lib/blog.ts"
with open(PATH, encoding="utf-8") as f:
    ts = f.read()

content = """<p>Someone sent me a file and a string of letters and numbers: "Verify with this MD5 hash." I ignored it. The file was corrupted and I spent 20 minutes debugging an install that was never going to work. Now I check hashes. It takes 10 seconds.</p>

<p>An <a href="/en/tools/md5-generator">MD5 hash generator</a> creates a fingerprint of any text or file. Same input always produces the same hash. Change one character, and the hash changes completely. Here is when MD5 is the right tool and when you should use something stronger.</p>

<h2>What MD5 Actually Is</h2>

<p>MD5 takes any input and produces a 32-character hexadecimal string. It is deterministic (same input = same output), fast to compute, and the output is always the same length regardless of input size. One word or a 10GB file — the hash is always 32 characters.</p>

<p>The critical property: even changing a single character produces a completely different hash. "hello" and "Hello" have entirely different MD5 hashes. This makes hashing useful for detecting changes and verifying integrity.</p>

<h2>When MD5 Is Still the Right Choice</h2>

<p><strong>File integrity checks.</strong> Download a large file. The website shows an MD5 hash. You compute the hash of your downloaded file. If they match, the file is intact. MD5 is fast enough for multi-gigabyte files and reliable enough to detect accidental corruption. Most software downloads still publish MD5 checksums alongside SHA-256.</p>

<p><strong>Duplicate detection.</strong> You have 10,000 files and need to find duplicates. MD5 hashing each file and comparing hashes is dramatically faster than comparing file contents byte by byte. If two files have different MD5 hashes, they are definitely different files.</p>

<p><strong>Cache keys.</strong> You need a predictable, fixed-length identifier for a piece of content. MD5 the content and use the 32-character hex string as your cache key. It is deterministic and collisions in cache use are practically irrelevant.</p>

<h2>When You Should NOT Use MD5</h2>

<p><strong>Password storage.</strong> Do not use MD5 for hashing passwords. It is too fast — attackers can try billions of combinations per second. Use bcrypt, scrypt, or Argon2 instead. These are deliberately slow, making brute-force attacks impractical.</p>

<p><strong>Security verification.</strong> If you need to verify that a file has not been tampered with by an adversary (not just accidentally corrupted), use SHA-256. MD5 has known collision attacks — it is possible to create two different files with the same MD5 hash. SHA-256 has no known practical collisions.</p>

<p><strong>Digital signatures or certificates.</strong> These require cryptographic strength. Use SHA-256 or SHA-512.</p>

<p>For general hashing needs, the <a href="/en/tools/hash-generator">hash generator</a> supports SHA-1, SHA-256, SHA-384, SHA-512, and MD5. For quick checks where speed matters more than cryptographic security, the <a href="/en/tools/md5-generator">MD5 generator</a> is the fastest option.</p>"""

post = f"""  {{
    slug: "md5-hash-generator-guide",
    title: "MD5 Hash Generator: When to Use It and When to Use SHA-256 Instead",
    description: "MD5 is fast and still useful — but not for everything. Here is when to use MD5 for file verification and when to upgrade to SHA-256.",
    date: "2026-05-28",
    category: "Developer",
    tags: ["MD5 generator", "MD5 hash", "MD5 checksum", "file verification", "hash generator", "MD5 vs SHA"],
    relatedTools: ["md5-generator","hash-generator"],
    content: `
{content.strip()}
`,
  }},
"""

ts = ts[:ts.rfind("];")] + "\n" + post + "\n];\n"

if "export function getBlogPosts" not in ts:
    ts += """
export function getBlogPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
"""

with open(PATH, "w", encoding="utf-8") as f:
    f.write(ts)
print(f"Added. {len(ts)} chars")
