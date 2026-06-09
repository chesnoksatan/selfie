// sections.jsx — все секции сайта-визитки

const { useState, useEffect, useRef } = React;

// ─── WIP Banner ───────────────────────────────────────────────────
function WipBanner() {
  return (
    <div className="wip-banner">
      <span className="wip-dot" aria-hidden />
      <span className="mono">// сайт в разработке — что-то ещё дорабатывается</span>
    </div>
  );
}

// ─── Hero с имитацией IDE ──────────────────────────────────────────
function HeroSection({ t, anim }) {
  const [typed, setTyped] = useState('');
  const fullCode = `// Developer.qml
import QtQuick 2.15
import QtQuick.Controls 2.15

ApplicationWindow {
    id: developer
    title: "Евгений Чесноков"
    visible: true

    readonly property string role: "Senior C++/Qt"
    readonly property string city: "Санкт-Петербург"
    readonly property int    years: 6
    readonly property var    loves: [
        "QML", "UI/UX", "KDE",
        "лазанью", "открытки"
    ]

    Component.onCompleted: {
        console.log("Hello 👋")
    }
}`;

  useEffect(() => {
    if (!anim) { setTyped(fullCode); return; }
    let i = 0;
    setTyped('');
    const id = setInterval(() => {
      i += 2;
      if (i >= fullCode.length) {
        setTyped(fullCode);
        clearInterval(id);
      } else {
        setTyped(fullCode.slice(0, i));
      }
    }, 14);
    return () => clearInterval(id);
  }, [anim]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Подсветка кода (очень простая)
  const highlight = (code) => {
    const lines = code.split('\n');
    return lines.map((line, idx) => {
      const esc = line.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
      // строки-комментарии подсвечиваются целиком, иначе регэксп строк ломает span комментария
      let html = /^\s*\/\//.test(esc)
        ? `<span class="cm">${esc}</span>`
        : esc
            .replace(/("[^"]*")/g, '<span class="cs">$1</span>')
            .replace(/\b(import|readonly|property|var|int|string|Component|onCompleted)\b/g, '<span class="kw">$1</span>')
            .replace(/\b(ApplicationWindow|console)\b/g, '<span class="ty">$1</span>')
            .replace(/\b(\d+)\b/g, '<span class="nm">$1</span>');
      return (
        <div className="code-line" key={idx}>
          <span className="ln">{String(idx + 1).padStart(2, ' ')}</span>
          <span className="lc" dangerouslySetInnerHTML={{ __html: html || '\u00A0' }} />
        </div>
      );
    });
  };

  return (
    <section className="hero" id="top">
      <div className="hero-grid">
        <div className="hero-text">
          <h1 className="hero-title">
            Привет, я <span className="ac">Евгений</span>
          </h1>
          <p className="hero-sub">
            Шесть лет пишу десктопные интерфейсы на C++ и Qt — и до сих пор не устал. Сейчас делаю системные утилиты для отечественной ОС, а часть рабочего времени коммичу в KDE. Да, опенсорс прямо на работе — мне самому до сих пор немного не верится.
          </p>
          <div className="cta-row">
            <button className="btn btn-primary" onClick={() => scrollTo('contacts')}>
              Связаться со мной
              <span className="arr">→</span>
            </button>
            <button className="btn btn-ghost" onClick={() => scrollTo('experience')}>
              Посмотреть проекты
            </button>
          </div>
        </div>

        <div className="ide-wrap">
          <div className="ide">
            <div className="ide-bar">
              <div className="ide-dots">
                <i style={{ background: '#ff5f57' }} />
                <i style={{ background: '#febc2e' }} />
                <i style={{ background: '#28c840' }} />
              </div>
              <div className="ide-tabs">
                <div className="tab active">Developer.qml</div>
                <div className="tab">main.cpp</div>
                <div className="tab">CMakeLists.txt</div>
              </div>
              <div className="ide-spacer" />
            </div>
            <div className="ide-body">
              <pre className="code">{highlight(typed)}{anim && typed.length < fullCode.length && <span className="caret" />}</pre>
            </div>
            <div className="ide-status">
              <span>● QML</span>
              <span>UTF-8</span>
              <span>LF</span>
              <span className="grow" />
              <span>Ln 23, Col 12</span>
            </div>
          </div>

          <div className="ide-output">
            <div className="ide-output-bar">
              <span>Application Output</span>
              <span className="muted">main</span>
            </div>
            <div className="ide-output-body">
              <div><span className="muted">qml:</span> Hello 👋</div>
              <div><span className="muted">qml:</span> ready in 0.42s</div>
              <div className="caret-line">
                <span className="muted">›</span>
                <span className="caret static" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── About ─────────────────────────────────────────────────────────
function AboutSection() {
  return (
    <section className="section narrative" id="about">
      <div className="section-rail">
        <span className="rail-label">// обо мне</span>
      </div>
      <div className="narrative-body">
        <h2 className="sec-h">
          Меня зовут <span className="ac">Евгений Чесноков</span>, живу в Санкт-Петербурге.
        </h2>
        <p>
          С программированием я познакомился в универе, но «моим» оно стало не сразу. На третьем курсе я попал на практику в РНИИРС — сначала ковырял модули ядра, потом дошёл до Qt. А ещё через год мой наставник с той же практики позвал меня в свою команду — писать интерфейсы на QML. Так в апреле 2019-го всё и началось.
        </p>
        <p>
          Qt — это не идеологический выбор, а скорее счастливое совпадение. Я честно пробовал и другое: проходил курс по Python, копал Dart + Flutter (даже прошёл пару собеседований на мидла), поглядывал в сторону JS — он мне близок, потому что часто встречается в QML. Но JS-фреймворков столько, что я так и не понял, с какой стороны подступиться, и спокойно остался с Qt. Не жалею.
        </p>
        <p>
          Больше всего в работе я люблю <em>UI/UX и взаимодействие с пользователем</em>. Мне важно, чтобы программа была не просто рабочей, а удобной — чтобы человек, который её открывает, чувствовал, что всё на своих местах.
        </p>
      </div>
    </section>
  );
}

// ─── Experience timeline ───────────────────────────────────────────
const JOBS = [
  {
    co: 'Русбитех-Астра',
    role: 'Старший инженер-программист',
    period: '2023 — сейчас',
    current: true,
    text: 'Работаю над отечественной операционной системой — её компонентами и системными утилитами. За время в компании я переписал диалог выключения с QtWidgets на QML, с нуля написал утилиту для планирования выключения и перезагрузки, а сейчас занимаюсь приложением для оформления рабочего стола — фоны, цветовые схемы, курсоры и всё, что с этим связано. Это самая объёмная задача из всех: много легаси, много неожиданных побочных эффектов, и каждый день — новый сюрприз. Большая часть моей работы здесь — вклад в KDE. За эти пару лет я успел получить статус developer в проекте, а вместе с ним и право апрувить чужие merge requests.',
    bullets: [],
  },
  {
    co: 'Специальный технологический центр',
    role: 'Инженер-программист 1 категории',
    period: 'апр. 2020 — сент. 2023',
    note: 'повышен с 2 категории',
    text: 'Занимался сопряжением внешних комплексов с внутренней инфраструктурой компании. Разрабатывал GUI-плагины к основному продукту — они помогали операторам работать с внешним оборудованием через привычный интерфейс. Параллельно писал «адаптеры» на бэкенде, чтобы внешние системы могли общаться с нашими ресурсами. Здесь я по-настоящему вырос как разработчик: разобрался в QML вглубь, плотно подружился с C++. А ещё в какой-то момент сам пришёл к начальству и попросил себе подопечного и больше ответственности за проекты — так получил повышение.',
    bullets: [],
  },
  {
    co: 'Концерн «МЕРИДИАН»',
    role: 'Инженер',
    period: 'апр. 2019 — апр. 2020',
    note: 'первый профессиональный опыт',
    text: 'Разрабатывал интерфейсы для наземных станций приёма телеметрической информации с космических аппаратов — тех самых, через которые операторы держат связь с ЦУПом и управляют КА на орбите. Бэкенд присылает параметры устройства, я рисую окно, в котором всё это видно и управляемо. По дороге собрал небольшую систему JS-классов для удобной работы с данными. Здесь же впервые всерьёз познакомился с QML — и понеслось.',
    bullets: [],
  },
];

function ExperienceSection() {
  return (
    <section className="section" id="experience">
      <div className="section-rail">
        <span className="rail-label">// опыт работы</span>
      </div>
      <div className="narrative-body">
        <h2 className="sec-h">
          Шесть с лишним лет в трёх компаниях — и <span className="ac">один любимый стек</span>.
        </h2>
        <div className="timeline">
          {JOBS.map((j, i) => (
            <article className="job" key={i}>
              <div className="job-spine">
                <div className={"job-dot" + (j.current ? " current" : "")} />
                {i < JOBS.length - 1 && <div className="job-line" />}
              </div>
              <div className="job-body">
                <div className="job-head">
                  <div>
                    <h3 className="job-co">{j.co}</h3>
                    <div className="job-role">
                      {j.role}
                      {j.note && <span className="job-note">· {j.note}</span>}
                    </div>
                  </div>
                  <div className="job-period">{j.period}</div>
                </div>
                <p className="job-text">{j.text}</p>
                <ul className="job-bullets">
                  {j.bullets.map((b, k) => (
                    <li key={k}><span className="b-tick">▸</span>{b}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Open Source / KDE ─────────────────────────────────────────────
const KDE = [
  { name: 'kcron', desc: 'Модуль системных параметров для управления заданиями cron. Полностью переписан с QtWidgets на QML с современным редизайном.', tag: 'rewrite + redesign', url: 'https://invent.kde.org/system/kcron/-/merge_requests/24' },
  { name: 'kcm_keyboard', desc: 'Модуль настроек клавиатуры. Тоже полный перевод с QtWidgets на QML и редизайн интерфейса.', tag: 'rewrite + redesign', url: 'https://invent.kde.org/plasma/plasma-desktop/-/merge_requests/2342' },
  { name: 'kirigami-addons', desc: 'В QML работа с таблицами поддержана слабо — каждому приложению приходилось стилизовать их самому. Я написал модуль, который можно подключить и сразу получить таблицу, выглядящую как часть KDE.', tag: 'new module', url: 'https://invent.kde.org/libraries/kirigami-addons/-/merge_requests/199' },
  { name: 'misc', desc: 'Помимо крупных задач — точечные исправления багов в разных компонентах KDE.', tag: 'bugfixes', url: 'https://invent.kde.org/plasma/plasma-desktop/-/merge_requests/2357' },
  { name: 'Модуль ядра Linux', desc: 'Когда я проходил практику в РНИИРС моим заданием было написать модуль ядра для Linux, который позволял бы управлять временем. Собственно вот этот модуль.', tag: 'linux module', url: 'https://github.com/chesnoksatan/Time_char_driver' },
  { name: 'DahliaOS', desc: 'Во время изучения Flutter я успел сделать несколько контрибьютов в dahliaOS. Это была попытка сделать операционную систему на базе dart + flutter и я захотел внести свой вклад в этот проект. Вот здесь я добавил возможность вызова контекстного меню в файловом менеджере', tag: 'pet project', url: 'https://github.com/dahliaOS/files/pull/12' },
    { name: 'DahliaOS', desc: 'А вот здесь я добавил возможность просмотра файлов в виде значков', tag: 'pet project', url: 'https://github.com/dahliaOS/files/pull/14' },
  { name: 'QuickQanava', desc: 'Не KDE, но важная для меня страница. Когда-то на работе мне не хватило пары свойств у объектов в этой библиотеке — я их добавил, отправил PR, и они попали в релиз. Мой первый вклад в чужой опенсорс.', tag: 'первый контрибьют', url: 'https://github.com/cneben/QuickQanava/pull/112' },
];

function ProjectsSection() {
  return (
    <section className="section" id="projects">
      <div className="section-rail">
        <span className="rail-label">// open source</span>
      </div>
      <div className="narrative-body">
        <h2 className="sec-h">
          В рабочее время я регулярно <span className="ac">вношу свой вклад в KDE</span>.
        </h2>
        <p className="dim">
          Основная часть моего вклада в сообщество идёт через KDE — это часть моей текущей работы. У меня есть и свои небольшие проекты, но я писал их для себя — ничего такого, что было бы полезно кому-то, кроме меня самого. Поэтому здесь — про KDE и одну важную для меня историю.
        </p>
        <div className="kde-grid">
          {KDE.map((k, i) => (
            <a className="kde-card" key={i} href={k.url} target="_blank" rel="noopener noreferrer">
              <div className="kde-head">
                <span className="kde-name mono">{k.name}</span>
                <span className="kde-tag">{k.tag}</span>
              </div>
              <p className="kde-desc">{k.desc}</p>
              <div className="kde-foot mono">
                <span>{k.url.includes('github.com') ? 'github.com' : 'invent.kde.org'}</span>
                <span className="arr">↗</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Stack ─────────────────────────────────────────────────────────
function StackSection() {
  const groups = [
    { title: 'Основное', items: ['C++', 'Qt', 'QML', 'Кастомный UI', 'UX-проектирование'] },
    { title: 'Дополнительно', items: ['Python', 'CMake', 'Git', 'Linux'] },
    { title: 'Специализация', items: ['Десктопная разработка', 'QML-интерфейсы', 'Миграция QtWidgets → QML'] },
  ];
  return (
    <section className="section" id="stack">
      <div className="section-rail">
        <span className="rail-label">// стек</span>
      </div>
      <div className="narrative-body">
        <h2 className="sec-h">Мой набор <span className="ac">инструментов</span>.</h2>
        <div className="stack-grid">
          {groups.map((g, i) => (
            <div className="stack-col" key={i}>
              <div className="stack-title mono">{g.title}</div>
              <div className="stack-items">
                {g.items.map((it, k) => (
                  <span className="chip" key={k}>{it}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Lasagna art variants ──────────────────────────────────────────
function LasagnaArt({ variant }) {
  if (variant === 'topdown') {
    return (
      <div className="lasagna-topdown" aria-hidden>
        <div className="dish">
          <div className="cheese-grid">
            {Array.from({ length: 16 }).map((_, i) => (
              <div className="cheese-cell" key={i} style={{
                background: ['#f6d678', '#e8b85a', '#f3c668', '#deaa4d'][i % 4],
                opacity: 0.7 + ((i * 7) % 3) * 0.1,
              }} />
            ))}
          </div>
          <div className="basil b1" />
          <div className="basil b2" />
          <div className="basil b3" />
        </div>
        <div className="steam s1" />
        <div className="steam s2" />
      </div>
    );
  }
  if (variant === 'plate') {
    return (
      <div className="lasagna-plate" aria-hidden>
        <div className="plate">
          <div className="slice">
            <div className="s-layer s-pasta-1" />
            <div className="s-layer s-sauce-1" />
            <div className="s-layer s-pasta-2" />
            <div className="s-layer s-cheese" />
            <div className="s-layer s-pasta-3" />
            <div className="s-layer s-sauce-2" />
            <div className="s-layer s-pasta-4" />
            <div className="s-top" />
          </div>
          <div className="basil-leaf" />
        </div>
        <div className="steam s1" />
      </div>
    );
  }
  if (variant === 'ascii') {
    return (
      <pre className="lasagna-ascii" aria-hidden>{`╭─────────────────────────╮
│ ░░░░░░░░░░░░░░░░░░░░░░░ │  cheese
│ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │  pasta
│ ████████████████████████│  meat
│ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │  pasta
│ ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒ │  béchamel
│ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │  pasta
│ ████████████████████████│  meat
╰─────────────────────────╯
  $ lasagna --serve --hot
  → ready in 45 min ✓`}</pre>
    );
  }
  // default: layered
  return (
    <div className="lasagna-stack" aria-hidden>
      <div className="layer l1" />
      <div className="layer l2" />
      <div className="layer l3" />
      <div className="layer l4" />
      <div className="layer l5" />
      <div className="steam" />
    </div>
  );
}

// ─── Hobby (с характером) ──────────────────────────────────────────
function HobbySection({ lasagnaArt = 'layered' }) {
  return (
    <section className="section hobby" id="hobby">
      <div className="section-rail">
        <span className="rail-label">// вне кода</span>
      </div>
      <div className="narrative-body">
        <h2 className="sec-h">
          Кроме работы у меня есть <span className="ac">три важные вещи</span>.
        </h2>

        <div className="hobby-grid">
          <article className="hobby-card cat">
            <div className="hobby-art" aria-hidden>
              <div className="cat-art">🐈</div>
            </div>
            <div className="hobby-text">
              <div className="hobby-tag mono">кот</div>
              <h3>Лео.</h3>
              <p>
                Это мой кот. Переезжал со мной в Питер и стойко перенёс это испытание — теперь мы оба здесь как дома. Лео считает, что мой стол в первую очередь его рабочее место, и я с ним не спорю.
              </p>
              <p className="dim small">
                <span className="mono">// начальник тоже бывает пушистым</span>
              </p>
            </div>
          </article>

          <article className="hobby-card lasagna">
            <div className="hobby-art" data-variant={lasagnaArt} aria-hidden>
              <LasagnaArt variant={lasagnaArt} />
            </div>
            <div className="hobby-text">
              <div className="hobby-tag mono">готовка</div>
              <h3>Лазанья — моё фирменное.</h3>
              <p>
                Готовка меня успокаивает. Могу часами что-то делать на кухне и не уставать — наоборот, разгружается голова, и в конце ещё и есть что съесть. Моё фирменное блюдо — лазанья, и она у меня получается <em>превосходно</em>.
              </p>
              <p className="dim small">
                <span className="mono">// и я в этом убеждён</span>
              </p>
            </div>
          </article>

          <article className="hobby-card postcards">
            <div className="hobby-art" aria-hidden>
              <div className="cards-stack">
                <div className="postcard p1"><span className="stamp" />Лиссабон</div>
                <div className="postcard p2"><span className="stamp" />Прага</div>
                <div className="postcard p3"><span className="stamp" />Тбилиси</div>
              </div>
            </div>
            <div className="hobby-text">
              <div className="hobby-tag mono">коллекция</div>
              <h3>Открытки и фотографии.</h3>
              <p>
                Я собираю красивые открытки из разных городов и стран — какие-то привожу сам, какие-то прошу привезти друзей. Из этого постепенно складывается своя личная карта мира. А недавно я ещё и сам начал снимать на papershoot и иногда печатать фотографии — теперь к чужим городам добавляются мои.
              </p>
              <p className="dim small">
                <span className="mono">// если едете куда-нибудь — пишите</span>
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

// ─── Contacts ──────────────────────────────────────────────────────
function ContactsSection() {
  const items = [
    { label: 'Email', value: 'chestwins@gmail.com', href: 'mailto:chestwins@gmail.com' },
    { label: 'Telegram', value: '@chesnoksatan', href: 'https://t.me/chesnoksatan' },
    { label: 'GitHub', value: 'github.com/chesnoksatan', href: 'https://github.com/chesnoksatan' },
  ];
  return (
    <section className="section contacts" id="contacts">
      <div className="section-rail">
        <span className="rail-label">// контакты</span>
      </div>
      <div className="narrative-body">
        <h2 className="sec-h">
          Сейчас я не в активном поиске работы, но <span className="ac">всегда рад знакомству</span>.
        </h2>
        <p className="dim">
          Обсудить интересный проект, поговорить о Qt, QML, хорошем UI — или просто сказать «привет». Любой повод подойдёт.
        </p>
        <div className="contact-list">
          {items.map((c, i) => (
            <a className="contact-row" href={c.href} key={i} target="_blank" rel="noreferrer">
              <span className="contact-label mono">{c.label}</span>
              <span className="contact-value">{c.value}</span>
              <span className="contact-arr">→</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Footer ────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="mono">© 2026 Евгений Чесноков</div>
        <div className="mono dim">сделано с любовью к Qt</div>
      </div>
    </footer>
  );
}

// Reveal-on-scroll
function useReveal(enabled) {
  useEffect(() => {
    const els = document.querySelectorAll('.section, .hero');
    if (!enabled) {
      els.forEach((e) => e.classList.add('in'));
      return;
    }
    els.forEach((e) => e.classList.remove('in'));
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) en.target.classList.add('in');
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -10% 0px' });
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, [enabled]);
}

Object.assign(window, {
  WipBanner, HeroSection, AboutSection, ExperienceSection, ProjectsSection,
  StackSection, HobbySection, ContactsSection, Footer, useReveal,
});
