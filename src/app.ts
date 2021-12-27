import { access } from '@fesjs/fes'
import PageLoading from '@/components/PageLoading.vue'
import UserCenter from '@/components/UserCenter.vue'

export const beforeRender = {
  loading: PageLoading,
  action() {
    const { setRole } = access
    return new Promise((resolve) => {
      setTimeout(() => {
        void setRole('admin')
        // 初始化应用的全局状态，可以通过 useModel('@@initialState') 获取，具体用法看@/components/UserCenter 文件
        resolve(state)
      }, 1000)
    })
  },
}

export type State = {
  userName: string
}

const state: State = {
  userName: 'harrywan',
}

export const layout = {
  customHeader: UserCenter,
}
