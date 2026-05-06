"use client";

import { useState, useCallback } from "react";
import ToolLayout from "@/components/ToolLayout";

const metadata = {
  title: "YouTube Thumbnail Size Tool",
  description:
    "Preview and check YouTube thumbnail dimensions and specifications.",
  keywords: [
    "youtube thumbnail size",
    "youtube thumbnail dimensions",
    "youtube thumbnail maker",
    "1280x720 thumbnail",
    "youtube thumbnail preview",
  ],
};

const specs = [
  { label: "Recommended Size", value: "1280 × 720 pixels" },
  { label: "Minimum Width", value: "640 pixels" },
  { label: "Aspect Ratio", value: "16:9" },
  { label: "Max File Size", value: "2 MB" },
  { label: "Accepted Formats", value: "JPG, PNG, GIF, BMP" },
];

const tips = [
  "Use high-contrast colors to stand out on small screens.",
  "Include readable text (large, bold fonts) — many viewers browse on mobile.",
  "Use faces with expressive emotions — they drive higher click-through rates.",
  "Keep important content in the center; edges may be cropped on some devices.",
  "Use consistent branding (colors, fonts, logo placement) across your channel.",
  "Avoid misleading thumbnails — YouTube may penalize clickbait.",
  "Test your thumbnail at small sizes to ensure readability.",
];

export default function YouTubeThumbnailClient({ locale = "en", dict }: { locale?: string; dict?: Record<string, unknown> } = {}) {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [fileSize, setFileSize] = useState<string | null>(null);
  const [dimensions, setDimensions] = useState<{ width: number; height: number } | null>(null);

  const handleImageUpload = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setFileSize((file.size / 1024 / 1024).toFixed(2));

    const reader = new FileReader();
    reader.onload = (event) => {
      const url = event.target?.result as string;
      setPreviewUrl(url);

      const img = new Image();
      img.onload = () => {
        setDimensions({ width: img.width, height: img.height });
      };
      img.src = url;
    };
    reader.readAsDataURL(file);
  }, []);

  const passesCheck = dimensions
    ? dimensions.width >= 640 &&
      dimensions.height >= 480 &&
      parseFloat(fileSize || "0") <= 2
    : false;

  return (
    <ToolLayout {...metadata} locale={locale as any} dict={dict}>
      <div className="grid gap-4 sm:grid-cols-5">
        {specs.map((spec) => (
          <div
            key={spec.label}
            className="rounded-lg border border-zinc-200 bg-zinc-50 p-3 text-center dark:border-zinc-800 dark:bg-zinc-900"
          >
            <div className="text-xs text-zinc-500 dark:text-zinc-400">{spec.label}</div>
            <div className="text-sm font-bold text-zinc-900 dark:text-white">{spec.value}</div>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <label className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
          Upload Your Thumbnail to Preview
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-900"
        />
      </div>

      {previewUrl && dimensions && (
        <div className="mt-4">
          <div className="flex flex-wrap gap-3 text-sm">
            <span className="rounded bg-zinc-100 px-3 py-1 dark:bg-zinc-800 dark:text-zinc-300">
              Dimensions: {dimensions.width} × {dimensions.height}
            </span>
            <span className="rounded bg-zinc-100 px-3 py-1 dark:bg-zinc-800 dark:text-zinc-300">
              File Size: {fileSize} MB
            </span>
            <span
              className={`rounded px-3 py-1 font-medium ${
                passesCheck
                  ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                  : "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300"
              }`}
            >
              {passesCheck ? "✓ Passes YouTube Requirements" : "✗ Does Not Meet Requirements"}
            </span>
          </div>

          <div className="mt-4">
            <h4 className="mb-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Full Size Preview (1280×720):
            </h4>
            <div className="flex justify-center">
              <img
                src={previewUrl}
                alt="Thumbnail preview"
                className="w-full max-w-2xl rounded-lg border border-zinc-200 dark:border-zinc-800"
              />
            </div>
          </div>

          <div className="mt-4">
            <h4 className="mb-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Mobile Preview (Small):
            </h4>
            <div className="flex justify-center">
              <img
                src={previewUrl}
                alt="Thumbnail mobile preview"
                style={{ width: "320px", height: "180px", objectFit: "cover" }}
                className="rounded-lg border border-zinc-200 dark:border-zinc-800"
              />
            </div>
          </div>
        </div>
      )}

      <div className="mt-6">
        <h3 className="mb-3 text-lg font-semibold text-zinc-900 dark:text-white">
          Best Practices for YouTube Thumbnails
        </h3>
        <ul className="space-y-2">
          {tips.map((tip, i) => (
            <li
              key={i}
              className="flex gap-2 rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-2 text-sm text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400"
            >
              <span className="shrink-0 font-bold text-blue-500">{i + 1}.</span>
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </div>
    </ToolLayout>
  );
}
