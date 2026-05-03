import { tools } from "@/lib/tools";
import ToolCard from "@/components/ToolCard";

const textTools = tools.filter((t) => t.category === "text");
const devTools = tools.filter((t) => t.category === "developer");

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      {/* Hero */}
      <section className="mb-16 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
          Free Online Tools
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-500 dark:text-zinc-400">
          Fast, free, and easy-to-use online tools. No signup required.
          Everything runs in your browser — your data stays private.
        </p>
      </section>

      {/* Text Tools */}
      <section id="text-tools" className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-zinc-900 dark:text-white">
          Text Tools
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {textTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </section>

      {/* Developer Tools */}
      <section id="developer-tools">
        <h2 className="mb-6 text-2xl font-semibold text-zinc-900 dark:text-white">
          Developer Tools
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {devTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </section>
    </div>
  );
}
