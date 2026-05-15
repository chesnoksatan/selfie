"use client";

import { useEffect, useState } from "react";

export type Theme = "light" | "dark";
export const STORAGE_KEY = "theme";

// Inline boot script — runs synchronously before paint to avoid a flash.
// Rendered as a string into <head> in the root layout.
export const themeBootScript = `
(function(){try{
  var t=localStorage.getItem("${STORAGE_KEY}");
  if(t!=="light"&&t!=="dark")t="dark";
  document.documentElement.setAttribute("data-theme",t);
}catch(e){document.documentElement.setAttribute("data-theme","dark");}})();
`;

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    const initial: Theme = stored === "light" ? "light" : "dark";
    setThemeState(initial);
    setMounted(true);
  }, []);

  const setTheme = (next: Theme) => {
    setThemeState(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {}
  };

  return { theme, setTheme, mounted };
}
