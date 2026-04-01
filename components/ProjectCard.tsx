import Link from "next/link";
import type { Project } from "@/lib/data";
import { toSlug } from "@/lib/data";
import styles from "./ProjectCard.module.css";

export default function ProjectCard({ project }: { project: Project }) {
  const isDeepsea = project.name.toLowerCase().includes("deepsea");
  const isDesktopApp = project.type === "Desktop App";

  const content = (
    <>
      <div className={styles.iconArea}>
        {isDeepsea ? (
          <img
            src="/assets/deepsea/transparent_logo.png"
            alt={project.name}
            className={styles.projectIcon}
          />
        ) : (
          <div className={styles.letterIcon}>
            {project.name.charAt(0)}
          </div>
        )}
      </div>
      <h3 className={styles.name}>{project.name}</h3>
      <div className={styles.badges}>
        <span className={styles.typeBadge}>{project.type}</span>
        {project.discordExclusive && (
          <span className={styles.discordBadge}>Discord Exclusive</span>
        )}
      </div>
      <span className={styles.link}>
        {isDesktopApp ? "Download" : "View"}
      </span>
    </>
  );

  if (isDesktopApp) {
    return (
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.card}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={`/projects/${toSlug(project.name)}`} className={styles.card}>
      {content}
    </Link>
  );
}
