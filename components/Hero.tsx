"use client";

import { useEffect, useState } from "react";
import styles from "./Hero.module.css";

const fullCode = `// Developer.qml
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

// Очень простая подсветка QML. Классы .cm/.cs/.kw/.ty/.nm — глобальные
// (globals.css), потому что попадают в разметку строкой.
// Строки-комментарии подсвечиваются целиком, иначе регэксп строк
// ломает span комментария.
// Регэкспы применяются последовательно и рассчитаны на текущий fullCode:
// цифра или ключевое слово внутри строкового литерала ("Qt 6") подсветится
// неправильно. Меняешь fullCode — проверь подсветку глазами.
function highlightLine(line: string): string {
  const esc = line
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  return /^\s*\/\//.test(esc)
    ? `<span class="cm">${esc}</span>`
    : esc
        .replace(/("[^"]*")/g, '<span class="cs">$1</span>')
        .replace(
          /\b(import|readonly|property|var|int|string|Component|onCompleted)\b/g,
          '<span class="kw">$1</span>',
        )
        .replace(
          /\b(ApplicationWindow|console)\b/g,
          '<span class="ty">$1</span>',
        )
        .replace(/\b(\d+)\b/g, '<span class="nm">$1</span>');
}

export default function Hero() {
  const [typed, setTyped] = useState("");

  useEffect(() => {
    // При prefers-reduced-motion первый же тик выводит весь код целиком
    const step = window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? fullCode.length
      : 2;
    let i = 0;
    const id = setInterval(() => {
      i += step;
      // Не режем суррогатную пару (эмодзи 👋) — иначе на кадр мелькнёт «�»
      const code = fullCode.charCodeAt(i);
      if (code >= 0xdc00 && code <= 0xdfff) i += 1;
      if (i >= fullCode.length) {
        setTyped(fullCode);
        clearInterval(id);
      } else {
        setTyped(fullCode.slice(0, i));
      }
    }, 14);
    return () => clearInterval(id);
  }, []);

  return (
    <section className={styles.hero} id="top" data-reveal>
      <div className={styles.heroGrid}>
        <div>
          <h1 className={styles.heroTitle}>
            Привет, я <span className="ac">Евгений</span>
          </h1>
          <p className={styles.heroSub}>
            Шесть лет пишу десктопные интерфейсы на C++ и Qt — и до сих пор не
            устал. Сейчас делаю системные утилиты для отечественной ОС, а часть
            рабочего времени коммичу в KDE. Да, опенсорс прямо на работе — мне
            самому до сих пор немного не верится.
          </p>
          <div className={styles.ctaRow}>
            <a className={`${styles.btn} ${styles.btnPrimary}`} href="#contacts">
              Связаться со мной
              <span className={styles.arr}>→</span>
            </a>
            <a className={`${styles.btn} ${styles.btnGhost}`} href="#projects">
              Посмотреть проекты
            </a>
          </div>
        </div>

        {/* Декорация: роль, город и стаж продублированы текстом страницы */}
        <div className={styles.ideWrap} aria-hidden>
          <div className={styles.ide}>
            <div className={styles.ideBar}>
              <div className={styles.ideDots}>
                <i />
                <i />
                <i />
              </div>
              <div className={styles.ideTabs}>
                <div className={`${styles.tab} ${styles.active}`}>
                  Developer.qml
                </div>
                <div className={styles.tab}>main.cpp</div>
                <div className={styles.tab}>CMakeLists.txt</div>
              </div>
              <div className={styles.ideSpacer} />
            </div>
            <div className={styles.ideBody}>
              <pre className={styles.code}>
                {typed.split("\n").map((line, idx) => (
                  <div className={styles.codeLine} key={idx}>
                    <span className={styles.ln}>
                      {String(idx + 1).padStart(2, " ")}
                    </span>
                    <span
                      className={styles.lc}
                      dangerouslySetInnerHTML={{
                        __html: highlightLine(line) || " ",
                      }}
                    />
                  </div>
                ))}
                {typed.length < fullCode.length && (
                  <span className={styles.caret} />
                )}
              </pre>
            </div>
            <div className={styles.ideStatus}>
              <span>● QML</span>
              <span>UTF-8</span>
              <span>LF</span>
              <span className={styles.grow} />
              <span>Ln 23, Col 12</span>
            </div>
          </div>

          <div className={styles.ideOutput}>
            <div className={styles.ideOutputBar}>
              <span>Application Output</span>
              <span className={styles.muted}>main</span>
            </div>
            <div className={styles.ideOutputBody}>
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
