import { useState } from 'react'
import {
  ArrowRight,
  Check,
  ChevronDown,
  ShieldCheck,
  Sparkles,
  Waypoints,
} from 'lucide-react'
import { Link } from '@tanstack/react-router'
import actOneImage from '../../../../assets/01.webp'
import actTwoImage from '../../../../assets/02.webp'
import actThreeImage from '../../../../assets/03.webp'
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

type StoryCard = {
  title: string
  body: string
}

type FaqItem = {
  question: string
  answer: string
}

type FooterLink =
  | {
      label: string
      to: string
      action?: never
    }
  | {
      label: string
      action: string
      to?: never
    }

type HomeCopy = {
  heroBadge: string
  heroTitle: string
  heroBody: string
  heroBodyAlt: string
  heroSignals: string[]
  primaryCta: string
  secondaryCta: string
  whyTitle: string
  whyBody: string
  whyCards: StoryCard[]
  act1Eyebrow: string
  act1Title: string
  act1Body: string
  act1Points: string[]
  act2Eyebrow: string
  act2Title: string
  act2Body: string
  act2Points: string[]
  principlesTitle: string
  principlesBody: string
  principles: string[]
  act3Eyebrow: string
  act3Title: string
  act3Body: string
  act3Points: string[]
  faqTitle: string
  faqBody: string
  faqs: FaqItem[]
  mobileMenuTitle: string
  closeMenuLabel: string
  navLabels: {
    whyNow: string
    worldModel: string
    faq: string
    blog: string
  }
  waitlistTitle: string
  waitlistBody: string
  waitlistBenefits: string[]
  emailLabel: string
  emailPlaceholder: string
  submit: string
  successNote: string
  footerKicker: string
  footerBody: string
  footerLinks: FooterLink[]
  imageAlts: {
    act1: string
    act2: string
    act3: string
  }
}

