// All pages, this is also the `menus` option for `@fesjs/plugin-layout`
export const PAGES = [
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
  },
]

export const MENUS = filterMenus(PAGES)

function filterMenus(pages) {
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
