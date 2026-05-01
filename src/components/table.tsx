import * as React from 'react'
import { cn } from '@/lib/utils'

/**
 * Data table primitives.
 * Compose: Table > TableHeader > TableRow > TableHead
 *                > TableBody  > TableRow > TableCell
 *
 * @example
 * <Table>
 *   <TableHeader>
 *     <TableRow>
 *       <TableHead>Name</TableHead>
 *       <TableHead>Status</TableHead>
 *     </TableRow>
 *   </TableHeader>
 *   <TableBody>
 *     <TableRow>
 *       <TableCell>Acme Corp</TableCell>
 *       <TableCell><Badge variant="success">Active</Badge></TableCell>
 *     </TableRow>
 *   </TableBody>
 * </Table>
 */

function Table({ ref, className, ...props }: React.ComponentProps<'table'>) {
  return (
    <div className="relative w-full overflow-auto">
      <table
        ref={ref}
        className={cn('w-full caption-bottom text-sm', className)}
        {...props}
      />
    </div>
  )
}

function TableHeader({ ref, className, ...props }: React.ComponentProps<'thead'>) {
  return <thead ref={ref} className={cn('[&_tr]:border-b', className)} {...props} />
}

function TableBody({ ref, className, ...props }: React.ComponentProps<'tbody'>) {
  return <tbody ref={ref} className={cn('[&_tr:last-child]:border-0', className)} {...props} />
}

function TableFooter({ ref, className, ...props }: React.ComponentProps<'tfoot'>) {
  return (
    <tfoot
      ref={ref}
      className={cn('border-t bg-muted/50 font-medium [&>tr]:last:border-b-0', className)}
      {...props}
    />
  )
}

function TableRow({ ref, className, ...props }: React.ComponentProps<'tr'>) {
  return (
    <tr
      ref={ref}
      className={cn(
        'border-b border-border transition-colors',
        'hover:bg-muted/40',
        'data-[state=selected]:bg-accent',
        className
      )}
      {...props}
    />
  )
}

function TableHead({ ref, className, ...props }: React.ComponentProps<'th'>) {
  return (
    <th
      ref={ref}
      className={cn(
        'h-10 px-4 text-left align-middle',
        'text-xs font-medium text-muted-foreground tracking-wide uppercase',
        '[&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-px',
        className
      )}
      {...props}
    />
  )
}

function TableCell({ ref, className, ...props }: React.ComponentProps<'td'>) {
  return (
    <td
      ref={ref}
      className={cn(
        'px-4 py-3 align-middle text-sm',
        '[&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-px',
        className
      )}
      {...props}
    />
  )
}

function TableCaption({ ref, className, ...props }: React.ComponentProps<'caption'>) {
  return (
    <caption
      ref={ref}
      className={cn('mt-4 text-sm text-muted-foreground', className)}
      {...props}
    />
  )
}

export { Table, TableHeader, TableBody, TableFooter, TableRow, TableHead, TableCell, TableCaption }
