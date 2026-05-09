import { KDE } from "@/content/data/projects";
import styles from "./Projects.module.css";

export function ProjectsSection() {
  return (
    <section className="section reveal" id="projects">
      <div className="section-rail">
        <span className="rail-num">03</span>
        <span className="rail-label">open source</span>
      </div>
      <div className="narrative-body">
        <h2 className="sec-h">
          В рабочее время я регулярно{" "}
          <span className="ac">вношу свой вклад в KDE</span>.
        </h2>
        <p className="dim">
          Основная часть моего вклада в сообщество идёт через KDE — это часть
          моей текущей работы. У меня есть и свои небольшие проекты, но я писал
          их для себя — ничего такого, что было бы полезно кому-то, кроме меня
          самого. Поэтому здесь — про KDE и одну важную для меня историю.
        </p>
        <div className={styles.grid}>
          {KDE.map((k, i) => (
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
