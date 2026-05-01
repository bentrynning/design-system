# Design System — Agent Guide

This document is the primary reference for AI agents working on projects that use this design system. Read this before generating any UI code.

---

## Overview

A professional, minimalistic component library for **dashboards, CMS interfaces, and admin tools**. Built on React, Tailwind CSS v4, and Radix UI primitives.

**Stack:** React 18+ · TypeScript · Tailwind CSS v4 · Radix UI · CVA · tsup

---

## Quick-start for a consuming project

### 1. Install

```bash
bun add design-system
# peer deps
bun add tailwindcss @tailwindcss/postcss
```

### 2. Import the CSS in your global stylesheet

```css
/* app/globals.css or src/index.css */
@import "tailwindcss";
@import "design-system/styles";
```

### 3. Configure Tailwind to scan the library source

Add to your `postcss.config.mjs` / `vite.config.ts`:

```js
// postcss.config.mjs
export default {
  plugins: {
    '@tailwindcss/postcss': {},
  },
}
```

In your `tailwind.config.ts` (if using a config file), ensure the source includes the library:

```ts
// Or with @tailwindcss/vite, add the package path as a content source
// content: ['./node_modules/design-system/src/**/*.{ts,tsx}']
```

### 4. Wrap your app

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

## Design tokens (CSS variables)

All tokens are defined as CSS custom properties. Override them in your global CSS to theme the system.

| Token                     | Light value                    | Purpose                        |
|---------------------------|--------------------------------|--------------------------------|
| `--background`            | `oklch(0.965 0.003 264)`       | Page background                |
| `--foreground`            | `oklch(0.130 0.005 264)`       | Default text                   |
| `--card`                  | `oklch(0.995 0.001 264)`       | Card / panel surface           |
| `--card-foreground`       | same as foreground             | Text on cards                  |
| `--primary`               | `oklch(0.200 0.006 264)`       | Primary actions (buttons, etc) |
| `--primary-foreground`    | near-white                     | Text on primary bg             |
| `--secondary`             | `oklch(0.950 0.003 264)`       | Secondary actions              |
| `--muted`                 | `oklch(0.950 0.003 264)`       | Muted/disabled surfaces        |
| `--muted-foreground`      | `oklch(0.500 0.010 264)`       | Placeholder, secondary text    |
| `--accent`                | `oklch(0.940 0.004 264)`       | Hover highlights               |
| `--border`                | `oklch(0.900 0.004 264)`       | Borders, dividers              |
| `--input`                 | same as border                 | Input borders                  |
| `--ring`                  | same as primary                | Focus ring                     |
| `--destructive`           | `oklch(0.535 0.185 21)`        | Error / danger                 |
| `--success`               | `oklch(0.545 0.135 145)`       | Positive / healthy             |
| `--warning`               | `oklch(0.700 0.145 68)`        | Caution / pending              |
| `--radius`                | `0.375rem`                     | Base border-radius             |

**Dark mode:** add `class="dark"` to `<html>` or a wrapper element. All tokens remap automatically.

---

## Component reference

### Button

```tsx
import { Button } from 'design-system'

// Variants: default | secondary | outline | ghost | destructive | link
// Sizes:    sm | md (default) | lg | icon | icon-sm

<Button>Save</Button>
<Button variant="outline" size="sm">Cancel</Button>
<Button variant="destructive">Delete</Button>
<Button loading>Saving…</Button>
<Button variant="ghost" size="icon"><Pencil /></Button>

// As link
<Button asChild><a href="/settings">Settings</a></Button>
```

**Props:** `variant`, `size`, `loading`, `asChild`, all native button attrs.

---

### Input

```tsx
import { Input } from 'design-system'

<Input type="email" placeholder="you@example.com" />
<Input aria-invalid="true" />           // Error ring
<Input data-invalid="true" />           // Same, data-attribute style
<Input disabled />
```

---

### Label

```tsx
import { Label } from 'design-system'

<Label htmlFor="email">Email</Label>
<Label htmlFor="email" required>Email</Label>   // Adds red *
```

---

### Textarea

```tsx
import { Textarea } from 'design-system'

<Textarea placeholder="Add a note…" rows={4} />
```

---

### Badge

```tsx
import { Badge } from 'design-system'

// Variants: default | secondary | outline | destructive | success | warning

<Badge>Draft</Badge>
<Badge variant="success">Published</Badge>
<Badge variant="warning">Pending review</Badge>
<Badge variant="destructive">Failed</Badge>
```

