import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  Bot,
  House,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react'
import { createFileRoute } from '@tanstack/react-router'

const signals = [
  'One shared memory for schedules, care tasks, and family context',
  'Delegated follow-through with human approval at the right step',
  'Designed for real households, not generic productivity teams',
]

const orchestrationSteps = [
  {
    title: 'Capture what matters',
    description:
      'Collect routines, responsibilities, and the messy context that usually lives across texts, docs, and memory.',
  },
  {
    title: 'Let agents propose the next move',
    description:
      'AstraFlow turns family goals into drafts, checklists, reminders, and decisions with clear ownership.',
  },
  {
    title: 'Keep humans in control',
    description:
      'Every important action remains reviewable, editable, and reversible before it affects your household.',
  },
]

const capabilityCards = [
  {
    icon: House,
    title: 'Family operating rhythms',
    description:
      'See recurring routines, appointments, care plans, and commitments in one calmer layer.',
  },
  {
    icon: Bot,
    title: 'Delegated execution',
    description:
      'Turn a messy request into a guided sequence of drafts, reminders, and suggested next actions.',
  },
  {
    icon: Users,
    title: 'Multi-person coordination',
    description:
      'Keep partners, caregivers, and relatives aligned without forcing everyone into the same workflow.',
  },
  {
    icon: Sparkles,
    title: 'Context that compounds',
    description:
      'Each decision improves the next one, so the system becomes more useful the more the household uses it.',
  },
]

const trustItems = [
  {
    icon: ShieldCheck,
    title: 'Human control, privacy, and trust',
    description:
      'Approvals stay visible. Sensitive household context is handled with restraint, boundaries, and explicit review moments.',
  },
  {
    icon: BadgeCheck,
    title: 'No magical black box promises',
    description:
      'The product story stays grounded in practical delegation, shared memory, and decision support.',
  },
  {
    icon: BookOpen,
    title: 'Built to earn confidence over time',
    description:
      'The interface favors readable summaries, status clarity, and traceable actions over flashy automation theater.',
  },
]

const notes = [
  {
    label: 'Product lens',
    title: 'Why family coordination breaks down before the week even starts',
    description:
      'A view into invisible household work, role drift, and why generic task apps fail families.',
  },
  {
    label: 'System design',
    title: 'What a Life OS needs before agents can actually help',
    description:
      'The interaction model behind shared memory, staged approvals, and delegated execution.',
  },
]

export const Route = createFileRoute('/')({ component: HomePage })

