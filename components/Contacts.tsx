import Section from "./Section";
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

export default function Contacts() {
  return (
    <Section
      id="contacts"
      num="06"
      label="контакты"
      title={
        <>
          Сейчас я не в активном поиске работы, но{" "}
          <span className="ac">всегда рад знакомству</span>.
        </>
      }
    >
      <p className="dim">
        Обсудить интересный проект, поговорить о Qt, QML, хорошем UI — или
        просто сказать «привет». Любой повод подойдёт.
      </p>
      <div className={styles.contactList}>
        {ITEMS.map((c, i) => (
          <a
            className={styles.contactRow}
            href={c.href}
            key={i}
            target="_blank"
            rel="noreferrer"
          >
            <span className={`${styles.contactLabel} mono`}>{c.label}</span>
            <span className={styles.contactValue}>{c.value}</span>
            <span className={styles.contactArr}>→</span>
          </a>
        ))}
      </div>
    </Section>
  );
}
