import { Button } from '@/components/button'
import { Story, Variant } from '../components/story'
import type { StoryMeta } from '../components/story'
import { Download, Plus, Trash2, Settings } from 'lucide-react'

export const meta: StoryMeta = {
  title: 'Button',
  category: 'Primitives',
  description:
    'Primary interaction element. Use "default" for the single most-important action per page. Pair "outline" or "ghost" for secondary actions.',
}

export default function ButtonStory() {
  return (
    <Story meta={meta}>
      <Variant
        title="Variants"
        description={'All six variants. Use one “default” per page; reach for secondary/outline/ghost for everything else.'}
      >
        <Button>Default</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="link">Link</Button>
      </Variant>

      <Variant title="Sizes">
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
        <Button size="icon" aria-label="Settings"><Settings /></Button>
        <Button size="icon-sm" aria-label="Add"><Plus /></Button>
      </Variant>

      <Variant title="With icon">
        <Button><Plus /> New post</Button>
        <Button variant="outline"><Download /> Export</Button>
        <Button variant="destructive"><Trash2 /> Delete</Button>
      </Variant>

      <Variant title="States">
        <Button loading>Saving...</Button>
        <Button loading variant="outline">Processing</Button>
        <Button disabled>Disabled</Button>
        <Button disabled variant="outline">Disabled outline</Button>
      </Variant>

      <Variant title="As link (asChild)">
        <Button asChild>
          <a href="#">Go to dashboard</a>
        </Button>
        <Button asChild variant="outline">
          <a href="#">Documentation</a>
        </Button>
      </Variant>
    </Story>
  )
}