---

### Card

```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from 'design-system'

<Card>
  <CardHeader>
    <CardTitle>Team members</CardTitle>
    <CardDescription>Manage access for your workspace.</CardDescription>
  </CardHeader>
  <CardContent>
    {/* content */}
  </CardContent>
  <CardFooter>
    <Button size="sm">Invite member</Button>
  </CardFooter>
</Card>
```

---

### Separator

```tsx
import { Separator } from 'design-system'

<Separator />                                         // Horizontal
<Separator orientation="vertical" className="h-4" /> // Inline vertical
```

---

### Table

```tsx
import {
  Table, TableHeader, TableBody, TableRow, TableHead, TableCell, TableFooter, TableCaption
} from 'design-system'

<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Name</TableHead>
      <TableHead>Role</TableHead>
      <TableHead>Status</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">Alice Chen</TableCell>
      <TableCell>Admin</TableCell>
      <TableCell><Badge variant="success">Active</Badge></TableCell>
    </TableRow>
  </TableBody>
</Table>
```

---

### Avatar

```tsx
import { Avatar, AvatarImage, AvatarFallback } from 'design-system'

// Sizes: xs | sm | md (default) | lg | xl

<Avatar>
  <AvatarImage src={user.avatarUrl} alt={user.name} />
  <AvatarFallback>JD</AvatarFallback>
</Avatar>

<Avatar size="lg">
  <AvatarFallback>AB</AvatarFallback>
</Avatar>
```

---

### Checkbox

```tsx
import { Checkbox, Label } from 'design-system'

<div className="flex items-center gap-2">
  <Checkbox id="agree" />
  <Label htmlFor="agree">I accept the terms</Label>
</div>

// Indeterminate (e.g. select-all)
<Checkbox checked="indeterminate" onCheckedChange={handleAll} />
```

---

### Switch

```tsx
import { Switch, Label } from 'design-system'

<div className="flex items-center gap-3">
  <Switch id="notifications" defaultChecked />
  <Label htmlFor="notifications">Email notifications</Label>
</div>
```

---

### Select

```tsx
import {
  Select, SelectTrigger, SelectValue, SelectContent, SelectItem,
  SelectGroup, SelectLabel, SelectSeparator
} from 'design-system'

<Select defaultValue="published">
  <SelectTrigger className="w-44">
    <SelectValue placeholder="Status…" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="published">Published</SelectItem>
    <SelectItem value="draft">Draft</SelectItem>
    <SelectSeparator />
    <SelectItem value="archived" disabled>Archived</SelectItem>
  </SelectContent>
</Select>
```

---

### Dialog

```tsx
import {
  Dialog, DialogTrigger, DialogContent, DialogHeader, DialogFooter,
  DialogTitle, DialogDescription, DialogClose
} from 'design-system'

<Dialog>
  <DialogTrigger asChild>
    <Button variant="outline">Delete record</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Delete record?</DialogTitle>
      <DialogDescription>This cannot be undone.</DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <DialogClose asChild><Button variant="outline">Cancel</Button></DialogClose>
      <Button variant="destructive">Delete</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

---

### DropdownMenu

```tsx
import {
  DropdownMenu, DropdownMenuTrigger, DropdownMenuContent,
  DropdownMenuItem, DropdownMenuSeparator, DropdownMenuLabel, DropdownMenuShortcut
} from 'design-system'

<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="ghost" size="icon">…</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent align="end" className="w-48">
    <DropdownMenuLabel>Actions</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Edit<DropdownMenuShortcut>⌘E</DropdownMenuShortcut></DropdownMenuItem>
    <DropdownMenuItem>Duplicate</DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
```

---

### Tooltip

```tsx
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent, SimpleTooltip } from 'design-system'

// TooltipProvider is usually added once at app root.

// Full API
<Tooltip>
  <TooltipTrigger asChild><Button variant="ghost" size="icon"><Settings /></Button></TooltipTrigger>
  <TooltipContent>Settings</TooltipContent>
</Tooltip>

// Shorthand
<SimpleTooltip content="Settings">
  <Button variant="ghost" size="icon"><Settings /></Button>
</SimpleTooltip>
```

---

### Alert

```tsx
import { Alert, AlertTitle, AlertDescription } from 'design-system'

// Variants: default | destructive | success | warning

