import loader from './loader'
import { enabledPagePaths, menus } from './page'

export const CONFIG = {
  debug: loader.getConfigValue('DEBUG'),
  menus,
  enabledPagePaths,
  homepage: loader.getConfigValue('HOMEPAGE') || 'home',
  backends: {
    restApiBaseUrl:
      loader.getConfigValue('REST_API_BASE_URL') ||
      `${location.protocol}//${location.host}/api/rest`,
    wsApiBaseUrl:
      loader.getConfigValue('WS_API_BASE_URL') ||
      `${location.protocol}//${location.host}/api/ws`,
  },
} as const
