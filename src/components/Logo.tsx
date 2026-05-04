import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/logo1.png"
        alt="ToolBoxOnline"
        width={220}
        height={55}
        className="h-8 w-auto"
        priority
      />
    </Link>
  );
}
