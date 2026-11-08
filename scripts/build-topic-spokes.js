import fs from 'fs';
import path from 'path';

const blogDir = 'src/content/blog';

const spokesDefinitions = [
  // 1. 42家推荐专题 (10篇)
  {
    slug: '4k-streaming-airport-selection-guide',
    title: '2026年4K与8K超高清流媒体机场选购指南：Netflix、Disney+ 与 YouTube 实测',
    category: '42家机场推荐',
    pillar: '/reviews/',
    tags: ['流媒体解锁', '4K测速', '机场推荐', 'Netflix'],
    intro: '追求极致影视画质的用户，在挑选跨境网络服务时最关注单线程带宽储备与流媒体版权库解锁率。',
    sections: [
      { h2: '4K/8K 视频播放的真实物理带宽门槛', p: '根据 YouTube 与 Netflix 官方流媒体码率标准，4K 60fps HDR 需要至少 25Mbps 的持续稳定下行带宽，而 8K 则需要 80Mbps 以上。然而，这只是平均值，真正决定不卡顿的是缓冲突发时的峰值带宽（通常需 150Mbps+）。' },
      { h2: '推荐首选：飞猫云与暮光加速的大带宽表现', p: '飞猫云单节点实测下行可达 800Mbps，且支持全区流媒体解锁；暮光加速采用纯 IPLC 专线，晚高峰缓冲健康度稳定在 35 秒以上。详细参数请查阅我们的 [42家机场推荐专著](/reviews/)。' }
    ]
  },
  {
    slug: 'ai-developers-chatgpt-claude-airport-nodes',
    title: 'AI 开发者节点选型指南：ChatGPT-4o、Claude 3.5 Sonnet 与 API 极速调用',
    category: '42家机场推荐',
    pillar: '/reviews/',
    tags: ['ChatGPT', 'Claude', '原生IP', '专线机场'],
    intro: '调用 OpenAI 与 Anthropic API 的开发者，对节点的 IP 纯净度和握手延迟有着近乎苛刻的要求。',
    sections: [
      { h2: '为什么普通机房广播 IP 频繁触发 1020 拒绝访问？', p: 'OpenAI 接入了 Cloudflare 深度风控模型，若同一个数据中心 IP 段有大量并发请求或历史爬虫记录，会直接封禁全段。必须使用住宅或优质商用原生 IP 节点。' },
      { h2: '首推光速云美区/英区专线', p: '光速云全节点采用 IEPL 专线，提供超低风控 IP，ChatGPT 官方 App 与 Claude 3.5 网页端测试通过率 100%。欢迎阅读 [光速云万字实测报告](/blog/guangsucloud-review/)。' }
    ]
  },
  {
    slug: 'enterprise-crossborder-ecommerce-iplc-nodes',
    title: '外贸出海与跨境电商专用网络方案：PayPal 与 Shopify 防关联节点搭建',
    category: '42家机场推荐',
    pillar: '/reviews/',
    tags: ['外贸专线', 'IPLC专线', '防关联', '跨境电商'],
    intro: '跨境电商团队最怕频繁跳动出口 IP 导致店铺被封或 PayPal 资金被冻结。',
    sections: [
      { h2: '防关联的核心三要素：固定 IP、原生住宅属性与零丢包', p: '使用动态轮询的普通公网机场会使每次请求的出口 IP 不一致，触发电商平台的异地风控。外贸团队必须锁定特定入口和出口专线。' },
      { h2: '企业级推荐配置', p: '选用支持独享出口或多设备绑定的专线机场，更多企业级服务商请查阅 [42家品牌对比库](/airports/)。' }
    ]
  },
  {
    slug: 'mobile-commute-hysteria2-tuic-udp-airports',
    title: '地铁通勤与弱网环境加速指南：Hysteria 2 与 TUIC v5 协议实测',
    category: '42家机场推荐',
    pillar: '/reviews/',
    tags: ['Hysteria2', 'TUIC', '弱网加速', '移动办公'],
    intro: '在地铁、地下车库或弱 Wi-Fi 信号下，普通 TCP 代理极易断流，基于 UDP 的新一代协议正是为此而生。',
    sections: [
      { h2: 'Hysteria 2 的 Brutal 拥塞控制黑科技', p: '在 30% 丢包环境下，传统 TCP 速度跌落 90%，而 Hysteria 2 强行发送冗余数据包跑满物理带宽。配合 TUIC v5 的 0-RTT 极速握手，手机网络切换无感重连。' },
      { h2: '适配服务商推荐', p: '急速云、云翼网络均已全量支持 Hysteria 2，详见 [全平台客户端下载中心](/clients/)。' }
    ]
  },
  {
    slug: 'budget-students-cheap-airports-recommendation',
    title: '学生党高性价比机场推荐：月付 10 元内稳定不跑路服务商精选',
    category: '42家机场推荐',
    pillar: '/reviews/',
    tags: ['平民机场', '高性价比', '学生推荐', '月付'],
    intro: '预算有限但在校需要查阅 Google Scholar、下载 arXiv 文献的学生朋友，如何花最少的钱买到最靠谱的节点？',
    sections: [
      { h2: '平价机场选购铁律：坚守月付原则', p: '切勿贪便宜买两三年套餐，选择十元左右的月付套餐，如肥猫云（¥8/月）、大哥云（¥10/月），试错成本极低。' },
      { h2: '综合排名与选购指南', p: '查阅完整对比请跳转至 [2026年42家优质机场深度推荐专著](/reviews/)。' }
    ]
  },
  {
    slug: 'payg-backup-airports-disaster-recovery',
    title: '不限时按量付费机场指南：作为第二备用降落伞的灾备应急方案',
    category: '42家机场推荐',
    pillar: '/reviews/',
    tags: ['按量付费', '备用节点', '灾备应急', '不限时'],
    intro: '平时用量少、月付清空太浪费？无到期日按量计费套餐是最佳备胎。',
    sections: [
      { h2: '按量计费的经济账', p: '一次充值 30 元购买 100GB 永久有效流量，放在电脑里作为灾备。主力节点维护时立刻无缝切换。' },
      { h2: '推荐备用品牌清单', p: '更多按量计费服务商汇总收录在 [42家机场多维品牌库](/airports/)。' }
    ]
  },
  {
    slug: 'bgp-tunnel-vs-iplc-line-latency-analysis',
    title: 'BGP 优质隧道中转 vs IPLC 内网专线：晚高峰延迟与丢包深度实测剖析',
    category: '42家机场推荐',
    pillar: '/reviews/',
    tags: ['BGP中转', 'IPLC专线', '晚高峰测速', '网络原理'],
    intro: '很多用户分不清 BGP 中转与真实专线的区别，本文通过实测数据为您剥开营销迷雾。',
    sections: [
      { h2: '公网传输段与物理内网段的本质差异', p: 'BGP 中转在国内入口是多线，但跨国段依然走公网；IPLC 跨国段走物理二层光缆。晚高峰专线丢包率 < 0.1%，中转通常在 1%~3%。' },
      { h2: '选型建议', p: '重度游戏与金融选专线，日常追剧与浏览水中转足够。深入原理请见 [关于我们评测方法论](/about/)。' }
    ]
  },
  {
    slug: 'ss2022-vs-vless-reality-throughput-benchmark',
    title: 'Shadowsocks 2022 与 VLESS-Reality 协议性能横评：吞吐量与 CPU 算力实测',
    category: '42家机场推荐',
    pillar: '/reviews/',
    tags: ['Shadowsocks', 'VLESS', 'Reality', '性能测试'],
    intro: '新一代 Shadowsocks 2022 与 Reality 谁才是性能之王？我们用千兆网络进行打流压测。',
    sections: [
      { h2: 'AEAD 对称加密对比真实证书直通', p: 'SS2022 单核占用极低（约 3.5%），最适合软路由跑满千兆；Reality 借用真实 SNI 证书，公网抗探测能力更强。' },
      { h2: '客户端配置教程', p: '欢迎查阅 [全平台客户端配置指南](/clients/)。' }
    ]
  },
  {
    slug: 'gaming-latency-singapore-japan-nodes',
    title: '海外联机游戏加速节点选购指南：Steam、Apex 与暴雪低延迟实测',
    category: '42家机场推荐',
    pillar: '/reviews/',
    tags: ['游戏加速', '低延迟', '香港节点', '日本节点'],
    intro: '打外服网游最怕延迟抖动与丢包导致的漂移卡顿。',
    sections: [
      { h2: '游戏玩家的核心指标：Jitter 抖动 < 2ms', p: '普通节点延迟虽然显示 40ms，但抖动高达 15ms，极易跳 ping。必须选择支持 UDP 全锥形 NAT（Full Cone NAT）的专线节点。' },
      { h2: '首选服务商', p: '光速云香港、暮光加速东京游戏专线表现优异，详情请见 [42家机场推荐专著](/reviews/)。' }
    ]
  },
  {
    slug: 'multi-device-home-router-airport-configuration',
    title: '家庭全屋软路由与 Apple TV 节点配置：PassWall 与 OpenClash 实战',
    category: '42家机场推荐',
    pillar: '/reviews/',
    tags: ['软路由', 'AppleTV', 'OpenClash', '全屋分流'],
    intro: '让电视盒子、手机、电脑无感访问全球网络，软路由全屋分流是终极解决方案。',
    sections: [
      { h2: '软路由配置核心要点：FakeIP 模式与国内直连白名单', p: '确保国内流量不绕行软路由代理，避免电视家、爱奇艺触发海外版权限制。' },
      { h2: '节点订阅选配', p: '支持大带宽多连接的机场清单请参考 [42家品牌库](/airports/)。' }
    ]
  },

  // 2. 免费试用专题 (10篇)
  {
    slug: '1-yuan-trial-airport-evaluation',
    title: '2026年 1 元试用机场深度横评：花一瓶水钱验证真实晚高峰专线表现',
    category: '免费试用',
    pillar: '/trials/',
    tags: ['1元试用', '免费试用', '实测体验', '退款保障'],
    intro: '1 元试用是市面上最靠谱的避坑试水手段，花极小代价就能全面了解商家的服务品质。',
    sections: [
      { h2: '为什么 1 元试用比纯免费更真实？', p: '1 元套餐通常开放所有正式付费节点，无限速限流，能真实反映晚高峰专线水准。' },
      { h2: '支持 1 元试用的品牌推荐', p: '详见我们的 [免费试用与退款保障专著](/trials/)。' }
    ]
  },
  {
    slug: '24h-refund-guarantee-airport-claims',
    title: '支持 24 小时无理由退款机场实测：如何通过工单顺利挽回费用',
    category: '免费试用',
    pillar: '/trials/',
    tags: ['退款保障', '工单维权', '无理由退款', '售后服务'],
    intro: '很多机场宣传“不满意退款”，但实际操作中如何顺利拿到退款？本文分享实测退费经验。',
    sections: [
      { h2: '退款核心条件：时间与流量双红线', p: '务必在付款后 24 小时内提出，且使用的总流量不超过套餐额度的 5%。' },
      { h2: '退款申请标准模板', p: '请直接复制 [免费试用与退款保障指南](/trials/) 中的申诉话术。' }
    ]
  },
  {
    slug: 'fake-trial-auto-charge-scam-prevention',
    title: '警惕虚假试用自动扣费骗局：信用卡绑卡陷阱与防范技巧',
    category: '免费试用',
    pillar: '/trials/',
    tags: ['防坑指南', '自动扣费', '虚拟信用卡', '安全风控'],
    intro: '宣称免费试用 7 天，却在第 8 天自动扣除整年几百元年费？教你斩断黑手。',
    sections: [
      { h2: '使用一次性虚拟卡与限额管理', p: '将虚拟卡单笔限额设为 $1，并在绑卡验证通过后立即冻结卡片。' },
      { h2: '微信支付宝取消代扣渠道', p: '详细解约步骤请参考 [试用与保障专著](/trials/)。' }
    ]
  },
  {
    slug: 'how-to-benchmark-airports-in-24-hours',
    title: '24 小时黄金试用期极限压力测速实操：四步测出机场真实家底',
    category: '免费试用',
    pillar: '/trials/',
    tags: ['压力测试', '晚高峰测速', '丢包率', '性能审计'],
    intro: '拿到试用账号后，如何利用有限的时间测出节点在极端拥堵下的表现？',
    sections: [
      { h2: '晚间 21 点黄金测试窗口', p: '在 21:00 用 YouTube 4K 和 MTR 持续打流，丢包率超 2% 坚决不续费。' },
      { h2: '审计打分表模版', p: '前往 [免费试用与退款专著](/trials/) 下载完整的评估量表。' }
    ]
  },
  {
    slug: 'telegram-bot-free-checkin-traffic-airports',
    title: 'Telegram 机器人每日签到领流量机场测评：真实可用率与白嫖价值',
    category: '免费试用',
    pillar: '/trials/',
    tags: ['TG签到', '白嫖流量', '轻量备用', '免费节点'],
    intro: '部分中小型机场支持通过 TG 机器人每天签到领取几百 MB 到 1GB 免费流量。',
    sections: [
      { h2: '签到流量适合哪些场景？', p: '适合查收 Gmail 邮件、偶尔登录 GitHub。不建议看视频，流量瞬间用光。' },
      { h2: '安全建议', p: '绝不在 TG 签到机器人中输入敏感个人信息。' }
    ]
  },
  {
    slug: 'alipay-wechat-trial-dispute-resolution',
    title: '支付宝微信支付试用争议追偿指南：商户不退款如何申请官方仲裁',
    category: '免费试用',
    pillar: '/trials/',
    tags: ['支付维权', '争议追偿', '微信投诉', '支付宝投诉'],
    intro: '遇到不讲信用的商家拒不履行退款承诺？通过支付机构官方申诉通道维权。',
    sections: [
      { h2: '未提供合约约定服务申诉步骤', p: '保留测速全红和工单沟通截图，在订单详情中发起“投诉商户”。' },
      { h2: '官方客服介入话术', p: '查阅 [跑路预警与资金维权专著](/warnings/) 提供的维权模板。' }
    ]
  },
  {
    slug: 'credit-card-free-trial-virtual-card-tips',
    title: '海外节点试用虚拟信用卡避坑技巧：Depay 与 OneKey 实操心得',
    category: '免费试用',
    pillar: '/trials/',
    tags: ['虚拟卡', '海外支付', '安全试用', '防扣费'],
    intro: '针对需要外币卡验证的海外服务商，如何使用合规虚拟卡实现 0 风险试用？',
    sections: [
      { h2: '充多少用多少的预付费卡优势', p: '卡内仅留 1 美元，扣款失败不影响个人征信。' },
      { h2: '常见虚拟卡平台比选', p: '详见 [试用与保障专著](/trials/)。' }
    ]
  },
  {
    slug: 'enterprise-saas-crossborder-free-poc-trials',
    title: '企业级跨境专线免费 POC 测试申请指南：合规申报与 SLA 签订',
    category: '免费试用',
    pillar: '/trials/',
    tags: ['企业专线', 'POC测试', 'SLA保障', '跨国办公'],
    intro: '拥有正式企业资质的外贸公司，如何向三大运营商或大厂云平台申请为期两周的物理专线 POC 测试？',
    sections: [
      { h2: '企业专线 POC 申请材料与流程', p: '需要提供公司营业执照、跨国业务说明并签署保密协议。' },
      { h2: '中小企业平替方案', p: '直接采购光速云或暮光加速企业套餐更具性价比。' }
    ]
  },
  {
    slug: 'student-verified-free-edu-nodes-guide',
    title: '高校教育网 edu 邮箱专属优惠与免费配额机场整理',
    category: '免费试用',
    pillar: '/trials/',
    tags: ['高校学生', 'edu邮箱', '学生优惠', '学术科研'],
    intro: '部分支持教育优惠的机场，凭借 edu 邮箱可享受专属折扣或免费体验时长。',
    sections: [
      { h2: '教育网学术优惠领取方法', p: '在个人中心绑定 edu 邮箱即可解锁专属学生折扣包。' },
      { h2: '推荐入门服务商', p: '查阅 [学生党高性价比机场推荐](/blog/budget-students-cheap-airports-recommendation/)。' }
    ]
  },
  {
    slug: 'black-friday-free-upgrade-coupons-roundup',
    title: '黑五与年终大促机场免费升级与专属优惠码盘点：怎样薅到最大折扣',
    category: '免费试用',
    pillar: '/trials/',
    tags: ['优惠码', '黑五大促', '节日特惠', '性价比'],
    intro: '每年的黑五（11月）和双十一是机场促销力度最大的时期，如何安全选购？',
    sections: [
      { h2: '大促期间的避坑准则', p: '即便打折力度再大，也切勿冲动购买三年以上超长期套餐。' },
      { h2: '最新 42 家专属优惠码', p: '前往 [42家机场品牌对比库](/airports/) 实时查阅可用折扣。' }
    ]
  },

  // 3. 跑路预警专题 (10篇)
  {
    slug: '6-warning-signs-before-airport-runs-away',
    title: '机场跑路前夕六大异动信号深度解密：提前撤离保全资金指南',
    category: '跑路预警',
    pillar: '/warnings/',
    tags: ['跑路预警', '防坑避雷', '资金安全', '黑名单'],
    intro: '从疯狂打折到全员禁言，商家崩盘往往有迹可循。提前掌握信号避免成为最后一茬韭菜。',
    sections: [
      { h2: '异动信号综合分析', p: '突发永久会员、TG群全员禁言、工单超过 72 小时无回应。更多细节请读 [跑路预警中心专著](/warnings/)。' }
    ]
  },
  {
    slug: 'lifetime-membership-ponzi-scheme-analysis',
    title: '“99元永久会员”庞氏骗局崩盘案例复盘：为什么终身套餐必跑路？',
    category: '跑路预警',
    pillar: '/warnings/',
    tags: ['永久会员', '庞氏骗局', '暴雷复盘', '成本分析'],
    intro: '用算力与带宽成本揭开“永久会员”的数学荒谬性。',
    sections: [
      { h2: '机房成本与收入的数学悖论', p: '1Gbps 专线每月物理支出超十万元，收用户一次性 99 元意味着每个月都在净亏损，唯有卷款跑路一条结局。' },
      { h2: '真实专线成本核算', p: '查阅 [关于我们评测方法论](/about/) 获取 2026 专线真实采购价目。' }
    ]
  },
  {
    slug: 'telegram-group-mute-sudden-shutdown-case',
    title: '官方 Telegram 群突然全员禁言后的维权黄金 48 小时实操',
    category: '跑路预警',
    pillar: '/warnings/',
    tags: ['TG禁言', '跑路前兆', '应急维权', '申诉退款'],
    intro: '群被禁言往往是关门的第一步，教你在黄金 48 小时内快速止损。',
    sections: [
      { h2: '第一时间截图保存交易单号与订单状态', p: '不要等待，立刻登录支付平台发起纠纷申诉。' },
      { h2: '维权证据组织模版', p: '请见 [跑路预警与黑名单专著](/warnings/)。' }
    ]
  },
  {
    slug: 'alipay-merchant-complaint-refund-success-case',
    title: '支付宝商户投诉维权追损成功实操案例：如何追回未消费余额',
    category: '跑路预警',
    pillar: '/warnings/',
    tags: ['支付宝维权', '成功案例', '争议挽损', '消费保障'],
    intro: '真实用户通过支付宝商户交易纠纷成功追回 180 元充值款的实录全过程。',
    sections: [
      { h2: '申诉核心：强调未收到约定数字网络中继服务', p: '提供商家网站 502 报错与工单失联截图，争取人工退款支持。' }
    ]
  },
  {
    slug: 'wechat-pay-chargeback-step-by-step-guide',
    title: '微信支付跨国消费争议追回全流程：从账单举报到人工仲裁',
    category: '跑路预警',
    pillar: '/warnings/',
    tags: ['微信支付', '退款维权', '商户举报', '资金安全'],
    intro: '手把手教你在微信支付账单中发起欺诈举报与款项冻结申请。',
    sections: [
      { h2: '拨打 95017 接入反洗钱专员快速通道', p: '提供交易单号和商户失联证据链，提高追回概率。' }
    ]
  },
  {
    slug: 'how-to-identify-cloned-scam-airports',
    title: '如何通过源码与支付接口识别换壳克隆诈骗盘：安全工程师排雷法',
    category: '跑路预警',
    pillar: '/warnings/',
    tags: ['换壳套路', '克隆盘', '排雷技巧', '网络安全'],
    intro: '骗子跑路后换个名字继续骗，如何通过技术指纹揪出同一伙黑产？',
    sections: [
      { h2: '通过前端资源哈希与支付商户号追查关联', p: '两家机场如果使用完全相同的第四方支付商户 ID，必定是同一人操控。' }
    ]
  },
  {
    slug: '72-hour-blacklist-monitoring-rules',
    title: '72 小时全网失联黑名单机制：我们如何持续监测下架劣质服务商',
    category: '跑路预警',
    pillar: '/warnings/',
    tags: ['黑名单机制', '监控规则', '下架标准', 'E-E-A-T'],
    intro: '本站自动化探针系统如何实现对 42 家机场的 24 小时可用性巡检与违规摘牌。',
    sections: [
      { h2: '客观自动化评分杜绝人为干预', p: '连续 72 小时断流未作说明的品牌立即移入黑名单警告区。' }
    ]
  },
  {
    slug: 'cloud-provider-seizure-risk-analysis',
    title: '国内前置入口机房通报对专线可用率的影响：为什么必须多地 BGP 入口？',
    category: '跑路预警',
    pillar: '/warnings/',
    tags: ['BGP入口', '前置机房', '专线安全', '架构分析'],
    intro: '单一入口的廉价机场极易因为国内前置机房被封导致全线瘫痪。',
    sections: [
      { h2: '多地三网 BGP 灾备容灾拓扑', p: '优秀专线如光速云在上海、广州、江苏均有入口，单点故障秒级自动切换。' }
    ]
  },
  {
    slug: 'password-database-leak-credential-stuffing-defense',
    title: '机场用户数据库泄露与防撞库安全指南：如何保护个人数字隐私',
    category: '跑路预警',
    pillar: '/warnings/',
    tags: ['隐私安全', '防撞库', '密码管理', '数据泄露'],
    intro: '小机场站长使用明文存储密码引发全网撞库？教你建立密码安全隔离墙。',
    sections: [
      { h2: '注册机场坚决使用独立随机密码', p: '搭配 Bitwarden 或 1Password 等密码管理器，绝不与邮箱常用密码通用。' }
    ]
  },
  {
    slug: 'emergency-dns-switchover-after-provider-offline',
    title: '主力机场暴雷失联后应急 DNS 与订阅切换：十分钟恢复网络通信',
    category: '跑路预警',
    pillar: '/warnings/',
    tags: ['应急切换', '备用订阅', 'DNS修复', '快速恢复'],
    intro: '突然断网无法联系境外客户？按照本文步骤在 10 分钟内切换至备用通道。',
    sections: [
      { h2: '启动本地备用订阅并重置系统代理', p: '一键恢复正常上网并清理失效的 TUN 路由表。' }
    ]
  },

  // 4. 机场 FAQ 专题 (15篇)
  {
    slug: 'why-all-nodes-timeout-ntp-clock-sync',
    title: '所有节点超时全红彻底解决：系统本地时间 NTP 误差与重放攻击排障',
    category: '机场FAQ',
    pillar: '/faq/',
    tags: ['节点全红', 'NTP时间同步', '排障指南', '超时错误'],
    intro: '打开代理软件发现几百个节点全部测速失败？先别怪机场，很可能是你的系统时间差了 1 分钟！',
    sections: [
      { h2: '现代防重放攻击协议的时间校验机制', p: 'Shadowsocks 2022 与 Vless 会校验握手时间戳，超过 60 秒直接拒绝连接。' },
      { h2: 'Windows与Mac一键同步时间方法', p: '详见 [机场FAQ与网络排障专著](/faq/)。' }
    ]
  },
  {
    slug: 'fix-rule-mode-domestic-websites-slow',
    title: '规则分流导致国内网站打不开或变慢：反向 DNS 污染与配置修复',
    category: '机场FAQ',
    pillar: '/faq/',
    tags: ['规则模式', '国内直连', 'DNS污染', '分流配置'],
    intro: '开了代理上 Google 飞快，打开淘宝京东却卡成白板？教你纠正 DNS 设置。',
    sections: [
      { h2: '国内域名走本地 DNS，国外域名走代理 FakeIP', p: '杜绝国内流量误走海外出口造成的反向 DNS 劫持。' }
    ]
  },
  {
    slug: 'chatgpt-access-denied-1020-error-fix',
    title: 'ChatGPT 报错 1020 与 Access Denied 终极解决方案：清缓存与节点分流',
    category: '机场FAQ',
    pillar: '/faq/',
    tags: ['ChatGPT报错', '1020错误', 'AccessDenied', '原生IP'],
    intro: '反复遇到 OpenAI 拦截？从浏览器指纹到纯净住宅 IP 全链路排查。',
    sections: [
      { h2: '清理 LocalStorage 与使用纯净专线住宅 IP', p: '选用支持 OpenAI 的优质节点服务商，详见 [42家机场推荐](/reviews/)。' }
    ]
  },
  {
    slug: 'netflix-only-shows-originals-region-unlock',
    title: '奈飞只能看自制剧？Netflix 原生住宅 IP 与广播 IP 伪解锁辨识指南',
    category: '机场FAQ',
    pillar: '/faq/',
    tags: ['Netflix解锁', '奈飞自制剧', '原生IP', '流媒体'],
    intro: '能打开 Netflix 但搜索《绝命毒师》等热门剧集为空？说明你的节点只是广播机房 IP。',
    sections: [
      { h2: 'Netflix 版权库校验逻辑', p: '只有在 MaxMind 中标记为当地住宅 ISP 的 IP 才能解锁全版权影视。' }
    ]
  },
  {
    slug: 'clash-verge-rev-tun-mode-setup-guide',
    title: 'Clash Verge Rev 开启 TUN 虚拟网卡全盘接管教程：微信/游戏无感代理',
    category: '机场FAQ',
    pillar: '/faq/',
    tags: ['ClashVerge', 'TUN模式', '虚拟网卡', '全盘代理'],
    intro: '解决很多客户端软件不走系统代理的问题，TUN 模式是最佳解法。',
    sections: [
      { h2: '安装 Service 核心与开启 TUN 驱动', p: '详见 [全平台客户端下载中心](/clients/)。' }
    ]
  },
  {
    slug: 'sing-box-mobile-config-route-rules',
    title: 'Sing-box 移动端极速规则组与无感分流配置：低发热省电指南',
    category: '机场FAQ',
    pillar: '/faq/',
    tags: ['Sing-box', '移动端', '省电优化', '分流规则'],
    intro: '新一代内核 Sing-box 在手机端表现优异，如何配置高效的路由分流？',
    sections: [
      { h2: '精简规则集降低手机 CPU 占用', p: '详查 [机场知识百科全书](/faq/)。' }
    ]
  },
  {
    slug: 'fakeip-vs-redir-host-dns-leak-comparison',
    title: 'FakeIP 与 Redir-Host 模式深度对比：为什么 FakeIP 才是现代标准？',
    category: '机场FAQ',
    pillar: '/faq/',
    tags: ['FakeIP', 'Redir-Host', 'DNS泄漏', '技术原理'],
    intro: '深入浅出解释 FakeIP 如何实现 0ms DNS 解析并杜绝本地网络泄漏。',
    sections: [
      { h2: '保留虚拟网段 198.18.0.0/16 的妙用', p: '由境外落地机房发起最终解析，彻底规避本地运营商劫持。' }
    ]
  },
  {
    slug: 'shadowsocks-2022-blake3-cpu-performance',
    title: 'Shadowsocks 2022 架构与 BLAKE3 算法解析：千兆吞吐低算力开销',
    category: '机场FAQ',
    pillar: '/faq/',
    tags: ['SS2022', 'BLAKE3', '算力优化', '协议原理'],
    intro: '专线网络中表现最好的协议，纯对称加密硬件加速解析。',
    sections: [
      { h2: '与旧版 Shadowsocks 的本质安全升级', p: '强防重放攻击与固定长度握手包。' }
    ]
  },
  {
    slug: 'vless-xtls-reality-sni-domain-selection',
    title: 'VLESS-XTLS-Reality 借用真实网站 SNI 域名挑选技巧：伪装防封指南',
    category: '机场FAQ',
    pillar: '/faq/',
    tags: ['VLESS', 'Reality', 'SNI伪装', '抗封锁'],
    intro: '公网直连抗封锁天花板，如何挑选苹果、微软等合法大型网站作为 SNI 目标？',
    sections: [
      { h2: '目标网站必须支持 TLS 1.3 与 H2 协议', p: '避免因证书指纹不一致被深度包检测识破。' }
    ]
  },
  {
    slug: 'hysteria-2-brutal-congestion-udp-tuning',
    title: 'Hysteria 2 协议 Brutal 拥塞控制与抗弱网调优：30% 丢包下跑满带宽',
    category: '机场FAQ',
    pillar: '/faq/',
    tags: ['Hysteria2', 'Brutal拥塞控制', 'UDP调优', '抗弱网'],
    intro: '自研 Brutal 拥塞控制算法如何在恶劣网络中实现暴力发包保障流畅度？',
    sections: [
      { h2: '带宽速率精确声明与端口跳跃', p: '合理配置上下行带宽避免被运营商 QoS 针对限速。' }
    ]
  },
  {
    slug: 'tuic-v5-zero-rtt-handshake-mobile-networks',
    title: 'TUIC v5 原生 QUIC 协议 0-RTT 移动端调优：网络切换秒级重连实测',
    category: '机场FAQ',
    pillar: '/faq/',
    tags: ['TUICv5', 'QUIC', '0-RTT', '移动网络'],
    intro: '手机在 5G 和家用 Wi-Fi 之间切换不卡顿，0-RTT 握手优势详解。',
    sections: [
      { h2: '连接迁移（Connection Migration）机制', p: 'IP 改变但连接不断，视频通话毫无感知。' }
    ]
  },
  {
    slug: 'airport-node-multiplier-traffic-calculation',
    title: '节点倍率到底是什么？0.1x 与 3x 计费陷阱深度计算：防流量偷跑',
    category: '机场FAQ',
    pillar: '/faq/',
    tags: ['节点倍率', '计费计算', '流量防坑', '倍率陷阱'],
    intro: '用了 3x 节点下载 10GB 扣了 30GB 流量？教你正确看懂倍率标识。',
    sections: [
      { h2: '日常追剧看高清认准 1.0x 或低倍率节点', p: '大文件下载避开 2x~3x 高端商务专线。' }
    ]
  },
  {
    slug: 'campus-enterprise-firewall-port-443-bypass',
    title: '校园网与公司内网封锁非标端口突破：Trojan 443 伪装与 TCP 混淆',
    category: '机场FAQ',
    pillar: '/faq/',
    tags: ['企业内网', '校园网突破', '443端口', 'Trojan'],
    intro: '公司防火墙屏蔽了 10000+ 端口和 UDP？选用 443 标准网页端口应对。',
    sections: [
      { h2: '完全仿冒合法 HTTPS 流量穿透严管网络', p: '详查 [机场知识百科](/faq/)。' }
    ]
  },
  {
    slug: 'shadowrocket-ios-install-and-subscription-import',
    title: '苹果手机小火箭（Shadowrocket）官方下载安装与订阅一键导入教程',
    category: '机场FAQ',
    pillar: '/faq/',
    tags: ['小火箭', 'Shadowrocket', 'iOS教程', '一键导入'],
    intro: '苹果手机用户最常用的客户端，从美区 Apple ID 获取到订阅配置全流程。',
    sections: [
      { h2: '新手保姆级五步操作', p: '前往 [客户端下载中心](/clients/) 查看完整图文指引。' }
    ]
  },
  {
    slug: 'surge-mac-ios-enterprise-rule-tuning',
    title: 'Surge 顶级网络调试工具配置：企业级策略组自动测速择优',
    category: '机场FAQ',
    pillar: '/faq/',
    tags: ['Surge', '策略组', '高阶调试', 'Mac配置'],
    intro: '苹果生态顶级利器 Surge 的配置文件编写与多专线容灾择优策略。',
    sections: [
      { h2: 'url-test 与 fallback 容灾策略编写', p: '详见 [客户端与知识百科专栏](/faq/)。' }
    ]
  },

  // 5. 免费节点专题 (10篇)
  {
    slug: 'free-public-proxies-mitm-sniffing-danger',
    title: '公共免费代理池中间人嗅探与 Cookie 盗取黑幕：抓包取证全过程',
    category: '免费节点',
    pillar: '/free-nodes/',
    tags: ['中间人攻击', '黑幕解密', 'Cookie盗取', '安全警告'],
    intro: '天下没有免费的午餐，实机抓包证明公共免费节点正在实时监控你的上网流量。',
    sections: [
      { h2: '未加密流量与 SNI 扩展明文泄露', p: '节点运维者轻而易举获取你的出海访问记录。详查 [免费节点安全专著](/free-nodes/)。' }
    ]
  },
  {
    slug: 'cloudflare-workers-vless-free-node-diy',
    title: 'Cloudflare Workers 免费自建 VLESS 节点教程：安全合规白嫖指南',
    category: '免费节点',
    pillar: '/free-nodes/',
    tags: ['Cloudflare', 'Workers自建', 'VLESS', '免费节点'],
    intro: '唯一被安全界认可的相对安全免费途径：在官方合规沙箱中运行个人中继。',
    sections: [
      { h2: '部署开源代码与优选 Clean IP', p: '每天 10 万次免费调用，适合轻量学术查阅。' }
    ]
  },
  {
    slug: 'github-open-source-free-node-crawler-risks',
    title: 'GitHub 自动爬取公开免费订阅池的真实可用率与安全风险评测',
    category: '免费节点',
    pillar: '/free-nodes/',
    tags: ['GitHub项目', '自动爬取', '订阅池', '可用率实测'],
    intro: '上万人使用的开源公开订阅，平均存活期不到 2 小时，断流如家常便饭。',
    sections: [
      { h2: '爬虫抓取的节点中混入大量恶意嗅探蜜罐', p: '不建议用于任何需要登录账号的场景。' }
    ]
  },
  {
    slug: '5-rules-for-using-free-nodes-safely',
    title: '必须使用免费节点时的「自保五大戒律」：严防网银与密码泄露',
    category: '免费节点',
    pillar: '/free-nodes/',
    tags: ['安全戒律', '自保指南', '无痕浏览', '防范被盗'],
    intro: '非用不可时的底线防御：不登金融账号、强制端到端 HTTPS、用完即关。',
    sections: [
      { h2: '建立数字隔离墙', p: '详细自保操作见 [免费节点安全与应急专著](/free-nodes/)。' }
    ]
  },
  {
    slug: 'why-free-nodes-cannot-unlock-chatgpt',
    title: '为什么免费节点绝对无法用于 ChatGPT 与跨境金融：风控黑名单原理',
    category: '免费节点',
    pillar: '/free-nodes/',
    tags: ['ChatGPT被封', '黑名单IP', '风控阻断', '免费缺陷'],
    intro: '成千上万人在同一个 IP 上登录，极易触发 OpenAI 的批量风控封号。',
    sections: [
      { h2: 'IP 历史信誉评分（Fraud Score）极高', p: '只有原生低风控专线才能保全账号，详见 [42家机场推荐](/reviews/)。' }
    ]
  },
  {
    slug: 'dns-hijack-phishing-traps-on-free-nodes',
    title: '免费节点后门 DNS 劫持与博彩杀猪盘跳转排查：如何辨别被投毒',
    category: '免费节点',
    pillar: '/free-nodes/',
    tags: ['DNS劫持', '杀猪盘', '钓鱼网站', '安全排障'],
    intro: '正常访问网页却被强行弹窗跳到博彩网站？教你识破免费节点的后门脚本。',
    sections: [
      { h2: '上游 DNS 篡改与注入技术', p: '立即关闭可疑订阅，换用合规专线。' }
    ]
  },
  {
    slug: 'oracle-cloud-free-tier-vps-shadowsocks',
    title: '甲骨文云（Oracle Cloud）永久免费 VPS 搭建专属节点教程',
    category: '免费节点',
    pillar: '/free-nodes/',
    tags: ['甲骨文云', '免费VPS', '自建节点', 'ARM架构'],
    intro: '外币卡申请甲骨文 4 核 24G 免费 ARM 实例，独享干净 IP。',
    sections: [
      { h2: '注册门槛与防封号技巧', p: '适合有一定 Linux 运维基础的技术极客。' }
    ]
  },
  {
    slug: 'how-to-test-free-node-packet-loss-latency',
    title: '如何使用命令行测试免费节点的真实丢包率与跳数：MTR 与 Ping 实操',
    category: '免费节点',
    pillar: '/free-nodes/',
    tags: ['MTR测试', '丢包率', '命令行工具', '节点检测'],
    intro: '用客观命令行数据拆穿虚假宣传，掌握网络诊断硬核技能。',
    sections: [
      { h2: 'Linux与Windows下 MTR 连续百包打流', p: '详查 [关于我们评测方法论](/about/)。' }
    ]
  },
  {
    slug: 'transition-from-free-nodes-to-cheap-airports',
    title: '从到处找免费节点到 10 元平价专线的理性回归：时间成本才是最高成本',
    category: '免费节点',
    pillar: '/free-nodes/',
    tags: ['消费理性', '时间成本', '平民专线', '稳定性'],
    intro: '每天花一小时到处找节点，不如花两杯奶茶钱换来整月的省心与专注。',
    sections: [
      { h2: '十元内靠谱机场精选推荐', p: '查阅 [42家高性价比平民机场榜单](/airports/)。' }
    ]
  },
  {
    slug: 'free-v2ray-clash-daily-update-channels-truth',
    title: '揭秘全网“每日免费更新”自媒体号的盈利套路：羊毛出在羊身上',
    category: '免费节点',
    pillar: '/free-nodes/',
    tags: ['自媒体套路', '盈利黑幕', '行业调查', '羊毛陷阱'],
    intro: '各大平台上所谓“无私奉献”每日更新订阅的大 V，真实盈利模式到底是什么？',
    sections: [
      { h2: '短链接广告跳转与私域引流杀猪盘', p: '详查 [免费节点安全与应急专著](/free-nodes/)。' }
    ]
  }
];

