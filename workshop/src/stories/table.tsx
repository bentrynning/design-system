import {
  Table, TableHeader, TableBody, TableRow,
  TableHead, TableCell, TableCaption,
} from '@/components/table'
import { Badge } from '@/components/badge'
import { Button } from '@/components/button'
import { Avatar, AvatarFallback } from '@/components/avatar'
import {
  DropdownMenu, DropdownMenuTrigger, DropdownMenuContent,
  DropdownMenuItem, DropdownMenuSeparator,
} from '@/components/dropdown-menu'
import { Story, Variant } from '../components/story'
import type { StoryMeta } from '../components/story'
import { MoreHorizontal } from 'lucide-react'

export const meta: StoryMeta = {
  title: 'Table',
  category: 'Data Display',
  description:
    'Semantic data table. Headers use small-caps labels; rows support hover and selection states.',
}

const users = [
  { id: 1, name: 'Alice Chen',  email: 'alice@acme.com',  role: 'Admin',   status: 'Active',   joined: 'Jan 12, 2024' },
  { id: 2, name: 'Bob Kim',     email: 'bob@acme.com',    role: 'Editor',  status: 'Active',   joined: 'Mar 3, 2024'  },
  { id: 3, name: 'Jane Doe',    email: 'jane@acme.com',   role: 'Viewer',  status: 'Inactive', joined: 'Apr 20, 2024' },
  { id: 4, name: 'Mark Rivera', email: 'mark@acme.com',   role: 'Editor',  status: 'Pending',  joined: 'May 1, 2024'  },
]

const statusVariant = {
  Active:   'success',
  Inactive: 'secondary',
  Pending:  'warning',
} as const

export default function TableStory() {
  return (
    <Story meta={meta}>
      <Variant title="Basic table" padding="none">
        <Table>
          <TableCaption>A list of team members and their access levels.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Joined</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((u) => (
              <TableRow key={u.id}>
                <TableCell className="font-medium">{u.name}</TableCell>
                <TableCell className="text-muted-foreground">{u.email}</TableCell>
                <TableCell>{u.role}</TableCell>
                <TableCell>
                  <Badge variant={statusVariant[u.status as keyof typeof statusVariant]}>
                    {u.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-muted-foreground">{u.joined}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Variant>

      <Variant title="Table with row actions" padding="none">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>User</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((u) => (
              <TableRow key={u.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar size="sm">
                      <AvatarFallback>
                        {u.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium leading-none">{u.name}</p>
                      <p className="text-xs text-muted-foreground mt-1">{u.email}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>{u.role}</TableCell>
                <TableCell>
                  <Badge variant={statusVariant[u.status as keyof typeof statusVariant]}>
                    {u.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon-sm" aria-label="Row actions">
                        <MoreHorizontal />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-40">
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem>Change role</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-destructive focus:text-destructive">
                        Remove
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Variant>

      <Variant title="Empty state" padding="none">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell colSpan={3} className="h-24 text-center text-muted-foreground">
                No results found.
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Variant>
    </Story>
  )
}
