// @vitest-environment node

import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { describe, expect, it } from 'vitest'

describe('site locale store', () => {
  it('uses a shared subscription model so all consumers rerender after locale updates', async () => {
    const source = await readFile(
      path.join(process.cwd(), 'src/features/ref-clone/lib/siteLocale.ts'),
      'utf8',
    )

    expect(source).toContain('useSyncExternalStore')
    expect(source).toContain('const listeners = new Set')
    expect(source).toContain('listeners.forEach((listener) => listener())')
    expect(source).not.toContain('useState<SiteLocale>')
  })
})
