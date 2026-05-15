import type { Locale } from "@/lib/i18n/config";

export type Project = {
  name: string;
  desc: string;
  tag: string;
  url: string;
};

export const KDE: Record<Locale, Project[]> = {
  ru: [
    {
      name: "kcron",
      desc: "Модуль системных параметров для управления заданиями cron. Полностью переписан с QtWidgets на QML с современным редизайном.",
      tag: "rewrite + redesign",
      url: "https://invent.kde.org/system/kcron/-/merge_requests/24",
    },
    {
      name: "kcm_keyboard",
      desc: "Модуль настроек клавиатуры. Тоже полный перевод с QtWidgets на QML и редизайн интерфейса.",
      tag: "rewrite + redesign",
      url: "https://invent.kde.org/plasma/plasma-desktop/-/merge_requests/2342",
    },
    {
      name: "kirigami-addons",
      desc: "В QML работа с таблицами поддержана слабо — каждому приложению приходилось стилизовать их самому. Я написал модуль, который можно подключить и сразу получить таблицу, выглядящую как часть KDE.",
      tag: "new module",
      url: "https://invent.kde.org/libraries/kirigami-addons/-/merge_requests/199",
    },
    {
      name: "misc",
      desc: "Помимо крупных задач — точечные исправления багов в разных компонентах KDE.",
      tag: "bugfixes",
      url: "https://invent.kde.org/plasma/plasma-desktop/-/merge_requests/2357",
    },
    {
      name: "Модуль ядра Linux",
      desc: "Когда я проходил практику в РНИИРС моим заданием было написать модуль ядра для Linux, который позволял бы управлять временем. Собственно вот этот модуль.",
      tag: "linux module",
      url: "https://github.com/chesnoksatan/Time_char_driver",
    },
    {
      name: "DahliaOS",
      desc: "Во время изучения Flutter я успел сделать несколько контрибьютов в dahliaOS. Это была попытка сделать операционную систему на базе dart + flutter и я захотел внести свой вклад в этот проект. Вот здесь я добавил возможность вызова контекстного меню в файловом менеджере",
      tag: "pet project",
      url: "https://github.com/dahliaOS/files/pull/12",
    },
    {
      name: "DahliaOS",
      desc: "А вот здесь я добавил возможность просмотра файлов в виде значков",
      tag: "pet project",
      url: "https://github.com/dahliaOS/files/pull/14",
    },
    {
      name: "QuickQanava",
      desc: "Не KDE, но важная для меня страница. Когда-то на работе мне не хватило пары свойств у объектов в этой библиотеке — я их добавил, отправил PR, и они попали в релиз. Мой первый вклад в чужой опенсорс.",
      tag: "первый контрибьют",
      url: "https://github.com/cneben/QuickQanava/pull/112",
    },
  ],
  en: [
    {
      name: "kcron",
      desc: "System Settings module for managing cron jobs. Fully rewritten from QtWidgets to QML with a modern redesign.",
      tag: "rewrite + redesign",
      url: "https://invent.kde.org/system/kcron/-/merge_requests/24",
    },
    {
      name: "kcm_keyboard",
      desc: "Keyboard settings module. Also a full QtWidgets → QML port with an interface redesign.",
      tag: "rewrite + redesign",
      url: "https://invent.kde.org/plasma/plasma-desktop/-/merge_requests/2342",
    },
    {
      name: "kirigami-addons",
      desc: "Table support in QML is thin — every app had to style its own. I wrote a module you can plug in and immediately get a table that looks like part of KDE.",
      tag: "new module",
      url: "https://invent.kde.org/libraries/kirigami-addons/-/merge_requests/199",
    },
    {
      name: "misc",
      desc: "Besides the big tasks — targeted bug fixes across various KDE components.",
      tag: "bugfixes",
      url: "https://invent.kde.org/plasma/plasma-desktop/-/merge_requests/2357",
    },
    {
      name: "Linux kernel module",
      desc: "During my internship at RNIIRS my task was to write a Linux kernel module that would let you control time. This is that module.",
      tag: "linux module",
      url: "https://github.com/chesnoksatan/Time_char_driver",
    },
    {
      name: "DahliaOS",
      desc: "While learning Flutter I managed a few contributions to dahliaOS. It was an attempt at building an OS on Dart + Flutter, and I wanted to chip in. Here I added context-menu support in the file manager.",
      tag: "pet project",
      url: "https://github.com/dahliaOS/files/pull/12",
    },
    {
      name: "DahliaOS",
      desc: "And here I added icon-grid view for files.",
      tag: "pet project",
      url: "https://github.com/dahliaOS/files/pull/14",
    },
    {
      name: "QuickQanava",
      desc: "Not KDE, but a page that matters to me. Once at work I needed a couple of properties on this library's objects — I added them, sent a PR, and they made it into the release. My first contribution to someone else's open source.",
      tag: "first contribution",
      url: "https://github.com/cneben/QuickQanava/pull/112",
    },
  ],
};
