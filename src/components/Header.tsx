import { Link } from '@tanstack/react-router'
import ParaglideLocaleSwitcher from './LocaleSwitcher.tsx'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 px-4 pt-4">
      <nav className="page-wrap floating-nav flex flex-wrap items-center gap-x-3 gap-y-3 rounded-[1.75rem] px-4 py-3 sm:px-5">
        <h2 className="m-0 flex-shrink-0 text-base font-semibold tracking-tight">
          <Link
            to="/"
            className="brand-mark inline-flex items-center gap-3 rounded-full px-3 py-2 text-sm text-[var(--sea-ink)] no-underline sm:px-4"
          >
            <span className="brand-mark__orb" />
            <span>
              AstraFlow
              <span className="block text-xs font-medium tracking-[0.14em] text-[var(--sea-ink-soft)] uppercase">
                Family Life OS
              </span>
            </span>
          </Link>
        </h2>

        <div className="ml-auto flex items-center gap-2 sm:gap-3">
          <ParaglideLocaleSwitcher />
          <ThemeToggle />
          <a href="#waitlist" className="cta-button cta-button--primary hidden sm:inline-flex">
            Join the waitlist
          </a>
        </div>

        <div className="order-3 flex w-full flex-wrap items-center gap-x-4 gap-y-2 pb-1 text-sm font-semibold sm:order-2 sm:w-auto sm:flex-nowrap sm:pb-0">
          <a href="#story" className="nav-link">
            Why now
          </a>
          <a href="#orchestration" className="nav-link">
            How it works
          </a>
          <a href="#capabilities" className="nav-link">
            Capabilities
          </a>
          <a href="#notes" className="nav-link">
            Field notes
          </a>
          <a
            href="/blog"
            className="nav-link"
          >
            Blog
          </a>
        </div>
      </nav>
    </header>
  )
}