export function HomePage() {
  return (
    <main className="page-wrap px-4 pb-16 pt-10 sm:pt-14">
      <section className="home-hero rise-in relative overflow-hidden rounded-[2rem] px-6 py-8 sm:px-10 sm:py-12">
        <div className="home-mesh absolute inset-0" />
        <div className="sunrise-orb sunrise-orb--left" />
        <div className="sunrise-orb sunrise-orb--right" />
        <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(300px,0.85fr)] lg:items-center">
          <div>
            <p className="section-badge mb-4">The family Life OS</p>
            <h1 className="display-title max-w-4xl text-4xl leading-[0.95] font-bold tracking-[-0.04em] text-[var(--sea-ink)] sm:text-6xl lg:text-[4.6rem]">
              AstraFlow turns scattered home coordination into calm, delegated
              execution.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--sea-ink-soft)] sm:text-lg">
              Built for families navigating logistics, caregiving, and
              day-to-day decisions. AstraFlow gives your household a shared
              memory, a clearer operating rhythm, and AI support that stays
              accountable to humans.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#waitlist" className="cta-button cta-button--primary">
                Join the waitlist
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="/blog" className="cta-button cta-button--ghost">
                Read the blog
              </a>
            </div>
            <div className="home-kpis mt-8">
              {signals.map((signal) => (
                <div key={signal} className="stat-pill">
                  <span className="stat-pill__dot" />
                  <span>{signal}</span>
                </div>
              ))}
            </div>
          </div>

          <aside className="chapter-card">
            <p className="section-badge mb-4">Narrative preview</p>
            <div className="space-y-4">
              {orchestrationSteps.map((step, index) => (
                <article key={step.title} className="story-step">
                  <div className="story-step__index">0{index + 1}</div>
                  <div>
                    <h2 className="text-base font-semibold text-[var(--sea-ink)]">
                      {step.title}
                    </h2>
                    <p className="mt-1 text-sm leading-6 text-[var(--sea-ink-soft)]">
                      {step.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section id="story" className="home-section">
        <div className="section-heading">
          <p className="section-badge">Chapter 01</p>
          <h2 className="display-title section-title">
            Why family coordination breaks down
          </h2>
          <p className="section-copy">
            Families rarely struggle because they lack effort. They struggle
            because context lives in too many places, invisible labor goes
            untracked, and every new exception creates more coordination debt.
          </p>
        </div>
        <div className="story-grid">
          {[
            'Responsibilities blur when multiple people are juggling care, logistics, and emotional labor.',
            'Important context gets trapped in chats, notes, and someone’s head until the next urgent moment.',
            'Most tools manage tasks, but not the household logic behind why something matters now.',
          ].map((item) => (
            <article key={item} className="chapter-card">
              <p className="chapter-copy">{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="orchestration" className="home-section">
        <div className="section-heading">
          <p className="section-badge">Chapter 02</p>
          <h2 className="display-title section-title">How AstraFlow works</h2>
        </div>
        <div className="grid gap-4 lg:grid-cols-3">
          {orchestrationSteps.map((step) => (
            <article key={step.title} className="chapter-card">
              <p className="section-badge mb-3">Step</p>
              <h3 className="text-xl font-semibold text-[var(--sea-ink)]">
                {step.title}
              </h3>
              <p className="chapter-copy mt-3">{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="capabilities" className="home-section">
        <div className="section-heading">
          <p className="section-badge">Chapter 03</p>
          <h2 className="display-title section-title">
            A calmer operating layer for home
          </h2>
          <p className="section-copy">
            The MVP homepage introduces the product mechanism without pretending
            every downstream workflow already exists. It shows where waitlist,
            blog, and multi-language content will connect next.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {capabilityCards.map(({ icon: Icon, title, description }) => (
            <article key={title} className="chapter-card chapter-card--accent">
              <div className="icon-chip">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-[var(--sea-ink)]">
                {title}
              </h3>
              <p className="chapter-copy mt-3">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="trust" className="home-section">
        <div className="section-heading">
          <p className="section-badge">Guardrails</p>
          <h2 className="display-title section-title">
            Human control, privacy, and trust
          </h2>
        </div>
        <div className="grid gap-4 lg:grid-cols-[minmax(0,1.2fr)_minmax(280px,0.8fr)]">
          <div className="grid gap-4">
            {trustItems.map(({ icon: Icon, title, description }) => (
              <article key={title} className="chapter-card chapter-card--soft">
                <div className="flex items-start gap-4">
                  <div className="icon-chip icon-chip--soft">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--sea-ink)]">
                      {title}
                    </h3>
                    <p className="chapter-copy mt-2">{description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <aside className="chapter-card chapter-card--quote">
            <p className="section-badge mb-4">What this page does now</p>
            <p className="text-lg leading-8 text-[var(--sea-ink)]">
              This first slice establishes AstraFlow&apos;s story architecture,
              trust signals, and conversion rhythm before wiring in live
              waitlist, blog, and SEO infrastructure.
            </p>
          </aside>
        </div>
      </section>

      <section id="notes" className="home-section">
        <div className="section-heading">
          <p className="section-badge">Field notes</p>
          <h2 className="display-title section-title">Latest field notes</h2>
          <p className="section-copy">
            Blog routes land in a later slice. The homepage already reserves the
            editorial rhythm and CTA surface they will plug into.
          </p>
        </div>
        <div className="grid gap-4 lg:grid-cols-2">
          {notes.map((note) => (
            <article key={note.title} className="chapter-card teaser-card">
              <p className="section-badge mb-3">{note.label}</p>
              <h3 className="text-xl font-semibold text-[var(--sea-ink)]">
                {note.title}
              </h3>
              <p className="chapter-copy mt-3">{note.description}</p>
              <a href="/blog" className="inline-flex items-center gap-2 pt-5 text-sm font-semibold text-[var(--lagoon-deep)] no-underline">
                Explore the upcoming blog
                <ArrowRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="waitlist" className="home-section">
        <div className="waitlist-shell">
          <div className="section-heading mb-0">
            <p className="section-badge">Conversion</p>
            <h2 className="display-title section-title">Start with the waitlist</h2>
            <p className="section-copy">
              The live form lands in the next implementation slice. This section
              already holds the final CTA rhythm and the field structure users
              will see.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {['Email', 'Name', 'Company', 'Role'].map((field) => (
              <div key={field} className="field-shell">
                <span>{field}</span>
              </div>
            ))}
            <div className="field-shell field-shell--textarea sm:col-span-2">
              <span>Use case</span>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button type="button" disabled className="cta-button cta-button--primary cta-button--disabled">
              Waitlist form ships in issue #4
            </button>
            <p className="m-0 text-sm text-[var(--sea-ink-soft)]">
              Early access intake will keep duplicate submissions idempotent and
              preserve user input on errors.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
