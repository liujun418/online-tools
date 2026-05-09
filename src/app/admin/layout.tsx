import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getDictionary } from "@/lib/i18n";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const dict = await getDictionary("en");

  return (
    <body className="flex min-h-full flex-col bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <Header locale="en" dict={dict} />
      <main className="flex-1">{children}</main>
      <Footer locale="en" dict={dict} />
    </body>
  );
}
