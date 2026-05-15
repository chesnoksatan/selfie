import { KDE } from "@/content/data/projects";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import styles from "./Projects.module.css";

export function ProjectsSection({
  dict,
  locale,
}: {
  dict: Dictionary["projects"];
  locale: Locale;
}) {
  const projects = KDE[locale];
  return (
    <section className="section reveal" id="projects">
      <div className="section-rail">
        <span className="rail-num">03</span>
        <span className="rail-label">{dict.rail}</span>
      </div>
      <div className="narrative-body">
        <h2 className="sec-h">
          {dict.head.pre}
          <span className="ac">{dict.head.ac}</span>
          {dict.head.post}
        </h2>
        <p className="dim">{dict.desc}</p>
        <div className={styles.grid}>
          {projects.map((k, i) => (
            <a
              className={styles.card}
              key={i}
              href={k.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.head}>
                <span className={`${styles.name} mono`}>{k.name}</span>
                <span className={styles.tag}>{k.tag}</span>
              </div>
              <p className={styles.desc}>{k.desc}</p>
              <div className={`${styles.foot} mono`}>
                <span>
                  {k.url.includes("github.com")
                    ? "github.com"
                    : "invent.kde.org"}
                </span>
                <span>↗</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
