"use client";

import { useState } from "react";
import styles from "./Footer.module.css";

export default function Footer({ discordInvite }: { discordInvite: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.wrapper}>
      {open && (
        <div className={styles.panel}>
          <img
            src="/assets/logo.png"
            alt="Abyss Network"
            className={styles.logo}
          />
          <p className={styles.name}>Abyssal Trench Network</p>
          <a
            href={discordInvite}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.discord}
          >
            Join the Discord
          </a>
          <p className={styles.copy}>
            &copy; {new Date().getFullYear()} Abyss Network
            <br />
            Made with ❤️ by riot003
          </p>
        </div>
      )}
      <button
        className={`${styles.toggle} ${open ? styles.open : ""}`}
        onClick={() => setOpen(!open)}
        aria-label="Toggle footer"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {open ? (
            <path d="M18 6L6 18M6 6l12 12" />
          ) : (
            <>
              <circle cx="12" cy="12" r="1" />
              <circle cx="19" cy="12" r="1" />
              <circle cx="5" cy="12" r="1" />
            </>
          )}
        </svg>
      </button>
    </div>
  );
}
