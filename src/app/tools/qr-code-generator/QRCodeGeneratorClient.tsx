"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import ToolLayout from "@/components/ToolLayout";
import QRCode from "qrcode";

const metadata = {
  title: "QR Code Generator",
  description:
    "Generate QR codes from text, URLs, emails, or any string.",
  keywords: [
    "qr code generator",
    "qr code maker",
    "text to qr code",
    "url qr code generator",
    "free qr code",
  ],
};

const sizes = [128, 256, 512];
const corrections = ["L", "M", "Q", "H"];

export default function QRCodeGeneratorClient({ locale = "en", dict, titleOverride, descriptionOverride }: {
  locale?: string; dict?: Record<string, unknown>;
  titleOverride?: string;
  descriptionOverride?: string;
} = {}) {
  const [text, setText] = useState("https://www.toolboxonline.club");
  const [size, setSize] = useState(256);
  const [correction, setCorrection] = useState("M");
  const [fgColor, setFgColor] = useState("#000000");
  const [bgColor, setBgColor] = useState("#ffffff");
  const [qrDataUrl, setQrDataUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const qr = (dict as any)?.qrCodeGenerator || {};

  useEffect(() => { generateQR(); }, []);

  const generateQR = useCallback(async () => {
    if (!text.trim()) {
      setQrDataUrl(null);
      setError(qr.errorEmpty || "Please enter some text to generate a QR code.");
      return;
    }
    try {
      const dataUrl = await QRCode.toDataURL(text, {
        width: size,
        margin: 2,
        errorCorrectionLevel: correction as "L" | "M" | "Q" | "H",
        color: { dark: fgColor, light: bgColor },
      });
      setQrDataUrl(dataUrl);
      setError(null);
    } catch (e: any) {
      setError(e.message || (qr.errorGenerate || "Failed to generate QR code. Text may be too long."));
      setQrDataUrl(null);
    }
  }, [text, size, correction, fgColor, bgColor, qr]);

  function handleDownload() {
    if (!qrDataUrl) return;
    const link = document.createElement("a");
    link.download = `qrcode-${size}x${size}.png`;
    link.href = qrDataUrl;
    link.click();
  }

  return (
    <ToolLayout {...metadata}
        title={titleOverride || metadata.title}
        description={descriptionOverride || metadata.description} locale={locale as any} dict={dict}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <label className="mb-1 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
            {qr.size || "Size (px)"}
          </label>
          <select value={size} onChange={(e) => setSize(Number(e.target.value))}
            className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-900">
            {sizes.map((s) => <option key={s} value={s}>{s}×{s}</option>)}
          </select>
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
            {qr.errorCorrection || "Error Correction"}
          </label>
          <select value={correction} onChange={(e) => setCorrection(e.target.value)}
            className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-900">
            <option value="L">Low (7%)</option>
            <option value="M">Medium (15%)</option>
            <option value="Q">Quartile (25%)</option>
            <option value="H">High (30%)</option>
          </select>
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
            {qr.foregroundColor || "Foreground Color"}
          </label>
          <div className="flex gap-2">
            <input type="color" value={fgColor} onChange={(e) => setFgColor(e.target.value)}
              className="h-10 w-12 rounded-lg border border-zinc-300 bg-white p-0.5 dark:border-zinc-700 dark:bg-zinc-900" />
            <input type="text" value={fgColor} onChange={(e) => setFgColor(e.target.value)}
              className="flex-1 rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-900" />
          </div>
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
            {qr.backgroundColor || "Background Color"}
          </label>
          <div className="flex gap-2">
            <input type="color" value={bgColor} onChange={(e) => setBgColor(e.target.value)}
              className="h-10 w-12 rounded-lg border border-zinc-300 bg-white p-0.5 dark:border-zinc-700 dark:bg-zinc-900" />
            <input type="text" value={bgColor} onChange={(e) => setBgColor(e.target.value)}
              className="flex-1 rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-900" />
          </div>
        </div>
      </div>

      <div className="mt-4">
        <label className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
          {qr.presets || "Quick Presets"}
        </label>
        <div className="flex flex-wrap gap-2">
          <button onClick={() => setText("https://example.com")} className="rounded-lg bg-zinc-200 px-3 py-1.5 text-xs font-medium text-zinc-600 transition-colors hover:bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700">🌐 URL</button>
          <button onClick={() => setText("mailto:user@example.com")} className="rounded-lg bg-zinc-200 px-3 py-1.5 text-xs font-medium text-zinc-600 transition-colors hover:bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700">📧 Email</button>
          <button onClick={() => setText("tel:+1234567890")} className="rounded-lg bg-zinc-200 px-3 py-1.5 text-xs font-medium text-zinc-600 transition-colors hover:bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700">📞 Phone</button>
          <button onClick={() => setText("WIFI:T:WPA;S:NetworkName;P:Password;;")} className="rounded-lg bg-zinc-200 px-3 py-1.5 text-xs font-medium text-zinc-600 transition-colors hover:bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700">📶 WiFi</button>
          <button onClick={() => setText("Hello, World!")} className="rounded-lg bg-zinc-200 px-3 py-1.5 text-xs font-medium text-zinc-600 transition-colors hover:bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700">💬 Text</button>
        </div>
      </div>

      <div className="mt-4">
        <label className="mb-1 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
          {qr.textOrUrl || "Text or URL"}
        </label>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={qr.placeholder || "Enter text, URL, email, phone, or any data..."}
          rows={3}
          className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-900"
        />
      </div>

      <button onClick={generateQR} className="mt-4 rounded-lg bg-blue-600 px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700">
        {qr.generate || "Generate QR Code"}
      </button>

      {error && (
        <div className="mt-4 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700 dark:border-red-800 dark:bg-red-950 dark:text-red-300">{error}</div>
      )}

      {qrDataUrl && (
        <div className="mt-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">{qr.preview || "QR Code Preview"}</h3>
            <button onClick={handleDownload} className="rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-green-700">
              {qr.download || "Download PNG"}
            </button>
          </div>
          <div className="mt-4 flex flex-col items-center gap-4">
            <div className="rounded-xl border-4 border-white bg-white p-6 shadow-lg dark:border-zinc-700 dark:bg-zinc-800">
              <img src={qrDataUrl} alt="Generated QR Code" className="block" />
            </div>
            <div className="flex gap-4 text-sm text-zinc-500 dark:text-zinc-400">
              <span>Size: {size}×{size}</span>
              <span>Error Correction: {correction}</span>
              <span>{qr.inputLength || "Input"}: {text.length} {qr.chars || "chars"}</span>
            </div>
          </div>
        </div>
      )}

      <canvas ref={canvasRef} className="hidden" />
    </ToolLayout>
  );
}
