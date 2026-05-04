import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import Logo from "@/components/Logo";

export default function Header() {
  return (
    <header className="border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Logo />
        <nav className="flex items-center gap-4 text-sm text-zinc-600 dark:text-zinc-400 sm:gap-6">
          <Link href="/" className="hover:text-zinc-900 dark:hover:text-white">
            Home
          </Link>
          <Link href="/#text-tools" className="hidden hover:text-zinc-900 dark:hover:text-white sm:inline">
            Text
          </Link>
          <Link href="/#developer-tools" className="hidden hover:text-zinc-900 dark:hover:text-white sm:inline">
            Dev
          </Link>
          <Link href="/#calculators" className="hidden hover:text-zinc-900 dark:hover:text-white sm:inline">
            Calculators
          </Link>
          <Link href="/#converters" className="hidden hover:text-zinc-900 dark:hover:text-white sm:inline">
            Converters
          </Link>
          <div className="ml-1 border-l border-zinc-200 pl-4 dark:border-zinc-800">
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}
