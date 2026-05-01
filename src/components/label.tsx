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
function Label({
  ref,
  className,
  required,
  children,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root> & { required?: boolean }) {
  return (
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
  )
}

export { Label }
