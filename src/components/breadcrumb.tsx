import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cn } from '@/lib/utils'

/**
 * Breadcrumb navigation. Compose BreadcrumbList > BreadcrumbItem > BreadcrumbLink | BreadcrumbPage.
 *
 * @example
 * <Breadcrumb>
 *   <BreadcrumbList>
 *     <BreadcrumbItem>
 *       <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
 *     </BreadcrumbItem>
 *     <BreadcrumbSeparator />
 *     <BreadcrumbItem>
 *       <BreadcrumbPage>Users</BreadcrumbPage>
 *     </BreadcrumbItem>
 *   </BreadcrumbList>
 * </Breadcrumb>
 */

function Breadcrumb({ ref, ...props }: React.ComponentProps<'nav'>) {
  return <nav ref={ref} aria-label="breadcrumb" {...props} />
}

function BreadcrumbList({ ref, className, ...props }: React.ComponentProps<'ol'>) {
  return (
    <ol
      ref={ref}
      className={cn('flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground', className)}
      {...props}
    />
  )
}

function BreadcrumbItem({ ref, className, ...props }: React.ComponentProps<'li'>) {
  return <li ref={ref} className={cn('inline-flex items-center gap-1.5', className)} {...props} />
}

function BreadcrumbLink({
  ref,
  asChild,
  className,
  ...props
}: React.ComponentProps<'a'> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : 'a'
  return (
    <Comp
      ref={ref}
      className={cn('transition-colors hover:text-foreground', className)}
      {...props}
    />
  )
}

/** Current page — not a link, aria-current="page". */
function BreadcrumbPage({ ref, className, ...props }: React.ComponentProps<'span'>) {
  return (
    <span
      ref={ref}
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={cn('font-medium text-foreground', className)}
      {...props}
    />
  )
}

function BreadcrumbSeparator({ children, className, ...props }: React.ComponentProps<'li'>) {
  return (
    <li
      role="presentation"
      aria-hidden="true"
      className={cn('text-muted-foreground [&>svg]:h-3.5 [&>svg]:w-3.5', className)}
      {...props}
    >
      {children ?? (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="m9 18 6-6-6-6" />
        </svg>
      )}
    </li>
  )
}

function BreadcrumbEllipsis({ className, ...props }: React.ComponentProps<'span'>) {
  return (
    <span
      role="presentation"
      aria-hidden="true"
      className={cn('flex h-9 w-9 items-center justify-center', className)}
      {...props}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
        <circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /><circle cx="5" cy="12" r="1" />
      </svg>
      <span className="sr-only">More pages</span>
    </span>
  )
}

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
}
