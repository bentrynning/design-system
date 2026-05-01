import * as React from 'react'
import { cn } from '@/lib/utils'

// ─── Types ────────────────────────────────────────────────────────────────────

export interface StoryMeta {
  /** Display name for the sidebar and page heading. */
  title: string
  /** One-line description shown below the heading. */
  description?: string
  /** Sidebar group this story belongs to. */
  category: string
}

// ─── Story ────────────────────────────────────────────────────────────────────

interface StoryProps {
  meta: StoryMeta
  children: React.ReactNode
}

/**
 * Page wrapper for a component story.
 *
 * @example
 * export default function ButtonStory() {
 *   return (
 *     <Story meta={meta}>
 *       <Variant title="Variants">…</Variant>
 *     </Story>
 *   )
 * }
 */
export function Story({ meta, children }: StoryProps) {
  return (
    <div className="max-w-4xl mx-auto py-10 px-8 space-y-10">
      {/* Header */}
      <div className="space-y-1.5 pb-2 border-b border-border">
        <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
          {meta.category}
        </span>
        <h1 className="text-2xl font-semibold tracking-tight text-foreground">{meta.title}</h1>
        {meta.description && (
          <p className="text-sm text-muted-foreground max-w-2xl leading-relaxed">{meta.description}</p>
        )}
      </div>

      {/* Variants */}
      <div className="space-y-8">{children}</div>
    </div>
  )
}

// ─── Variant ──────────────────────────────────────────────────────────────────

interface VariantProps {
  /** Section heading shown above the preview box. */
  title: string
  /** Optional sub-description. */
  description?: string
  children: React.ReactNode
  className?: string
  /** Stack children vertically instead of horizontally. */
  vertical?: boolean
  /** Use a dark surface for the preview area. */
  dark?: boolean
  /** Adjust the inner padding. Defaults to "md". */
  padding?: 'sm' | 'md' | 'lg' | 'none'
  /**
   * Cross-axis alignment of children in the horizontal flex row.
   * Defaults to "center" — the right choice for atomic components.
   * Use "start" for cards or layout sections that have different heights.
   */
  align?: 'start' | 'center' | 'end'
}

/**
 * A named section within a story showing one set of component states.
 *
 * @example
 * <Variant title="Sizes">
 *   <Button size="sm">Small</Button>
 *   <Button size="md">Medium</Button>
 *   <Button size="lg">Large</Button>
 * </Variant>
 */
export function Variant({
  title,
  description,
  children,
  className,
  vertical = false,
  dark = false,
  padding = 'md',
  align = 'center',
}: VariantProps) {
  const paddingClass = {
    none: '',
    sm: 'p-3',
    md: 'p-6',
    lg: 'p-8',
  }[padding]

  const alignClass = {
    start:  'items-start',
    center: 'items-center',
    end:    'items-end',
  }[align]

  return (
    <section className="space-y-2">
      {/* Label row */}
      <div>
        <h2 className="text-sm font-medium text-foreground">{title}</h2>
        {description && (
          <p className="text-xs text-muted-foreground mt-0.5">{description}</p>
        )}
      </div>

      {/* Preview box */}
      <div
        className={cn(
          'rounded-lg border border-border',
          dark ? 'bg-foreground' : 'bg-card dark:bg-background',
          paddingClass,
          vertical ? 'flex flex-col gap-3' : `flex flex-wrap gap-3 ${alignClass}`,
          className
        )}
      >
        {children}
      </div>
    </section>
  )
}
