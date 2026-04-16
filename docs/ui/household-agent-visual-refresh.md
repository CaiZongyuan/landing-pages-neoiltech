# UI Specification: Household Agent Visual Refresh

**Version**: 1.0  
**Date**: 2026-04-16  
**Source PRD**: `docs/prd/household-agent-visual-refresh.md`

---

## Design Direction

- 气质关键词：`cinematic`, `calm pressure`, `premium`, `controlled intelligence`, `family realism`
- 不把图片当成背景素材堆上去，而是让页面结构服务于三幕叙事
- 延续现有深灰、低饱和天蓝、钢蓝高光的方向，避免赛博朋克、霓虹紫和廉价 dashboard 感
- 页面保留高端科技生活方式品牌的克制感，而不是过度动效或信息流 UI

---

## Homepage Narrative

### Act 1: Invisible Load

- 使用 `assets/01.webp`
- 放在 hero 区或 hero 后第一主视觉区
- 文案重点：
  - 家庭 CEO
  - invisible labor
  - constant interruptions
  - one person silently carrying the routing
- 版式建议：
  - 文案与 CTA 在一侧
  - 图片占据更大视觉权重
  - 使用轻遮罩和局部信息卡片，不要把原图完全盖住

### Act 2: World Model

- 使用 `assets/02.webp`
- 作为“系统如何工作”的主章节，而不是普通 feature card
- 文案重点：
  - family world model
  - people, places, time, tasks, conflicts
  - multi-thread planning
  - persistent learning
- 版式建议：
  - 采用左右不对称布局
  - 搭配少量高价值标签或要点，不做传统表格

### Act 3: Hand Off Reality

- 使用 `assets/03.webp`
- 作为接近转化前的生活方式章节
- 文案重点：
  - voice in
  - snap a photo
  - the system understands context
  - user lives, agent handles complexity
- 版式建议：
  - 画面更轻、更松弛
  - 紧接最终 waitlist CTA

---

## Section Order

1. Hero / Act 1
2. Why AstraFlow now
3. Act 2: world model + planning
4. Supporting capabilities / principles
5. Act 3: low-friction capture
6. FAQ
7. Final waitlist CTA

---

## Responsive Rules

- Desktop:
  - 三张图应有明确主次，不要都做成同样大小的缩略卡
  - Hero 图片优先表现电影感和留白
- Mobile:
  - 图片保持完整比例感，不做过度裁切
  - 文案段落缩短，避免首屏被大段正文挤压
  - CTA 在前三屏内必须持续可见

---

## Accessibility

- 每张图片必须有描述性的 `alt`
- H1 保持唯一
- CTA、FAQ、导航保持原有可访问交互
