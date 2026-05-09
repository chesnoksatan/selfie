import styles from "./Contacts.module.css";

const ITEMS = [
  {
    label: "Email",
    value: "chestwins@gmail.com",
    href: "mailto:chestwins@gmail.com",
  },
  {
    label: "Telegram",
    value: "@chesnoksatan",
    href: "https://t.me/chesnoksatan",
  },
  {
    label: "GitHub",
    value: "github.com/chesnoksatan",
    href: "https://github.com/chesnoksatan",
  },
];

export function ContactsSection() {
  return (
    <section className="section reveal" id="contacts">
      <div className="section-rail">
        <span className="rail-num">06</span>
        <span className="rail-label">контакты</span>
      </div>
      <div className="narrative-body">
        <h2 className="sec-h">
          Сейчас я не в активном поиске работы, но{" "}
          <span className="ac">всегда рад знакомству</span>.
        </h2>
        <p className="dim">
          Обсудить интересный проект, поговорить о Qt, QML, хорошем UI — или
          просто сказать «привет». Любой повод подойдёт.
        </p>
        <div className={styles.list}>
          {ITEMS.map((c, i) => (
            <a
              className={styles.row}
              href={c.href}
              key={i}
              target="_blank"
              rel="noreferrer"
            >
              <span className={`${styles.label} mono`}>{c.label}</span>
              <span className={styles.value}>{c.value}</span>
              <span className={styles.arr}>→</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
