// eslint-disable-next-line import/no-unresolved
// Temp: Disable UnoCSS until @unocss/webpack bug fixed:
// https://github.com/unocss/unocss/issues/797
// import 'uno.css'

import { access /*, pinia*/ } from '@fesjs/fes'
// import { ElConfigProvider, ElLoading } from 'element-plus'
// import elementZhCn from 'element-plus/es/locale/lang/zh-cn'
import type { App, ComponentOptions } from 'vue'

import PageLoading from '~/components/PageLoading.vue'
import UserCenter from '~/components/UserCenter.vue'
import { CONFIG } from '~/config'
import type { Page } from '~/config/pages'

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

export const layout = (layoutConfig: Record<string, unknown>) => ({
  ...layoutConfig,
  customHeader: UserCenter,
  menus: (_defaultMenuData: Page[]) => {
    // We are not using default values from `.fes.js`
    // const menusRef = ref(defaultMenuData)
    const menusRef = ref(CONFIG.menus)

    // If need to change dynamically:
    // watch(() => layoutConfig.initialState.userName, () => {
    //     menusRef.value = CONFIG.menus
    // })
    return menusRef
  },
})
