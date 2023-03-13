import loader from './loader'
import type { Page } from './pages'
import { PAGES } from './pages'

function filterMenus(pages: Page[]): Page[] {
  return pages
    .filter((p) => p.sidebar !== false)
    .map((p) =>
      p.children
        ? {
            ...p,
            children: filterMenus(p.children),
          }
        : p,
    )
}

export const menus = filterMenus(PAGES)

const enabledPageNamesStr = loader.getConfigValue('ENABLED_PAGES')?.trim()

let enabledPages: Page[]

// If not set, enabled all pages
if (!enabledPageNamesStr) {
  enabledPages = flattenPages(PAGES)
} else {
  const enabledPageNames = enabledPageNamesStr.split(',').map((s) => s.trim())
  // `index` should always be included
  if (!enabledPageNames.includes('index')) {
    enabledPageNames.push('index')
  }
  enabledPages = flattenEnabledPages(PAGES, enabledPageNames)
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

// eslint-disable-next-line @typescript-eslint/no-unused-vars, unused-imports/no-unused-vars
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
