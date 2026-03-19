AstraFlow 内部 BP（Investor-ready 重写版 v0.0.3）
用途： 融资沟通 / 顶级投资人阅读 / 内部战略对齐
版本： v0.0.3
日期： 2026-03-19
定位基线
- Category： Family Execution System
- Product Thesis： personalized AI Agents that build family context and deliver outcomes
- Capability Layer： EaseFlows（悦流）
- Brand First Impression： 冷静、可靠、克制、能推进

---
目录
1. 投资 / 内部摘要（TL;DR）
2. 机会与问题：为什么是家庭执行，为什么是现在
3. 产品定义：AstraFlow = Family Execution System + personalized AI Agents
4. 来自 Agent Infrastructure 的关键验证（以 OpenClaw 为代表）
5. 产品形态：每个家庭成员一个 AI Agent
6. 系统架构：从 Interface 到 Execution 的统一叙事
7. 安全、隐私与 Human-in-the-Loop
8. 竞争与差异化：我们赢在什么
9. 商业模式：海外订阅主线 + 国内混合路径
10. 增长与分发：从家庭组织者切入到全家渗透
11. 指标体系：衡量“交付结果”，而不是“聊了多少”
12. 路线图：0–18 个月产品与商业节奏
13. 风险与对策
14. 附录：参考资料与外部验证

---
1. 投资 / 内部摘要（TL;DR）
1.1 一句话
AstraFlow 是面向现代家庭的 Family Execution System。
它以 personalized AI Agents 为执行单元，持续构建 family context，把家庭中的碎片信息转化为被分派、被跟进、被完成的结果；并通过 EaseFlows（悦流），把家庭经验与专业方案沉淀为可复用、可审计、可演化的执行协议。
1.2 我们真正解决的问题
家庭里最大的缺口，不是缺信息，也不是缺一个会聊天的 AI。
真正的缺口是：没有一个系统对家庭事务的执行结果负责。
今天的家庭仍然依赖一个“隐形操作系统”在运转——通常是家庭组织者。
TA 负责记住信息、协调角色、推动执行、兜底遗漏。
现有工具能记录、能提醒、能沟通，但很少能真正承担 execution ownership。
AstraFlow 补的正是这个空白：
把“总有一个人靠脑子顶着整个家庭运转”的状态，升级为一个持续运行、可路由、可追踪、可学习的系统。
1.3 为什么是现在
三股力量第一次同时成立：
1）AI Agents 正开始走入家庭。
但当前多数产品仍停留在聊天、问答、提醒或设备控制。
第一代家庭 AI 解决的是“interaction”，还没有解决“execution”。
2）技术已进入可用区间。
Multi-agent orchestration、tool use、persistent memory、Realtime Voice、event-driven systems、protocolized tools、MCP 以及 Skills 等能力，已经让“持续运行、可控自治”的 Agent 从 demo 走向产品。
3）家庭协调成本在上升。
双职工、孩子教育、老人照护、跨系统信息碎片化，使家庭越来越像一个高频协作网络。
问题不再是“有没有工具”，而是“有没有一个系统能把这些工具 harness 起来，形成交付结果的执行层”。
1.4 我们的产品形态
AstraFlow 不是 another AI assistant。
它的基本形态是四层：
- Household Gateway： 家庭常驻中枢，统一接入人、设备、消息和服务
- Personalized AI Agents： 每个家庭成员一个 Agent，具备身份、个性、权限、记忆、目标
- Household Heartbeat： 后台持续运行的事件与检查机制
- EaseFlows（悦流）： 超越 Skills 的 outcome-oriented execution layer
1.5 我们的核心主张
- 家庭协作不是“多人聊天”，而是系统级路由 + 责任闭环
- 用户不需要另一个会说话的助手，而需要一个会推进结果的 Agent
- 未来进入家庭的 AI，不会只是更会交流；它必须同时具备 personality、context、execution、trust
- 真正的护城河不是一次性回答，而是不断积累的 family context + 可复用的 EaseFlows
1.6 商业模式判断
- 海外： Family subscription 是主线，专业化 EaseFlows / Care Packs 提升 ARPU
- 国内： 不押注纯 B2C 订阅，采用“轻订阅 + outcome-based + B2B2C”三路径并行
- 长期： EaseFlows marketplace / 专业作者生态 / 家庭级 data advantage

