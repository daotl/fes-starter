import { defineStore, acceptHMRUpdate } from 'pinia'

const useUserStore = defineStore('user', {
  state: () => {
    return {
      name: 'harrywan',
    }
  },
})

// Enable HMR for supported bundlers
// See: https://pinia.vuejs.org/cookbook/hot-module-replacement.html
/* eslint-disable */
// @ts-ignore
if (import.meta.hot) {
  // @ts-ignore
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
}
/* eslint-enable */

export default useUserStore
