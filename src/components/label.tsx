import * as React from 'react'
import * as LabelPrimitive from '@radix-ui/react-label'
import { cn } from '@/lib/utils'

/**
 * Accessible label. Always pair with an input via `htmlFor`.
 *
 * @example
 * <Label htmlFor="email">Email address</Label>
 * <Input id="email" type="email" />
 */
const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> & {
    /** Appends a red asterisk to signal required fields. */
    required?: boolean
  }
>(({ className, required, children, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(
      'text-sm font-medium leading-none text-foreground',
      'peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
      className
    )}
    {...props}
  >
    {children}
    {required && (
      <span className="ml-1 text-destructive" aria-hidden="true">*</span>
    )}
  </LabelPrimitive.Root>
))
Label.displayName = LabelPrimitive.Root.displayName

export { Label }
