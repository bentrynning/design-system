import * as React from 'react'
import * as SelectPrimitive from '@radix-ui/react-select'
import { cn } from '@/lib/utils'

/**
 * Accessible select / dropdown.
 *
 * @example
 * <Select defaultValue="published">
 *   <SelectTrigger className="w-40">
 *     <SelectValue placeholder="Pick status…" />
 *   </SelectTrigger>
 *   <SelectContent>
 *     <SelectItem value="published">Published</SelectItem>
 *     <SelectItem value="draft">Draft</SelectItem>
 *     <SelectItem value="archived">Archived</SelectItem>
 *   </SelectContent>
 * </Select>
 *
 * // With groups
 * <SelectContent>
 *   <SelectGroup>
 *     <SelectLabel>Roles</SelectLabel>
 *     <SelectItem value="admin">Admin</SelectItem>
 *     <SelectItem value="editor">Editor</SelectItem>
 *   </SelectGroup>
 * </SelectContent>
 */

const Select        = SelectPrimitive.Root
const SelectGroup   = SelectPrimitive.Group
const SelectValue   = SelectPrimitive.Value

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      'flex h-9 w-full items-center justify-between gap-2 rounded-md border border-input bg-card px-3 py-1',
      'text-sm text-foreground placeholder:text-muted-foreground',
      'shadow-xs transition-colors duration-150 cursor-pointer',
      'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-0',
      'disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
      'data-[placeholder]:text-muted-foreground',
      '[&>span]:line-clamp-1',
      className
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true">
        <path d="m7 15 5 5 5-5" /><path d="m7 9 5-5 5 5" />
      </svg>
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
))
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton ref={ref} className={cn('flex items-center justify-center py-1', className)} {...props}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true"><path d="m18 15-6-6-6 6" /></svg>
  </SelectPrimitive.ScrollUpButton>
))
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton ref={ref} className={cn('flex items-center justify-center py-1', className)} {...props}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg>
  </SelectPrimitive.ScrollDownButton>
))
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = 'popper', ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      position={position}
      className={cn(
        'relative z-50 min-w-[8rem] overflow-hidden',
        'rounded-lg border border-border bg-popover text-popover-foreground shadow-lg',
        'data-[state=open]:animate-[ds-zoom-in_0.15s_ease-out]',
        'data-[state=closed]:animate-[ds-zoom-out_0.1s_ease-out]',
        position === 'popper' && [
          'w-[var(--radix-select-trigger-width)]',
          'data-[side=bottom]:translate-y-1 data-[side=top]:-translate-y-1',
        ],
        className
      )}
      {...props}
    >
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport
        className={cn(
          'p-1',
          position === 'popper' && 'h-[var(--radix-select-content-available-height)]'
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
      <SelectScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
))
SelectContent.displayName = SelectPrimitive.Content.displayName

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn('px-2 py-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider', className)}
    {...props}
  />
))
SelectLabel.displayName = SelectPrimitive.Label.displayName

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      'relative flex w-full cursor-default select-none items-center gap-2 rounded-md py-1.5 pl-2 pr-8',
      'text-sm text-foreground outline-none transition-colors',
      'focus:bg-accent focus:text-accent-foreground',
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      className
    )}
    {...props}
  >
    <span className="absolute right-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5" aria-hidden="true">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </SelectPrimitive.ItemIndicator>
    </span>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
))
SelectItem.displayName = SelectPrimitive.Item.displayName

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator ref={ref} className={cn('-mx-1 my-1 h-px bg-border', className)} {...props} />
))
SelectSeparator.displayName = SelectPrimitive.Separator.displayName

export {
  Select, SelectGroup, SelectValue,
  SelectTrigger, SelectContent, SelectLabel, SelectItem, SelectSeparator,
  SelectScrollUpButton, SelectScrollDownButton,
}
