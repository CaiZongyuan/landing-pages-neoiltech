# Product Requirements Document: AstraFlow Landing Pages

**Version**: 1.0  
**Date**: 2026-03-18  
**Author**: Codex  
**Quality Score**: 94/100  
**Related Issue**: `#1`  

---

## Executive Summary

AstraFlow 需要一套正式对外可发布的 landing pages，用于向潜在用户、合作方与早期关注者清晰传达产品定位，并承接 waitlist 转化。该站点将基于现有 TanStack Start 项目实现，沿用 SSR、文件路由、Cloudflare Workers 部署与 Paraglide URL-based i18n 能力，构建一套兼顾品牌展示、博客发布、SEO 与 LLMO 的内容站。

本次范围聚焦 MVP：首页、blog 列表页、blog 详情页、隐私页、条款页，以及首页内嵌或锚点式 waitlist 表单。视觉方向参考 `/root/Projects/Frontend/landingPage/ref`，整体气质应偏轻盈、留白、SaaS premium、信息层次清晰，并在 `light` / `dark` 两种主题下保持完整设计一致性。

---

## Problem Statement

**Current Situation**:  
当前仓库仅包含 TanStack Start 的基础示例页面和最小 i18n/theme 能力，无法承担 AstraFlow 的品牌展示、用户教育、waitlist 收集、内容运营和搜索发现需求。

**Proposed Solution**:  
构建一套双语、可 SEO、可 LLMO、可扩展 blog 的 marketing site。页面负责清晰表达 AstraFlow 作为“家庭 Life OS + 家庭多 Agent 系统”的价值，并通过 waitlist 表单收集潜在用户线索。

**Business Impact**:  
- 为 AstraFlow 提供可持续迭代的对外官网底座
- 建立早期 waitlist 漏斗，为后续产品验证和增长提供真实线索
- 通过 blog 内容沉淀搜索流量和 LLM 可读内容资产

---

## Success Metrics

**Primary KPIs:**
- Waitlist conversion rate: 首页访客到 waitlist 提交转化率达到 `>= 3%`
- Qualified waitlist volume: 上线后 30 天内累计有效提交 `>= 100`
- Organic discovery readiness: 所有公开页面均具备可抓取 metadata、sitemap、robots 与 llms.txt，技术验收通过率 `100%`

**Secondary KPIs:**
- Blog publishing velocity: 产品团队可通过仓库内 markdown 独立发布文章，无需修改路由代码
- Bilingual coverage: MVP 页面双语覆盖率 `100%`
- Blog translation experience: 成对文章存在时，详情页语言切换成功率 `100%`

**Validation**:  
通过站点分析、waitlist 数据库记录、构建时内容检查和 E2E/集成测试联合验证。上线后按周观察 landing page 转化、blog 流量与 SEO 收录情况。

---

## User Personas

### Primary: Family Organizer / Early Adopter
- **Role**: 面向海外家庭协作与生活管理场景的潜在核心用户
- **Goals**: 快速理解 AstraFlow 的产品价值，判断是否值得加入 waitlist
- **Pain Points**: 现有家庭协作工具碎片化，无法形成“记录到执行”的闭环
- **Technical Level**: Intermediate

### Secondary: Partner / Investor / Advisor
- **Role**: 需要快速理解产品愿景、差异化与 execution readiness 的外部利益相关方
- **Goals**: 用较少时间判断团队方向、产品结构和后续合作价值
- **Pain Points**: 若网站叙事模糊、内容分散，会削弱对产品成熟度的判断
- **Technical Level**: Intermediate to Advanced

### Secondary: Content Reader
- **Role**: 通过搜索或分享链接进入 blog 的潜在用户
- **Goals**: 阅读结构化文章，并在文章中理解产品背景、观点与后续动作
- **Pain Points**: 博客缺少清晰目录、元信息和语言切换时，容易流失
- **Technical Level**: Mixed

---

## User Stories & Acceptance Criteria

### Story 1: 品牌展示首页

**As a** 潜在用户  
**I want to** 快速理解 AstraFlow 是什么、解决什么问题、为何现在值得关注  
**So that** 我能决定是否进一步了解或加入 waitlist  

**Acceptance Criteria:**
- [ ] 首页在首屏内明确表达 AstraFlow 的一句话定位与核心价值主张
- [ ] 首页至少包含：hero、problem/value、product mechanism、feature highlights、trust/privacy、blog teaser、waitlist CTA
- [ ] 页面在 `light` 和 `dark` 两种主题下均完整可读且视觉一致
- [ ] 页面在 `en` 和 `zh` 两种语言下均有完整内容，不允许出现半翻译状态

### Story 2: Waitlist 收集

**As a** 对产品感兴趣的访客  
**I want to** 提交我的基本信息加入 waitlist  
**So that** 我可以在产品开放时收到后续通知  

