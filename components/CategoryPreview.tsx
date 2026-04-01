import Link from "next/link";
import styles from "./CategoryPreview.module.css";

interface CategoryPreviewProps {
  title: string;
  count: number;
  href: string;
  accent: "teal" | "blue" | "purple";
  icon: React.ReactNode;
}

export default function CategoryPreview({
  title,
  count,
  href,
  accent,
  icon,
}: CategoryPreviewProps) {
  return (
    <Link href={href} className={`${styles.card} ${styles[accent]}`}>
      <div className={styles.iconWrap}>{icon}</div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.count}>
        {count} {count === 1 ? "item" : "items"}
      </p>
      <span className={styles.cta}>View All</span>
    </Link>
  );
}
