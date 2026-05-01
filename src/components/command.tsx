import * as React from 'react'
import { Command as CommandPrimitive } from 'cmdk'
import { cn } from '@/lib/utils'

/**
 * Command palette — keyboard-first search + action launcher.
 * Typically opened via ⌘K and displayed inside a Dialog.
 *
 * @example
 * // Inside a Dialog (most common usage)
 * <Dialog open={open} onOpenChange={setOpen}>
 *   <DialogContent hideClose className="p-0 gap-0 overflow-hidden max-w-xl">
 *     <Command>
 *       <CommandInput placeholder="Search…" />
 *       <CommandList>
 *         <CommandEmpty>No results.</CommandEmpty>
 *         <CommandGroup heading="Pages">
 *           <CommandItem onSelect={() => navigate('/users')}>Users</CommandItem>
 *         </CommandGroup>
 *       </CommandList>
 *     </Command>
 *   </DialogContent>
 * </Dialog>
 */

function Command({ ref, className, ...props }: React.ComponentProps<typeof CommandPrimitive>) {
  return (
    <CommandPrimitive
      ref={ref}
      className={cn(
        'flex h-full w-full flex-col overflow-hidden rounded-lg bg-popover text-popover-foreground',
        className
      )}
      {...props}
    />
  )
}

function CommandInput({ ref, className, ...props }: React.ComponentProps<typeof CommandPrimitive.Input>) {
  return (
    <div className="flex items-center border-b border-border px-3" cmdk-input-wrapper="">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true">
        <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
      </svg>
      <CommandPrimitive.Input
        ref={ref}
        className={cn(
          'flex h-11 w-full bg-transparent py-3 text-sm',
          'placeholder:text-muted-foreground outline-none',
          'disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        {...props}
      />
    </div>
  )
}

function CommandList({ ref, className, ...props }: React.ComponentProps<typeof CommandPrimitive.List>) {
  return (
    <CommandPrimitive.List
      ref={ref}
      className={cn('max-h-[320px] overflow-y-auto overflow-x-hidden', className)}
      {...props}
    />
  )
}

function CommandEmpty({ ref, ...props }: React.ComponentProps<typeof CommandPrimitive.Empty>) {
  return (
    <CommandPrimitive.Empty
      ref={ref}
      className="py-8 text-center text-sm text-muted-foreground"
      {...props}
    />
  )
}

function CommandGroup({ ref, className, ...props }: React.ComponentProps<typeof CommandPrimitive.Group>) {
  return (
    <CommandPrimitive.Group
      ref={ref}
      className={cn(
        'overflow-hidden p-1 text-foreground',
        '[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5',
        '[&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-semibold',
        '[&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-wider',
        className
      )}
      {...props}
    />
  )
}

function CommandSeparator({ ref, className, ...props }: React.ComponentProps<typeof CommandPrimitive.Separator>) {
  return (
    <CommandPrimitive.Separator
      ref={ref}
      className={cn('-mx-1 h-px bg-border', className)}
      {...props}
    />
  )
}

function CommandItem({ ref, className, ...props }: React.ComponentProps<typeof CommandPrimitive.Item>) {
  return (
    <CommandPrimitive.Item
      ref={ref}
      className={cn(
        'relative flex cursor-default select-none items-center gap-2 rounded-md px-2 py-1.5',
        'text-sm outline-none transition-colors',
        'data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground',
        'data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50',
        '[&>svg]:h-4 [&>svg]:w-4 [&>svg]:shrink-0',
        className
      )}
      {...props}
    />
  )
}

function CommandShortcut({ className, ...props }: React.ComponentProps<'span'>) {
  return (
    <span
      className={cn('ml-auto text-xs tracking-widest text-muted-foreground', className)}
      {...props}
    />
  )
}

export {
  Command, CommandInput, CommandList, CommandEmpty,
  CommandGroup, CommandItem, CommandSeparator, CommandShortcut,
}
