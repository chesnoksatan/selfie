// sections.jsx — все секции сайта-визитки

const { useState, useEffect, useRef } = React;

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
      let html = line
        .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
        .replace(/(\/\/.*$)/g, '<span class="cm">$1</span>')
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
          <div className="eyebrow">
            <span className="dot" />
            <span>сейчас в Санкт-Петербурге · доступен для разговора</span>
          </div>
          <h1 className="hero-title">
            Привет, я <span className="ac">Евгений</span>
            <span className="wave" aria-hidden>👋</span>
          </h1>
          <p className="hero-sub">
            Senior C++/Qt разработчик. Создаю удобные десктопные интерфейсы — для операционной системы, наземных станций и людей, которым важны хорошие инструменты.
          </p>
          <p className="hero-meta">
            Уже больше 6&nbsp;лет занимаюсь десктопной разработкой, специализируюсь на QML и UI/UX. В свободное время помогаю сообществу&nbsp;KDE.
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
        <span className="rail-num">01</span>
        <span className="rail-label">обо мне</span>
      </div>
      <div className="narrative-body">
        <h2 className="sec-h">
          Меня зовут <span className="ac">Евгений Чесноков</span>, мне 27 лет, и я живу в Санкт-Петербурге.
        </h2>
        <p>
          В разработку я пришёл в апреле 2019 года и с тех пор работаю с C++ и Qt — это та технология, в которой я по-настоящему «дома». За эти годы я успел поработать в трёх компаниях, и каждая из них дала мне что-то своё: от разработки интерфейсов для наземных станций управления космическими аппаратами до работы над отечественной операционной системой.
        </p>
        <p>
          Больше всего в моей профессии я люблю <em>UI/UX и взаимодействие с пользователем</em>. Мне важно, чтобы программа была не просто рабочей, а удобной — чтобы человек, который её открывает, чувствовал, что всё на своих местах. Поэтому моя основная специализация сегодня — это <span className="mono">QML</span> и кастомный UI, а ещё я немного пишу на <span className="mono">Python</span> и уверенно работаю с <span className="mono">CMake</span>, <span className="mono">Git</span> и <span className="mono">CI/CD</span>.
        </p>
        <p className="dim">
          Я закончил Институт математики, механики и компьютерных наук Южного федерального университета — оттуда у меня прочная база, на которую опирается всё остальное.
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
    text: 'Работаю над отечественной операционной системой — занимаюсь непосредственно её компонентами и системными утилитами. За время работы переписал несколько утилит с QtWidgets на QML, проведя полный редизайн и частично переработав внутреннюю логику.',
    bullets: [
      'Перевод системных утилит ОС на современный стек QML',
      'Полный редизайн интерфейсов с учётом UX',
      'Доработка и расширение функциональности',
    ],
  },
  {
    co: 'Специальный технологический центр',
    role: 'Инженер-программист 1 категории',
    period: 'апр. 2020 — сент. 2023',
    note: 'повышен с 2 категории',
    text: 'Занимался сопряжением внешних комплексов с внутренней инфраструктурой компании. Разрабатывал GUI-плагины к главному программному продукту — они помогали операторам взаимодействовать с внешними устройствами и комплексами через привычный пользовательский интерфейс. Параллельно занимался бэкенд-разработкой: писал «адаптеры», которые позволяли внешним системам работать с нашими ресурсами.',
    bullets: [
      'Разработка GUI-плагинов для работы операторов с внешним оборудованием',
      'Бэкенд-адаптеры для интеграции внешних систем',
      'Полный цикл: от UI до серверной логики',
    ],
  },
  {
    co: 'Концерн «МЕРИДИАН»',
    role: 'Инженер',
    period: 'апр. 2019 — апр. 2020',
    note: 'первый профессиональный опыт',
    text: 'Разрабатывал пользовательские интерфейсы для устройств наземных станций контроля и управления космическими аппаратами. Занимался алгоритмами передачи данных между устройством и интерфейсом, а также реализацией моделей данных для отображения изменений параметров оборудования в реальном времени.',
    bullets: [
      'UI для систем управления космическими аппаратами',
      'Двусторонний обмен данными между устройством и интерфейсом',
      'Модели данных для отображения телеметрии',
    ],
  },
];

