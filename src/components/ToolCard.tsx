import Link from "next/link";
import { Tool } from "@/lib/tools";

export default function ToolCard({ tool }: { tool: Tool }) {
  return (
    <Link
      href={tool.path}
      className="group flex flex-col gap-3 rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:border-blue-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-blue-700"
    >
      <span className="text-3xl">{tool.icon}</span>
      <h3 className="text-lg font-semibold text-zinc-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
        {tool.name}
      </h3>
      <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
        {tool.description}
      </p>
    </Link>
  );
}
