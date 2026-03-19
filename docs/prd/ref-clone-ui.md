# Product Requirements Document: TanStack Start UI Clone of `ref`

**Version**: 1.0  
**Date**: 2026-03-19  
**Author**: Codex  
**Status**: Draft for implementation  
**Related Issue**: `#8`

## Executive Summary

本次需求是在当前 TanStack Start 项目中，基于 SSR/file-based routing 重新实现 `/root/Projects/Frontend/landingPage/ref` 的对外 UI，目标是做到视觉结构、信息层次、交互路径与静态文案体验尽可能一比一对齐，同时保持实现栈为 TanStack Start，而不是复用 `ref` 的 Vite + wouter 架构。

本次交付聚焦纯前端静态演示体验，包括 Home、Blog、Blog Post 三个核心界面，保留参考项目中的玻璃质感导航、hero、feature/demo/testimonials/privacy/newsletter 区块、Blog 分类卡片页、文章详情页与目录侧栏。所有交互均以 UI 演示为目标，不引入真实 backend、真实鉴权或真实 newsletter 提交。

## Problem Statement

当前仓库仍是 TanStack Start 模板页，与参考项目 UI 差距很大，无法作为 `ref` 的 TanStack Start 版本交付。用户要求不是“风格接近”，而是“UI 上一比一复刻”，因此必须以参考项目的实际结构、路由、组件关系和文案为准，而不是在现有模板上做轻量改色。

## Goals

- 在 TanStack Start 中复刻 `ref` 的核心 UI 与交互结构
- 保持主要路由行为与视觉层级一致：`/`、`/blog`、`/blog/$slug`
- 保持首页锚点导航、弹层、tab/demo、testimonial carousel、newsletter 表单演示
- 使用当前仓库的构建、路由与测试体系完成实现

## Non-Goals

- 不接入真实 API、数据库、登录或 newsletter backend
- 不实现 `ref` 以外的新页面、新品牌或新文案体系
- 不保留当前模板自带的 Header/Footer/LocaleSwitcher/ThemeToggle 视觉方案
- 不要求与 `ref` 的内部技术选型一致；仅要求用户可感知 UI 与交互一致

## User Stories & Acceptance Criteria

### Story 1: Home 页面复刻

**As a** 访客  
**I want to** 在 TanStack Start 站点看到与 `ref` 对齐的首页 UI  
**So that** 我能确认复刻目标已达成

**Acceptance Criteria**
- [ ] `/` 路由渲染与 `ref` 首页一致的整体结构：liquid header、hero、feature cards、demo、testimonials、privacy、newsletter、footer
- [ ] 首页保留参考项目的主要静态文案、CTA、渐变背景、玻璃卡片与空间节奏
- [ ] 点击 header 中的 Home/About/Get started 能滚动到对应锚点或触发对应 UI
- [ ] About 与 Watch video 交互使用站内弹层复刻，不跳转到新路由

### Story 2: Blog 列表页复刻

**As a** 访客  
**I want to** 浏览与 `ref` 对齐的 Blog 页面  
**So that** 我能验证列表布局、分类筛选和卡片视觉

**Acceptance Criteria**
- [ ] `/blog` 路由展示与 `ref` 相同的标题、副标题、分类切换与卡片网格
- [ ] 分类按钮切换后，卡片列表按静态数据过滤
- [ ] 页面保留返回首页 CTA 和对应卡片视觉

### Story 3: Blog 详情页复刻

**As a** 访客  
**I want to** 打开某篇 blog 详情页并获得与 `ref` 对齐的阅读体验  
**So that** 我能验证文章页、目录与回链交互

**Acceptance Criteria**
- [ ] `/blog/$slug` 路由基于静态内容渲染文章标题、封面区、Markdown 正文、侧栏目录
- [ ] 目录锚点可平滑滚动到对应 `h2`
- [ ] 当 slug 不存在时，页面展示与 `ref` 对齐的 not found 状态
- [ ] 详情页 header/footer 视觉与 `ref` 保持一致

### Story 4: TanStack Start 适配

**As a** 开发者  
**I want to** 用 TanStack Start 方式承载这套复刻 UI  
**So that** 项目仍可按当前仓库标准维护与部署

**Acceptance Criteria**
- [ ] 路由使用 `src/routes/` 文件路由而不是 hash routing
- [ ] 根布局不强制包裹旧模板的 Header/Footer，避免与复刻 UI 冲突
- [ ] `bun --bun run test` 与 `bun --bun run build` 通过

## Functional Requirements

### FR-1 Home Clone
- 使用玻璃态 header 与柔光背景
- 复刻首页主要 section 顺序和排版
- 复刻按钮、卡片、模态框、tab 切换、轮播控制与 newsletter form 演示

### FR-2 Blog List Clone
- 使用与参考实现一致的静态数据结构
- 支持分类筛选
- 卡片点击进入文章详情

### FR-3 Blog Detail Clone
- 支持由静态 Markdown 字符串渲染正文
- 支持自动提取 `##` 级标题生成目录
- 支持不存在 slug 的兜底状态

### FR-4 Route Mapping
- `/` 对应 Home
- `/blog` 对应 Blog list
- `/blog/$slug` 对应 Blog detail

## Technical Constraints

- 必须保留 TanStack Start 作为框架底座
- 可按需引入复刻所需依赖，但应最小化新增依赖范围
- 测试以 Vitest + Testing Library 为主
- 允许以现有 `src/styles.css` 为基础重写全局视觉 token

## Validation

- Test: `bun --bun run test`
- Build: `bun --bun run build`
- Manual: 本地运行后比对 `ref` 的首页、Blog 列表、Blog 详情的结构与主要交互
