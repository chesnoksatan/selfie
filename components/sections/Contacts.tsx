import type { Dictionary } from "@/lib/i18n/dictionaries";
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

export function ContactsSection({ dict }: { dict: Dictionary["contacts"] }) {
  return (
    <section className="section reveal" id="contacts">
      <div className="section-rail">
        <span className="rail-num">06</span>
        <span className="rail-label">{dict.rail}</span>
      </div>
      <div className="narrative-body">
        <h2 className="sec-h">
          {dict.head.pre}
          <span className="ac">{dict.head.ac}</span>
          {dict.head.post}
        </h2>
        <p className="dim">{dict.desc}</p>
        <div className={styles.list}>
          {ITEMS.map((c, i) => (
            <a
              className={styles.row}
              href={c.href}
              key={i}
              target="_blank"
              rel="noopener noreferrer"
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
