import { Avatar, AvatarImage, AvatarFallback } from '@/components/avatar'
import { Story, Variant } from '../components/story'
import type { StoryMeta } from '../components/story'

export const meta: StoryMeta = {
  title: 'Avatar',
  category: 'Primitives',
  description: 'Circular user representation with image + initials fallback.',
}

export default function AvatarStory() {
  return (
    <Story meta={meta}>
      <Variant
        title="Sizes"
        description="Five sizes: xs (24px) → xl (56px)."
      >
        <Avatar size="xs"><AvatarFallback>XS</AvatarFallback></Avatar>
        <Avatar size="sm"><AvatarFallback>SM</AvatarFallback></Avatar>
        <Avatar size="md"><AvatarFallback>MD</AvatarFallback></Avatar>
        <Avatar size="lg"><AvatarFallback>LG</AvatarFallback></Avatar>
        <Avatar size="xl"><AvatarFallback>XL</AvatarFallback></Avatar>
      </Variant>

      <Variant title="With image + fallback">
        <Avatar size="md">
          <AvatarImage
            src="https://i.pravatar.cc/150?img=5"
            alt="Alice Chen"
          />
          <AvatarFallback>AC</AvatarFallback>
        </Avatar>
        <Avatar size="md">
          <AvatarImage
            src="https://i.pravatar.cc/150?img=12"
            alt="Bob Kim"
          />
          <AvatarFallback>BK</AvatarFallback>
        </Avatar>
        {/* Broken src → shows fallback */}
        <Avatar size="md">
          <AvatarImage src="/no-image.jpg" alt="Broken" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
      </Variant>

      <Variant title="Avatar stack (overlapping group)">
        <div className="flex -space-x-2">
          {['AC', 'BK', 'JD', 'MR', 'PL'].map((initials) => (
            <Avatar
              key={initials}
              size="sm"
              className="ring-2 ring-card"
            >
              <AvatarFallback>{initials}</AvatarFallback>
            </Avatar>
          ))}
          <Avatar size="sm" className="ring-2 ring-card">
            <AvatarFallback className="text-[10px] bg-muted text-muted-foreground">
              +8
            </AvatarFallback>
          </Avatar>
        </div>
      </Variant>

      <Variant title="With name and role">
        {[
          { initials: 'AC', name: 'Alice Chen', role: 'Admin' },
          { initials: 'BK', name: 'Bob Kim', role: 'Editor' },
          { initials: 'JD', name: 'Jane Doe', role: 'Viewer' },
        ].map(({ initials, name, role }) => (
          <div key={initials} className="flex items-center gap-3">
            <Avatar size="md">
              <AvatarFallback>{initials}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium leading-none">{name}</p>
              <p className="text-xs text-muted-foreground mt-1">{role}</p>
            </div>
          </div>
        ))}
      </Variant>
    </Story>
  )
}
