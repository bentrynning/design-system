import type { StoryMeta } from './components/story'
import type { ComponentType } from 'react'

import ButtonStory,    { meta as buttonMeta    } from './stories/button'
import BadgeStory,     { meta as badgeMeta     } from './stories/badge'
import AvatarStory,    { meta as avatarMeta    } from './stories/avatar'
import InputStory,     { meta as inputMeta     } from './stories/input'
import ControlsStory,  { meta as controlsMeta  } from './stories/controls'
import CardStory,      { meta as cardMeta      } from './stories/card'
import FeedbackStory,  { meta as feedbackMeta  } from './stories/feedback'
import TableStory,     { meta as tableMeta     } from './stories/table'
import NavigationStory,{ meta as navigationMeta} from './stories/navigation'
import OverlaysStory,  { meta as overlaysMeta  } from './stories/overlays'
import LayoutStory,    { meta as layoutMeta    } from './stories/layout'

export interface StoryEntry {
  /** URL-safe identifier used as the hash route. */
  slug: string
  meta: StoryMeta
  component: ComponentType
}

/**
 * Add new stories here in the order you want them to appear in the sidebar.
 * The slug becomes the URL hash, e.g. #button → ButtonStory.
 */
export const registry: StoryEntry[] = [
  { slug: 'button',     meta: buttonMeta,     component: ButtonStory     },
  { slug: 'badge',      meta: badgeMeta,      component: BadgeStory      },
  { slug: 'avatar',     meta: avatarMeta,     component: AvatarStory     },
  { slug: 'input',      meta: inputMeta,      component: InputStory      },
  { slug: 'controls',   meta: controlsMeta,   component: ControlsStory   },
  { slug: 'card',       meta: cardMeta,       component: CardStory       },
  { slug: 'feedback',   meta: feedbackMeta,   component: FeedbackStory   },
  { slug: 'table',      meta: tableMeta,      component: TableStory      },
  { slug: 'navigation', meta: navigationMeta, component: NavigationStory },
  { slug: 'overlays',   meta: overlaysMeta,   component: OverlaysStory   },
  { slug: 'layout',     meta: layoutMeta,     component: LayoutStory     },
]
