import "server-only";
import type { Locale } from "./config";
import ruDict from "./dictionaries/ru.json";

export type Dictionary = typeof ruDict;

const loaders: Record<Locale, () => Promise<Dictionary>> = {
  ru: () => import("./dictionaries/ru.json").then((m) => m.default as Dictionary),
  en: () => import("./dictionaries/en.json").then((m) => m.default as Dictionary),
};

export const getDictionary = (locale: Locale): Promise<Dictionary> =>
  loaders[locale]();
