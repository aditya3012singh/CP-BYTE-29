# CPBYTE Frontend — Contributing Guide

Welcome to the **CPBYTE** frontend codebase! Please read this guide before
making any changes so that the project stays visually consistent and
maintainable.

---

## 🎨 Design System

### Colors & Tokens
All brand colours, shadows, and spacing are defined in **two places** — use
them instead of hardcoded hex values:

| Source | What it provides |
|---|---|
| `src/index.css` (`:root` vars) | CSS custom properties: `--color-accent`, `--glow-accent`, etc. |
| `tailwind.config.js` | Tailwind classes: `bg-brand-dark`, `shadow-glow`, etc. |

> **Rule:** Never use raw hex like `#22d3ee` in component code.
> Use `text-brand-accent` or `var(--color-accent)` instead.

### Typography
- Use the project's sans-serif stack (already set in Tailwind config).
- Strong heading hierarchy: `text-4xl` → `text-7xl` for headings; `text-xs` → `text-sm` for body.

---

## 🧩 Shared Components

All reusable components live in `src/components/common/`. You **must** use
these instead of writing inline equivalents:

| Component | File | Usage |
|---|---|---|
| **Button** | `common/Button.jsx` | All buttons. Pass `variant` prop: `primary`, `outline`, `solidRounded`, `solidFull`. |
| **StarField** | `common/StarField.jsx` | Cosmic star/particle background. Drop into **every page section** as the first child. |

### ⭐ StarField — MANDATORY Background
The floating-star cosmic background is a **core part of the CPBYTE identity**.
Every new section/page **must** include `<StarField />` as a background layer.

```jsx
import StarField from '../components/common/StarField';

const MySection = () => (
  <section className="relative overflow-hidden bg-brand-dark">
    <StarField />
    <div className="relative z-10">
      {/* Your content here */}
    </div>
  </section>
);
```

### Button Usage
```jsx
import Button from '../components/common/Button';

<Button variant="primary" className="px-8 py-3 text-xs">
  CLICK ME
</Button>
```

---

## 📁 Folder Structure

```
src/
├── components/
│   ├── common/       ← Shared / reusable (Button, StarField, etc.)
│   └── layout/       ← Page-level layout (Navbar, HeroSection, Footer)
├── pages/            ← Route-level page components
├── layouts/          ← App shell / wrapper layouts
├── hooks/            ← Custom React hooks
├── services/         ← API calls
├── utils/            ← Helper functions
└── constants/        ← Static config, site metadata
```

---

## ✅ Checklist Before Submitting a PR

- [ ] Used `<Button>` component (no raw `<button>` with custom styles)
- [ ] Used `<StarField />` background on any new section
- [ ] Used Tailwind brand classes (`bg-brand-dark`, `text-brand-accent`, `shadow-glow`)
- [ ] No hardcoded hex colour values
- [ ] Component is responsive (tested mobile + desktop)
- [ ] GSAP animations use `useRef` + `useEffect` with proper cleanup

---

## 🚫 Don'ts

- Don't create new button styles — extend the `Button` component instead
- Don't skip the StarField background on new sections
- Don't use inline `style={{}}` for colours — use Tailwind classes
- Don't install new animation libraries — use GSAP

---

## 🛠 Tech Stack

- **React** (functional components + hooks)
- **Tailwind CSS v3** (utility-first, config-driven)
- **GSAP** (all animations)
- **React Router** (routing)