---
2. 机会与问题：为什么是家庭执行，为什么是现在
2.1 家庭组织者的“隐形劳动”是结构性缺口
在多数家庭中，总有人承担着家庭的实际运营工作。
TA 不是名义上的“负责人”，却是事实上的 household operator。
这类工作包括：
- 信息整合：聊天、学校通知、账单、医院叮嘱、照片、日历
- 协调判断：孩子、老人、配偶、宠物、工作安排之间的优先级冲突
- 执行兜底：事情没人推进时，最终由组织者收尾
- 情绪承压：一旦遗漏，成本往往不是 inconvenience，而是真实后果
这是一个长期被低估的市场：
它不是“生活方式问题”，而是高频、刚性、后果敏感的执行问题。
2.2 现有方案为什么都不够
今天的工具大多只解决一段，不解决全链路。
- Messaging Apps： 信息很多，但没有结构、没有责任归属
- To-do / Calendar： 能记录，不能判断“谁该做什么、做到没、没做到怎么办”
- Health / Education Apps： 各管一段，缺少跨场景协调
- General LLMs / AI assistants： 能回答、能建议，但缺少长期上下文、权限治理与执行所有权
结果是：
家庭的真实工作流依然靠“一个人脑内协调 + 手工推进”。
2.3 Category Opening：家庭需要的是 Execution System
我们认为，家庭市场真正缺失的不是 another interface，而是三件事同时成立：
- System of Record： 记住这个家庭长期发生了什么
- System of Action： 让事情被分派、被跟进、被完成
- System of Learning： 把经验沉淀成可复用的方法
这三者叠加，才构成真正的 Family Execution System。
2.4 为什么“个性化 Agent”是必要的，不是装饰
家庭不是企业，也不是冷冰冰的任务系统。
家庭里的 AI 不能只是一个 workflow bot。
要真正进入家庭，它必须同时满足两点：
- Capable： 能交付结果，承担执行闭环
- Personable： 能以稳定口吻、长期记忆和适当个性建立信任
这也是为什么我们强调 personalized AI Agents。
未来的家庭 Agent，体验上更接近一个 practical version of Her / household Jarvis，而不是一个无差别的 chatbot。
但我们不把“人格化”当戏剧化表演，而是把它当成提高信任、配合度和长期使用意愿的交互基础设施。

---
3. 产品定义：AstraFlow = Family Execution System + personalized AI Agents
3.1 我们不是什么
AstraFlow 不是：
- 家庭版日历
- 家庭版 Notion
- 家庭版 chat assistant
- 智能家居控制面板
- 情绪陪伴产品
- 单点健康管理 App
3.2 我们是什么
AstraFlow 是一个面向现代家庭的 Family Execution System。
本质上，AstraFlow harnesses family context、personalized AI Agents 与 EaseFlows，形成一个持续运行的家庭执行层。
它的主循环是：
Capture → Structure → Route → Execute → Follow Through → Reflect → Build Context
这不是“更聪明地记录生活”，而是“让家庭事务形成结果”。
3.3 核心产品承诺
AstraFlow 对用户的承诺不是“更懂你”，而是三件更硬的事：
1）帮你把家庭信息转成行动。
不是停在消息和提醒，而是进入分派、确认、执行与复盘。
2）帮你把责任从一个人脑子里拿出来。
让家庭运行不再依赖某个人永远在线、永远记得、永远兜底。
3）帮你把这个家的方法沉淀下来。
不是只留下聊天记录，而是留下能重复使用的 Flows。
3.4 品牌应该给人的第一印象
AstraFlow 的第一印象不该是“聪明”，而该是：
- 冷静
- 可靠
- 克制
- 能推进
它不是一个喧闹的 AI 品牌。
它更像一个沉着的家庭执行系统：不炫技，不打扰，但关键时刻不掉链子。
3.5 对外定位表达（建议统一）
中文：
AstraFlow 不是另一个家庭助手，而是家庭执行系统。
它以个性化 AI Agents 持续构建家庭上下文，把碎片信息转化为可交付结果，并通过 EaseFlows（悦流）让家庭经验持续复利。
英文：
AstraFlow is not a family assistant. It is a Family Execution System.
Powered by personalized AI Agents, it builds household context over time and turns fragmented family information into coordinated outcomes.

