import * as React from 'react'
import {
  Dialog, DialogTrigger, DialogContent, DialogHeader, DialogFooter,
  DialogTitle, DialogDescription, DialogClose,
} from '@/components/dialog'
import {
  Sheet, SheetTrigger, SheetContent, SheetHeader,
  SheetTitle, SheetDescription, SheetFooter, SheetClose,
} from '@/components/sheet'
import {
  DropdownMenu, DropdownMenuTrigger, DropdownMenuContent,
  DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator,
  DropdownMenuShortcut, DropdownMenuGroup, DropdownMenuSub,
  DropdownMenuSubTrigger, DropdownMenuSubContent,
} from '@/components/dropdown-menu'
import {
  Command, CommandInput, CommandList, CommandEmpty,
  CommandGroup, CommandItem, CommandSeparator, CommandShortcut,
} from '@/components/command'
import { Button } from '@/components/button'
import { Input } from '@/components/input'
import { Label } from '@/components/label'
import { Story, Variant } from '../components/story'
import type { StoryMeta } from '../components/story'
import { MoreHorizontal, Settings, Users, FileText, LogOut, Search } from 'lucide-react'

export const meta: StoryMeta = {
  title: 'Dialog / Sheet / Dropdown / Command',
  category: 'Overlays',
  description: 'Modal dialogs, slide-in panels, contextual menus, and the command palette.',
}

function ConfirmDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive" size="sm">Delete record</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete this record?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. All associated data will be permanently removed from our servers.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button variant="destructive">Delete</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

function FormDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm">Invite member</Button>
      </DialogTrigger>
      <DialogContent className="max-w-sm">
        <DialogHeader>
          <DialogTitle>Invite a team member</DialogTitle>
          <DialogDescription>
            They'll receive an email with a link to join your workspace.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-2">
          <div className="space-y-1.5">
            <Label htmlFor="ws-invite-email" required>Email address</Label>
            <Input id="ws-invite-email" type="email" placeholder="colleague@company.com" />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="ws-invite-role">Role</Label>
            <Input id="ws-invite-role" placeholder="Editor" />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button>Send invite</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

function FilterSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="sm">Open filters</Button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>Filters</SheetTitle>
          <SheetDescription>Narrow results by status, date, and assignee.</SheetDescription>
        </SheetHeader>
        <div className="px-6 py-4 space-y-4">
          <div className="space-y-1.5">
            <Label htmlFor="ws-filter-status">Status</Label>
            <Input id="ws-filter-status" placeholder="All statuses" />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="ws-filter-date">Date range</Label>
            <Input id="ws-filter-date" type="date" />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="ws-filter-user">Assignee</Label>
            <Input id="ws-filter-user" placeholder="Search users…" />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="outline">Reset</Button>
          </SheetClose>
          <Button>Apply filters</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

function ContextDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" aria-label="Open menu">
          <MoreHorizontal />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-52">
        <DropdownMenuLabel>Record actions</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            Edit
            <DropdownMenuShortcut>⌘E</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Duplicate
            <DropdownMenuShortcut>⌘D</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Share</DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuItem>Copy link</DropdownMenuItem>
              <DropdownMenuItem>Publish publicly</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-destructive focus:text-destructive">
          Delete
          <DropdownMenuShortcut>⌫</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

function CommandPalette() {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setOpen(v => !v)
      }
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [])

  return (
    <>
      <Button variant="outline" size="sm" onClick={() => setOpen(true)}>
        <Search />
        Open command palette
        <kbd className="ml-auto pointer-events-none text-xs text-muted-foreground bg-muted px-1.5 py-0.5 rounded border border-border">
          ⌘K
        </kbd>
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="p-0 overflow-hidden max-w-xl" hideClose>
          <Command>
            <CommandInput placeholder="Search pages, actions…" />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Navigation">
                <CommandItem onSelect={() => setOpen(false)}>
                  Dashboard
                  <CommandShortcut>⌘D</CommandShortcut>
                </CommandItem>
                <CommandItem onSelect={() => setOpen(false)}>
                  <Users className="h-4 w-4" />
                  Users
                </CommandItem>
                <CommandItem onSelect={() => setOpen(false)}>
                  <FileText className="h-4 w-4" />
                  Posts
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Actions">
                <CommandItem onSelect={() => setOpen(false)}>
                  New post
                  <CommandShortcut>⌘N</CommandShortcut>
                </CommandItem>
                <CommandItem onSelect={() => setOpen(false)}>
                  <Settings className="h-4 w-4" />
                  Settings
                  <CommandShortcut>⌘,</CommandShortcut>
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Account">
                <CommandItem onSelect={() => setOpen(false)}>
                  <LogOut className="h-4 w-4" />
                  Sign out
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default function OverlaysStory() {
  return (
    <Story meta={meta}>
      <Variant title="Dialog — confirmation">
        <ConfirmDialog />
      </Variant>

      <Variant title="Dialog — form">
        <FormDialog />
      </Variant>

      <Variant title="Sheet — slide-in panel">
        {(['right', 'left', 'bottom'] as const).map((side) => (
          <Sheet key={side}>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm" className="capitalize">{side}</Button>
            </SheetTrigger>
            <SheetContent side={side}>
              <SheetHeader>
                <SheetTitle>Panel ({side})</SheetTitle>
                <SheetDescription>
                  This panel slides in from the {side} side.
                </SheetDescription>
              </SheetHeader>
              <div className="px-6 py-4">
                <p className="text-sm text-muted-foreground">Panel content goes here.</p>
              </div>
              <SheetFooter>
                <SheetClose asChild>
                  <Button variant="outline">Close</Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        ))}
        <FilterSheet />
      </Variant>

      <Variant title="Dropdown menu">
        <ContextDropdown />
      </Variant>

      <Variant title="Command palette (⌘K)">
        <CommandPalette />
      </Variant>
    </Story>
  )
}
