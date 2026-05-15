import type { Dictionary } from "@/lib/i18n/dictionaries";
import styles from "./Footer.module.css";

export function Footer({ dict }: { dict: Dictionary["footer"] }) {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className="mono">{dict.copy}</div>
        <div className="mono dim">{dict.tagline}</div>
      </div>
    </footer>
  );
}
