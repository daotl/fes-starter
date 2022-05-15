import loader from './loader'
import { enabledPagePaths, menus } from './page'

export const CONFIG = {
  debug: loader.getConfigValue('DEBUG'),
  menus,
  enabledPagePaths,
  homepage: loader.getConfigValue('HOMEPAGE') || 'home',
} as const
