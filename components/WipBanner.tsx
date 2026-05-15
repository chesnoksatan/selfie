import styles from "./WipBanner.module.css";

export function WipBanner({ text }: { text: string }) {
  return (
    <div className={styles.banner}>
      <span className={styles.dot} aria-hidden />
      <span className="mono">{text}</span>
    </div>
  );
}
