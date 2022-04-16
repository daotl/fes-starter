// Run with `esno genPagesJson.ts`

import fs from 'fs'
import path from 'path'

import { PAGES } from '~/config/pages'

fs.writeFileSync(
  path.resolve(__dirname, 'pages.json'),
  JSON.stringify(PAGES, null, 2),
)
