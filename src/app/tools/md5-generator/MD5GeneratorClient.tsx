"use client";

import { useState, useMemo } from "react";
import ToolLayout from "@/components/ToolLayout";

const metadata = {
  title: "MD5 Hash Generator",
  description:
    "Generate MD5 hash from any text input instantly.",
  keywords: [
    "md5 hash generator",
    "md5 encrypt",
    "md5 online",
    "text to md5",
    "md5 calculator",
  ],
};

// Pure JavaScript MD5 implementation
function md5(string: string): string {
  function md5cycle(x: number[], k: number[]) {
    let a = x[0], b = x[1], c = x[2], d = x[3];

    a = ff(a, b, c, d, k[0], 7, -680876936);
    d = ff(d, a, b, c, k[1], 12, -389564586);
    c = ff(c, d, a, b, k[2], 17, 606105819);
    b = ff(b, c, d, a, k[3], 22, -1044525330);
    a = ff(a, b, c, d, k[4], 7, -176418897);
    d = ff(d, a, b, c, k[5], 12, 1200080426);
    c = ff(c, d, a, b, k[6], 17, -1473231341);
    b = ff(b, c, d, a, k[7], 22, -45705983);
    a = ff(a, b, c, d, k[8], 7, 1770035416);
    d = ff(d, a, b, c, k[9], 12, -1958414417);
    c = ff(c, d, a, b, k[10], 17, -42063);
    b = ff(b, c, d, a, k[11], 22, -1990404162);
    a = ff(a, b, c, d, k[12], 7, 1804603682);
    d = ff(d, a, b, c, k[13], 12, -40341101);
    c = ff(c, d, a, b, k[14], 17, -1502002290);
    b = ff(b, c, d, a, k[15], 22, 1236535329);

    a = gg(a, b, c, d, k[1], 5, -165796510);
    d = gg(d, a, b, c, k[6], 9, -1069501632);
    c = gg(c, d, a, b, k[11], 14, 643717713);
    b = gg(b, c, d, a, k[0], 20, -373897302);
    a = gg(a, b, c, d, k[5], 5, -701558691);
    d = gg(d, a, b, c, k[10], 9, 38016083);
    c = gg(c, d, a, b, k[15], 14, -660478335);
    b = gg(b, c, d, a, k[4], 20, -405537848);
    a = gg(a, b, c, d, k[9], 5, 568446438);
    d = gg(d, a, b, c, k[14], 9, -1019803690);
    c = gg(c, d, a, b, k[3], 14, -187363961);
    b = gg(b, c, d, a, k[8], 20, 1163531501);
    a = gg(a, b, c, d, k[13], 5, -1444681467);
    d = gg(d, a, b, c, k[2], 9, -51403784);
    c = gg(c, d, a, b, k[7], 14, 1735328473);
    b = gg(b, c, d, a, k[12], 20, -1926607734);

    a = hh(a, b, c, d, k[5], 4, -378558);
    d = hh(d, a, b, c, k[8], 11, -2022574463);
    c = hh(c, d, a, b, k[11], 16, 1839030562);
    b = hh(b, c, d, a, k[14], 23, -35309556);
    a = hh(a, b, c, d, k[1], 4, -1530992060);
    d = hh(d, a, b, c, k[4], 11, 1272893353);
    c = hh(c, d, a, b, k[7], 16, -155497632);
    b = hh(b, c, d, a, k[10], 23, -1094730640);
    a = hh(a, b, c, d, k[13], 4, 681279174);
    d = hh(d, a, b, c, k[0], 11, -358537222);
    c = hh(c, d, a, b, k[3], 16, -722521979);
    b = hh(b, c, d, a, k[6], 23, 76029189);
    a = hh(a, b, c, d, k[9], 4, -640364487);
    d = hh(d, a, b, c, k[12], 11, -421815835);
    c = hh(c, d, a, b, k[15], 16, 530742520);
    b = hh(b, c, d, a, k[2], 23, -995338651);

    a = ii(a, b, c, d, k[0], 6, -198630844);
    d = ii(d, a, b, c, k[7], 10, 1126891415);
    c = ii(c, d, a, b, k[14], 15, -1416354905);
    b = ii(b, c, d, a, k[5], 21, -57434055);
    a = ii(a, b, c, d, k[12], 6, 1700485571);
    d = ii(d, a, b, c, k[3], 10, -1894986606);
    c = ii(c, d, a, b, k[10], 15, -1051523);
    b = ii(b, c, d, a, k[1], 21, -2054922799);
    a = ii(a, b, c, d, k[8], 6, 1873313359);
    d = ii(d, a, b, c, k[15], 10, -30611744);
    c = ii(c, d, a, b, k[6], 15, -1560198380);
    b = ii(b, c, d, a, k[13], 21, 1309151649);
    a = ii(a, b, c, d, k[4], 6, -145523070);
    d = ii(d, a, b, c, k[11], 10, -1120210379);
    c = ii(c, d, a, b, k[2], 15, 718787259);
    b = ii(b, c, d, a, k[9], 21, -343485551);

    x[0] = add32(a, x[0]);
    x[1] = add32(b, x[1]);
    x[2] = add32(c, x[2]);
    x[3] = add32(d, x[3]);
  }

  function cmn(q: number, a: number, b: number, x: number, s: number, t: number) {
    a = add32(add32(a, q), add32(x, t));
    return add32((a << s) | (a >>> (32 - s)), b);
  }

  function ff(a: number, b: number, c: number, d: number, x: number, s: number, t: number) {
    return cmn((b & c) | ((~b) & d), a, b, x, s, t);
  }

  function gg(a: number, b: number, c: number, d: number, x: number, s: number, t: number) {
    return cmn((b & d) | (c & (~d)), a, b, x, s, t);
  }

  function hh(a: number, b: number, c: number, d: number, x: number, s: number, t: number) {
    return cmn(b ^ c ^ d, a, b, x, s, t);
  }

  function ii(a: number, b: number, c: number, d: number, x: number, s: number, t: number) {
    return cmn(c ^ (b | (~d)), a, b, x, s, t);
  }

  function md51(s: string) {
    const n = s.length;
    const state = [1732584193, -271733879, -1732584194, 271733878];
    let i: number;

    for (i = 64; i <= s.length; i += 64) {
      md5cycle(state, md5blk(s.substring(i - 64, i)));
    }

    const tail = s.substring(i - 64);
    const tailLength = tail.length;
    const tailArray = new Array<number>(64).fill(0);

    for (i = 0; i < tailLength; i++) {
      tailArray[i] = tail.charCodeAt(i);
    }

    tailArray[tailLength] = 0x80;
    const lengthInBits = n * 8;
    tailArray[56] = lengthInBits & 0xff;
    tailArray[57] = (lengthInBits >>> 8) & 0xff;
    tailArray[58] = (lengthInBits >>> 16) & 0xff;
    tailArray[59] = (lengthInBits >>> 24) & 0xff;
    tailArray[60] = 0;
    tailArray[61] = 0;
    tailArray[62] = 0;
    tailArray[63] = 0;

    md5cycle(state, tailArray);
    return state;
  }

  function md5blk(s: string) {
    const md5blks = new Array<number>(16).fill(0);
    for (let i = 0; i < 64; i += 4) {
      md5blks[i >> 2] = s.charCodeAt(i)
        + (s.charCodeAt(i + 1) << 8)
        + (s.charCodeAt(i + 2) << 16)
        + (s.charCodeAt(i + 3) << 24);
    }
    return md5blks;
  }

  function rhex(n: number) {
    const hexChars = "0123456789abcdef";
    let s = "";
    for (let i = 0; i < 4; i++) {
      s += hexChars[(n >> (i * 8 + 4)) & 0x0f] + hexChars[(n >> (i * 8)) & 0x0f];
    }
    return s;
  }

  function add32(a: number, b: number) {
    return (a + b) & 0xffffffff;
  }

  const state = md51(string);
  return rhex(state[0]) + rhex(state[1]) + rhex(state[2]) + rhex(state[3]);
}

