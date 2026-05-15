import { STACK } from "@/content/data/stack";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import styles from "./Stack.module.css";

export function StackSection({
  dict,
  locale,
}: {
  dict: Dictionary["stack"];
  locale: Locale;
}) {
  const groups = STACK[locale];
  return (
    <section className="section reveal" id="stack">
      <div className="section-rail">
        <span className="rail-num">04</span>
        <span className="rail-label">{dict.rail}</span>
      </div>
      <div className="narrative-body">
        <h2 className="sec-h">
          {dict.head.pre}
          <span className="ac">{dict.head.ac}</span>
          {dict.head.post}
        </h2>
        <div className={styles.grid}>
          {groups.map((g, i) => (
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