---
4. 来自 Agent Infrastructure 的关键验证（以 OpenClaw 为代表）
我们借鉴的不是 UI，而是机制。
以 OpenClaw 为代表的一批 agent infrastructure 产品，验证了一个关键事实：
当 Agent 具备 persistent runtime、tool use、memory、event-driven execution 与 extensibility 时，用户会开始把它当成新的 operating layer。
AstraFlow 要做的，是把这套机制翻译进家庭场景，并加上更强的安全、权限与信任设计。
4.1 Persistent Gateway → Household Gateway
家庭不是一次性对话场景，而是持续发生的系统。
AstraFlow 的 Household Gateway 统一接入：
- App（text / voice / multimodal capture）
- 通知与消息渠道
- Calendar / health data / IoT
- 外部专业服务接口（按地区与合规策略选择）
Gateway 的意义不是连接更多 API，
而是让家庭 AI 从“被叫醒的 assistant”变成“持续运行的 system”。
4.2 Heartbeat → Household Heartbeat
家庭事务不是用户每次都记得发起。
所以系统必须具备 Household Heartbeat：
- 每日 / 每周 summary
- 高风险事项检测
- 状态变化触发
- 到期 / 缺失 / 异常跟进
Heartbeat 让 AstraFlow 不只是响应，而是主动推进。
4.3 Skills → EaseFlows（悦流）
我们不采用普通的 “Skills” 叙事。
因为对家庭来说，Skills 太像功能插件，无法表达真正的价值层。
EaseFlows（悦流） 是 AstraFlow 的核心能力层。
它不是简单的 Skills，而是一个 outcome-oriented execution layer。
一个 EaseFlow 通常包含：
- 目标（Goal）
- 上下文输入（Context）
- 触发器（Trigger）
- 角色与权限（Roles / Permissions）
- 工具调用（Tools）
- 沟通策略（Communication Pattern）
- 确认与升级机制（Confirmation / Escalation）
- 异常处理（Exception Handling）
- 结果指标（Outcome Metrics）
换句话说，EaseFlows 不是“会做某件事的技能”，
而是“把一类家庭事务稳定跑完的方法”。
4.4 Auditable Memory → Family Context
AstraFlow 不把 memory 当成玄学。
我们把它定义为 family context：一个可分区、可解释、可导出、可删除、可审计的家庭长期上下文系统。
这既是产品价值，也是信任基础。
4.5 Controlled Autonomy → Permissioned Execution
越强的 Agent，越需要像基础设施一样治理。
AstraFlow 的原则是：
- 默认最小权限（least privilege）
- 高风险动作强制确认
- 关键行为可追溯、可解释
- 可编程能力运行于 sandbox
- 所有 EaseFlows 有明确权限声明与风险等级

