import { ENABLED_PAGE_PATHS } from '~/config/page'

import loader from './loader'

export const CONFIG = {
  enabledPagePaths: ENABLED_PAGE_PATHS,
  homepage: loader.getConfigValue('HOMEPAGE') || 'home',
} as const
