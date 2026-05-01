'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'
import { SidebarProvider, Sidebar, SidebarTrigger, type SidebarProviderProps } from './sidebar'

/**
 * AppShell — the top-level layout for dashboard, admin, and CMS applications.
 *
 * Structure:
 *   AppShell
 *   ├── AppShellSidebar   (left sidebar)
 *   └── AppShellMain
 *       ├── AppShellHeader  (sticky top bar)
 *       └── AppShellContent (scrollable page area)
 *
 * @example
 * <AppShell>
 *   <AppShellSidebar>
 *     <SidebarHeader>…logo…</SidebarHeader>
 *     <SidebarContent><SidebarNav sections={nav} /></SidebarContent>
 *     <SidebarFooter>…user…</SidebarFooter>
 *   </AppShellSidebar>
 *   <AppShellMain>
 *     <AppShellHeader>
 *       <AppShellSidebarTrigger />
 *       <Breadcrumb>…</Breadcrumb>
 *       <div className="ml-auto flex gap-2">…actions…</div>
 *     </AppShellHeader>
 *     <AppShellContent>{children}</AppShellContent>
 *   </AppShellMain>
 * </AppShell>
 */

export interface AppShellProps extends React.ComponentProps<'div'> {
  sidebarProviderProps?: Omit<SidebarProviderProps, 'children'>
  /** Skip the internal SidebarProvider when you manage it yourself. */
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

/** Drop-in slot for the Sidebar inside AppShell. */
export function AppShellSidebar(props: React.ComponentProps<typeof Sidebar>) {
  return <Sidebar {...props} />
}

/** The main content column — grows to fill space, owns its own scroll context. */
export function AppShellMain({ ref, className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      ref={ref}
      className={cn('flex flex-1 flex-col min-w-0 overflow-hidden', className)}
      {...props}
    />
  )
}

/**
 * Sticky top bar inside AppShellMain.
 * Typically: SidebarTrigger · Separator · Breadcrumb · actions.
 */
export function AppShellHeader({ ref, className, ...props }: React.ComponentProps<'header'>) {
  return (
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
}

/** Scrollable page content area. */
export function AppShellContent({ ref, className, ...props }: React.ComponentProps<'main'>) {
  return (
    <main
      ref={ref}
      className={cn('flex-1 overflow-y-auto p-6', className)}
      {...props}
    />
  )
}

/** Re-export of SidebarTrigger for use inside AppShellHeader. */
export { SidebarTrigger as AppShellSidebarTrigger }
