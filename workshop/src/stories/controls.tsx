import * as React from 'react'
import { Checkbox } from '@/components/checkbox'
import { Switch } from '@/components/switch'
import { Label } from '@/components/label'
import {
  Select, SelectTrigger, SelectValue, SelectContent,
  SelectItem, SelectSeparator, SelectGroup, SelectLabel,
} from '@/components/select'
import { Story, Variant } from '../components/story'
import type { StoryMeta } from '../components/story'

export const meta: StoryMeta = {
  title: 'Checkbox / Switch / Select',
  category: 'Forms',
  description: 'Boolean controls and option pickers.',
}

export default function ControlsStory() {
  const [checked1, setChecked1] = React.useState(false)
  const [checked2, setChecked2] = React.useState(true)
  const [indeterminate, setIndeterminate] = React.useState<boolean | 'indeterminate'>('indeterminate')
  const [switchOn, setSwitchOn] = React.useState(false)
  const [switchNotif, setSwitchNotif] = React.useState(true)

  return (
    <Story meta={meta}>
      <Variant title="Checkbox — states" vertical>
        <div className="flex items-center gap-2">
          <Checkbox id="ws-cb-unchecked" checked={checked1} onCheckedChange={(v) => setChecked1(!!v)} />
          <Label htmlFor="ws-cb-unchecked">Unchecked (click to toggle)</Label>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="ws-cb-checked" checked={checked2} onCheckedChange={(v) => setChecked2(!!v)} />
          <Label htmlFor="ws-cb-checked">Checked (click to toggle)</Label>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox
            id="ws-cb-indeterminate"
            checked={indeterminate}
            onCheckedChange={(v) => setIndeterminate(v === 'indeterminate' ? false : v)}
          />
          <Label htmlFor="ws-cb-indeterminate">Indeterminate (select-all pattern)</Label>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="ws-cb-disabled" disabled />
          <Label htmlFor="ws-cb-disabled" className="text-muted-foreground">Disabled unchecked</Label>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="ws-cb-disabled-checked" disabled checked />
          <Label htmlFor="ws-cb-disabled-checked" className="text-muted-foreground">Disabled checked</Label>
        </div>
      </Variant>

      <Variant title="Checkbox — checklist" vertical>
        {[
          { id: 'task-1', label: 'Configure domain' },
          { id: 'task-2', label: 'Set up SSL certificate', defaultChecked: true },
          { id: 'task-3', label: 'Deploy to production', defaultChecked: true },
          { id: 'task-4', label: 'Enable monitoring' },
        ].map(({ id, label, defaultChecked }) => (
          <div key={id} className="flex items-center gap-2">
            <Checkbox id={id} defaultChecked={defaultChecked} />
            <Label htmlFor={id}>{label}</Label>
          </div>
        ))}
      </Variant>

      <Variant title="Switch — states" vertical>
        <div className="flex items-center gap-3">
          <Switch id="ws-sw-1" checked={switchOn} onCheckedChange={setSwitchOn} />
          <Label htmlFor="ws-sw-1">{switchOn ? 'Enabled' : 'Disabled'} (click to toggle)</Label>
        </div>
        <div className="flex items-center gap-3">
          <Switch id="ws-sw-2" disabled />
          <Label htmlFor="ws-sw-2" className="text-muted-foreground">Disabled off</Label>
        </div>
        <div className="flex items-center gap-3">
          <Switch id="ws-sw-3" disabled checked />
          <Label htmlFor="ws-sw-3" className="text-muted-foreground">Disabled on</Label>
        </div>
      </Variant>

      <Variant title="Switch — settings panel" vertical>
        {[
          { id: 'sw-notif', label: 'Email notifications', desc: 'Receive product updates and announcements.', checked: switchNotif, onChange: setSwitchNotif },
          { id: 'sw-2fa', label: 'Two-factor authentication', desc: 'Add an extra layer of security to your account.' },
          { id: 'sw-api', label: 'Public API access', desc: 'Allow external apps to access your data via API.' },
        ].map(({ id, label, desc, checked, onChange }) => (
          <div key={id} className="flex items-center justify-between gap-4 rounded-lg border border-border p-4 w-full max-w-md">
            <div className="space-y-0.5">
              <p className="text-sm font-medium">{label}</p>
              <p className="text-xs text-muted-foreground">{desc}</p>
            </div>
            <Switch
              id={id}
              checked={checked}
              onCheckedChange={onChange as (v: boolean) => void}
              defaultChecked={checked === undefined ? false : undefined}
            />
          </div>
        ))}
      </Variant>

      <Variant title="Select — basic" vertical>
        <div className="w-52 space-y-1.5">
          <Label htmlFor="ws-select-status">Status</Label>
          <Select defaultValue="published">
            <SelectTrigger id="ws-select-status">
              <SelectValue placeholder="Select status…" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="published">Published</SelectItem>
              <SelectItem value="draft">Draft</SelectItem>
              <SelectItem value="review">In review</SelectItem>
              <SelectSeparator />
              <SelectItem value="archived" disabled>Archived</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="w-52 space-y-1.5">
          <Label htmlFor="ws-select-role">Role</Label>
          <Select>
            <SelectTrigger id="ws-select-role">
              <SelectValue placeholder="Select a role…" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Privileged</SelectLabel>
                <SelectItem value="owner">Owner</SelectItem>
                <SelectItem value="admin">Admin</SelectItem>
              </SelectGroup>
              <SelectSeparator />
              <SelectGroup>
                <SelectLabel>Standard</SelectLabel>
                <SelectItem value="editor">Editor</SelectItem>
                <SelectItem value="viewer">Viewer</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="w-52 space-y-1.5">
          <Label>Disabled</Label>
          <Select disabled>
            <SelectTrigger>
              <SelectValue placeholder="Cannot select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="x">Option</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </Variant>
    </Story>
  )
}
