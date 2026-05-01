# PRODUCT.md

## Product name
Design System

## Product purpose
A reusable component library and design language for professional internal tools: dashboards, CMS interfaces, and admin panels. The system provides a consistent visual foundation across multiple projects, making it faster to build new interfaces without compromising quality.

## Users
Developers building internal products — dashboards, content management systems, admin panels, and operations tools. The primary consumer is often an AI agent generating UI code for these product surfaces.

## Register
product

## Tone
Precise. Controlled. No flourishes. Every element earns its presence.

## Anti-references
- SaaS landing pages (marketing gradients, hero sections, testimonials)
- Consumer apps (rounded, colorful, playful)
- Generic "Bootstrap admin" templates (heavy, dated, loud)
- Glassmorphism UI (decorative blurs, frosted panels as default aesthetic)

## Strategic principles
1. **Neutral primary color** — the primary action color is a near-black charcoal, not blue. This avoids the generic "SaaS blue" reflex and works in any brand context.
2. **Light-first, dark-capable** — the default is a professional light mode (light gray page, white cards). Dark mode is a first-class citizen via CSS variable swap.
3. **Restrained color strategy** — tinted neutrals with one accent. Status colors (success/warning/destructive) carry meaning, not decoration.
4. **Composition over configuration** — components are small, composable primitives. Layouts are assembled, not prescribed.
5. **Agent-legible** — AGENTS.md, components.json, and inline JSDoc make every component discoverable and immediately usable by AI agents without guessing.
