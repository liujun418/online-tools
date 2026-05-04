import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        {/* Hexagon background */}
        <polygon points="16,2 28,9 28,23 16,30 4,23 4,9" fill="#2563eb" />
        {/* Inner hexagon */}
        <polygon points="16,5 25,10.5 25,21.5 16,27 5,21.5 5,10.5" fill="#3b82f6" />
        {/* Wrench icon */}
        <path
          d="M12 15 C12 12, 14 10, 16 10 C18 10, 20 12, 20 15 L19 16 L16 18 L13 16 Z"
          fill="white"
        />
        <circle cx="16" cy="13" r="1.5" fill="#2563eb" />
      </svg>
      <span className="text-xl font-bold text-zinc-900 dark:text-white tracking-tight">
        Tool<span className="text-blue-600">Box</span>
        <span className="text-zinc-400 dark:text-zinc-500 font-semibold">Online</span>
      </span>
    </Link>
  );
}
