"use client";

import { useEffect, useState } from "react";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import styles from "./Hero.module.css";

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
  if (el) {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    el.scrollIntoView({
      behavior: reduced ? "auto" : "smooth",
      block: "start",
    });
  }
}

export function HeroSection({ dict }: { dict: Dictionary["hero"] }) {
  const fullCode = dict.code;
  const [typed, setTyped] = useState("");

  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduced) {
      setTyped(fullCode);
      return;
    }
    let i = 0;
    setTyped("");
    const id = setInterval(() => {
      i += 2;
      if (i >= fullCode.length) {
        setTyped(fullCode);
        clearInterval(id);
      } else {
        setTyped(fullCode.slice(0, i));
      }
    }, 14);
    return () => clearInterval(id);
  }, [fullCode]);

  const typing = typed.length < fullCode.length;

  return (
    <section className={`${styles.hero} reveal`} id="top">
      <div className={styles.grid}>
        <div>
          <div className="eyebrow">
            <span className="dot" />
            <span>{dict.eyebrow}</span>
          </div>
          <h1 className={styles.title}>
            {dict.greeting} <span className="ac">{dict.name}</span>
            <span className={styles.wave} aria-hidden>
              👋
            </span>
          </h1>
          <p className={styles.sub}>{dict.sub}</p>
          <div className={styles.ctaRow}>
            <button
              className="btn btn-primary"
              onClick={() => scrollTo("contacts")}
            >
              {dict.ctaContact}
              <span className="arr">→</span>
            </button>
            <button
              className="btn btn-ghost"
              onClick={() => scrollTo("experience")}
            >
              {dict.ctaProjects}
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
                <span className={styles.muted}>qml:</span> {dict.outHello}
              </div>
              <div>
                <span className={styles.muted}>qml:</span> {dict.outReady}
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
