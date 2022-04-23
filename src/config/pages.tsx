import { HomeFilled } from '@vicons/material'
import { Icon } from '@vicons/utils'
import type { VNode } from 'vue'

export type Page = {
  // 菜单的名称。通过匹配 name 和路由元信息 meta 中的 name，把菜单和路由关联起来，
  // 然后使用路由元信息补充菜单配置，比如 title、path 等。
  name: string

  // 菜单的路径，可配置第三方地址。
  path?: string

  // 额外匹配的路径，当前路由命中匹配规则时，此菜单高亮。
  match?: string[]

  // 是否在侧边栏菜单显示，若不传默认为true
  sidebar?: boolean

  // 菜单的标题，如果同时使用国际化插件，而且title的值以$开头，则使用$后面的内容去匹配语言设置。
  title?: string

  // 菜单的图标，只有一级标题展示图标。
  icon?: VNode

  // 子菜单列表
  children?: Page[]
}

// All pages, this is also the `menus` option for `@fesjs/plugin-layout`
export const PAGES: Page[] = [
  {
    // 根页面必须
    name: 'index',
    path: '/',
    sidebar: false,
  },
  {
    // 首页
    name: 'home',
    path: '/home',
    // icon: <div class="i-mdi-home" />,
    icon: (
      <Icon size="20">
        <HomeFilled />
      </Icon>
    ),
  },
]
