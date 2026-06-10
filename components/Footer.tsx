import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className="mono">© 2026 Евгений Чесноков</div>
        <div className="mono dim">сделано с любовью к Qt</div>
      </div>
    </footer>
  );
}
