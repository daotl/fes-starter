import { defineStore, acceptHMRUpdate } from 'pinia'

const useCounterStore = defineStore('counter', {
  state: () => {
    return {
      clicked: 4,
    }
  },
})

// Enable HMR for supported bundlers
// See: https://pinia.vuejs.org/cookbook/hot-module-replacement.html
/* eslint-disable */
// @ts-ignore
if (import.meta.hot) {
  // @ts-ignore
  import.meta.hot.accept(acceptHMRUpdate(useCounterStore, import.meta.hot))
}
/* eslint-enable */

export default useCounterStore