---
5. 产品形态：每个家庭成员一个 AI Agent
5.1 为什么不是“一个更大的家庭 AI”
家庭天然是多角色、多边界、多目标的系统。
如果只有一个通用 Agent，用户很快会遇到问题：
- 谁能看到什么？
- 谁能执行什么？
- 这个提醒是给谁的？
- 这个决定需要谁确认？
- 这个历史记忆属于个人，还是属于全家？
因此，AstraFlow 的产品形态不是“一个会分身的助手”，
而是每个家庭成员一个 personalized AI Agent。
5.2 我们对 personalized AI Agent 的定义
每个家庭成员的 Agent 都应具备：
1. Identity：名字、角色、称呼、稳定口吻
2. Personality：适度个性与交流风格，用于建立长期信任，而非表演化人设
3. Goals：围绕该成员的长期目标与日常优先级
4. Permissions：可见数据范围与可执行动作边界
5. Memory Scope：个人记忆、共享记忆、可导出的上下文边界
6. Tools：通知、Calendar、日志写入、健康数据读取、设备控制等
7. Triggers：time-based、event-based、state-based
8. HITL Policy：哪些动作必须由谁确认
5.3 这类 Agent 的产品价值
我们认为，进入家庭的 Agent 不是“更像人”就够了。
它必须同时具备：
- relationship layer：用户愿意和它交流
- execution layer：系统能把事做完
- trust layer：每一步边界清楚、可解释、可审计
只有三层同时成立，它才会从 novelty 变成 household infrastructure。
5.4 典型 Agent 矩阵
以一个家庭为例：
- Household Operator Agent：跨成员协调、冲突解决、周计划与家庭总览
- Parent Agents：个人日程、待办、情绪与协作确认
- Child Agent：学习节奏、习惯养成、保护性边界更强
- Elder Care Agent：用药、复查、异常提醒，强调简洁交互与强免责声明
- Home / Device Agent（可选）：负责家庭设备与环境控制
5.5 协作机制：不是多人聊天，而是系统级路由
AstraFlow 的协作不以“拉群聊”为核心，而以三件事为核心：
- Action Routing：判断这件事该找谁
- Stateful Follow-up：对未完成事项持续跟进
- Reflect & Learn：完成后写入 context，并沉淀为 EaseFlows

---
6. 系统架构：从 Interface 到 Execution 的统一叙事
6.1 L1：Interface / Gateway Layer
- Household Gateway 常驻运行
- 接入 App、Web、voice、IoT、health data、messages
- 输出标准化 event stream 与 UI action loop
6.2 L2：Orchestration Layer
- Stateful context management
- Family-member routing
- Trigger engine（heartbeat / cron / event / state change）
- Session persistence
6.3 L3：Business Logic Layer
- Household planner / meta coordinator
- Worker Agents with minimal permissions
- EaseFlow executor：将声明式 Flow 翻译为具体执行动作
6.4 L4：Data Persistence Layer
- 消息与状态分层持久化
- Personal memory / shared family context 分区
- EaseFlows 版本化管理
- 可回放的执行日志与 trace
6.5 L5：Isolation & Tool Layer
- sandbox execution
- network / file whitelist
- external tool abstraction
- MCP / protocolized integrations
这套架构的核心不是“复杂”，而是三个词：
- Persistent
- Permissioned
- Outcome-oriented

---
7. 安全、隐私与 Human-in-the-Loop
7.1 核心原则
AstraFlow 不把家庭场景当成“低风险 consumer AI”。
相反，我们把它视作一个高信任系统，默认采用更严格的治理原则：
- least privilege
- auditable actions
- explainable decisions
- reversible high-risk operations
- human confirmation where needed
7.2 家庭场景的特殊约束
家庭不同于一般消费工具，因为它包含：
- 孩子与老人等高敏感人群
- 健康、教育、财务等后果敏感领域
- 多成员之间天然不对称的权限结构
- 长期上下文积累带来的信任负债
因此，我们必须把边界做进系统，而不是做成文案承诺。
7.3 具体设计
- 每个 Agent 独立权限集
- 每个 EaseFlow 明确声明风险等级与可调用工具
- 对外沟通、支付、删除、医疗相关建议等高风险动作默认确认
- 所有执行链路有 trace
- 关键记忆可导出、可删除、可审计
- sandbox 隔离脚本与可编程能力
7.4 我们对“人格化 Agent”的克制
我们相信个性化，但不鼓励过度拟人化。
原因很简单：在家庭场景里，trust 不来自表演，而来自边界和结果。
个性是提高亲近感与使用粘性的方式；
可信度来自稳定性、解释性与交付能力。

