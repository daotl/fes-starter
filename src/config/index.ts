import { enabledPagePaths } from '~/config/page'

import loader from './loader'

export const CONFIG = {
  enabledPagePaths: enabledPagePaths,
  homepage: loader.getConfigValue('HOMEPAGE') || 'home',
} as const
