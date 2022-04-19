import loader from './loader'
import { enabledPagePaths, menus } from './page'

export const CONFIG = {
  menus: menus,
  enabledPagePaths: enabledPagePaths,
  homepage: loader.getConfigValue('HOMEPAGE') || 'home',
} as const
