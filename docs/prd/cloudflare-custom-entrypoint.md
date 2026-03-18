# Cloudflare Custom Entrypoint PRD

## 背景

当前项目已经接入 `@cloudflare/vite-plugin`、`wrangler` 和 TanStack Start SSR，但 `wrangler.jsonc` 仍直接使用 `@tanstack/react-start/server-entry` 作为默认入口。根据 Cloudflare Workers 官方 TanStack Start 文档，若需要后续扩展 Queues、Cron Triggers、Durable Objects 或其他 Workers exports，应切换到项目内自定义 server entrypoint。

## 目标

将项目调整为可部署到 Cloudflare Workers 的自定义入口模式，并保持现有 TanStack Start SSR 行为不变。

## 非目标

- 本次不引入新的 Queue、Cron、Durable Object 或 Workflow 业务逻辑
- 本次不修改页面 UI、路由结构或 i18n 行为
- 本次不接入新的 Cloudflare bindings

## 用户故事

作为维护者，我希望项目通过 `src/server.ts` 统一导出 Worker handler，这样在不破坏现有 SSR 的前提下，可以继续扩展 Cloudflare 原生能力并直接部署。

## Acceptance Criteria

1. `wrangler.jsonc` 的 `main` 指向仓库内的自定义入口文件，而不是 `@tanstack/react-start/server-entry`
2. 自定义入口继续复用 TanStack Start 默认 `fetch` handler，保证现有请求处理行为不变
3. 项目保留并明确 Cloudflare 本地预览与部署脚本
4. 存在自动化测试覆盖自定义入口对默认 `fetch` handler 的转发行为
5. `bun --bun run build` 可以通过

## 验收命令

```bash
bun --bun run test
bun --bun run build
```
