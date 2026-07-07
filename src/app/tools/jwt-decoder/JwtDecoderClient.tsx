"use client";

import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";

const metadata = {
  title: "JWT Decoder",
  description:
    "Decode JWT tokens instantly — inspect header, payload, and signature. See algorithm, timestamps, and claims in readable format. Free online JWT decoder.",
  keywords: [
    "jwt decoder",
    "decode jwt",
    "jwt token decoder",
    "json web token",
    "jwt debugger",
    "decode jwt online",
  ],
};

function base64urlDecode(str: string): string {
  try {
    str = str.replace(/-/g, "+").replace(/_/g, "/");
    const pad = str.length % 4;
    if (pad) str += "=".repeat(4 - pad);
    return decodeURIComponent(
      atob(str)
        .split("")
        .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
        .join("")
    );
  } catch {
    return "";
  }
}

function formatTimestamp(ts: number): string {
  if (!ts || ts < 100000) return "—";
  const d = new Date(ts * 1000);
  return d.toLocaleString();
}

function isExpired(exp: number): boolean {
  if (!exp) return false;
  return Date.now() > exp * 1000;
}

export default function JwtDecoderClient({
  locale = "en",
  dict,
  titleOverride,
  descriptionOverride,
}: {
  locale?: string;
  dict?: Record<string, unknown>;
  titleOverride?: string;
  descriptionOverride?: string;
} = {}) {
  const [token, setToken] = useState("");
  const jd = (dict as any)?.jwtDecoder || {};

  const parts = token.split(".");
  const headerStr = parts[0] ? base64urlDecode(parts[0]) : "";
  const payloadStr = parts[1] ? base64urlDecode(parts[1]) : "";
  const signature = parts[2] || "";

  let header: any = null;
  let payload: any = null;
  let parseError = "";

  try {
    header = headerStr ? JSON.parse(headerStr) : null;
  } catch {
    parseError = jd.invalidToken || "Invalid JWT token";
  }
  try {
    payload = payloadStr ? JSON.parse(payloadStr) : null;
  } catch {
    parseError = jd.invalidToken || "Invalid JWT token";
  }

  const algo = header?.alg || "";
  const expired = payload?.exp ? isExpired(payload.exp) : false;

  return (
    <ToolLayout
      {...metadata}
      title={titleOverride || metadata.title}
      description={descriptionOverride || metadata.description}
      locale={locale as any}
      dict={dict}
    >
      <textarea
        value={token}
        onChange={(e) => setToken(e.target.value)}
        placeholder={
          jd.placeholder || "Paste your JWT token here..."
        }
        className="w-full rounded-lg border border-zinc-300 bg-white p-4 font-mono text-sm dark:border-zinc-700 dark:bg-zinc-900 dark:placeholder:text-zinc-600"
        rows={4}
      />

      {parseError && (
        <div className="mt-4 rounded-lg border border-red-300 bg-red-50 p-4 text-sm text-red-700 dark:border-red-800 dark:bg-red-950 dark:text-red-400">
          {parseError}
        </div>
      )}

      {header && payload && !parseError && (
        <div className="mt-6 space-y-4">
          {/* Header */}
          <div className="rounded-lg border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900">
            <div className="flex items-center justify-between border-b border-zinc-200 px-4 py-3 dark:border-zinc-800">
              <h3 className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                {jd.header || "Header"}{" "}
                {algo && (
                  <span className="ml-2 rounded bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-700 dark:bg-blue-900 dark:text-blue-300">
                    {jd.algorithm || "Algorithm"}: {algo}
                  </span>
                )}
              </h3>
            </div>
            <pre className="overflow-auto p-4 text-xs font-mono text-zinc-600 dark:text-zinc-400">
              {JSON.stringify(header, null, 2)}
            </pre>
          </div>

          {/* Payload */}
          <div className="rounded-lg border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900">
            <div className="flex items-center justify-between border-b border-zinc-200 px-4 py-3 dark:border-zinc-800">
              <h3 className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                {jd.payload || "Payload"}
              </h3>
              <button
                onClick={() => navigator.clipboard.writeText(JSON.stringify(payload, null, 2))}
                className="rounded bg-zinc-200 px-3 py-1 text-xs font-medium text-zinc-600 transition-colors hover:bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700"
              >
                {jd.copyPayload || "Copy Payload"}
              </button>
            </div>
            <pre className="overflow-auto p-4 text-xs font-mono text-zinc-600 dark:text-zinc-400">
              {JSON.stringify(payload, null, 2)}
            </pre>
          </div>

          {/* Timestamps */}
          {(payload.iat || payload.exp || payload.nbf) && (
            <div className="grid gap-3 sm:grid-cols-3">
              {payload.iat != null && (
                <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900">
                  <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                    {jd.issuedAt || "Issued At"}
                  </div>
                  <div className="text-sm font-mono text-zinc-700 dark:text-zinc-300">
                    {formatTimestamp(payload.iat)}
                  </div>
                </div>
              )}
              {payload.exp != null && (
                <div className="rounded-lg border p-4 dark:bg-zinc-900"
                  style={{
                    borderColor: expired ? "rgb(239 68 68)" : "rgb(228 228 231)",
                    backgroundColor: expired ? "rgb(254 242 242)" : "rgb(250 250 250)",
                  }}
                >
                  <div className="mb-1 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider"
                    style={{ color: expired ? "rgb(239 68 68)" : "rgb(113 113 122)" }}
                  >
                    {jd.expiresAt || "Expires At"}
                    <span className="rounded px-1.5 py-0.5 text-[10px] font-bold"
                      style={{
                        backgroundColor: expired ? "rgb(239 68 68)" : "rgb(34 197 94)",
                        color: "white",
                      }}
                    >
                      {expired ? (jd.expired || "Expired") : (jd.valid || "Valid")}
                    </span>
                  </div>
                  <div className="text-sm font-mono text-zinc-700 dark:text-zinc-300">
                    {formatTimestamp(payload.exp)}
                  </div>
                </div>
              )}
              {payload.nbf != null && (
                <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900">
                  <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                    Not Before
                  </div>
                  <div className="text-sm font-mono text-zinc-700 dark:text-zinc-300">
                    {formatTimestamp(payload.nbf)}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Signature */}
          <div className="rounded-lg border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900">
            <div className="border-b border-zinc-200 px-4 py-3 dark:border-zinc-800">
              <h3 className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                {jd.signature || "Signature"}
              </h3>
            </div>
            <div className="overflow-auto p-4">
              <code className="break-all text-xs text-zinc-500 dark:text-zinc-500">
                {signature || "—"}
              </code>
            </div>
          </div>
        </div>
      )}
    </ToolLayout>
  );
}