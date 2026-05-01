import * as React from 'react'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { cn } from '@/lib/utils'

/**
 * Tooltip — brief contextual hint on hover/focus.
 * Wrap your app (or the relevant section) with TooltipProvider once.
 *
 * @example
 * // Full API
 * <TooltipProvider>
 *   <Tooltip>
 *     <TooltipTrigger asChild>
 *       <Button variant="ghost" size="icon"><Settings /></Button>
 *     </TooltipTrigger>
 *     <TooltipContent>Settings</TooltipContent>
 *   </Tooltip>
 * </TooltipProvider>
 *
 * // Convenience wrapper
 * <SimpleTooltip content="Settings">
 *   <Button variant="ghost" size="icon"><Settings /></Button>
 * </SimpleTooltip>
 */

const TooltipProvider = TooltipPrimitive.Provider
const Tooltip         = TooltipPrimitive.Root
const TooltipTrigger  = TooltipPrimitive.Trigger

function TooltipContent({ ref, className, sideOffset = 6, ...props }: React.ComponentProps<typeof TooltipPrimitive.Content>) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        ref={ref}
        sideOffset={sideOffset}
        className={cn(
          'z-50 overflow-hidden rounded-md bg-foreground px-3 py-1.5',
          'text-xs font-medium text-background',
          'animate-[ds-zoom-in_0.1s_ease-out]',
          className
        )}
        {...props}
      />
    </TooltipPrimitive.Portal>
  )
}

/** One-liner tooltip: wraps a single child without boilerplate. */
function SimpleTooltip({
  children,
  content,
  side,
  delayDuration,
}: {
  children: React.ReactNode
  content: React.ReactNode
  side?: React.ComponentProps<typeof TooltipPrimitive.Content>['side']
  delayDuration?: number
}) {
  return (
    <Tooltip delayDuration={delayDuration ?? 400}>
      <TooltipTrigger asChild>{children}</TooltipTrigger>
      <TooltipContent side={side}>{content}</TooltipContent>
    </Tooltip>
  )
}

export { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent, SimpleTooltip }
