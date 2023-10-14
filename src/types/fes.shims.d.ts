declare module '@fesjs/fes' {

  import type { Route, Router } from 'vue-router'

  export * from '@@/core/coreExports'
  export * from '@@/core/pluginExports'

  // Workaround for useRouter type undefined

  export function useRouter(): Router
  // Workaround for useRoute type undefined

  export function useRoute(): Route
}
