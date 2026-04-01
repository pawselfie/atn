import ProjectCard from "@/components/ProjectCard";
import { data } from "@/lib/data";

export const metadata = {
  title: "BSS Projects ⋅ Hive Builder, Beequip Simulator & Tools",
  description:
    "Bee Swarm Simulator community tools — Deepsea Hive Builder, Beequip Simulator, VIP Snatcher, and more BSS utilities.",
};

export default function ProjectsPage() {
  return (
    <section className="page-section">
      <h1 className="section-title">Projects</h1>
      <p className="section-subtitle">
        Tools and applications built for the community.
      </p>
      <div className="card-grid">
        {data.projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}
