import HomeClient from "./[locale]/HomeClient";
import { getDictionary } from "@/lib/i18n";

export default async function RootPage() {
  const dict = await getDictionary("en");
  return <HomeClient locale="en" dict={dict} />;
}
