import { Alert, AlertTitle, AlertDescription } from '@/components/alert'
import { Progress } from '@/components/progress'
import { Skeleton } from '@/components/skeleton'
import { Story, Variant } from '../components/story'
import type { StoryMeta } from '../components/story'
import { CheckCircle, XCircle, AlertTriangle, Info } from 'lucide-react'

export const meta: StoryMeta = {
  title: 'Alert / Progress / Skeleton',
  category: 'Feedback',
  description: 'Inline status messages, completion bars, and loading placeholders.',
}

export default function FeedbackStory() {
  return (
    <Story meta={meta}>
      <Variant title="Alert — variants" vertical>
        <Alert className="max-w-lg">
          <AlertTitle>Heads up</AlertTitle>
          <AlertDescription>
            Your trial expires in 7 days. Upgrade to keep access.
          </AlertDescription>
        </Alert>
        <Alert variant="success" className="max-w-lg">
          <AlertTitle>Published successfully</AlertTitle>
          <AlertDescription>
            Your post is now live and accessible to all users.
          </AlertDescription>
        </Alert>
        <Alert variant="warning" className="max-w-lg">
          <AlertTitle>Unsaved changes</AlertTitle>
          <AlertDescription>
            You have unsaved changes. Save or discard before leaving this page.
          </AlertDescription>
        </Alert>
        <Alert variant="destructive" className="max-w-lg">
          <AlertTitle>Deployment failed</AlertTitle>
          <AlertDescription>
            Build step exited with code 1. Check the logs for more detail.
          </AlertDescription>
        </Alert>
      </Variant>

      <Variant title="Alert — with icon" vertical>
        <Alert variant="success" className="max-w-lg">
          <CheckCircle />
          <AlertTitle>Saved</AlertTitle>
          <AlertDescription>All changes have been written to the database.</AlertDescription>
        </Alert>
        <Alert variant="warning" className="max-w-lg">
          <AlertTriangle />
          <AlertTitle>Rate limit approaching</AlertTitle>
          <AlertDescription>
            You have used 90% of your monthly API quota.
          </AlertDescription>
        </Alert>
        <Alert variant="destructive" className="max-w-lg">
          <XCircle />
          <AlertTitle>Permission denied</AlertTitle>
          <AlertDescription>
            You do not have permission to delete this resource.
          </AlertDescription>
        </Alert>
        <Alert className="max-w-lg">
          <Info />
          <AlertTitle>New feature available</AlertTitle>
          <AlertDescription>
            Custom domains are now available for all Pro plans.
          </AlertDescription>
        </Alert>
      </Variant>

      <Variant title="Progress — values" vertical className="max-w-md">
        {[0, 25, 50, 75, 100].map((v) => (
          <div key={v} className="w-full space-y-1.5">
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Progress</span>
              <span>{v}%</span>
            </div>
            <Progress value={v} />
          </div>
        ))}
      </Variant>

      <Variant title="Progress — sizes" vertical className="max-w-md">
        <div className="w-full space-y-1.5">
          <p className="text-xs text-muted-foreground">Thin (h-1)</p>
          <Progress value={60} className="h-1" />
        </div>
        <div className="w-full space-y-1.5">
          <p className="text-xs text-muted-foreground">Default (h-2)</p>
          <Progress value={60} />
        </div>
        <div className="w-full space-y-1.5">
          <p className="text-xs text-muted-foreground">Thick (h-3)</p>
          <Progress value={60} className="h-3" />
        </div>
      </Variant>

      <Variant title="Skeleton — shapes">
        {/* Avatar */}
        <Skeleton className="h-9 w-9 rounded-full" />
        {/* Text lines */}
        <div className="space-y-2 w-48">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
        </div>
        {/* Button */}
        <Skeleton className="h-9 w-24 rounded-md" />
        {/* Card block */}
        <Skeleton className="h-24 w-40 rounded-lg" />
      </Variant>

      <Variant title="Skeleton — card loading state" vertical>
        <div className="w-full max-w-sm rounded-lg border border-border p-6 space-y-4">
          <div className="flex items-center gap-3">
            <Skeleton className="h-10 w-10 rounded-full" />
            <div className="space-y-2 flex-1">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-3 w-48" />
            </div>
          </div>
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
          </div>
          <div className="flex gap-2">
            <Skeleton className="h-8 w-20 rounded-md" />
            <Skeleton className="h-8 w-20 rounded-md" />
          </div>
        </div>
      </Variant>
    </Story>
  )
}
