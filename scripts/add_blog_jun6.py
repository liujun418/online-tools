PATH = "C:/Users/jun/online-tools/src/lib/blog.ts"
with open(PATH, encoding="utf-8") as f:
    ts = f.read()

content = """<p>I thought a random password was random. Then I learned that <code>Math.random()</code> in JavaScript is predictable enough that an attacker who knows the seed can regenerate every password the tool ever produced. That is when I stopped using browser tools that rely on it.</p>

<p>A <a href="/en/tools/password-generator">password generator</a> is only as good as its randomness source. Most people never think about this. They see a string of random-looking characters and assume it is secure. Here is why that assumption can be wrong.</p>

<h2>The Difference Between Math.random() and Crypto-Random</h2>

<p><code>Math.random()</code> is a pseudo-random number generator. It produces numbers that look random but follow a deterministic sequence based on a seed value. If you know the seed, you know every "random" number that follows. This is fine for games and animations. It is not fine for passwords.</p>

<p>The Web Crypto API's <code>crypto.getRandomValues()</code> is different. It pulls randomness from the operating system's entropy pool — mouse movements, keyboard timings, network packet variations, hardware noise. This randomness is cryptographically secure. An attacker cannot predict it because there is no seed to know.</p>

<p>Counter-intuitive: a truly random 12-character password from crypto.getRandomValues is stronger than a 20-character password from Math.random() with a known seed. Length matters, but the randomness source matters more. Our <a href="/en/tools/password-generator">password generator</a> uses the Web Crypto API. The randomness comes from your device hardware, not a predictable math function.</p>

<h2>The Length vs Complexity Myth</h2>

<p>I used to think adding symbols made passwords stronger. A 12-character password with uppercase, lowercase, numbers, and symbols has about 95^12 possible combinations. A 16-character all-lowercase password has 26^16 combinations — about 6.5 million times more. Length beats complexity. Every. Single. Time.</p>

<p>This does not mean you should ignore complexity entirely. It means prioritize length. Get to 16+ characters first. Then add numbers and symbols. A 16-character password from a <a href="/en/tools/password-generator">random generator</a> is practically uncrackable regardless of the character set. The math is simple: more characters = exponentially more combinations = exponentially longer to crack.</p>

<h2>What to Do When You Cannot Memorize Random Passwords</h2>

<p>This is where most people give up. They generate a strong random password, cannot remember it, and go back to using their dog's name plus 123. The fix is not a better memory. The fix is a password manager. Bitwarden is free and open source. You memorize one master password. The manager handles the rest.</p>

<p>For the master password itself, use four or five random words: "correct-horse-battery-staple" is both strong and memorable. Generate it with the <a href="/en/tools/password-generator">password generator</a> using the passphrase mode. Write it down on paper and store it somewhere safe. Digital password manager plus physical master backup covers both security and recoverability.</p>"""

post = """  {{
    slug: "password-generator-randomness-guide",
    title: "Why Your Password Generator Might Not Be Random (And How to Check)",
    description: "Not all random passwords are created equal. Math.random() is predictable. Crypto-random is not. Here is why the difference matters.",
    date: "2026-06-06",
    category: "Security",
    tags: ["password generator", "crypto random", "random password", "Math.random vs crypto", "secure password", "Web Crypto API"],
    relatedTools: ["password-generator","hash-generator","uuid-generator"],
    content: `
"""
post += content.strip() + "\n`,\n  },\n"

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
print(f"Done. {len(ts)} chars")
