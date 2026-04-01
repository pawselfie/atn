"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./DetailPage.module.css";

interface DetailPageProps {
  title: string;
  url: string;
  embedUrl: string | null;
  backHref: string;
  backLabel: string;
  buttonLabel: string;
}

export default function DetailPage({
  title,
  url,
  embedUrl,
  backHref,
  backLabel,
  buttonLabel,
}: DetailPageProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`${styles.wrapper} ${expanded ? styles.expanded : ""}`}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <Link href={backHref} className={styles.back}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            {backLabel}
          </Link>
          {!expanded && <h1 className={styles.title}>{title}</h1>}
        </div>
        <div className={styles.headerRight}>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.openBtn}
          >
            {buttonLabel}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
          {embedUrl && (
            <button
              className={styles.expandBtn}
              onClick={() => setExpanded(!expanded)}
              aria-label={expanded ? "Collapse" : "Expand"}
            >
              {expanded ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="4 14 10 14 10 20" />
                  <polyline points="20 10 14 10 14 4" />
                  <line x1="14" y1="10" x2="21" y2="3" />
                  <line x1="3" y1="21" x2="10" y2="14" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 3 21 3 21 9" />
                  <polyline points="9 21 3 21 3 15" />
                  <line x1="21" y1="3" x2="14" y2="10" />
                  <line x1="3" y1="21" x2="10" y2="14" />
                </svg>
              )}
            </button>
          )}
        </div>
      </div>
      {embedUrl ? (
        <iframe
          src={embedUrl}
          className={styles.embed}
          title={title}
          allowFullScreen
        />
      ) : (
        <div className={styles.noEmbed}>
          <p>This content cannot be embedded directly.</p>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.openBtn}
          >
            {buttonLabel}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </div>
      )}
    </div>
  );
}
