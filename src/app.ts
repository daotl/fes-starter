import { access } from '@fesjs/fes'
import type { App } from 'vue'
import { createPinia } from 'pinia'

import PageLoading from '~/components/PageLoading.vue'
import UserCenter from '~/components/UserCenter.vue'

export function onAppCreated({ app }: { app: App }) {
  const pinia = createPinia()
  app.use(pinia)
}

export const beforeRender = {
  loading: PageLoading,
  action() {
    const { setRole } = access
    return new Promise((resolve) => {
      setTimeout(() => {
        void setRole('admin')
        resolve({})
      }, 1000)
    })
  },
}

export const layout = {
  customHeader: UserCenter,
}
