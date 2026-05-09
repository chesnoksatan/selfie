export type StackGroup = {
  title: string;
  items: string[];
};

export const STACK: StackGroup[] = [
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
];
