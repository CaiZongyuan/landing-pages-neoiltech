import { readFile } from 'node:fs/promises'
import { describe, expect, it, vi } from 'vitest'

const fetchHandler = vi.fn()

vi.mock('@tanstack/react-start/server-entry', () => ({
  default: {
    fetch: fetchHandler,
  },
}))

describe('Cloudflare custom server entrypoint', () => {
  it('reuses TanStack Start fetch handler', async () => {
    const worker = await import('./server')

    expect(worker.default.fetch).toBe(fetchHandler)
  })

  it('points Wrangler to the project server entry', async () => {
    const wranglerConfig = await readFile(new URL('../wrangler.jsonc', import.meta.url), 'utf8')

    expect(wranglerConfig).toContain('"main": "src/server.ts"')
  })
})
