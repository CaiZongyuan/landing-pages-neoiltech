import type { SiteLocale } from '../lib/siteLocale'

export type BlogCategory = 'Product' | 'Insights'

export type BlogPost = {
  slug: string
  translationGroup: string
  locale: SiteLocale
  title: string
  excerpt: string
  author: string
  date: string
  minutes: number
  category: BlogCategory
  coverStyle: string
  contentMd: string
}

const markdownModules = import.meta.glob('../../../../content/blog/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

function parseFrontmatter(source: string) {
  if (!source.startsWith('---\n')) {
    return { data: {}, content: source.trim() }
  }

  const endIndex = source.indexOf('\n---\n', 4)
  if (endIndex === -1) {
    return { data: {}, content: source.trim() }
  }

  const frontmatter = source.slice(4, endIndex).trim()
  const content = source.slice(endIndex + 5).trim()
  const data = Object.fromEntries(
    frontmatter
      .split('\n')
      .filter(Boolean)
      .map((line) => {
        const separator = line.indexOf(':')
        const key = line.slice(0, separator).trim()
        const value = line.slice(separator + 1).trim().replace(/^"(.*)"$/, '$1')

        return [key, value]
      }),
  )

  return { data, content }
}

function parsePathMeta(filePath: string) {
  const fileName = filePath.split('/').at(-1) ?? ''
  const match = fileName.match(/^(\d+)\.([a-z0-9-]+?)(-zh)?\.md$/)

  if (!match) {
    throw new Error(`Invalid blog filename: ${fileName}`)
  }

  const [, order, baseSlug, zhSuffix] = match

  return {
    order: Number(order),
    slug: baseSlug,
    locale: (zhSuffix ? 'zh' : 'en') as SiteLocale,
    translationGroup: `${order}.${baseSlug}`,
  }
}

function parseCategory(category: string): BlogCategory {
  return category === 'Insights' ? 'Insights' : 'Product'
}

export const blogPosts = Object.entries(markdownModules)
  .map(([filePath, source]) => {
    const meta = parsePathMeta(filePath)
    const { data, content } = parseFrontmatter(source)

    return {
      ...meta,
      title: String(data.title ?? meta.slug),
      excerpt: String(data.excerpt ?? ''),
      author: String(data.author ?? 'AstraFlow Team'),
      date: String(data.date ?? '2026-03-19'),
      minutes: Number(data.minutes ?? 4),
      category: parseCategory(String(data.category ?? 'Product')),
      coverStyle: String(
        data.coverStyle ??
          'bg-[radial-gradient(70%_80%_at_20%_20%,rgba(14,165,233,0.45),transparent_55%),radial-gradient(70%_80%_at_80%_25%,rgba(56,189,248,0.3),transparent_60%),linear-gradient(to_bottom,rgba(255,255,255,0.15),rgba(255,255,255,0))]',
      ),
      contentMd: content,
    } satisfies BlogPost
  })
  .sort((left, right) => {
    const dateDiff = new Date(right.date).getTime() - new Date(left.date).getTime()

    if (dateDiff !== 0) {
      return dateDiff
    }

    return left.order - right.order
  })

export function getBlogCategories(locale: SiteLocale) {
  const categories = new Set<BlogCategory>()

  for (const post of blogPosts) {
    if (post.locale === locale) {
      categories.add(post.category)
    }
  }

  return ['Latest', ...categories] as const
}

export function getPostsForLocale(locale: SiteLocale) {
  return blogPosts.filter((post) => post.locale === locale)
}

export function getPostBySlug(slug: string, locale: SiteLocale) {
  return blogPosts.find((post) => post.slug === slug && post.locale === locale) ?? null
}

export function getTranslatedPost(slug: string, targetLocale: SiteLocale) {
  return blogPosts.find((post) => post.slug === slug && post.locale === targetLocale) ?? null
}
