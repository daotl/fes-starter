// eslint-disable-next-line import/no-unresolved
import 'uno.css'
import '@unocss/reset/tailwind.css'

import { access /*, pinia*/ } from '@fesjs/fes'
// import { ElConfigProvider, ElLoading } from 'element-plus'
// import elementZhCn from 'element-plus/es/locale/lang/zh-cn'
import type { App, ComponentOptions } from 'vue'

import PageLoading from '~/components/PageLoading.vue'
import UserCenter from '~/components/UserCenter.vue'
import { CONFIG } from '~/config'

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
      void setAccess(CONFIG.enabledPagePaths)
      // void setRole('admin')
      resolve({})
      // }, 1000)
    })
  },
}

export function rootContainer(container: ComponentOptions) {
  return () => {
    return (
      // <ElConfigProvider locale={elementZhCn}>
      <container></container>
      // </ElConfigProvider>
    )
  }
}

export const layout = {
  customHeader: UserCenter,
}
