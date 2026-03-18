# Cloudflare Custom Entrypoint Test Cases

## 范围

验证 TanStack Start 在 Cloudflare Workers 下的自定义入口配置是否正确，且不会破坏现有 SSR fetch 流程。

## Cases

1. 自定义入口转发默认 fetch handler
   期望：`src/server.ts` 默认导出的 `fetch` 与 `@tanstack/react-start/server-entry` 的 `fetch` 为同一引用

2. Wrangler 指向仓库内入口
   期望：`wrangler.jsonc` 的 `main` 指向 `src/server.ts`

3. 构建流程可用
   期望：执行 `bun --bun run build` 成功，说明 Vite、TanStack Start 和 Wrangler 配置兼容

4. 预览流程符合 Cloudflare 官方建议
   期望：存在会先 build 再 preview 的脚本，避免直接预览未构建产物

## 不覆盖

- Queue / Cron / Durable Object 实际运行
- 真实线上 deploy
