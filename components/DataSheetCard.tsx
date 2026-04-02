import Link from "next/link";
import type { DataSheet } from "@/lib/data";
import { toSlug, assetPath } from "@/lib/data";
import styles from "./DataSheetCard.module.css";

export default function DataSheetCard({ sheet }: { sheet: DataSheet }) {
  return (
    <Link href={`/data/${toSlug(sheet.name)}`} className={styles.card}>
      {sheet.image && (
        <div className={styles.imageWrap}>
          <img src={assetPath(sheet.image)} alt={sheet.name} className={styles.image} />
        </div>
      )}
      <div className={styles.body}>
        <div className={styles.icon}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="7" height="7" rx="1" />
            <rect x="14" y="3" width="7" height="7" rx="1" />
            <rect x="3" y="14" width="7" height="7" rx="1" />
            <rect x="14" y="14" width="7" height="7" rx="1" />
          </svg>
        </div>
        <h3 className={styles.name}>{sheet.name}</h3>
        <span className={styles.external}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
