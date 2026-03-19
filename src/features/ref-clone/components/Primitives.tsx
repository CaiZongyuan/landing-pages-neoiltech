import type {
  ButtonHTMLAttributes,
  HTMLAttributes,
  InputHTMLAttributes,
  ReactNode,
} from 'react'
import { Menu, Quote } from 'lucide-react'
import { Link } from '@tanstack/react-router'
import { cn } from '#/lib/utils'

export function Button({
  className,
  type = 'button',
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type={type}
      className={cn(
        'inline-flex items-center justify-center gap-2 whitespace-nowrap transition disabled:pointer-events-none disabled:opacity-60',
        className,
      )}
      {...props}
    />
  )
}

export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={cn(
        'w-full rounded-full border border-black/5 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none placeholder:text-slate-400',
        props.className,
      )}
    />
  )
}

export function Separator({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('h-px w-full bg-black/10', className)} {...props} />
}

export function SoftCard({
  className,
  children,
}: {
  className?: string
  children: ReactNode
}) {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-[28px] bg-white/70 backdrop-blur-xl ring-1 ring-black/5',
        'shadow-[0_40px_110px_rgba(2,8,23,0.10)]',
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_80%_at_10%_10%,rgba(56,189,248,0.18),transparent_60%),radial-gradient(70%_90%_at_90%_20%,rgba(99,102,241,0.10),transparent_55%)]" />
      <div className="relative">{children}</div>
    </div>
  )
}

function LogoMark({ className }: { className?: string }) {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      <span className="relative grid size-7 place-items-center overflow-hidden rounded-[14px] bg-white/70 shadow-[0_14px_40px_rgba(2,132,199,0.16)] ring-1 ring-black/5">
        <span className="absolute inset-0 bg-[radial-gradient(90%_90%_at_30%_20%,rgba(255,255,255,0.9),transparent_55%),linear-gradient(to_bottom,rgba(56,189,248,0.95),rgba(2,132,199,0.95))]" />
        <span className="relative z-10 size-2.5 rounded-[7px] bg-white" />
      </span>
      <span className="font-display text-[18px] tracking-tight">dona</span>
    </div>
  )
}

export function CloneHeader({
  onAbout,
  onGetStarted,
}: {
  onAbout?: () => void
  onGetStarted?: () => void
}) {
  return (
    <header className="sticky top-0 z-50 pt-4 sm:pt-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <div className="relative flex items-center justify-between gap-3 rounded-[999px] bg-white/55 px-3 py-2 backdrop-blur-2xl ring-1 ring-white/60 shadow-[0_30px_90px_rgba(2,8,23,0.10)] sm:px-4">
          <div className="pointer-events-none absolute inset-0 rounded-[999px] bg-[radial-gradient(80%_140%_at_20%_0%,rgba(255,255,255,0.95),transparent_55%),radial-gradient(80%_120%_at_90%_10%,rgba(56,189,248,0.20),transparent_60%)]" />
          <div className="pointer-events-none absolute inset-0 rounded-[999px] ring-1 ring-black/5" />

          <div className="relative flex items-center gap-3">
            <Link to="/" hash="top" className="rounded-full px-2 py-1 no-underline">
              <LogoMark />
            </Link>
          </div>

          <nav className="relative hidden items-center gap-1 sm:flex">
            <Link
              to="/"
              hash="top"
              className="rounded-full px-4 py-2 text-sm text-slate-700 no-underline transition hover:bg-white/55 hover:text-slate-950"
            >
              Home
            </Link>
            <button
              type="button"
              className="rounded-full px-4 py-2 text-sm text-slate-700 transition hover:bg-white/55 hover:text-slate-950"
              onClick={onAbout}
            >
              About
            </button>
            <Link
              to="/blog"
              className="rounded-full px-4 py-2 text-sm text-slate-700 no-underline transition hover:bg-white/55 hover:text-slate-950"
            >
              Blog
            </Link>
          </nav>

          <div className="relative flex items-center gap-2">
            <Button
              className="hidden h-10 rounded-full bg-white/70 px-4 text-sm text-slate-900 ring-1 ring-black/5 hover:bg-white sm:inline-flex"
              onClick={() => window.open('https://dona.ai/login', '_blank')}
            >
              Login
            </Button>
            <Button
              className="h-10 rounded-full bg-slate-950 px-5 text-sm text-white shadow-[0_20px_60px_rgba(2,8,23,0.20)] hover:bg-slate-900"
              onClick={onGetStarted}
            >
              Get started
            </Button>
            <Button className="size-10 rounded-full bg-white/70 p-0 ring-1 ring-black/5 sm:hidden">
              <span className="sr-only">Open menu</span>
              <Menu className="size-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

export function Dialog({
  open,
  onClose,
  title,
  children,
  maxWidthClass = 'max-w-lg',
}: {
  open: boolean
  onClose: () => void
  title: string
  children: ReactNode
  maxWidthClass?: string
}) {
  if (!open) {
    return null
  }

  return (
    <div
      className="fixed inset-0 z-[60] grid place-items-center bg-slate-950/28 px-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onClick={onClose}
    >
      <div
        className={cn(
          'w-full rounded-[28px] bg-white/92 p-6 shadow-[0_40px_120px_rgba(2,8,23,0.18)] ring-1 ring-black/5',
          maxWidthClass,
        )}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <h2 className="font-display text-2xl tracking-tight">{title}</h2>
          <Button
            className="size-9 rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200"
            onClick={onClose}
          >
            <span aria-hidden="true">×</span>
            <span className="sr-only">Close dialog</span>
          </Button>
        </div>
        <div className="mt-4">{children}</div>
      </div>
    </div>
  )
}

export function TestimonialCard({
  quote,
  name,
  role,
}: {
  quote: string
  name: string
  role: string
}) {
  return (
    <div className="h-full rounded-[26px] bg-white/70 p-7 ring-1 ring-black/5 shadow-[0_18px_60px_rgba(2,8,23,0.10)]">
      <Quote className="size-5 text-slate-400" />
      <div className="mt-4 text-[15px] leading-7 text-slate-800">“{quote}”</div>
      <div className="mt-6 flex items-center justify-between">
        <div>
          <div className="text-sm font-medium">{name}</div>
          <div className="text-xs text-slate-500">{role}</div>
        </div>
        <span className="size-10 rounded-full bg-slate-100 ring-1 ring-black/5" />
      </div>
    </div>
  )
}
