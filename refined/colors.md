# Color Tokens


## Background Tokens

### Neutral
| Token | Light | Dark |
|---|---|---|
| neutral-primary-soft | #FAFAFA | #0A0A0C |
| neutral-primary | #FFFFFF | #09090B |
| neutral-primary-medium | #FAFAFA | #18181B |
| neutral-primary-strong | #FAFAFA | #27272A |
| neutral-secondary-soft | #F4F4F5 | #0A0A0C |
| neutral-secondary | #F4F4F5 | #09090B |
| neutral-secondary-medium | #F4F4F5 | #18181B |
| neutral-secondary-strong | #F4F4F5 | #27272A |
| neutral-tertiary-soft | #E4E4E7 | #0A0A0C |
| neutral-tertiary | #E4E4E7 | #18181B |
| neutral-tertiary-medium | #E4E4E7 | #27272A |
| neutral-quaternary | #D4D4D8 | #27272A |
| quaternary-medium | #D4D4D8 | #3F3F46 |
| gray | #A1A1AA | #3F3F46 |

### Brand
| Token | Light | Dark |
|---|---|---|
| brand-softer | #FAF7F2 | #191510 |
| brand-soft | #F0E8D9 | #2C2419 |
| brand | #B8956A | #C9A96E |
| brand-medium | #E2CEAF | #2C2419 |
| brand-strong | #96734D | #B8956A |

### Status
| Token | Light | Dark |
|---|---|---|
| success-soft | #F0FDF4 | #052E16 |
| success | #059669 | #10B981 |
| success-medium | #D1FAE5 | #064E3B |
| success-strong | #047857 | #059669 |
| danger-soft | #FEF2F2 | #450A0A |
| danger | #C53030 | #DC2626 |
| danger-medium | #FECACA | #7F1D1D |
| danger-strong | #9B2C2C | #B91C1C |
| warning-soft | #FFFBEB | #451A03 |
| warning | #D97706 | #F59E0B |
| warning-medium | #FDE68A | #78350F |
| warning-strong | #B45309 | #D97706 |

### Button Glint (CSS custom properties, used for the glint box-shadow effect)
| Variable | Light | Dark |
|---|---|---|
| `--color-1-400` | rgba(255,255,255,0.15) | rgba(255,255,255,0.06) |
| `--color-1-700` | rgba(0,0,0,0.06) | rgba(0,0,0,0.18) |

### Utility
| Token | Light | Dark |
|---|---|---|
| dark | #18181B | #18181B |
| dark-strong | #09090B | #27272A |
| disabled | #F4F4F5 | #18181B |

### Accent
| Token | Value (same both modes) |
|---|---|
| purple | #8B5CF6 |
| sky | #38BDF8 |
| teal | #2DD4BF |
| pink | #EC4899 |
| cyan | #22D3EE |
| fuchsia | #C084FC |
| indigo | #818CF8 |
| orange | #FB923C |

## Text Color Tokens

### Base
| Token | Light | Dark |
|---|---|---|
| white | #FFFFFF | #FFFFFF |
| black | #09090B | #09090B |
| heading | #09090B | #FAFAFA |
| body | #52525B | #A1A1AA |
| body-subtle | #71717A | #A1A1AA |

### Brand
| Token | Light | Dark |
|---|---|---|
| fg-brand-subtle | #E2CEAF | #2C2419 |
| fg-brand | #B8956A | #D4B896 |
| fg-brand-strong | #96734D | #E2CEAF |

### Status
| Token | Light | Dark |
|---|---|---|
| fg-success | #059669 | #047857 |
| fg-success-strong | #047857 | #10B981 |
| fg-danger | #C53030 | #EF4444 |
| fg-danger-strong | #9B2C2C | #F87171 |
| fg-warning-subtle | #D97706 | #F59E0B |
| fg-warning | #92400E | #FBBF24 |
| fg-disabled | #A1A1AA | #52525B |

### Informational / Accent
| Token | Light | Dark |
|---|---|---|
| fg-yellow | #EAB308 | #FACC15 |
| fg-info | #312E81 | #93C5FD |
| fg-purple | #7C3AED | #A78BFA |
| fg-purple-strong | #6D28D9 | #C4B5FD |
| fg-cyan | #0891B2 | #22D3EE |
| fg-indigo | #4F46E5 | #818CF8 |
| fg-pink | #DB2777 | #F472B6 |
| fg-lime | #65A30D | #84CC16 |

## Border Color Tokens

| Token | Light | Dark |
|---|---|---|
| border-dark | #18181B | #3F3F46 |
| border-buffer | #FFFFFF | #09090B |
| border-buffer-medium | #FFFFFF | #18181B |
| border-buffer-strong | #FFFFFF | #27272A |
| border-muted | #FAFAFA | #0A0A0C |
| border-light-subtle | #F4F4F5 | #0A0A0C |
| border-light | #F4F4F5 | #18181B |
| border-light-medium | #F4F4F5 | #27272A |
| border-default-subtle | #E4E4E7 | #0A0A0C |
| border-default | #E4E4E7 | #18181B |
| border-default-medium | #E4E4E7 | #27272A |
| border-default-strong | #E4E4E7 | #3F3F46 |
| border-success-subtle | #A7F3D0 | #064E3B |
| border-success | #059669 | #047857 |
| border-danger-subtle | #FECACA | #7F1D1D |
| border-danger | #C53030 | #DC2626 |
| border-warning-subtle | #FDE68A | #78350F |
| border-warning | #D97706 | #F59E0B |
| border-brand-subtle | #E2CEAF | #2C2419 |
| border-brand-light | #C9A96E | #C9A96E |
| border-brand | #B8956A | #D4B896 |
| border-dark-subtle | #18181B | #27272A |
| border-purple | #8B5CF6 | #8B5CF6 |
| border-orange | #FB923C | #FB923C |

## Semantic Usage Rules

- Page/section backgrounds: neutral-primary-soft (default), neutral-secondary-soft (alternating)
- Primary buttons: brand background
- Headings: heading text color
- Body text: body text color
- CTA links: fg-brand text color
- Default borders: border-default
- Status borders match intent: success → border-success, danger → border-danger, warning → border-warning
- Disabled: disabled background + fg-disabled text

## Prohibited

- No raw hex/rgb values in component code — always use design tokens
- No brand text color for long-form paragraphs
- No accent text tokens (fg-purple, etc.) for body copy or navigation
- No brand/accent backgrounds for large layout surfaces (pages, sections) unless it's a hero/campaign area
- No manual light/dark value swapping — let the CSS custom properties handle it
