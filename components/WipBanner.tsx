import styles from "./WipBanner.module.css";

export function WipBanner() {
  return (
    <div className={styles.banner}>
      <span className={styles.dot} aria-hidden />
      <span className="mono">
        // сайт в разработке — что-то ещё дорабатывается
      </span>
    </div>
  );
}
