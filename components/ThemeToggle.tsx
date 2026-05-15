"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import styles from "./ThemeToggle.module.css";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Render a placeholder of the same size to avoid layout shift before
  // hydration; the icon resolves once we know the theme client-side.
  const isDark = mounted ? resolvedTheme === "dark" : true;

  return (
    <button
      type="button"
      className={styles.toggle}
      aria-label={isDark ? "Включить светлую тему" : "Включить тёмную тему"}
      title={isDark ? "Светлая тема" : "Тёмная тема"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {mounted &&
        (isDark ? (
          // Sun icon — switches to light
          <svg viewBox="0 0 24 24" fill="none" aria-hidden>
            <circle
              cx="12"
              cy="12"
              r="4"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4 7 17M17 7l1.4-1.4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          // Moon icon — switches to dark
          <svg viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M20.5 14.5A8 8 0 1 1 9.5 3.5a7 7 0 0 0 11 11Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
        ))}
    </button>
  );
}
