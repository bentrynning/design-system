import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/card'
import { Button } from '@/components/button'
import { Badge } from '@/components/badge'
import { Separator } from '@/components/separator'
import { Input } from '@/components/input'
import { Label } from '@/components/label'
import { Story, Variant } from '../components/story'
import type { StoryMeta } from '../components/story'

export const meta: StoryMeta = {
  title: 'Card',
  category: 'Layout',
  description:
    'Surface container for grouped content. Never nest cards inside cards.',
}

export default function CardStory() {
  return (
    <Story meta={meta}>
      <Variant title="Anatomy" vertical>
        <Card className="w-80">
          <CardHeader>
            <CardTitle>Card title</CardTitle>
            <CardDescription>Optional supporting description goes here.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Card body content area.</p>
          </CardContent>
          <CardFooter>
            <Button size="sm">Primary action</Button>
            <Button size="sm" variant="ghost">Cancel</Button>
          </CardFooter>
        </Card>
      </Variant>

      <Variant title="Stats card">
        <Card className="w-48">
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground">Total users</p>
            <p className="mt-1 text-2xl font-semibold tabular-nums">4,821</p>
            <p className="mt-1 text-xs text-muted-foreground">+12% from last month</p>
          </CardContent>
        </Card>
        <Card className="w-48">
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground">Published posts</p>
            <p className="mt-1 text-2xl font-semibold tabular-nums">137</p>
            <p className="mt-1 text-xs text-success">↑ 8 this week</p>
          </CardContent>
        </Card>
        <Card className="w-48">
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground">Errors (24h)</p>
            <p className="mt-1 text-2xl font-semibold tabular-nums">3</p>
            <p className="mt-1 text-xs text-destructive">↑ 2 since yesterday</p>
          </CardContent>
        </Card>
      </Variant>

      <Variant title="Settings form" vertical>
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Profile</CardTitle>
            <CardDescription>Update your display name and email address.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="ws-card-name" required>Display name</Label>
              <Input id="ws-card-name" defaultValue="Alice Chen" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="ws-card-email" required>Email</Label>
              <Input id="ws-card-email" type="email" defaultValue="alice@acme.com" />
            </div>
          </CardContent>
          <CardFooter>
            <Button size="sm">Save changes</Button>
            <Button size="sm" variant="ghost">Discard</Button>
          </CardFooter>
        </Card>
      </Variant>

      <Variant title="Team member list" vertical>
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Team members</CardTitle>
            <CardDescription>3 members in your workspace.</CardDescription>
          </CardHeader>
          <CardContent className="px-0">
            {[
              { name: 'Alice Chen', email: 'alice@acme.com', role: 'Admin', status: 'Active' },
              { name: 'Bob Kim', email: 'bob@acme.com', role: 'Editor', status: 'Active' },
              { name: 'Jane Doe', email: 'jane@acme.com', role: 'Viewer', status: 'Inactive' },
            ].map(({ name, email, role, status }, i, arr) => (
              <div key={email}>
                <div className="flex items-center justify-between px-6 py-3">
                  <div>
                    <p className="text-sm font-medium">{name}</p>
                    <p className="text-xs text-muted-foreground">{email}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground">{role}</span>
                    <Badge variant={status === 'Active' ? 'success' : 'secondary'}>{status}</Badge>
                  </div>
                </div>
                {i < arr.length - 1 && <Separator />}
              </div>
            ))}
          </CardContent>
          <CardFooter>
            <Button size="sm" variant="outline">Invite member</Button>
          </CardFooter>
        </Card>
      </Variant>
    </Story>
  )
}
