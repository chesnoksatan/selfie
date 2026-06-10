import Section from "./Section";
import styles from "./Stack.module.css";

const GROUPS = [
  {
    title: "Основное",
    items: ["C++", "Qt", "QML", "Кастомный UI", "UX-проектирование"],
  },
  { title: "Дополнительно", items: ["Python", "CMake", "Git", "Linux"] },
  {
    title: "Специализация",
    items: [
      "Десктопная разработка",
      "QML-интерфейсы",
      "Миграция QtWidgets → QML",
    ],
  },
];

export default function Stack() {
  return (
    <Section
      id="stack"
      label="стек"
      title={
        <>
          Мой набор <span className="ac">инструментов</span>.
        </>
      }
    >
      <div className={styles.stackGrid}>
        {GROUPS.map((g, i) => (
          <div className={styles.stackCol} key={i}>
            <div className={`${styles.stackTitle} mono`}>{g.title}</div>
            <div className={styles.stackItems}>
              {g.items.map((it, k) => (
                <span className={styles.chip} key={k}>
                  {it}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
