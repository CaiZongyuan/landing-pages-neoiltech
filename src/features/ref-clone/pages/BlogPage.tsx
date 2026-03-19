import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import {
  getBlogCategories,
  getPostsForLocale,
  type BlogCategory,
} from '../content/blogContent'
import { Button, CloneHeader } from '../components/Primitives'
import { useSiteLocale } from '../lib/siteLocale'
import { cn } from '#/lib/utils'

export function BlogPage() {
  const { locale } = useSiteLocale()
  const [active, setActive] = useState<'Latest' | BlogCategory>('Latest')
  const categories = getBlogCategories(locale)
  const posts = getPostsForLocale(locale)
  const filtered = active === 'Latest' ? posts : posts.filter((post) => post.category === active)
  const copy =
    locale === 'zh'
      ? {
          title: '博客',
          body: '围绕家庭执行系统、个性化 Agents 与 EaseFlows 的产品笔记。',
          read: '阅读全文',
          backTitle: '继续看首页？',
          backBody: '回到首页，查看 AstraFlow / 星绪 的核心叙事。',
          backAction: '返回首页',
        }
      : {
          title: 'Blog',
          body: 'Product notes on family execution systems, personalized agents, and EaseFlows.',
          read: 'Read more',
          backTitle: 'Want the full narrative?',
          backBody: 'Return to the homepage to see AstraFlow in one clear pass.',
          backAction: 'Back to Home',
        }

  return (
    <div className="min-h-screen bg-astraflow text-slate-950">
      <CloneHeader onGetStarted={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />

      <main className="mx-auto max-w-6xl px-5 pb-20 pt-10 sm:px-8">
        <div className="mt-4">
          <h1 className="font-display text-[52px] tracking-tight sm:text-[72px]">{copy.title}</h1>
          <p className="mt-3 max-w-2xl text-[15px] leading-7 text-slate-600">{copy.body}</p>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              className={cn(
                'h-10 rounded-full bg-white/60 px-4 text-slate-900 ring-1 ring-black/5 hover:bg-white',
                active === category && 'bg-white/85',
              )}
              onClick={() => setActive(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {filtered.map((post) => (
            <Link
              key={`${post.locale}-${post.slug}`}
              to="/blog/$slug"
              params={{ slug: post.slug }}
              className="group no-underline"
            >
              <div className="overflow-hidden rounded-[28px] bg-white/65 ring-1 ring-black/5 shadow-[0_30px_90px_rgba(2,8,23,0.10)]">
                <div className={cn('h-[220px]', post.coverStyle)}>
                  <div className="h-full w-full bg-[radial-gradient(80%_120%_at_20%_0%,rgba(255,255,255,0.75),transparent_60%)]" />
                </div>
                <div className="p-7">
                  <div className="text-xs text-slate-500">
                    {post.author} · {new Date(post.date).toLocaleDateString(locale)} · {post.minutes}{' '}
                    min
                  </div>
                  <div className="mt-2 font-display text-[26px] tracking-tight group-hover:underline">
                    {post.title}
                  </div>
                  <div className="mt-3 text-sm leading-7 text-slate-600">{post.excerpt}</div>
                  <div className="mt-5 text-sm font-medium text-slate-900">{copy.read} →</div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 rounded-[28px] bg-white/65 p-8 ring-1 ring-black/5">
          <div className="font-display text-[26px] tracking-tight">{copy.backTitle}</div>
          <div className="mt-2 text-sm text-slate-600">{copy.backBody}</div>
          <Link to="/" hash="top" className="inline-flex no-underline">
            <Button className="mt-5 h-11 rounded-full bg-slate-950 px-6 text-white hover:bg-slate-900">
              {copy.backAction}
            </Button>
          </Link>
        </div>
      </main>
    </div>
  )
}
