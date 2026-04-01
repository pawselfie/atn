import Hero from "@/components/Hero";
import CategoryPreview from "@/components/CategoryPreview";
import LockScroll from "@/components/LockScroll";
import { data } from "@/lib/data";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      <LockScroll />
      <Hero discordInvite={data.discordInvite} />
      <section className={styles.categories}>
        <div className={styles.grid}>
          <CategoryPreview
            title="Projects"
            count={data.projects.length}
            href="/projects"
            accent="teal"
            icon={
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
              </svg>
            }
          />
          <CategoryPreview
            title="Guides"
            count={data.guides.length}
            href="/guides"
            accent="blue"
            icon={
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
              </svg>
            }
          />
          <CategoryPreview
            title="Data Sheets"
            count={data.dataSheets.length}
            href="/data"
            accent="purple"
            icon={
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7" rx="1" />
                <rect x="14" y="3" width="7" height="7" rx="1" />
                <rect x="3" y="14" width="7" height="7" rx="1" />
                <rect x="14" y="14" width="7" height="7" rx="1" />
              </svg>
            }
          />
        </div>
      </section>
    </div>
  );
}
