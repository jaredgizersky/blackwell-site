import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NoSugr - Break Free From Sugar",
  description: "Track your sugar-free journey, build lasting streaks, and transform your health with NoSugr - the mindful way to overcome sugar addiction.",
  keywords: ["sugar free", "health tracking", "wellness", "sugar addiction", "streak tracking"],
  openGraph: {
    title: "NoSugr - Break Free From Sugar",
    description: "Track your sugar-free journey, build lasting streaks, and transform your health with NoSugr.",
    type: "website",
  },
};

export default function NoSugrLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}