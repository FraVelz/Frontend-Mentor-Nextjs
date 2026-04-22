import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { challengePages } from "./_utils/lazy-imports";
import { challengeMetadata } from "./_utils/metadata";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const meta = challengeMetadata[slug];

  if (!meta) {
    return { title: "Reto" };
  }

  return meta;
}

export default async function ChallengeBySlugPage({ params }: PageProps) {
  const { slug } = await params;

  const loadPage = challengePages[slug];
  if (!loadPage) {
    notFound();
  }

  const { default: Page } = await loadPage();
  return <Page />;
}
