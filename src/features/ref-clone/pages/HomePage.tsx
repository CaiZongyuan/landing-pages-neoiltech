import { useState } from 'react'
import {
  ArrowRight,
  Bot,
  Check,
  ChevronDown,
  ShieldCheck,
  Sparkles,
  Waypoints,
} from 'lucide-react'
import { Link } from '@tanstack/react-router'
import { cn } from '#/lib/utils'
import {
  Button,
  CloneHeader,
  Input,
  SoftCard,
  type HeaderNavItem,
} from '../components/Primitives'
import { useSiteLocale } from '../lib/siteLocale'

const waitlistSuccessAuditCopy = 'We will share the next product notes and access updates here.'

const homeCopy = {
  en: {
    heroBadge: 'Family Execution System',
    heroTitle: 'AstraFlow turns family coordination into visible execution.',
    heroBody:
      'Most households do not fail because they lack information. They fail because one person quietly carries the routing, remembering, and follow-through for everyone else.',
    heroBodyAlt:
      'AstraFlow is not another family assistant. It is a Family Execution System powered by personalized AI Agents, a persistent Household Gateway, and outcome-oriented EaseFlows.',
    primaryCta: 'Join the waitlist',
    secondaryCta: 'Read the blog',
    showcaseLabel: 'Household Gateway',
    showcaseTitle: 'One calm surface for context, routing, and follow-through.',
    showcaseBody:
      'Instead of scattering the household across chats, calendars, screenshots, and memory, AstraFlow gives families an operating layer that can hold context and move work forward.',
    showcaseLoop: 'Capture → Structure → Route → Execute → Follow Through → Reflect → Build Context',
    showcasePanels: [
      { label: 'Today', value: '3 priorities', note: 'School conflict, care follow-up, meal planning' },
      { label: 'Agents', value: '4 roles', note: 'Operator, parent, child, care' },
      { label: 'EaseFlows', value: 'Reusable', note: 'Outcome-oriented methods, not feature fragments' },
    ],
    whyTitle: 'Why now',
    whyBody:
      'The missing piece is execution ownership. Families already have chat, calendars, reminders, and point tools. What they do not have is a system that owns who should act, what is blocked, and what needs escalation.',
    whyCards: [
      {
        title: 'Invisible household labor still sits on one person',
        body: 'The household operator remains the system of last resort for remembering, nudging, checking, and cleaning up what everyone else misses.',
      },
      {
        title: 'Current tools solve slices, not the full loop',
        body: 'Messaging, to-dos, and vertical apps each handle one surface. None of them route work and follow through to outcomes.',
      },
    ],
    compareTitle: 'Without AstraFlow',
    compareBody:
      'Information fragments pile up. Priorities drift. The household depends on one person’s mental overhead to keep everything moving.',
    withTitle: 'With AstraFlow',
    withBody:
      'Family context becomes structured, routed, permission-aware, and visible. The system compounds methods instead of repeating rescue work.',
    workflowTitle: 'How AstraFlow works',
    workflowBody:
      'AstraFlow builds family context over time, routes work to the right agent, confirms sensitive actions, and keeps refining the operating loop through EaseFlows.',
    workflowSteps: [
      {
        title: 'Capture + Structure',
        body: 'Household Gateway gathers the signals a family actually lives in.',
      },
      {
        title: 'Route to the right agent',
        body: 'Personalized AI Agents understand identity, permissions, and priorities.',
      },
      {
        title: 'Execute with control',
        body: 'High-risk work stays permissioned. Routine coordination moves forward without chaos.',
      },
    ],
    principlesTitle: 'Built like infrastructure, not assistant theater',
    principles: [
      'Household Gateway',
      'Personalized AI Agents',
      'EaseFlows',
      'Auditable family context',
      'Permissioned execution',
      'Human confirmation on sensitive work',
    ],
    faqTitle: 'Frequently asked before you trust a system like this',
    faqBody:
      'For families, the real questions are about boundaries, ownership, and whether the system can actually help under pressure.',
    faqs: [
      {
        question: 'Why not another family assistant?',
        answer:
          'Because the missing piece is execution ownership. Families do not need another interface that talks. They need a system that routes work, keeps state, and follows through.',
      },
      {
        question: 'What makes personalized AI Agents necessary?',
        answer:
          'Families have different roles, permissions, memory boundaries, and goals. A single generic agent cannot safely decide who should see or do what.',
      },
      {
        question: 'How do you handle sensitive actions?',
        answer:
          'AstraFlow treats sensitive work as permissioned execution. High-risk actions stay reviewable, traceable, and gated behind confirmation.',
      },
      {
        question: 'What happens when a household already has tools in place?',
        answer:
          'AstraFlow acts as the operating layer above those tools. It structures signals, routes action, and compounds the family’s working methods over time.',
      },
    ],
    mobileMenuTitle: 'Navigation',
    closeMenuLabel: 'Close menu',
    navLabels: {
      whyNow: 'Why now',
      workflow: 'How it works',
      faq: 'FAQ',
      blog: 'Blog',
    },
    waitlistTitle: 'Bring less invisible labor into every week.',
    waitlistBody:
      'Join the list for product notes, operating-loop previews, and early access updates as AstraFlow moves from concept to real household workflows.',
    waitlistBenefits: [
      'Early product notes grounded in the BP',
      'New EaseFlow previews',
      'Updates when guided pilots open',
    ],
    emailLabel: 'Work email',
    emailPlaceholder: 'ada@household.com',
    submit: 'Request early access',
    successNote: waitlistSuccessAuditCopy,
    footerKicker: 'A calm Family Execution System',
    footerBody:
      'Built for households that need more than fragmented tools, reminders, and invisible coordination labor.',
    footerLinks: [
      { label: 'Blog', to: '/blog' },
      { label: 'Why now', action: 'why-now' },
      { label: 'FAQ', action: 'faq' },
    ],
  },
  zh: {
    heroBadge: 'Family Execution System',
    heroTitle: 'AstraFlow 把家庭协作从“记得很多”变成“推进结果”。',
    heroBody:
      '多数家庭真正的问题不是缺信息，而是总有一个人默默承担路由、记忆、催办和兜底。家庭越复杂，这种隐形劳动越重。',
    heroBodyAlt:
      'AstraFlow 不是另一个家庭助手，而是一个 Family Execution System。它通过 personalized AI Agents、持续运行的 Household Gateway 与 EaseFlows，把家庭信息转成可交付结果。',
    primaryCta: '加入等待名单',
    secondaryCta: '阅读博客',
    showcaseLabel: 'Household Gateway',
    showcaseTitle: '一个更冷静的界面，承接上下文、路由和 follow-through。',
    showcaseBody:
      'AstraFlow 不是把家庭拆散在聊天、日历、截图和记忆里，而是提供一个能真正持有上下文并推动事务向前的操作层。',
    showcaseLoop: 'Capture → Structure → Route → Execute → Follow Through → Reflect → Build Context',
    showcasePanels: [
      { label: 'Today', value: '3 个重点', note: '学校冲突、照护跟进、餐食计划' },
      { label: 'Agents', value: '4 个角色', note: 'Operator、parent、child、care' },
      { label: 'EaseFlows', value: '可复用', note: '面向结果的方法，而不是零散功能' },
    ],
    whyTitle: '为什么是现在',
    whyBody:
      '真正缺的不是更多工具，而是 execution ownership。家庭已经有聊天、日历、提醒和点状应用，却没有一个系统真正负责谁该做、卡在哪里、何时升级。',
    whyCards: [
      {
        title: '家庭组织者的隐形劳动仍然压在一个人身上',
        body: '总有人在默默记住信息、协调冲突、追进度、补最后一棒，这部分劳动长期缺少系统支撑。',
      },
      {
        title: '现有工具只能解决局部，不解决全链路',
        body: '消息、待办和垂类应用都各管一段，但没有一个系统真正路由动作并跟进到结果。',
      },
    ],
    compareTitle: '没有 AstraFlow',
    compareBody:
      '信息碎片堆积，优先级漂移，家庭运行持续依赖某个人脑内的协调成本。',
    withTitle: '有 AstraFlow',
    withBody:
      '家庭上下文被结构化、可路由、带权限感知并保持可见，系统会不断沉淀方法，而不是反复人工救火。',
    workflowTitle: 'AstraFlow 如何工作',
    workflowBody:
      'AstraFlow 持续积累 family context，把事务路由给合适的 agent，在敏感动作前保留确认，并通过 EaseFlows 不断收紧执行闭环。',
    workflowSteps: [
      {
        title: 'Capture + Structure',
        body: 'Household Gateway 接住家庭真正生活其中的各种信号。',
      },
      {
        title: 'Route to the right agent',
        body: 'Personalized AI Agents 理解身份、权限、优先级和下一步责任归属。',
      },
      {
        title: 'Execute with control',
        body: '高风险动作保持确认，常规协作则在低打扰前提下向前推进。',
      },
    ],
    principlesTitle: '它更像基础设施，而不是助手表演',
    principles: [
      'Household Gateway',
      'Personalized AI Agents',
      'EaseFlows',
      'Auditable family context',
      'Permissioned execution',
      'Human confirmation on sensitive work',
    ],
    faqTitle: '在你愿意信任这种系统之前，应该先问的问题',
    faqBody:
      '对家庭来说，真正重要的是边界、责任和在真实压力下它是否真的有用。',
    faqs: [
      {
        question: '为什么不是另一个家庭助手？',
        answer:
          '因为真正缺的是 execution ownership。家庭不需要另一个只会说话的界面，而是一个能路由事务、保持状态并跟进到结果的系统。',
      },
      {
        question: '为什么一定要 personalized AI Agents？',
        answer:
          '家庭成员有不同角色、权限、记忆边界和目标。一个通用 agent 很难安全地判断谁该看什么、做什么、确认什么。',
      },
      {
        question: '敏感动作如何控制？',
        answer:
          'AstraFlow 把敏感动作视为 permissioned execution。高风险步骤必须可追溯、可回看，并被明确确认。',
      },
      {
        question: '如果家庭已经有很多工具怎么办？',
        answer:
          'AstraFlow 是这些工具之上的 operating layer。它结构化信号、路由动作，并让家庭方法持续复利。',
      },
    ],
    mobileMenuTitle: '导航',
    closeMenuLabel: '关闭菜单',
    navLabels: {
      whyNow: '为什么是现在',
      workflow: '如何工作',
      faq: 'FAQ',
      blog: '博客',
    },
    waitlistTitle: '让每周少一点隐形劳动，多一点真正推进。',
    waitlistBody:
      '加入名单后，我们会分享产品笔记、operating-loop 预览和早期访问更新，持续展示 AstraFlow 如何走向真实家庭工作流。',
    waitlistBenefits: ['基于 BP 的产品笔记', '新的 EaseFlow 预览', 'guided pilot 开放通知'],
    emailLabel: 'Work email',
    emailPlaceholder: 'ada@household.com',
    submit: '申请早期访问',
    successNote: '我们会通过这个入口持续发送下一批产品笔记与访问更新。',
    footerKicker: '一个冷静的 Family Execution System',
    footerBody:
      '服务于需要真正执行闭环的现代家庭，而不是继续把协调压力留给某一个人。',
    footerLinks: [
      { label: '博客', to: '/blog' },
      { label: '为什么是现在', action: 'why-now' },
      { label: 'FAQ', action: 'faq' },
    ],
  },
} as const

