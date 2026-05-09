import { STACK } from "@/content/data/stack";
import styles from "./Stack.module.css";

export function StackSection() {
  return (
    <section className="section reveal" id="stack">
      <div className="section-rail">
        <span className="rail-num">04</span>
        <span className="rail-label">стек</span>
      </div>
      <div className="narrative-body">
        <h2 className="sec-h">
          Мой набор <span className="ac">инструментов</span>.
        </h2>
        <div className={styles.grid}>
          {STACK.map((g, i) => (
            <div className={styles.col} key={i}>
              <div className={`${styles.title} mono`}>{g.title}</div>
              <div className={styles.items}>
                {g.items.map((it, k) => (
                  <span className="chip" key={k}>
                    {it}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
