# Product Requirements Document: Household Agent Visual Refresh

**Version**: 1.0  
**Date**: 2026-04-16  
**Author**: Codex  
**Status**: Draft

---

## Executive Summary

本次刷新把用户刚加入的三张 `assets/*.webp` AIGC 图片变成 landing page 的核心叙事骨架，而不是把图片当作普通装饰素材。首页需要围绕同一位“家庭 CEO”女性角色，建立从 **复杂性失控前夜**、到 **agent 重建家庭世界模型**、再到 **用户轻松把现实交给系统** 的三幕故事线，让 AstraFlow 的价值从抽象概念变成可感知的品牌电影感体验。

页面仍保留 AstraFlow 作为 `Family Execution System` 的产品定位、waitlist CTA、双语文案和现有 blog 入口，但视觉层次和文案结构要向这组三幕叙事集中，减少当前偏 SaaS 卡片化的表达。

---

## Problem Statement

当前首页虽然已经表达了 `Household Gateway`、`personalized AI Agents` 和 `EaseFlows`，但主视觉仍然是“产品说明页”逻辑，缺少一个高端、连续、可信的品牌故事线。用户很难在首屏和前两屏里快速感知：

- AstraFlow 面对的不是普通待办管理，而是家庭复杂性的长期挤压
- agent 的能力不是简单整理任务，而是理解整个家庭如何运转
- 最终体验不是“多做一次操作”，而是“用户继续生活，agent 接管复杂性”

---

## User Stories & Acceptance Criteria

### Story 1: 首屏建立“复杂性压迫”而非普通产品介绍

**As a** 首次访问 landing page 的潜在用户  
**I want to** 在 hero 区第一眼感知家庭 CEO 被复杂家庭事务包围的状态  
**So that** 我能理解 AstraFlow 要解决的是隐形认知负担，而不是单一待办问题

**Acceptance Criteria**
- [ ] Hero 区直接使用 `assets/01.webp` 作为主视觉
- [ ] 首屏文案必须表达“家庭运转不是缺信息，而是一个人长期在扛复杂性”
- [ ] 首屏保留 CTA，但视觉重心优先落在“压力被可视化”的电影感画面
- [ ] 右侧或下方文案不能遮挡图片主体，且在桌面端与移动端都保持清晰层次

### Story 2: 页面中段展示 agent 的世界模型与规划能力

**As a** 正在理解产品的访客  
**I want to** 看到 agent 如何把碎片化家庭事务吸收、理解、标注并重构  
**So that** 我能理解 AstraFlow 的差异不是一个 dashboard，而是高维组织能力

**Acceptance Criteria**
- [ ] 中段使用 `assets/02.webp` 作为第二幕主视觉
- [ ] 对应文案明确提及人物、地点、时间、任务、优先级、依赖、冲突等世界模型概念
- [ ] 区块结构不能像普通 feature grid，而应更像“系统接管复杂性”的叙事章节
- [ ] 至少一处文案表达持续学习、长期记忆或节奏优化

### Story 3: 页面后段展示语音与拍照的低打扰委托体验

**As a** 接近转化的访客  
**I want to** 看到用户只需自然说一句话、拍一张照片，系统就能继续推进  
**So that** 我能相信 AstraFlow 不会让我增加新的操作负担

**Acceptance Criteria**
- [ ] 后段使用 `assets/03.webp` 作为第三幕主视觉
- [ ] 文案明确表达“用户负责生活，agent 负责复杂性”
- [ ] 页面中至少有一处提及 voice capture、photo understanding、memory sync 等低打扰能力
- [ ] 该区块之后应直接衔接最终 waitlist CTA，形成“理解能力 -> 愿意留下联系方式”的流向

### Story 4: 三幕视觉叙事与现有站点能力兼容

**As a** 使用桌面端或移动端的访客  
**I want to** 在不牺牲现有导航、FAQ、blog 和 waitlist 基础能力的前提下获得新的品牌体验  
**So that** 刷新不会让页面变成只有图片没有结构的展示稿

**Acceptance Criteria**
- [ ] 保留 header、blog 入口、FAQ 和 waitlist CTA
- [ ] 页面继续支持 `en` / `zh` 双语文案
- [ ] `bun --bun run test` 和 `bun --bun run build` 通过
- [ ] 所有新增图片均来自 `assets/01.webp`、`assets/02.webp`、`assets/03.webp`，不引入外链图片

---

## In Scope

- `/` 首页内容重构与视觉分镜升级
- 三张 AIGC 图片在页面中的落位、遮罩、卡片和响应式布局
- 首页双语文案重写，使之与三幕叙事一致
- 保留并重组 FAQ / waitlist / blog CTA
- 补充与本次刷新匹配的合同文档和自动化测试

## Out of Scope

- 新增服务端 waitlist API
- 改造 blog 列表页与 blog 详情页
- 重新生成或编辑用户提供的图片素材
- 引入视频背景、重型滚动动画库或复杂 3D 效果

---

## Validation

### Automated

- `bun --bun run test`
- `bun --bun run build`

### Source Validation

- `docs/prd/household-agent-visual-refresh.md`
- `docs/api/household-agent-visual-refresh.md`
- `docs/ui/household-agent-visual-refresh.md`
- `tests/household-agent-visual-refresh-test-cases.md`
