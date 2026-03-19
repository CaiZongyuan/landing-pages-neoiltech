// @vitest-environment jsdom

import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { describe, expect, it } from 'vitest'

describe('TanStack Start ref clone routes', () => {
  it('maps /blog and /blog/$slug with file routes instead of hash routing', async () => {
    const rootRoute = await readFile(
      path.join(process.cwd(), 'src/routes/__root.tsx'),
      'utf8',
    )

    await expect(
      readFile(path.join(process.cwd(), 'src/routes/blog.index.tsx'), 'utf8'),
    ).resolves.toContain("createFileRoute('/blog/')")

    await expect(
      readFile(path.join(process.cwd(), 'src/routes/blog.$slug.tsx'), 'utf8'),
    ).resolves.toContain("createFileRoute('/blog/$slug')")

    expect(rootRoute).not.toContain('<Header />')
    expect(rootRoute).not.toContain('<Footer />')
  })
})

describe('TanStack Start ref clone UI', () => {
  it('renders the home clone hero and core sections', async () => {
    const homeSource = await readFile(
      path.join(process.cwd(), 'src/features/ref-clone/pages/HomePage.tsx'),
      'utf8',
    )

    expect(homeSource).toContain('Chat')
    expect(homeSource).toContain('with your tasks')
    expect(homeSource).toContain('Fast & delightful')
    expect(homeSource).toContain('Dia is for you')
    expect(homeSource).toContain('Watch the trailer')
    expect(homeSource).toContain('Join our newsletter')
  })

  it('renders the blog list with category filters and cards', async () => {
    const blogSource = await readFile(
      path.join(process.cwd(), 'src/features/ref-clone/pages/BlogPage.tsx'),
      'utf8',
    )
    const contentSource = await readFile(
      path.join(process.cwd(), 'src/features/ref-clone/content/blogPosts.ts'),
      'utf8',
    )

    expect(blogSource).toContain('Blog')
    expect(blogSource).toContain('Latest')
    expect(blogSource).toContain('Back to Home')
    expect(contentSource).toContain('Liquid glass UI: make it feel like a material')
  })

  it('renders the blog post page and missing slug fallback', async () => {
    const postSource = await readFile(
      path.join(process.cwd(), 'src/features/ref-clone/pages/BlogPostPage.tsx'),
      'utf8',
    )
    const contentSource = await readFile(
      path.join(process.cwd(), 'src/features/ref-clone/content/blogPosts.ts'),
      'utf8',
    )

    expect(postSource).toContain('On this page')
    expect(postSource).toContain('Post not found')
    expect(postSource).toContain('Back to Blog')
    expect(contentSource).toContain('## 1. 玻璃的三件事')
  })
})
