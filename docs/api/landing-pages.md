# API Specification: AstraFlow Landing Pages

**Version**: 1.0  
**Date**: 2026-03-18  
**Source PRD**: `docs/prd/landing-pages.md`  
**Related Issue**: `#1`  

## Overview
- **Auth**: None
- **Base URL**: `/api`
- **Error Format**: 统一使用 JSON 错误结构

## Conventions
- **Idempotency**: `POST /api/waitlist` 以 `email` 作为业务幂等键；重复提交返回成功态而不是报错
- **Pagination**: MVP 无公开 API 分页需求；blog 列表走 SSR 内容聚合
- **Rate Limit**: waitlist 接口需要基础限流，推荐按 IP + UA + path 组合限制
- **Localization**: 公开页面走 URL locale；API 返回值中的用户提示文案可由前端本地化

## Public Runtime Contracts

### [POST] /api/waitlist
- **Purpose**: 接收 waitlist 表单并持久化保存
- **Permission**: Public
- **Request**
  - Headers:
    - `content-type: application/json`
  - Body (JSON):

```json
{
  "email": "user@example.com",
  "name": "Ada Lovelace",
  "company": "AstraFlow Labs",
  "role": "Founder",
  "useCase": "Family coordination and caregiver planning",
  "locale": "en",
  "sourcePage": "/"
}
```

- **Validation Rules**
  - `email`: required, valid email, normalized to lowercase
  - `name`: required, trim 后长度 `1..80`
  - `company`: optional, trim 后长度 `0..120`
  - `role`: optional, trim 后长度 `0..120`
  - `useCase`: optional, trim 后长度 `0..1000`
  - `locale`: required, enum `en | zh`
  - `sourcePage`: required, public pathname

- **Response**
  - `201 Created`

```json
{
  "ok": true,
  "status": "joined",
  "messageKey": "waitlist.success"
}
```

  - `200 OK` duplicate email

```json
{
  "ok": true,
  "status": "already_joined",
  "messageKey": "waitlist.already_joined"
}
```

  - `422 Unprocessable Entity`

```json
{
  "ok": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid request body",
    "fieldErrors": {
      "email": "Invalid email"
    }
  }
}
```

  - `429 Too Many Requests`

```json
{
  "ok": false,
  "error": {
    "code": "RATE_LIMITED",
    "message": "Please try again later"
  }
}
```

  - `500 Internal Server Error`

```json
{
  "ok": false,
  "error": {
    "code": "INTERNAL_ERROR",
    "message": "Something went wrong"
  }
}
```

- **Edge Cases**
  - 同一 email 再次提交时不报错，直接返回 `already_joined`
  - 不接受空白字符串冒充有效值
  - 对可疑机器人提交可直接返回成功态或 429，避免暴露风控规则

## Machine-Readable Discovery Routes

### [GET] /robots.txt
- **Purpose**: 声明爬虫抓取规则并指向 sitemap
- **Permission**: Public
- **Response**
  - `200 text/plain`
  - 内容至少包含：
    - `User-agent: *`
    - `Allow: /`
    - `Sitemap: https://<host>/sitemap.xml`

### [GET] /sitemap.xml
- **Purpose**: 暴露公开页面与 blog 文章的站点地图
- **Permission**: Public
- **Response**
  - `200 application/xml`
  - 覆盖页面：
    - `/`
    - `/zh`
    - `/blog`
    - `/zh/blog`
    - 所有公开 blog 详情页
    - `/privacy`
    - `/terms`
  - 草稿文章不得出现在 sitemap

### [GET] /llms.txt
- **Purpose**: 为 LLM/agent 提供 AstraFlow 的简明机器可读说明
- **Permission**: Public
- **Response**
  - `200 text/plain`
  - 内容应包含：
    - 产品简介
    - 核心页面入口
    - blog 入口
    - 内容真实性边界
    - 更新时间

### [GET] /llms-full.txt
- **Purpose**: Phase 2 扩展用的详细 LLM 文本摘要
- **Permission**: Public
- **Response**
  - MVP 可不实现
  - 若实现，必须与 `llms.txt` 保持语义一致但内容更详细

## Content Contracts

### Blog Source Directory
- **Path**: `content/blog/`
- **Purpose**: 以仓库内 markdown 文件作为 blog 内容源

### File Naming Rule
- English: `NN.slug.md`
- Chinese: `NN.slug-zh.md`

**Examples**
- `01.intro.md`
- `01.intro-zh.md`
- `02.family-life-os.md`
- `02.family-life-os-zh.md`

### Slug Resolution
- `NN` 为排序前缀，不进入最终 URL slug
- `slug` 为 URL 中使用的 slug
- 英文详情页路径：`/blog/<slug>`
- 中文详情页路径：`/zh/blog/<slug>`

### Translation Pairing
- `translationGroup` 由去除语言后缀的文件 stem 推导
- 若同组存在 `en` 与 `zh` 版本，则详情页显示语言切换入口
- 若仅存在单语言文件，则页面正常渲染，切换入口隐藏

### Required Frontmatter

```yaml
title: "AstraFlow Intro"
description: "Short summary for SEO and blog cards"
date: "2026-03-18"
author: "AstraFlow Team"
excerpt: "Card summary text"
tags:
  - product
  - family-ai
draft: false
```

### Optional Frontmatter

```yaml
seoTitle: "Custom SEO title"
seoDescription: "Custom SEO description"
coverImage: "/images/blog/intro-cover.jpg"
readingTime: 5
```

### Build-Time Validation
- 缺少 required frontmatter 时构建失败
- slug 冲突时构建失败
- 相同文件组出现非法 locale 后缀时构建失败
- `draft: true` 的文章不进入公开列表、sitemap 和 llms 输出

## Data Models

### WaitlistSubmission

```ts
type WaitlistSubmission = {
  id: string
  email: string
  name: string
  company: string | null
  role: string | null
  useCase: string | null
  locale: 'en' | 'zh'
  sourcePage: string
  createdAt: string
  updatedAt: string
}
```

### BlogPost

```ts
type BlogPost = {
  slug: string
  locale: 'en' | 'zh'
  translationGroup: string
  order: number
  title: string
  description: string
  excerpt: string
  date: string
  author: string
  tags: string[]
  draft: boolean
  seoTitle?: string
  seoDescription?: string
  coverImage?: string
  bodyHtml: string
}
```

## Storage Contract

### Recommended Table: `waitlist_submissions`

| Column | Type | Nullable | Notes |
|--------|------|----------|-------|
| `id` | text | No | UUID/ULID |
| `email` | text | No | unique, normalized |
| `name` | text | No | display name |
| `company` | text | Yes | optional |
| `role` | text | Yes | optional |
| `use_case` | text | Yes | optional |
| `locale` | text | No | `en` or `zh` |
| `source_page` | text | No | submit origin |
| `created_at` | text/timestamp | No | server time |
| `updated_at` | text/timestamp | No | server time |

**Constraints**
- Unique index on `email`
- Optional secondary index on `created_at`

## Non-Functional
- waitlist 请求需保证 server-side validation，不依赖前端校验
- metadata、robots、sitemap、llms 输出必须可在 SSR/edge 环境稳定生成
- 内容处理链需在构建期发现错误，而不是运行期 silent failure
- 若采用 Cloudflare D1，数据库访问层需保持可替换，不把业务逻辑直接耦合到 SQL 方言
