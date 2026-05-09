"use client";

import { useEffect, useState } from "react";
import styles from "./Hero.module.css";

const FULL_CODE = `// Developer.qml
import QtQuick 2.15
import QtQuick.Controls 2.15

ApplicationWindow {
    id: developer
    title: "Евгений Чесноков"
    visible: true

    readonly property string role: "Senior C++/Qt"
    readonly property string city: "Санкт-Петербург"
    readonly property int    years: 6
    readonly property var    loves: [
        "QML", "UI/UX", "KDE",
        "лазанью", "открытки"
    ]

    Component.onCompleted: {
        console.log("Hello 👋")
    }
}`;

function highlight(code: string) {
  const lines = code.split("\n");
  return lines.map((line, idx) => {
    const html = line
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/(\/\/.*$)/g, `<span class="${styles.cm}">$1</span>`)
      .replace(/("[^"]*")/g, `<span class="${styles.cs}">$1</span>`)
      .replace(
        /\b(import|readonly|property|var|int|string|Component|onCompleted)\b/g,
        `<span class="${styles.kw}">$1</span>`,
      )
      .replace(
        /\b(ApplicationWindow|console)\b/g,
        `<span class="${styles.ty}">$1</span>`,
      )
      .replace(/\b(\d+)\b/g, `<span class="${styles.nm}">$1</span>`);
    return (
      <div className={styles.line} key={idx}>
        <span className={styles.ln}>{String(idx + 1).padStart(2, " ")}</span>
        <span
          className={styles.lc}
          dangerouslySetInnerHTML={{ __html: html || "\u00A0" }}
        />
      </div>
    );
  });
}

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function HeroSection() {
  const [typed, setTyped] = useState("");

  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduced) {
      setTyped(FULL_CODE);
      return;
    }
    let i = 0;
    setTyped("");
    const id = setInterval(() => {
      i += 2;
      if (i >= FULL_CODE.length) {
        setTyped(FULL_CODE);
        clearInterval(id);
      } else {
        setTyped(FULL_CODE.slice(0, i));
      }
    }, 14);
    return () => clearInterval(id);
  }, []);

  const typing = typed.length < FULL_CODE.length;

  return (
    <section className={`${styles.hero} reveal`} id="top">
      <div className={styles.grid}>
        <div>
          <div className="eyebrow">
            <span className="dot" />
            <span>сейчас в Санкт-Петербурге · можно написать</span>
          </div>
          <h1 className={styles.title}>
            Привет, я <span className="ac">Евгений</span>
            <span className={styles.wave} aria-hidden>
              👋
            </span>
          </h1>
          <p className={styles.sub}>
            Шесть лет пишу десктопные интерфейсы на C++ и Qt — и до сих пор не
            устал. Сейчас делаю системные утилиты для отечественной ОС, а часть
            рабочего времени коммичу в KDE. Да, опенсорс прямо на работе — мне
            самому до сих пор немного не верится.
          </p>
          <div className={styles.ctaRow}>
            <button
              className="btn btn-primary"
              onClick={() => scrollTo("contacts")}
            >
              Связаться со мной
              <span className="arr">→</span>
            </button>
            <button
              className="btn btn-ghost"
              onClick={() => scrollTo("experience")}
            >
              Посмотреть проекты
            </button>
          </div>
        </div>

        <div className={styles.ideWrap}>
          <div className={styles.ide}>
            <div className={styles.ideBar}>
              <div className={styles.dots}>
                <i style={{ background: "#ff5f57" }} />
                <i style={{ background: "#febc2e" }} />
                <i style={{ background: "#28c840" }} />
              </div>
              <div className={styles.tabs}>
                <div className={`${styles.tab} ${styles.tabActive}`}>
                  Developer.qml
                </div>
                <div className={styles.tab}>main.cpp</div>
                <div className={styles.tab}>CMakeLists.txt</div>
              </div>
              <div className={styles.spacer} />
            </div>
            <div className={styles.body}>
              <pre className={styles.code}>
                {highlight(typed)}
                {typing && <span className={styles.caret} />}
              </pre>
            </div>
            <div className={styles.status}>
              <span>● QML</span>
              <span>UTF-8</span>
              <span>LF</span>
              <span className={styles.grow} />
              <span>Ln 23, Col 12</span>
            </div>
          </div>

          <div className={styles.output}>
            <div className={styles.outputBar}>
              <span>Application Output</span>
              <span className={styles.muted}>main</span>
            </div>
            <div className={styles.outputBody}>
              <div>
                <span className={styles.muted}>qml:</span> Hello 👋
              </div>
              <div>
                <span className={styles.muted}>qml:</span> ready in 0.42s
              </div>
              <div className={styles.caretLine}>
                <span className={styles.muted}>›</span>
                <span className={styles.caret} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
