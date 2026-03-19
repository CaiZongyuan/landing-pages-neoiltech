# Product Requirements Document: Merlin-Inspired Landing Refresh

**Version**: 1.0  
**Date**: 2026-03-19  
**Author**: Codex  
**Status**: Draft  
**Reference**: `https://www.merlin.computer/`  
**Content Source of Truth**: `docs/bp/bp.md`

---

## Executive Summary

当前首页已经具备基础品牌表达，但内容层次、视觉节奏、交互完成度与移动端导航都明显偏弱，无法承担“正式对外 landing page”的说服任务。参考站 `merlin.computer` 的有效模式不是单纯视觉皮肤，而是高密度叙事结构：强 hero、连续证据、产品演示、对比叙述、信任与 FAQ 收尾，以及始终在线的 CTA。

本次改造聚焦 `/` 首页与共用 header/footer 的内容扩充和 UI/UX 打磨，不涉及新的后端 API 或 CMS 变更。内容主线以 `docs/bp/bp.md` 为准，突出 AstraFlow 作为 `Family Execution System` 的定位、家庭组织者的隐形劳动、`personalized AI Agents` 与 `EaseFlows（悦流）` 的产品定义。目标是在保留 AstraFlow 品牌与 blog 路由的前提下，让首页从“静态展示页”升级为“有明确说服路径的产品落地页”。

---

## Problem Statement

### Current Gaps

- 当前首页只有 3 个主要内容段，信息深度不足，缺少“为什么现在需要 AstraFlow”的推进行文
- 首屏缺少可信度信号、产品界面主视觉和明确产品工作流，无法快速建立用户理解
- 移动端 header 只有一个无实际导航的菜单按钮，属于明显 UX 缺口
- 页面缺少 FAQ、比较段、分步解释和多段 CTA，用户阅读到后半段时没有新的理由继续推进
- 底部 waitlist 区块仍是非常弱的静态占位，不足以承担转化角色

### Desired Outcome

构建一个更完整的长页型 landing page，拥有更强的叙事递进、更丰富的内容模块、更成熟的视觉层次和更完整的交互细节，使访客在桌面和移动端都能形成“理解产品价值 -> 感知可信度 -> 看到工作方式 -> 进入 waitlist / blog”的连续体验。

### BP-Derived Messaging Requirements

- 首页必须明确 AstraFlow 不是 another AI assistant，而是 `Family Execution System`
- 页面必须解释家庭真正的缺口不是信息或聊天，而是 `execution ownership`
- 至少一处区块需要解释主循环：
  `Capture → Structure → Route → Execute → Follow Through → Reflect → Build Context`
- 至少一处区块需要解释 `personalized AI Agents + EaseFlows` 如何承接执行闭环
- 品牌语气必须符合 BP 的第一印象：`冷静、可靠、克制、能推进`

---

## Reference Analysis

### From Merlin We Intend To Borrow

- 首屏以上即建立强定位、简短支持文案、主 CTA 与可信度信号
- 产品演示卡片优先于抽象 feature list
- 一屏接一屏地交替使用 narrative、proof、comparison、FAQ
- 每个大区块都含下一步动作或新的理解信号，不让节奏掉下去
- 移动端同样保留完整故事线，而不是把关键内容丢失

### What We Will Not Copy

- 不复刻 Merlin 文案、品牌词、插画、排版细节或具体组件造型
- 不把 AstraFlow 叙事改成“邮箱 chief of staff”方向
- 不引入与当前产品不符的集成承诺或虚假 compliance 表述

---

## User Stories & Acceptance Criteria

### Story 1: 首屏 10 秒理解产品

**As a** 首次到访的潜在用户  
**I want to** 在首屏快速理解 AstraFlow 的定位、对象和主要收益  
**So that** 我可以决定是否继续浏览或加入 waitlist

**Acceptance Criteria**
- [ ] 首屏包含可见的 proof/eyebrow、唯一 H1、补充说明、双 CTA
- [ ] 首屏右侧或下方必须出现产品工作流可视化卡片，而不是只有纯文本
- [ ] 首屏出现至少一组可信度/原则型信号，而不是把信任内容全部放到页面后段
- [ ] 首屏在桌面与移动端都保留主要 CTA 和核心价值主张

