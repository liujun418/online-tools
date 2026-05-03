import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="text-xl font-bold text-zinc-900 dark:text-white">
          ToolBox<span className="text-blue-600">Online</span>
        </Link>
        <nav className="flex gap-6 text-sm text-zinc-600 dark:text-zinc-400">
          <Link href="/" className="hover:text-zinc-900 dark:hover:text-white">
            Home
          </Link>
          <Link
            href="/#text-tools"
            className="hover:text-zinc-900 dark:hover:text-white"
          >
            Text Tools
          </Link>
          <Link
            href="/#developer-tools"
            className="hover:text-zinc-900 dark:hover:text-white"
          >
            Dev Tools
          </Link>
        </nav>
      </div>
    </header>
  );
}
