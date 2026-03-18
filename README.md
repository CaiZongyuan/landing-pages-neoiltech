# neoil-landing-page

基于 TanStack Start 构建的落地页项目，使用 React 19、TanStack Router、Tailwind CSS 4 和 Cloudflare Workers 部署。

线上地址：

`https://neoil-landing-page.airickc1999.workers.dev`

## 项目特点

- 使用 TanStack Start 提供 SSR、文件路由和 Server Functions 能力
- 使用 Tailwind CSS 4 构建样式系统
- 使用 Paraglide JS 处理基于 URL 的多语言路由
- 使用 Shadcn UI 作为基础组件体系
- 使用 Cloudflare Workers 部署，并通过自定义入口 `src/server.ts` 接管 Worker handler

## 技术栈

- React 19
- TanStack Start
- TanStack Router
- Tailwind CSS 4
- Paraglide JS
- Vitest
- Wrangler
- Cloudflare Workers

## 本地开发

安装依赖：

```bash
bun install
```

启动开发环境：

```bash
bun --bun run dev
```

默认运行在 `http://localhost:3000`。

## 常用命令

```bash
bun --bun run dev       # 启动开发服务器
bun --bun run build     # 生产构建
bun --bun run preview   # 先 build 再本地预览
bun --bun run test      # 运行测试
bun --bun run lint      # 运行 ESLint
bun --bun run format    # 检查 Prettier 格式
bun --bun run check     # 自动格式化并修复 lint
bun run deploy          # 构建并部署到 Cloudflare Workers
bun run cf-typegen      # 生成 Wrangler 类型
```

## 项目结构

```text
src/
  components/           # 共享组件
  components/ui/        # Shadcn UI 组件
  routes/               # TanStack Router 文件路由
  paraglide/            # Paraglide 生成产物
  lib/                  # 工具函数
  styles.css            # 全局样式与设计变量
  server.ts             # Cloudflare Workers 自定义入口
docs/
  prd/                  # 产品需求文档
  api/                  # API / 运行时契约文档
tests/                  # 测试用例文档
wrangler.jsonc          # Cloudflare Workers 配置
vite.config.ts          # Vite / TanStack Start / Cloudflare 配置
```

## 路由说明

项目当前使用 TanStack Router 的文件路由模式：

- `src/routes/__root.tsx`：根布局
- `src/routes/index.tsx`：首页
- `src/routes/about.tsx`：关于页

新增页面时，直接在 `src/routes/` 下添加新文件即可。

## 国际化

项目通过 Paraglide JS 管理多语言内容和 URL 语言前缀。

- 基础语言：`en`
- 附加语言：`de`
- 语言消息来源：`messages/{locale}.json`
- 生成目录：`src/paraglide/`

开发或构建时会自动重新生成 Paraglide 输出。

## Cloudflare 部署

当前项目已配置为 Cloudflare Workers 自定义入口模式：

- Worker 入口文件：`src/server.ts`
- Wrangler 配置文件：`wrangler.jsonc`
- `main` 指向：`src/server.ts`

部署命令：

```bash
bun run deploy
```

如果需要调整 Worker 名称、兼容日期或 bindings，请修改 `wrangler.jsonc`。

## 测试与验证

运行全部测试：

```bash
bun --bun run test
```

生产构建验证：

```bash
bun --bun run build
```

当前仓库包含针对 Cloudflare 自定义入口的基础测试，确保 `src/server.ts` 继续复用 TanStack Start 默认 `fetch` handler。

## 开发说明

- 路径别名 `#/*` 和 `@/*` 都指向 `src/*`
- 推荐使用 `Link` from `@tanstack/react-router` 处理站内跳转
- 全局视觉变量定义在 `src/styles.css`
- 主题支持 `light`、`dark` 和 `auto`

## License

如无额外说明，默认按仓库所有者约定使用。
