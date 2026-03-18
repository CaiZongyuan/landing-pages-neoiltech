# UI Specification: AstraFlow Landing Pages

**Version**: 1.0  
**Date**: 2026-03-18  
**Source PRD**: `docs/prd/landing-pages.md`  
**Related Issue**: `#1`  

## Design Direction

- 视觉方向参考 `/root/Projects/Frontend/landingPage/ref`，但不能做品牌复刻
- 气质关键词：`calm`, `premium`, `airy`, `trustworthy`, `future-facing`
- 页面布局要强调留白、柔和层次、玻璃感卡片、轻微发光背景与明确 CTA
- 主题仅要求 `light` / `dark` 两种正式模式；若保留 `auto`，它不是 MVP 的视觉验收重点
- 英文与中文排版需要分别优化，不允许直接等宽替换导致层级失真

## Pages / Routes

- **/**: 首页，面向首次访客，负责价值传达与 waitlist 转化
- **/blog**: blog 列表页，展示已发布文章
- **/blog/$slug**: blog 详情页，阅读内容并支持语言切换
- **/privacy**: 隐私页，传达数据处理原则
- **/terms**: 条款页，说明基本法律条款
- **/zh**: 中文首页
- **/zh/blog**: 中文 blog 列表页
- **/zh/blog/$slug**: 中文 blog 详情页
- **/zh/privacy**: 中文隐私页
- **/zh/terms**: 中文条款页

## Global UX Rules

- Header 固定在顶部，包含品牌、主导航、语言切换、主题切换、主 CTA
- Footer 提供品牌说明、法律链接、社交入口和版权信息
- 所有 CTA 文案需与语言一致
- 所有页面在移动端优先保持清晰阅读节奏，不堆叠过多装饰性元素
- Blog 正文采用可读性优先的 prose 样式，支持标题锚点、代码块、列表和引用

## Page Details

### /
- **Primary Goal**: 让用户在 30 秒内理解 AstraFlow 是什么，并产生加入 waitlist 的动机
- **Primary Actions**:
  - 点击主 CTA 跳转或滚动到 waitlist
  - 查看产品机制区块
  - 浏览 blog teaser
- **Recommended Sections**:
  - Hero
  - Problem / Why Now
  - How AstraFlow Works
  - Key Capabilities / Feature Grid
  - Trust / Privacy / Human-in-the-loop
  - Blog Teaser
  - Waitlist Form
  - Footer
- **Hero Copy Structure**:
  - Eyebrow: 简洁产品类别说明
  - H1: AstraFlow 一句话定位
  - Supporting text: 1 到 2 段补充“家庭多 Agent + Life OS”
  - CTA row: `Join the waitlist` / `Read the blog`
- **UI States**: success / submission pending / error
- **Accessibility**:
  - H1 唯一
  - CTA 按钮有明确可访问名称
  - 主题切换和语言切换支持键盘操作
- **Analytics**:
  - hero CTA click
  - waitlist submit success
  - blog teaser click

### Waitlist Form
- **Placement**: 首页底部独立 section，允许通过锚点快速跳转
- **Fields**:
  - `email` required
  - `name` required
  - `company` optional
  - `role` optional
  - `useCase` optional textarea
- **Validation**:
  - email 非法时即时提示
  - name 为空时阻止提交
  - useCase 超长时阻止提交
- **Success State**:
  - 展示简短成功文案
  - CTA 变为 disabled 或 success style
- **Duplicate State**:
  - 显示“你已在 waitlist 中”类友好文案
- **Error State**:
  - 保留输入内容
  - 提供重试按钮或提示
- **Anti-Spam UX**:
  - 隐藏 honeypot 字段
  - 不向用户暴露内部风控逻辑

### /blog
- **Primary Goal**: 让用户快速浏览文章并进入详情页
- **Primary Actions**:
  - 点击文章卡片
  - 切换页面语言
- **Layout**:
  - 页头含标题、副标题和可选筛选占位
  - 主体为文章卡片网格或单列卡片流
  - 每张卡片包含 title、excerpt、date、tag、locale badge（可选）
- **UI States**:
  - success
  - empty
  - error
- **Empty State**:
  - 清晰说明暂无文章
  - 提供返回首页 CTA

### /blog/$slug
- **Primary Goal**: 提供高可读性的长文阅读体验
- **Primary Actions**:
  - 阅读正文
  - 切换到另一语言版本
  - 返回 blog 列表
  - 点击尾部 CTA 加入 waitlist
- **Layout**:
  - Article hero: title, description, date, author
  - Language switcher: 仅在存在翻译版本时显示
  - Content body: prose container
  - Optional table of contents
  - Post footer CTA
- **UI States**:
  - success
  - 404
  - translation unavailable
- **Accessibility**:
  - 文章结构语义化，使用 `article`
  - 标题层级连续
  - 目录锚点可键盘访问

### /privacy
- **Primary Goal**: 清楚说明 waitlist 和站点数据的收集与使用边界
- **Content Requirements**:
  - 收集字段说明
  - 使用目的
  - 存储与删除方式
  - 联系方式或后续补充占位
- **UI States**: success

### /terms
- **Primary Goal**: 提供基础法律条款与使用声明
- **Content Requirements**:
  - 站点使用条款
  - 内容版权说明
  - 服务变更权利说明
- **UI States**: success

## Components

- **SiteHeader**: 品牌标识、主导航、Locale Switcher、Theme Switcher、Primary CTA
- **HeroSection**: 用于首页首屏展示，支持 eyebrow、title、description、CTA group
- **FeatureCard**: 展示单个产品能力点，支持图标或简要视觉占位
- **NarrativeSection**: 用于 Why Now / How it Works 等叙事型区块
- **WaitlistForm**: 表单、校验、状态反馈
- **BlogCard**: 标题、摘要、标签、日期、跳转
- **ArticleMeta**: 文章元信息与语言切换
- **LegalPageShell**: 隐私页和条款页的统一版式
- **SeoHeadComposer**: 封装 route `head` 中共用 metadata 规则

## Copywriting

- 首页文案必须避免“万金油 AI 营销词”，要具体表达家庭协作、执行闭环、可委托、多 Agent
- 中文文案优先自然表达，不硬翻英文句式
- blog 标题和摘要允许中英文分别优化，但语义必须对齐
- waitlist 文案强调“early access / join the waitlist”，不承诺具体上线日期

## Theme Rules

- Light mode: 以浅色大面积背景、微蓝灰或雾白渐变为主，使用轻玻璃卡片与深色文字
- Dark mode: 以深海军蓝或深墨色背景为主，保留柔和发光和高对比文字
- 两个主题都需要保持 AstraFlow 的同一品牌识别，不允许变成两套无关视觉

## SEO / LLMO UI Requirements

- 每个公开页面均需输出对应 title 和 description
- 首页需提供 Organization / WebSite 级别 JSON-LD
- blog 详情页需提供 BlogPosting JSON-LD
- 页面正文必须使用明确标题和段落结构，方便搜索引擎和 LLM 提取
- `/llms.txt` 的文案要与页面可见内容一致，不生成额外营销承诺

## Recommended Implementation Notes

- 使用 TanStack Start route `head` 定义 metadata，而不是散落在组件内部
- blog 内容渲染优先采用 TanStack Start 官方 markdown 指南中的 content-collections 路线
- 当前 Paraglide 语言需要从 `de` 迁移到 `zh`
- 主题切换控件可复用现有组件，但 UI 需升级为符合新品牌风格
