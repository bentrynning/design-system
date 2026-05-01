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
        destructive:
          'border-transparent bg-destructive/15 text-destructive border-destructive/20',
        success:
          'border-transparent bg-success/15 text-success border-success/20',
        warning:
          'border-transparent bg-warning/15 text-warning-foreground border-warning/20',
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
