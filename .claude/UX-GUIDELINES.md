# UX Guidelines

> Documentation on user interface design principles for the personal website.
> Based on the 30 UX laws from [lawsofux.com](https://lawsofux.com) (Jon Yablonski).
> Use as a reference when adding new sections, components, and interactions.

---

## How to use this document

- Before changing the UI, open the relevant section and check whether your decision violates any principle.
- At the end of the document there's a [pre-commit checklist](#pre-commit-checklist) — go through it before opening a PR.
- Laws are not dogma but guidelines. If the context requires the opposite — document the reason in the commit or PR description.
- The power of these laws lies in their combination. A single screen typically engages 3–5 principles simultaneously.

---

## Table of contents

**Perception and aesthetics**
- [1. Aesthetic-Usability Effect](#1-aesthetic-usability-effect)
- [2. Law of Prägnanz](#2-law-of-prägnanz)
- [3. Law of Common Region](#3-law-of-common-region)
- [4. Law of Proximity](#4-law-of-proximity)
- [5. Law of Similarity](#5-law-of-similarity)
- [6. Law of Uniform Connectedness](#6-law-of-uniform-connectedness)
- [7. Von Restorff Effect](#7-von-restorff-effect)

**Memory and attention**
- [8. Miller's Law](#8-millers-law)
- [9. Chunking](#9-chunking)
- [10. Working Memory](#10-working-memory)
- [11. Selective Attention](#11-selective-attention)
- [12. Serial Position Effect](#12-serial-position-effect)
- [13. Zeigarnik Effect](#13-zeigarnik-effect)

**Decision making**
- [14. Hick's Law](#14-hicks-law)
- [15. Choice Overload](#15-choice-overload)
- [16. Occam's Razor](#16-occams-razor)
- [17. Cognitive Bias](#17-cognitive-bias)

**Complexity and load**
- [18. Cognitive Load](#18-cognitive-load)
- [19. Tesler's Law](#19-teslers-law)
- [20. Paradox of the Active User](#20-paradox-of-the-active-user)

**Time and performance**
- [21. Doherty Threshold](#21-doherty-threshold)
- [22. Parkinson's Law](#22-parkinsons-law)
- [23. Goal-Gradient Effect](#23-goal-gradient-effect)
- [24. Flow](#24-flow)

**Interaction and expectations**
- [25. Fitts's Law](#25-fittss-law)
- [26. Jakob's Law](#26-jakobs-law)
- [27. Mental Models](#27-mental-models)
- [28. Postel's Law](#28-postels-law)
- [29. Peak-End Rule](#29-peak-end-rule)
- [30. Pareto Principle](#30-pareto-principle)

**Practice**
- [Pre-commit checklist](#pre-commit-checklist)
- [Personal website context](#personal-website-context)

---

## Perception and aesthetics

### 1. Aesthetic-Usability Effect

> Users perceive an aesthetically pleasing interface as easier to use.

**What to do on the site:**
- Maintain a unified visual style: typography, spacing, border radii, shadows — all from design tokens, not "by feel."
- Don't skimp on the homepage and hero section — they make the first impression and carry the whole site.
- Don't use beautiful design as an excuse for poor structure: aesthetics mask usability problems but don't solve them.

---

### 2. Law of Prägnanz

> The brain reduces complex images to the simplest possible form.

**What to do on the site:**
- Aim for simple geometric shapes in icons and illustrations.
- If an illustration takes effort to "read" — simplify or replace it.
- Simple shapes are remembered better and processed faster.

---

### 3. Law of Common Region

> Elements within a shared boundary are perceived as a group.

**What to do on the site:**
- Group related blocks (project card, contact block) with a border, background, or card.
- Don't split related information across different visual regions.
- A card should contain everything related to one entity — title, description, links, tags.

---

### 4. Law of Proximity

> Objects placed close together are perceived as a single group.

**What to do on the site:**
- The spacing between different sections should be **noticeably larger** than the spacing within a section.
- A label below a form field should be closer to the field than to the next field.
- A social icon should be closer to the "Contacts" label than to the navigation.
- Use `gap` and a spacing scale (4/8/16/24/32/48/64) — not arbitrary values.

---

### 5. Law of Similarity

> Similar elements are perceived as related.

**What to do on the site:**
- All links look the same (color/underline/hover) — otherwise users won't know what's clickable.
- Buttons of the same type (primary / secondary / ghost) look identical across all pages.
- Don't make body text look like a link — and vice versa.

---

### 6. Law of Uniform Connectedness

> Visually connected elements are perceived as more closely related than elements that are merely adjacent.

**What to do on the site:**
- Group related elements with a frame, shared background, or line — this is stronger than proximity alone.
- Use it to highlight the active navigation state, featured projects, or key cards.

---

### 7. Von Restorff Effect

> What stands out from the rest is what gets remembered.

**What to do on the site:**
- A page should have **one** primary button visible above the fold (CTA — "Get in touch", "Download résumé").
- Don't emphasize everything — if 5 phrases are bolded, none of them is emphasized.
- Don't rely on color **alone** — add shape, size, or an icon (accessibility for users with color blindness).
- Respect `prefers-reduced-motion` when using animation as an accent.

---

## Memory and attention

### 8. Miller's Law

> Working memory holds 7 ± 2 items at once.

**What to do on the site:**
- Keep main navigation to 5–7 items. Move the rest to a submenu or footer.
- Break a list of tags/skills into categories if there are more than ~7.
- "Seven" is not a magic rule but a guideline. Test on real content.

---

### 9. Chunking

> Information is easier to perceive when broken into meaningful blocks.

**What to do on the site:**
- Long text (about page, project description) — split into paragraphs of 2–4 sentences.
- Phone number: `+1 (555) 123-4567`, not `+15551234567`.
- A project list — grouped by category (web, mobile, open-source), not in a single wall.

---

### 10. Working Memory

> Actively holds 4–7 chunks for roughly 20–30 seconds.

**What to do on the site:**
- Don't make users remember — show them. Breadcrumbs, sticky section headers on scroll, an active navigation item.
- Visited links should look different from unvisited ones.
- For comparisons (e.g., service tiers) — show attributes side by side, not sequentially.

---

### 11. Selective Attention

> Users filter out anything they consider irrelevant.

**What to do on the site:**
- Don't style important content like a banner — it'll be ignored (banner blindness).
- Important interface changes (a modal opens, a notification appears) should come with a noticeable signal — otherwise users won't notice (change blindness).
- Don't place key elements in zones traditionally occupied by ads (right sidebar, top banner).

---

### 12. Serial Position Effect

> The first and last items in a sequence are remembered best.

**What to do on the site:**
- In navigation, the edge positions are for the most important items: logo/home on the left, CTA ("Contact") on the right.
- Place your strongest projects at the start and end of the portfolio, weaker ones in the middle.
- In the footer, the first and last links should be the most important.

---

### 13. Zeigarnik Effect

> Unfinished tasks are remembered better than finished ones and pull users toward completion.

**What to do on the site:**
- For multi-step forms (e.g., a request form) — show progress: "Step 2 of 3."
- On the homepage — hint at continuation: "5 more projects →", a clipped carousel, article previews.
- Nudge to the next step: after about → button to projects, after projects → button to contacts.

---

## Decision making

### 14. Hick's Law

> Decision time grows with the number and complexity of choices.

**What to do on the site:**
- On the homepage — **one** main goal (CTA). Not five equivalent buttons.
- Project filter menu: if there are many categories — group them or use progressive disclosure.
- Don't expose all options at once — reveal them as needed.

---

### 15. Choice Overload

> Too many options paralyze.

**What to do on the site:**
- Don't show all 30 projects at once — feature the top 6 with a "Show more" affordance.
- If you have several services/tiers, highlight the recommended one visually.
- Provide tools to narrow the choice: filters, search, sorting.

---

### 16. Occam's Razor

> Of equally good solutions, pick the simplest.

**What to do on the site:**
- Before adding an element, ask: "What breaks if I remove it?" If nothing — remove it.
- Cut decoration that carries no meaning: extra lines, shadows, borders, icons next to obvious text.
- "Design is finished not when there's nothing left to add, but when there's nothing left to remove."

---

### 17. Cognitive Bias

> Systematic errors in thinking that distort perception.

**What to do on the site:**
- Watch for confirmation bias in yourself: test on real users, not on colleagues.
- Don't exploit biases against the user (dark patterns: false urgency, hidden prices).
- When writing copy, remember: people read what confirms their expectations.

---

## Complexity and load

### 18. Cognitive Load

> Mental resources for working with the interface are limited.

**What to do on the site:**
- Reduce **extraneous** load: cut anything that doesn't help understand the content (excessive animation, decoration, distracting elements).
- Use familiar patterns (Jakob's Law) — users won't spend energy learning the interface.
- Break long forms into steps, so each page demands little attention.

---

### 19. Tesler's Law

> Every system has irreducible complexity — someone has to take it on.

**What to do on the site:**
- Take on complexity as a developer: phone number auto-formatting, address autocomplete, real-time validation.
- Don't make the user input what can be computed or inferred from context.
- Hints — in the context of use (tooltips next to fields), not in a separate FAQ.

---

### 20. Paradox of the Active User

> No one reads documentation — everyone starts immediately.

**What to do on the site:**
- The interface should be understandable without instructions.
- Don't build welcome tours on a personal website — this isn't a SaaS, the user came with a specific goal.
- Show hints at the moment they're needed (placeholder, tooltip), not upfront.

---

## Time and performance

### 21. Doherty Threshold

> A system response under 400 ms — the user doesn't notice the wait.

**What to do on the site:**
- Any navigation, hover, or click — visual or animated reaction within the first 100–200 ms.
- If something loads longer than 400 ms — show a skeleton, spinner, or progress indicator.
- Use optimistic UI updates (the form looks "sent" immediately, errors come after the fact).
- Progress bars make waiting tolerable, even if they're not perfectly accurate.
- Target metrics: LCP < 2.5s, INP < 200ms, CLS < 0.1.

---

### 22. Parkinson's Law

> A task expands to fill the time allotted to it.

**What to do on the site:**
- Shorten the path to the goal: contacts should be one click away, not three.
- Use autocomplete for forms (`autocomplete="email"`, `name`, `tel`).
- If you can cut form fields — cut them.

---

### 23. Goal-Gradient Effect

> The closer to the goal, the stronger the motivation to reach it.

**What to do on the site:**
- For multi-step forms — a progress indicator.
- On long pages — a reading progress bar (optional, don't overload the UI).
- Visible progress motivates users to finish what they started.

---

### 24. Flow

> A state of full engagement when challenge and skill are balanced.

**What to do on the site:**
- Minimize friction: don't yank the user out of their task with newsletter pop-ups, consents, and modals.
- Fast transitions between sections (SPA-like navigation or smooth scroll).
- Good feedback for every action (visual confirmation of a click, of a form submission).

---

## Interaction and expectations

### 25. Fitts's Law

> Time to acquire a target depends on its size and distance.

**What to do on the site:**
- Minimum touch target on mobile — **44×44 px** (Apple's recommendation), ideally **48×48 px**.
- Adequate spacing between clickable elements (at least 8 px) so users don't misclick.
- Place primary actions in zones easy to reach: on mobile — the lower half of the screen; on desktop — close to the user's point of attention.
- Screen corners are the easiest targets to hit (the "infinite edge", per Fitts).

---

### 26. Jakob's Law

> Users spend most of their time on other sites and expect yours to work the same way.

**What to do on the site:**
- The logo in the top-left corner — clickable and links to the homepage.
- Cart icon on the right, navigation on top, contacts in the header and/or footer.
- Don't invent new UI patterns where standard ones work.
- Underline for links, `cursor: pointer` for clickable elements, focus rings for keyboard navigation.

---

### 27. Mental Models

> Users arrive with a ready-made model of how an interface should work.

**What to do on the site:**
- Use familiar patterns for typical scenarios: a contact form looks like a form, a portfolio looks like a grid of cards.
- If you're doing something non-standard, you need a strong reason and a clear cue for the user.
- During a redesign, preserve familiar elements where possible.

---

### 28. Postel's Law

> Be liberal in what you accept and conservative in what you send.

**What to do on the site:**
- A phone field accepts various formats: `+1 555 123 4567`, `15551234567`, `+1(555)123-4567` — and the system normalizes it.
- An email with leading/trailing spaces — trim automatically, don't throw an error.
- Search works with typos and is case-insensitive.
- Clear error messages: what's wrong and how to fix it.

---

### 29. Peak-End Rule

> Experiences are judged by their peak moment and their ending, not by the average.

**What to do on the site:**
- Design "wow" moments: a subtle animation on first scroll, a pleasant micro-interaction on hover of key elements, a thoughtful 404 page.
- The final screen after a form submission — not a bare "Thanks", but a warm message: what's next, when to expect a reply, links to other content.
- Remember: negative peaks are remembered more vividly. Minimize errors and write error messages with empathy.

---

### 30. Pareto Principle

> 80% of results come from 20% of the effort.

**What to do on the site:**
- Identify the 20% of pages/sections that deliver 80% of the value (usually: home, portfolio, contacts) — invest the most there.
- Don't polish rarely visited pages at the expense of key ones.
- In analytics, watch which actions 80% of users perform — optimize that path.

---

## Pre-commit checklist

Walk through this list before opening a PR with UI changes.

**Hierarchy and emphasis**
- [ ] One primary CTA above the fold (laws 7, 14)
- [ ] Bold/color is used only for what truly matters (law 7)
- [ ] The most important items are at the start or end of lists, not in the middle (law 12)

**Grouping and spacing**
- [ ] Spacing between sections is larger than within sections (law 4)
- [ ] Related elements are visually grouped: by border, background, or proximity (laws 3, 6)
- [ ] Similar elements look the same; different ones look different (law 5)

**Memory and load**
- [ ] No more than 7 items in main navigation (law 8)
- [ ] Long text is broken into paragraphs and blocks (law 9)
- [ ] The active navigation item is always visible (law 10)
- [ ] Visited links differ from unvisited ones (law 10)

**Decisions and simplicity**
- [ ] Every added element is necessary — the rest is removed (laws 16, 18)
- [ ] No more than 5–7 options at one level of choice (laws 14, 15)

**Performance and feedback**
- [ ] Every action gives visual feedback within 200 ms (law 21)
- [ ] Long operations have a skeleton / spinner / progress (laws 21, 23)
- [ ] LCP < 2.5s, INP < 200ms, CLS < 0.1 (law 21)
- [ ] Forms use `autocomplete` (law 22)

**Accessibility and interaction**
- [ ] Touch targets are at least 44×44 px, with at least 8 px between them (law 25)
- [ ] Standard patterns in standard places: logo on the left, navigation on top (laws 26, 27)
- [ ] Contrast doesn't rely on color alone (law 7)
- [ ] `prefers-reduced-motion` is respected for animations (law 7)
- [ ] Focus states are visible for keyboard navigation (law 26)
- [ ] Form fields accept various input formats and normalize them (law 28)
- [ ] Error messages explain what to fix and how (law 28)

**Emotion and finale**
- [ ] Final screens (success, 404) are intentional, not empty (law 29)
- [ ] Hero and contact sections are polished more than the rest (law 30)

---

## Personal website context

A personal website is a special case. Not every general UX principle applies literally.

**The user's main goal is usually one of three:**
1. Understand who you are and whether you fit their needs (about, skills).
2. Look at your work (portfolio, projects).
3. Get in touch (contacts, form).

**This dictates priorities:**
- These three paths should be **accessible from any page** within 1–2 clicks (laws 22, 25).
- The hero on the homepage should answer "who you are and what you do" within 5 seconds (laws 23, 29).
- Contacts — in the header and footer **always**, not only on the "Contacts" page (law 26).

**What to avoid:**
- Welcome tours and onboarding (law 20).
- Newsletter pop-ups appearing 5 seconds in (laws 11, 24).
- Consent prompts where they're not legally required.
- Animations for the sake of animation — every one must carry meaning (law 18).

**What works especially well:**
- Clean typography and generous whitespace (laws 1, 2, 16).
- High-quality project previews with consistent formatting (laws 5, 9).
- A warm, human tone in error and confirmation messages (law 29).
- Fast loading — on a personal website, that's half the impression (law 21).

---

> *Source: [lawsofux.com](https://lawsofux.com) (Jon Yablonski).
> Materials are licensed under Creative Commons BY-NC-ND 4.0.*