---
8. 竞争与差异化：我们赢在什么
8.1 相对 General LLM / Chat Assistant
它们擅长回答，不擅长承担。
问题在于：
- no persistent household context
- no execution ownership
- no permission model
- no family-specific routing
- no operational memory compounding
AstraFlow 的差异是：
- 有持续运行的 context
- 有角色与权限
- 有事件驱动与跟进
- 有 EaseFlows 作为执行与复盘单元
8.2 相对传统家庭 / 健康 / 日程 App
它们是工具集合，不是执行系统。
传统 App 的缺口：
- no reasoning across fragmented inputs
- no action routing
- no follow-through
- no reusable household playbooks
AstraFlow 的差异：
- 把跨场景信息整合成家庭级上下文
- 把事务派给正确角色
- 对结果闭环负责
- 把经验沉淀为可复用 Flow
8.3 相对 Smart Home / Voice Assistant
它们更偏 device-centric，不是 household-centric。
AstraFlow 不是为了控制设备而存在。
设备只是家庭执行网络中的一个节点。
我们的核心是家庭关系、责任结构与长期上下文。
8.4 核心护城河
我们认为 AstraFlow 的护城河来自四层：
1）Family Context
家庭级上下文是长期积累资产，迁移成本高。
2）EaseFlows（悦流）
不是一次性 automation，而是不断复用、升级、沉淀的执行协议。
3）Personalized Agent Network
每个成员一个 Agent 的权限、记忆与关系网络，形成家庭内部协作壁垒。
4）Trust Infrastructure
隐私、审计、边界控制、可解释性，尤其在家庭场景中是长期护城河，而非合规附属品。

---
9. 商业模式：海外订阅主线 + 国内混合路径
9.1 海外市场：Family Subscription 为主线
海外市场更适合从家庭订阅切入。
核心套餐
- Free：单人 / 限制 Flow / 低频 heartbeat
- Family：多成员 Agents、完整 EaseFlows、更多执行额度
- Care / Pro Packs：面向高价值场景的增值能力包
高价值 Packs 示例
- Elder care coordination pack
- Post-op recovery pack
- Exam-season planning pack
- Emotional routine / family rhythm pack
9.2 长期商业化方向：EaseFlows Marketplace
长期看，EaseFlows 是天然的生态层。
但我们的路径不是一开始就做开放 UGC 市场，
而是分阶段推进：
阶段 1： 官方 EaseFlows 库
阶段 2： 机构 / 专业作者合作包
阶段 3： 认证创作者生态与 marketplace
9.3 国内市场：不押注纯订阅
国内市场的现实约束很明确：
纯 B2C 订阅很难成为唯一假设。
因此我们采用三路径并行：
路径 A：轻订阅 + 高价值权益包
目标是先建立使用习惯，再把关键场景做成高价值加价项。
适合的能力：
- 家庭周计划闭环
- 老人慢病 / 术后照护包
- 关键周期管理包
路径 B：Outcome-based 收费
国内用户对“订阅未来”敏感，但对“为一次真实结果付费”更容易接受。
可定义的 outcome unit 包括：
- 一次复查流程完整跑完
- 一次家庭周计划完整执行
- 一个术后 30 天照护流程完成
对应形式：
- 按次 credits
- 按阶段周期包
- 基础订阅 + outcome package 混合模式
路径 C：B2B2C
国内更现实的规模化通道包括：
- 保险
- 医院 / 互联网医院
- 运营商家庭账号体系
- 智能硬件与家庭终端
原则很明确：
输出标准能力，不做重定制，不被 B 端项目制拖死。

---
10. 增长与分发：从家庭组织者切入到全家渗透
10.1 核心 wedge
为避免“家庭”这个词过大，我们明确首发 wedge：
- 家庭周计划与执行闭环
- 高价值照护协同场景
原因很直接：
- 痛点真实
- 频率够高
- 结果可验证
- 付费意愿更容易建立
10.2 增长飞轮
AstraFlow 的增长不是“内容裂变”，而是协作渗透。
飞轮如下：
1. 家庭组织者先用一个低摩擦、高价值的 EaseFlow
2. 系统为了完成任务，自动触发他人确认 / 配合
3. 新成员被拉入，家庭上下文更完整
4. 执行闭环率提升，组织者依赖度增加
5. 更多 EaseFlows 被激活，ARPU 上升
6. 家庭逐渐把 AstraFlow 当成默认执行层
10.3 分发思路
Consumer 侧
- 家庭组织者社群
- 照护、教育、效率类内容触达
- 高价值问题场景驱动下载，而非“体验 AI”
Partnership 侧
- 保险 / 医疗 / IoT / 运营商合作试点
- 以 EaseFlows 或 care packs 作为合作载体
- 保持标准化输出，避免定制化陷阱

