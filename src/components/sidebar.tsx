'use client'

import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cn } from '@/lib/utils'

// ─── Types ────────────────────────────────────────────────────────────────────

export interface NavItem {
  /** Unique key for this item. */
  key: string
  /** Display label. */
  label: string
  /** URL or route. */
  href?: string
  /** Icon node (e.g. a Lucide icon or any SVG). */
  icon?: React.ReactNode
  /** Badge content — short text or number. */
  badge?: React.ReactNode
  /** Marks this item as the current page. */
  active?: boolean
  /** Disable interaction. */
  disabled?: boolean
  /** Nested sub-items (one level deep). */
  children?: Omit<NavItem, 'children'>[]
}

export interface NavSection {
  /** Optional section heading. Omit for unlabeled groups. */
  heading?: string
  items: NavItem[]
}

// ─── Context ──────────────────────────────────────────────────────────────────

interface SidebarContextValue {
  expanded: boolean
  setExpanded: (v: boolean) => void
  toggle: () => void
}

const SidebarContext = React.createContext<SidebarContextValue | null>(null)

export function useSidebar(): SidebarContextValue {
  const ctx = React.useContext(SidebarContext)
  if (!ctx) throw new Error('useSidebar must be used within <SidebarProvider>')
  return ctx
}

// ─── Provider ─────────────────────────────────────────────────────────────────

export interface SidebarProviderProps {
  /** Initial expanded state. Defaults to true. */
  defaultExpanded?: boolean
  children: React.ReactNode
  /** Storage key for persisting state. Set to null to disable persistence. */
  storageKey?: string | null
}

/**
 * Wrap your layout with SidebarProvider to manage collapse state.
 * State is persisted to localStorage by default.
 *
 * @example
 * <SidebarProvider>
 *   <AppShell>…</AppShell>
 * </SidebarProvider>
 */
export function SidebarProvider({
  defaultExpanded = true,
  children,
  storageKey = 'ds-sidebar-expanded',
}: SidebarProviderProps) {
  const [expanded, setExpandedRaw] = React.useState<boolean>(() => {
    if (storageKey && typeof window !== 'undefined') {
      try {
        const stored = localStorage.getItem(storageKey)
        if (stored !== null) return stored === 'true'
      } catch {}
    }
    return defaultExpanded
  })

  const setExpanded = React.useCallback(
    (v: boolean) => {
      setExpandedRaw(v)
      if (storageKey && typeof window !== 'undefined') {
        try { localStorage.setItem(storageKey, String(v)) } catch {}
      }
    },
    [storageKey]
  )

  const toggle = React.useCallback(() => setExpanded(!expanded), [expanded, setExpanded])

  return (
    <SidebarContext.Provider value={{ expanded, setExpanded, toggle }}>
      {children}
    </SidebarContext.Provider>
  )
}

// ─── Sidebar root ─────────────────────────────────────────────────────────────

export interface SidebarProps extends React.ComponentProps<'aside'> {
  /** Width of expanded sidebar in px. Default: 240 */
  expandedWidth?: number
  /** Width of collapsed sidebar (icon-only mode) in px. Default: 56 */
  collapsedWidth?: number
}

/**
 * The sidebar element. Must be inside <SidebarProvider>.
 *
 * @example
 * <Sidebar>
 *   <SidebarHeader>…</SidebarHeader>
 *   <SidebarContent>…</SidebarContent>
 *   <SidebarFooter>…</SidebarFooter>
 * </Sidebar>
 */
export function Sidebar({
  ref,
  className,
  expandedWidth = 240,
  collapsedWidth = 56,
  style,
  children,
  ...props
}: SidebarProps) {
  const { expanded } = useSidebar()

  return (
    <aside
      ref={ref}
      data-expanded={expanded}
      className={cn(
        'relative flex h-full flex-col bg-sidebar text-sidebar-foreground border-r border-sidebar-border',
        'transition-[width] duration-200 ease-out will-change-[width] overflow-hidden shrink-0',
        className
      )}
      style={{ width: expanded ? expandedWidth : collapsedWidth, ...style }}
      {...props}
    >
      {children}
    </aside>
  )
}

// ─── Sidebar regions ──────────────────────────────────────────────────────────

/** Top region: typically holds your logo / wordmark. */
export function SidebarHeader({ ref, className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      ref={ref}
      className={cn('flex h-14 items-center border-b border-sidebar-border px-3 shrink-0', className)}
      {...props}
    />
  )
}

/** Scrollable middle region: holds navigation. */
export function SidebarContent({ ref, className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      ref={ref}
      className={cn('flex-1 overflow-y-auto overflow-x-hidden py-3', className)}
      {...props}
    />
  )
}

/** Bottom region: user info, settings shortcut. */
export function SidebarFooter({ ref, className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      ref={ref}
      className={cn('border-t border-sidebar-border px-3 py-3 shrink-0', className)}
      {...props}
    />
  )
}

// ─── Navigation ───────────────────────────────────────────────────────────────

