# Dogfood Report: AstraFlow Merlin Refresh

| Field | Value |
|-------|-------|
| **Date** | 2026-03-19 |
| **App URL** | `http://127.0.0.1:3061` |
| **Session** | `merlin-refresh-qa`, `merlin-refresh-mobile-clean` |
| **Scope** | 首页 UI/UX：desktop/mobile、mobile menu、FAQ、waitlist 演示态、footer 可用性 |

## Summary

| Severity | Count |
|----------|-------|
| Critical | 0 |
| High | 0 |
| Medium | 0 |
| Low | 0 |
| **Total** | **0** |

## Tested Flows

1. 首屏与长页叙事结构
   Evidence:
   `screenshots/home-desktop-annotated.png`
   `screenshots/home-mobile-annotated.png`
   `home-desktop.body.txt`
   `home-mobile.body.txt`

2. Mobile menu 打开与导航项可见性
   Evidence:
   `screenshots/mobile-menu-clean-open.png`

3. FAQ 展开状态
   Evidence:
   `screenshots/faq-open.png`
   `faq-open.body.txt`

4. Waitlist 演示态提交成功
   Evidence:
   `screenshots/waitlist-success.png`
   `waitlist-success.body.txt`

## Result

本轮 dogfood 未发现新的可复现剩余问题。首页在 desktop 和 mobile 下都已覆盖：

- 强 hero + product mock + 长页叙事结构
- 可打开的 mobile menu，包含 Why now / How it works / FAQ / Blog / locale toggle
- FAQ accordion 正常展开
- waitlist 输入框具备基本必填约束，并能进入 success 演示态
- footer 链接已改为真实可点击入口

## Notes

- 本地 dev server 中仍可见 `TanStack Devtools` 按钮；这是开发环境行为，不计为发布问题。生产构建已验证会移除 devtools 注入。
- 在 dogfood 前的自测阶段曾发现两个低级 UX 问题，并已在本次实现中修复：
  - footer 文本看似链接但不可点击
  - waitlist 表单允许空 email 提交
