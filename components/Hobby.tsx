import Section from "./Section";
import styles from "./Hobby.module.css";

// Тарелка лазаньи на чистом CSS. В прототипе было четыре варианта арта,
// в продакшен поехал только этот.
function LasagnaArt() {
  return (
    <div className={styles.lasagnaPlate} aria-hidden>
      <div className={styles.plate}>
        <div className={styles.slice}>
          <div className={styles.sPasta} />
          <div className={styles.sSauce1} />
          <div className={styles.sPasta} />
          <div className={styles.sCheese} />
          <div className={styles.sPasta} />
          <div className={styles.sSauce2} />
          <div className={styles.sPasta} />
          <div className={styles.sTop} />
        </div>
        <div className={styles.basilLeaf} />
      </div>
      <div className={styles.steam} />
    </div>
  );
}

export default function Hobby() {
  return (
    <Section
      id="hobby"
      label="вне кода"
      title={
        <>
          Кроме работы у меня есть <span className="ac">три важные вещи</span>.
        </>
      }
    >
      <div className={styles.hobbyGrid}>
        <article className={styles.hobbyCard}>
          <div className={styles.hobbyArt} aria-hidden>
            <div className={styles.catArt}>🐈</div>
          </div>
          <div className={styles.hobbyText}>
            <div className={`${styles.hobbyTag} mono`}>кот</div>
            <h3>Лео.</h3>
            <p>
              Это мой кот. Переезжал со мной в Питер и стойко перенёс это
              испытание — теперь мы оба здесь как дома. Лео считает, что мой
              стол в первую очередь его рабочее место, и я с ним не спорю.
            </p>
            <p className="dim small">
              <span className="mono">{"// начальник тоже бывает пушистым"}</span>
            </p>
          </div>
        </article>

        <article className={styles.hobbyCard}>
          <div className={styles.hobbyArt} aria-hidden>
            <LasagnaArt />
          </div>
          <div className={styles.hobbyText}>
            <div className={`${styles.hobbyTag} mono`}>готовка</div>
            <h3>Лазанья — моё фирменное.</h3>
            <p>
              Готовка меня успокаивает. Могу часами что-то делать на кухне и не
              уставать — наоборот, разгружается голова, и в конце ещё и есть что
              съесть. Моё фирменное блюдо — лазанья, и она у меня получается{" "}
              <em>превосходно</em>.
            </p>
            <p className="dim small">
              <span className="mono">{"// и я в этом убеждён"}</span>
            </p>
          </div>
        </article>

        <article className={styles.hobbyCard}>
          <div className={styles.hobbyArt} aria-hidden>
            <div className={styles.cardsStack}>
              <div className={`${styles.postcard} ${styles.p1}`}>
                <span className={styles.stamp} />
                Лиссабон
              </div>
              <div className={`${styles.postcard} ${styles.p2}`}>
                <span className={styles.stamp} />
                Прага
              </div>
              <div className={`${styles.postcard} ${styles.p3}`}>
                <span className={styles.stamp} />
                Тбилиси
              </div>
            </div>
          </div>
          <div className={styles.hobbyText}>
            <div className={`${styles.hobbyTag} mono`}>коллекция</div>
            <h3>Открытки и фотографии.</h3>
            <p>
              Я собираю красивые открытки из разных городов и стран — какие-то
              привожу сам, какие-то прошу привезти друзей. Из этого постепенно
              складывается своя личная карта мира. А недавно я ещё и сам начал
              снимать на papershoot и иногда печатать фотографии — теперь к
              чужим городам добавляются мои.
            </p>
            <p className="dim small">
              <span className="mono">{"// если едете куда-нибудь — пишите"}</span>
            </p>
          </div>
        </article>
      </div>
    </Section>
  );
}
