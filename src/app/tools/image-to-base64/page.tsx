import type { Metadata } from "next";
import ImageToBase64Client from "./ImageToBase64Client";

export const metadata: Metadata = {
  title: "Image to Base64 Converter | ToolBoxOnline",
  description: "Convert images to Base64 encoded strings for embedding in code. Free online image to Base64 converter.",
  keywords: "image to base64, convert image to base64, image base64 converter, png to base64, jpg to base64, embed image in html, data uri generator",
  alternates: { canonical: "/tools/image-to-base64" },
};

export default function ImageToBase64Page() {
  return <ImageToBase64Client />;
}
