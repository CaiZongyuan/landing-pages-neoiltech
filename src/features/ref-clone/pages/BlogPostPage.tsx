import { useEffect } from 'react'
import { Link } from '@tanstack/react-router'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { getPostBySlug } from '../content/blogPosts'
import { Button, CloneHeader, Separator } from '../components/Primitives'
import { cn } from '#/lib/utils'
import { getTableOfContents, slugifyHeading } from '../lib/slug'

export function BlogPostPage({ slug }: { slug: string }) {
  const post = getPostBySlug(slug)
  const toc = post ? getTableOfContents(post.contentMd) : []

  useEffect(() => {
    const headings = Array.from(document.querySelectorAll('article h2'))
    for (const heading of headings) {
      if (!heading.id) {
        heading.id = slugifyHeading(heading.textContent || '')
      }
    }
  }, [slug])

  if (!post) {
    return (
      <div className="min-h-screen bg-dona">
        <CloneHeader onGetStarted={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
        <main className="mx-auto max-w-4xl px-5 py-16 sm:px-8">
          <div className="rounded-[28px] bg-white/70 p-8 ring-1 ring-black/5">
            <div className="font-display text-[28px] tracking-tight">Post not found</div>
            <div className="mt-2 text-sm text-slate-600">这篇文章不存在（静态 demo）。</div>
            <Link to="/blog" className="inline-flex no-underline">
              <Button className="mt-6 h-11 rounded-full bg-slate-950 px-6 text-white hover:bg-slate-900">
                Back to Blog
              </Button>
            </Link>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-dona text-slate-950">
      <CloneHeader onGetStarted={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />

      <main className="mx-auto max-w-6xl px-5 pb-20 pt-10 sm:px-8">
        <Link to="/blog" className="text-sm text-slate-600 no-underline hover:text-slate-900">
          ← All
        </Link>

        <div className="mt-6 grid gap-10 lg:grid-cols-[1fr_320px]">
          <article>
            <h1 className="font-display text-[44px] leading-[1.02] tracking-tight sm:text-[60px]">
              {post.title}
            </h1>
            <div className="mt-4 text-sm text-slate-500">
              {post.author} · {new Date(post.date).toLocaleDateString()} · {post.minutes} min read
            </div>

            <div
              className={cn(
                'mt-8 h-[260px] overflow-hidden rounded-[28px] ring-1 ring-black/5 shadow-[0_35px_110px_rgba(2,8,23,0.12)]',
                post.coverStyle,
              )}
            >
              <div className="h-full w-full bg-[radial-gradient(80%_120%_at_20%_0%,rgba(255,255,255,0.80),transparent_60%)]" />
            </div>

            <div className="prose prose-slate mt-10 max-w-none">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  h2: ({ children }) => {
                    const label = String(children)
                    return <h2 id={slugifyHeading(label)}>{children}</h2>
                  },
                }}
              >
                {post.contentMd}
              </ReactMarkdown>
            </div>
          </article>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-[28px] bg-white/70 p-6 ring-1 ring-black/5">
              <div className="text-xs text-slate-500">min read</div>
              <div className="mt-1 font-display text-[26px] tracking-tight">{post.minutes}</div>
              <Separator className="my-5 bg-black/5" />
              <div className="text-sm font-medium">On this page</div>
              <div className="mt-3 grid gap-2">
                {toc.length ? (
                  toc.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="rounded-[16px] bg-white/70 px-4 py-3 text-sm text-slate-700 ring-1 ring-black/5 hover:text-slate-950"
                      onClick={(event) => {
                        event.preventDefault()
                        document.getElementById(item.id)?.scrollIntoView({
                          behavior: 'smooth',
                          block: 'start',
                        })
                      }}
                    >
                      {item.label}
                    </a>
                  ))
                ) : (
                  <div className="text-sm text-slate-500">No sections</div>
                )}
              </div>
              <Separator className="my-5 bg-black/5" />
              <Link to="/" hash="top" className="inline-flex w-full no-underline">
                <Button className="h-11 w-full rounded-full bg-white/80 text-slate-900 ring-1 ring-black/5 hover:bg-white">
                  Back to Home
                </Button>
              </Link>
            </div>
          </aside>
        </div>
      </main>
    </div>
  )
}
