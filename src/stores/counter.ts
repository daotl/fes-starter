import { acceptHMRUpdate, defineStore } from 'pinia'

const useCounterStore = defineStore('counter', {
  state: () => {
    return {
      clicked: 4,
    }
  },
})

// Enable HMR for supported bundlers
// See: https://pinia.vuejs.org/cookbook/hot-module-replacement.html
// eslint-disable-next-line ts/ban-ts-comment
// @ts-expect-error
if (import.meta.hot) {
// eslint-disable-next-line ts/ban-ts-comment
// @ts-expect-error
  // eslint-disable-next-line ts/no-unsafe-call,ts/no-unsafe-member-access
  import.meta.hot.accept(acceptHMRUpdate(useCounterStore, import.meta.hot))
}

export default useCounterStore
