# API Specification: Merlin-Inspired Landing Refresh

**Version**: 1.0  
**Date**: 2026-03-19  
**Source PRD**: `docs/prd/merlin-landing-refresh.md`  
**Status**: No runtime API changes

---

## Overview

本次改造聚焦 landing page 的内容与 UI/UX 升级，不新增服务端 API，不修改现有公开路由合同。所有变化均发生在客户端展示层与交互细节层。

---

## Runtime Contract Changes

### No New Endpoints

- 不新增 `/api/*` endpoint
- 不修改现有 blog 路由或 locale 路由
- 不引入新的后端依赖或数据库写入

### Client-Side Interaction Contracts

#### Mobile Navigation

- 用户点击 header 中的菜单按钮时，必须打开可见的导航面板
- 导航面板至少包含：
  - 首页顶部锚点
  - 关键内容锚点（例如 workflow / FAQ / waitlist）
  - `/blog`
  - locale toggle
- 再次点击关闭按钮、遮罩或导航项后，面板关闭

#### FAQ Accordion

- FAQ 项支持展开/收起
- 同一时刻可允许单项或多项展开，但行为必须稳定一致
- 展开状态在键盘与触控操作下都可触发

#### Waitlist Demo Form

- 当前阶段维持 client-only 演示态
- 最低合同：
  - 输入 email 后点击提交
  - 表单进入 pending 态
  - 返回可见成功反馈文案
  - 可重复演示，不导致页面报错

---

## Accessibility Contracts

- 菜单按钮必须具有可访问名称
- FAQ 触发器使用 button 语义，并暴露展开状态
- 关键 CTA 保持明确文本，不使用仅图标按钮承担主要动作
- 页面保留单一 H1

---

## Validation

- 自动化测试覆盖：
  - 移动端导航开关
  - FAQ 折叠行为
  - waitlist 演示态交互
- 手工测试覆盖：
  - desktop 1440px
  - mobile 390px

