import loader from './loader'

export const CONFIG = {
  debug: loader.getConfigValue('DEBUG'),
  backends: {
    restApiBaseUrl: loader.getConfigValue('REST_API_BASE_URL') || `api/rest`,
    wsApiBaseUrl: loader.getConfigValue('WS_API_BASE_URL') || `api/ws`,
  },
} as const
