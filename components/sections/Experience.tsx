import { JOBS } from "@/content/data/experience";
import styles from "./Experience.module.css";

export function ExperienceSection() {
  return (
    <section className="section reveal" id="experience">
      <div className="section-rail">
        <span className="rail-num">02</span>
        <span className="rail-label">опыт работы</span>
      </div>
      <div className="narrative-body">
        <h2 className="sec-h">
          Три компании. <span className="ac">Шесть с лишним лет.</span> Один
          любимый стек.
        </h2>
        <div className={styles.timeline}>
          {JOBS.map((j, i) => (
            <article className={styles.job} key={i}>
              <div className={styles.spine}>
                <div
                  className={`${styles.dot} ${j.current ? styles.dotCurrent : ""}`}
                />
                {i < JOBS.length - 1 && <div className={styles.line} />}
              </div>
              <div className={styles.body}>
                <div className={styles.head}>
                  <div>
                    <h3 className={styles.co}>{j.co}</h3>
                    <div className={styles.role}>
                      {j.role}
                      {j.note && (
                        <span className={styles.note}> · {j.note}</span>
                      )}
                    </div>
                  </div>
                  <div className={styles.period}>
                    {j.current && <span className={styles.ping} />}
                    {j.period}
                  </div>
                </div>
                <p className={styles.text}>{j.text}</p>
                {j.bullets && j.bullets.length > 0 && (
                  <ul className={styles.bullets}>
                    {j.bullets.map((b, k) => (
                      <li key={k}>
                        <span className={styles.tick}>▸</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
