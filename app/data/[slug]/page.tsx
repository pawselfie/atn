import { notFound } from "next/navigation";
import { data, toSlug, toEmbedUrl } from "@/lib/data";
import DetailPage from "@/components/DetailPage";

export function generateStaticParams() {
  return data.dataSheets.map((sheet) => ({ slug: toSlug(sheet.name) }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const sheet = data.dataSheets.find((s) => toSlug(s.name) === slug);
  if (!sheet) return { title: "Data Sheet Not Found" };
  return {
    title: `${sheet.name} ⋅ BSS Data`,
    description: `${sheet.name} — Bee Swarm Simulator statistics and data by Abyss Network.`,
  };
}

export default async function DataSheetPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const sheet = data.dataSheets.find((s) => toSlug(s.name) === slug);
  if (!sheet) notFound();

  return (
    <DetailPage
      title={sheet.name}
      url={sheet.url}
      embedUrl={toEmbedUrl(sheet.url)}
      backHref="/data"
      backLabel="Data Sheets"
      buttonLabel="Open in Google Sheets"
    />
  );
}
