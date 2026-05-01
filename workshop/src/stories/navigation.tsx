import {
  Tooltip, TooltipProvider, TooltipTrigger, TooltipContent, SimpleTooltip,
} from '@/components/tooltip'
import { Button } from '@/components/button'
import { Separator } from '@/components/separator'
import {
  Breadcrumb, BreadcrumbList, BreadcrumbItem,
  BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator, BreadcrumbEllipsis,
} from '@/components/breadcrumb'
import { Story, Variant } from '../components/story'
import type { StoryMeta } from '../components/story'
import { Settings, Copy, Trash2, Download, Info } from 'lucide-react'

export const meta: StoryMeta = {
  title: 'Tooltip / Separator / Breadcrumb',
  category: 'Navigation',
  description: 'Supporting components for navigation, layout structure, and contextual labels.',
}

export default function NavigationStory() {
  return (
    <Story meta={meta}>
      <Variant title="Tooltip — basic">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Settings">
                <Settings />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Settings</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Copy">
                <Copy />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Copy to clipboard</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Delete" className="text-destructive hover:text-destructive">
                <Trash2 />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Delete permanently</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </Variant>

      <Variant title="Tooltip — SimpleTooltip shorthand">
        <TooltipProvider>
          <SimpleTooltip content="Export as CSV">
            <Button variant="outline" size="sm">
              <Download />
              Export
            </Button>
          </SimpleTooltip>
          <SimpleTooltip content="This field is required for publishing">
            <Button variant="ghost" size="icon-sm">
              <Info className="text-muted-foreground" />
            </Button>
          </SimpleTooltip>
        </TooltipProvider>
      </Variant>

      <Variant title="Tooltip — placement">
        <TooltipProvider>
          {(['top', 'right', 'bottom', 'left'] as const).map((side) => (
            <SimpleTooltip key={side} content={`Tooltip on ${side}`} side={side}>
              <Button variant="outline" size="sm" className="capitalize">{side}</Button>
            </SimpleTooltip>
          ))}
        </TooltipProvider>
      </Variant>

      <Variant title="Separator — horizontal" vertical>
        <div className="w-full max-w-sm space-y-3">
          <p className="text-sm font-medium">Section one</p>
          <Separator />
          <p className="text-sm font-medium">Section two</p>
          <Separator />
          <p className="text-sm font-medium">Section three</p>
        </div>
      </Variant>

      <Variant title="Separator — vertical (inline)">
        <div className="flex h-8 items-center gap-2">
          <span className="text-sm">Dashboard</span>
          <Separator orientation="vertical" className="h-4" />
          <span className="text-sm text-muted-foreground">Settings</span>
          <Separator orientation="vertical" className="h-4" />
          <span className="text-sm text-muted-foreground">Billing</span>
        </div>
      </Variant>

      <Variant title="Breadcrumb — simple" vertical>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Settings</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Users</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Alice Chen</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </Variant>

      <Variant title="Breadcrumb — with ellipsis" vertical>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbEllipsis />
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Posts</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Edit post</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </Variant>
    </Story>
  )
}