<Alert variant="destructive">
  <AlertTitle>Save failed</AlertTitle>
  <AlertDescription>Check your connection and try again.</AlertDescription>
</Alert>

// With icon (place SVG as first child)
<Alert variant="success">
  <CheckCircle />
  <AlertTitle>Saved</AlertTitle>
  <AlertDescription>Your changes were published.</AlertDescription>
</Alert>
```

---

### Progress

```tsx
import { Progress } from 'design-system'

<Progress value={60} />
<Progress value={33} className="h-1.5" />  // Thinner variant
```

---

### Skeleton

```tsx
import { Skeleton } from 'design-system'

// Match the shape of the content it replaces
<Skeleton className="h-9 w-9 rounded-full" />  // Avatar
<Skeleton className="h-4 w-48" />              // Text line
<Skeleton className="h-32 w-full rounded-lg" /> // Card
```

---

### ScrollArea

```tsx
import { ScrollArea } from 'design-system'

<ScrollArea className="h-72 w-full">
  {longContent}
</ScrollArea>
```

---

### Command (Command palette)

```tsx
import {
  Command, CommandInput, CommandList, CommandEmpty,
  CommandGroup, CommandItem, CommandSeparator, CommandShortcut
} from 'design-system'

// Most common: inside a Dialog opened with ⌘K
<Dialog open={open} onOpenChange={setOpen}>
  <DialogContent hideClose className="p-0 overflow-hidden max-w-xl">
    <Command>
      <CommandInput placeholder="Search…" />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Pages">
          <CommandItem onSelect={() => navigate('/dashboard')}>
            Dashboard
            <CommandShortcut>⌘D</CommandShortcut>
          </CommandItem>
          <CommandItem onSelect={() => navigate('/users')}>Users</CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  </DialogContent>
</Dialog>
```

---

### Sheet (slide-in panel)

```tsx
import {
  Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetFooter, SheetClose
} from 'design-system'

// Sides: right (default) | left | top | bottom

<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">Open filters</Button>
  </SheetTrigger>
  <SheetContent side="right">
    <SheetHeader>
      <SheetTitle>Filters</SheetTitle>
      <SheetDescription>Narrow the results below.</SheetDescription>
    </SheetHeader>
    <div className="px-6 py-4">{filterContent}</div>
    <SheetFooter>
      <SheetClose asChild><Button variant="outline">Reset</Button></SheetClose>
      <Button>Apply</Button>
    </SheetFooter>
  </SheetContent>
</Sheet>
```

---

### Breadcrumb

```tsx
import {
  Breadcrumb, BreadcrumbList, BreadcrumbItem,
  BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator
} from 'design-system'

<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/users">Users</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Alice Chen</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
```

---

## Layout system

### AppShell

Full-page admin layout with a collapsible sidebar.

```tsx
import {
  AppShell, AppShellSidebar, AppShellMain,
  AppShellHeader, AppShellContent, AppShellSidebarTrigger,
  SidebarHeader, SidebarContent, SidebarFooter,
  SidebarNav,
  Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbPage,
  Separator, Button,
} from 'design-system'
import type { NavSection } from 'design-system'

const nav: NavSection[] = [
  {
    items: [
      { key: 'dashboard', label: 'Dashboard', href: '/',       icon: <LayoutDashboard />, active: true },
      { key: 'users',     label: 'Users',     href: '/users',  icon: <Users />,           badge: 3 },
    ],
  },
  {
    heading: 'Content',
    items: [
      { key: 'posts',  label: 'Posts',  href: '/posts',  icon: <FileText /> },
      { key: 'media',  label: 'Media',  href: '/media',  icon: <Image /> },
    ],
  },
  {
    heading: 'System',
    items: [
      { key: 'settings', label: 'Settings', href: '/settings', icon: <Settings /> },
    ],
  },
]

export default function Layout({ children }) {
  return (
    <AppShell>
      <AppShellSidebar>
        <SidebarHeader>
          <span className="font-semibold text-sm tracking-tight">Acme Admin</span>
        </SidebarHeader>
        <SidebarContent>
          <SidebarNav sections={nav} />
        </SidebarContent>
        <SidebarFooter>
          {/* User avatar + name */}
        </SidebarFooter>
      </AppShellSidebar>

      <AppShellMain>
        <AppShellHeader>
          <AppShellSidebarTrigger />
          <Separator orientation="vertical" className="h-4 mx-1" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem><BreadcrumbPage>Dashboard</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="ml-auto flex items-center gap-2">
            <Button size="sm">New post</Button>
          </div>
        </AppShellHeader>
        <AppShellContent>
          {children}
        </AppShellContent>
      </AppShellMain>
    </AppShell>
  )
}
```

### Sidebar (standalone)

If you need more control, compose the sidebar manually:

```tsx
import { SidebarProvider, useSidebar, Sidebar, SidebarTrigger, ... } from 'design-system'

