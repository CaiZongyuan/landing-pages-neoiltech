// @vitest-environment node

import { access, readFile, readdir } from 'node:fs/promises'
import path from 'node:path'
import { describe, expect, it } from 'vitest'

describe('TanStack Start route contracts', () => {
  it('maps /blog and /blog/$slug with file routes', async () => {
    await expect(
      readFile(path.join(process.cwd(), 'src/routes/blog.index.tsx'), 'utf8'),
    ).resolves.toContain("createFileRoute('/blog/')")

    await expect(
      readFile(path.join(process.cwd(), 'src/routes/blog.$slug.tsx'), 'utf8'),
    ).resolves.toContain("createFileRoute('/blog/$slug')")
  })
})

describe('AstraFlow branding and locale contracts', () => {
  it('uses en and zh locale sources instead of de', async () => {
    const settingsSource = await readFile(
      path.join(process.cwd(), 'project.inlang/settings.json'),
      'utf8',
    )

    expect(settingsSource).toContain('"locales": ["en", "zh"]')

    await expect(access(path.join(process.cwd(), 'messages/en.json'))).resolves.toBeNull()
    await expect(access(path.join(process.cwd(), 'messages/zh.json'))).resolves.toBeNull()
    await expect(access(path.join(process.cwd(), 'messages/de.json'))).rejects.toThrow()
  })

  it('removes Dona branding from public source files', async () => {
    const files = [
      'src/routes/index.tsx',
      'src/routes/blog.index.tsx',
      'src/styles.css',
      'src/features/ref-clone/components/Primitives.tsx',
      'src/features/ref-clone/pages/HomePage.tsx',
      'src/features/ref-clone/pages/BlogPage.tsx',
      'src/features/ref-clone/pages/BlogPostPage.tsx',
    ]

    const sources = await Promise.all(
      files.map((file) => readFile(path.join(process.cwd(), file), 'utf8')),
    )
    const combinedSource = sources.join('\n')

    expect(combinedSource).not.toMatch(/\bdona\b/i)
    expect(combinedSource).toContain('AstraFlow')
    expect(combinedSource).toContain('星绪')
  })
})

describe('Markdown blog content pipeline', () => {
  it('loads blog content from repository markdown files', async () => {
    const blogDir = path.join(process.cwd(), 'content/blog')
    const entries = await readdir(blogDir)

    expect(entries.filter((entry) => entry.endsWith('.md')).length).toBeGreaterThan(0)
    expect(entries.some((entry) => entry.endsWith('-zh.md'))).toBe(true)

    const contentSource = await readFile(
      path.join(process.cwd(), 'src/features/ref-clone/content/blogContent.ts'),
      'utf8',
    )

    expect(contentSource).toContain('import.meta.glob')
    expect(contentSource).toContain('content/blog')
  })
})
