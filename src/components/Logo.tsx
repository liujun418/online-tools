import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/logo.png"
        alt="ToolBoxOnline"
        width={180}
        height={50}
        className="h-8 w-auto"
        priority
      />
    </Link>
  );
}
