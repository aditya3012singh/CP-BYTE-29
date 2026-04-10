# frontend-cpbyte Student Guide

This project is made for cobyte-29 students to learn frontend development by building a real project.

Stack used:

- React (for UI)
- Vite (for fast development server and build)
- Tailwind CSS (for styling)

## 1. Goal of This Setup

You will learn by doing project tasks, not by only reading theory.

By the end, you should understand:

- How React files are organized
- Where to write page code, component code, and utility code
- How to run, build, and test your changes
- How to keep code clean and reusable

## 2. One-Time Setup

Install these first:

- Node.js (LTS)
- npm (comes with Node.js)

Check versions:

```bash
node -v
npm -v
```

Install dependencies (run inside frontend-cpbyte folder):

```bash
npm install
```

## 3. Daily Workflow (Every Time You Start Work)

Start development server:

```bash
npm run dev
```

Open the shown local URL (normally http://localhost:5173).

When finished, verify build:

```bash
npm run build
```

Optional checks:

```bash
npm run lint
npm run preview
```

## 4. Project Structure (What Each Folder Means)

```text
frontend-cpbyte/
  public/                    # Static files (logos, icons, images used directly)
  src/
    assets/                  # Imported images/icons/fonts used in components
    components/
      common/                # Reusable UI pieces (Button, Card, SectionTitle)
      layout/                # Structure components (Navbar, Footer)
    constants/               # Fixed values (site name, labels, config constants)
    hooks/                   # Reusable React logic (custom hooks)
    layouts/                 # Page wrappers (MainLayout)
    pages/                   # Full pages/screens (HomePage, AboutPage)
    services/                # API calls and backend communication
    utils/                   # Small helper functions
    App.jsx                  # Connects layout + current page(s)
    index.css                # Tailwind directives + optional global styles
    main.jsx                 # React entry point (mounts app)
  postcss.config.js          # Tailwind processing config
  tailwind.config.js         # Tailwind content/theme config
  vite.config.js             # Vite config
  package.json               # Scripts + dependencies
```

## 5. Where You Should Write What

If you are adding a new page:

- Create file in src/pages/
- Add page UI and page-specific logic there
- Render it from App.jsx (or later via router)

If you are creating reusable UI (used in many places):

- Create file in src/components/common/
- Keep it small and reusable (props-based)

If you are editing header/footer/navigation:

- Use src/components/layout/

If you are writing logic that can be reused:

- Use src/hooks/ for React-specific reusable logic
- Use src/utils/ for pure helper functions

If you are calling APIs:

- Use src/services/
- Keep fetch/axios code out of pages when possible

If you are storing fixed app values:

- Use src/constants/

If you are adding global styles:

- Use src/index.css (Tailwind is already configured)

## 6. Starter Files You Already Have

- src/layouts/MainLayout.jsx: Common app shell
- src/pages/HomePage.jsx: Current home page
- src/components/layout/Navbar.jsx: Top navigation
- src/components/layout/Footer.jsx: Footer
- src/components/common/SectionTitle.jsx: Reusable title component
- src/hooks/useCounter.js: Custom hook example
- src/services/apiClient.js: API utility starter
- src/utils/cn.js: Class name helper
- src/constants/site.js: Site config values

## 7. Tailwind CSS Quick Usage

Write classes directly in JSX:

```jsx
<button className="rounded-lg bg-cyan-400 px-4 py-2 font-semibold text-slate-900">
  Click me
</button>
```

Tailwind is enabled through:

- src/index.css
- tailwind.config.js
- postcss.config.js

## 8. Learning by Project: Recommended Task Order

Task 1: Change text/content in HomePage
Task 2: Create a new reusable component in components/common
Task 3: Add one more page in pages folder
Task 4: Move repeated logic into a custom hook
Task 5: Fetch sample data using services/apiClient.js
Task 6: Improve responsiveness using Tailwind breakpoints

## 9. Rules to Keep Code Clean

- One component = one clear responsibility
- Reuse components instead of copying JSX
- Keep API code in services, not directly in every page
- Keep constants in constants folder (no hard-coded repeated strings)
- Use meaningful names (HomePage, EventCard, useEvents)

## 10. Common Mistakes and Fixes

Mistake: Import path not found
Fix: Check exact folder/file name and extension spelling

Mistake: Tailwind classes not applying
Fix: Make sure className is used (not class)

Mistake: App not starting
Fix: Run npm install first, then npm run dev

Mistake: Build fails
Fix: Read terminal error from top; most issues are import path or syntax errors

## 11. Commands Cheat Sheet

```bash
npm install      # install dependencies
npm run dev      # run local development server
npm run build    # production build
npm run preview  # preview production build locally
npm run lint     # lint check
```

## 12. What Teachers/Mentors Expect

- You should push small, regular improvements
- Write readable code and folder-wise correct code
- Ask "Where should this code live?" before writing
- Focus on understanding, not only finishing tasks

Learning rule for this project:
Build first, break things, debug, fix, repeat.
