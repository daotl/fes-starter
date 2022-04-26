import { CONFIG } from '~/config'

export const logger = {
  log(s: string) {
    if (CONFIG.debug) {
      console.log(s)
    }
  },

  error(s: string) {
    if (CONFIG.debug) {
      console.error(s)
    }
  },
}