const homeCopy: Record<'en' | 'zh', HomeCopy> = {
  en: {
    heroBadge: 'Family Execution System',
    heroTitle: 'AstraFlow gives modern families a system that can finally hold complexity.',
    heroBody:
      'The household does not break because information is missing. It breaks because one person keeps absorbing the routing, remembering, and invisible recovery work for everyone else.',
    heroBodyAlt:
      'She carries the routing, remembering, and invisible recovery work until everyday life starts to feel like a thousand interruptions with no real owner.',
    heroSignals: ['Household CEO', 'Invisible labor made visible', 'Calm system, not another dashboard'],
    primaryCta: 'Join the waitlist',
    secondaryCta: 'Read the blog',
    whyTitle: 'Why this pressure compounds',
    whyBody:
      'Family operations break down when every signal arrives in a different format, at a different time, and only one person feels responsible for putting it all back into order.',
    whyCards: [
      {
        title: 'The burden looks composed from the outside',
        body: 'Nothing is visibly on fire. The pressure shows up as constant context switching, silent follow-up, and the need to remember what everyone else forgets.',
      },
      {
        title: 'Fragmented tools never become a household operating model',
        body: 'Chats, calendars, school notes, care reminders, and errands all exist. What is missing is a system that understands how they relate and who should own the next move.',
      },
    ],
    act1Eyebrow: 'Act 1 · Invisible Load',
    act1Title: 'The last moment before a better operating layer steps in.',
    act1Body:
      'AstraFlow starts where the pressure is real: the household operator is still standing, still composed, but already carrying too many simultaneous obligations for any human memory loop to absorb cleanly.',
    act1Points: ['School notices colliding with work meetings', 'Care reminders competing with errands and payments', 'A premium home life still running on one overloaded mind'],
    act2Eyebrow: 'Act 2 · World Model',
    act2Title: 'The system stops seeing fragments and starts understanding the family.',
    act2Body:
      'AstraFlow builds a family world model across people, places, time, tasks, and conflicts. Instead of showing another list, it turns signals into structure, dependencies, priorities, and multi-thread planning that can keep learning over time.',
    act2Points: ['Resolve conflicts before they become household stress', 'Route decisions by role, context, permissions, and urgency', 'Keep refining rhythm, habits, and memory instead of restarting from scratch'],
    principlesTitle: 'What the system is optimizing for',
    principlesBody:
      'This is not assistant theater. It is a controlled execution layer designed to make a complex household legible, permission-aware, and calmer over time.',
    principles: [
      'Structured household memory',
      'Conflict-aware planning',
      'Permissioned execution',
      'Calm human confirmation',
    ],
    act3Eyebrow: 'Act 3 · Hand Off Reality',
    act3Title: 'The product feels light because the system is doing the hard part.',
    act3Body:
      'A voice note or a quick photo is enough for AstraFlow to recognize context, update the right task, sync the right family member, and store the signal in long-term household memory. You keep living. AstraFlow handles the complexity.',
    act3Points: ['Capture a paper notice, medicine box, or shopping need in one motion', 'Let the agent connect the detail to care, schedules, reminders, or purchasing', 'Stay present with family while the system keeps the loop moving'],
    faqTitle: 'Questions families ask before they trust a system like this',
    faqBody:
      'The real evaluation is not whether the UI looks smart. It is whether the system can safely take responsibility without becoming another thing to manage.',
    faqs: [
      {
        question: 'Why not another family assistant?',
        answer:
          'Because the missing piece is execution ownership. Families do not need another interface that talks. They need a system that routes work, keeps state, and follows through.',
      },
      {
        question: 'What makes a family world model different from a task list?',
        answer:
          'A task list stores isolated items. A family world model understands people, routines, places, timing, constraints, and conflict patterns, so the system can plan instead of merely recording.',
      },
      {
        question: 'How do you handle sensitive actions?',
        answer:
          'AstraFlow treats sensitive work as permissioned execution. High-risk actions stay reviewable, traceable, and gated behind confirmation.',
      },
      {
        question: 'What does low-friction capture actually mean?',
        answer:
          'It means the product should meet reality where it happens. A short voice input or a quick photo can be enough to update the household operating loop without making someone stop and manually structure everything.',
      },
    ],
    mobileMenuTitle: 'Navigation',
    closeMenuLabel: 'Close menu',
    navLabels: {
      whyNow: 'Why now',
      worldModel: 'World model',
      faq: 'FAQ',
      blog: 'Blog',
    },
    waitlistTitle: 'See what family life feels like when complexity has an owner.',
    waitlistBody:
      'Join the list for product notes, visual demos, and early access updates as AstraFlow moves from narrative to real household workflows.',
    waitlistBenefits: [
      'Three-act product storyboards and notes',
      'New system demos grounded in family reality',
      'Updates when guided pilots open',
    ],
    emailLabel: 'Work email',
    emailPlaceholder: 'ada@household.com',
    submit: 'Request early access',
    successNote: waitlistSuccessAuditCopy,
    footerKicker: 'A calm Family Execution System',
    footerBody:
      'Built for households that need more than reminders and fragmented apps. Built for the person who has been quietly carrying the load.',
    footerLinks: [
      { label: 'Blog', to: '/blog' },
      { label: 'Why now', action: 'why-now' },
      { label: 'FAQ', action: 'faq' },
    ],
    imageAlts: {
      act1: 'A composed woman in a premium home environment surrounded by fragmented household information and invisible pressure.',
      act2: 'A household agent system visualizing a family world model with planning, conflicts, and structured intelligence around the same woman.',
      act3: 'The same woman living calmly while using voice and photo capture to hand family tasks to an intelligent system.',
    },
  },
  zh: {
    heroBadge: 'Family Execution System',
    heroTitle: 'AstraFlow 让现代家庭第一次拥有一个真正能接住复杂性的系统。',
    heroBody:
      '家庭失控往往不是因为缺信息，而是因为总有一个人长期在吸收路由、记忆、补位与善后，把所有隐形恢复工作都默默扛在自己身上。',
    heroBodyAlt:
      '她看起来依然体面冷静，但已经被无数家庭事务不断打断。AstraFlow 试图解决的不是待办堆积，而是这种长期无人接管的复杂性。',
    heroSignals: ['家庭 CEO', '把隐形负担可视化', '不是另一个 dashboard'],
    primaryCta: '加入等待名单',
    secondaryCta: '阅读博客',
    whyTitle: '为什么这种压力会不断叠加',
    whyBody:
      '家庭里的信号以不同格式、不同时间、不同优先级涌入，而真正负责把一切重新排好的人，通常始终只有一个。',
    whyCards: [
      {
        title: '外表稳定，不代表负担不在上升',
        body: '真正消耗人的不是一次崩溃，而是长期上下文切换、持续补位、不断提醒和永远记住下一步的压力。',
      },
      {
        title: '碎片化工具从来没有变成家庭操作系统',
        body: '聊天、日历、学校通知、照护提醒和采购事项都存在，但没有一个系统真正理解它们如何互相影响，以及下一步该由谁负责。',
      },
    ],
    act1Eyebrow: 'Act 1 · Invisible Load',
    act1Title: '这是智能系统重新恢复秩序前的最后一刻。',
    act1Body:
      'AstraFlow 从真实压力开始：家庭组织者仍然站得住、撑得住，但她已经同时承受过多责任，任何纯靠人脑维持的记忆与协调循环都会开始失真。',
    act1Points: ['学校通知与工作会议撞在一起', '老人照护、采购、缴费与接送不断叠加', '看似精致稳定的生活，底层却仍靠一个人超负荷运转'],
    act2Eyebrow: 'Act 2 · World Model',
    act2Title: '系统不再看见碎片，而是开始理解整个家庭如何运转。',
    act2Body:
      'AstraFlow 会构建一个 family world model，把人物、地点、时间、任务、依赖与冲突组织成可推理的结构。它不是再给你一个列表，而是在持续理解、规划、重排优先级，并随着这个家庭的节奏不断学习。',
    act2Points: ['在问题变成家庭压力之前先识别冲突', '按照角色、上下文、权限和紧急度做路由', '把习惯、节奏和长期记忆持续沉淀，而不是每周重新开始'],
    principlesTitle: '这个系统真正优化的是什么',
    principlesBody:
      '它不是助手表演，而是一个可控的执行层，让复杂家庭变得可理解、带权限感知，并逐渐回到更冷静的节奏。',
    principles: ['结构化家庭记忆', '冲突感知规划', 'Permissioned execution', '低打扰的人类确认'],
    act3Eyebrow: 'Act 3 · Hand Off Reality',
    act3Title: '产品之所以显得轻，是因为真正困难的部分已经被系统接走。',
    act3Body:
      '用户只要自然说一句话、顺手拍一张照片，AstraFlow 就能理解上下文、更新正确任务、同步正确家庭成员，并把这条信号放进长期家庭记忆。你负责生活，AstraFlow 负责复杂性。',
    act3Points: ['学校纸质通知、药盒、购物需求都可以一拍即入', 'agent 会把细节自动关联到照护、日程、提醒或采购', '你继续陪伴家人，系统继续推进整个执行闭环'],
    faqTitle: '在愿意信任这种系统之前，家庭真正会问的问题',
    faqBody:
      '关键不在于界面看起来多聪明，而在于系统能否在安全边界内真正替人承担责任，而不是再制造一个新的管理对象。',
    faqs: [
      {
        question: '为什么不是另一个家庭助手？',
        answer:
          '因为真正缺的是 execution ownership。家庭不需要另一个只会说话的界面，而是一个能路由事务、保持状态并跟进到结果的系统。',
      },
      {
        question: 'family world model 和普通任务列表有什么不同？',
        answer:
          '任务列表只保存孤立事项，family world model 会理解人物、地点、时间、节奏、约束和冲突模式，所以系统可以规划，而不只是记录。',
      },
      {
        question: '敏感动作如何控制？',
        answer:
          'AstraFlow 把敏感动作视为 permissioned execution。高风险步骤必须可追溯、可回看，并在明确确认后执行。',
      },
      {
        question: '低打扰录入具体是什么意思？',
        answer:
          '它意味着产品要在现实发生的地方接住信息。一次语音输入或一张照片就足以更新家庭运行循环，而不是要求用户停下来手工整理所有结构。',
      },
    ],
    mobileMenuTitle: '导航',
    closeMenuLabel: '关闭菜单',
    navLabels: {
      whyNow: '为什么是现在',
      worldModel: '世界模型',
      faq: 'FAQ',
      blog: '博客',
    },
    waitlistTitle: '当复杂性终于有了 owner，家庭生活会是什么样。',
    waitlistBody:
      '加入名单后，我们会持续分享产品笔记、视觉 demo 和早期访问更新，展示 AstraFlow 如何从叙事走向真实家庭工作流。',
    waitlistBenefits: ['三幕产品故事板与产品笔记', '基于家庭现实的 system demo', 'guided pilot 开放更新'],
    emailLabel: 'Work email',
    emailPlaceholder: 'ada@household.com',
    submit: '申请早期访问',
    successNote: '我们会通过这个入口持续发送下一批产品笔记与访问更新。',
    footerKicker: '一个冷静的 Family Execution System',
    footerBody:
      '服务于那些已经厌倦提醒工具和碎片化应用的家庭，也服务于那个一直默默把一切扛住的人。',
    footerLinks: [
      { label: '博客', to: '/blog' },
      { label: '为什么是现在', action: 'why-now' },
      { label: 'FAQ', action: 'faq' },
    ],
    imageAlts: {
      act1: '高端家居空间中，一位年轻女性被学校通知、照护提醒和家庭任务的信息压力包围。',
      act2: '同一位女性身后展开家庭世界模型，系统正在理解人物、地点、时间与冲突关系。',
      act3: '同一位女性在轻松生活中用语音和拍照把家庭事务自然交给智能系统。',
    },
  },
}

