import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

/**
 * Badge / status pill.
 *
 * - `default`     Dark. Neutral tag, primary state.
 * - `secondary`   Subtle fill. Low-priority tags.
 * - `outline`     Bordered only. Minimal visual weight.
 * - `destructive` Red. Error state, danger labels.
 * - `success`     Green. Active, published, healthy.
 * - `warning`     Amber. Pending, degraded, attention needed.
 *
 * @example
 * <Badge>Published</Badge>
 * <Badge variant="success">Active</Badge>
 * <Badge variant="warning">Pending</Badge>
 */
const badgeVariants = cva(
  [
    'inline-flex items-center gap-1.5 px-2 py-0.5',
    'text-xs font-medium leading-none tracking-tight',
    'rounded-full border transition-colors duration-150',
    'select-none whitespace-nowrap',
  ],
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-primary text-primary-foreground',
        secondary:
          'border-transparent bg-secondary text-secondary-foreground',
        outline:
          'border-border bg-transparent text-foreground',
        // Tinted status badges: semantic color for text (NOT *-foreground).
        // bg at /10 + border at /30 matches the Alert tint pattern.
        destructive:
          'bg-destructive/10 text-destructive border-destructive/30',
        success:
          'bg-success/10 text-success border-success/30',
        warning:
          'bg-warning/10 text-warning border-warning/30',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
