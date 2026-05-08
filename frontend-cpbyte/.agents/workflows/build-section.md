---
description: How to build new sections or pages for the CPBYTE frontend
---

# Building New Sections / Pages

Every new section or page in the CPBYTE frontend **MUST** follow these rules.

## 1. Star / Space Background — MANDATORY

The cosmic floating-star background is a core part of the CPBYTE brand identity.
**Every section and page MUST include the `<StarField />` component** as a
background layer inside a relatively-positioned container.

```jsx
import StarField from '../components/common/StarField';

<section className="relative overflow-hidden bg-brand-dark">
  <StarField />                   {/* ← ALWAYS add this */}
  <div className="relative z-10">
    {/* section content */}
  </div>
</section>
```

The `<StarField />` component lives at `src/components/common/StarField.jsx`.
It accepts an optional `particleCount` prop (default 40).

## 2. Buttons — Use the Shared Component

Never write raw `<button>` elements with inline styles. Always use:

```jsx
import Button from '../components/common/Button';

<Button variant="primary" className="px-8 py-3 text-xs">
  LABEL
</Button>
```

Available variants: `primary`, `outline`, `solidRounded`, `solidFull`.

## 3. Colors — Use Design Tokens

- Tailwind: `bg-brand-dark`, `text-brand-accent`, `shadow-glow`
- CSS vars: `var(--color-accent)`, `var(--color-bg-primary)`
- **Never hardcode hex values** like `#22d3ee` or `#070B14`

## 4. Animations

- Use GSAP via `useRef` + `useEffect`
- Always call `ctx.revert()` in the cleanup function
- Preferred easing: `power3.out` for entrances, `sine.inOut` for loops

## 5. Layout

- Sections: `relative overflow-hidden` container with `<StarField />`
- Content wrapper: `relative z-10` to sit above the star background
- Max width: `max-w-4xl mx-auto` for most content blocks
- Dark background: `bg-brand-dark` (never plain black)
