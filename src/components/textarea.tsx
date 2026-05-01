import * as React from 'react'
import { cn } from '@/lib/utils'

/**
 * Multi-line text input. Resizes vertically by default.
 *
 * @example
 * <Textarea placeholder="Add a note..." rows={4} />
 */
function Textarea({ ref, className, ...props }: React.ComponentProps<'textarea'>) {
  return (
    <textarea
      ref={ref}
      className={cn(
        'flex min-h-[80px] w-full rounded-md border border-input bg-card px-3 py-2',
        'text-sm text-foreground placeholder:text-muted-foreground',
        'shadow-xs transition-colors duration-150 resize-y',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0',
        'disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
        'aria-[invalid=true]:border-destructive',
        'data-[invalid=true]:border-destructive',
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
