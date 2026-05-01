import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

/**
 * Alert / callout for inline feedback messages.
 *
 * - `default`     Neutral info.
 * - `destructive` Error, failure.
 * - `success`     Confirmation, completion.
 * - `warning`     Caution, non-blocking issue.
 *
 * @example
 * <Alert variant="destructive">
 *   <AlertTitle>Upload failed</AlertTitle>
 *   <AlertDescription>
 *     The file exceeds the 10 MB limit. Choose a smaller file and try again.
 *   </AlertDescription>
 * </Alert>
 */

const alertVariants = cva(
  [
    'relative w-full rounded-lg border px-4 py-3.5',
    'text-sm leading-relaxed',
    '[&>svg]:absolute [&>svg]:left-4 [&>svg]:top-3.5',
    '[&>svg]:h-4 [&>svg]:w-4 [&>svg]:shrink-0',
    '[&:has(svg)]:pl-11',
  ],
  {
    variants: {
      variant: {
        // Neutral — card surface, foreground text
        default:
          'border-border bg-card text-foreground [&>svg]:text-muted-foreground',
        // Tinted status variants — shadcn principle: use the semantic color directly
        // for text on tinted surfaces. The *-foreground tokens are for solid fills only.
        destructive:
          'border-destructive/50 bg-destructive/10 text-destructive [&>svg]:text-destructive',
        success:
          'border-success/50 bg-success/10 text-success [&>svg]:text-success',
        warning:
          'border-warning/50 bg-warning/10 text-warning [&>svg]:text-warning',
      },
    },
    defaultVariants: { variant: 'default' },
  }
)

function Alert({
  ref,
  className,
  variant,
  ...props
}: React.ComponentProps<'div'> & VariantProps<typeof alertVariants>) {
  return (
    <div
      ref={ref}
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  )
}

function AlertTitle({ ref, className, ...props }: React.ComponentProps<'h5'>) {
  return (
    <h5
      ref={ref}
      className={cn('mb-1 font-medium leading-none tracking-tight', className)}
      {...props}
    />
  )
}

function AlertDescription({ ref, className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      ref={ref}
      className={cn('text-sm leading-relaxed opacity-85 [&_p]:leading-relaxed', className)}
      {...props}
    />
  )
}

export { Alert, AlertTitle, AlertDescription }
