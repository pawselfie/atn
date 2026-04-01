import { notFound } from "next/navigation";
import { data, toSlug, toEmbedUrl } from "@/lib/data";
import DetailPage from "@/components/DetailPage";

export function generateStaticParams() {
  return data.guides.map((guide) => ({ slug: toSlug(guide.name) }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = data.guides.find((g) => toSlug(g.name) === slug);
  if (!guide) return { title: "Guide Not Found" };
  return {
    title: `${guide.name} ⋅ BSS Guide`,
    description: `Read ${guide.name} — a Bee Swarm Simulator guide by Abyss Network.`,
  };
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = data.guides.find((g) => toSlug(g.name) === slug);
  if (!guide) notFound();

  return (
    <DetailPage
      title={guide.name}
      url={guide.url}
      embedUrl={toEmbedUrl(guide.url)}
      backHref="/guides"
      backLabel="Guides"
      buttonLabel="Open in Google Docs"
    />
  );
}
