import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

/**
 * Button variants.
 *
 * - `default`     Dark fill. Primary action on a page — use once.
 * - `secondary`   Subtle fill. Paired actions, secondary CTAs.
 * - `outline`     Bordered, no fill. Tertiary actions, toolbars.
 * - `ghost`       No chrome. Inline actions, icon buttons.
 * - `destructive` Red fill. Irreversible actions (delete, revoke).
 * - `link`        Looks like a text link. Inline navigation.
 */
const buttonVariants = cva(
  [
    'inline-flex items-center justify-center gap-2 whitespace-nowrap',
    'font-medium text-sm leading-none tracking-tight',
    'rounded-md transition-all duration-150 ease-out',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
    'disabled:pointer-events-none disabled:opacity-40',
    'select-none cursor-pointer',
    // Icon sizing — controlled by the button so callers don't have to repeat it.
    '[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:size-4',
  ],
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/80',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80 active:bg-secondary/70 border border-border',
        outline:
          'border border-border bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground',
        ghost:
          'bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90 active:bg-destructive/80',
        link:
          'text-foreground underline-offset-4 hover:underline p-0 h-auto',
      },
      size: {
        sm:        'h-8 px-3 text-xs rounded [&_svg]:size-3.5',
        md:        'h-9 px-4',
        lg:        'h-10 px-6 text-base',
        icon:      'h-9 w-9 p-0',
        'icon-sm': 'h-7 w-7 p-0 text-xs rounded [&_svg]:size-3.5',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
)

export interface ButtonProps
  extends React.ComponentProps<'button'>,
    VariantProps<typeof buttonVariants> {
  /**
   * Renders the button as its child element.
   * Useful for link-buttons: `<Button asChild><a href="/...">Go</a></Button>`
   */
  asChild?: boolean
  /** Shows a loading spinner and disables interaction. */
  loading?: boolean
}

function Button({
  ref,
  className,
  variant,
  size,
  asChild = false,
  loading = false,
  disabled,
  children,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : 'button'
  return (
    <Comp
      ref={ref}
      className={cn(buttonVariants({ variant, size }), className)}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      {...props}
    >
      {loading ? (
        <>
          <svg
            className="h-4 w-4 animate-[ds-spin_0.8s_linear_infinite]"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
          {children}
        </>
      ) : (
        children
      )}
    </Comp>
  )
}

export { Button, buttonVariants }
