import loader from './loader'

export const CONFIG = {
  debug: loader.getConfigValue('DEBUG'),
} as const
