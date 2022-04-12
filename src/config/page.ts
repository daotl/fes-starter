import loader from './loader'
import PAGES from './pages'

export type Page = {
  // 菜单的名称。通过匹配 name 和路由元信息 meta 中的 name，把菜单和路由关联起来，
  // 然后使用路由元信息补充菜单配置，比如 title、path 等。
  name: string

  // 菜单的路径，可配置第三方地址。
  path?: string

  // 额外匹配的路径，当前路由命中匹配规则时，此菜单高亮。
  match?: string[]

  // 菜单的标题，如果同时使用国际化插件，而且title的值以$开头，则使用$后面的内容去匹配语言设置。
  title?: string

  // 菜单的图标，只有一级标题展示图标。
  icon?: string

  // 子菜单列表
  children?: Page[]
}

const _: Page[] = PAGES

const enabledPageNames = (loader.getConfigValue('ENABLED_PAGES') || '')
  .split(',')
  .map((s) => s.trim())

// `index` should always be included
if (!enabledPageNames.includes('index')) {
  enabledPageNames.push('index')
}

let enabledPages = flattenEnabledPages(PAGES, enabledPageNames)

// If not set, enabled all pages
if (enabledPages.length === 0) {
  enabledPages = flattenPages(PAGES)
}

export const enabledPagePaths = enabledPages
  .map((p) => p.path)
  .filter((path) => path)

/* Util functions */

function flattenEnabledPages(pages: Page[], names: string[]): Page[] {
  return pages.flatMap((p) =>
    names.includes(p.name)
      ? [p, ...flattenPages(p.children || [])]
      : flattenEnabledPages(p.children || [], names),
  )
}

function flattenPages(pages: Page[]): Page[] {
  return pages.flatMap((p) => [p, ...flattenPages(p.children || [])])
}

function flattenPagesToMap(pages: Page[]): Record<string, Page> {
  return pages.reduce<Record<string, Page>>((map, page) => {
    let newMap = {
      ...map,
      [page.name]: page,
    } as const
    if (page.children?.length) {
      newMap = {
        ...newMap,
        ...flattenPagesToMap(page.children),
      }
    }
    return newMap
  }, {} as const)
}
