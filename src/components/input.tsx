import * as React from 'react'
import { cn } from '@/lib/utils'

/**
 * Text input. Forward-refs to the underlying `<input>`.
 *
 * Pass `data-invalid` or `aria-invalid` to apply the error ring styling.
 *
 * @example
 * <Input type="email" placeholder="you@example.com" />
 * <Input type="text" aria-invalid="true" />
 */
const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, type = 'text', ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        className={cn(
          'flex h-9 w-full rounded-md border border-input bg-card px-3 py-1',
          'text-sm text-foreground placeholder:text-muted-foreground',
          'shadow-xs transition-colors duration-150',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0',
          'file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground',
          'disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
          // Error state — set via aria-invalid or data-invalid
          'aria-[invalid=true]:border-destructive aria-[invalid=true]:ring-destructive/20',
          'data-[invalid=true]:border-destructive data-[invalid=true]:ring-destructive/20',
          className
        )}
        {...props}
      />
    )
  }
)
Input.displayName = 'Input'

export { Input }