/** Groups a set of nav items with an optional section label. */
export function SidebarNavSection({
  ref,
  className,
  heading,
  children,
  ...props
}: React.ComponentProps<'div'> & { heading?: string }) {
  const { expanded } = useSidebar()
  return (
    <div ref={ref} className={cn('mb-1', className)} {...props}>
      {heading && expanded && (
        <p className="mb-1 px-3 text-[10px] font-semibold uppercase tracking-widest text-sidebar-foreground/40 select-none">
          {heading}
        </p>
      )}
      {children}
    </div>
  )
}

/** A single navigation item with optional icon, badge and active indicator. */
export interface SidebarNavItemProps {
  ref?: React.Ref<HTMLElement>
  href?: string
  icon?: React.ReactNode
  badge?: React.ReactNode
  active?: boolean
  disabled?: boolean
  asChild?: boolean
  className?: string
  children?: React.ReactNode
  onClick?: React.MouseEventHandler<HTMLElement>
}

export function SidebarNavItem({
  ref,
  href,
  icon,
  badge,
  active,
  disabled,
  asChild,
  className,
  children,
  ...props
}: SidebarNavItemProps) {
  const { expanded } = useSidebar()
  const Comp = asChild ? Slot : href ? 'a' : 'button'

  return (
    <Comp
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      href={href}
      data-active={active || undefined}
      data-disabled={disabled || undefined}
      aria-current={active ? 'page' : undefined}
      aria-disabled={disabled || undefined}
      className={cn(
        'group relative flex w-full items-center gap-2.5 rounded-md',
        'text-sm font-medium text-sidebar-foreground/70',
        'transition-colors duration-150',
        'hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-ring',
        'data-[active]:bg-sidebar-accent data-[active]:text-sidebar-accent-foreground data-[active]:font-semibold',
        'data-[disabled]:pointer-events-none data-[disabled]:opacity-40',
        expanded ? 'min-h-9 px-3 py-2' : 'h-9 w-9 justify-center p-0 mx-auto',
        className
      )}
      {...props}
    >
      {icon && (
        <span className={cn(
          'flex h-4 w-4 shrink-0 items-center justify-center [&>svg]:h-4 [&>svg]:w-4',
          !expanded && 'h-5 w-5 [&>svg]:h-5 [&>svg]:w-5'
        )}>
          {icon}
        </span>
      )}

      {expanded && (
        <span className="flex-1 truncate leading-none">{children}</span>
      )}

      {expanded && badge !== undefined && (
        <span className="ml-auto flex h-5 min-w-5 items-center justify-center rounded-full bg-primary/10 px-1.5 text-[10px] font-semibold text-primary">
          {badge}
        </span>
      )}
    </Comp>
  )
}

// ─── Collapse trigger ─────────────────────────────────────────────────────────

/**
 * Button that toggles sidebar expanded/collapsed.
 *
 * @example
 * <SidebarTrigger />
 */
export function SidebarTrigger({ className, ...props }: React.ComponentProps<'button'>) {
  const { toggle, expanded } = useSidebar()
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={expanded ? 'Collapse sidebar' : 'Expand sidebar'}
      className={cn(
        'flex h-7 w-7 items-center justify-center rounded-md',
        'text-sidebar-foreground/50 transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-ring',
        className
      )}
      {...props}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
        {expanded ? (
          <>
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M9 3v18" />
            <path d="m14 9-3 3 3 3" />
          </>
        ) : (
          <>
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M9 3v18" />
            <path d="m15 15 3-3-3-3" />
          </>
        )}
      </svg>
    </button>
  )
}

// ─── Convenience: build nav from data ─────────────────────────────────────────

/**
 * Renders a full navigation structure from a `NavSection[]` data array.
 *
 * @example
 * const nav: NavSection[] = [
 *   {
 *     items: [
 *       { key: 'dashboard', label: 'Dashboard', href: '/', icon: <LayoutDashboard />, active: true },
 *       { key: 'users', label: 'Users', href: '/users', icon: <Users />, badge: 12 },
 *     ],
 *   },
 * ]
 * <SidebarNav sections={nav} onNavigate={(item) => router.push(item.href!)} />
 */
export interface SidebarNavProps {
  sections: NavSection[]
  onNavigate?: (item: NavItem) => void
  className?: string
}

export function SidebarNav({ sections, onNavigate, className }: SidebarNavProps) {
  return (
    <nav className={cn('px-2 space-y-4', className)} aria-label="Main navigation">
      {sections.map((section, si) => (
        <SidebarNavSection key={si} heading={section.heading}>
          {section.items.map((item) => (
            <SidebarNavItem
              key={item.key}
              href={item.href}
              icon={item.icon}
              badge={item.badge}
              active={item.active}
              disabled={item.disabled}
              onClick={onNavigate ? () => onNavigate(item) : undefined}
            >
              {item.label}
            </SidebarNavItem>
          ))}
        </SidebarNavSection>
      ))}
    </nav>
  )
}
