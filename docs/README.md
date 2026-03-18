# docs/

> Source of Truth：`AGENTS.md`。本目录的文档用于“可版本化、可 review、可作为交付合同”的需求与契约；如与 `AGENTS.md` 冲突，以 `AGENTS.md` 为准。

这里放“可版本化、可 review、可作为交付合同”的文档。

## 目录约定

- `docs/prd/{feature}.md`：需求（含 in/out of scope、验收标准）
- `docs/api/{feature}.md`：接口契约（schema、错误码、权限、边界条件）
- `docs/ui/{feature}.md`：页面/路由/状态/交互（loading/empty/error/success）
- `docs/ui/{feature}.prototype.html`（可选）：静态 HTML 原型（给实现对照）

## 命名与版本

- `{feature}` 使用 kebab-case（例如 `user-auth`）
- 文档头部建议包含：`Version`、`Date`、`Author`、变更点（需求变更时尤其重要）
