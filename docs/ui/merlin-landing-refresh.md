# UI Specification: Merlin-Inspired Landing Refresh

**Version**: 1.0  
**Date**: 2026-03-19  
**Source PRD**: `docs/prd/merlin-landing-refresh.md`  
**Content Source of Truth**: `docs/bp/bp.md`

---

## Design Direction

- 风格关键词：`editorial`, `high-signal`, `calm authority`, `glass depth`, `product-first`
- 不做 Merlin 品牌复制，但借鉴其“重叙事、强产品画面、连续证据”的节奏
- AstraFlow 的视觉应更偏冷静科技、家庭协作、长期可信赖，而不是效率工具的 hustle 感
- 页面核心文案要来自 BP，而不是重新发明一套更空泛的营销句子

---

## Visual System

### Typography

- 维持 `Clash Display + Manrope` 体系
- H1 更大、更紧凑，支持 2 行以内强主张
- 长段落拆成更短的 supporting copy，避免出现大块正文

### Color

- 继续使用冷白 + 深墨 + 青蓝高光，但拉开层次
- 背景至少分为：全局氛围层、section surface、interactive card 层
- CTA 采用更高对比度深色按钮，并在次级按钮上保持 glass/outline 语言

### Surfaces

- 统一大圆角卡片、柔和边框、雾化背景
- 不同 section 的卡片密度需要变化，避免整页都用同一种白卡片
- 产品演示区需要比 feature 卡更“像真实产品界面”

### Motion

- 页面加载：hero、proof 卡片与 section 标题轻量 reveal
- FAQ 展开具备平滑高度/透明度过渡
- 菜单面板开合有简洁过渡

---

## Homepage Sections

### 1. Proof Bar

- 位于 hero 上方
- 内容可以是 stat / promise / principle 的组合，例如：
  - `Designed for high-context households`
  - `Human-in-the-loop by default`
  - `From signal to follow-through`

### 2. Hero

- 左侧：eyebrow、H1、supporting copy、双 CTA、微型信号标签
- 右侧：产品界面感 mockup
- mockup 不需要真实截图，但需要体现：
  - Household Gateway / family context 的入口
  - 家庭成员 agent 状态
  - 一个具体 workflow / EaseFlow
- Hero copy 必须传达：
  - `not another assistant`
  - `execution ownership`
  - `family context over time`

### 3. Why Now / Problem

- 使用 2 到 3 个问题卡片说明家庭协作为何会失控
- 文案必须具体，不用泛化 AI 术语
- 至少有一张卡片对应 BP 中“家庭组织者的隐形劳动”
- 至少有一张卡片对应“现有工具只解决单段，不解决全链路”

### 4. Operating Loop

- 3-step 或 4-step 结构
- 推荐顺序：
  - Capture / Structure family context
  - Route work to the right agent
  - Execute with permissions and confirmations
  - Follow through and build context

### 5. Feature Outcomes

- 使用 4 到 6 张 outcome card
- 每张卡不要只写抽象能力，要写用户获得的结果
- outcome card 应优先来自 BP 概念：
  - Household Gateway
  - personalized AI Agents
  - Household Heartbeat
  - EaseFlows
  - auditable family context
  - permissioned execution

### 6. Comparison / Principles

- 可采用 split layout：
  - 左侧：without AstraFlow / today’s fragmented workflow
  - 右侧：with AstraFlow
- 或使用 principles 列表：
  - calm by default
  - explainable memory
  - permission-aware automation

### 7. Trust Section

- 包含 privacy、oversight、control
- 允许出现 2 到 3 个“原则徽章”，但不能假装已有未验证资质

### 8. FAQ

- 4 到 6 个问题
- 语气要提前处理用户疑虑，例如：
  - 这是不是另一个聊天机器人？
  - 高风险操作怎么控制？
  - 适合什么样的家庭？
  - 现在加入 waitlist 会收到什么？

### 9. Final CTA

- 采用更强的 concluding block
- 包含输入框、CTA、辅助文案和 2 到 3 个 benefit bullets

### 10. Footer

- 包含品牌、简短说明、blog、legal、社交占位或 contact 占位
- 删除所有 starter 模板残留

---

## Responsive Rules

### Desktop

- hero 两栏明显分区
- section 之间有足够呼吸感
- comparison / trust / workflow 可采用不对称布局

### Mobile

- hero 改为单列，但 CTA 仍需早出现
- mockup 缩短高度，避免首屏过长
- 所有卡片内边距和字号需要重调
- header 保留 logo + CTA + menu，菜单打开后展示完整导航

---

## UI States

### Waitlist Demo Form

- idle
- pending
- success

### FAQ

- collapsed
- expanded

### Mobile Menu

- closed
- open

---

## Manual Review Checklist

- 首屏看起来是否已经像“正式产品 landing page”而不是 demo
- 移动端是否可以顺畅进入任一主要锚点
- 页面是否在多个 section 之间有足够视觉变化
- footer、CTA、FAQ 是否完成品牌闭环
- 与 `qa/baselines/merlin-refresh/reference/*` 相比，是否已经吸收“叙事密度”和“产品画面优先”的优点