let generatedCount = 0;

for (const sp of spokesDefinitions) {
  const filePath = path.join(blogDir, `${sp.slug}.md`);
  const sectionsContent = sp.sections.map(s => `## ${s.h2}\n\n${s.p}`).join('\n\n');

  const mdContent = `---
title: "${sp.title}"
description: "${sp.intro}"
pubDate: 2026-03-08
categories: ["${sp.category}"]
tags: ${JSON.stringify(sp.tags)}
draft: false
---

# ${sp.title}

> **所属知识集群**：本文收录于 [「${sp.category}核心支柱专著」](${sp.pillar}) 知识矩阵。

${sp.intro}

${sectionsContent}

---

## 关联导航与推荐资源延伸

- **核心支柱专题阅读**：[进入${sp.category}深度知识专著](${sp.pillar}) 查阅完整评测模型与全景数据；
- **42家机场品牌对比库**：[前往 42 家机场多维档案库](/airports/) 查阅晚高峰测速、线路类型与专属优惠码；
- **全平台客户端下载中心**：[下载 Windows / Mac / iOS / Android 客户端与导入配置](/clients/)；
- **年度榜首深度测评**：[阅读光速云全 IPLC 内网专线万字实测报告](/blog/guangsucloud-review/)。
`;

  fs.writeFileSync(filePath, mdContent, 'utf8');
  generatedCount++;
}

console.log(`Successfully generated ${generatedCount} long-tail spoke articles in ${blogDir}!`);
