# API Specification: TanStack Start UI Clone of `ref`

**Version**: 1.0  
**Date**: 2026-03-19  
**Source PRD**: `docs/prd/ref-clone-ui.md`  
**Related Issue**: `#8`

## Overview

本次需求为静态 UI 复刻，不引入新的真实业务 API。页面中的 CTA、newsletter form、video/about 弹层和 demo prompt 仅为前端演示交互。

## Runtime Contracts

### Home CTA / Anchor Navigation
- **Type**: Client-side interaction
- **Behavior**:
  - `Home` 跳转到首页顶部锚点
  - `About` 打开 about dialog，并可继续滚动到 `#features`
  - `Get started` 滚动到 `#newsletter`

### Newsletter Form
- **Type**: Client-only form behavior
- **Behavior**:
  - 提交时阻止默认刷新
  - 清空输入框或保留静态 demo 态
  - 不发起网络请求

### Demo Prompt Panel
- **Type**: Client-only interaction
- **Behavior**:
  - 点击示例 prompt 后，将内容写入输入框
  - 点击 `Run` 后展示静态生成中的文案，再替换为预设结果
  - 不调用远端服务

## Route Contracts

### [GET] /
- 渲染 Home clone 页面

### [GET] /blog
- 渲染 Blog 列表页

### [GET] /blog/$slug
- 根据本地静态内容渲染文章详情
- 当 slug 不存在时，返回站内 not-found UI，而不是网络错误页

## Data Contracts

### BlogCategory

```ts
type BlogCategory =
  | 'Latest'
  | 'Company'
  | 'Tutorials'
  | 'Stories'
  | 'Insights'
  | 'Articles'
```

### BlogPost

```ts
type BlogPost = {
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
```

## Validation

- Test: `bun --bun run test`
- Build: `bun --bun run build`
