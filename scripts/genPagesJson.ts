// Run with `esno genPagesJson.ts`

import fs from 'node:fs'
import path from 'node:path'

import { PAGES } from '~/config/pages'

fs.writeFileSync(
  path.resolve(__dirname, 'pages.json'),
  JSON.stringify(PAGES, null, 2),
)