function MyLayout() {
  const { expanded } = useSidebar()
  // ...
}
```

---

## Utility

### cn — class name helper

```tsx
import { cn } from 'design-system'

cn('px-4 py-2', isActive && 'bg-primary', className)
```

---

## Patterns for admins and dashboards

### Stats row

```tsx
<div className="grid grid-cols-4 gap-4">
  {stats.map(s => (
    <Card key={s.key}>
      <CardContent className="pt-6">
        <p className="text-sm text-muted-foreground">{s.label}</p>
        <p className="mt-1 text-2xl font-semibold tabular-nums">{s.value}</p>
      </CardContent>
    </Card>
  ))}
</div>
```

### Table with row actions

```tsx
<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Name</TableHead>
      <TableHead>Status</TableHead>
      <TableHead className="text-right">Actions</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {rows.map(row => (
      <TableRow key={row.id}>
        <TableCell className="font-medium">{row.name}</TableCell>
        <TableCell><Badge variant={row.active ? 'success' : 'secondary'}>{row.status}</Badge></TableCell>
        <TableCell className="text-right">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon-sm">…</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Edit</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>
```

### Settings form

```tsx
<Card>
  <CardHeader>
    <CardTitle>Profile</CardTitle>
    <CardDescription>Update your display name and email.</CardDescription>
  </CardHeader>
  <CardContent className="space-y-4">
    <div className="space-y-1.5">
      <Label htmlFor="name" required>Display name</Label>
      <Input id="name" defaultValue={user.name} />
    </div>
    <div className="space-y-1.5">
      <Label htmlFor="email" required>Email</Label>
      <Input id="email" type="email" defaultValue={user.email} />
    </div>
    <div className="flex items-center justify-between rounded-lg border border-border p-4">
      <div>
        <p className="text-sm font-medium">Marketing emails</p>
        <p className="text-sm text-muted-foreground">Receive product updates and announcements.</p>
      </div>
      <Switch defaultChecked={user.marketingEmails} />
    </div>
  </CardContent>
  <CardFooter>
    <Button>Save changes</Button>
  </CardFooter>
</Card>
```

---

## File structure

```
src/
├── components/
│   ├── alert.tsx           Alert / AlertTitle / AlertDescription
│   ├── app-shell.tsx       AppShell layout system
│   ├── avatar.tsx          Avatar / AvatarImage / AvatarFallback
│   ├── badge.tsx           Badge
│   ├── breadcrumb.tsx      Breadcrumb navigation
│   ├── button.tsx          Button
│   ├── card.tsx            Card + subcomponents
│   ├── checkbox.tsx        Checkbox
│   ├── command.tsx         Command palette (cmdk)
│   ├── dialog.tsx          Modal dialog
│   ├── dropdown-menu.tsx   Dropdown / context menu
│   ├── input.tsx           Input
│   ├── label.tsx           Label
│   ├── progress.tsx        Progress bar
│   ├── scroll-area.tsx     Scroll area
│   ├── select.tsx          Select dropdown
│   ├── separator.tsx       Divider
│   ├── sheet.tsx           Slide-in panel
│   ├── sidebar.tsx         Sidebar + navigation + collapse context
│   ├── skeleton.tsx        Loading skeleton
│   ├── switch.tsx          Toggle switch
│   ├── table.tsx           Data table
│   ├── textarea.tsx        Textarea
│   └── tooltip.tsx         Tooltip
├── lib/
│   └── utils.ts            cn() helper
└── styles/
    └── globals.css         Design tokens + Tailwind v4 theme
```

---

## What NOT to do

- Do not use `border-left` / `border-right` as accent stripes on cards or list items.
- Do not nest cards inside cards.
- Do not use gradient text (`background-clip: text`).
- Do not open a Dialog as the default response to any action — prefer inline editing, sheets, or progressive disclosure.
- Do not apply the same padding to every element — vary spacing for rhythm.
