import 'uno.css'
import './styles/global.scss'

// import { pinia } from '@fesjs/fes'
// import { ElConfigProvider, ElLoading } from 'element-plus'
// import elementZhCn from 'element-plus/es/locale/lang/zh-cn'
import type { App, ComponentOptions } from 'vue'

import PageLoading from '~/components/PageLoading.vue'
import { logger } from '~/utils/log'

import Content from './Content.vue'

export function onAppCreated({ app: _app }: { app: App }): void {
  // pinia.use(somePiniaPlugin())
  // app.use(someVuePlugin())
}

export const beforeRender = {
  loading: PageLoading,
  action(): Promise<Record<string, unknown>> {
    return new Promise((resolve) => {
      // Access data can be requested from backend / read from HTML meta tags etc.
      // setTimeout(() => {
      logger.log('access set')
      // void setRole('admin')
      resolve({})
      // }, 1000)
    })
  },
}

export function rootContainer() {
  return (): ComponentOptions => {
    return (
      // <ElConfigProvider locale={elementZhCn}>
      <Content></Content>
      // </ElConfigProvider>
    )
  }
}
