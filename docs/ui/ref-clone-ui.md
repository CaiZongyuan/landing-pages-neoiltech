# UI Specification: TanStack Start UI Clone of `ref`

**Version**: 1.0  
**Date**: 2026-03-19  
**Source PRD**: `docs/prd/ref-clone-ui.md`  
**Related Issue**: `#8`

## Design Goal

目标不是做“风格接近”的 marketing page，而是在 TanStack Start 中尽量等价复刻 `/root/Projects/Frontend/landingPage/ref` 的可见 UI。视觉、留白、圆角、渐变、玻璃感、卡片层次、按钮尺寸、文案与路由结构都应优先向参考项目对齐。

## Route-Level UI

### `/`
- 固定顶部 liquid glass header
- Hero 含 badge、双行大标题、description、双 CTA、prompt bar、app preview mock
- 后续 section 顺序：
  - features
  - demo with tabs and prompt output
  - testimonials with carousel controls
  - privacy block
  - newsletter block
  - footer

### `/blog`
- 与参考实现一致的 `Blog` 标题和说明文案
- 分类 pills 一行排列
- 双列卡片网格
- 页面底部有返回首页 CTA block

### `/blog/$slug`
- 左侧正文，右侧 sticky 目录卡片
- 顶部保留返回 `All`
- 不存在 slug 时显示独立空状态卡片

## Shared Components

### LiquidHeader
- 左侧 logo mark + wordmark
- 中间导航：`Home` / `About` / `Blog`
- 右侧 `Login`、`Get started`、移动端 menu
- 背景为高 blur + 高光 + ring 的胶囊容器

### SoftCard
- 大圆角
- 半透明白底
- 轻微 backdrop blur
- 浅色 ring
- 柔和阴影
- 内层有 radial gradient 光感

### Dialogs
- `About Dona`
- `Watch video`
- 应使用站内弹层，不切换路由

## Styling Rules

- 主字体与 `ref` 对齐：display heading 与 body 字体分离
- 背景应包含大面积渐变雾感与轻微 noise
- 不保留当前仓库青绿色模板视觉 token
- 颜色、阴影、border/ring、圆角和 spacings 优先以 `ref` 为准

## Interaction Rules

- 首页 anchor 交互使用平滑滚动
- Blog 分类切换即时过滤，无 loading 态
- Blog 目录点击平滑滚动到正文锚点
- Newsletter / demo prompt / about / watch video 均为静态 UI 交互

## Accessibility

- 所有按钮与链接有明确文本
- Dialog 有标题
- 目录链接可键盘访问
- `h1` 在每个主页面唯一

## Validation

- Home、Blog、Blog Post 三页结构与 `ref` 可逐区块对照
- 核心交互可操作：导航、dialog、tab、carousel、form、目录锚点
