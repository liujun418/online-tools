import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        {/* Toolbox body */}
        <rect x="3" y="12" width="22" height="12" rx="2" fill="#2563eb" />
        {/* Toolbox lid */}
        <rect x="5" y="8" width="18" height="6" rx="1.5" fill="#1d4ed8" />
        {/* Handle */}
        <path d="M10 8V6C10 4.343 11.343 3 13 3H15C16.657 3 18 4.343 18 6V8" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" />
        {/* Tool symbol - lightning bolt */}
        <path d="M15 15L12 19H14L13 23L18 17H16L17 15H15Z" fill="white" />
      </svg>
      <span className="text-xl font-bold text-zinc-900 dark:text-white tracking-tight">
        Tool<span className="text-blue-600">Box</span>
        <span className="text-zinc-400 dark:text-zinc-500 font-semibold">Online</span>
      </span>
    </Link>
  );
}
