declare module '@fesjs/fes' {
  // eslint-disable-next-line import/named
  import VueRouter, { Route } from 'vue-router'

  // eslint-disable-next-line import/export
  export * from '@@/core/coreExports'
  export * from '@@/core/pluginExports'

  // Workaround for useRouter type undefined
  // eslint-disable-next-line import/export
  export function useRouter(): VueRouter
  // Workaround for useRoute type undefined
  // eslint-disable-next-line import/export
  export function useRoute(): Route
}
