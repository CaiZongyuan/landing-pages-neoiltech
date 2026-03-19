import { useState } from 'react'
import {
  ArrowRight,
  Bot,
  Check,
  ChevronDown,
  Radar,
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
  TestimonialCard,
  type HeaderNavItem,
} from '../components/Primitives'
import { useSiteLocale } from '../lib/siteLocale'

const waitlistSuccessAuditCopy = 'We will share the next product notes and access updates here.'

const homeCopy = {
  en: {
    proofBar: [
      'Designed for high-context households',
      'Human-in-the-loop by default',
      'From signal to follow-through',
    ],
    heroEyebrow: 'Family Execution System',
    heroTitle: 'AstraFlow turns family coordination into visible execution.',
    heroBody:
      'Most households do not fail because they lack information. They fail because one person quietly carries the routing, remembering, and follow-through for everyone else.',
    heroBodyAlt:
      'AstraFlow is not another family assistant. It is a Family Execution System powered by personalized AI Agents, a persistent Household Gateway, and outcome-oriented EaseFlows.',
    primaryCta: 'Join the waitlist',
    secondaryCta: 'Read the blog',
    signalChips: ['Calm by default', 'Permission-aware execution', 'Built from family context'],
    heroStats: [
      { value: '4 layers', label: 'Gateway, Agents, Heartbeat, EaseFlows' },
      { value: '7-step loop', label: 'Capture → Structure → Route → Execute' },
      { value: '1 promise', label: 'Less invisible coordination load' },
    ],
    mockTitle: 'AstraFlow today',
    mockLead: 'A high-context operating layer for households that need more than reminders.',
    prioritiesTitle: 'Today’s execution focus',
    priorities: [
      'Route the school schedule conflict to the right parent agent',
      'Escalate the elder care follow-up before it becomes another missed task',
      'Turn this week’s meal planning into a reusable EaseFlow',
    ],
    agentTitle: 'Agent routing',
    agents: [
      { name: 'Household Operator', role: 'Cross-family routing + conflict resolution' },
      { name: 'Parent Agent', role: 'Calendar, commitments, confirmations' },
      { name: 'Care Agent', role: 'Medication, follow-up, safe escalation' },
    ],
    flowTitle: 'EaseFlow',
    flowBody:
      'Capture → Structure → Route → Execute → Follow Through → Reflect → Build Context',
    whyTitle: 'Why now',
    whyBody:
      'The problem is no longer “how do we record family life?” The real gap is execution ownership across fragmented tools, schedules, and obligations.',
    whyCards: [
      {
        title: 'Invisible household labor keeps one person overloaded',
        body: 'The household operator is still the system of last resort: remembering, nudging, checking, escalating, and absorbing the cost of every miss.',
      },
      {
        title: 'Current tools solve slices, not the full loop',
        body: 'Messaging, calendars, to-dos, and vertical apps each handle one surface. None of them owns who should act, what is blocked, and what needs escalation.',
      },
      {
        title: 'The missing piece is execution ownership',
        body: 'AstraFlow gives families a system that routes work, keeps state, and moves things to completion instead of leaving everything inside someone’s head.',
      },
    ],
    loopTitle: 'How AstraFlow works',
    loopBody:
      'AstraFlow continuously builds family context, routes decisions to the right agent, confirms sensitive actions, and compounds what the household learns over time.',
    loopSteps: [
      {
        title: 'Capture + Structure',
        body: 'Household Gateway gathers messages, schedules, notes, and context into a shared operating layer.',
      },
      {
        title: 'Route to the right agent',
        body: 'Personalized AI Agents understand identity, permissions, priorities, and which member should act next.',
      },
      {
        title: 'Execute with the right level of control',
        body: 'Sensitive steps stay permissioned. Routine coordination can move forward without chaos.',
      },
      {
        title: 'Follow through and build context',
        body: 'Each outcome sharpens future routing and turns repeated work into reusable EaseFlows.',
      },
    ],
    outcomeTitle: 'What the system is made of',
    outcomeCards: [
      {
        title: 'Household Gateway',
        body: 'A single intake layer for the signals a family actually lives in.',
      },
      {
        title: 'Personalized AI Agents',
        body: 'Each member gets an agent with identity, permissions, and memory boundaries.',
      },
      {
        title: 'Household Heartbeat',
        body: 'Daily and weekly checks keep overdue, risky, or missing work from disappearing.',
      },
      {
        title: 'EaseFlows',
        body: 'Outcome-oriented execution methods for recurring household coordination.',
      },
      {
        title: 'Auditable family context',
        body: 'Memory stays explainable, reviewable, exportable, and deletable.',
      },
      {
        title: 'Permissioned execution',
        body: 'High-risk actions require confirmation instead of fake autonomy theater.',
      },
    ],
    principleTitle: 'Without AstraFlow vs. with AstraFlow',
    principleColumns: [
      {
        title: 'Without AstraFlow',
        points: [
          'One person becomes the invisible operator for every conflict and reminder',
          'Information lives in chat fragments, calendars, screenshots, and memory',
          'Nothing owns the full loop from notice to follow-through',
        ],
      },
      {
        title: 'With AstraFlow',
        points: [
          'Family context is structured, routed, and visible across the household',
          'Agents know who should act, what needs review, and when to escalate',
          'The household keeps compounding reusable methods instead of repeating manual rescue work',
        ],
      },
    ],
    trustTitle: 'Trust is infrastructure, not polish',
    trustBody:
      'The more powerful the agent, the more it needs to behave like infrastructure: least privilege, clear confirmations, auditable memory, and calm communication.',
    trustBadges: [
      'Least-privilege actions',
      'Reviewable execution history',
      'Human confirmation on sensitive work',
    ],
    testimonialsTitle: 'Signals the product should optimize for',
    testimonials: [
      {
        quote:
          'This feels like a system that removes the hidden coordination tax, not another surface that asks families to adapt.',
        name: 'Design Partner',
        role: 'Household operations',
      },
      {
        quote:
          'The strongest idea is execution ownership. Once that lands, everything from memory to trust becomes more concrete.',
        name: 'Product Advisor',
        role: 'Consumer AI',
      },
    ],
    faqTitle: 'Frequently asked before you trust a system like this',
    faqBody: 'The right questions are about ownership, control, and whether the system actually helps under real household pressure.',
    faqs: [
      {
        question: 'Why not another family assistant?',
        answer:
          'Because the missing piece is execution ownership. Families already have chat, calendars, and reminders. What they do not have is a system that routes work, keeps state, and follows through.',
      },
      {
        question: 'What makes personalized AI Agents necessary?',
        answer:
          'Families have different roles, permissions, memory boundaries, and goals. A single generic agent cannot safely decide who should see or do what.',
      },
      {
        question: 'How do you handle sensitive actions?',
        answer:
          'AstraFlow treats sensitive work as permissioned execution. High-risk actions are reviewable, traceable, and gated behind confirmation.',
      },
      {
        question: 'What happens when a household already has tools in place?',
        answer:
          'AstraFlow is not trying to replace every app. It acts as the operating layer that structures signals, routes action, and compounds the family’s working methods over time.',
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
      'Join the list for product notes, execution patterns, and early access updates as AstraFlow moves from concept to real household workflows.',
    waitlistBenefits: [
      'Early product notes grounded in the BP',
      'New operating-loop and EaseFlow previews',
      'Access updates when the first guided pilots open',
    ],
    emailLabel: 'Work email',
    emailPlaceholder: 'ada@household.com',
    submit: 'Request early access',
    successNote: waitlistSuccessAuditCopy,
    footerBody:
      'AstraFlow is building a calm Family Execution System for households that need more than fragmented tools and reminders.',
    footerLinks: [
      { label: 'Blog', to: '/blog' },
      { label: 'Why now', action: 'why-now' },
      { label: 'FAQ', action: 'faq' },
    ],
  },
  zh: {
    proofBar: ['为高上下文家庭设计', '默认 human-in-the-loop', '从信号到结果闭环'],
    heroEyebrow: 'Family Execution System',
    heroTitle: 'AstraFlow 把家庭协作从“记得很多”变成“推进结果”。',
    heroBody:
      '多数家庭真正的问题不是缺信息，而是总有一个人默默承担路由、记忆、催办和兜底。家庭越复杂，这种隐形劳动越重。',
    heroBodyAlt:
      'AstraFlow 不是另一个家庭助手，而是一个 Family Execution System。它通过 personalized AI Agents、持续运行的 Household Gateway 与 EaseFlows，把家庭信息转成可交付结果。',
    primaryCta: '加入等待名单',
    secondaryCta: '阅读博客',
    signalChips: ['默认克制', '权限感知执行', '从家庭上下文出发'],
    heroStats: [
      { value: '4 层结构', label: 'Gateway、Agents、Heartbeat、EaseFlows' },
      { value: '7 步主循环', label: 'Capture → Structure → Route → Execute' },
      { value: '1 个目标', label: '减少隐形协调负担' },
    ],
    mockTitle: 'AstraFlow 当前主张',
    mockLead: '为需要执行闭环的现代家庭提供高上下文操作层。',
    prioritiesTitle: '今日执行重点',
    priorities: [
      '把学校日程冲突路由到合适的 parent agent',
      '在老人照护遗漏之前提前升级跟进',
      '把本周餐食计划沉淀为一个可复用的 EaseFlow',
    ],
    agentTitle: 'Agent 路由',
    agents: [
      { name: 'Household Operator', role: '跨成员协调与冲突处理' },
      { name: 'Parent Agent', role: '日历、承诺、确认动作' },
      { name: 'Care Agent', role: '用药、复查、安全升级' },
    ],
    flowTitle: 'EaseFlow',
    flowBody:
      'Capture → Structure → Route → Execute → Follow Through → Reflect → Build Context',
    whyTitle: '为什么是现在',
    whyBody:
      '现在真正的缺口已经不是“如何记录家庭生活”，而是如何对家庭事务的 execution ownership 负责，并把碎片工具组织成一个持续运行的系统。',
    whyCards: [
      {
        title: '家庭组织者的隐形劳动越来越重',
        body: '总有人在默默记住信息、协调冲突、追踪进度、补最后一棒。很多家庭其实靠一个人的脑内系统在维持运转。',
      },
      {
        title: '现有工具只能解决局部，不解决全链路',
        body: '消息、日历、待办和垂类应用都各管一段，但没有人真正判断谁该做、做到没、没做到怎么办。',
      },
      {
        title: '真正缺的是 execution ownership',
        body: 'AstraFlow 要把责任从单个人脑子里拿出来，变成一个可路由、可跟进、可复盘、可演化的执行系统。',
      },
    ],
    loopTitle: 'AstraFlow 如何工作',
    loopBody:
      'AstraFlow 持续积累 family context，把事务路由给合适的 agent，在敏感动作前保留确认，并把家庭经验不断沉淀成可复用的方法。',
    loopSteps: [
      {
        title: 'Capture + Structure',
        body: 'Household Gateway 把消息、日历、笔记和家庭上下文汇入一个统一执行层。',
      },
      {
        title: 'Route to the right agent',
        body: 'personalized AI Agents 知道身份、权限、优先级，以及下一步该由谁接手。',
      },
      {
        title: 'Execute with the right level of control',
        body: '高风险动作保持确认机制，常规协作则可以少打扰地向前推进。',
      },
      {
        title: 'Follow through and build context',
        body: '每次结果都会反哺后续路由，让重复事务逐步沉淀为 EaseFlows。',
      },
    ],
    outcomeTitle: '这个系统由什么组成',
    outcomeCards: [
      {
        title: 'Household Gateway',
        body: '统一接入家庭真正生活其中的各种信号。',
      },
      {
        title: 'Personalized AI Agents',
        body: '每个成员都有自己的 agent，具备身份、权限和记忆边界。',
      },
      {
        title: 'Household Heartbeat',
        body: '每天和每周的检查机制，避免高风险和遗漏事项悄悄消失。',
      },
      {
        title: 'EaseFlows',
        body: '面向结果的家庭执行方法，而不是零散功能插件。',
      },
      {
        title: 'Auditable family context',
        body: '上下文必须可解释、可检查、可导出、可删除。',
      },
      {
        title: 'Permissioned execution',
        body: '关键动作保留权限与确认，而不是表演式自治。',
      },
    ],
    principleTitle: '没有 AstraFlow vs. 有 AstraFlow',
    principleColumns: [
      {
        title: '没有 AstraFlow',
        points: [
          '总有一个人变成隐形操作系统，为所有冲突和提醒兜底',
          '信息散落在聊天、日历、截图和记忆里',
          '没有任何系统真正负责从发现问题到完成跟进的全链路',
        ],
      },
      {
        title: '有 AstraFlow',
        points: [
          '家庭上下文被结构化、可路由，并在全家范围内保持可见',
          'Agents 知道谁该执行、哪些动作要确认、何时需要升级',
          '家庭会不断沉淀可复用的方法，而不是反复人工救火',
        ],
      },
    ],
    trustTitle: 'Trust 不是 polish，而是基础设施',
    trustBody:
      'Agent 越强，就越要像基础设施一样被治理：最小权限、明确确认、可审计记忆和克制的沟通方式。',
    trustBadges: ['最小权限执行', '可回看的执行历史', '敏感动作必须确认'],
    testimonialsTitle: '产品应该优先优化的信号',
    testimonials: [
      {
        quote:
          '它不是再加一个界面，而是把家庭里那部分最隐形、最累的协调税拿掉。',
        name: '设计伙伴',
        role: 'Household operations',
      },
      {
        quote:
          '真正有穿透力的是 execution ownership。一旦这点成立，memory 和 trust 才会从概念变成产品。',
        name: '产品顾问',
        role: 'Consumer AI',
      },
    ],
    faqTitle: '在你愿意信任这种系统之前，应该先问的问题',
    faqBody: '对家庭来说，真正重要的问题不是 AI 会不会说，而是边界、责任和在真实压力下它是否真的能帮忙。',
    faqs: [
      {
        question: '为什么不是另一个家庭助手？',
        answer:
          '因为真正缺的不是一个会聊天的界面，而是 execution ownership。家庭已经有聊天、日历和提醒，却没有一个系统真正负责路由、跟进和完成。',
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
          'AstraFlow 不试图替换一切工具，而是成为其上的 operating layer，把信号结构化、把动作路由出去，并让家庭方法不断复利。',
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
      '加入名单后，我们会分享产品笔记、执行方法和早期访问更新，持续展示 AstraFlow 如何从概念走向真实家庭工作流。',
    waitlistBenefits: [
      '基于 BP 的早期产品笔记',
      '新的 operating loop 与 EaseFlow 预览',
      '首批 guided pilot 开放时的访问更新',
    ],
    emailLabel: 'Work email',
    emailPlaceholder: 'ada@household.com',
    submit: '申请早期访问',
    successNote: '我们会通过这个入口持续发送下一批产品笔记与访问更新。',
    footerBody:
      'AstraFlow 正在构建一个冷静、可靠、克制、能推进的 Family Execution System，服务于需要真正执行闭环的现代家庭。',
    footerLinks: [
      { label: '博客', to: '/blog' },
      { label: '为什么是现在', action: 'why-now' },
      { label: 'FAQ', action: 'faq' },
    ],
  },
} as const

function SectionEyebrow({ children }: { children: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-xs uppercase tracking-[0.18em] text-slate-500 ring-1 ring-black/5">
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
        <div className="absolute inset-0 bg-[radial-gradient(1200px_720px_at_50%_-120px,rgba(14,165,233,0.25),transparent_55%),radial-gradient(900px_700px_at_92%_8%,rgba(59,130,246,0.18),transparent_55%),linear-gradient(to_bottom,rgba(255,255,255,1),rgba(241,245,249,1))]" />
        <div className="absolute inset-0 bg-astraflow-noise opacity-[0.14] mix-blend-multiply" />
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
        <section className="relative overflow-hidden pb-12 pt-8 sm:pb-18 sm:pt-10">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="grid gap-2 text-[11px] uppercase tracking-[0.2em] text-slate-500 sm:grid-cols-3">
              {copy.proofBar.map((item, index) => (
                <div
                  key={item}
                  className="rounded-full bg-white/65 px-4 py-3 text-center ring-1 ring-black/5 animate-[rise-in_0.6s_ease-out_both]"
                  style={{ animationDelay: `${index * 120}ms` }}
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-10 grid items-center gap-8 lg:grid-cols-[1.06fr_0.94fr]">
              <div className="animate-[rise-in_0.7s_ease-out_both]">
                <SectionEyebrow>{copy.heroEyebrow}</SectionEyebrow>

                <h1 className="mt-6 max-w-4xl font-display text-[54px] leading-[0.96] tracking-tight sm:text-[76px] xl:text-[92px]">
                  {copy.heroTitle}
                </h1>

                <p className="mt-6 max-w-2xl text-[17px] leading-8 text-slate-700">{copy.heroBody}</p>
                <p className="mt-4 max-w-2xl text-[15px] leading-7 text-slate-600">{copy.heroBodyAlt}</p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Button
                    className="h-12 rounded-full bg-slate-950 px-7 text-sm text-white shadow-[0_22px_70px_rgba(2,8,23,0.20)] hover:bg-slate-900"
                    onClick={() => scrollToSection('waitlist')}
                  >
                    {copy.primaryCta}
                  </Button>
                  <Link to="/blog" className="inline-flex no-underline">
                    <Button className="h-12 rounded-full bg-white/78 px-6 text-sm text-slate-900 ring-1 ring-black/5 shadow-[0_18px_60px_rgba(2,8,23,0.10)] hover:bg-white">
                      {copy.secondaryCta} <ArrowRight className="size-4" />
                    </Button>
                  </Link>
                </div>

                <div className="mt-7 flex flex-wrap gap-2">
                  {copy.signalChips.map((item) => (
                    <div
                      key={item}
                      className="rounded-full bg-white/55 px-4 py-2 text-sm text-slate-700 ring-1 ring-black/5"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  {copy.heroStats.map((item) => (
                    <div key={item.label} className="rounded-[24px] bg-white/62 p-4 ring-1 ring-black/5">
                      <div className="font-display text-[28px] tracking-tight">{item.value}</div>
                      <div className="mt-2 text-sm leading-6 text-slate-600">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <SoftCard className="animate-[rise-in_0.82s_ease-out_both] p-6 sm:p-7">
                <div className="grid gap-4">
                  <div className="rounded-[24px] bg-slate-950 p-5 text-white shadow-[0_30px_80px_rgba(2,8,23,0.24)]">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <div className="text-xs uppercase tracking-[0.18em] text-slate-400">
                          {copy.mockTitle}
                        </div>
                        <div className="mt-2 font-display text-[28px] leading-none tracking-tight">
                          Household Gateway
                        </div>
                      </div>
                      <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-200">
                        {copy.flowTitle}
                      </span>
                    </div>
                    <p className="mt-4 text-sm leading-7 text-slate-300">{copy.mockLead}</p>
                  </div>

                  <div className="grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
                    <div className="rounded-[24px] bg-white/78 p-5 ring-1 ring-black/5">
                      <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-slate-500">
                        <Radar className="size-4" />
                        {copy.prioritiesTitle}
                      </div>
                      <div className="mt-4 grid gap-3">
                        {copy.priorities.map((item, index) => (
                          <div
                            key={item}
                            className="rounded-[20px] bg-slate-50 px-4 py-4 ring-1 ring-black/5"
                          >
                            <div className="text-xs uppercase tracking-[0.14em] text-slate-400">
                              0{index + 1}
                            </div>
                            <div className="mt-2 text-sm leading-6 text-slate-700">{item}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="grid gap-4">
                      <div className="rounded-[24px] bg-white/78 p-5 ring-1 ring-black/5">
                        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-slate-500">
                          <Bot className="size-4" />
                          {copy.agentTitle}
                        </div>
                        <div className="mt-4 space-y-3">
                          {copy.agents.map((agent) => (
                            <div
                              key={agent.name}
                              className="rounded-[18px] bg-slate-50 px-4 py-3 ring-1 ring-black/5"
                            >
                              <div className="font-medium text-slate-900">{agent.name}</div>
                              <div className="mt-1 text-sm leading-6 text-slate-600">{agent.role}</div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="rounded-[24px] bg-[linear-gradient(135deg,rgba(14,165,233,0.12),rgba(255,255,255,0.88))] p-5 ring-1 ring-black/5">
                        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-slate-500">
                          <Waypoints className="size-4" />
                          {copy.flowTitle}
                        </div>
                        <div className="mt-4 font-display text-[24px] leading-tight tracking-tight text-slate-950">
                          {copy.flowBody}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SoftCard>
            </div>
          </div>
        </section>

        <section id="why-now" className="mx-auto max-w-6xl px-5 py-8 sm:px-8 sm:py-12">
          <SoftCard className="p-8 sm:p-10">
            <SectionEyebrow>{copy.whyTitle}</SectionEyebrow>
            <div className="mt-5 grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
              <div>
                <h2 className="font-display text-[34px] leading-[1.02] tracking-tight sm:text-[42px]">
                  {copy.whyTitle}
                </h2>
                <p className="mt-4 max-w-xl text-[15px] leading-7 text-slate-600">{copy.whyBody}</p>
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                {copy.whyCards.map((card, index) => (
                  <div
                    key={card.title}
                    className="rounded-[24px] bg-white/82 p-5 ring-1 ring-black/5 animate-[rise-in_0.55s_ease-out_both]"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="font-display text-[22px] leading-[1.06] tracking-tight">{card.title}</div>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{card.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </SoftCard>
        </section>

        <section id="workflow" className="mx-auto max-w-6xl px-5 py-8 sm:px-8 sm:py-12">
          <div className="grid gap-6 lg:grid-cols-[0.94fr_1.06fr]">
            <SoftCard className="p-8 sm:p-10">
              <SectionEyebrow>{copy.loopTitle}</SectionEyebrow>
              <h2 className="mt-5 font-display text-[34px] leading-[1.02] tracking-tight sm:text-[42px]">
                {copy.loopTitle}
              </h2>
              <p className="mt-4 text-[15px] leading-7 text-slate-600">{copy.loopBody}</p>
              <div className="mt-6 rounded-[26px] bg-slate-950 px-5 py-6 text-white shadow-[0_28px_84px_rgba(2,8,23,0.22)]">
                <div className="text-xs uppercase tracking-[0.18em] text-slate-400">Operating loop</div>
                <div className="mt-3 font-display text-[28px] leading-tight tracking-tight">
                  {copy.flowBody}
                </div>
              </div>
            </SoftCard>

            <div className="grid gap-4">
              {copy.loopSteps.map((step, index) => (
                <SoftCard key={step.title} className="p-6 sm:p-7">
                  <div className="flex gap-4">
                    <div className="grid size-12 flex-none place-items-center rounded-[18px] bg-slate-950 text-sm font-semibold text-white">
                      0{index + 1}
                    </div>
                    <div>
                      <div className="font-display text-[26px] tracking-tight">{step.title}</div>
                      <p className="mt-2 text-sm leading-7 text-slate-600">{step.body}</p>
                    </div>
                  </div>
                </SoftCard>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-8 sm:px-8 sm:py-12">
          <SoftCard className="p-8 sm:p-10">
            <SectionEyebrow>{copy.outcomeTitle}</SectionEyebrow>
            <div className="mt-5 flex flex-wrap items-end justify-between gap-4">
              <h2 className="font-display text-[34px] leading-[1.02] tracking-tight sm:text-[42px]">
                {copy.outcomeTitle}
              </h2>
              <Button
                className="h-11 rounded-full bg-white/80 px-5 text-sm text-slate-900 ring-1 ring-black/5 hover:bg-white"
                onClick={() => scrollToSection('waitlist')}
              >
                {copy.primaryCta}
              </Button>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {copy.outcomeCards.map((card, index) => (
                <div
                  key={card.title}
                  className="rounded-[24px] bg-white/82 p-5 ring-1 ring-black/5 animate-[rise-in_0.6s_ease-out_both]"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <div className="font-display text-[24px] tracking-tight">{card.title}</div>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{card.body}</p>
                </div>
              ))}
            </div>
          </SoftCard>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-8 sm:px-8 sm:py-12">
          <div className="grid gap-6 lg:grid-cols-2">
            {copy.principleColumns.map((column, index) => (
              <SoftCard key={column.title} className={cn('p-8 sm:p-10', index === 1 && 'bg-white/82')}>
                <SectionEyebrow>{copy.principleTitle}</SectionEyebrow>
                <div className="mt-5 font-display text-[34px] leading-[1.02] tracking-tight sm:text-[40px]">
                  {column.title}
                </div>
                <div className="mt-6 grid gap-3">
                  {column.points.map((point) => (
                    <div key={point} className="flex gap-3 rounded-[22px] bg-white/76 px-4 py-4 ring-1 ring-black/5">
                      <span className="mt-1.5 grid size-6 flex-none place-items-center rounded-full bg-slate-950 text-white">
                        <Check className="size-3.5" />
                      </span>
                      <div className="text-sm leading-7 text-slate-700">{point}</div>
                    </div>
                  ))}
                </div>
              </SoftCard>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-8 sm:px-8 sm:py-12">
          <SoftCard className="p-8 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
              <div>
                <SectionEyebrow>{copy.trustTitle}</SectionEyebrow>
                <h2 className="mt-5 font-display text-[34px] leading-[1.02] tracking-tight sm:text-[42px]">
                  {copy.trustTitle}
                </h2>
                <p className="mt-4 max-w-xl text-[15px] leading-7 text-slate-600">{copy.trustBody}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {copy.trustBadges.map((badge) => (
                    <div
                      key={badge}
                      className="rounded-full bg-slate-950 px-4 py-2 text-sm text-white shadow-[0_16px_40px_rgba(2,8,23,0.14)]"
                    >
                      {badge}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-xs uppercase tracking-[0.18em] text-slate-500">{copy.testimonialsTitle}</div>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {copy.testimonials.map((testimonial) => (
                    <TestimonialCard
                      key={testimonial.name}
                      quote={testimonial.quote}
                      name={testimonial.name}
                      role={testimonial.role}
                    />
                  ))}
                </div>
              </div>
            </div>
          </SoftCard>
        </section>

        <section id="faq" className="mx-auto max-w-6xl px-5 py-8 sm:px-8 sm:py-12">
          <SoftCard className="p-8 sm:p-10">
            <SectionEyebrow>FAQ</SectionEyebrow>
            <div className="mt-5 grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
              <div>
                <h2 className="font-display text-[34px] leading-[1.02] tracking-tight sm:text-[42px]">
                  {copy.faqTitle}
                </h2>
                <p className="mt-4 max-w-xl text-[15px] leading-7 text-slate-600">{copy.faqBody}</p>
              </div>

              <div className="grid gap-3">
                {copy.faqs.map((faq, index) => {
                  const open = activeFaq === index

                  return (
                    <div key={faq.question} className="rounded-[24px] bg-white/80 ring-1 ring-black/5">
                      <button
                        type="button"
                        className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                        aria-expanded={open}
                        onClick={() => setActiveFaq(open ? -1 : index)}
                      >
                        <span className="font-display text-[24px] leading-[1.05] tracking-tight text-slate-950">
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
                        <div className="px-5 pb-5 text-sm leading-7 text-slate-600">{faq.answer}</div>
                      ) : null}
                    </div>
                  )
                })}
              </div>
            </div>
          </SoftCard>
        </section>

        <section id="waitlist" className="mx-auto max-w-6xl px-5 pb-22 pt-8 sm:px-8 sm:pb-24 sm:pt-12">
          <SoftCard className="overflow-visible p-8 sm:p-10">
            <div className="grid gap-10 lg:grid-cols-[0.98fr_1.02fr] lg:items-center">
              <div>
                <SectionEyebrow>{copy.primaryCta}</SectionEyebrow>
                <h2 className="mt-5 font-display text-[38px] leading-[0.98] tracking-tight sm:text-[48px]">
                  {copy.waitlistTitle}
                </h2>
                <p className="mt-4 max-w-xl text-[15px] leading-7 text-slate-600">{copy.waitlistBody}</p>
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

              <form
                data-testid="waitlist-form"
                className="rounded-[30px] bg-slate-950 p-6 text-white shadow-[0_36px_100px_rgba(2,8,23,0.24)]"
                onSubmit={(event) => {
                  event.preventDefault()
                  setWaitlistState('pending')

                  window.setTimeout(() => {
                    setWaitlistState('success')
                    setEmail('')
                  }, 320)
                }}
              >
                <div className="text-xs uppercase tracking-[0.18em] text-slate-400">AstraFlow / 星绪</div>
                <div className="mt-3 font-display text-[28px] leading-tight tracking-tight">
                  {copy.waitlistTitle}
                </div>

                <label className="mt-6 block text-sm font-medium text-slate-200" htmlFor="waitlist-email">
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
          </SoftCard>
        </section>
      </main>

      <footer className="border-t border-black/5 px-5 pb-14 pt-8 sm:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 rounded-[30px] bg-white/62 px-6 py-8 ring-1 ring-black/5 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="font-display text-[28px] tracking-tight">AstraFlow 星绪</div>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">{copy.footerBody}</p>
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
      </footer>
    </div>
  )
}
