// eslint-disable-next-line import/no-unresolved
import 'uno.css'
import './styles/global.scss'

import { access /* , pinia */ } from '@fesjs/fes'
// import { ElConfigProvider, ElLoading } from 'element-plus'
// import elementZhCn from 'element-plus/es/locale/lang/zh-cn'
import type { App, ComponentOptions, Ref } from 'vue'

import PageLoading from '~/components/PageLoading.vue'
import UserCenter from '~/components/UserCenter.vue'
import { CONFIG } from '~/config'
import type { Page } from '~/config/pages'
import { logger } from '~/utils/log'

/* eslint-disable @typescript-eslint/require-await,no-console */
export const qiankun = {
  // 应用加载之前
  async bootstrap(props): Promise<void> {
    console.log('app1 bootstrap', props)
  },
  // 应用 render 之前触发
  async mount(props): Promise<void> {
    console.log('app1 mount', props)
  },
  // 当 props 更新时触发
  async update(props): Promise<void> {
    console.log('app1 update', props)
  },
  // 应用卸载之后触发
  async unmount(props): Promise<void> {
    console.log('app1 unmount', props)
  },
}
/* eslint-enable @typescript-eslint/require-await,no-console */

export function onAppCreated({ app: _app }: { app: App }): void {
  // pinia.use(somePiniaPlugin())
  // app.use(someVuePlugin())
}

export const beforeRender = {
  loading: PageLoading,
  action(): Promise<Record<string, unknown>> {
    const { setAccess /* , *setRole */ } = access
    return new Promise((resolve) => {
      // Access data can be requested from backend / read from HTML meta tags etc.
      // setTimeout(() => {
      void setAccess(CONFIG.enabledPagePaths)
      logger.log('access set')
      // void setRole('admin')
      resolve({})
      // }, 1000)
    })
  },
}

export function rootContainer(container: ComponentOptions) {
  return (): ComponentOptions => {
    return (
      // <ElConfigProvider locale={elementZhCn}>
      <container></container>
      // </ElConfigProvider>
    )
  }
}

export const layout = (
  layoutConfig: Record<string, unknown>,
): Record<string, unknown> => ({
  ...layoutConfig,
  customHeader: UserCenter,
  menus: (_defaultMenuData: Page[]): Ref<typeof CONFIG.menus> => {
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
