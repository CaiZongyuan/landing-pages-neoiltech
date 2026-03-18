import { ArrowLeft, BookOpen, Sparkles } from 'lucide-react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/blog')({ component: BlogPlaceholderPage })

export function BlogPlaceholderPage() {
  return (
    <main className="page-wrap px-4 pb-16 pt-10 sm:pt-14">
      <section className="home-hero relative overflow-hidden rounded-[2rem] px-6 py-10 sm:px-10 sm:py-14">
        <div className="home-mesh absolute inset-0" />
        <div className="relative grid gap-5">
          <p className="section-badge">Blog placeholder</p>
          <h1 className="display-title max-w-3xl text-4xl leading-[0.98] font-bold tracking-[-0.04em] text-[var(--sea-ink)] sm:text-6xl">
            Field notes are on the way
          </h1>
          <p className="max-w-2xl text-base leading-7 text-[var(--sea-ink-soft)] sm:text-lg">
            The full blog experience ships in the next slice with markdown
            content, language pairing, and article-level SEO. For now, this
            placeholder keeps the landing page CTA from dropping visitors into a
            404.
          </p>
          <p className="chapter-copy">
            The full blog experience ships in the next slice.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="/" className="cta-button cta-button--primary">
              <ArrowLeft className="h-4 w-4" />
              Back to home
            </a>
            <a href="#waitlist" className="cta-button cta-button--ghost">
              Join the waitlist
            </a>
          </div>
        </div>
      </section>

      <section className="home-section grid gap-4 md:grid-cols-2">
        <article className="chapter-card chapter-card--accent">
          <div className="icon-chip">
            <BookOpen className="h-5 w-5" />
          </div>
          <h2 className="mt-5 text-2xl font-semibold text-[var(--sea-ink)]">
            What arrives next
          </h2>
          <p className="chapter-copy mt-3">
            Content will come from repository markdown files with bilingual
            pairing and a dedicated reading route.
          </p>
        </article>
        <article className="chapter-card chapter-card--soft">
          <div className="icon-chip icon-chip--soft">
            <Sparkles className="h-5 w-5" />
          </div>
          <h2 className="mt-5 text-2xl font-semibold text-[var(--sea-ink)]">
            Why the placeholder exists
          </h2>
          <p className="chapter-copy mt-3">
            This page keeps the current CTA flow coherent while issue #5 builds
            the real content pipeline and article templates.
          </p>
        </article>
      </section>
    </main>
  )
}