### Story 2: 阅读过程中持续获得新信息

**As a** 正在滚动阅读的访客  
**I want to** 每一段都看到新的理由继续浏览  
**So that** 页面不会在第二屏后失去说服力

**Acceptance Criteria**
- [ ] 首页新增至少 6 个内容区块，整体结构不再停留在 `hero + features + trust + form`
- [ ] 页面至少包含：why-now/problem、workflow/demo、feature proof、comparison/principles、FAQ、final CTA
- [ ] 每个主要区块都包含标题、支持内容和视觉节奏变化，避免连续等权卡片堆叠
- [ ] 页面滚动时存在至少一处有意义的 reveal / stagger / sticky-like 细节，但不能牺牲可读性

### Story 3: 移动端拥有完整导航与更强可用性

**As a** 手机访问者  
**I want to** 能顺畅打开导航、理解页面结构并执行 CTA  
**So that** 移动端不会因为布局简化过度而失真

**Acceptance Criteria**
- [ ] 移动端菜单按钮可打开真实导航面板，包含关键锚点与 blog 链接
- [ ] 主要 CTA、产品主视觉、至少 3 个核心内容区块在 390px 宽度下无需横向滚动
- [ ] 按钮、表单、FAQ 折叠项都支持触控和键盘操作
- [ ] 页面在移动端保留明确层次，不出现超长单段文本墙

### Story 4: Waitlist 区块具备更成熟的 UI/UX

**As a** 想进一步了解的访客  
**I want to** 看到更可信、更具体的 waitlist 邀请区  
**So that** 我能理解加入后会获得什么

**Acceptance Criteria**
- [ ] 底部 CTA 区块包含明确收益说明、状态反馈和更成熟的输入样式
- [ ] 当前未接后端时，提交反馈仍要给出清晰的本地成功态或演示态
- [ ] CTA 区块附近需有“为何加入 / 适合谁 / 何时收到更新”的辅助信息
- [ ] 页面至少存在 3 处可滚动到 waitlist 的 CTA

### Story 5: 品牌完成度显著提升

**As a** 对团队成熟度敏感的外部访客  
**I want to** 感知到页面具有清晰的品牌系统和产品判断  
**So that** 我愿意把 AstraFlow 视为认真打磨中的产品而不是草稿页

**Acceptance Criteria**
- [ ] 建立统一的视觉 tokens：背景层次、强调色、圆角、阴影、边框和字体节奏
- [ ] 页面至少新增一组品牌统计/metric/promise 卡片作为内容锚点
- [ ] Footer 升级为真实品牌 footer，而不是模板残留
- [ ] 不允许继续出现 “Open menu” 无功能、TanStack starter footer、弱 placeholder 感

---

## Functional Requirements

### In Scope

- `/` 首页内容重构
- 首页视觉系统升级
- 首页动画/滚动 reveal 细节
- 真实可用的移动端导航抽屉或面板
- 更完整的 footer
- 更成熟的 waitlist CTA 演示态
- 保留并串联 `/blog` 入口
- 为本次改造补充自动化测试与 UI/UX dogfood 证据

### Out of Scope

- 新增服务端 waitlist API
- 改造 blog 列表 / blog 详情主体内容结构
- 新增多页面 marketing funnel
- 引入视频背景、复杂 3D、重型动画库

---

## UX Structure

推荐首页结构：

1. Proof bar / social signal
2. Hero with narrative + product mock panel
3. Why AstraFlow now
4. How it works / 3-step operating loop
5. Capability grid with concrete outcomes
6. Comparison or operating principles section
7. Trust / privacy / human oversight section
8. FAQ accordion
9. Final waitlist CTA
10. Rich footer

---

## Validation

### Automated

- `bun --bun run test`
- `bun --bun run build`

### Manual / Visual

- 使用 `agent-browser` 保存参考站与当前实现的 desktop/mobile 截图
- 使用 `dogfood` 对本地页面进行 UI/UX 探索测试并产出报告
- 对比项至少覆盖：首屏层次、滚动节奏、移动端导航、CTA 清晰度、FAQ 交互、footer 完整度
