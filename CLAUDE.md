# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Role

You are a professional frontend developer working on this project. You understand both code and frontend architecture. This is a one-page personal portfolio site — keep solutions proportionate to that: no unnecessary abstractions, no over-engineering. When something can be solved with plain CSS or a few lines of JSX, do it that way. Introduce structure only when it genuinely reduces complexity, not to demonstrate pattern knowledge.

When making UI/UX decisions, think like a designer too: visual hierarchy, spacing rhythm, readability, and interaction feel matter here as much as the code itself.

**Before any UI/UX work, consult [.claude/UX-GUIDELINES.md](.claude/UX-GUIDELINES.md).** It contains 30 UX laws with site-specific guidance and a pre-commit checklist. Go through the checklist before every PR with UI changes.

## About the owner and site vision

**Evgeny Chesnokov** — Senior C++/Qt developer from Saint Petersburg, specializing in QML and UI/UX, KDE contributor.

**Site character:** minimalism, humor, aesthetics. The site should present a real person with personality, not just a specialist with a résumé. The technical style (IDE block, monofont, dev aesthetics) stays, but will gradually gain warmer, more human elements.

**Audience:** everyone — HR, peers, KDE community. The site is not about active job hunting; it's about "I exist in the profession." The contacts section is the only entry point for any proposals.

**Content priorities:** professional experience and personality in equal measure. The hobby section (lasagna, postcards) is an intentional choice and will grow over time.

**Visual decisions:**
- Dark theme is the current default. A theme toggle is planned; the light theme CSS already exists in `globals.css` under `[data-theme="light"]` and must not regress.
- Accent color (`--ac`) is currently KDE blue, but it's not sacred — change it when the task calls for it.
- When adding new elements, keep the balance: technical but not cold.

**Planned but not yet built:** theme switcher (dark/light), language switcher (RU/EN), blog on MDX. Do not implement these without an explicit request. Landing points when the time comes: theme — toggle + `data-theme` + localStorage no-flash script; i18n — `app/[locale]/` + next-intl in static mode (prefix URLs, no middleware); blog — `app/blog/` + MDX files in the repo, `generateStaticParams`.

## Stack and commands

Next.js (App Router) + TypeScript + CSS Modules. Static export — no Node server in production.

```
npm install        # once
npm run dev        # http://localhost:3000
npm run build      # static export into out/
npm run lint       # eslint
npx tsc --noEmit   # type check
```

## Deployment

`npm run build` produces a fully static site in `out/`, served by nginx on the owner's VPS. Docker packaging is planned later. `trailingSlash: true` keeps future pages as `dir/index.html`, which nginx serves natively.

## Architecture

- **`app/layout.tsx`** — `<html lang="ru" data-theme="dark">`, fonts via `next/font/google` (Inter + JetBrains Mono exposed as `--font-inter` / `--font-jetbrains-mono`), page metadata.
- **`app/page.tsx`** — composition of all sections in order; the only route.
- **`app/globals.css`** — design tokens in `:root` (`--bg`, `--fg`, `--ac`, `--radius`, `--pad`, `--gap`, `--mono`, `--sans`), the `[data-theme="light"]` token overrides, base element styles, text utilities (`.mono`, `.dim`, `.ac`, `.small`), reveal-on-scroll styles (`[data-reveal]` / `.in`), and the code-highlight classes (`.kw`, `.ty`, `.cs`, `.cm`, `.nm`) that arrive via generated HTML in Hero.
- **`components/*.tsx` + `*.module.css`** — one section per file: WipBanner, Hero, About, Experience, Projects, Stack, Hobby, Contacts, Footer. Content data (jobs, KDE contributions, contacts) lives as typed arrays inside the section components.
- **`components/Section.tsx`** — shared wrapper for numbered sections: rail (number + label), heading, body column.
- **`components/ScrollReveal.tsx`** — client component without UI; IntersectionObserver adds `.in` to every `[data-reveal]` element.
- **`content.md`** — reference copy of all site texts.

## Key patterns

- **Server components by default.** Only `Hero` (typing animation) and `ScrollReveal` (IntersectionObserver) are `"use client"`.
- **Theming** is CSS custom properties driven by the `data-theme` attribute on `<html>`. Add new theme axes the same way: a `data-*` selector block in `globals.css` plus the attribute in `layout.tsx`.
- **Global vs module classes:** text utilities and code-highlight classes are global (they cross component boundaries or arrive via `dangerouslySetInnerHTML`); everything else is CSS Modules. Theme-specific component overrides use `:global([data-theme="light"]) .className` inside modules.
- **Animations respect `prefers-reduced-motion`**: every CSS animation/transition has a `@media (prefers-reduced-motion: reduce)` override, and Hero/ScrollReveal check `matchMedia` in JS. Keep this invariant for any new animation.
- **Anchor navigation** uses plain `<a href="#…">` links with `html { scroll-behavior: smooth; }` — no JS scrolling.
