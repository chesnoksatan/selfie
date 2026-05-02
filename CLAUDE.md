# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Role

You are a professional frontend developer working on this project. You understand both code and frontend architecture. This is a one-page personal portfolio site — keep solutions proportionate to that: no unnecessary abstractions, no over-engineering. When something can be solved with plain CSS or a few lines of JSX, do it that way. Introduce structure only when it genuinely reduces complexity, not to demonstrate pattern knowledge.

When making UI/UX decisions, think like a designer too: visual hierarchy, spacing rhythm, readability, and interaction feel matter here as much as the code itself.

## About the owner and site vision

**Evgeny Chesnokov** — Senior C++/Qt developer from Saint Petersburg, specializing in QML and UI/UX, KDE contributor.

**Site character:** minimalism, humor, aesthetics. The site should present a real person with personality, not just a specialist with a résumé. The technical style (IDE block, monofont, dev aesthetics) stays, but will gradually gain warmer, more human elements.

**Audience:** everyone — HR, peers, KDE community. The site is not about active job hunting; it's about "I exist in the profession." The contacts section is the only entry point for any proposals.

**Content priorities:** professional experience and personality in equal measure. The hobby section (lasagna, postcards) is an intentional choice and will grow over time.

**Visual decisions:**
- Dark theme is the current default. A theme toggle is planned for the future.
- Accent color (`--ac`) is currently KDE blue, but it's not sacred — change it when the task calls for it.
- When adding new elements, keep the balance: technical but not cold.

**Planned but not yet built:** theme switcher (dark/light), language switcher (RU/EN). Do not implement these without an explicit request.

## Running the project

Open `Визитка.html` directly in a browser — no build step, no server required. The page uses Babel Standalone for in-browser JSX transpilation, so changes to `.jsx` files take effect on reload.

## Architecture

Three files, no dependencies to install:

- **`Визитка.html`** — entry point. Loads React 18 + Babel from unpkg CDN with SRI hashes, then loads `tweaks-panel.jsx` and `sections.jsx` as `type="text/babel"` scripts. Contains the `App` component, `TWEAK_DEFAULTS`, and the `ReactDOM.createRoot` call.
- **`sections.jsx`** — all page sections (Hero, About, Experience, Projects, Stack, Hobby, Contacts, Footer) plus the `useReveal` scroll-animation hook. Exports everything to `window` via `Object.assign(window, …)` so the inline script in `Визитка.html` can reference them.
- **`tweaks-panel.jsx`** — self-contained "Tweaks" floating panel with form controls (`TweakSlider`, `TweakToggle`, `TweakRadio`, `TweakSelect`, `TweakText`, `TweakNumber`, `TweakColor`, `TweakButton`). Exports `useTweaks` hook and all components to `window`.
- **`styles.css`** — all styles. Theming is entirely via CSS custom properties (`--bg`, `--fg`, `--ac`, `--radius`, `--pad`, `--gap`) driven by `data-*` attributes set on `<html>`: `data-theme`, `data-font`, `data-density`, `data-radius`, `data-anim`.

## Key patterns

**Tweaks state flow:** `TWEAK_DEFAULTS` in `Визитка.html` (wrapped in `/*EDITMODE-BEGIN*/…/*EDITMODE-END*/` markers) is the single source of truth. `useTweaks(defaults)` manages state in React; every `setTweak` call also posts `{ type: '__edit_mode_set_keys', edits }` to `window.parent` so a host frame can rewrite the `EDITMODE` block on disk.

**TweaksPanel postMessage protocol:** the panel listens for `__activate_edit_mode` / `__deactivate_edit_mode` from the parent frame and posts `__edit_mode_available` on mount and `__edit_mode_dismissed` on close. This lets the panel be driven by an external prototype tool without any direct coupling.

**Theme application:** `App` reads all tweak values and applies them in a `useEffect` via `document.documentElement.setAttribute(…)` and `style.setProperty('--ac', …)`. Add new theme axes the same way — add a CSS `data-*` selector block in `styles.css` and wire the attribute in `App`'s effect.

**Accent color soft variant:** `--ac-soft` is set inline as `color-mix(in oklab, <accent> 15%, transparent)` because the CSS variable can't self-reference.

## Contacts section

The contact links in `ContactsSection` in `sections.jsx` still contain placeholder values (`hello@example.com`, `@your_username`, etc.). Replace them with real links before publishing.
