import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { blogCategories, blogPosts, type BlogCategory } from '../content/blogPosts'
import { Button, CloneHeader } from '../components/Primitives'
import { cn } from '#/lib/utils'

export function BlogPage() {
  const [active, setActive] = useState<BlogCategory>('Latest')

  const filtered =
    active === 'Latest'
      ? blogPosts
      : blogPosts.filter((post) => post.category === active)

  return (
    <div className="min-h-screen bg-dona text-slate-950">
      <CloneHeader onGetStarted={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />

      <main className="mx-auto max-w-6xl px-5 pb-20 pt-10 sm:px-8">
        <div className="mt-4">
          <h1 className="font-display text-[52px] tracking-tight sm:text-[72px]">Blog</h1>
          <p className="mt-3 max-w-2xl text-[15px] leading-7 text-slate-600">
            产品、设计与构建过程的随笔。整体布局参考 createanything.com/blog，但内容为此项目的静态示例。
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {blogCategories.map((category) => (
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
              key={post.slug}
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
                    {post.author} · {new Date(post.date).toLocaleDateString()} · {post.minutes} min
                    read
                  </div>
                  <div className="mt-2 font-display text-[26px] tracking-tight group-hover:underline">
                    {post.title}
                  </div>
                  <div className="mt-3 text-sm leading-7 text-slate-600">{post.excerpt}</div>
                  <div className="mt-5 text-sm font-medium text-slate-900">Read →</div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 rounded-[28px] bg-white/65 p-8 ring-1 ring-black/5">
          <div className="font-display text-[26px] tracking-tight">想继续逛首页？</div>
          <div className="mt-2 text-sm text-slate-600">回到 Home 看更多演示与交互细节。</div>
          <Link to="/" hash="top" className="inline-flex no-underline">
            <Button className="mt-5 h-11 rounded-full bg-slate-950 px-6 text-white hover:bg-slate-900">
              Back to Home
            </Button>
          </Link>
        </div>
      </main>
    </div>
  )
}
