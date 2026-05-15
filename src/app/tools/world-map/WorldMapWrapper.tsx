"use client";

import dynamic from "next/dynamic";

const WorldMapClient = dynamic(() => import("./WorldMapClient"), { ssr: false });

export default function WorldMapWrapper(props: any) {
  return <WorldMapClient {...props} />;
}
