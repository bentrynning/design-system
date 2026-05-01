'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'
import { SidebarProvider, Sidebar, SidebarTrigger, type SidebarProviderProps } from './sidebar'

/**
 * AppShell — the top-level layout for dashboard, admin, and CMS applications.
 *
 * Structure:
 *   AppShell
 *   ├── AppShellSidebar   (left sidebar, optional)
 *   └── AppShellMain
 *       ├── AppShellHeader  (top bar with breadcrumb + actions)
 *       └── AppShellContent (scrollable page area)
 *
 * @example
 * // Basic wiring
 * <AppShell>
 *   <AppShellSidebar>
 *     <SidebarHeader>…logo…</SidebarHeader>
 *     <SidebarContent>
 *       <SidebarNav sections={nav} />
 *     </SidebarContent>
 *     <SidebarFooter>…user…</SidebarFooter>
 *   </AppShellSidebar>
 *
 *   <AppShellMain>
 *     <AppShellHeader>
 *       <Breadcrumb>…</Breadcrumb>
 *       <div className="ml-auto flex gap-2">…actions…</div>
 *     </AppShellHeader>
 *     <AppShellContent>
 *       {children}
 *     </AppShellContent>
 *   </AppShellMain>
 * </AppShell>
 */

// ─── AppShell ─────────────────────────────────────────────────────────────────

export interface AppShellProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Props forwarded to the internal SidebarProvider. */
  sidebarProviderProps?: Omit<SidebarProviderProps, 'children'>
  /**
   * When true, omits the SidebarProvider wrapper.
   * Use this if you manage SidebarProvider yourself at a higher level.
   */
  noSidebarProvider?: boolean
}

export function AppShell({
  className,
  children,
  sidebarProviderProps,
  noSidebarProvider,
  ...props
}: AppShellProps) {
  const inner = (
    <div
      className={cn('flex h-screen w-full overflow-hidden bg-background', className)}
      {...props}
    >
      {children}
    </div>
  )

  if (noSidebarProvider) return inner

  return (
    <SidebarProvider {...sidebarProviderProps}>
      {inner}
    </SidebarProvider>
  )
}

// ─── AppShellSidebar ──────────────────────────────────────────────────────────

export interface AppShellSidebarProps
  extends Omit<React.ComponentPropsWithoutRef<typeof Sidebar>, 'children'> {
  children: React.ReactNode
}

/** Drop-in slot for the Sidebar inside AppShell. */
export function AppShellSidebar({ children, ...props }: AppShellSidebarProps) {
  return (
    <Sidebar {...props}>
      {children}
    </Sidebar>
  )
}

// ─── AppShellMain ─────────────────────────────────────────────────────────────

/**
 * The main content column (everything right of the sidebar).
 * Grows to fill remaining space and establishes its own scroll context.
 */
export const AppShellMain = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex flex-1 flex-col min-w-0 overflow-hidden', className)}
      {...props}
    />
  )
)
AppShellMain.displayName = 'AppShellMain'

// ─── AppShellHeader ───────────────────────────────────────────────────────────

/**
 * Sticky top bar inside AppShellMain.
 * Typically contains: SidebarTrigger, Breadcrumb, and action buttons.
 *
 * @example
 * <AppShellHeader>
 *   <SidebarTrigger />
 *   <Separator orientation="vertical" className="h-4 mx-1" />
 *   <Breadcrumb>…</Breadcrumb>
 *   <div className="ml-auto flex items-center gap-2">
 *     <Button size="sm">New post</Button>
 *   </div>
 * </AppShellHeader>
 */
export const AppShellHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <header
      ref={ref}
      className={cn(
        'flex h-14 items-center gap-2 border-b border-border bg-card/80 backdrop-blur-xs',
        'px-4 shrink-0 sticky top-0 z-10',
        className
      )}
      {...props}
    />
  )
)
AppShellHeader.displayName = 'AppShellHeader'

// ─── AppShellContent ──────────────────────────────────────────────────────────

/**
 * Scrollable page content area. Pad as needed for your layout.
 */
export const AppShellContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <main
      ref={ref}
      className={cn('flex-1 overflow-y-auto p-6', className)}
      {...props}
    />
  )
)
AppShellContent.displayName = 'AppShellContent'

// ─── AppShellTrigger ──────────────────────────────────────────────────────────

/** Convenience re-export of SidebarTrigger for use inside AppShellHeader. */
export { SidebarTrigger as AppShellSidebarTrigger }
