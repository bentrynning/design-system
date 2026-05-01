import { Badge } from '@/components/badge'
import { Story, Variant } from '../components/story'
import type { StoryMeta } from '../components/story'

export const meta: StoryMeta = {
  title: 'Badge',
  category: 'Primitives',
  description:
    'Compact status label. Use semantic variants (success / warning / destructive) to convey state at a glance.',
}

export default function BadgeStory() {
  return (
    <Story meta={meta}>
      <Variant
        title="Variants"
        description="Map content state to the correct semantic variant."
      >
        <Badge>Default</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="outline">Outline</Badge>
        <Badge variant="success">Published</Badge>
        <Badge variant="warning">Pending</Badge>
        <Badge variant="destructive">Failed</Badge>
      </Variant>

      <Variant title="Common status labels">
        <Badge variant="success">Active</Badge>
        <Badge variant="success">Healthy</Badge>
        <Badge variant="secondary">Draft</Badge>
        <Badge variant="secondary">Inactive</Badge>
        <Badge variant="warning">Pending review</Badge>
        <Badge variant="warning">Degraded</Badge>
        <Badge variant="destructive">Error</Badge>
        <Badge variant="destructive">Blocked</Badge>
        <Badge variant="outline">Archived</Badge>
      </Variant>

      <Variant
        title="With dot indicator"
        description="Add a small circle before text for a minimal visual cue."
      >
        <Badge variant="success">
          <span className="h-1.5 w-1.5 rounded-full bg-current" />
          Online
        </Badge>
        <Badge variant="warning">
          <span className="h-1.5 w-1.5 rounded-full bg-current" />
          Away
        </Badge>
        <Badge variant="secondary">
          <span className="h-1.5 w-1.5 rounded-full bg-current" />
          Offline
        </Badge>
        <Badge variant="destructive">
          <span className="h-1.5 w-1.5 rounded-full bg-current" />
          Incident
        </Badge>
      </Variant>

      <Variant title="Inside other components">
        <div className="flex items-center gap-2 text-sm">
          <span>Users</span>
          <Badge variant="secondary">24</Badge>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <span>Pull requests</span>
          <Badge variant="warning">3</Badge>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <span>Build</span>
          <Badge variant="destructive">2 failed</Badge>
        </div>
      </Variant>
    </Story>
  )
}
