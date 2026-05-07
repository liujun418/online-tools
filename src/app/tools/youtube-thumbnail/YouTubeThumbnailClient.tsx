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

const specs = (yt: Record<string, string>) => [
  { labelKey: "recommendedSize", value: "1280 × 720 pixels" },
  { labelKey: "minimumWidth", value: "640 pixels" },
  { labelKey: "aspectRatio", value: "16:9" },
  { labelKey: "maxFileSize", value: "2 MB" },
  { labelKey: "acceptedFormats", value: "JPG, PNG, GIF, BMP" },
];

const tips = (yt: Record<string, string>) => [
  yt.tip1 || "Use high-contrast colors to stand out on small screens.",
  yt.tip2 || "Include readable text (large, bold fonts) — many viewers browse on mobile.",
  yt.tip3 || "Use faces with expressive emotions — they drive higher click-through rates.",
  yt.tip4 || "Keep important content in the center; edges may be cropped on some devices.",
  yt.tip5 || "Use consistent branding (colors, fonts, logo placement) across your channel.",
  yt.tip6 || "Avoid misleading thumbnails — YouTube may penalize clickbait.",
  yt.tip7 || "Test your thumbnail at small sizes to ensure readability.",
];

export default function YouTubeThumbnailClient({ locale = "en", dict, titleOverride, descriptionOverride }: {
  locale?: string; dict?: Record<string, unknown>;
  titleOverride?: string;
  descriptionOverride?: string;
} = {}) {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [fileSize, setFileSize] = useState<string | null>(null);
  const [dimensions, setDimensions] = useState<{ width: number; height: number } | null>(null);
  const yt = (dict as any)?.youtubeThumbnail || {};

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
    <ToolLayout {...metadata}
        title={titleOverride || metadata.title}
        description={descriptionOverride || metadata.description} locale={locale as any} dict={dict}>
      <div className="grid gap-4 sm:grid-cols-5">
        {specs(yt).map((spec) => (
          <div
            key={spec.labelKey}
            className="rounded-lg border border-zinc-200 bg-zinc-50 p-3 text-center dark:border-zinc-800 dark:bg-zinc-900"
          >
            <div className="text-xs text-zinc-500 dark:text-zinc-400">{yt[spec.labelKey] || spec.labelKey}</div>
            <div className="text-sm font-bold text-zinc-900 dark:text-white">{spec.value}</div>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <label className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
          {yt.uploadLabel || "Upload Your Thumbnail to Preview"}
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
              {yt.dimensions || "Dimensions"}: {dimensions.width} × {dimensions.height}
            </span>
            <span className="rounded bg-zinc-100 px-3 py-1 dark:bg-zinc-800 dark:text-zinc-300">
              {yt.fileSize || "File Size"}: {fileSize} MB
            </span>
            <span
              className={`rounded px-3 py-1 font-medium ${
                passesCheck
                  ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                  : "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300"
              }`}
            >
              {passesCheck ? `✓ ${yt.passes || "Passes YouTube Requirements"}` : `✗ ${yt.fails || "Does Not Meet Requirements"}`}
            </span>
          </div>

          <div className="mt-4">
            <h4 className="mb-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">
              {yt.fullPreview || "Full Size Preview (1280×720)"}:
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
              {yt.mobilePreview || "Mobile Preview (Small)"}:
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
          {yt.bestPractices || "Best Practices for YouTube Thumbnails"}
        </h3>
        <ul className="space-y-2">
          {tips(yt).map((tip, i) => (
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
