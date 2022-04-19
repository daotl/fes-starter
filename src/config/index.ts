import { enabledPagePaths, menus } from '~/config/page'

import loader from './loader'

export const CONFIG = {
  menus: menus,
  enabledPagePaths: enabledPagePaths,
  homepage: loader.getConfigValue('HOMEPAGE') || 'home',
} as const
