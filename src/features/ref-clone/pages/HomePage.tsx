import { useState } from 'react'
import { ArrowRight, Lock, Sparkles } from 'lucide-react'
import { Link } from '@tanstack/react-router'
import {
  Button,
  CloneHeader,
  Dialog,
  Input,
  SoftCard,
  TestimonialCard,
} from '../components/Primitives'
import { useSiteLocale } from '../lib/siteLocale'

const homeCopy = {
  en: {
    badge: 'Family Execution System',
    heroTitle: 'A calm operating layer for modern households.',
    heroBody:
      'AstraFlow builds household context over time, routes work through personalized AI Agents, and turns fragmented family information into coordinated outcomes.',
    primaryCta: 'Join the waitlist',
    secondaryCta: 'Read the blog',
    aboutTitle: 'About AstraFlow',
    aboutBody:
      'AstraFlow is building the Family Execution System for modern households. The product narrative follows the latest BP and focuses on calm, reliable execution rather than chat-first novelty.',
    sectionsTitle: 'What AstraFlow makes possible',
    sections: [
      {
        title: 'Persistent household context',
        body: 'Unify tasks, schedules, reminders, health signals, and family decisions into a shared operating memory.',
      },
      {
        title: 'Personalized AI Agents',
        body: 'Each family member gets an agent with identity, memory scope, permissions, and the right level of initiative.',
      },
      {
        title: 'EaseFlows',
        body: 'Turn repeat household coordination into reusable execution methods with clear triggers, escalations, and outcome metrics.',
      },
    ],
    trustTitle: 'Trust by design',
    trustBody:
      'High-risk actions stay permissioned. Context remains explainable, reviewable, and deletable. The default experience should feel restrained, not noisy.',
    trustBullets: [
      'Least-privilege actions for every workflow',
      'Clear confirmation points before sensitive execution',
      'Auditable household context instead of opaque memory',
    ],
    newsletterTitle: 'Stay close to the rollout',
    newsletterBody:
      'We are sharing product notes, household execution patterns, and launch updates as AstraFlow evolves.',
    newsletterNote: 'Static form for now. Submission storage is not in scope for this change.',
    emailPlaceholder: 'Enter your email',
    submit: 'Request access',
    testimonialsTitle: 'Signals we optimize for',
    testimonials: [
      {
        quote:
          'The strongest idea here is not another assistant. It is an execution system that reduces household coordination overhead.',
        name: 'Product Advisor',
        role: 'Consumer AI',
      },
      {
        quote:
          'AstraFlow feels calm and opinionated. It frames trust and follow-through as product primitives, not polish.',
        name: 'Early Design Partner',
        role: 'Family Ops',
      },
    ],
  },
  zh: {
    badge: 'Family Execution System',
    heroTitle: '为现代家庭打造的冷静执行层。',
    heroBody:
      'AstraFlow 持续构建家庭上下文，通过个性化 AI Agents 路由事务，把碎片信息转成可协同推进的结果。',
    primaryCta: '加入等待名单',
    secondaryCta: '阅读博客',
    aboutTitle: '关于 AstraFlow / 星绪',
    aboutBody:
      'AstraFlow 正在构建面向现代家庭的 Family Execution System。这里的品牌叙事已经对齐最新 BP，强调冷静、可靠、能推进，而不是停留在聊天式演示。',
    sectionsTitle: 'AstraFlow 想解决什么',
    sections: [
      {
        title: '持续运行的家庭上下文',
        body: '把任务、日历、提醒、健康信号和家庭决策统一进同一个执行记忆层。',
      },
      {
        title: '个性化 AI Agents',
        body: '每个家庭成员拥有自己的 Agent，具备身份、权限、记忆边界和合适的主动性。',
      },
      {
        title: 'EaseFlows',
        body: '把重复发生的家庭协同沉淀为可复用的执行方法，包含触发器、升级机制和结果指标。',
      },
    ],
    trustTitle: '把信任当成基础设施',
    trustBody:
      '高风险动作默认需要确认。上下文必须可解释、可检查、可删除。默认体验应该克制，而不是喧闹。',
    trustBullets: [
      '每个流程都遵循最小权限原则',
      '敏感执行前有明确确认节点',
      '家庭上下文可审计，而不是黑箱记忆',
    ],
    newsletterTitle: '持续关注产品发布',
    newsletterBody: '我们会持续发布产品更新、家庭执行方法和 AstraFlow 的最新进展。',
    newsletterNote: '当前表单仍是静态占位，本次改动不包含后端入库。',
    emailPlaceholder: '输入你的邮箱',
    submit: '申请体验',
    testimonialsTitle: '我们优先优化的信号',
    testimonials: [
      {
        quote:
          '这不是另一个助手，而是一个能显著降低家庭协调成本的执行系统。',
        name: '产品顾问',
        role: 'Consumer AI',
      },
      {
        quote:
          'AstraFlow 给人的感觉是克制且有判断力。它把 trust 和 follow-through 直接当成产品原语。',
        name: '早期设计伙伴',
        role: 'Family Ops',
      },
    ],
  },
} as const

