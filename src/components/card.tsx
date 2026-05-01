import * as React from 'react'
import { cn } from '@/lib/utils'

/**
 * Card — a bordered surface for grouping related content.
 * Compose with CardHeader, CardTitle, CardDescription, CardContent, CardFooter.
 *
 * @example
 * <Card>
 *   <CardHeader>
 *     <CardTitle>Workspace settings</CardTitle>
 *     <CardDescription>Manage your team's preferences.</CardDescription>
 *   </CardHeader>
 *   <CardContent>…</CardContent>
 *   <CardFooter>
 *     <Button>Save changes</Button>
 *   </CardFooter>
 * </Card>
 */

function Card({ ref, className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      ref={ref}
      className={cn('rounded-lg border border-border bg-card text-card-foreground shadow-xs', className)}
      {...props}
    />
  )
}

function CardHeader({ ref, className, ...props }: React.ComponentProps<'div'>) {
  return <div ref={ref} className={cn('flex flex-col gap-1.5 p-6', className)} {...props} />
}

function CardTitle({ ref, className, children, ...props }: React.ComponentProps<'h3'>) {
  return (
    <h3
      ref={ref}
      className={cn('text-base font-semibold leading-none tracking-tight', className)}
      {...props}
    >
      {children}
    </h3>
  )
}

function CardDescription({ ref, className, ...props }: React.ComponentProps<'p'>) {
  return (
    <p
      ref={ref}
      className={cn('text-sm text-muted-foreground leading-relaxed', className)}
      {...props}
    />
  )
}

function CardContent({ ref, className, ...props }: React.ComponentProps<'div'>) {
  return <div ref={ref} className={cn('px-6 pb-6 pt-0', className)} {...props} />
}

function CardFooter({ ref, className, ...props }: React.ComponentProps<'div'>) {
  return <div ref={ref} className={cn('flex items-center gap-2 px-6 pb-6 pt-0', className)} {...props} />
}

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter }
