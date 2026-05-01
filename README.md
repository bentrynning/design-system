# Design System

A professional, minimalistic component library for **dashboards, CMS interfaces, and admin panels**. Inspired by modern tool-focused design — precise, controlled, and composable.

---

## Stack

- **React** 18+ · TypeScript
- **Tailwind CSS v4** — CSS-first config with OKLCH tokens
- **Radix UI** — accessible headless primitives
- **CVA** — typed component variants
- **tsup** — library build

---

## Setup

### 1. Install

```bash
bun add design-system
bun add tailwindcss @tailwindcss/postcss   # peer deps
```

### 2. Import styles

```css
/* app/globals.css */
@import "tailwindcss";
@import "design-system/styles";
```

### 3. PostCSS config

```js
// postcss.config.mjs
export default {
  plugins: { '@tailwindcss/postcss': {} },
}
```

### 4. Wrap app root

```tsx
import { TooltipProvider } from 'design-system'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <TooltipProvider>{children}</TooltipProvider>
      </body>
    </html>
  )
}
```

---

## Usage

```tsx
import { Button, Card, CardHeader, CardTitle, CardContent, Badge } from 'design-system'

<Card>
  <CardHeader>
    <CardTitle>Users</CardTitle>
  </CardHeader>
  <CardContent>
    <Badge variant="success">Active</Badge>
    <Button size="sm">Invite</Button>
  </CardContent>
</Card>
```

Full admin layout with sidebar:

```tsx
import {
  AppShell, AppShellSidebar, AppShellMain,
  AppShellHeader, AppShellContent, AppShellSidebarTrigger,
  SidebarHeader, SidebarContent, SidebarFooter, SidebarNav,
} from 'design-system'
import type { NavSection } from 'design-system'

const nav: NavSection[] = [
  {
    items: [
      { key: 'dashboard', label: 'Dashboard', href: '/', icon: <LayoutDashboard />, active: true },
      { key: 'users', label: 'Users', href: '/users', icon: <Users />, badge: 5 },
    ],
  },
]

export default function Layout({ children }) {
  return (
    <AppShell>
      <AppShellSidebar>
        <SidebarHeader>Acme Admin</SidebarHeader>
        <SidebarContent><SidebarNav sections={nav} /></SidebarContent>
      </AppShellSidebar>
      <AppShellMain>
        <AppShellHeader>
          <AppShellSidebarTrigger />
        </AppShellHeader>
        <AppShellContent>{children}</AppShellContent>
      </AppShellMain>
    </AppShell>
  )
}
```

---

## Components

| Component         | Description                                      |
|-------------------|--------------------------------------------------|
| `Alert`           | Inline feedback: default / destructive / success / warning |
| `AppShell`        | Full-page admin layout (sidebar + main)          |
| `Avatar`          | User avatar with image and initials fallback     |
| `Badge`           | Status pill with 6 semantic variants             |
| `Breadcrumb`      | Navigation trail                                 |
| `Button`          | 6 variants, 5 sizes, loading state               |
| `Card`            | Bordered surface with header / content / footer  |
| `Checkbox`        | Accessible with indeterminate support            |
| `Command`         | ⌘K command palette (cmdk)                        |
| `Dialog`          | Modal dialog                                     |
| `DropdownMenu`    | Context / action menu                            |
| `Input`           | Text input with error state                      |
| `Label`           | Accessible label with required indicator         |
| `Progress`        | Determinate progress bar                         |
| `ScrollArea`      | Custom-styled scrollable container               |
| `Select`          | Accessible select dropdown                       |
| `Separator`       | Horizontal or vertical divider                   |
| `Sheet`           | Slide-in panel (right / left / top / bottom)     |
| `Sidebar`         | Collapsible navigation sidebar                   |
| `Skeleton`        | Loading placeholder with shimmer                 |
| `Switch`          | Toggle switch                                    |
| `Table`           | Data table                                       |
| `Textarea`        | Multi-line text input                            |
| `Tooltip`         | Hover/focus tooltip                              |

---

## Design

- **Color:** OKLCH, cool-tinted neutrals, dark charcoal primary (not SaaS blue)
- **Dark mode:** `class="dark"` on `<html>` — all tokens remap automatically
- **Radius:** 6px base — controlled, not pill-shaped
- **Motion:** ease-out, 150–300ms, transform/opacity only

See [DESIGN.md](DESIGN.md) for the full token reference.
See [AGENTS.md](AGENTS.md) for the agent-facing component guide with examples.

---

## Development

```bash
bun install
bun run build          # compile to dist/
bun run build:watch    # watch mode
bun run typecheck      # type-check without building
```

---

## Renaming the package

The package is named `design-system` by default. To use a scoped name (e.g. `@acme/ui`):

1. Edit `"name"` in `package.json`
2. Update the import in every consuming project

---

## License

MIT
