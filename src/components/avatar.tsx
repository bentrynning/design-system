import * as React from 'react'
import * as AvatarPrimitive from '@radix-ui/react-avatar'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const avatarVariants = cva(
  'relative flex shrink-0 overflow-hidden rounded-full',
  {
    variants: {
      size: {
        xs: 'h-6 w-6 text-xs',
        sm: 'h-8 w-8 text-sm',
        md: 'h-9 w-9 text-sm',
        lg: 'h-11 w-11 text-base',
        xl: 'h-14 w-14 text-lg',
      },
    },
    defaultVariants: { size: 'md' },
  }
)

/**
 * User avatar with image + initials fallback.
 *
 * @example
 * <Avatar>
 *   <AvatarImage src={user.avatarUrl} alt={user.name} />
 *   <AvatarFallback>JD</AvatarFallback>
 * </Avatar>
 *
 * <Avatar size="lg">
 *   <AvatarFallback>AB</AvatarFallback>
 * </Avatar>
 */
const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> & VariantProps<typeof avatarVariants>
>(({ className, size, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(avatarVariants({ size }), className)}
    {...props}
  />
))
Avatar.displayName = AvatarPrimitive.Root.displayName

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn('aspect-square h-full w-full object-cover', className)}
    {...props}
  />
))
AvatarImage.displayName = AvatarPrimitive.Image.displayName

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      'flex h-full w-full items-center justify-center rounded-full',
      'bg-muted text-muted-foreground font-medium',
      className
    )}
    {...props}
  />
))
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

export { Avatar, AvatarImage, AvatarFallback }
