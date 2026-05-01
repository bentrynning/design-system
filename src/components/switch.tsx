import * as React from 'react'
import * as SwitchPrimitive from '@radix-ui/react-switch'
import { cn } from '@/lib/utils'

/**
 * Toggle switch for binary settings. Always pair with a Label.
 *
 * @example
 * <div className="flex items-center gap-3">
 *   <Switch id="notifications" defaultChecked />
 *   <Label htmlFor="notifications">Email notifications</Label>
 * </div>
 */
const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitive.Root
    ref={ref}
    className={cn(
      'peer inline-flex h-5 w-9 shrink-0 items-center rounded-full border-2 border-transparent',
      'bg-input transition-colors duration-200 ease-out cursor-pointer',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
      'disabled:pointer-events-none disabled:opacity-50',
      'data-[state=checked]:bg-primary',
      className
    )}
    {...props}
  >
    <SwitchPrimitive.Thumb
      className={cn(
        'pointer-events-none block h-4 w-4 rounded-full bg-white shadow-xs',
        'transition-transform duration-200 ease-out',
        'data-[state=unchecked]:translate-x-0',
        'data-[state=checked]:translate-x-4'
      )}
    />
  </SwitchPrimitive.Root>
))
Switch.displayName = SwitchPrimitive.Root.displayName

export { Switch }