function SectionEyebrow({ children }: { children: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-white/74 px-4 py-2 text-[11px] uppercase tracking-[0.2em] text-slate-500 ring-1 ring-black/5">
      <Sparkles className="size-3.5" />
      <span>{children}</span>
    </div>
  )
}

function StoryImage({
  src,
  alt,
  priority = false,
}: {
  src: string
  alt: string
  priority?: boolean
}) {
  return (
    <div className="relative overflow-hidden rounded-[32px] bg-slate-950 shadow-[0_34px_120px_rgba(2,8,23,0.22)] ring-1 ring-black/10">
      <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(7,12,22,0.08),rgba(7,12,22,0.22))]" />
      <img
        src={src}
        alt={alt}
        loading="eager"
        className="aspect-[5/4] w-full object-cover object-center md:aspect-[16/10] xl:aspect-[16/9]"
      />
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
    { label: copy.navLabels.worldModel, onClick: () => scrollToSection('world-model') },
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
        <section className="px-5 pb-20 pt-14 sm:px-8 sm:pb-24 sm:pt-20 lg:pt-24">
          <div className="mx-auto max-w-[1600px]">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.22fr] lg:items-start xl:gap-[4.5rem]">
              <div>
                <SectionEyebrow>{copy.heroBadge}</SectionEyebrow>
                <h1 className="mt-8 max-w-[14ch] font-display text-[32px] leading-[0.9] tracking-tight sm:text-[52px] lg:text-[62px] xl:text-[72px]">
                  {copy.heroTitle}
                </h1>
                <p className="mt-7 max-w-[62ch] text-[16px] leading-8 text-slate-700 sm:text-[17px]">{copy.heroBody}</p>
                <p className="mt-4 max-w-[62ch] text-[15px] leading-7 text-slate-600">{copy.heroBodyAlt}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {copy.heroSignals.map((signal) => (
                    <span
                      key={signal}
                      className="rounded-full bg-white/84 px-3 py-2 text-[11px] uppercase tracking-[0.18em] text-slate-500 ring-1 ring-black/5"
                    >
                      {signal}
                    </span>
                  ))}
                </div>

                <div className="mt-9 flex flex-wrap items-center gap-3">
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

              <div className="space-y-5 lg:pl-2 xl:pl-8">
                <StoryImage src={actOneImage} alt={copy.imageAlts.act1} priority />
                <div className="grid gap-3 md:grid-cols-3 xl:gap-4">
                  {copy.act1Points.map((point) => (
                    <SoftCard key={point} className="p-4 sm:p-5 xl:p-6">
                      <div className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                        {copy.act1Eyebrow}
                      </div>
                      <div className="mt-3 text-sm leading-7 text-slate-600">{point}</div>
                    </SoftCard>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="why-now" className="px-5 py-20 sm:px-8 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-[1600px]">
            <div className="grid gap-10 lg:grid-cols-[0.84fr_1.16fr] lg:items-start">
              <div>
                <SectionEyebrow>{copy.whyTitle}</SectionEyebrow>
                <h2 className="mt-6 max-w-[13ch] font-display text-[32px] leading-[1.02] tracking-tight sm:text-[44px] lg:text-[58px]">
                  {copy.act1Title}
                </h2>
                <p className="mt-5 max-w-xl text-[15px] leading-7 text-slate-600">{copy.whyBody}</p>
                <p className="mt-4 max-w-[62ch] text-[15px] leading-7 text-slate-600">{copy.act1Body}</p>
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
          </div>
        </section>

        <section id="world-model" className="px-5 py-20 sm:px-8 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-[1600px]">
            <div className="grid gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:items-start xl:gap-[4.5rem]">
              <StoryImage src={actTwoImage} alt={copy.imageAlts.act2} />

              <div className="lg:pt-2">
                <SectionEyebrow>{copy.act2Eyebrow}</SectionEyebrow>
                <h2 className="mt-6 max-w-[18ch] font-display text-[32px] leading-[1.02] tracking-tight sm:text-[44px] lg:text-[56px] xl:text-[64px]">
                  {copy.act2Title}
                </h2>
                <p className="mt-5 max-w-[62ch] text-[15px] leading-7 text-slate-600">{copy.act2Body}</p>
                <div className="mt-7 grid gap-4">
                  {copy.act2Points.map((point) => (
                    <div key={point} className="rounded-[24px] bg-white/84 px-5 py-4 text-sm leading-7 text-slate-600 ring-1 ring-black/5 shadow-[0_18px_60px_rgba(2,8,23,0.06)]">
                      {point}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 py-20 sm:px-8 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-[1600px]">
            <SoftCard className="p-8 sm:p-10 lg:p-12">
              <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                <div>
                  <SectionEyebrow>{copy.principlesTitle}</SectionEyebrow>
                  <h2 className="mt-6 max-w-[13ch] font-display text-[32px] leading-[1.02] tracking-tight sm:text-[44px] lg:text-[58px]">
                    {copy.principlesTitle}
                  </h2>
                  <p className="mt-5 max-w-xl text-[15px] leading-7 text-slate-600">{copy.principlesBody}</p>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {copy.principles.map((item, index) => (
                    <div
                      key={item}
                      className={cn(
                        'flex items-center gap-3 rounded-[22px] px-4 py-4 ring-1 ring-black/5',
                        index % 2 === 0 ? 'bg-slate-950 text-white' : 'bg-white/82 text-slate-700',
                      )}
                    >
                      <span
                        className={cn(
                          'grid size-8 place-items-center rounded-full',
                          index % 2 === 0 ? 'bg-white/12 text-white' : 'bg-slate-100 text-slate-700',
                        )}
                      >
                        {index < 2 ? (
                          <Waypoints className="size-4" />
                        ) : (
                          <ShieldCheck className="size-4" />
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

        <section className="px-5 py-20 sm:px-8 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-[1600px]">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start xl:gap-[4.5rem]">
              <div className="lg:pt-2">
                <SectionEyebrow>{copy.act3Eyebrow}</SectionEyebrow>
                <h2 className="mt-6 max-w-[18ch] font-display text-[32px] leading-[1.02] tracking-tight sm:text-[44px] lg:text-[56px] xl:text-[64px]">
                  {copy.act3Title}
                </h2>
                <p className="mt-5 max-w-[62ch] text-[15px] leading-7 text-slate-600">{copy.act3Body}</p>
                <div className="mt-7 grid gap-4">
                  {copy.act3Points.map((point) => (
                    <div key={point} className="flex items-start gap-3 rounded-[22px] bg-white/80 px-5 py-4 ring-1 ring-black/5 shadow-[0_18px_60px_rgba(2,8,23,0.06)]">
                      <span className="mt-1 grid size-7 flex-none place-items-center rounded-full bg-slate-950 text-white">
                        <Check className="size-4" />
                      </span>
                      <span className="text-sm leading-7 text-slate-600">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              <StoryImage src={actThreeImage} alt={copy.imageAlts.act3} />
            </div>
          </div>
        </section>

        <section id="faq" className="px-5 py-20 sm:px-8 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-[1600px]">
            <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
              <div>
                <SectionEyebrow>FAQ</SectionEyebrow>
                <h2 className="mt-6 max-w-[13ch] font-display text-[32px] leading-[1.02] tracking-tight sm:text-[44px] lg:text-[58px]">
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
          <div className="mx-auto max-w-[1600px]">
            <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
              <div>
                <SectionEyebrow>{copy.primaryCta}</SectionEyebrow>
                <h2 className="mt-6 max-w-[13ch] font-display text-[34px] leading-[0.98] tracking-tight sm:text-[48px] lg:text-[60px]">
                  {copy.waitlistTitle}
                </h2>
                <p className="mt-5 max-w-xl text-[15px] leading-7 text-slate-600">{copy.waitlistBody}</p>
                <div className="mt-7 grid gap-4">
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
        <div className="mx-auto max-w-[1600px] border-t border-black/6 pt-10">
          <div className="text-[11px] uppercase tracking-[0.18em] text-slate-400">{copy.footerKicker}</div>
          <div className="mt-4 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="font-display text-[46px] leading-none tracking-tight text-slate-950 sm:text-[68px]">
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
                    onClick={() => scrollToSection(item.action)}
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
