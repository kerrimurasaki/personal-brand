# Layout & Spacing

## Spacing Rhythm

Base unit: **8px**. All spacing values should be multiples of 8px.

| Context | Value |
|---|---|
| Section vertical padding | 112px |
| Section header → content | 56px or 72px |
| Heading → paragraph | 20px |
| Container horizontal padding | 32px |
| Flex/grid row gap | 16px |
| Card grid gap | 32px |
| Wide component grid gap | 40px |
| Column layout gap | 56px |

## Container

Standard section container: max-width 1280px, centered, 32px horizontal padding.

Every major section wraps content in this container.

## Content Composition Order

Inside each section, follow this order:
1. Heading (`h1`–`h3`)
2. Leading paragraph
3. Normal paragraph(s)
4. Lists, CTA links, or component grids

## Section Pattern

Each section has:
- 112px vertical padding
- A background color (alternate between neutral-primary-soft and neutral-secondary-soft)
- A centered container (max-width 1280px, 32px horizontal padding)
- A section header area with 56px bottom margin
- Section content below
- Text defaults to left-aligned — center alignment only for hero headlines or short feature callouts

## Motion & Animation

- Prefer CSS-native: `transition`, `animation`, `@keyframes`. Use Motion library only when CSS cannot achieve the behavior.
- Prioritize high-impact orchestrated moments over scattered micro-interactions. A single well-sequenced page-load animation using staggered `animation-delay` delivers more perceived quality than many isolated effects.
- Reserve scroll-triggered and hover transitions for moments that reinforce hierarchy or reward attention.
- Default easing: cubic-bezier(0.16, 1, 0.3, 1) for entrances, ease-out for exits.

## Backgrounds & Visual Depth

- Default to layered, atmospheric backgrounds rather than flat solid fills.
- Use full-bleed background images aligned to the left or spanning the viewport as primary visual anchors. Images should sit behind content with appropriate overlay gradients for text legibility.
- Apply contextual treatments — gradient meshes, noise textures, geometric patterns, layered transparencies, dramatic shadows, decorative borders, grain overlays — that align with brand aesthetic.
- Every decorative element must serve a compositional purpose (depth, separation, or emphasis). No purely ornamental effects competing with content.

## Must

- All sections: consistent 112px vertical padding
- All containers: max-width 1280px, centered, 32px horizontal padding
- Section headers: 56px or 72px bottom margin
- Text: left-aligned by default
- Consistent vertical rhythm, no crowded sections
- Layouts readable and properly spaced on both desktop and mobile
