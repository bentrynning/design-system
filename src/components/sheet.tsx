import * as React from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

/**
 * Sheet — a panel that slides in from any edge of the viewport.
 * Use for detail drawers, filter panels, mobile navigation.
 *
 * @example
 * <Sheet>
 *   <SheetTrigger asChild>
 *     <Button variant="outline">Open filters</Button>
 *   </SheetTrigger>
 *   <SheetContent side="right">
 *     <SheetHeader>
 *       <SheetTitle>Filters</SheetTitle>
 *       <SheetDescription>Narrow the results below.</SheetDescription>
 *     </SheetHeader>
 *     {filterContent}
 *   </SheetContent>
 * </Sheet>
 */

const Sheet        = DialogPrimitive.Root
const SheetTrigger = DialogPrimitive.Trigger
const SheetClose   = DialogPrimitive.Close
const SheetPortal  = DialogPrimitive.Portal

function SheetOverlay({ ref, className, ...props }: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
  return (
    <DialogPrimitive.Overlay
      ref={ref}
      className={cn(
        'fixed inset-0 z-50 bg-black/40 backdrop-blur-xs',
        'data-[state=open]:animate-[ds-fade-in_0.2s_ease-out]',
        'data-[state=closed]:animate-[ds-fade-out_0.15s_ease-out]',
        className
      )}
      {...props}
    />
  )
}

const sheetVariants = cva(
  [
    'fixed z-50 flex flex-col bg-card shadow-2xl',
    'transition ease-out',
    'data-[state=open]:duration-300 data-[state=closed]:duration-200',
  ],
  {
    variants: {
      side: {
        right: [
          'inset-y-0 right-0 h-full w-3/4 border-l border-border sm:max-w-sm',
          'data-[state=open]:animate-[ds-slide-in-from-right_0.3s_ease-out]',
          'data-[state=closed]:animate-[ds-slide-out-to-right_0.2s_ease-out]',
        ],
        left: [
          'inset-y-0 left-0 h-full w-3/4 border-r border-border sm:max-w-sm',
          'data-[state=open]:animate-[ds-slide-in-from-left_0.3s_ease-out]',
          'data-[state=closed]:animate-[ds-slide-out-to-left_0.2s_ease-out]',
        ],
        top: [
          'inset-x-0 top-0 h-auto border-b border-border',
          'data-[state=open]:animate-[ds-slide-in-from-top_0.3s_ease-out]',
          'data-[state=closed]:animate-[ds-slide-out-to-top_0.2s_ease-out]',
        ],
        bottom: [
          'inset-x-0 bottom-0 h-auto border-t border-border',
          'data-[state=open]:animate-[ds-slide-in-from-bottom_0.3s_ease-out]',
          'data-[state=closed]:animate-[ds-slide-out-to-bottom_0.2s_ease-out]',
        ],
      },
    },
    defaultVariants: { side: 'right' },
  }
)

function SheetContent({
  ref,
  side = 'right',
  className,
  children,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content> & VariantProps<typeof sheetVariants>) {
  return (
    <SheetPortal>
      <SheetOverlay />
      <DialogPrimitive.Content
        ref={ref}
        className={cn(sheetVariants({ side }), className)}
        {...props}
      >
        <DialogPrimitive.Close className={cn(
          'absolute right-4 top-4 z-10 rounded-md p-1',
          'text-muted-foreground transition-colors hover:text-foreground',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'
        )}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
          <span className="sr-only">Close</span>
        </DialogPrimitive.Close>
        {children}
      </DialogPrimitive.Content>
    </SheetPortal>
  )
}

function SheetHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return <div className={cn('flex flex-col gap-1.5 p-6 pb-4', className)} {...props} />
}

function SheetFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return <div className={cn('mt-auto flex flex-col-reverse gap-2 p-6 pt-4 sm:flex-row sm:justify-end', className)} {...props} />
}

function SheetTitle({ ref, className, ...props }: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      ref={ref}
      className={cn('text-base font-semibold leading-none', className)}
      {...props}
    />
  )
}

function SheetDescription({ ref, className, ...props }: React.ComponentProps<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description
      ref={ref}
      className={cn('text-sm text-muted-foreground', className)}
      {...props}
    />
  )
}

export {
  Sheet, SheetTrigger, SheetClose, SheetPortal, SheetOverlay,
  SheetContent, SheetHeader, SheetFooter, SheetTitle, SheetDescription,
}
