import {
  AppShell, AppShellSidebar, AppShellMain,
  AppShellHeader, AppShellContent, AppShellSidebarTrigger,
} from '@/components/app-shell'
import {
  SidebarHeader, SidebarContent, SidebarFooter, SidebarNav,
} from '@/components/sidebar'
import {
  Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbPage,
} from '@/components/breadcrumb'
import { Separator } from '@/components/separator'
import { Button } from '@/components/button'
import { Badge } from '@/components/badge'
import { Avatar, AvatarFallback } from '@/components/avatar'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/card'
import { Story, Variant } from '../components/story'
import type { StoryMeta, } from '../components/story'
import type { NavSection } from '@/components/sidebar'
import {
  LayoutDashboard, Users, FileText, Image, Settings,
  BarChart3, Bell, Plus,
} from 'lucide-react'

export const meta: StoryMeta = {
  title: 'AppShell',
  category: 'Layout',
  description:
    'Full-page admin shell with a collapsible sidebar. Collapse state is persisted to localStorage.',
}

const nav: NavSection[] = [
  {
    items: [
      { key: 'dashboard', label: 'Dashboard', href: '#', icon: <LayoutDashboard className="h-4 w-4" />, active: true },
      { key: 'analytics', label: 'Analytics',  href: '#', icon: <BarChart3 className="h-4 w-4" /> },
      { key: 'users',     label: 'Users',       href: '#', icon: <Users className="h-4 w-4" />, badge: 3 },
    ],
  },
  {
    heading: 'Content',
    items: [
      { key: 'posts', label: 'Posts',  href: '#', icon: <FileText className="h-4 w-4" /> },
      { key: 'media', label: 'Media',  href: '#', icon: <Image className="h-4 w-4" /> },
    ],
  },
  {
    heading: 'System',
    items: [
      { key: 'settings', label: 'Settings', href: '#', icon: <Settings className="h-4 w-4" /> },
    ],
  },
]

function AppShellDemo() {
  return (
    <div className="rounded-xl border border-border overflow-hidden" style={{ height: 520 }}>
      <AppShell>
        <AppShellSidebar>
          <SidebarHeader>
            <div className="flex items-center gap-2.5">
              <div className="h-6 w-6 rounded bg-primary" />
              <span className="font-semibold text-sm tracking-tight text-sidebar-foreground">
                Acme Admin
              </span>
            </div>
          </SidebarHeader>

          <SidebarContent>
            <SidebarNav sections={nav} />
          </SidebarContent>

          <SidebarFooter>
            <div className="flex items-center gap-3 overflow-hidden">
              <Avatar size="sm">
                <AvatarFallback>AC</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium leading-none text-sidebar-foreground truncate">
                  Alice Chen
                </p>
                <p className="text-xs text-muted-foreground truncate mt-1">
                  alice@acme.com
                </p>
              </div>
            </div>
          </SidebarFooter>
        </AppShellSidebar>

        <AppShellMain>
          <AppShellHeader>
            <AppShellSidebarTrigger />
            <Separator orientation="vertical" className="h-4 mx-1" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbPage>Dashboard</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <div className="ml-auto flex items-center gap-2">
              <Button variant="ghost" size="icon-sm" aria-label="Notifications">
                <Bell />
              </Button>
              <Button size="sm">
                <Plus />
                New post
              </Button>
            </div>
          </AppShellHeader>

          <AppShellContent>
            <div className="space-y-6">
              <div>
                <h1 className="text-xl font-semibold tracking-tight">Dashboard</h1>
                <p className="text-sm text-muted-foreground mt-1">
                  Welcome back, Alice. Here's what's happening.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: 'Total users', value: '4,821', trend: '+12%' },
                  { label: 'Posts published', value: '137', trend: '↑ 8 this week' },
                  { label: 'Active sessions', value: '92', trend: 'Live' },
                ].map(({ label, value, trend }) => (
                  <Card key={label}>
                    <CardContent className="pt-5">
                      <p className="text-xs text-muted-foreground">{label}</p>
                      <p className="mt-1 text-xl font-semibold tabular-nums">{value}</p>
                      <p className="mt-0.5 text-xs text-muted-foreground">{trend}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Recent activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { label: 'New user registered', meta: 'alice@example.com', badge: 'success' as const, time: '2 min ago' },
                      { label: 'Post published', meta: 'Getting started with API', badge: 'success' as const, time: '14 min ago' },
                      { label: 'Build failed', meta: 'production/v2.1.4', badge: 'destructive' as const, time: '1 hr ago' },
                    ].map(({ label, meta, badge, time }) => (
                      <div key={label} className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium">{label}</p>
                          <p className="text-xs text-muted-foreground">{meta}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <Badge variant={badge}>
                            {badge === 'success' ? 'OK' : 'Error'}
                          </Badge>
                          <span className="text-xs text-muted-foreground">{time}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </AppShellContent>
        </AppShellMain>
      </AppShell>
    </div>
  )
}

export default function LayoutStory() {
  return (
    <Story meta={meta}>
      <Variant title="Full AppShell preview" padding="sm">
        <AppShellDemo />
      </Variant>
    </Story>
  )
}
