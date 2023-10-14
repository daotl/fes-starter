import { acceptHMRUpdate, defineStore } from 'pinia'

const useUserStore = defineStore('user', {
  state: () => {
    return {
      name: 'harrywan',
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
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
}

export default useUserStore
