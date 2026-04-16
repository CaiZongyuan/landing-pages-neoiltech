# Test Cases: Household Agent Visual Refresh

**Date**: 2026-04-16  
**Source PRD**: `docs/prd/household-agent-visual-refresh.md`

## Scope

验证 landing page 是否已经把三张本地 AIGC 图片整合成完整的三幕叙事，并保持现有首页基础能力。

## Automated Cases

1. `HomePage` 源码直接导入 `assets/01.webp`、`assets/02.webp`、`assets/03.webp`
2. 首屏存在“隐形负担 / 家庭 CEO / complex family coordination”方向的主文案
3. 中段存在“world model / people places time tasks”方向的系统理解文案
4. 后段存在“voice / photo / agent handles complexity”方向的低打扰委托文案
5. 页面仍保留 FAQ、waitlist form 与 blog 入口相关代码

## Manual Cases

1. 桌面端查看首屏，确认第一张图是最大主视觉，文案未遮挡主体
2. 滚动至中段，确认第二张图与“系统重构复杂性”文案是同一章节
3. 滚动至后段，确认第三张图与语音/拍照录入叙事相邻
4. 切换 `en` / `zh`，确认首页主要文案都有对应语言版本
5. 点击主 CTA，确认仍能滚动到 waitlist 区块
