import * as React from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { cn } from '@/lib/utils'

/**
 * Modal dialog. Use for confirmations, forms, or detail views that
 * require the user's immediate attention before continuing.
 *
 * Exhaust inline / drawer alternatives before resorting to modals.
 *
 * @example
 * <Dialog>
 *   <DialogTrigger asChild>
 *     <Button variant="outline">Delete account</Button>
 *   </DialogTrigger>
 *   <DialogContent>
 *     <DialogHeader>
 *       <DialogTitle>Are you sure?</DialogTitle>
 *       <DialogDescription>This action cannot be undone.</DialogDescription>
 *     </DialogHeader>
 *     <DialogFooter>
 *       <DialogClose asChild><Button variant="outline">Cancel</Button></DialogClose>
 *       <Button variant="destructive">Delete</Button>
 *     </DialogFooter>
 *   </DialogContent>
 * </Dialog>
 */

const Dialog        = DialogPrimitive.Root
const DialogTrigger = DialogPrimitive.Trigger
const DialogPortal  = DialogPrimitive.Portal
const DialogClose   = DialogPrimitive.Close

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
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
))
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> & {
    /** Hides the default × close button. */
    hideClose?: boolean
  }
>(({ className, children, hideClose, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        'fixed left-1/2 top-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2',
        'rounded-xl border border-border bg-card p-6 shadow-2xl',
        'data-[state=open]:animate-[ds-zoom-in_0.2s_ease-out]',
        'data-[state=closed]:animate-[ds-zoom-out_0.15s_ease-out]',
        className
      )}
      {...props}
    >
      {children}
      {!hideClose && (
        <DialogPrimitive.Close className={cn(
          'absolute right-4 top-4 rounded-md p-1',
          'text-muted-foreground transition-colors hover:text-foreground',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'
        )}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
          <span className="sr-only">Close</span>
        </DialogPrimitive.Close>
      )}
    </DialogPrimitive.Content>
  </DialogPortal>
))
DialogContent.displayName = DialogPrimitive.Content.displayName

const DialogHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('flex flex-col gap-1.5 mb-4', className)} {...props} />
)
DialogHeader.displayName = 'DialogHeader'

const DialogFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('flex flex-col-reverse gap-2 mt-6 sm:flex-row sm:justify-end', className)} {...props} />
)
DialogFooter.displayName = 'DialogFooter'

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn('text-base font-semibold leading-none tracking-tight', className)}
    {...props}
  />
))
DialogTitle.displayName = DialogPrimitive.Title.displayName

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn('text-sm text-muted-foreground leading-relaxed', className)}
    {...props}
  />
))
DialogDescription.displayName = DialogPrimitive.Description.displayName

export {
  Dialog, DialogTrigger, DialogPortal, DialogOverlay, DialogClose,
  DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription,
}
