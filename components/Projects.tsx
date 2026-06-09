import Section from "./Section";
import styles from "./Projects.module.css";

interface KdeItem {
  name: string;
  desc: string;
  tag: string;
  url: string;
}

const KDE: KdeItem[] = [
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
];

export default function Projects() {
  return (
    <Section
      id="projects"
      num="03"
      label="open source"
      title={
        <>
          В рабочее время я регулярно{" "}
          <span className="ac">вношу свой вклад в KDE</span>.
        </>
      }
    >
      <p className="dim">
        Основная часть моего вклада в сообщество идёт через KDE — это часть моей
        текущей работы. У меня есть и свои небольшие проекты, но я писал их для
        себя — ничего такого, что было бы полезно кому-то, кроме меня самого.
        Поэтому здесь — про KDE и одну важную для меня историю.
      </p>
      <div className={styles.kdeGrid}>
        {KDE.map((k, i) => (
          <a
            className={styles.kdeCard}
            key={i}
            href={k.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles.kdeHead}>
              <span className={`${styles.kdeName} mono`}>{k.name}</span>
              <span className={styles.kdeTag}>{k.tag}</span>
            </div>
            <p className={styles.kdeDesc}>{k.desc}</p>
            <div className={`${styles.kdeFoot} mono`}>
              <span>
                {k.url.includes("github.com") ? "github.com" : "invent.kde.org"}
              </span>
              <span>↗</span>
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}
