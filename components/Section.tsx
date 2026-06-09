import styles from "./Section.module.css";

type SectionProps = {
  id: string;
  num: string;
  label: string;
  title: React.ReactNode;
  children: React.ReactNode;
};

export default function Section({ id, num, label, title, children }: SectionProps) {
  return (
    <section className={styles.section} id={id} data-reveal>
      <div className={styles.rail}>
        <span className={styles.railNum}>{num}</span>
        <span className={styles.railLabel}>{label}</span>
      </div>
      <div className={styles.body}>
        <h2 className={styles.heading}>{title}</h2>
        {children}
      </div>
    </section>
  );
}
