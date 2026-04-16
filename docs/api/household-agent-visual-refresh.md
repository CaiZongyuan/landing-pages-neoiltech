# API Specification: Household Agent Visual Refresh

**Version**: 1.0  
**Date**: 2026-04-16  
**Source PRD**: `docs/prd/household-agent-visual-refresh.md`  
**Status**: No runtime API changes

---

## Overview

本次刷新只调整 landing page 的内容、图片资源使用方式和前端呈现逻辑，不新增任何 server endpoint，也不改变现有 `/blog`、locale 路由或 waitlist 演示态的运行时合同。

---

## Runtime Contract

### Route Contract

- `/` 继续渲染 `HomePage`
- `/blog` 及相关 blog 路由保持不变
- locale 切换逻辑保持 `en` / `zh`

### Asset Contract

- 首页实现必须直接引用本地资源：
  - `assets/01.webp`
  - `assets/02.webp`
  - `assets/03.webp`
- 不允许改成远程 CDN 占位图或 data URL

### Interaction Contract

- 主 CTA 继续滚动到 `#waitlist`
- FAQ 继续支持展开/收起
- waitlist demo form 继续保持 client-only 演示态
- 新图片与叙事区块不能破坏移动端导航、语言切换和现有 blog 跳转

---

## Validation

- `bun --bun run test`
- `bun --bun run build`
