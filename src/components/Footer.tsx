export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer mt-20 px-4 pb-14 pt-10 text-[var(--sea-ink-soft)]">
      <div className="page-wrap grid gap-8 rounded-[1.75rem] border border-[var(--line)] bg-[var(--surface)] px-6 py-8 shadow-[0_24px_60px_rgba(20,63,99,0.08)] sm:grid-cols-[minmax(0,1fr)_auto] sm:px-8">
        <div>
          <p className="section-badge mb-3">AstraFlow</p>
          <p className="m-0 max-w-xl text-sm leading-7">
            A calmer coordination layer for families managing routines, care,
            and everyday decisions together.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3 text-sm font-semibold">
          <a href="#story" className="legal-chip">
            Story
          </a>
          <a href="#capabilities" className="legal-chip">
            Capabilities
          </a>
          <a href="#waitlist" className="legal-chip">
            Waitlist
          </a>
          <a href="/blog" className="legal-chip">
            Blog
          </a>
        </div>
      </div>
      <div className="page-wrap mt-5 flex flex-col gap-3 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p className="m-0">&copy; {year} AstraFlow. All rights reserved.</p>
        <p className="m-0">Homepage slice for MVP narrative and visual system.</p>
      </div>
    </footer>
  )
}
