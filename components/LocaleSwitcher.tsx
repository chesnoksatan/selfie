"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, type Locale } from "@/lib/i18n/config";
import styles from "./LocaleSwitcher.module.css";

export function LocaleSwitcher({ current }: { current: Locale }) {
  const pathname = usePathname() ?? `/${current}`;

  const swap = (target: Locale) => {
    const parts = pathname.split("/");
    // parts[0] is "" because path starts with "/"
    if (parts[1] && (locales as readonly string[]).includes(parts[1])) {
      parts[1] = target;
    } else {
      return `/${target}`;
    }
    return parts.join("/") || `/${target}`;
  };

  return (
    <nav className={styles.switcher} aria-label="Language">
      {locales.map((locale) => {
        const active = locale === current;
        return (
          <Link
            key={locale}
            href={swap(locale)}
            hrefLang={locale}
            aria-current={active ? "true" : undefined}
            className={`${styles.option} ${active ? styles.optionActive : ""}`}
          >
            {locale}
          </Link>
        );
      })}
    </nav>
  );
}
