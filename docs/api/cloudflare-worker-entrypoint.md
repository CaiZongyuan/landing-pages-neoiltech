# Cloudflare Worker Entrypoint Contract

## 文件

`src/server.ts`

## 默认导出

导出一个 Worker handler object，最少包含以下接口：

```ts
export default {
  fetch: handler.fetch,
}
```

其中 `handler` 来自 `@tanstack/react-start/server-entry`。

## 约束

1. `fetch` 必须直接复用 TanStack Start 默认 handler，不能替换成自定义响应逻辑
2. 入口文件必须保留为仓库内路径，供 `wrangler.jsonc` 的 `main` 引用
3. 允许后续在同一文件中追加 `queue`、`scheduled`、`email`、`tail` 或 Durable Object exports
4. 若未来接入 bindings，应继续通过 Cloudflare Workers 运行时能力与 Wrangler 配置声明，不在本次交付内实现

## 相关配置

`wrangler.jsonc` 需要满足：

```json
{
  "main": "src/server.ts"
}
```