**Acceptance Criteria:**
- [ ] waitlist 表单包含 `email`、`name`、`company`、`role`、`useCase`
- [ ] `email` 和 `name` 为必填；其余字段允许为空但需要落库
- [ ] 重复 email 提交时返回幂等成功态，不显示技术报错
- [ ] 成功、校验失败、重复提交、网络异常四类状态必须有明确 UI 反馈

### Story 3: Blog 列表与详情

**As a** 内容读者  
**I want to** 浏览 AstraFlow 的 blog 列表并阅读详情  
**So that** 我能更深入了解团队观点和产品进展  

**Acceptance Criteria:**
- [ ] `/blog` 页面按发布时间倒序展示文章卡片
- [ ] `/blog/$slug` 页面支持 markdown 渲染、目录、上一篇/下一篇或返回列表
- [ ] 文章详情页必须输出 article-level SEO metadata
- [ ] 当同一文章存在中英双语版本时，详情页提供显式语言切换入口

### Story 4: 多语言内容配对

**As a** 双语读者  
**I want to** 在同一篇 blog 的中英文版本之间切换  
**So that** 我能以偏好的语言阅读相同内容  

**Acceptance Criteria:**
- [ ] 文件命名规则采用 `NN.slug.md` 表示英文，`NN.slug-zh.md` 表示中文
- [ ] 系统根据文件名自动推断 `locale`、`slug` 与 `translationGroup`
- [ ] 当对应语言版本不存在时，切换入口隐藏或禁用，但页面不可报错

### Story 5: SEO 与 LLMO

**As a** 搜索引擎或 LLM agent  
**I want to** 获取结构化、稳定、可抓取的页面和机器可读文本  
**So that** AstraFlow 内容能被搜索和引用  

**Acceptance Criteria:**
- [ ] 所有公开页面通过 route-level `head` 输出 title、description、canonical、OG/Twitter metadata
- [ ] 站点提供 `/robots.txt`、`/sitemap.xml`、`/llms.txt`
- [ ] 首页和 blog 详情页提供 JSON-LD 结构化数据
- [ ] LLMO 文本内容与页面内容一致，不得夸大或输出未上线能力

---

## Functional Requirements

### Core Features

**Feature 1: Marketing Home**
- Description: 作为 AstraFlow 的主 landing page，承担品牌叙事与转化入口
- User flow: 访客进入首页 -> 浏览价值主张与产品机制 -> 查看 social proof / blog teaser -> 点击 CTA -> 提交 waitlist
- Edge cases: 某些区块内容暂缺时仍需保证页面完整，不允许空白卡片或 broken layout
- Error handling: 如果 waitlist 接口失败，表单保留用户输入并展示可重试文案

**Feature 2: Waitlist Submission**
- Description: 收集潜在用户资料并持久化保存
- User flow: 填写表单 -> 前端校验 -> 提交到服务端 -> 返回成功/重复/失败状态
- Edge cases: 重复 email、字段超长、恶意空格、脚本注入、机器人提交
- Error handling: 使用统一错误结构；重复提交按成功态处理；限流或服务异常需返回用户可理解文案

**Feature 3: Markdown Blog**
- Description: 使用仓库内 markdown 作为内容源，构建 blog 列表和详情页
- User flow: 内容作者新增 markdown 文件 -> 构建时生成内容集合 -> 用户访问列表或详情页
- Edge cases: frontmatter 缺失、重复 slug、仅存在单语言版本、草稿文章
- Error handling: 构建阶段对非法文章直接报错；运行时对不存在 slug 返回 404 页面

**Feature 4: Locale Routing**
- Description: 站点使用 URL-based locale strategy，MVP 支持 `en` 与 `zh`
- User flow: 用户访问默认英文路径或中文路径 -> 页面加载对应语言内容 -> 可切换站点语言
- Edge cases: 当前文章无目标语言翻译、切换后目标页面不存在、pathname 带 query/hash
- Error handling: 若无翻译版本，保留当前页面并提供禁用态切换提示

**Feature 5: SEO / LLMO Infrastructure**
- Description: 使用 TanStack Start 官方推荐方式为页面提供 metadata 与机器可读入口
- User flow: 搜索引擎或 LLM 请求页面及文本路由 -> 获取稳定输出 -> 建立收录与引用
- Edge cases: blog 数量增加、文章草稿、canonical 重复、不同语言 alternate 冲突
- Error handling: 构建或测试阶段校验 metadata 与 sitemap 输出，避免上线后发现缺失

### Out of Scope
- 用户登录、后台 CMS、文章在线编辑器
- 评论、点赞、搜索、标签聚合、RSS 订阅
- 自动邮件触达、营销自动化、CRM 深度集成
- 多于 `en` / `zh` 的第三语言支持
- 显式 `auto` 主题模式作为 MVP 验收项

---

## Technical Constraints

