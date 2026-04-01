import { notFound } from "next/navigation";
import { data, toSlug, toEmbedUrl } from "@/lib/data";
import DetailPage from "@/components/DetailPage";

export function generateStaticParams() {
  return data.projects.map((project) => ({ slug: toSlug(project.name) }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = data.projects.find((p) => toSlug(p.name) === slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.name} ⋅ BSS Tool`,
    description: `${project.name} — a Bee Swarm Simulator ${project.type.toLowerCase()} by Abyss Network.`,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = data.projects.find((p) => toSlug(p.name) === slug);
  if (!project) notFound();

  const canEmbed = project.type === "Website" && !project.discordExclusive;
  const embedUrl = canEmbed ? toEmbedUrl(project.url) : null;

  let buttonLabel = "Visit Project";
  if (project.discordExclusive) buttonLabel = "Open in Discord";
  else if (project.url.includes("github.com")) buttonLabel = "View on GitHub";

  return (
    <DetailPage
      title={project.name}
      url={project.url}
      embedUrl={embedUrl}
      backHref="/projects"
      backLabel="Projects"
      buttonLabel={buttonLabel}
    />
  );
}