---
11. 指标体系：衡量“交付结果”，而不是“聊了多少”
11.1 North Star Metric
我们不把聊天量、提问次数当核心指标。
真正的 North Star 应该是：
每周完成的 EaseFlows 数 / 每周完成的家庭执行闭环数
这衡量的是：
AstraFlow 是否真的在把事情跑完，而不是只停留在“参与了对话”。
11.2 阶段性指标
- Active households
- Household organizer 7/30 日留存
- Multi-member penetration rate
- Completion rate of routed actions
- Human acceptance rate of EaseFlow outcomes
- Interruption / rollback rate
- Weekly household context growth with valid usage
11.3 成本与效率指标
- 单家庭月均 inference cost
- heartbeat / voice / Flow execution 分项成本
- 高价值 packs 毛利率
- Model mix efficiency
- Worker budget utilization

---
12. 路线图：0–18 个月产品与商业节奏
0–3 个月：验证“执行系统”而不是“聊天助手”
- Household Gateway MVP
- Household Heartbeat 基础能力
- 每成员一个 Agent 的基础框架
- 首个 wedge：家庭周计划执行闭环
- 首个高价值场景：照护协调最小可用版本
- 国内开始测试 outcome-based pack
3–6 个月：把 EaseFlows 跑成可复用能力
- EaseFlows DSL 与执行器强化
- 官方 EaseFlows 库上线
- 完善 trace、权限、风险分级
- 1–2 个专业合作 PoC
- 优化多成员渗透与家庭留存
6–12 个月：商业路径分叉与规模化验证
- 海外 Family plan 成熟
- Pro / Care Packs 提升 ARPU
- 国内验证轻订阅与 outcome-based 哪条更强
- 启动 1–2 个 B2B2C 渠道试点
- 完善家庭 context 的分层与治理
12–18 个月：从执行系统走向家庭操作层
- Data plane / control plane 分离
- 更强的 local-first 能力试点
- 高敏感家庭模式
- 更成熟的专业作者与机构 Flow 体系
- 为长期 marketplace 做基础设施准备

---
13. 风险与对策
风险 1：Category 过大，外界听成“泛家庭 AI”
对策：
坚持主定位为 Family Execution System，首发明确 wedge，不用“生活方式 AI”话术。
风险 2：产品像功能堆叠，而不是一个系统
对策：
所有功能都必须归入同一条主循环：
Capture → Route → Execute → Reflect → Build Context
风险 3：国内纯订阅难
对策：
不把公司建立在单一路径上；同时验证轻订阅、outcome-based 与 B2B2C。
风险 4：隐私与信任门槛高
对策：
把 trust 做成架构约束：权限、审计、可删除、可解释、sandbox，不做后补。
风险 5：Agent 个性化做得过头，削弱专业感
对策：
把 personality 当作 interaction design，不当作品牌主角。
AstraFlow 的核心仍是结果、边界与可信执行。
风险 6：Agent 安全问题（prompt injection / tool misuse / Flow poisoning）
对策：
最小权限、分级作者体系、sandbox、人工确认、自动审核与 trace 全链路结合。

---
14. 附录：参考资料与外部验证
A. Agent Infrastructure 机制验证
- OpenClaw Gateway / persistent agent architecture documentation
- OpenClaw 相关研究与讨论，验证 persistent + tool-based + event-driven agent 的产品趋势
B. 国内商业模式与付费心智
- AI 工具在中国市场的效率溢价趋势
- outcome-based AI business model 的增长与验证路径
- B2B2C 在家庭场景中的渠道现实性

---
可直接放在 BP 首页的版本
Investor one-liner
AstraFlow is building the Family Execution System for modern households.
Powered by personalized AI Agents, it builds family context over time, coordinates people and responsibilities, and turns fragmented information into completed outcomes.
中文版
AstraFlow 正在构建现代家庭的 Family Execution System。
它以个性化 AI Agents 为执行单元，持续构建家庭上下文，协调人、责任与流程，把碎片信息转化为被完成的结果。
一句更有张力的版本
家庭里一直有一个人在充当操作系统。AstraFlow 终于把这件事做成了产品。