### Performance
- 首屏核心内容应支持 SSR 输出
- 公共页面应适合被 Cloudflare 缓存；博客内容优先静态化或近静态化
- blog 列表和详情在正常流量下响应时间目标为 `TTFB < 500ms`（边缘缓存命中时更低）

### Security
- waitlist 表单需具备基本输入校验、速率限制和 anti-spam 策略
- 数据库存储必须避免明文记录不必要的敏感信息；只保存业务必需字段
- 所有公开 metadata 和 llms.txt 不得暴露内部环境变量、管理链接或草稿内容

### Integration
- **TanStack Start**: 用于 SSR、文件路由、server functions / server routes、route-level `head`
- **Paraglide JS**: 用于 URL-based i18n 和中英文文案管理
- **Cloudflare Workers**: 继续作为部署平台
- **Cloudflare D1（推荐假设）**: 作为 waitlist MVP 持久化数据库；若后续替换为其他 DB，需保持 API 合同不变
- **Markdown content pipeline**: 推荐使用 TanStack Start 官方 markdown 指南对应的 content-collections 方案

### Technology Stack
- 保持 React 19 + TanStack Start + Tailwind CSS 4
- 将当前附加语言从 `de` 调整为 `zh`
- blog 内容目录建议使用 `content/blog/`
- 推荐新增依赖：
  - `@content-collections/core`
  - `@content-collections/vite`
  - `gray-matter`
  - `unified`
  - `remark-parse`
  - `remark-gfm`
  - `remark-rehype`
  - `rehype-slug`
  - `rehype-autolink-headings`
  - `html-react-parser` 或等效渲染方案
  - `drizzle-orm`
  - `drizzle-kit`
  - `zod`

---

## MVP Scope & Phasing

### Phase 1: MVP
- `/` 首页
- 首页内嵌或锚点式 waitlist 表单
- `/blog` 列表页
- `/blog/$slug` 详情页
- `/privacy`
- `/terms`
- `en` / `zh` 双语支持
- `light` / `dark` 双主题支持
- `/robots.txt`
- `/sitemap.xml`
- `/llms.txt`

**MVP Definition**:  
用户可以访问 AstraFlow 官方首页，理解产品价值，提交 waitlist；内容团队可以通过新增 markdown 文件发布中英文 blog；搜索引擎和 LLM 能抓取并理解页面和机器可读文本。

### Phase 2: Enhancements
- `llms-full.txt`
- OG image 自动生成
- blog tag / category / related posts
- waitlist 邮件通知或 CRM 对接
- 更细分的 analytics 和转化实验

### Future Considerations
- 内容草稿工作流
- RSS / newsletter
- 多语言扩展
- 案例页、团队页、FAQ、pricing、contact

---

## Risk Assessment

| Risk | Probability | Impact | Mitigation Strategy |
|------|------------|--------|---------------------|
| 视觉参考直接照搬导致品牌辨识度不足 | Med | Med | 只借鉴结构和气质，不复制视觉资产；在 UI spec 中固化 AstraFlow 自有设计语言 |
| markdown 文章命名不一致导致语言配对失败 | High | Med | 在内容构建阶段校验命名规则和 translationGroup |
| SEO/LLMO 合同未统一导致后续返工 | Med | High | 在 route contract 中提前固定 metadata、robots、sitemap、llms.txt 输出要求 |
| waitlist 垃圾提交污染线索 | Med | Med | 增加 honeypot、rate limit、server-side validation 和重复 email 幂等策略 |
| D1 方案后续变化 | Low | Med | 将数据库实现视为可替换基础设施，保持 API schema 稳定 |

---

## Dependencies & Blockers

**Dependencies:**
- 品牌文案与中英文 copy 需要按 UI spec 补齐
- 安装 markdown 内容管线与数据库依赖
- Cloudflare D1 或等价数据库实例准备完毕

**Known Blockers:**
- 当前项目语言仍为 `en/de`，实现前需改为 `en/zh`
- 当前仓库尚无 blog 内容目录和内容 schema

---

## Appendix

### Glossary
- **LLMO**: Large Language Model Optimization，指面向 LLM 可读与可引用的内容与机器可读文本优化
- **translationGroup**: 用于关联同一篇文章的多语言版本
- **route-level head**: TanStack Start 在 route 中声明 metadata 的能力

### References
- TanStack Start Quick Start: https://tanstack.com/start/latest/docs/framework/react/quick-start
- TanStack Start SEO Guide: https://tanstack.com/start/latest/docs/framework/react/guide/seo
- TanStack Start LLMO Guide: https://tanstack.com/start/latest/docs/framework/react/guide/llmo
- TanStack Start Rendering Markdown Guide: https://tanstack.com/start/latest/docs/framework/react/guide/rendering-markdown
- Product background: `docs/bp/bp.md`
- Visual reference: `/root/Projects/Frontend/landingPage/ref`

---

*This PRD was created through interactive requirements gathering with quality scoring to ensure comprehensive coverage of business, functional, UX, and technical dimensions.*
