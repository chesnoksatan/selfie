import type { Locale } from "@/lib/i18n/config";

export type Job = {
  co: string;
  role: string;
  period: string;
  current?: boolean;
  note?: string;
  text: string;
  bullets?: string[];
};

export const JOBS: Record<Locale, Job[]> = {
  ru: [
    {
      co: "Русбитех-Астра",
      role: "Старший инженер-программист",
      period: "2023 — сейчас",
      current: true,
      text: "Работаю над отечественной операционной системой — её компонентами и системными утилитами. За время в компании я переписал диалог выключения с QtWidgets на QML, с нуля написал утилиту для планирования выключения и перезагрузки, а сейчас занимаюсь приложением для оформления рабочего стола — фоны, цветовые схемы, курсоры и всё, что с этим связано. Это самая объёмная задача из всех: много легаси, много неожиданных побочных эффектов, и каждый день — новый сюрприз. Большая часть моей работы здесь — вклад в KDE. За эти пару лет я успел получить статус developer в проекте, а вместе с ним и право апрувить чужие merge requests.",
    },
    {
      co: "Специальный технологический центр",
      role: "Инженер-программист 1 категории",
      period: "апр. 2020 — сент. 2023",
      note: "повышен с 2 категории",
      text: "Занимался сопряжением внешних комплексов с внутренней инфраструктурой компании. Разрабатывал GUI-плагины к основному продукту — они помогали операторам работать с внешним оборудованием через привычный интерфейс. Параллельно писал «адаптеры» на бэкенде, чтобы внешние системы могли общаться с нашими ресурсами. Здесь я по-настоящему вырос как разработчик: разобрался в QML вглубь, плотно подружился с C++. А ещё в какой-то момент сам пришёл к начальству и попросил себе подопечного и больше ответственности за проекты — так получил повышение.",
    },
    {
      co: "Концерн «МЕРИДИАН»",
      role: "Инженер",
      period: "апр. 2019 — апр. 2020",
      note: "первый профессиональный опыт",
      text: "Разрабатывал интерфейсы для наземных станций приёма телеметрической информации с космических аппаратов — тех самых, через которые операторы держат связь с ЦУПом и управляют КА на орбите. Бэкенд присылает параметры устройства, я рисую окно, в котором всё это видно и управляемо. По дороге собрал небольшую систему JS-классов для удобной работы с данными. Здесь же впервые всерьёз познакомился с QML — и понеслось.",
    },
  ],
  en: [
    {
      co: "Rusbitech-Astra",
      role: "Senior Software Engineer",
      period: "2023 — now",
      current: true,
      text: "I work on a Russian operating system — its components and system utilities. Since joining I've rewritten the shutdown dialog from QtWidgets to QML, built a shutdown-and-restart scheduling utility from scratch, and now I'm working on the desktop customization app — wallpapers, color schemes, cursors, and everything around them. It's the largest task of them all: lots of legacy, lots of unexpected side effects, and a new surprise every day. A big part of my work here is contributing to KDE. Over these couple of years I've earned developer status in the project, and with it the right to approve other people's merge requests.",
    },
    {
      co: "Special Technology Center",
      role: "Software Engineer, Category 1",
      period: "Apr 2020 — Sep 2023",
      note: "promoted from Category 2",
      text: "I worked on integrating external complexes with the company's internal infrastructure. I developed GUI plugins for the main product — they helped operators work with external hardware through a familiar interface. In parallel I wrote backend \"adapters\" so external systems could talk to our resources. This is where I really grew as a developer: got deep into QML, made firm friends with C++. At some point I walked up to my managers and asked for someone to mentor plus more project responsibility — that's how the promotion happened.",
    },
    {
      co: "Concern \"MERIDIAN\"",
      role: "Engineer",
      period: "Apr 2019 — Apr 2020",
      note: "first professional role",
      text: "I built interfaces for ground stations that receive telemetry from spacecraft — the same ones operators use to stay in touch with mission control and steer satellites in orbit. The backend feeds in device parameters, I draw the window that makes them visible and controllable. Along the way I put together a small system of JS classes to make data handling more convenient. This is also where I first got seriously into QML — and it took off from there.",
    },
  ],
};
