import type { Metadata } from "next";
import ReactionTestClient from "./ReactionTestClient";

export const metadata: Metadata = {
  title: "Reaction Time Tester - Test Your Reflexes | ToolBoxOnline",
  description: "Test your reflexes with this reaction time game. Click when the color changes to green and measure your response speed in milliseconds. Challenge yourself to beat your best time.",
  keywords: "reaction time test, reflex test, reaction speed, how fast is my reaction, reaction time game, reflex speed test, click reaction test",
  alternates: { canonical: "/tools/reaction-test" },
};

export default function ReactionTestPage() {
  return <ReactionTestClient />;
}