export function HomePage() {
  const [aboutOpen, setAboutOpen] = useState(false)
  const { locale } = useSiteLocale()
  const copy = homeCopy[locale]

  return (
    <div className="min-h-screen bg-astraflow text-slate-950">
      <div id="top" className="absolute top-0" />
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_700px_at_50%_-120px,rgba(14,165,233,0.22),transparent_55%),radial-gradient(900px_600px_at_80%_10%,rgba(59,130,246,0.18),transparent_55%),linear-gradient(to_bottom,rgba(255,255,255,1),rgba(248,250,252,1))]" />
        <div className="absolute inset-0 bg-astraflow-noise opacity-[0.18] mix-blend-multiply" />
      </div>

      <CloneHeader
        onAbout={() => setAboutOpen(true)}
        onGetStarted={() =>
          document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })
        }
      />

      <Dialog open={aboutOpen} onClose={() => setAboutOpen(false)} title={copy.aboutTitle}>
        <div className="text-sm leading-7 text-slate-600">{copy.aboutBody}</div>
      </Dialog>

      <main>
        <section className="relative overflow-hidden">
          <div className="mx-auto flex min-h-[calc(100vh-7.5rem)] max-w-6xl flex-col justify-center px-5 pb-24 pt-10 sm:px-8 sm:pb-28">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/60 px-4 py-2 text-xs text-slate-600 ring-1 ring-black/5">
                <Sparkles className="size-3.5" />
                {copy.badge}
              </div>

              <h1 className="mt-6 font-display text-[54px] leading-[1.02] tracking-tight sm:text-[84px]">
                {copy.heroTitle}
              </h1>

              <p className="mt-5 max-w-2xl text-[16px] leading-8 text-slate-600">
                {copy.heroBody}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button
                  className="h-11 rounded-full bg-slate-950 px-7 text-white shadow-[0_22px_70px_rgba(2,8,23,0.22)] hover:bg-slate-900"
                  onClick={() =>
                    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })
                  }
                >
                  {copy.primaryCta}
                </Button>
                <Link to="/blog" className="inline-flex no-underline">
                  <Button className="h-11 rounded-full bg-white/70 px-6 text-slate-900 ring-1 ring-black/5 shadow-[0_18px_60px_rgba(2,8,23,0.10)] hover:bg-white">
                    {copy.secondaryCta} <ArrowRight className="size-4" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <SoftCard className="p-7 sm:p-8">
                <div className="grid gap-4 sm:grid-cols-3">
                  {copy.sections.map((section) => (
                    <div key={section.title} className="rounded-[22px] bg-white/80 p-5 ring-1 ring-black/5">
                      <div className="font-display text-[20px] tracking-tight">{section.title}</div>
                      <p className="mt-3 text-sm leading-7 text-slate-600">{section.body}</p>
                    </div>
                  ))}
                </div>
              </SoftCard>

              <SoftCard className="p-7 sm:p-8">
                <div className="flex items-center gap-3">
                  <span className="grid size-11 place-items-center rounded-[18px] bg-white/70 ring-1 ring-black/5">
                    <Lock className="size-5 text-slate-700" />
                  </span>
                  <div>
                    <div className="font-display text-[24px] tracking-tight">{copy.trustTitle}</div>
                    <p className="mt-2 text-sm leading-7 text-slate-600">{copy.trustBody}</p>
                  </div>
                </div>
                <ul className="mt-6 space-y-3 text-sm text-slate-700">
                  {copy.trustBullets.map((item) => (
                    <li key={item} className="flex gap-3 rounded-[18px] bg-white/80 px-4 py-3 ring-1 ring-black/5">
                      <span className="mt-2 size-1.5 rounded-full bg-sky-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </SoftCard>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 pb-8 sm:px-8">
          <SoftCard className="p-8 sm:p-10">
            <div>
              <h2 className="font-display text-[30px] tracking-tight sm:text-[36px]">
                {copy.testimonialsTitle}
              </h2>
            </div>
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {copy.testimonials.map((testimonial) => (
                <TestimonialCard
                  key={testimonial.name}
                  quote={testimonial.quote}
                  name={testimonial.name}
                  role={testimonial.role}
                />
              ))}
            </div>
          </SoftCard>
        </section>

        <section id="waitlist" className="mx-auto max-w-6xl px-5 pb-20 sm:px-8">
          <SoftCard className="p-8 sm:p-10">
            <div className="grid gap-10 md:grid-cols-[1fr_420px] md:items-center">
              <div>
                <h3 className="font-display text-[38px] leading-[1.05] tracking-tight">
                  {copy.newsletterTitle}
                </h3>
                <p className="mt-4 max-w-lg text-[15px] leading-7 text-slate-600">
                  {copy.newsletterBody}
                </p>
              </div>
              <form
                onSubmit={(event) => {
                  event.preventDefault()
                  const input = document.getElementById('email') as HTMLInputElement | null
                  if (input) {
                    input.value = ''
                  }
                }}
                className="rounded-[26px] bg-white/70 p-6 ring-1 ring-black/5 shadow-[0_30px_90px_rgba(2,8,23,0.10)]"
              >
                <label className="text-sm font-medium" htmlFor="email">
                  AstraFlow / 星绪
                </label>
                <div className="mt-3 flex gap-2">
                  <Input
                    id="email"
                    type="email"
                    placeholder={copy.emailPlaceholder}
                    className="h-11 ring-1 ring-black/5"
                  />
                  <Button
                    type="submit"
                    className="h-11 rounded-full bg-slate-950 px-5 text-white hover:bg-slate-900"
                  >
                    {copy.submit}
                  </Button>
                </div>
                <p className="mt-3 text-xs text-slate-500">{copy.newsletterNote}</p>
              </form>
            </div>
          </SoftCard>
        </section>
      </main>
    </div>
  )
}
