import type { Metadata } from "next";
import BookOfAnswersClient from "./BookOfAnswersClient";

export const metadata: Metadata = {
  title: "Book of Answers - Random Decision & Guidance Tool | ToolBoxOnline",
  description: "A digital Book of Answers for fun decision-making and guidance. Focus on your question, tap to reveal a random answer. 500+ curated responses across affirmation, denial, suggestion, healing, and humor categories.",
  keywords: "book of answers, random answer generator, decision maker, guidance tool, oracle, fortune teller, what should i do, random decision tool, answer generator, book of answers online free",
  alternates: { canonical: "/tools/book-of-answers" },
};

export default function BookOfAnswersPage() {
  return <BookOfAnswersClient />;
}
