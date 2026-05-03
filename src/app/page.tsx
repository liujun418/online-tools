import { tools } from "@/lib/tools";
import ToolCard from "@/components/ToolCard";

const categories = [
  { key: "text", label: "Text Tools", id: "text-tools" },
  { key: "developer", label: "Developer Tools", id: "developer-tools" },
  { key: "calculator", label: "Calculators", id: "calculators" },
  { key: "converter", label: "Converters", id: "converters" },
];

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
        <p className="mx-auto mt-2 text-sm text-zinc-400 dark:text-zinc-500">
          {tools.length} tools available now, more coming soon
        </p>
      </section>

      {categories.map((cat) => {
        const catTools = tools.filter((t) => t.category === cat.key);
        return (
          <section id={cat.id} key={cat.key} className="mb-12">
            <h2 className="mb-6 text-2xl font-semibold text-zinc-900 dark:text-white">
              {cat.label}
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {catTools.map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