export default function MD5GeneratorClient() {
  const [text, setText] = useState("");

  const hash = useMemo(() => {
    if (!text) return "";
    return md5(text);
  }, [text]);

  function handleCopy() {
    navigator.clipboard.writeText(hash);
  }

  function handleCopyFormat(format: "upper" | "lower") {
    const h = format === "upper" ? hash.toUpperCase() : hash;
    navigator.clipboard.writeText(h);
  }

  return (
    <ToolLayout {...metadata}>
      <div>
        <label className="mb-1 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
          Enter Text to Generate MD5 Hash
        </label>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type or paste text here..."
          rows={4}
          className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-900"
        />
      </div>

      {hash && (
        <div className="mt-6">
          <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-950">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">MD5 Hash</span>
              <div className="flex gap-2">
                <button
                  onClick={() => handleCopyFormat("lower")}
                  className="rounded bg-blue-200 px-3 py-1 text-xs font-medium text-blue-700 transition-colors hover:bg-blue-300 dark:bg-blue-800 dark:text-blue-300 dark:hover:bg-blue-700"
                >
                  Copy Lowercase
                </button>
                <button
                  onClick={() => handleCopyFormat("upper")}
                  className="rounded bg-blue-200 px-3 py-1 text-xs font-medium text-blue-700 transition-colors hover:bg-blue-300 dark:bg-blue-800 dark:text-blue-300 dark:hover:bg-blue-700"
                >
                  Copy Uppercase
                </button>
              </div>
            </div>
            <div className="break-all font-mono text-sm text-blue-900 dark:text-blue-100">
              {hash}
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
            <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-4 text-center dark:border-zinc-800 dark:bg-zinc-900">
              <div className="text-xs text-zinc-500 dark:text-zinc-400">Hash Length</div>
              <div className="text-2xl font-bold text-zinc-900 dark:text-white">32</div>
              <div className="text-xs text-zinc-400">hex characters</div>
            </div>
            <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-4 text-center dark:border-zinc-800 dark:bg-zinc-900">
              <div className="text-xs text-zinc-500 dark:text-zinc-400">Bit Length</div>
              <div className="text-2xl font-bold text-zinc-900 dark:text-white">128</div>
              <div className="text-xs text-zinc-400">bits</div>
            </div>
            <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-4 text-center dark:border-zinc-800 dark:bg-zinc-900">
              <div className="text-xs text-zinc-500 dark:text-zinc-400">Input Length</div>
              <div className="text-2xl font-bold text-zinc-900 dark:text-white">{text.length}</div>
              <div className="text-xs text-zinc-400">characters</div>
            </div>
          </div>

          <div className="mt-4 rounded-lg border border-yellow-200 bg-yellow-50 p-3 dark:border-yellow-800 dark:bg-yellow-950">
            <p className="text-xs text-yellow-700 dark:text-yellow-300">
              ⚠️ MD5 is a cryptographic hash function but is no longer considered secure for password storage or digital signatures. Use it for checksums and file integrity verification only.
            </p>
          </div>
        </div>
      )}
    </ToolLayout>
  );
}
