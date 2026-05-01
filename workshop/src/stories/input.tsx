import { Input } from '@/components/input'
import { Label } from '@/components/label'
import { Textarea } from '@/components/textarea'
import { Story, Variant } from '../components/story'
import type { StoryMeta } from '../components/story'

export const meta: StoryMeta = {
  title: 'Input / Label / Textarea',
  category: 'Forms',
  description:
    'Text entry primitives. Labels always sit above inputs, never floating.',
}

export default function InputStory() {
  return (
    <Story meta={meta}>
      <Variant title="Input — types" vertical>
        <div className="w-80 space-y-1.5">
          <Label htmlFor="ws-text">Text</Label>
          <Input id="ws-text" type="text" placeholder="e.g. Acme Corp" />
        </div>
        <div className="w-80 space-y-1.5">
          <Label htmlFor="ws-email">Email</Label>
          <Input id="ws-email" type="email" placeholder="you@example.com" />
        </div>
        <div className="w-80 space-y-1.5">
          <Label htmlFor="ws-password">Password</Label>
          <Input id="ws-password" type="password" placeholder="••••••••" />
        </div>
        <div className="w-80 space-y-1.5">
          <Label htmlFor="ws-search">Search</Label>
          <Input id="ws-search" type="search" placeholder="Search…" />
        </div>
        <div className="w-80 space-y-1.5">
          <Label htmlFor="ws-number">Number</Label>
          <Input id="ws-number" type="number" placeholder="0" />
        </div>
      </Variant>

      <Variant title="Input — states" vertical>
        <div className="w-80 space-y-1.5">
          <Label htmlFor="ws-default">Default</Label>
          <Input id="ws-default" placeholder="Idle state" />
        </div>
        <div className="w-80 space-y-1.5">
          <Label htmlFor="ws-filled">Filled</Label>
          <Input id="ws-filled" defaultValue="Alice Chen" />
        </div>
        <div className="w-80 space-y-1.5">
          <Label htmlFor="ws-disabled">Disabled</Label>
          <Input id="ws-disabled" disabled defaultValue="Cannot edit" />
        </div>
        <div className="w-80 space-y-1.5">
          <Label htmlFor="ws-error">Error</Label>
          <Input
            id="ws-error"
            aria-invalid="true"
            defaultValue="invalid@"
            aria-describedby="ws-error-hint"
          />
          <p id="ws-error-hint" className="text-xs text-destructive">
            Please enter a valid email address.
          </p>
        </div>
        <div className="w-80 space-y-1.5">
          <Label htmlFor="ws-readonly">Read-only</Label>
          <Input id="ws-readonly" readOnly defaultValue="Read-only value" />
        </div>
      </Variant>

      <Variant title="Label — variants" vertical>
        <Label>Plain label</Label>
        <Label required>Required field</Label>
        <Label className="text-muted-foreground">Muted / optional</Label>
      </Variant>

      <Variant title="Textarea" vertical>
        <div className="w-80 space-y-1.5">
          <Label htmlFor="ws-ta-default">Notes</Label>
          <Textarea id="ws-ta-default" placeholder="Add a note…" rows={3} />
        </div>
        <div className="w-80 space-y-1.5">
          <Label htmlFor="ws-ta-filled">Filled</Label>
          <Textarea
            id="ws-ta-filled"
            defaultValue="This is some example content that spans multiple lines to show how the component handles longer text."
            rows={4}
          />
        </div>
        <div className="w-80 space-y-1.5">
          <Label htmlFor="ws-ta-disabled">Disabled</Label>
          <Textarea id="ws-ta-disabled" disabled placeholder="Disabled textarea" rows={2} />
        </div>
        <div className="w-80 space-y-1.5">
          <Label htmlFor="ws-ta-error">Error</Label>
          <Textarea
            id="ws-ta-error"
            aria-invalid="true"
            placeholder="This field is required"
            rows={2}
          />
        </div>
      </Variant>

      <Variant title="Form field composition" vertical>
        <div className="w-80 space-y-4">
          <div className="space-y-1.5">
            <Label htmlFor="ws-name" required>Full name</Label>
            <Input id="ws-name" placeholder="Alice Chen" />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="ws-bio">Bio</Label>
            <Textarea id="ws-bio" placeholder="Tell us about yourself…" rows={3} />
          </div>
        </div>
      </Variant>
    </Story>
  )
}
