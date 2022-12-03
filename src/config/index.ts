import loader from './loader'

export const CONFIG = {
  debug: loader.getConfigValue('DEBUG'),
  backends: {
    restApiBaseUrl:
      loader.getConfigValue('REST_API_BASE_URL') ||
      `${location.protocol}//${location.host}/api/rest`,
    wsApiBaseUrl:
      loader.getConfigValue('WS_API_BASE_URL') ||
      `${location.protocol}//${location.host}/api/ws`,
  },
} as const
