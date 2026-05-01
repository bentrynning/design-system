import * as React from 'react'
import { cn } from '@/lib/utils'
import { registry } from './registry'
import type { StoryEntry } from './registry'

// ─── Group stories by category ────────────────────────────────────────────────

function groupByCategory(entries: StoryEntry[]): [string, StoryEntry[]][] {
  const map = new Map<string, StoryEntry[]>()
  for (const entry of entries) {
    const existing = map.get(entry.meta.category)
    if (existing) {
      existing.push(entry)
    } else {
      map.set(entry.meta.category, [entry])
    }
  }
  return Array.from(map.entries())
}

// ─── Hash routing ─────────────────────────────────────────────────────────────

function getSlugFromHash(): string {
  return window.location.hash.replace('#', '') || registry[0]?.slug || ''
}

// ─── App ──────────────────────────────────────────────────────────────────────

export function App() {
  const [activeSlug, setActiveSlug] = React.useState<string>(getSlugFromHash)
  const [dark, setDark] = React.useState<boolean>(() => {
    const stored = localStorage.getItem('ds-workshop-dark')
    if (stored !== null) return stored === 'true'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  // Sync dark mode class on <html> + persist choice
  React.useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('ds-workshop-dark', String(dark))
  }, [dark])

  // Listen for hash changes (back/forward navigation)
  React.useEffect(() => {
    const handler = () => setActiveSlug(getSlugFromHash())
    window.addEventListener('hashchange', handler)
    return () => window.removeEventListener('hashchange', handler)
  }, [])

  function navigate(slug: string) {
    window.location.hash = slug
    setActiveSlug(slug)
  }

  const groups = groupByCategory(registry)
  const activeEntry = registry.find(e => e.slug === activeSlug) ?? registry[0]
  const ActiveStory = activeEntry?.component

  return (
    <div className="flex h-screen overflow-hidden bg-background text-foreground">
      {/* ── Sidebar ── */}
      <aside className="w-56 shrink-0 flex flex-col border-r border-sidebar-border bg-sidebar overflow-hidden">
        {/* Logo / title */}
        <div className="px-4 h-12 flex items-center gap-2.5 border-b border-sidebar-border shrink-0">
          <div className="h-5 w-5 rounded-sm bg-primary" />
          <span className="text-sm font-semibold tracking-tight text-sidebar-foreground">
            Workshop
          </span>
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto py-3 space-y-5 px-2">
          {groups.map(([category, entries]) => (
            <div key={category}>
              <p className="px-2 pb-1.5 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground select-none">
                {category}
              </p>
              <ul className="space-y-0.5">
                {entries.map((entry) => (
                  <li key={entry.slug}>
                    <button
                      onClick={() => navigate(entry.slug)}
                      className={cn(
                        'w-full text-left px-2 py-1.5 rounded-md text-sm transition-colors duration-100',
                        entry.slug === activeSlug
                          ? 'bg-sidebar-accent text-sidebar-accent-foreground font-medium'
                          : 'text-sidebar-foreground hover:bg-sidebar-accent/60 hover:text-sidebar-accent-foreground'
                      )}
                    >
                      {entry.meta.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        {/* Dark mode toggle */}
        <div className="shrink-0 p-2 border-t border-sidebar-border">
          <button
            onClick={() => setDark(d => !d)}
            className="w-full flex items-center gap-2 px-2 py-1.5 rounded-md text-xs text-muted-foreground hover:text-sidebar-foreground hover:bg-sidebar-accent/60 transition-colors duration-100"
          >
            <span className="text-sm leading-none">{dark ? '☀' : '☾'}</span>
            {dark ? 'Light mode' : 'Dark mode'}
          </button>
        </div>
      </aside>

      {/* ── Main content ── */}
      <main className="flex-1 overflow-y-auto bg-background">
        {ActiveStory ? <ActiveStory /> : (
          <div className="flex h-full items-center justify-center text-muted-foreground text-sm">
            Select a component from the sidebar.
          </div>
        )}
      </main>
    </div>
  )
}