function ExperienceSection() {
  return (
    <section className="section" id="experience">
      <div className="section-rail">
        <span className="rail-num">02</span>
        <span className="rail-label">опыт работы</span>
      </div>
      <div className="narrative-body">
        <h2 className="sec-h">
          Три компании. <span className="ac">Шесть с лишним лет.</span> Один любимый стек.
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
                  <div className="job-period">
                    {j.current && <span className="ping" />}
                    {j.period}
                  </div>
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
  { name: 'kcron', desc: 'Модуль системных параметров для управления заданиями cron. Полностью переписан с QtWidgets на QML с современным редизайном.', tag: 'rewrite + redesign' },
  { name: 'kcm_keyboard', desc: 'Модуль настроек клавиатуры. Также проведён полный перевод с QtWidgets на QML, включая редизайн интерфейса.', tag: 'rewrite + redesign' },
  { name: 'kirigami-addons', desc: 'Добавил новый модуль для работы с таблицами, который теперь доступен сообществу.', tag: 'new module' },
  { name: 'misc', desc: 'Помимо крупных задач — точечные исправления багов в различных компонентах KDE.', tag: 'bugfixes' },
];

function ProjectsSection() {
  return (
    <section className="section" id="projects">
      <div className="section-rail">
        <span className="rail-num">03</span>
        <span className="rail-label">open source</span>
      </div>
      <div className="narrative-body">
        <h2 className="sec-h">
          В рабочее время я регулярно <span className="ac">вношу свой вклад в KDE</span>.
        </h2>
        <p className="dim">
          Свободные руки тратятся на сообщество — это то, во что верится. Своих больших pet-проектов у меня немного: основная энергия уходит на работу и вклад в KDE. Иногда пишу небольшие утилиты для себя.
        </p>
        <div className="kde-grid">
          {KDE.map((k, i) => (
            <div className="kde-card" key={i}>
              <div className="kde-head">
                <span className="kde-name mono">{k.name}</span>
                <span className="kde-tag">{k.tag}</span>
              </div>
              <p className="kde-desc">{k.desc}</p>
              <div className="kde-foot mono">
                <span>kde.org</span>
                <span className="arr">↗</span>
              </div>
            </div>
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
    { title: 'Дополнительно', items: ['Python', 'CMake', 'Git', 'GitLab CI/CD'] },
    { title: 'Специализация', items: ['Десктопная разработка', 'QML-интерфейсы', 'Миграция QtWidgets → QML'] },
  ];
  return (
    <section className="section" id="stack">
      <div className="section-rail">
        <span className="rail-num">04</span>
        <span className="rail-label">стек</span>
      </div>
      <div className="narrative-body">
        <h2 className="sec-h">Что у меня <span className="ac">в руках</span>.</h2>
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
        <span className="rail-num">05</span>
        <span className="rail-label">вне кода</span>
      </div>
      <div className="narrative-body">
        <h2 className="sec-h">
          Помимо работы у меня есть <span className="ac">две вещи</span>, которые я по-настоящему люблю.
        </h2>

        <div className="hobby-grid">
          <article className="hobby-card lasagna">
            <div className="hobby-art" data-variant={lasagnaArt} aria-hidden>
              <LasagnaArt variant={lasagnaArt} />
            </div>
            <div className="hobby-text">
              <div className="hobby-tag mono">01 / готовка</div>
              <h3>Лазанья — моё фирменное.</h3>
              <p>
                Готовка для меня — это что-то вроде медитации. Процесс, в котором отдыхаешь и одновременно создаёшь что-то приятное. Моё фирменное блюдо — лазанья, и она у меня получается <em>превосходно</em>.
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
              <div className="hobby-tag mono">02 / коллекция</div>
              <h3>Открытки со всего мира.</h3>
              <p>
                Я собираю красивые открытки из разных городов и стран. Каждая — маленький кусочек чужой культуры и эстетики. Из этой коллекции постепенно складывается своя личная карта мира.
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
    { label: 'Email', value: 'hello@example.com', href: 'mailto:hello@example.com' },
    { label: 'Telegram', value: '@your_username', href: 'https://t.me/your_username' },
    { label: 'GitHub', value: 'github.com/your-handle', href: 'https://github.com/your-handle' },
    { label: 'GitLab', value: 'gitlab.com/your-handle', href: 'https://gitlab.com/your-handle' },
  ];
  return (
    <section className="section contacts" id="contacts">
      <div className="section-rail">
        <span className="rail-num">06</span>
        <span className="rail-label">контакты</span>
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
  HeroSection, AboutSection, ExperienceSection, ProjectsSection,
  StackSection, HobbySection, ContactsSection, Footer, useReveal,
});
