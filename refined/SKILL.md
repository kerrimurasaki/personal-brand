---
name: "refined"
description: "Refined design skill for AI coding agents."
metadata:
  author: typeui.sh
  source: workspace-importer
  projectName: "Refined"
  projectLogoUrl: ""
  importSource: "Manual TypeUI setup"
  primaryColorReference: "#18181b"
  surfaceColorReference: "#ffffff"
  textColorReference: "#09090b"
  typographyScale: "Inter-style sans serif, 12/14/16/20/24/32 scale, medium labels, semibold headings."
  spacingScale: "4px base grid with 8px, 12px, 16px, 24px, and 32px layout steps."
  radiusScale: "6px controls, 8px cards, 12px overlays, nested radii reduced by inner padding."
---

# Design System — Agent Instructions

This skill describes the visual design language for all UI output. Every component, layout, and page should follow the design specs in the module files below. These describe *what the design looks like* — you choose how to implement the styles.

**Style:** Refined — a premium, highly art-directed editorial aesthetic. It pairs Playfair Display serif headings with sleek, pill-shaped controls and generous 32px container radii. The layout must feel expensive and immersive, utilizing deep atmospheric gradients over moody high-end photography Warm gold brand accents pop against near-black surfaces, grounded by left-aligned compositions and ample white space.

## Before Writing Any Code

1. **Read every module that applies.** For a landing page, read at minimum: `layout.md`, `typography.md`, `colors.md`, `buttons.md`, `cards.md`, `shadows.md`, `radius.md`, `borders.md`. Do NOT write JSX until you have loaded all relevant modules.

## Critical Rules

- **Brand color precedence:** When `brand.md` is available, color tokens from `brand.md` overwrite same-name tokens in `colors.md`.

- **Tokens are AGNOSTIC, NOT Tailwind classes:** The tokens defined in the `.md` files (like `neutral-primary-soft`, `heading`, `border-default`) are agnostic design system tokens, NOT literal Tailwind classes. Do not blindly use classes like `bg-neutral-primary-soft` unless you have explicitly mapped them in the CSS/Tailwind configuration. You must implement the mapping yourself.

- **Cross-reference modules.** A card containing buttons must satisfy both `cards.md` AND `buttons.md`.
- **Dark mode is automatic.** The CSS custom properties resolve differently in light/dark via `@media (prefers-color-scheme: dark)`. Never manually swap colors.
- **Every interactive element needs hover, focus, and disabled states** — defined in the relevant module.
- **Use semantic HTML:** proper heading hierarchy (`h1`→`h6`), `<button>` for actions, `<a>` for navigation, ARIA attributes where needed.

## Module Index

### Foundation (read first for any UI work)
- [brand.md](brand.md) — Brand
- [colors.md](colors.md) — Color
- [components/typography.md](components/typography.md) — Typography
- [components/layout.md](components/layout.md) — Layout
- [components/radius.md](components/radius.md) — Radius
- [components/shadows.md](components/shadows.md) — Shadow
- [components/borders.md](components/borders.md) — Borders

### Components
- [components/buttons.md](components/buttons.md) — Button
- [components/button-group.md](components/button-group.md) — Button Group
- [components/cards.md](components/cards.md) — Card
- [components/inputs.md](components/inputs.md) — Input
- [components/alerts.md](components/alerts.md) — Alert
- [components/badges.md](components/badges.md) — Badge
- [components/lists.md](components/lists.md) — List
- [components/avatars.md](components/avatars.md) — Avatar
- [components/icon-shapes.md](components/icon-shapes.md) — Icon Shape
- [components/accordion.md](components/accordion.md) — Accordion
- [components/dropdown.md](components/dropdown.md) — Dropdown
- [components/modals.md](components/modals.md) — Modal
- [components/tabs.md](components/tabs.md) — Tabs
- [components/tables.md](components/tables.md) — Table
- [components/pagination.md](components/pagination.md) — Pagination
- [components/sidebars.md](components/sidebars.md) — Sidebar
- [components/radios-checkboxes-toggle.md](components/radios-checkboxes-toggle.md) — Radio, Checkbox, Toggle
- [components/tooltips-popovers.md](components/tooltips-popovers.md) — Tooltip, Popovers
- [components/content.md](components/content.md) — Content
- [components/design.md](components/design.md) — Design