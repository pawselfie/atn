import Link from "next/link";
import type { Guide } from "@/lib/data";
import { toSlug, assetPath } from "@/lib/data";
import styles from "./GuideCard.module.css";

export default function GuideCard({ guide }: { guide: Guide }) {
  return (
    <Link href={`/guides/${toSlug(guide.name)}`} className={styles.card}>
      {guide.image && (
        <div className={styles.imageWrap}>
          <img src={assetPath(guide.image)} alt={guide.name} className={styles.image} />
        </div>
      )}
      <div className={styles.body}>
        <div className={styles.icon}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
          </svg>
        </div>
        <h3 className={styles.name}>{guide.name}</h3>
        <span className={styles.external}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