function SectionEyebrow({ children }: { children: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-white/74 px-4 py-2 text-[11px] uppercase tracking-[0.2em] text-slate-500 ring-1 ring-black/5">
      <Sparkles className="size-3.5" />
      <span>{children}</span>
    </div>
  )
}

export function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeFaq, setActiveFaq] = useState(0)
  const [email, setEmail] = useState('')
  const [waitlistState, setWaitlistState] = useState<'idle' | 'pending' | 'success'>('idle')
  const { locale } = useSiteLocale()
  const copy = homeCopy[locale]

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setMobileMenuOpen(false)
  }

  const navItems: HeaderNavItem[] = [
    { label: copy.navLabels.whyNow, onClick: () => scrollToSection('why-now') },
    { label: copy.navLabels.workflow, onClick: () => scrollToSection('workflow') },
    { label: copy.navLabels.faq, onClick: () => scrollToSection('faq') },
    { label: copy.navLabels.blog, to: '/blog' },
  ]

  return (
    <div className="min-h-screen bg-astraflow text-slate-950">
      <div id="top" className="absolute top-0" />
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_720px_at_50%_-120px,rgba(14,165,233,0.22),transparent_55%),radial-gradient(900px_680px_at_88%_10%,rgba(59,130,246,0.16),transparent_58%),linear-gradient(to_bottom,rgba(255,255,255,1),rgba(245,248,251,1))]" />
        <div className="absolute inset-0 bg-astraflow-noise opacity-[0.12] mix-blend-multiply" />
      </div>

      <CloneHeader
        navItems={navItems}
        actionLabel={copy.primaryCta}
        onGetStarted={() => scrollToSection('waitlist')}
        mobileMenuOpen={mobileMenuOpen}
        onToggleMobileMenu={() => setMobileMenuOpen(true)}
        onCloseMobileMenu={() => setMobileMenuOpen(false)}
        mobileMenuTitle={copy.mobileMenuTitle}
        closeMenuLabel={copy.closeMenuLabel}
      />

      <main>
        <section className="px-5 pb-24 pt-16 sm:px-8 sm:pb-32 sm:pt-24">
          <div className="mx-auto max-w-5xl text-center">
            <SectionEyebrow>{copy.heroBadge}</SectionEyebrow>
            <h1 className="mx-auto mt-8 max-w-4xl font-display text-[50px] leading-[0.94] tracking-tight sm:text-[78px] lg:text-[96px]">
              {copy.heroTitle}
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-[17px] leading-8 text-slate-700">{copy.heroBody}</p>
            <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-7 text-slate-600">{copy.heroBodyAlt}</p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <Button
                className="h-12 rounded-full bg-slate-950 px-7 text-sm text-white shadow-[0_20px_60px_rgba(2,8,23,0.18)] hover:bg-slate-900"
                onClick={() => scrollToSection('waitlist')}
              >
                {copy.primaryCta}
              </Button>
              <Link to="/blog" className="inline-flex no-underline">
                <Button className="h-12 rounded-full bg-white/80 px-6 text-sm text-slate-900 ring-1 ring-black/5 hover:bg-white">
                  {copy.secondaryCta} <ArrowRight className="size-4" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="mx-auto mt-18 max-w-5xl sm:mt-24">
            <div className="rounded-[36px] bg-[linear-gradient(180deg,rgba(16,32,54,1),rgba(28,49,78,0.96))] p-3 shadow-[0_34px_120px_rgba(2,8,23,0.22)] ring-1 ring-black/10 sm:p-5">
              <div className="overflow-hidden rounded-[28px] bg-[radial-gradient(120%_100%_at_50%_0%,rgba(103,232,249,0.12),transparent_50%),linear-gradient(180deg,rgba(240,248,255,0.98),rgba(228,238,246,0.96))]">
                <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
                  <div>
                    <div className="inline-flex rounded-full bg-slate-950 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-slate-100">
                      {copy.showcaseLabel}
                    </div>
                    <div className="mt-5 font-display text-[34px] leading-[0.98] tracking-tight text-slate-950 sm:text-[46px]">
                      {copy.showcaseTitle}
                    </div>
                    <p className="mt-4 max-w-xl text-[15px] leading-7 text-slate-600">{copy.showcaseBody}</p>
                    <div className="mt-7 rounded-[24px] bg-slate-950 px-5 py-5 text-left text-white shadow-[0_24px_70px_rgba(2,8,23,0.18)]">
                      <div className="text-[11px] uppercase tracking-[0.18em] text-slate-400">Operating loop</div>
                      <div className="mt-3 font-display text-[24px] leading-tight tracking-tight">
                        {copy.showcaseLoop}
                      </div>
                    </div>
                  </div>

                  <div className="rounded-[26px] bg-white/76 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] ring-1 ring-black/6">
                    <div className="rounded-[22px] bg-white p-4 ring-1 ring-black/5">
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <div className="font-display text-[22px] tracking-tight text-slate-950">
                            Household Gateway
                          </div>
                          <div className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-400">
                            EaseFlows
                          </div>
                        </div>
                        <div className="rounded-full bg-sky-100 px-3 py-1 text-xs text-sky-700">
                          Active
                        </div>
                      </div>

                      <div className="mt-5 grid gap-3">
                        {copy.showcasePanels.map((panel) => (
                          <div
                            key={panel.label}
                            className="rounded-[18px] bg-slate-50 px-4 py-4 ring-1 ring-black/5"
                          >
                            <div className="flex items-center justify-between gap-3">
                              <div className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                                {panel.label}
                              </div>
                              <div className="font-medium text-slate-900">{panel.value}</div>
                            </div>
                            <div className="mt-2 text-sm leading-6 text-slate-600">{panel.note}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="why-now" className="px-5 py-18 sm:px-8 sm:py-24">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <SectionEyebrow>{copy.whyTitle}</SectionEyebrow>
                <h2 className="mt-6 font-display text-[34px] leading-[1.02] tracking-tight sm:text-[44px]">
                  {copy.whyTitle}
                </h2>
                <p className="mt-5 max-w-xl text-[15px] leading-7 text-slate-600">{copy.whyBody}</p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {copy.whyCards.map((card) => (
                  <SoftCard key={card.title} className="p-6 sm:p-7">
                    <div className="font-display text-[24px] leading-[1.04] tracking-tight">{card.title}</div>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{card.body}</p>
                  </SoftCard>
                ))}
              </div>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              <SoftCard className="p-7 sm:p-8">
                <div className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                  {copy.compareTitle}
                </div>
                <div className="mt-4 font-display text-[30px] leading-[1.02] tracking-tight">
                  {copy.compareTitle}
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-600">{copy.compareBody}</p>
              </SoftCard>
              <SoftCard className="p-7 sm:p-8">
                <div className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                  {copy.withTitle}
                </div>
                <div className="mt-4 font-display text-[30px] leading-[1.02] tracking-tight">
                  {copy.withTitle}
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-600">{copy.withBody}</p>
              </SoftCard>
            </div>
          </div>
        </section>

        <section id="workflow" className="px-5 py-18 sm:px-8 sm:py-24">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
              <div>
                <SectionEyebrow>{copy.workflowTitle}</SectionEyebrow>
                <h2 className="mt-6 font-display text-[34px] leading-[1.02] tracking-tight sm:text-[44px]">
                  {copy.workflowTitle}
                </h2>
                <p className="mt-5 max-w-xl text-[15px] leading-7 text-slate-600">{copy.workflowBody}</p>
              </div>

              <div className="grid gap-4">
                {copy.workflowSteps.map((step, index) => (
                  <SoftCard key={step.title} className="p-6 sm:p-7">
                    <div className="flex gap-4">
                      <div className="grid size-12 flex-none place-items-center rounded-[18px] bg-slate-950 text-sm font-semibold text-white">
                        0{index + 1}
                      </div>
                      <div>
                        <div className="font-display text-[24px] tracking-tight">{step.title}</div>
                        <p className="mt-2 text-sm leading-7 text-slate-600">{step.body}</p>
                      </div>
                    </div>
                  </SoftCard>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 py-18 sm:px-8 sm:py-24">
          <div className="mx-auto max-w-5xl">
            <SoftCard className="p-8 sm:p-10">
              <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
                <div>
                  <SectionEyebrow>{copy.principlesTitle}</SectionEyebrow>
                  <h2 className="mt-6 font-display text-[34px] leading-[1.02] tracking-tight sm:text-[44px]">
                    {copy.principlesTitle}
                  </h2>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {copy.principles.map((item, index) => (
                    <div
                      key={item}
                      className={cn(
                        'flex items-center gap-3 rounded-[20px] px-4 py-4 ring-1 ring-black/5',
                        index === 0
                          ? 'bg-slate-950 text-white'
                          : 'bg-white/80 text-slate-700',
                      )}
                    >
                      <span
                        className={cn(
                          'grid size-8 place-items-center rounded-full',
                          index === 0 ? 'bg-white/12 text-white' : 'bg-slate-100 text-slate-700',
                        )}
                      >
                        {index < 3 ? (
                          <Waypoints className="size-4" />
                        ) : index < 5 ? (
                          <ShieldCheck className="size-4" />
                        ) : (
                          <Bot className="size-4" />
                        )}
                      </span>
                      <span className="text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </SoftCard>
          </div>
        </section>

        <section id="faq" className="px-5 py-18 sm:px-8 sm:py-24">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
              <div>
                <SectionEyebrow>FAQ</SectionEyebrow>
                <h2 className="mt-6 font-display text-[34px] leading-[1.02] tracking-tight sm:text-[44px]">
                  {copy.faqTitle}
                </h2>
                <p className="mt-5 max-w-xl text-[15px] leading-7 text-slate-600">{copy.faqBody}</p>
              </div>

              <div className="grid gap-3">
                {copy.faqs.map((faq, index) => {
                  const open = activeFaq === index

                  return (
                    <div key={faq.question} className="rounded-[24px] bg-white/82 ring-1 ring-black/5 shadow-[0_18px_60px_rgba(2,8,23,0.08)]">
                      <button
                        type="button"
                        className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                        aria-expanded={open}
                        onClick={() => setActiveFaq(open ? -1 : index)}
                      >
                        <span className="font-display text-[24px] leading-[1.04] tracking-tight text-slate-950">
                          {faq.question}
                        </span>
                        <span
                          className={cn(
                            'grid size-10 flex-none place-items-center rounded-full bg-slate-100 text-slate-600 transition',
                            open && 'rotate-180 bg-slate-950 text-white',
                          )}
                        >
                          <ChevronDown className="size-4" />
                        </span>
                      </button>

                      {open ? (
                        <div className="px-5 pb-6 text-sm leading-7 text-slate-600">{faq.answer}</div>
                      ) : null}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="waitlist" className="px-5 pb-24 pt-18 sm:px-8 sm:pb-28 sm:pt-24">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
              <div>
                <SectionEyebrow>{copy.primaryCta}</SectionEyebrow>
                <h2 className="mt-6 max-w-lg font-display text-[38px] leading-[0.98] tracking-tight sm:text-[52px]">
                  {copy.waitlistTitle}
                </h2>
                <p className="mt-5 max-w-xl text-[15px] leading-7 text-slate-600">{copy.waitlistBody}</p>
                <div className="mt-6 grid gap-3">
                  {copy.waitlistBenefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-3 text-sm text-slate-700">
                      <span className="grid size-7 place-items-center rounded-full bg-slate-950 text-white">
                        <Check className="size-4" />
                      </span>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[34px] bg-slate-950 p-5 shadow-[0_36px_110px_rgba(2,8,23,0.24)] sm:p-7">
                <div className="rounded-[26px] bg-[linear-gradient(180deg,rgba(255,255,255,0.1),rgba(255,255,255,0.02))] p-6 ring-1 ring-white/10">
                  <div className="text-[11px] uppercase tracking-[0.18em] text-slate-400">AstraFlow / 星绪</div>
                  <div className="mt-3 max-w-sm font-display text-[30px] leading-[1.02] tracking-tight text-white">
                    {copy.waitlistTitle}
                  </div>

                  <form
                    data-testid="waitlist-form"
                    className="mt-6"
                    onSubmit={(event) => {
                      event.preventDefault()
                      setWaitlistState('pending')

                      window.setTimeout(() => {
                        setWaitlistState('success')
                        setEmail('')
                      }, 320)
                    }}
                  >
                    <label className="block text-sm font-medium text-slate-200" htmlFor="waitlist-email">
                      {copy.emailLabel}
                    </label>
                    <div className="mt-3 flex flex-col gap-3 sm:flex-row">
                      <Input
                        id="waitlist-email"
                        type="email"
                        required
                        value={email}
                        onChange={(event) => {
                          setEmail(event.target.value)
                          if (waitlistState !== 'idle') {
                            setWaitlistState('idle')
                          }
                        }}
                        placeholder={copy.emailPlaceholder}
                        className="h-12 flex-1 border-white/15 bg-white text-slate-950"
                      />
                      <Button
                        type="submit"
                        className="h-12 rounded-full bg-white px-5 text-sm text-slate-950 hover:bg-slate-100"
                        disabled={waitlistState === 'pending' || !email.trim()}
                      >
                        {waitlistState === 'pending' ? '…' : copy.submit}
                      </Button>
                    </div>
                    <div className="mt-4 min-h-6 text-sm text-slate-300">
                      {waitlistState === 'success' ? copy.successNote : ' '}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="px-5 pb-16 pt-12 sm:px-8 sm:pb-20">
        <div className="mx-auto max-w-5xl border-t border-black/6 pt-10">
          <div className="text-[11px] uppercase tracking-[0.18em] text-slate-400">{copy.footerKicker}</div>
          <div className="mt-4 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="font-display text-[48px] leading-none tracking-tight text-slate-950 sm:text-[72px]">
                AstraFlow
              </div>
              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600">{copy.footerBody}</p>
            </div>

            <div className="grid gap-3 text-sm text-slate-600">
              {copy.footerLinks.map((item) =>
                item.to ? (
                  <Link key={item.label} to={item.to} className="no-underline transition hover:text-slate-950">
                    {item.label}
                  </Link>
                ) : (
                  <button
                    key={item.label}
                    type="button"
                    className="text-left transition hover:text-slate-950"
                    onClick={() => scrollToSection(item.action!)}
                  >
                    {item.label}
                  </button>
                ),
              )}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
