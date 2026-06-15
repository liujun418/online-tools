"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import jsQR from "jsqr";
import ToolLayout from "@/components/ToolLayout";

export default function QrCodeScannerClient({
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
  const qs = (dict as any)?.qrCodeScanner || {};

  const [result, setResult] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [scanning, setScanning] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const animRef = useRef<number>(0);

  const stopCamera = useCallback(() => {
    streamRef.current?.getTracks().forEach((t) => t.stop());
    streamRef.current = null;
    if (animRef.current) cancelAnimationFrame(animRef.current);
    setScanning(false);
  }, []);

  useEffect(() => {
    return () => stopCamera();
  }, [stopCamera]);

  const decodeImage = useCallback((img: HTMLImageElement | CanvasImageSource, w: number, h: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.drawImage(img as CanvasImageSource, 0, 0, w, h);
    const imageData = ctx.getImageData(0, 0, w, h);
    const code = jsQR(imageData.data, imageData.width, imageData.height);
    if (code) {
      setResult(code.data);
      setError(null);
    } else {
      setError(qs.noQrFound || "No QR code found in this image.");
    }
  }, [qs.noQrFound]);

  const startCamera = async () => {
    setError(null);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment" },
      });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
        setScanning(true);
        tick();
      }
    } catch {
      setError(qs.noCamera || "Camera not available or permission denied.");
    }
  };

  const tick = () => {
    if (!videoRef.current || !canvasRef.current) return;
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (video.readyState !== video.HAVE_ENOUGH_DATA) {
      animRef.current = requestAnimationFrame(tick);
      return;
    }
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const code = jsQR(imageData.data, imageData.width, imageData.height);
    if (code) {
      setResult(code.data);
      setError(null);
      stopCamera();
      return;
    }
    animRef.current = requestAnimationFrame(tick);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setError(null);
    const reader = new FileReader();
    reader.onload = (ev) => {
      const img = new Image();
      img.onload = () => decodeImage(img, img.naturalWidth, img.naturalHeight);
      img.src = ev.target?.result as string;
    };
    reader.readAsDataURL(file);
  };

  // Paste handler
  useEffect(() => {
    const handler = (e: ClipboardEvent) => {
      const items = e.clipboardData?.items;
      if (!items) return;
      for (const item of Array.from(items)) {
        if (item.type.startsWith("image/")) {
          const blob = item.getAsFile();
          if (!blob) continue;
          const reader = new FileReader();
          reader.onload = (ev) => {
            const img = new Image();
            img.onload = () => decodeImage(img, img.naturalWidth, img.naturalHeight);
            img.src = ev.target?.result as string;
          };
          reader.readAsDataURL(blob);
          return;
        }
      }
    };
    window.addEventListener("paste", handler);
    return () => window.removeEventListener("paste", handler);
  }, [decodeImage]);

  const metadata = {
    title: "QR Code Scanner — Scan with Camera Online",
    description: "Scan QR codes using your camera, or decode from uploaded or pasted images. Fast, private, and works entirely in your browser.",
    keywords: ["qr code scanner", "scan qr code online", "qr scanner camera", "decode qr code", "qr code reader"],
    toolId: "qr-code-scanner",
  };

  return (
    <ToolLayout
      title={titleOverride || metadata.title}
      description={descriptionOverride || metadata.description}
      keywords={metadata.keywords}
      toolId={metadata.toolId}
      locale={locale as any}
      dict={dict}
    >
      <div className="space-y-4">
        {/* Instructions */}
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          {qs.instructions || "Paste an image from clipboard, upload a file, or use your camera to scan."}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3">
          {!scanning ? (
            <button
              onClick={startCamera}
              className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
            >
              {qs.startCamera || "Start Camera"}
            </button>
          ) : (
            <button
              onClick={stopCamera}
              className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
            >
              {qs.stopCamera || "Stop Camera"}
            </button>
          )}
          <button
            onClick={() => fileInputRef.current?.click()}
            className="rounded-lg bg-zinc-200 px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
          >
            {qs.uploadImage || "Upload Image"}
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileUpload}
            className="hidden"
          />
        </div>

        {/* Video */}
        <div className="relative overflow-hidden rounded-lg border border-zinc-300 dark:border-zinc-700">
          <video
            ref={videoRef}
            className={`w-full max-w-md mx-auto ${scanning ? "block" : "hidden"}`}
            playsInline
            muted
          />
          {!scanning && (
            <div className="flex items-center justify-center bg-zinc-100 py-16 text-zinc-400 dark:bg-zinc-900 dark:text-zinc-600">
              <svg className="h-12 w-12" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
              </svg>
            </div>
          )}
        </div>

        {/* Hidden canvas for decoding */}
        <canvas ref={canvasRef} className="hidden" />

        {/* Error */}
        {error && (
          <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700 dark:border-red-800 dark:bg-red-950 dark:text-red-300">
            {error}
          </div>
        )}

        {/* Result */}
        {result && (
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                {qs.result || "Result"}
              </span>
              <button
                onClick={() => navigator.clipboard.writeText(result)}
                className="rounded bg-zinc-200 px-3 py-1 text-xs font-medium text-zinc-700 hover:bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
              >
                {qs.copy || "Copy"}
              </button>
            </div>
            <div className="rounded-lg border border-green-200 bg-green-50 p-4 font-mono text-sm break-all dark:border-green-800 dark:bg-green-950 dark:text-green-300">
              {result}
            </div>
          </div>
        )}
      </div>
    </ToolLayout>
  );
}
