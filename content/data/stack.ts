import type { Locale } from "@/lib/i18n/config";

export type StackGroup = {
  title: string;
  items: string[];
};

export const STACK: Record<Locale, StackGroup[]> = {
  ru: [
    {
      title: "Основное",
      items: ["C++", "Qt", "QML", "Кастомный UI", "UX-проектирование"],
    },
    {
      title: "Дополнительно",
      items: ["Python", "CMake", "Git", "Linux"],
    },
    {
      title: "Специализация",
      items: [
        "Десктопная разработка",
        "QML-интерфейсы",
        "Миграция QtWidgets → QML",
      ],
    },
  ],
  en: [
    {
      title: "Primary",
      items: ["C++", "Qt", "QML", "Custom UI", "UX design"],
    },
    {
      title: "Secondary",
      items: ["Python", "CMake", "Git", "Linux"],
    },
    {
      title: "Focus",
      items: [
        "Desktop development",
        "QML interfaces",
        "QtWidgets → QML migration",
      ],
    },
  ],
};
