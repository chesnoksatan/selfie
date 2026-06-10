import styles from "./Section.module.css";

type SectionProps = {
  id: string;
  label: string;
  title: React.ReactNode;
  children: React.ReactNode;
};

export default function Section({ id, label, title, children }: SectionProps) {
  return (
    <section className={styles.section} id={id} data-reveal>
      <div className={styles.rail}>
        <span className={styles.railLabel}>{`// ${label}`}</span>
      </div>
      <div className={styles.body}>
        <h2 className={styles.heading}>{title}</h2>
        {children}
      </div>
    </section>
  );
}
