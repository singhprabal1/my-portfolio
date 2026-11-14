# prabalsingh.vercel.app

My personal portfolio: a single-page React + Vite site with a terminal-inspired look.

## Develop

```bash
npm install
npm run dev      # local dev server
npm run lint     # ESLint
npm run build    # production build in dist/
npm run preview  # serve the production build
```

Deployed on Vercel from `main`.

## Where things live

| What | Where |
|---|---|
| All copy and data (hero, about, experience, projects, skills, contact) | `src/content.js` |
| Page sections | `src/components/` |
| Shared hooks (typing effect, reduced motion, active nav, reveal) | `src/hooks.js` |
| Styles and design tokens (colors, fonts, spacing) | `src/index.css` |
| Page title, description, social-sharing tags | `index.html` |
| Résumé, favicon, social preview image, robots/sitemap | `public/` |
| Source for the social preview image (regeneration command inside) | `scripts/og-image.html` |

To change wording or add a project, edit `src/content.js`; the components render whatever is there.

## Accessibility notes

- Animations (typing, glitch, scanline, fade-in) turn off under `prefers-reduced-motion`.
- Sections have real anchors (`/#experience`, `/#projects`, …), and the nav uses links.
- Text colors meet WCAG AA contrast against the dark backgrounds; interactive targets are at least 40–44px tall.
