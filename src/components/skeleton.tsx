import * as React from 'react'
import { cn } from '@/lib/utils'

/**
 * Loading placeholder. Mirrors the shape of the content it replaces.
 * Animate with the built-in shimmer by default.
 *
 * @example
 * // Avatar skeleton
 * <Skeleton className="h-9 w-9 rounded-full" />
 *
 * // Text line skeletons
 * <div className="flex flex-col gap-2">
 *   <Skeleton className="h-4 w-48" />
 *   <Skeleton className="h-4 w-32" />
 * </div>
 *
 * // Card skeleton
 * <Skeleton className="h-32 w-full rounded-lg" />
 */
function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        'rounded-md',
        'bg-[linear-gradient(90deg,var(--muted)_25%,var(--muted-foreground)/15%_50%,var(--muted)_75%)]',
        'bg-[length:200%_100%]',
        'animate-[ds-shimmer_1.5s_ease-in-out_infinite]',
        className
      )}
      {...props}
    />
  )
}

export { Skeleton }
