# DESIGN.md

## Design direction

**Register:** Product (serves the interface, not the brand)
**Color strategy:** Restrained — tinted neutrals + semantic status colors. No decorative color.
**Theme:** Light-first. A professional light environment: light gray page, white cards, dark charcoal actions. Dark mode maps the same semantic roles to inverted values.

---

## Color system

All colors use **OKLCH** (perceptually uniform). The hue axis is fixed at **264°** (a barely perceptible cool-violet lean) across all neutrals. This prevents the warm drift of default gray while staying far from any brand association.

### Palette — light mode

| Role                  | Value                        | Notes                              |
|-----------------------|------------------------------|------------------------------------|
| Background            | `oklch(0.965 0.003 264)`     | Light gray page                    |
| Card / popover        | `oklch(0.995 0.001 264)`     | Near-white panel (elevated)        |
| Foreground            | `oklch(0.130 0.005 264)`     | Near-black text                    |
| Muted foreground      | `oklch(0.500 0.010 264)`     | Secondary / placeholder text       |
| Border / input        | `oklch(0.900 0.004 264)`     | Subtle dividers                    |
| Primary               | `oklch(0.200 0.006 264)`     | Dark charcoal — not blue           |
| Primary foreground    | `oklch(0.985 0.001 264)`     | Near-white on dark button          |
| Muted / secondary     | `oklch(0.950 0.003 264)`     | Hover surfaces, secondary buttons  |
| Destructive           | `oklch(0.535 0.185 21)`      | Error red                          |
| Success               | `oklch(0.545 0.135 145)`     | Healthy / published green          |
| Warning               | `oklch(0.700 0.145 68)`      | Pending / caution amber            |

### Palette — dark mode

Same semantic roles, inverted: primary becomes near-white, background becomes very dark slate.

---

## Typography

**Sans-serif:** Inter → system-ui → -apple-system → sans-serif
**Monospace:** JetBrains Mono → Fira Code → ui-monospace

Consumers should load Inter from Google Fonts or Fontsource for best results.

### Scale

| Token           | Size   | Weight | Use                        |
|-----------------|--------|--------|----------------------------|
| Heading (h1)    | 1.5rem | 600    | Page titles                |
| Heading (h2)    | 1.25rem| 600    | Section titles             |
| Heading (h3)    | 1rem   | 600    | Card titles (CardTitle)    |
| Body            | 0.875rem | 400  | Default / `text-sm`        |
| Small / caption | 0.75rem  | 400  | Metadata, table headers    |
| Label           | 0.875rem | 500  | Form labels                |
| Code / mono     | 0.875rem | 400  | Inline code                |

Body line length: capped at 65–72ch.

---

## Spacing

Spacing follows Tailwind's default scale. Key rhythm values:

- **4px (1):** icon gap, tight inline
- **8px (2):** within component (label to input)
- **12px (3):** between form fields
- **16px (4):** card padding internal sections
- **24px (6):** card padding, section gap
- **32px (8):** section separation
- **48px (12):** major layout sections

Vary spacing for rhythm. Flat uniform spacing produces monotony.

---

## Elevation / depth

| Layer        | Implementation                   |
|--------------|----------------------------------|
| Background   | Page background color            |
| Surface      | Card (`shadow-xs` + border)      |
| Overlay      | Popover / dropdown (`shadow-lg`) |
| Modal        | Dialog overlay + `shadow-2xl`    |

No gradient backgrounds. No decorative shadows. Elevation via value steps.

---

## Border radius

Base: `0.375rem` (6px) — controlled, not pill-shaped.

| Token      | Value            | Use                     |
|------------|------------------|-------------------------|
| `--radius-sm`  | 4px          | Small elements (badges) |
| `--radius-md`  | 6px (base)   | Inputs, buttons         |
| `--radius-lg`  | 8px          | Cards                   |
| `--radius-xl`  | 12px         | Dialogs, sheets         |
| `--radius-2xl` | 16px         | Large modals (rare)     |
| `rounded-full` | —            | Avatars, switch thumb   |

---

## Motion

- **Duration:** 100–300ms
- **Easing:** `ease-out` / exponential out curves for all enters; faster `ease-out` for exits
- **Properties:** transform, opacity, width only. Never animate `height` or layout properties directly.
- **Sidebar collapse:** `transition-[width] duration-200 ease-out`
- **Overlays in:** `ds-fade-in 0.2s ease-out`
- **Popovers in:** `ds-zoom-in 0.15s ease-out` (scale 0.96 → 1)
- **Sheets in:** `ds-slide-in-from-* 0.3s ease-out`

---

## Component decisions

### No side-stripe accents
Never `border-left` / `border-right` as a colored accent on cards or list items.
Use full borders, background tints, or leading numbers/icons instead.

### Sidebar
- Expanded: 240px. Collapsed: 56px (icon-only).
- Background is slightly different from page (`--sidebar` token).
- Active item: `bg-sidebar-accent` with `font-semibold`.
- Collapse state persisted to `localStorage`.

### Forms
- Labels always above inputs (not floating).
- Error state via `aria-invalid="true"` — triggers a red border ring.
- Required indicator: red asterisk via `<Label required>`.
- `space-y-4` between fields, `space-y-1.5` between label and input.

### Tables
- Column headers: `text-xs uppercase tracking-wide text-muted-foreground`
- Row hover: subtle `bg-muted/40`
- Selected row: `bg-accent`

### Status badges
Use `<Badge variant="...">` to represent states:
- Published / active / healthy → `success`
- Draft / inactive → `secondary`
- Pending / review → `warning`
- Error / failed / blocked → `destructive`

### Semantic color rule — tinted vs solid surfaces
The `*-foreground` tokens (`--destructive-foreground`, `--success-foreground`, `--warning-foreground`) are designed for **solid fill** backgrounds only (e.g. a filled button or solid chip where the background IS the semantic color). They must not be used on tinted surfaces.

| Surface type | Text class to use |
|---|---|
| Solid background: `bg-warning` | `text-warning-foreground` |
| Tinted background: `bg-warning/10` | `text-warning` (the color itself) |

This follows the shadcn/ui principle: use the semantic color directly as text when the background is a subtle tint. It works in both light and dark mode because the semantic colors are calibrated to be readable against both light and dark backgrounds.

---

## What this system is NOT

- Not a marketing / brand design system
- Not a consumer product UI (no playful colors, illustrations, or rounded cards with thick shadows)
- Not an opinionated CMS — it is purely UI primitives and layout
