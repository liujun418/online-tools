"use client";

import { useState, useCallback, useRef } from "react";
import ToolLayout from "@/components/ToolLayout";

const metadata = {
  title: "Image to Base64 Converter",
  description:
    "Convert images to Base64 encoded strings for embedding in code.",
  keywords: [
    "image to base64",
    "convert image to base64",
    "image base64 converter",
    "png to base64",
    "jpg to base64",
    "embed image in html",
    "data uri generator",
  ],
};

export default function ImageToBase64Client() {
  const [base64, setBase64] = useState("");
  const [fileInfo, setFileInfo] = useState("");
  const [preview, setPreview] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  const handleFile = useCallback((file: File) => {
    setFileInfo(`${file.name} (${(file.size / 1024).toFixed(1)} KB)`);
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      setBase64(result);
      setPreview(result);
    };
    reader.readAsDataURL(file);
  }, []);

  function handleCopy() {
    navigator.clipboard.writeText(base64);
  }

  return (
    <ToolLayout {...metadata}>
      <div className="flex flex-wrap items-center gap-4">
        <label className="flex cursor-pointer items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m0 0l4 4"
            />
          </svg>
          Choose Image
          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (f) handleFile(f);
            }}
            className="hidden"
          />
        </label>
        {fileInfo && (
          <span className="text-sm text-zinc-500 dark:text-zinc-400">
            {fileInfo}
          </span>
        )}
      </div>

      {base64 && (
        <>
          <div className="mt-6">
            <label className="mb-2 block text-sm font-medium text-zinc-500 dark:text-zinc-400">
              Preview
            </label>
            <img
              src={preview}
              alt="Preview"
              className="max-h-48 w-auto rounded-lg border border-zinc-200 dark:border-zinc-800"
            />
          </div>

          <div className="mt-4">
            <div className="mb-2 flex items-center justify-between">
              <label className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                Base64 String ({base64.length.toLocaleString()} characters)
              </label>
              <button
                onClick={handleCopy}
                className="rounded bg-zinc-200 px-3 py-1 text-xs font-medium text-zinc-600 transition-colors hover:bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700"
              >
                Copy
              </button>
            </div>
            <textarea
              readOnly
              value={base64}
              className="w-full rounded-lg border border-zinc-200 bg-zinc-50 p-4 font-mono text-xs dark:border-zinc-800 dark:bg-zinc-900"
              rows={8}
            />
          </div>
        </>
      )}
    </ToolLayout>
  );
}
