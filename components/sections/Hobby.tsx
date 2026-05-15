import type { Dictionary } from "@/lib/i18n/dictionaries";
import styles from "./Hobby.module.css";

function Lasagna() {
  return (
    <div className={styles.plate} aria-hidden>
      <div className={styles.plateBase}>
        <div className={styles.slice}>
          <div className={`${styles.sLayer} ${styles.sPasta}`} />
          <div className={`${styles.sLayer} ${styles.sSauce1}`} />
          <div className={`${styles.sLayer} ${styles.sPasta}`} />
          <div className={`${styles.sLayer} ${styles.sCheese}`} />
          <div className={`${styles.sLayer} ${styles.sPasta}`} />
          <div className={`${styles.sLayer} ${styles.sSauce2}`} />
          <div className={`${styles.sLayer} ${styles.sPasta}`} />
          <div className={styles.sTop} />
        </div>
        <div className={styles.basilLeaf} />
      </div>
      <div className={styles.steam} />
    </div>
  );
}

export function HobbySection({ dict }: { dict: Dictionary["hobby"] }) {
  const { cat, cook, cards } = dict.cards;
  return (
    <section className="section reveal" id="hobby">
      <div className="section-rail">
        <span className="rail-num">05</span>
        <span className="rail-label">{dict.rail}</span>
      </div>
      <div className="narrative-body">
        <h2 className="sec-h">
          {dict.head.pre}
          <span className="ac">{dict.head.ac}</span>
          {dict.head.post}
        </h2>

        <div className={styles.grid}>
          <article className={styles.card}>
            <div className={styles.art} aria-hidden>
              <div className={styles.catArt}>🐈</div>
            </div>
            <div className={styles.text}>
              <div className={`${styles.tag} mono`}>{cat.tag}</div>
              <h3 className={styles.h3}>{cat.title}</h3>
              <p dangerouslySetInnerHTML={{ __html: cat.body }} />
              <p className="dim small">
                <span className="mono">{cat.note}</span>
              </p>
            </div>
          </article>

          <article className={styles.card}>
            <div className={styles.art}>
              <Lasagna />
            </div>
            <div className={styles.text}>
              <div className={`${styles.tag} mono`}>{cook.tag}</div>
              <h3 className={styles.h3}>{cook.title}</h3>
              <p dangerouslySetInnerHTML={{ __html: cook.body }} />
              <p className="dim small">
                <span className="mono">{cook.note}</span>
              </p>
            </div>
          </article>

          <article className={`${styles.card} ${styles.postcards}`}>
            <div className={styles.art} aria-hidden>
              <div className={styles.cardsStack}>
                <div className={`${styles.postcard} ${styles.p1}`}>
                  <span className={styles.stamp} />
                  Lisbon
                </div>
                <div className={`${styles.postcard} ${styles.p2}`}>
                  <span className={styles.stamp} />
                  Prague
                </div>
                <div className={`${styles.postcard} ${styles.p3}`}>
                  <span className={styles.stamp} />
                  Tbilisi
                </div>
              </div>
            </div>
            <div className={styles.text}>
              <div className={`${styles.tag} mono`}>{cards.tag}</div>
              <h3 className={styles.h3}>{cards.title}</h3>
              <p dangerouslySetInnerHTML={{ __html: cards.body }} />
              <p className="dim small">
                <span className="mono">{cards.note}</span>
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
