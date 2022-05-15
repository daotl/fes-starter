/* eslint-disable no-console */

import { CONFIG } from '~/config'

export const logger = {
  log(s: string): void {
    if (CONFIG.debug) {
      console.log(s)
    }
  },

  error(s: string): void {
    if (CONFIG.debug) {
      console.error(s)
    }
  },
}
