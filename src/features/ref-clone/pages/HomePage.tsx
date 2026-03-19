import { useEffect, useState } from 'react'
import { ArrowRight, Lock, MessageCircle, Play, Twitter } from 'lucide-react'
import {
  Button,
  CloneHeader,
  Dialog,
  Input,
  Separator,
  SoftCard,
  TestimonialCard,
} from '../components/Primitives'
import { cn } from '#/lib/utils'

function AppPreviewMock() {
  return (
    <div className="relative mx-auto w-full max-w-[980px]">
      <SoftCard className="p-6 sm:p-8">
        <div className="grid gap-6 md:grid-cols-[320px_1fr]">
          <div className="rounded-[22px] bg-white/80 ring-1 ring-black/5 shadow-[0_20px_60px_rgba(2,8,23,0.10)]">
            <div className="p-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="size-9 rounded-[14px] bg-slate-100 ring-1 ring-black/5" />
                  <div>
                    <div className="font-medium leading-5">Home</div>
                    <div className="text-xs text-slate-500">12 tasks</div>
                  </div>
                </div>
                <span className="rounded-full bg-slate-100 px-2 py-1 text-xs text-slate-600 ring-1 ring-black/5">
                  Today
                </span>
              </div>
            </div>
            <Separator className="bg-black/5" />
            <div className="p-4">
              {[
                'Road trip',
                'Book a hotel room',
                'Charge camera',
                'Water plants',
                'Buy a new couch',
                'Yoga with Thomas',
              ].map((task, index) => (
                <div
                  key={task}
                  className="mb-2 flex items-center gap-3 rounded-[16px] bg-white px-3 py-3 ring-1 ring-black/5 shadow-[0_10px_30px_rgba(2,8,23,0.06)]"
                >
                  <span
                    className={cn(
                      'size-5 rounded-[7px] ring-1 ring-black/10',
                      index === 0 ? 'bg-sky-500' : 'bg-slate-100',
                    )}
                  />
                  <span className="text-sm text-slate-800">{task}</span>
                  <span className="ml-auto text-xs text-slate-400">
                    {index === 5 ? '15 Mar' : ''}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-2 right-10 hidden md:block">
              <div className="flex items-center gap-3 rounded-[999px] bg-white px-5 py-4 ring-1 ring-black/5 shadow-[0_30px_90px_rgba(2,8,23,0.16)]">
                <span className="grid size-10 place-items-center rounded-[16px] bg-slate-100 ring-1 ring-black/5">
                  <span className="size-3 rounded bg-slate-400" />
                </span>
                <div className="font-medium tracking-tight">Launch Beta version</div>
              </div>
            </div>

            <div className="rounded-[22px] bg-white/70 p-5 ring-1 ring-black/5 shadow-[0_25px_80px_rgba(2,8,23,0.08)]">
              <div className="flex items-start gap-4">
                <span className="grid size-11 place-items-center rounded-[18px] bg-slate-100 ring-1 ring-black/5">
                  <span className="size-4 rounded-[7px] bg-white ring-1 ring-black/10" />
                </span>
                <div>
                  <div className="text-[20px] font-semibold tracking-tight">
                    Good morning, Laura
                  </div>
                  <div className="text-sm text-slate-500">It&apos;s Wednesday, Feb 23</div>
                </div>
              </div>

              <div className="mt-6 rounded-[18px] bg-slate-100/70 px-4 py-4 text-sm text-slate-500 ring-1 ring-black/5">
                Write a new task
              </div>

              <div className="mt-4 space-y-2">
                {[
                  { label: 'Book table at Eska', tag: '10 Mar', dot: true },
                  { label: 'Pick up tickets', tag: '', dot: false },
                  { label: 'Send itinerary', tag: '', dot: false },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 rounded-[18px] bg-white px-4 py-4 ring-1 ring-black/5 shadow-[0_12px_40px_rgba(2,8,23,0.06)]"
                  >
                    <span className="size-5 rounded-[7px] bg-slate-100 ring-1 ring-black/10" />
                    <span className="text-sm text-slate-800">{item.label}</span>
                    <span className="ml-auto flex items-center gap-2 text-xs text-slate-400">
                      {item.tag ? (
                        <span className="rounded-full bg-slate-100 px-2 py-1 ring-1 ring-black/5">
                          {item.tag}
                        </span>
                      ) : null}
                      {item.dot ? <span className="size-2 rounded-full bg-rose-500" /> : null}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pointer-events-none absolute inset-0 -z-10 rounded-[30px] bg-[radial-gradient(70%_70%_at_20%_0%,rgba(56,189,248,0.18),transparent_55%),radial-gradient(70%_80%_at_85%_35%,rgba(148,163,184,0.20),transparent_60%)]" />
          </div>
        </div>
      </SoftCard>
    </div>
  )
}

export function HomePage() {
  const [aboutOpen, setAboutOpen] = useState(false)
  const [videoOpen, setVideoOpen] = useState(false)
  const [activeDemo, setActiveDemo] = useState<'writing' | 'learning' | 'planning' | 'shopping'>(
    'writing',
  )
  const [demoPrompt, setDemoPrompt] = useState('')
  const [demoOutput, setDemoOutput] = useState('这里会显示结果…')
  const [carouselIndex, setCarouselIndex] = useState(0)

  useEffect(() => {
    if (window.location.hash) {
      document
        .getElementById(window.location.hash.replace('#', ''))
        ?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  const demoTabs = {
    writing: {
      title: 'Dia is for Writing',
      bullets: [
        'A writing partner in every text box',
        'An in-line copy editor to avoid the messy copy-paste',
        'An extra set of eyes to always hit your quality bar',
        'Share meeting takeaways in a fraction of the time',
        'The perfect word always at your fingertips',
      ],
    },
    learning: {
      title: 'Dia is for Learning',
      bullets: [
        'A tutor in every tab',
        'Understand both sides of an argument in one place',
        'YouTube timestamps to get straight to the information you want',
        'Break down complex concepts as you go',
        'Instant summaries to zero in on what matters',
      ],
    },
    planning: {
      title: 'Dia is for Planning',
      bullets: [
        "A personal assistant that's already up to speed",
        'Get the information you need, in the format that you need it',
        'Immediate to-do lists, so you can get on with the real work',
        'Translate on demand',
        'Never stress over the group order again',
      ],
    },
    shopping: {
      title: 'Dia is for Shopping',
      bullets: [
        'A retail concierge wherever you browse',
        'Discover more of what you love at the right price',
        'Blitz through customer reviews to know before you buy',
        "Size up products to find the one that's right for you",
        'Talk yourself out of impulse buys with context',
      ],
    },
  } as const

  const testimonials = [
    {
      quote:
        'Dia cuts the busywork. With just a prompt and tabs, I find sources in minutes, not hours.',
      name: 'Vitus',
      role: 'Student Journalist',
    },
    {
      quote:
        'Dia is my eng tutor: it answers questions in-line and gives me practice problems to test myself.',
      name: 'Quinn',
      role: 'Engineering Student',
    },
    {
      quote:
        'Personalization in Dia is a secret weapon to stay pitch perfect across all our client brands.',
      name: 'Kimberly',
      role: 'Agency Director',
    },
    {
      quote:
        'Dia helped me pick SaaS tools for my team, comparing options with context on what matters most.',
      name: 'Mohaned',
      role: 'Designer & Full-stack Dev',
    },
  ]

  const visibleTestimonials = [
    testimonials[carouselIndex % testimonials.length],
    testimonials[(carouselIndex + 1) % testimonials.length],
  ]

  return (
    <div className="min-h-screen bg-dona text-slate-950">
      <div id="top" className="absolute top-0" />
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_700px_at_50%_-120px,rgba(56,189,248,0.35),transparent_55%),radial-gradient(900px_600px_at_80%_10%,rgba(148,163,184,0.35),transparent_55%),linear-gradient(to_bottom,rgba(255,255,255,1),rgba(248,250,252,1))]" />
        <div className="absolute inset-0 bg-dona-noise opacity-[0.22] mix-blend-multiply" />
      </div>

      <CloneHeader
        onAbout={() => setAboutOpen(true)}
        onGetStarted={() =>
          document.getElementById('newsletter')?.scrollIntoView({ behavior: 'smooth' })
        }
      />

      <Dialog open={aboutOpen} onClose={() => setAboutOpen(false)} title="About Dona">
        <div className="text-sm leading-7 text-slate-600">
          这是一个对 <span className="text-slate-900">dona.ai</span> 官网的静态复刻页面（仅用于演示 UI
          与交互）。
          <br />
          核心是：更快、更轻、更愉悦的待办体验。
        </div>
        <div className="mt-4 flex gap-2">
          <Button
            className="h-10 rounded-full bg-slate-950 px-5 text-white hover:bg-slate-900"
            onClick={() => {
              setAboutOpen(false)
              document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            看功能亮点
          </Button>
          <Button
            className="h-10 rounded-full bg-white/70 px-5 text-slate-900 ring-1 ring-black/5 hover:bg-white"
            onClick={() => window.open('https://dona.ai/', '_blank')}
          >
            打开原站
          </Button>
        </div>
      </Dialog>

      <Dialog
        open={videoOpen}
        onClose={() => setVideoOpen(false)}
        title="Watch video"
        maxWidthClass="max-w-3xl"
      >
        <div className="relative aspect-video w-full overflow-hidden rounded-[20px] bg-slate-950 ring-1 ring-black/10">
          <div className="absolute inset-0 bg-[radial-gradient(65%_80%_at_20%_20%,rgba(56,189,248,0.35),transparent_55%),radial-gradient(70%_80%_at_90%_40%,rgba(148,163,184,0.22),transparent_60%)]" />
          <div className="absolute inset-0 grid place-items-center">
            <Button
              className="h-11 rounded-full bg-white/90 px-6 text-slate-950 hover:bg-white"
              onClick={() => window.open('https://dona.ai/', '_blank')}
            >
              打开原站视频
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>
        <p className="mt-4 text-xs text-slate-500">
          注：此复刻是静态站点，不内嵌原站媒体资源。
        </p>
      </Dialog>

      <main>
        <section className="relative overflow-hidden">
          <div className="mx-auto flex min-h-[calc(100vh-7.5rem)] max-w-6xl flex-col items-center justify-center px-5 pb-24 pt-10 text-center sm:px-8 sm:pb-28">
            <div className="max-w-3xl animate-[rise-in_0.8s_ease-out]">
              <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-white/60 px-4 py-2 text-xs text-slate-600 ring-1 ring-black/5">
                <span className="size-1.5 rounded-full bg-sky-500" />
                A new AI to-do from the makers of calm
              </div>

              <div className="mt-6">
                <h1 className="font-display text-[54px] leading-[1.02] tracking-tight sm:text-[84px]">
                  <span className="block">Chat</span>
                  <span className="block">with your tasks</span>
                </h1>
              </div>

              <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-slate-600 sm:text-[16px]">
                把上下文留在你正在做的地方：就地拆解、就地总结、就地推进下一步。
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button
                  className="h-11 rounded-full bg-slate-950 px-7 text-white shadow-[0_22px_70px_rgba(2,8,23,0.22)] hover:bg-slate-900"
                  onClick={() =>
                    document.getElementById('newsletter')?.scrollIntoView({ behavior: 'smooth' })
                  }
                >
                  Get started
                </Button>
                <Button
                  className="h-11 rounded-full bg-white/70 px-6 text-slate-900 ring-1 ring-black/5 shadow-[0_18px_60px_rgba(2,8,23,0.10)] hover:bg-white"
                  onClick={() => setVideoOpen(true)}
                >
                  <Play className="size-4" /> Watch the trailer
                </Button>
              </div>
            </div>

            <div className="pointer-events-none relative mt-12 w-full max-w-4xl animate-[rise-in_1.1s_ease-out]">
              <div className="mx-auto flex items-center gap-3 rounded-[26px] bg-white/60 px-5 py-4 backdrop-blur-2xl ring-1 ring-black/5 shadow-[0_40px_120px_rgba(2,8,23,0.14)]">
                <div className="grid size-10 place-items-center rounded-[18px] bg-white/70 ring-1 ring-black/5">
                  <span className="text-slate-600">⌘</span>
                </div>
                <div className="flex-1 text-left">
                  <div className="text-sm font-medium text-slate-900">Hey Dona</div>
                  <div className="text-xs text-slate-500">Add tasks, notes, or files…</div>
                </div>
                <div className="grid size-10 place-items-center rounded-full bg-slate-950 text-white shadow-[0_18px_60px_rgba(2,8,23,0.22)]">
                  ↑
                </div>
              </div>

              <div className="pointer-events-none absolute left-1/2 top-full -z-10 mt-8 w-[1200px] -translate-x-1/2 opacity-[0.55] blur-[0.2px]">
                <AppPreviewMock />
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
          <div className="grid gap-10 md:grid-cols-[1fr_1.1fr]">
            <div>
              <h2 className="font-display text-[34px] leading-[1.05] tracking-tight sm:text-[44px]">
                Fast & delightful
                <br />
                user experience
              </h2>
              <p className="mt-5 max-w-md text-[16px] leading-7 text-slate-600">
                Dona helps you to manage your tasks and achieve your goals in intuitive and
                delightful way. We wanted to build an app you will enjoy using every day.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <SoftCard className="p-7">
                <div className="font-display text-[22px] tracking-tight">
                  Light, dark & black UI theme
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Dona offers lot of customizations, one of them allowing you to choose from light,
                  dark and black UI theme.
                </p>
                <div className="mt-7 rounded-[22px] bg-slate-950/90 p-5 text-slate-100 shadow-[0_30px_90px_rgba(2,8,23,0.18)]">
                  <div className="text-xs text-slate-400">Theme</div>
                  <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-white/10 p-1 ring-1 ring-white/10">
                    {[
                      { text: 'Light', active: false },
                      { text: 'Dark', active: true },
                      { text: 'Black', active: false },
                    ].map((item) => (
                      <span
                        key={item.text}
                        className={cn(
                          'flex items-center gap-2 rounded-full px-3 py-2 text-xs',
                          item.active ? 'bg-white/15' : 'opacity-70',
                        )}
                      >
                        <span
                          className={cn(
                            'size-2 rounded-full',
                            item.active ? 'bg-sky-400' : 'bg-white/30',
                          )}
                        />
                        {item.text}
                      </span>
                    ))}
                  </div>
                </div>
              </SoftCard>

              <SoftCard className="p-7">
                <div className="font-display text-[22px] tracking-tight">Details matter</div>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  We want to bring satisfaction to every interaction.
                </p>
                <div className="mt-7 rounded-[26px] bg-white p-5 ring-1 ring-black/5 shadow-[0_35px_90px_rgba(2,8,23,0.12)]">
                  <div className="flex items-center gap-3">
                    <span className="grid size-10 place-items-center rounded-[16px] bg-slate-950 text-white">
                      ✓
                    </span>
                    <div className="text-[18px] font-medium tracking-tight line-through decoration-2 decoration-slate-950/70">
                      Launch Beta version
                    </div>
                  </div>
                </div>
              </SoftCard>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
          <div className="grid gap-10 md:grid-cols-[1fr_1.1fr] md:items-start">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/60 px-3 py-1 text-xs text-slate-700 ring-1 ring-black/5">
                <span className="size-1.5 rounded-full bg-sky-500" />
                Chat with your tasks
              </div>
              <h3 className="mt-4 font-display text-[34px] leading-[1.05] tracking-tight sm:text-[44px]">
                A tiny assistant,
                <br />
                already up to speed.
              </h3>
              <p className="mt-4 max-w-md text-[15px] leading-7 text-slate-600">
                把「写、学、规划、购物」这些日常场景，变成更少切换、更少复制粘贴、更多连贯思考。
              </p>

              <div className="mt-6 flex flex-wrap gap-2 rounded-[18px] bg-white/55 p-2 ring-1 ring-black/5">
                {(['writing', 'learning', 'planning', 'shopping'] as const).map((tab) => (
                  <Button
                    key={tab}
                    className={cn(
                      'rounded-full px-4 py-2 text-sm text-slate-700 hover:bg-white/80',
                      activeDemo === tab && 'bg-white/80 text-slate-950',
                    )}
                    onClick={() => setActiveDemo(tab)}
                  >
                    {tab[0].toUpperCase() + tab.slice(1)}
                  </Button>
                ))}
              </div>

              <SoftCard className="mt-5 p-7">
                <div className="font-display text-[22px] tracking-tight">
                  {demoTabs[activeDemo].title}
                </div>
                <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-600">
                  {demoTabs[activeDemo].bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-sky-500/80" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </SoftCard>
            </div>

            <div className="relative">
              <SoftCard className="p-7 sm:p-8">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium text-slate-900">Live demo</div>
                  <div className="text-xs text-slate-500">type a prompt →</div>
                </div>
                <div className="mt-4 rounded-[22px] bg-white/70 p-4 ring-1 ring-black/5">
                  <div className="text-xs text-slate-500">Try:</div>
                  <div className="mt-2 grid gap-2">
                    {[
                      '把今天的任务按优先级分组，并给我一个 30 分钟能完成的清单',
                      '把这段文字改得更简洁、更像产品公告',
                      '把我购物车里的三个选择做对比表',
                    ].map((example) => (
                      <button
                        key={example}
                        type="button"
                        className="rounded-[18px] bg-white px-4 py-3 text-left text-sm text-slate-800 ring-1 ring-black/5 shadow-[0_10px_30px_rgba(2,8,23,0.06)] hover:bg-slate-50"
                        onClick={() => setDemoPrompt(example)}
                      >
                        {example}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="mt-4 rounded-[22px] bg-slate-950/90 p-5 text-slate-100 ring-1 ring-white/10">
                  <div className="text-xs text-slate-400">Prompt</div>
                  <input
                    className="mt-2 w-full rounded-[16px] bg-white/10 px-4 py-3 text-sm outline-none ring-1 ring-white/10 placeholder:text-slate-400"
                    placeholder="Describe what you want to do…"
                    value={demoPrompt}
                    onChange={(event) => setDemoPrompt(event.target.value)}
                  />
                  <div className="mt-3 flex items-center gap-2">
                    <Button
                      className="h-10 rounded-full bg-white/90 px-5 text-slate-950 hover:bg-white"
                      onClick={() => {
                        setDemoOutput('生成中…（静态演示，无真实调用）')
                        window.setTimeout(() => {
                          setDemoOutput(
                            '• 先做 1 个 10 分钟任务（快速赢）\n• 再做 2 个 15 分钟任务（推进）\n• 把剩下的安排到明天同一时间（保持节奏）',
                          )
                        }, 650)
                      }}
                    >
                      Run
                    </Button>
                    <span className="text-xs text-slate-400">No backend — UI demo only</span>
                  </div>
                  <pre className="mt-4 whitespace-pre-wrap rounded-[18px] bg-white/5 p-4 text-sm leading-6 text-slate-100 ring-1 ring-white/10">
                    {demoOutput}
                  </pre>
                </div>
              </SoftCard>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 pb-8 sm:px-8">
          <SoftCard className="p-8 sm:p-10">
            <div>
              <h3 className="font-display text-[28px] tracking-tight sm:text-[34px]">
                Dia is for you
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                来自不同工作流的真实使用感（此处为静态示例文案）。
              </p>
            </div>
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {visibleTestimonials.map((testimonial) => (
                <TestimonialCard
                  key={testimonial.name}
                  quote={testimonial.quote}
                  name={testimonial.name}
                  role={testimonial.role}
                />
              ))}
            </div>
            <div className="mt-5 flex items-center justify-center gap-2">
              <Button
                className="h-10 rounded-full bg-white/80 px-4 text-slate-900 ring-1 ring-black/5 hover:bg-white"
                onClick={() =>
                  setCarouselIndex((current) =>
                    (current - 1 + testimonials.length) % testimonials.length,
                  )
                }
              >
                Prev
              </Button>
              <Button
                className="h-10 rounded-full bg-white/80 px-4 text-slate-900 ring-1 ring-black/5 hover:bg-white"
                onClick={() => setCarouselIndex((current) => (current + 1) % testimonials.length)}
              >
                Next
              </Button>
            </div>
          </SoftCard>
        </section>

        <section className="mx-auto max-w-6xl px-5 pb-14 sm:px-8">
          <SoftCard className="p-8 sm:p-10">
            <div className="grid gap-8 md:grid-cols-[1fr_340px] md:items-center">
              <div className="flex items-center gap-3">
                <span className="grid size-11 place-items-center rounded-[18px] bg-white/70 ring-1 ring-black/5">
                  <Lock className="size-5 text-slate-700" />
                </span>
                <div>
                  <div className="font-display text-[22px] tracking-tight">
                    Privacy, you&apos;re in control
                  </div>
                  <div className="text-sm text-slate-600">
                    我们不会把你导向复杂设置；默认就应该是克制、透明、可选择。
                  </div>
                </div>
              </div>
              <div className="rounded-[26px] bg-white/70 p-6 ring-1 ring-black/5">
                <div className="text-xs text-slate-500">What you can do</div>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  {[
                    '选择你愿意同步的内容',
                    '快速清理与导出',
                    '对每个连接做权限提示',
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 size-1.5 rounded-full bg-slate-900/70" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </SoftCard>
        </section>

        <section id="newsletter" className="mx-auto max-w-6xl px-5 pb-20 sm:px-8">
          <SoftCard className="p-8 sm:p-10">
            <div className="grid gap-10 md:grid-cols-[1fr_420px] md:items-center">
              <div>
                <h3 className="font-display text-[38px] leading-[1.05] tracking-tight">
                  Thank you!
                  <br />
                  You&apos;re in.
                </h3>
                <p className="mt-4 max-w-lg text-[15px] leading-7 text-slate-600">
                  You can be involved by following Dona on Twitter and joining our discord server.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button
                    className="h-11 rounded-full bg-slate-950 px-5 text-white hover:bg-slate-900"
                    onClick={() => window.open('https://twitter.com/getdona', '_blank')}
                  >
                    <Twitter className="size-4" /> Follow us on Twitter
                  </Button>
                  <Button
                    className="h-11 rounded-full bg-white/70 px-5 text-slate-900 ring-1 ring-black/5 hover:bg-white"
                    onClick={() => window.open('https://discord.com', '_blank')}
                  >
                    <MessageCircle className="size-4" /> Join our Discord community
                  </Button>
                </div>
              </div>
              <form
                onSubmit={(event) => {
                  event.preventDefault()
                  const input = document.getElementById('email') as HTMLInputElement | null
                  if (input) input.value = ''
                }}
                className="rounded-[26px] bg-white/70 p-6 ring-1 ring-black/5 shadow-[0_30px_90px_rgba(2,8,23,0.10)]"
              >
                <label className="text-sm font-medium" htmlFor="email">
                  Join our newsletter
                </label>
                <div className="mt-3 flex gap-2">
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="h-11 ring-1 ring-black/5"
                  />
                  <Button
                    type="submit"
                    className="h-11 rounded-full bg-slate-950 px-5 text-white hover:bg-slate-900"
                  >
                    Join
                  </Button>
                </div>
                <p className="mt-3 text-xs text-slate-500">
                  This is a static demo; the form won&apos;t submit anything.
                </p>
              </form>
            </div>
          </SoftCard>
        </section>
      </main>

      <footer className="mx-auto max-w-6xl px-5 pb-14 sm:px-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-sm text-slate-500">{new Date().getFullYear()} Dona.</div>
          <div className="flex items-center gap-6 text-sm">
            <a
              className="text-slate-600 hover:text-slate-900"
              href="https://dona.ai/terms-of-service"
              target="_blank"
              rel="noreferrer"
            >
              Terms of Service
            </a>
            <a
              className="text-slate-600 hover:text-slate-900"
              href="https://dona.ai/privacy-policy"
              target="_blank"
              rel="noreferrer"
            >
              Privacy policy
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
