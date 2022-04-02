// eslint-disable-next-line import/no-unresolved
import 'uno.css'
import '@unocss/reset/tailwind.css'

import { access /*, pinia*/ } from '@fesjs/fes'
import type { App } from 'vue'

import PageLoading from '~/components/PageLoading.vue'
import UserCenter from '~/components/UserCenter.vue'
import { ENABLED_PAGE_PATHS } from '~/config/page'

export function onAppCreated({ app }: { app: App }) {
  // pinia.use(somePiniaPlugin())
  // app.use(someVuePlugin())
}

export const beforeRender = {
  loading: PageLoading,
  action() {
    const { setAccess /*, *setRole*/ } = access
    return new Promise((resolve) => {
      // Access data can be requested from backend / read from HTML meta tags etc.
      // setTimeout(() => {
      void setAccess(ENABLED_PAGE_PATHS)
      // void setRole('admin')
      resolve({})
      // }, 1000)
    })
  },
}

export const layout = {
  customHeader: UserCenter,
}
