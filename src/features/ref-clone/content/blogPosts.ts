export type BlogCategory =
  | 'Latest'
  | 'Company'
  | 'Tutorials'
  | 'Stories'
  | 'Insights'
  | 'Articles'

export type BlogPost = {
  slug: string
  title: string
  category: BlogCategory
  author: string
  date: string
  minutes: number
  excerpt: string
  coverStyle: string
  contentMd: string
}

export const blogCategories: BlogCategory[] = [
  'Latest',
  'Company',
  'Tutorials',
  'Stories',
  'Insights',
  'Articles',
]

export const blogPosts: BlogPost[] = [
  {
    slug: 'liquid-glass-ui',
    title: 'Liquid glass UI: make it feel like a material',
    category: 'Insights',
    author: 'Dona team',
    date: '2026-03-05',
    minutes: 5,
    excerpt:
      '我们如何把半透明、折射、高光与噪点，变成可复用的前端设计系统，而不是一次性的特效。',
    coverStyle:
      'bg-[radial-gradient(70%_80%_at_20%_20%,rgba(56,189,248,0.65),transparent_55%),radial-gradient(70%_80%_at_80%_25%,rgba(244,114,182,0.55),transparent_60%),linear-gradient(to_bottom,rgba(255,255,255,0.15),rgba(255,255,255,0.0))]',
    contentMd: `# Liquid glass UI

> 目标不是“看起来像玻璃”，而是让交互像一种材料：有厚度、有边界、有光感。

## 1. 玻璃的三件事

- **透**：背景可见，但不抢信息。
- **糊**：用 blur 把背景的高频细节抹平。
- **亮**：高光与边缘让它“站起来”。

## 2. 我们的实现策略

- 背景用 **radial gradient + noise**，让玻璃更真实。
- 用 **ring + shadow** 做边界与层级。
- 滚动时提高不透明度，保证可读性。

## 3. 可以复用的组件

- \`LiquidHeader\`: 玻璃导航容器
- \`SoftCard\`: 玻璃卡片容器

---

想看源码？去首页开 \`Blog\` 然后点进来就行。`,
  },
  {
    slug: 'chat-with-your-tasks',
    title: 'Chat with your tasks (without context switching)',
    category: 'Latest',
    author: 'Dona team',
    date: '2026-02-20',
    minutes: 4,
    excerpt:
      '把写作、学习、规划、购物这些场景统一成一个“就地协助”的体验：你在哪，它就在哪。',
    coverStyle:
      'bg-[radial-gradient(65%_70%_at_30%_15%,rgba(148,163,184,0.55),transparent_60%),radial-gradient(70%_80%_at_80%_25%,rgba(56,189,248,0.55),transparent_60%),linear-gradient(to_bottom,rgba(15,23,42,0.08),rgba(15,23,42,0.0))]',
    contentMd: `# Chat with your tasks

## Why

每一次复制粘贴、切换标签、翻找上下文，都会把你从“思考状态”里拽出来。

## What

我们把帮助放在三个位置：

1. **输入框旁**：写作/润色/改写
2. **任务列表旁**：拆解/排序/估时
3. **摘要区域**：把信息变成下一步行动

## The rule

> 你只需要说清楚目标，其余的交给系统帮你把路铺平。
`,
  },
  {
    slug: 'build-a-landing-fast',
    title: "How we build landing pages that don't feel templated",
    category: 'Tutorials',
    author: 'Dona team',
    date: '2026-01-10',
    minutes: 6,
    excerpt:
      '从 hero 到 testimonials：用“强主题 + 少组件 + 大层级”做出不 AI-slop 的质感。',
    coverStyle:
      'bg-[radial-gradient(70%_90%_at_30%_20%,rgba(34,197,94,0.45),transparent_60%),radial-gradient(60%_80%_at_75%_30%,rgba(56,189,248,0.45),transparent_60%),linear-gradient(to_bottom,rgba(255,255,255,0.20),rgba(255,255,255,0.0))]',
    contentMd: `# How we build landing pages

## Checklist

- 一个明确的**主视觉材料**（玻璃、金属、纸、胶片…）
- 一个明确的**动作**（试用 / 订阅 / 加入等待名单）
- 2~3 个**演示区块**，每个只讲一个点
- 可信度：quotes / numbers / logos

## Anti-pattern

- 过度居中、过度圆角、过度渐变
- 所有 section 长得一样

---

把主题做重一点，组件就可以少一点。
`,
  },
]

export function getPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug)
}
