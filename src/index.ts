// ─── Utilities ────────────────────────────────────────────────────────────────
export { cn } from './lib/utils'

// ─── Primitives ───────────────────────────────────────────────────────────────
export { Alert, AlertTitle, AlertDescription }           from './components/alert'
export { Avatar, AvatarImage, AvatarFallback }           from './components/avatar'
export { Badge, badgeVariants }                          from './components/badge'
export {
  Breadcrumb, BreadcrumbList, BreadcrumbItem,
  BreadcrumbLink, BreadcrumbPage,
  BreadcrumbSeparator, BreadcrumbEllipsis,
}                                                        from './components/breadcrumb'
export { Button, buttonVariants }                        from './components/button'
export {
  Card, CardHeader, CardTitle,
  CardDescription, CardContent, CardFooter,
}                                                        from './components/card'
export { Checkbox }                                      from './components/checkbox'
export {
  Command, CommandInput, CommandList, CommandEmpty,
  CommandGroup, CommandItem, CommandSeparator, CommandShortcut,
}                                                        from './components/command'
export {
  Dialog, DialogTrigger, DialogPortal, DialogOverlay, DialogClose,
  DialogContent, DialogHeader, DialogFooter,
  DialogTitle, DialogDescription,
}                                                        from './components/dialog'
export {
  DropdownMenu, DropdownMenuTrigger, DropdownMenuContent,
  DropdownMenuItem, DropdownMenuCheckboxItem, DropdownMenuRadioItem,
  DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut,
  DropdownMenuGroup, DropdownMenuPortal, DropdownMenuSub,
  DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuRadioGroup,
}                                                        from './components/dropdown-menu'
export { Input }                                         from './components/input'
export { Label }                                         from './components/label'
export { Progress }                                      from './components/progress'
export { ScrollArea, ScrollBar }                         from './components/scroll-area'
export {
  Select, SelectGroup, SelectValue, SelectTrigger,
  SelectContent, SelectLabel, SelectItem, SelectSeparator,
  SelectScrollUpButton, SelectScrollDownButton,
}                                                        from './components/select'
export { Separator }                                     from './components/separator'
export {
  Sheet, SheetTrigger, SheetClose, SheetPortal, SheetOverlay,
  SheetContent, SheetHeader, SheetFooter, SheetTitle, SheetDescription,
}                                                        from './components/sheet'
export { Skeleton }                                      from './components/skeleton'
export { Switch }                                        from './components/switch'
export {
  Table, TableHeader, TableBody, TableFooter,
  TableRow, TableHead, TableCell, TableCaption,
}                                                        from './components/table'
export { Textarea }                                      from './components/textarea'
export {
  TooltipProvider, Tooltip, TooltipTrigger, TooltipContent, SimpleTooltip,
}                                                        from './components/tooltip'

// ─── Layout ───────────────────────────────────────────────────────────────────
export {
  SidebarProvider, useSidebar,
  Sidebar, SidebarHeader, SidebarContent, SidebarFooter,
  SidebarNavSection, SidebarNavItem, SidebarTrigger,
  SidebarNav,
}                                                        from './components/sidebar'
export {
  AppShell, AppShellSidebar, AppShellMain,
  AppShellHeader, AppShellContent, AppShellSidebarTrigger,
}                                                        from './components/app-shell'

// ─── Types ────────────────────────────────────────────────────────────────────
export type { NavItem, NavSection, SidebarNavProps, SidebarProviderProps } from './components/sidebar'
export type { ButtonProps }    from './components/button'
export type { BadgeProps }     from './components/badge'
export type { AppShellProps }  from './components/app-shell'
