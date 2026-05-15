"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, type Locale } from "@/lib/i18n/config";
import styles from "./LocaleSwitcher.module.css";

export function LocaleSwitcher({
  current,
  label,
}: {
  current: Locale;
  label: string;
}) {
  const pathname = usePathname() ?? `/${current}`;

  const swap = (target: Locale) => {
    const parts = pathname.split("/");
    if (parts[1] && (locales as readonly string[]).includes(parts[1])) {
      parts[1] = target;
    } else {
      return `/${target}`;
    }
    return parts.join("/") || `/${target}`;
  };

  const persist = (target: Locale) => {
    // Remember the manual choice so middleware doesn't overrule on next visit.
    document.cookie = `NEXT_LOCALE=${target}; path=/; max-age=31536000; samesite=lax`;
  };

  return (
    <nav className={styles.switcher} aria-label={label}>
      {locales.map((locale) => {
        const active = locale === current;
        return (
          <Link
            key={locale}
            href={swap(locale)}
            hrefLang={locale}
            aria-current={active ? "true" : undefined}
            onClick={() => persist(locale)}
            className={`${styles.option} ${active ? styles.optionActive : ""}`}
          >
            {locale}
          </Link>
        );
      })}
    </nav>
  );
}
