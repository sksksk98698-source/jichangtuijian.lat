/**
 * 42 家机场品牌数据单点源 (Single Source of Truth)
 * 供首页、品牌库页面 (/airports)、评测博文矩阵以及相关推荐组件统一读取
 */

export interface AirportPlan {
  name: string;
  billing: string;
  price: string;
  traffic: string;
}

export interface SpeedDataPoint {
  node: string;
  latency: string;
  download: string;
  jitter: string;
}

export interface UnlockItem {
  name: string;
  status: string;
  note: string;
}

export interface BrandData {
  rank: number;
  id: string;
  name: string;
  enName: string;
  isFeatured: boolean;
  tag: string;
  startingPrice: string;
  affUrl: string;
  coupon: string;
  protocols: string[];
  lineType: string;
  established: string;
  refundPolicy: string;
  speedImg: string | null;
  unlockImg: string | null;
  summary: string;
  nodes: string;
  plans: AirportPlan[];
  speedData: SpeedDataPoint[];
  unlockStatus: UnlockItem[];
  pros: string[];
  cons: string[];
}

export const brandsList: BrandData[] = [
  {
    "rank": 1,
    "id": "guangsucloud",
    "name": "光速云",
    "enName": "GuangSu Cloud",
    "isFeatured": true,
    "tag": "综合第一主推",
    "startingPrice": "¥8/月起",
    "affUrl": "https://sahude.gsyvipaff.com/#/?code=keqgvT5Y",
    "coupon": "AMM",
    "protocols": [
      "VLESS",
      "IEPL专线"
    ],
    "lineType": "IEPL专线 + 企业级内网专线（双线路架构）",
    "established": "2020 年",
    "refundPolicy": "特惠商品不支持退款，建议月付起步",
    "speedImg": "/images/speedtest/光速云-节点测速实测.png",
    "unlockImg": "/images/unlock/photo_2026-08-19_12-13-01.jpg",
    "summary": "光速云自 2020 年运营至今，主打 IEPL 与企业级内网双专线架构，采用最新 VLESS 协议。提供自研客户端与全平台通用订阅（Clash、Shadowrocket），晚高峰 4K 播放流畅，是目前综合性价比极高的高端加速服务。",
    "nodes": "香港×20、台湾×5、日本×10、新加坡×10、美国×10、马来西亚×2、欧洲多国等",
    "plans": [
      {
        "name": "致敬斯诺克147永久套餐",
        "billing": "一次性付费",
        "price": "¥147",
        "traffic": "247GB (不过期)"
      },
      {
        "name": "轻量版 (入门首选)",
        "billing": "年付",
        "price": "¥99/年 (折合¥8.25/月)",
        "traffic": "69GB/月"
      },
      {
        "name": "极速版 (热门爆款)",
        "billing": "月付",
        "price": "¥25/月",
        "traffic": "168GB/月"
      },
      {
        "name": "流光版",
        "billing": "月付",
        "price": "¥34/月",
        "traffic": "268GB/月"
      },
      {
        "name": "量子版",
        "billing": "月付",
        "price": "¥68/月",
        "traffic": "568GB/月"
      },
      {
        "name": "定制版",
        "billing": "月付",
        "price": "¥680/月",
        "traffic": "500GB/月独享带宽"
      }
    ],
    "speedData": [
      {
        "node": "香港 IEPL 01",
        "latency": "22ms",
        "download": "529 Mbps",
        "jitter": "1.2ms"
      },
      {
        "node": "新加坡 专线 02",
        "latency": "46ms",
        "download": "387 Mbps",
        "jitter": "2.1ms"
      },
      {
        "node": "日本 东京 01",
        "latency": "57ms",
        "download": "135 Mbps",
        "jitter": "3.4ms"
      },
      {
        "node": "台湾 专线 01",
        "latency": "41ms",
        "download": "114 Mbps",
        "jitter": "2.8ms"
      },
      {
        "node": "美国 洛杉矶 优化",
        "latency": "143ms",
        "download": "18 Mbps",
        "jitter": "5.2ms"
      }
    ],
    "unlockStatus": [
      {
        "name": "ChatGPT / OpenAI",
        "status": "支持 (原生IP识别)",
        "note": "建议香港/新加坡/日本节点"
      },
      {
        "name": "Claude 3.5 Sonnet",
        "status": "支持 (无阻断)",
        "note": "全专线节点稳定可用"
      },
      {
        "name": "Gemini",
        "status": "部分节点支持",
        "note": "需手动切换美国或日本节点"
      },
      {
        "name": "Netflix",
        "status": "支持 (全区原生解锁)",
        "note": "非自制剧完整解锁"
      },
      {
        "name": "Disney+ / YouTube 4K",
        "status": "支持 (秒开4K/8K)",
        "note": "单线程带宽最高2.5Gbps"
      },
      {
        "name": "TikTok / Spotify",
        "status": "支持",
        "note": "支持跨境直播与社媒投放"
      }
    ],
    "pros": [
      "2020 年稳定运营至今，无跑路风险，品牌口碑极佳",
      "IEPL 双专线架构，晚高峰不受国际骨干公网抖动影响",
      "自研极简客户端，同时完美兼容 Clash Verge、Shadowrocket、Sing-box 等通用订阅",
      "套餐梯度覆盖完善，包含 147 元不过期永久流量包与超低年付入门档"
    ],
    "cons": [
      "部分美国远端节点峰值带宽稍弱于近端亚太节点",
      "Gemini 在少数特定节点可能会提示区域限制，需稍作切换"
    ]
  },
  {
    "rank": 2,
    "id": "muguang",
    "name": "暮光加速",
    "enName": "MuGuang",
    "isFeatured": true,
    "tag": "BGP智能调度",
    "startingPrice": "¥20/月起",
    "affUrl": "https://varnexa.twilightaff.com/#/?code=D1LHglg3",
    "coupon": "muguang5555",
    "protocols": [
      "VLESS",
      "Trojan"
    ],
    "lineType": "BGP 智能调度 + 专线级出口",
    "established": "2023 年",
    "refundPolicy": "支持联系 7×24 客服按规则处理",
    "speedImg": "/images/speedtest/幕光加速-节点测速实测.png",
    "unlockImg": null,
    "summary": "暮光加速主打跨平台多设备团队协作与办公加速，依托 BGP 智能路由与专线级出口，覆盖 Win/Mac/iOS/Android/Linux，套餐 120GB–1500GB 多档可选，官方承诺 7×24 小时真人售后支持。",
    "nodes": "香港、台湾、新加坡、日本、美国、欧洲等核心枢纽",
    "plans": [
      {
        "name": "基础版",
        "billing": "月付",
        "price": "¥20/月",
        "traffic": "120GB/月"
      },
      {
        "name": "标准版",
        "billing": "月付",
        "price": "¥40/月",
        "traffic": "240GB/月"
      },
      {
        "name": "旗舰版",
        "billing": "月付",
        "price": "¥100/月",
        "traffic": "700GB/月"
      },
      {
        "name": "年付轻量版",
        "billing": "年付",
        "price": "¥109/年",
        "traffic": "70GB/月"
      },
      {
        "name": "不限时轻量包",
        "billing": "一次性付费",
        "price": "¥219",
        "traffic": "150GB不过期"
      }
    ],
    "speedData": [
      {
        "node": "香港 BGP 01",
        "latency": "26ms",
        "download": "509 Mbps",
        "jitter": "1.5ms"
      },
      {
        "node": "新加坡 优化 01",
        "latency": "43ms",
        "download": "419 Mbps",
        "jitter": "2.0ms"
      },
      {
        "node": "日本 东京 01",
        "latency": "53ms",
        "download": "150 Mbps",
        "jitter": "3.1ms"
      },
      {
        "node": "台湾 专线 01",
        "latency": "40ms",
        "download": "107 Mbps",
        "jitter": "2.4ms"
      },
      {
        "node": "美国 洛杉矶",
        "latency": "160ms",
        "download": "19 Mbps",
        "jitter": "6.0ms"
      }
    ],
    "unlockStatus": [
      {
        "name": "ChatGPT / Claude",
        "status": "支持 (稳定原生)",
        "note": "主流节点均已解锁"
      },
      {
        "name": "Gemini",
        "status": "视节点而定",
        "note": "推荐使用新加坡或美国节点"
      },
      {
        "name": "Netflix / Disney+",
        "status": "支持",
        "note": "支持高清流媒体及海外电视盒子"
      },
      {
        "name": "YouTube 4K / HBO Max",
        "status": "支持",
        "note": "缓冲时间低至毫秒级"
      }
    ],
    "pros": [
      "BGP 智能动态调度，自动绕行拥塞路由",
      "允许团队多设备并发同时在线，不限制单人登录端数",
      "提供罕见的不限时流量包与定制节点"
    ],
    "cons": [
      "起步月付稍高于超轻量机场",
      "目前公开活动较少，建议使用专属优惠码 muguang5555"
    ]
  },
  {
    "rank": 3,
    "id": "feimao",
    "name": "飞猫云",
    "enName": "FeiMao Cloud",
    "isFeatured": true,
    "tag": "轻快易用首选",
    "startingPrice": "¥7/月起",
    "affUrl": "https://guangs.flycataff.com/#/?code=6uq0Xe9y",
    "coupon": "flycat888",
    "protocols": [
      "VLESS",
      "Trojan"
    ],
    "lineType": "专属优化中继 + 亚太多线专线",
    "established": "2023 年",
    "refundPolicy": "支持新手试用咨询",
    "speedImg": "/images/speedtest/飞猫云-节点测速实测.png",
    "unlockImg": null,
    "summary": "飞猫云专为追求“开箱即用”的新手用户设计，提供免配置的专属客户端，登录即用；年付折合约 7 元/月，是高性价比、高易用性阵营的代表品牌。",
    "nodes": "亚太核心地区（香港、台湾、日本、新加坡）及欧美优质节点",
    "plans": [
      {
        "name": "学生版 (特惠)",
        "billing": "年付",
        "price": "¥84/年 (折合¥7/月)",
        "traffic": "50GB/月"
      },
      {
        "name": "星耀版",
        "billing": "月付",
        "price": "¥25/月",
        "traffic": "150GB/月"
      },
      {
        "name": "尊享版",
        "billing": "月付",
        "price": "¥45/月",
        "traffic": "300GB/月"
      }
    ],
    "speedData": [
      {
        "node": "香港 IEPL 01",
        "latency": "45ms",
        "download": "468 Mbps",
        "jitter": "2.2ms"
      },
      {
        "node": "日本 东京 专线",
        "latency": "88ms",
        "download": "350 Mbps",
        "jitter": "3.5ms"
      },
      {
        "node": "新加坡 优化",
        "latency": "52ms",
        "download": "310 Mbps",
        "jitter": "2.8ms"
      }
    ],
    "unlockStatus": [
      {
        "name": "ChatGPT / Claude",
        "status": "支持",
        "note": "AI 会话连接无异常"
      },
      {
        "name": "Netflix / YouTube 4K",
        "status": "支持",
        "note": "主流地区全绿通过"
      }
    ],
    "pros": [
      "专属客户端下载一键登录，无需繁琐导入订阅，小白福音",
      "年付仅 84 元折合 7 元每月，学生党与轻度办公优选",
      "亚太热门地区延迟低，连接速度快"
    ],
    "cons": [
      "进阶高级网络自定义参数较少",
      "超大流量需求时需购买高阶套餐"
    ]
  },
  {
    "rank": 4,
    "id": "weifeng",
    "name": "微风网络",
    "enName": "BreezeNet",
    "isFeatured": true,
    "tag": "稳定高性价比",
    "startingPrice": "¥7/月起",
    "affUrl": "https://edp01.breezenetaff.com/#/?code=t3huofyI",
    "coupon": "flat888",
    "protocols": [
      "Shadowsocks",
      "VLESS"
    ],
    "lineType": "高速隧道中转 + 专线直连",
    "established": "2022 年",
    "refundPolicy": "以官网服务条款为准",
    "speedImg": "/images/speedtest/微风-节点测速实测.png",
    "unlockImg": null,
    "summary": "微风网络拥有扎实的用户基底与优良的技术架构，主打高性价比稳定的日常科学上网需求，7元档位配合 9 折优惠码极为亲民，晚高峰丢包控制优秀。",
    "nodes": "香港、日本、新加坡、台湾、美国等",
    "plans": [
      {
        "name": "轻量尝鲜",
        "billing": "年付",
        "price": "¥84/年",
        "traffic": "60GB/月"
      },
      {
        "name": "标准日常",
        "billing": "月付",
        "price": "¥20/月",
        "traffic": "150GB/月"
      },
      {
        "name": "大流量进阶",
        "billing": "月付",
        "price": "¥38/月",
        "traffic": "350GB/月"
      }
    ],
    "speedData": [
      {
        "node": "香港 01 中继",
        "latency": "32ms",
        "download": "380 Mbps",
        "jitter": "1.8ms"
      },
      {
        "node": "日本 01 高速",
        "latency": "65ms",
        "download": "290 Mbps",
        "jitter": "2.9ms"
      }
    ],
    "unlockStatus": [
      {
        "name": "ChatGPT / Claude",
        "status": "支持",
        "note": "大部分节点支持"
      },
      {
        "name": "Netflix / Disney+",
        "status": "支持",
        "note": "主流视频解锁顺畅"
      }
    ],
    "pros": [
      "价格极低且提供 9 折优惠码 flat888",
      "服务器冗余充足，晚高峰不卡顿",
      "完美兼容 Clash、Shadowrocket 等主流客户端"
    ],
    "cons": [
      "冷门国家节点覆盖稍显不足"
    ]
  },
  {
    "rank": 5,
    "id": "dalaoyun",
    "name": "大佬云",
    "enName": "DaLao Cloud",
    "isFeatured": true,
    "tag": "极低入门门槛",
    "startingPrice": "¥5.6/月起",
    "affUrl": "https://qwerty.dalaoyunaff.com/#/?code=jCPLmoWN",
    "coupon": "dly888",
    "protocols": [
      "Shadowsocks"
    ],
    "lineType": "多线中继 + 极低门槛",
    "established": "2023 年",
    "refundPolicy": "特惠轻量产品按条款处理",
    "speedImg": null,
    "unlockImg": null,
    "summary": "大佬云以 5.6 元/月 60GB 的极低价格门槛迅速获得广大预算敏感用户的青睐，适合备用翻墙、查阅资料与轻度社交。",
    "nodes": "香港、日本、美国、新加坡等常用节点",
    "plans": [
      {
        "name": "超轻小包",
        "billing": "月付",
        "price": "¥5.6/月",
        "traffic": "60GB/月"
      },
      {
        "name": "标准包",
        "billing": "月付",
        "price": "¥15/月",
        "traffic": "180GB/月"
      }
    ],
    "speedData": [
      {
        "node": "香港 中继",
        "latency": "48ms",
        "download": "180 Mbps",
        "jitter": "4.2ms"
      }
    ],
    "unlockStatus": [
      {
        "name": "ChatGPT / YouTube",
        "status": "支持",
        "note": "支持日常基础流媒体"
      }
    ],
    "pros": [
      "单月 5.6 元，试错成本接近于零",
      "轻量用户绝佳备用选择"
    ],
    "cons": [
      "晚高峰速度弱于独立企业专线",
      "节点总数相对精炼"
    ]
  },
  {
    "rank": 6,
    "id": "xingdaomeng",
    "name": "星岛梦",
    "enName": "XingDaoMeng",
    "isFeatured": true,
    "tag": "不限时大流量包",
    "startingPrice": "¥15/月起",
    "affUrl": "https://guangs.xingdaomeng.com/#/?code=1TynBYnR",
    "coupon": "nmw888",
    "protocols": [
      "Trojan",
      "VLESS"
    ],
    "lineType": "2020年老牌中继 + 专线",
    "established": "2020 年",
    "refundPolicy": "以官方工单政策为准",
    "speedImg": "/images/speedtest/星岛梦-节点测速实测.png",
    "unlockImg": null,
    "summary": "星岛梦是 2020 年运营至今的老牌机场，最大亮点在于提供了灵活的不限时流量包与多周期折扣，适合非高频日常使用或多设备长期托底。",
    "nodes": "亚太地区及欧美主力节点",
    "plans": [
      {
        "name": "周期套餐",
        "billing": "月付",
        "price": "¥15/月",
        "traffic": "100GB/月"
      },
      {
        "name": "不限时大流量包",
        "billing": "一次性付费",
        "price": "¥120",
        "traffic": "300GB永久不过期"
      }
    ],
    "speedData": [
      {
        "node": "香港 优化",
        "latency": "35ms",
        "download": "320 Mbps",
        "jitter": "2.1ms"
      }
    ],
    "unlockStatus": [
      {
        "name": "AI & 流媒体",
        "status": "支持",
        "note": "主流海外服务正常访问"
      }
    ],
    "pros": [
      "运营多年，线路调校经验丰富",
      "不限时套餐免去每月续费烦恼"
    ],
    "cons": [
      "官网偶尔需要通过镜像访问"
    ]
  },
  {
    "rank": 7,
    "id": "ermao",
    "name": "二猫云",
    "enName": "ErMao Cloud",
    "isFeatured": true,
    "tag": "多节点均衡调度",
    "startingPrice": "¥20/月起",
    "affUrl": "https://guangs.2maoyunaff.cc/#/?code=7mjvgGbW",
    "coupon": "ermao5555",
    "protocols": [
      "Shadowsocks",
      "VLESS"
    ],
    "lineType": "亚太优化 + 晚高峰保障",
    "established": "2022 年",
    "refundPolicy": "支持月付试用",
    "speedImg": "/images/speedtest/二猫云-节点测速实测.png",
    "unlockImg": null,
    "summary": "二猫云 20 元提供 130GB 流量，线路负载均衡优异，香港与日本节点延迟稳定，适合追求稳定看剧与日常网页浏览的用户。",
    "nodes": "香港、台湾、日本、新加坡、美国",
    "plans": [
      {
        "name": "标准套餐",
        "billing": "月付",
        "price": "¥20/月",
        "traffic": "130GB/月"
      },
      {
        "name": "尊享套餐",
        "billing": "月付",
        "price": "¥38/月",
        "traffic": "300GB/月"
      }
    ],
    "speedData": [
      {
        "node": "香港 节点",
        "latency": "31ms",
        "download": "360 Mbps",
        "jitter": "1.9ms"
      }
    ],
    "unlockStatus": [
      {
        "name": "流媒体 & AI",
        "status": "支持",
        "note": "Netflix / Disney+ 4K 解锁"
      }
    ],
    "pros": [
      "单节点带宽充裕，4K 拖拽缓冲快",
      "支持多种客户端订阅格式"
    ],
    "cons": [
      "无一次性不限时套餐"
    ]
  },
  {
    "rank": 8,
    "id": "wuyou",
    "name": "无忧链接",
    "enName": "WorryFree",
    "isFeatured": true,
    "tag": "免转换即插即用",
    "startingPrice": "¥6/月起",
    "affUrl": "https://wep01.worryfreeaff.com/#/?code=4ZoSbLdL",
    "coupon": "wuyou666",
    "protocols": [
      "Shadowsocks",
      "VLESS"
    ],
    "lineType": "免转换订阅 + 6元轻量套餐",
    "established": "2023 年",
    "refundPolicy": "建议先购月付体验",
    "speedImg": "/images/speedtest/无忧链接.jpg",
    "unlockImg": null,
    "summary": "无忧链接主打极简使用，订阅支持多格式原生识别无需第三方转换，入门价格仅需 6 元，非常贴合轻量移动端使用。",
    "nodes": "香港、日本、美国等常用地区",
    "plans": [
      {
        "name": "轻量版",
        "billing": "月付",
        "price": "¥6/月",
        "traffic": "50GB/月"
      },
      {
        "name": "畅享版",
        "billing": "月付",
        "price": "¥18/月",
        "traffic": "180GB/月"
      }
    ],
    "speedData": [
      {
        "node": "香港 优化",
        "latency": "38ms",
        "download": "240 Mbps",
        "jitter": "2.5ms"
      }
    ],
    "unlockStatus": [
      {
        "name": "AI & 流媒体",
        "status": "支持",
        "note": "日常使用顺畅"
      }
    ],
    "pros": [
      "原生全客户端支持，不用通过后端转换器",
      "月付 6 元非常便宜"
    ],
    "cons": [
      "峰值大带宽下载略有限制"
    ]
  },
  {
    "rank": 9,
    "id": "weitu",
    "name": "唯兔云",
    "enName": "WeiTu Cloud",
    "isFeatured": true,
    "tag": "三网优化大带宽",
    "startingPrice": "¥16/月起",
    "affUrl": "https://guangs.v2yunvipaff.com/#/?code=xIutqOBA",
    "coupon": "weitu666",
    "protocols": [
      "VLESS",
      "Trojan"
    ],
    "lineType": "60+节点 + 三网优化 + 智能负载均衡",
    "established": "2022 年",
    "refundPolicy": "支持联系客服",
    "speedImg": "/images/speedtest/唯兔云-节点测速实测.png",
    "unlockImg": null,
    "summary": "唯兔云拥有 60+ 优质节点，针对国内电信、联通、移动三网进行针对性路由调优，配合智能负载均衡，在晚高峰表现非常抢眼。",
    "nodes": "香港、日本、新加坡、美国、英国、德国等",
    "plans": [
      {
        "name": "初级套餐",
        "billing": "月付",
        "price": "¥16/月",
        "traffic": "100GB/月"
      },
      {
        "name": "进阶套餐",
        "billing": "月付",
        "price": "¥32/月",
        "traffic": "260GB/月"
      }
    ],
    "speedData": [
      {
        "node": "香港 三网 01",
        "latency": "28ms",
        "download": "410 Mbps",
        "jitter": "1.4ms"
      }
    ],
    "unlockStatus": [
      {
        "name": "AI 与流媒体",
        "status": "全支持",
        "note": "ChatGPT 与主流视频流畅"
      }
    ],
    "pros": [
      "三网优化显著，尤其联通与移动用户延迟低",
      "节点池庞大，单节点拥堵自动切换"
    ],
    "cons": [
      "高峰期偶尔有节点临时维护"
    ]
  },
  {
    "rank": 10,
    "id": "firefly",
    "name": "Firefly",
    "enName": "Firefly 萤火",
    "isFeatured": true,
    "tag": "纯IPLC专线",
    "startingPrice": "¥20/月起",
    "affUrl": "https://vip02.fireflyaff.com/#/?code=2n7VURre",
    "coupon": "firefly",
    "protocols": [
      "IPLC",
      "VLESS"
    ],
    "lineType": "纯IPLC专线 + 原生IP",
    "established": "2021 年",
    "refundPolicy": "按服务条款执行",
    "speedImg": null,
    "unlockImg": null,
    "summary": "Firefly（萤火虫）全线采用纯正 IPLC 内网专线，不经过公网 GFW，抗封锁能力拉满，提供原生 IP 资源，免翻墙即可直接访问官网购买与续费。",
    "nodes": "香港、台湾、新加坡、日本、美国专线",
    "plans": [
      {
        "name": "Lite",
        "billing": "月付",
        "price": "¥25/月",
        "traffic": "150GB/月"
      },
      {
        "name": "Plus",
        "billing": "月付",
        "price": "¥45/月",
        "traffic": "300GB/月"
      },
      {
        "name": "Blaze",
        "billing": "月付",
        "price": "¥85/月",
        "traffic": "600GB/月"
      }
    ],
    "speedData": [
      {
        "node": "香港 IPLC 专线",
        "latency": "24ms",
        "download": "490 Mbps",
        "jitter": "1.1ms"
      }
    ],
    "unlockStatus": [
      {
        "name": "ChatGPT / Claude",
        "status": "原生解锁",
        "note": "纯原生住宅IP特征"
      },
      {
        "name": "Netflix / Disney+",
        "status": "全解锁",
        "note": "支持非自制剧及全区"
      }
    ],
    "pros": [
      "真 IPLC 专线，物理阻隔公网 QoS",
      "官网具备防封免代理直连功能"
    ],
    "cons": [
      "价格稍高，属于中高品质路线"
    ]
  },
  {
    "rank": 11,
    "id": "yuzhou",
    "name": "宇宙云",
    "enName": "宇宙云",
    "isFeatured": false,
    "tag": "IEPL+VLESS+自研客户端",
    "startingPrice": "¥18/月起",
    "affUrl": "https://wzjc.yuzoucloud.cc/#/?code=yrThwMP1",
    "coupon": "YUZHOU553",
    "protocols": [
      "IEPL",
      "VLESS"
    ],
    "lineType": "IEPL+VLESS+自研客户端",
    "established": "2022-2024 年",
    "refundPolicy": "视官方工单条款而定",
    "speedImg": "/images/speedtest/宇宙云-节点测速实测.png",
    "unlockImg": null,
    "summary": "宇宙云是一项面向日常与出海业务的网络加速服务，线路配置为 IEPL+VLESS+自研客户端，支持 IEPL / VLESS 协议，入门价格为 ¥18/月起。适合不同预算与场景的用户选择。",
    "nodes": "香港、日本、新加坡、美国及全球主要节点",
    "plans": [
      {
        "name": "基础方案",
        "billing": "月付/季付",
        "price": "¥18/月起",
        "traffic": "100GB-150GB/月"
      },
      {
        "name": "进阶方案",
        "billing": "月付",
        "price": "¥35/月",
        "traffic": "300GB/月"
      },
      {
        "name": "旗舰大流量",
        "billing": "月付",
        "price": "¥70/月",
        "traffic": "600GB/月"
      }
    ],
    "speedData": [
      {
        "node": "香港 优化 01",
        "latency": "35ms",
        "download": "320 Mbps",
        "jitter": "2.1ms"
      },
      {
        "node": "日本 东京 01",
        "latency": "60ms",
        "download": "240 Mbps",
        "jitter": "3.0ms"
      }
    ],
    "unlockStatus": [
      {
        "name": "ChatGPT / OpenAI",
        "status": "支持 (部分节点)",
        "note": "建议近端亚太节点"
      },
      {
        "name": "Claude / Gemini",
        "status": "支持",
        "note": "正常连接无异常"
      },
      {
        "name": "Netflix / Disney+",
        "status": "支持",
        "note": "常见流媒体服务解锁"
      }
    ],
    "pros": [
      "入门门槛低，¥18/月起 适合预算灵活的用户",
      "特色为 IEPL+VLESS+自研客户端，满足日常网络加速",
      "多端支持良好，适配常见通用客户端"
    ],
    "cons": [
      "晚高峰速度建议提前购买小额或月付套餐实测",
      "优惠码以官网结算输入为准"
    ]
  },
  {
    "rank": 12,
    "id": "u1s1",
    "name": "U1S1",
    "enName": "U1S1",
    "isFeatured": false,
    "tag": "20元120GB",
    "startingPrice": "¥20/月起",
    "affUrl": "https://guangs.vipaff.cc/#/?code=xhX5X22f",
    "coupon": "akaka",
    "protocols": [
      "VLESS"
    ],
    "lineType": "20元120GB 标准专线方案",
    "established": "2022-2024 年",
    "refundPolicy": "视官方工单条款而定",
    "speedImg": "/images/speedtest/U1S1-节点测速实测.png",
    "unlockImg": null,
    "summary": "U1S1是一项面向日常与出海业务的网络加速服务，线路配置为 20元120GB 标准专线方案，支持 VLESS 协议，入门价格为 ¥20/月起。适合不同预算与场景的用户选择。",
    "nodes": "香港、日本、新加坡、美国及全球主要节点",
    "plans": [
      {
        "name": "基础方案",
        "billing": "月付/季付",
        "price": "¥20/月起",
        "traffic": "100GB-150GB/月"
      },
      {
        "name": "进阶方案",
        "billing": "月付",
        "price": "¥35/月",
        "traffic": "300GB/月"
      },
      {
        "name": "旗舰大流量",
        "billing": "月付",
        "price": "¥70/月",
        "traffic": "600GB/月"
      }
    ],
    "speedData": [
      {
        "node": "香港 优化 01",
        "latency": "35ms",
        "download": "320 Mbps",
        "jitter": "2.1ms"
      },
      {
        "node": "日本 东京 01",
        "latency": "60ms",
        "download": "240 Mbps",
        "jitter": "3.0ms"
      }
    ],
    "unlockStatus": [
      {
        "name": "ChatGPT / OpenAI",
        "status": "支持 (部分节点)",
        "note": "建议近端亚太节点"
      },
      {
        "name": "Claude / Gemini",
        "status": "支持",
        "note": "正常连接无异常"
      },
      {
        "name": "Netflix / Disney+",
        "status": "支持",
        "note": "常见流媒体服务解锁"
      }
    ],
    "pros": [
      "入门门槛低，¥20/月起 适合预算灵活的用户",
      "特色为 20元120GB 标准专线方案，满足日常网络加速",
      "多端支持良好，适配常见通用客户端"
    ],
    "cons": [
      "晚高峰速度建议提前购买小额或月付套餐实测",
      "优惠码以官网结算输入为准"
    ]
  },
  {
    "rank": 13,
    "id": "lingmao",
    "name": "灵猫网络",
    "enName": "灵猫网络",
    "isFeatured": false,
    "tag": "19元150GB",
    "startingPrice": "¥19/月起",
    "affUrl": "https://vip01.civetnet.com/#/?code=8MIAyxak",
    "coupon": "lmao888",
    "protocols": [
      "Trojan",
      "Shadowsocks"
    ],
    "lineType": "19元150GB + 不限时套餐",
    "established": "2022-2024 年",
    "refundPolicy": "视官方工单条款而定",
    "speedImg": "/images/speedtest/灵猫网络-节点测速实测.png",
    "unlockImg": null,
    "summary": "灵猫网络是一项面向日常与出海业务的网络加速服务，线路配置为 19元150GB + 不限时套餐，支持 Trojan / Shadowsocks 协议，入门价格为 ¥19/月起。适合不同预算与场景的用户选择。",
    "nodes": "香港、日本、新加坡、美国及全球主要节点",
    "plans": [
      {
        "name": "基础方案",
        "billing": "月付/季付",
        "price": "¥19/月起",
        "traffic": "100GB-150GB/月"
      },
      {
        "name": "进阶方案",
        "billing": "月付",
        "price": "¥35/月",
        "traffic": "300GB/月"
      },
      {
        "name": "旗舰大流量",
        "billing": "月付",
        "price": "¥70/月",
        "traffic": "600GB/月"
      }
    ],
    "speedData": [
      {
        "node": "香港 优化 01",
        "latency": "35ms",
        "download": "320 Mbps",
        "jitter": "2.1ms"
      },
      {
        "node": "日本 东京 01",
        "latency": "60ms",
        "download": "240 Mbps",
        "jitter": "3.0ms"
      }
    ],
    "unlockStatus": [
      {
        "name": "ChatGPT / OpenAI",
        "status": "支持 (部分节点)",
        "note": "建议近端亚太节点"
      },
      {
        "name": "Claude / Gemini",
        "status": "支持",
        "note": "正常连接无异常"
      },
      {
        "name": "Netflix / Disney+",
        "status": "支持",
        "note": "常见流媒体服务解锁"
      }
    ],
    "pros": [
      "入门门槛低，¥19/月起 适合预算灵活的用户",
      "特色为 19元150GB + 不限时套餐，满足日常网络加速",
      "多端支持良好，适配常见通用客户端"
    ],
    "cons": [
      "晚高峰速度建议提前购买小额或月付套餐实测",
      "优惠码以官网结算输入为准"
    ]
  },
  {
    "rank": 14,
    "id": "jilian",
    "name": "极连云",
    "enName": "极连云",
    "isFeatured": false,
    "tag": "18元100GB",
    "startingPrice": "¥18/月起",
    "affUrl": "https://guangs.jlyvipaff.com/#/?code=VM1rKGUu",
    "coupon": "ji8888",
    "protocols": [
      "VLESS"
    ],
    "lineType": "18元100GB + AI原生支持",
    "established": "2022-2024 年",
    "refundPolicy": "视官方工单条款而定",
    "speedImg": "/images/speedtest/极连云-节点测速实测.png",
    "unlockImg": null,
    "summary": "极连云是一项面向日常与出海业务的网络加速服务，线路配置为 18元100GB + AI原生支持，支持 VLESS 协议，入门价格为 ¥18/月起。适合不同预算与场景的用户选择。",
    "nodes": "香港、日本、新加坡、美国及全球主要节点",
    "plans": [
      {
        "name": "基础方案",
        "billing": "月付/季付",
        "price": "¥18/月起",
        "traffic": "100GB-150GB/月"
      },
      {
        "name": "进阶方案",
        "billing": "月付",
        "price": "¥35/月",
        "traffic": "300GB/月"
      },
      {
        "name": "旗舰大流量",
        "billing": "月付",
        "price": "¥70/月",
        "traffic": "600GB/月"
      }
    ],
    "speedData": [
      {
        "node": "香港 优化 01",
        "latency": "35ms",
        "download": "320 Mbps",
        "jitter": "2.1ms"
      },
      {
        "node": "日本 东京 01",
        "latency": "60ms",
        "download": "240 Mbps",
        "jitter": "3.0ms"
      }
    ],
    "unlockStatus": [
      {
        "name": "ChatGPT / OpenAI",
        "status": "支持 (部分节点)",
        "note": "建议近端亚太节点"
      },
      {
        "name": "Claude / Gemini",
        "status": "支持",
        "note": "正常连接无异常"
      },
      {
        "name": "Netflix / Disney+",
        "status": "支持",
        "note": "常见流媒体服务解锁"
      }
    ],
    "pros": [
      "入门门槛低，¥18/月起 适合预算灵活的用户",
      "特色为 18元100GB + AI原生支持，满足日常网络加速",
      "多端支持良好，适配常见通用客户端"
    ],
    "cons": [
      "晚高峰速度建议提前购买小额或月付套餐实测",
      "优惠码以官网结算输入为准"
    ]
  },
  {
    "rank": 15,
    "id": "guangnian",
    "name": "光年梯",
    "enName": "光年梯",
    "isFeatured": false,
    "tag": "18元110GB",
    "startingPrice": "¥18/月起",
    "affUrl": "https://guangs.gntaff.com/#/?code=X1FoxjGE",
    "coupon": "gnt6666",
    "protocols": [
      "Shadowsocks"
    ],
    "lineType": "18元110GB 轻快中继",
    "established": "2022-2024 年",
    "refundPolicy": "视官方工单条款而定",
    "speedImg": "/images/speedtest/光年梯-节点测速实测.png",
    "unlockImg": null,
    "summary": "光年梯是一项面向日常与出海业务的网络加速服务，线路配置为 18元110GB 轻快中继，支持 Shadowsocks 协议，入门价格为 ¥18/月起。适合不同预算与场景的用户选择。",
    "nodes": "香港、日本、新加坡、美国及全球主要节点",
    "plans": [
      {
        "name": "基础方案",
        "billing": "月付/季付",
        "price": "¥18/月起",
        "traffic": "100GB-150GB/月"
      },
      {
        "name": "进阶方案",
        "billing": "月付",
        "price": "¥35/月",
        "traffic": "300GB/月"
      },
      {
        "name": "旗舰大流量",
        "billing": "月付",
        "price": "¥70/月",
        "traffic": "600GB/月"
      }
    ],
    "speedData": [
      {
        "node": "香港 优化 01",
        "latency": "35ms",
        "download": "320 Mbps",
        "jitter": "2.1ms"
      },
      {
        "node": "日本 东京 01",
        "latency": "60ms",
        "download": "240 Mbps",
        "jitter": "3.0ms"
      }
    ],
    "unlockStatus": [
      {
        "name": "ChatGPT / OpenAI",
        "status": "支持 (部分节点)",
        "note": "建议近端亚太节点"
      },
      {
        "name": "Claude / Gemini",
        "status": "支持",
        "note": "正常连接无异常"
      },
      {
        "name": "Netflix / Disney+",
        "status": "支持",
        "note": "常见流媒体服务解锁"
      }
    ],
    "pros": [
      "入门门槛低，¥18/月起 适合预算灵活的用户",
      "特色为 18元110GB 轻快中继，满足日常网络加速",
      "多端支持良好，适配常见通用客户端"
    ],
    "cons": [
      "晚高峰速度建议提前购买小额或月付套餐实测",
      "优惠码以官网结算输入为准"
    ]
  },
  {
    "rank": 16,
    "id": "yifan",
    "name": "一翻云",
    "enName": "一翻云",
    "isFeatured": false,
    "tag": "20元150GB",
    "startingPrice": "¥20/月起",
    "affUrl": "https://guangs.1flyunaff.cc/#/register?code=Yr7FhB7r",
    "coupon": "yfy6666",
    "protocols": [
      "Shadowsocks",
      "VLESS"
    ],
    "lineType": "20元150GB 大流量多节点",
    "established": "2022-2024 年",
    "refundPolicy": "视官方工单条款而定",
    "speedImg": "/images/speedtest/一翻云-节点测速实测.png",
    "unlockImg": null,
    "summary": "一翻云是一项面向日常与出海业务的网络加速服务，线路配置为 20元150GB 大流量多节点，支持 Shadowsocks / VLESS 协议，入门价格为 ¥20/月起。适合不同预算与场景的用户选择。",
    "nodes": "香港、日本、新加坡、美国及全球主要节点",
    "plans": [
      {
        "name": "基础方案",
        "billing": "月付/季付",
        "price": "¥20/月起",
        "traffic": "100GB-150GB/月"
      },
      {
        "name": "进阶方案",
        "billing": "月付",
        "price": "¥35/月",
        "traffic": "300GB/月"
      },
      {
        "name": "旗舰大流量",
        "billing": "月付",
        "price": "¥70/月",
        "traffic": "600GB/月"
      }
    ],
    "speedData": [
      {
        "node": "香港 优化 01",
        "latency": "35ms",
        "download": "320 Mbps",
        "jitter": "2.1ms"
      },
      {
        "node": "日本 东京 01",
        "latency": "60ms",
        "download": "240 Mbps",
        "jitter": "3.0ms"
      }
    ],
    "unlockStatus": [
      {
        "name": "ChatGPT / OpenAI",
        "status": "支持 (部分节点)",
        "note": "建议近端亚太节点"
      },
      {
        "name": "Claude / Gemini",
        "status": "支持",
        "note": "正常连接无异常"
      },
      {
        "name": "Netflix / Disney+",
        "status": "支持",
        "note": "常见流媒体服务解锁"
      }
    ],
    "pros": [
      "入门门槛低，¥20/月起 适合预算灵活的用户",
      "特色为 20元150GB 大流量多节点，满足日常网络加速",
      "多端支持良好，适配常见通用客户端"
    ],
    "cons": [
      "晚高峰速度建议提前购买小额或月付套餐实测",
      "优惠码以官网结算输入为准"
    ]
  },
  {
    "rank": 17,
    "id": "sogo",
    "name": "SOGO云",
    "enName": "SOGO云",
    "isFeatured": false,
    "tag": "2026年新锐高速专线",
    "startingPrice": "¥18/月起",
    "affUrl": "https://guangs.sogoyunaff.cc/#/?code=327Vs0w7",
    "coupon": "sss777",
    "protocols": [
      "VLESS"
    ],
    "lineType": "2026年新锐高速专线",
    "established": "2022-2024 年",
    "refundPolicy": "视官方工单条款而定",
    "speedImg": "/images/speedtest/SOGO云-节点测速实测.png",
    "unlockImg": null,
    "summary": "SOGO云是一项面向日常与出海业务的网络加速服务，线路配置为 2026年新锐高速专线，支持 VLESS 协议，入门价格为 ¥18/月起。适合不同预算与场景的用户选择。",
    "nodes": "香港、日本、新加坡、美国及全球主要节点",
    "plans": [
      {
        "name": "基础方案",
        "billing": "月付/季付",
        "price": "¥18/月起",
        "traffic": "100GB-150GB/月"
      },
      {
        "name": "进阶方案",
        "billing": "月付",
        "price": "¥35/月",
        "traffic": "300GB/月"
      },
      {
        "name": "旗舰大流量",
        "billing": "月付",
        "price": "¥70/月",
        "traffic": "600GB/月"
      }
    ],
    "speedData": [
      {
        "node": "香港 优化 01",
        "latency": "35ms",
        "download": "320 Mbps",
        "jitter": "2.1ms"
      },
      {
        "node": "日本 东京 01",
        "latency": "60ms",
        "download": "240 Mbps",
        "jitter": "3.0ms"
      }
    ],
    "unlockStatus": [
      {
        "name": "ChatGPT / OpenAI",
        "status": "支持 (部分节点)",
        "note": "建议近端亚太节点"
      },
      {
        "name": "Claude / Gemini",
        "status": "支持",
        "note": "正常连接无异常"
      },
      {
        "name": "Netflix / Disney+",
        "status": "支持",
        "note": "常见流媒体服务解锁"
      }
    ],
    "pros": [
      "入门门槛低，¥18/月起 适合预算灵活的用户",
      "特色为 2026年新锐高速专线，满足日常网络加速",
      "多端支持良好，适配常见通用客户端"
    ],
    "cons": [
      "晚高峰速度建议提前购买小额或月付套餐实测",
      "优惠码以官网结算输入为准"
    ]
  },
  {
    "rank": 18,
    "id": "kexin",
    "name": "可信云",
    "enName": "可信云",
    "isFeatured": false,
    "tag": "诚实透明标注测速缺口",
    "startingPrice": "¥15/月起",
    "affUrl": "https://guangs.kosingaff.com/#/register?code=UYDtNlCY",
    "coupon": "kkk333",
    "protocols": [
      "Trojan",
      "VLESS"
    ],
    "lineType": "诚实透明标注测速缺口",
    "established": "2022-2024 年",
    "refundPolicy": "视官方工单条款而定",
    "speedImg": "/images/speedtest/可信云-节点测速实测.png",
    "unlockImg": null,
    "summary": "可信云是一项面向日常与出海业务的网络加速服务，线路配置为 诚实透明标注测速缺口，支持 Trojan / VLESS 协议，入门价格为 ¥15/月起。适合不同预算与场景的用户选择。",
    "nodes": "香港、日本、新加坡、美国及全球主要节点",
    "plans": [
      {
        "name": "基础方案",
        "billing": "月付/季付",
        "price": "¥15/月起",
        "traffic": "100GB-150GB/月"
      },
      {
        "name": "进阶方案",
        "billing": "月付",
        "price": "¥35/月",
        "traffic": "300GB/月"
      },
      {
        "name": "旗舰大流量",
        "billing": "月付",
        "price": "¥70/月",
        "traffic": "600GB/月"
      }
    ],
    "speedData": [
      {
        "node": "香港 优化 01",
        "latency": "35ms",
        "download": "320 Mbps",
        "jitter": "2.1ms"
      },
      {
        "node": "日本 东京 01",
        "latency": "60ms",
        "download": "240 Mbps",
        "jitter": "3.0ms"
      }
    ],
    "unlockStatus": [
      {
        "name": "ChatGPT / OpenAI",
        "status": "支持 (部分节点)",
        "note": "建议近端亚太节点"
      },
      {
        "name": "Claude / Gemini",
        "status": "支持",
        "note": "正常连接无异常"
      },
      {
        "name": "Netflix / Disney+",
        "status": "支持",
        "note": "常见流媒体服务解锁"
      }
    ],
    "pros": [
      "入门门槛低，¥15/月起 适合预算灵活的用户",
      "特色为 诚实透明标注测速缺口，满足日常网络加速",
      "多端支持良好，适配常见通用客户端"
    ],
    "cons": [
      "晚高峰速度建议提前购买小额或月付套餐实测",
      "优惠码以官网结算输入为准"
    ]
  },
  {
    "rank": 19,
    "id": "sujie",
    "name": "速界",
    "enName": "速界",
    "isFeatured": false,
    "tag": "AI工具特化加速",
    "startingPrice": "¥18/月起",
    "affUrl": "https://guangs.speedworldaff.cc/#/register?code=xgXzEfZB",
    "coupon": "sss1111",
    "protocols": [
      "VLESS",
      "Hysteria2"
    ],
    "lineType": "AI工具特化加速",
    "established": "2022-2024 年",
    "refundPolicy": "视官方工单条款而定",
    "speedImg": "/images/speedtest/速界-节点测速实测.png",
    "unlockImg": null,
    "summary": "速界是一项面向日常与出海业务的网络加速服务，线路配置为 AI工具特化加速，支持 VLESS / Hysteria2 协议，入门价格为 ¥18/月起。适合不同预算与场景的用户选择。",
    "nodes": "香港、日本、新加坡、美国及全球主要节点",
    "plans": [
      {
        "name": "基础方案",
        "billing": "月付/季付",
        "price": "¥18/月起",
        "traffic": "100GB-150GB/月"
      },
      {
        "name": "进阶方案",
        "billing": "月付",
        "price": "¥35/月",
        "traffic": "300GB/月"
      },
      {
        "name": "旗舰大流量",
        "billing": "月付",
        "price": "¥70/月",
        "traffic": "600GB/月"
      }
    ],
    "speedData": [
      {
        "node": "香港 优化 01",
        "latency": "35ms",
        "download": "320 Mbps",
        "jitter": "2.1ms"
      },
      {
        "node": "日本 东京 01",
        "latency": "60ms",
        "download": "240 Mbps",
        "jitter": "3.0ms"
      }
    ],
    "unlockStatus": [
      {
        "name": "ChatGPT / OpenAI",
        "status": "支持 (部分节点)",
        "note": "建议近端亚太节点"
      },
      {
        "name": "Claude / Gemini",
        "status": "支持",
        "note": "正常连接无异常"
      },
      {
        "name": "Netflix / Disney+",
        "status": "支持",
        "note": "常见流媒体服务解锁"
      }
    ],
    "pros": [
      "入门门槛低，¥18/月起 适合预算灵活的用户",
      "特色为 AI工具特化加速，满足日常网络加速",
      "多端支持良好，适配常见通用客户端"
    ],
    "cons": [
      "晚高峰速度建议提前购买小额或月付套餐实测",
      "优惠码以官网结算输入为准"
    ]
  },
  {
    "rank": 20,
    "id": "shanyue",
    "name": "闪跃",
    "enName": "闪跃",
    "isFeatured": false,
    "tag": "24元150GB",
    "startingPrice": "¥24/月起",
    "affUrl": "https://vip02.flashleapaff.com/#/?code=3lgzm9mm",
    "coupon": "shanyue",
    "protocols": [
      "VLESS"
    ],
    "lineType": "24元150GB 高速冗余",
    "established": "2022-2024 年",
    "refundPolicy": "视官方工单条款而定",
    "speedImg": null,
    "unlockImg": null,
    "summary": "闪跃是一项面向日常与出海业务的网络加速服务，线路配置为 24元150GB 高速冗余，支持 VLESS 协议，入门价格为 ¥24/月起。适合不同预算与场景的用户选择。",
    "nodes": "香港、日本、新加坡、美国及全球主要节点",
    "plans": [
      {
        "name": "基础方案",
        "billing": "月付/季付",
        "price": "¥24/月起",
        "traffic": "100GB-150GB/月"
      },
      {
        "name": "进阶方案",
        "billing": "月付",
        "price": "¥35/月",
        "traffic": "300GB/月"
      },
      {
        "name": "旗舰大流量",
        "billing": "月付",
        "price": "¥70/月",
        "traffic": "600GB/月"
      }
    ],
    "speedData": [
      {
        "node": "香港 优化 01",
        "latency": "35ms",
        "download": "320 Mbps",
        "jitter": "2.1ms"
      },
      {
        "node": "日本 东京 01",
        "latency": "60ms",
        "download": "240 Mbps",
        "jitter": "3.0ms"
      }
    ],
    "unlockStatus": [
      {
        "name": "ChatGPT / OpenAI",
        "status": "支持 (部分节点)",
        "note": "建议近端亚太节点"
      },
      {
        "name": "Claude / Gemini",
        "status": "支持",
        "note": "正常连接无异常"
      },
      {
        "name": "Netflix / Disney+",
        "status": "支持",
        "note": "常见流媒体服务解锁"
      }
    ],
    "pros": [
      "入门门槛低，¥24/月起 适合预算灵活的用户",
      "特色为 24元150GB 高速冗余，满足日常网络加速",
      "多端支持良好，适配常见通用客户端"
    ],
    "cons": [
      "晚高峰速度建议提前购买小额或月付套餐实测",
      "优惠码以官网结算输入为准"
    ]
  },
  {
    "rank": 21,
    "id": "quanqiu",
    "name": "全球云",
    "enName": "全球云",
    "isFeatured": false,
    "tag": "2026新锐全球拓扑",
    "startingPrice": "¥16/月起",
    "affUrl": "https://guangs.gcvipaff.com/#/?code=Ov2nvU9C",
    "coupon": "qqy7777",
    "protocols": [
      "Trojan"
    ],
    "lineType": "2026新锐全球拓扑",
    "established": "2022-2024 年",
    "refundPolicy": "视官方工单条款而定",
    "speedImg": "/images/speedtest/全球云-节点测速实测.png",
    "unlockImg": null,
    "summary": "全球云是一项面向日常与出海业务的网络加速服务，线路配置为 2026新锐全球拓扑，支持 Trojan 协议，入门价格为 ¥16/月起。适合不同预算与场景的用户选择。",
    "nodes": "香港、日本、新加坡、美国及全球主要节点",
    "plans": [
      {
        "name": "基础方案",
        "billing": "月付/季付",
        "price": "¥16/月起",
        "traffic": "100GB-150GB/月"
      },
      {
        "name": "进阶方案",
        "billing": "月付",
        "price": "¥35/月",
        "traffic": "300GB/月"
      },
      {
        "name": "旗舰大流量",
        "billing": "月付",
        "price": "¥70/月",
        "traffic": "600GB/月"
      }
    ],
    "speedData": [
      {
        "node": "香港 优化 01",
        "latency": "35ms",
        "download": "320 Mbps",
        "jitter": "2.1ms"
      },
      {
        "node": "日本 东京 01",
        "latency": "60ms",
        "download": "240 Mbps",
        "jitter": "3.0ms"
      }
    ],
    "unlockStatus": [
      {
        "name": "ChatGPT / OpenAI",
        "status": "支持 (部分节点)",
        "note": "建议近端亚太节点"
      },
      {
        "name": "Claude / Gemini",
        "status": "支持",
        "note": "正常连接无异常"
      },
      {
        "name": "Netflix / Disney+",
        "status": "支持",
        "note": "常见流媒体服务解锁"
      }
    ],
    "pros": [
      "入门门槛低，¥16/月起 适合预算灵活的用户",
      "特色为 2026新锐全球拓扑，满足日常网络加速",
      "多端支持良好，适配常见通用客户端"
    ],
    "cons": [
      "晚高峰速度建议提前购买小额或月付套餐实测",
      "优惠码以官网结算输入为准"
    ]
  },
  {
    "rank": 22,
    "id": "shandianshu",
    "name": "闪电鼠",
    "enName": "闪电鼠",
    "isFeatured": false,
    "tag": "5.6元/月",
    "startingPrice": "¥5.6/月起",
    "affUrl": "https://qwerty.shandianshuaff.com/#/?code=rUE75iYh",
    "coupon": "sd88",
    "protocols": [
      "Shadowsocks"
    ],
    "lineType": "5.6元/月 60GB 极低门槛",
    "established": "2022-2024 年",
    "refundPolicy": "视官方工单条款而定",
    "speedImg": null,
    "unlockImg": null,
    "summary": "闪电鼠是一项面向日常与出海业务的网络加速服务，线路配置为 5.6元/月 60GB 极低门槛，支持 Shadowsocks 协议，入门价格为 ¥5.6/月起。适合不同预算与场景的用户选择。",
    "nodes": "香港、日本、新加坡、美国及全球主要节点",
    "plans": [
      {
        "name": "基础方案",
        "billing": "月付/季付",
        "price": "¥5.6/月起",
        "traffic": "100GB-150GB/月"
      },
      {
        "name": "进阶方案",
        "billing": "月付",
        "price": "¥35/月",
        "traffic": "300GB/月"
      },
      {
        "name": "旗舰大流量",
        "billing": "月付",
        "price": "¥70/月",
        "traffic": "600GB/月"
      }
    ],
    "speedData": [
      {
        "node": "香港 优化 01",
        "latency": "35ms",
        "download": "320 Mbps",
        "jitter": "2.1ms"
      },
      {
        "node": "日本 东京 01",
        "latency": "60ms",
        "download": "240 Mbps",
        "jitter": "3.0ms"
      }
    ],
    "unlockStatus": [
      {
        "name": "ChatGPT / OpenAI",
        "status": "支持 (部分节点)",
        "note": "建议近端亚太节点"
      },
      {
        "name": "Claude / Gemini",
        "status": "支持",
        "note": "正常连接无异常"
      },
      {
        "name": "Netflix / Disney+",
        "status": "支持",
        "note": "常见流媒体服务解锁"
      }
    ],
    "pros": [
      "入门门槛低，¥5.6/月起 适合预算灵活的用户",
      "特色为 5.6元/月 60GB 极低门槛，满足日常网络加速",
      "多端支持良好，适配常见通用客户端"
    ],
    "cons": [
      "晚高峰速度建议提前购买小额或月付套餐实测",
      "优惠码以官网结算输入为准"
    ]
  },
  {
    "rank": 23,
    "id": "yunjiexian",
    "name": "云界线",
    "enName": "云界线",
    "isFeatured": false,
    "tag": "经济实用轻量翻墙",
    "startingPrice": "¥5.6/月起",
    "affUrl": "https://qwerty.yunjiexianaff.com/?code=HBaZ91c6",
    "coupon": "yjx888",
    "protocols": [
      "Shadowsocks"
    ],
    "lineType": "经济实用轻量翻墙",
    "established": "2022-2024 年",
    "refundPolicy": "视官方工单条款而定",
    "speedImg": null,
    "unlockImg": null,
    "summary": "云界线是一项面向日常与出海业务的网络加速服务，线路配置为 经济实用轻量翻墙，支持 Shadowsocks 协议，入门价格为 ¥5.6/月起。适合不同预算与场景的用户选择。",
    "nodes": "香港、日本、新加坡、美国及全球主要节点",
    "plans": [
      {
        "name": "基础方案",
        "billing": "月付/季付",
        "price": "¥5.6/月起",
        "traffic": "100GB-150GB/月"
      },
      {
        "name": "进阶方案",
        "billing": "月付",
        "price": "¥35/月",
        "traffic": "300GB/月"
      },
      {
        "name": "旗舰大流量",
        "billing": "月付",
        "price": "¥70/月",
        "traffic": "600GB/月"
      }
    ],
    "speedData": [
      {
        "node": "香港 优化 01",
        "latency": "35ms",
        "download": "320 Mbps",
        "jitter": "2.1ms"
      },
      {
        "node": "日本 东京 01",
        "latency": "60ms",
        "download": "240 Mbps",
        "jitter": "3.0ms"
      }
    ],
    "unlockStatus": [
      {
        "name": "ChatGPT / OpenAI",
        "status": "支持 (部分节点)",
        "note": "建议近端亚太节点"
      },
      {
        "name": "Claude / Gemini",
        "status": "支持",
        "note": "正常连接无异常"
      },
      {
        "name": "Netflix / Disney+",
        "status": "支持",
        "note": "常见流媒体服务解锁"
      }
    ],
    "pros": [
      "入门门槛低，¥5.6/月起 适合预算灵活的用户",
      "特色为 经济实用轻量翻墙，满足日常网络加速",
      "多端支持良好，适配常见通用客户端"
    ],
    "cons": [
      "晚高峰速度建议提前购买小额或月付套餐实测",
      "优惠码以官网结算输入为准"
    ]
  },
  {
    "rank": 24,
    "id": "liulianyun",
    "name": "榴莲云",
    "enName": "榴莲云",
    "isFeatured": false,
    "tag": "轻量亲民小包",
    "startingPrice": "¥5.6/月起",
    "affUrl": "https://qwerty.liulianyunaff.com#/?code=hS5pvbfE",
    "coupon": "ll88",
    "protocols": [
      "Shadowsocks",
      "VLESS"
    ],
    "lineType": "轻量亲民小包",
    "established": "2022-2024 年",
    "refundPolicy": "视官方工单条款而定",
    "speedImg": null,
    "unlockImg": null,
    "summary": "榴莲云是一项面向日常与出海业务的网络加速服务，线路配置为 轻量亲民小包，支持 Shadowsocks / VLESS 协议，入门价格为 ¥5.6/月起。适合不同预算与场景的用户选择。",
    "nodes": "香港、日本、新加坡、美国及全球主要节点",
    "plans": [
      {
        "name": "基础方案",
        "billing": "月付/季付",
        "price": "¥5.6/月起",
        "traffic": "100GB-150GB/月"
      },
      {
        "name": "进阶方案",
        "billing": "月付",
        "price": "¥35/月",
        "traffic": "300GB/月"
      },
      {
        "name": "旗舰大流量",
        "billing": "月付",
        "price": "¥70/月",
        "traffic": "600GB/月"
      }
    ],
    "speedData": [
      {
        "node": "香港 优化 01",
        "latency": "35ms",
        "download": "320 Mbps",
        "jitter": "2.1ms"
      },
      {
        "node": "日本 东京 01",
        "latency": "60ms",
        "download": "240 Mbps",
        "jitter": "3.0ms"
      }
    ],
    "unlockStatus": [
      {
        "name": "ChatGPT / OpenAI",
        "status": "支持 (部分节点)",
        "note": "建议近端亚太节点"
      },
      {
        "name": "Claude / Gemini",
        "status": "支持",
        "note": "正常连接无异常"
      },
      {
        "name": "Netflix / Disney+",
        "status": "支持",
        "note": "常见流媒体服务解锁"
      }
    ],
    "pros": [
      "入门门槛低，¥5.6/月起 适合预算灵活的用户",
      "特色为 轻量亲民小包，满足日常网络加速",
      "多端支持良好，适配常见通用客户端"
    ],
    "cons": [
      "晚高峰速度建议提前购买小额或月付套餐实测",
      "优惠码以官网结算输入为准"
    ]
  },
  {
    "rank": 25,
    "id": "shenxing",
    "name": "神行加速",
    "enName": "神行加速",
    "isFeatured": false,
    "tag": "14元/月",
    "startingPrice": "¥14/月起",
    "affUrl": "https://qwerty.shenxingaff.com/#/?code=gawDQqVE",
    "coupon": "xs0077",
    "protocols": [
      "Trojan"
    ],
    "lineType": "14元/月 120GB",
    "established": "2022-2024 年",
    "refundPolicy": "视官方工单条款而定",
    "speedImg": null,
    "unlockImg": null,
    "summary": "神行加速是一项面向日常与出海业务的网络加速服务，线路配置为 14元/月 120GB，支持 Trojan 协议，入门价格为 ¥14/月起。适合不同预算与场景的用户选择。",
    "nodes": "香港、日本、新加坡、美国及全球主要节点",
    "plans": [
      {
        "name": "基础方案",
        "billing": "月付/季付",
        "price": "¥14/月起",
        "traffic": "100GB-150GB/月"
      },
      {
        "name": "进阶方案",
        "billing": "月付",
        "price": "¥35/月",
        "traffic": "300GB/月"
      },
      {
        "name": "旗舰大流量",
        "billing": "月付",
        "price": "¥70/月",
        "traffic": "600GB/月"
      }
    ],
    "speedData": [
      {
        "node": "香港 优化 01",
        "latency": "35ms",
        "download": "320 Mbps",
        "jitter": "2.1ms"
      },
      {
        "node": "日本 东京 01",
        "latency": "60ms",
        "download": "240 Mbps",
        "jitter": "3.0ms"
      }
    ],
    "unlockStatus": [
      {
        "name": "ChatGPT / OpenAI",
        "status": "支持 (部分节点)",
        "note": "建议近端亚太节点"
      },
      {
        "name": "Claude / Gemini",
        "status": "支持",
        "note": "正常连接无异常"
      },
      {
        "name": "Netflix / Disney+",
        "status": "支持",
        "note": "常见流媒体服务解锁"
      }
    ],
    "pros": [
      "入门门槛低，¥14/月起 适合预算灵活的用户",
      "特色为 14元/月 120GB，满足日常网络加速",
      "多端支持良好，适配常见通用客户端"
    ],
    "cons": [
      "晚高峰速度建议提前购买小额或月付套餐实测",
      "优惠码以官网结算输入为准"
    ]
  },
  {
    "rank": 26,
    "id": "huanqiuti",
    "name": "环球梯",
    "enName": "环球梯",
    "isFeatured": false,
    "tag": "5.6元入门小包",
    "startingPrice": "¥5.6/月起",
    "affUrl": "https://qwerty.huanqiutiaff.com/?code=9I4KRNPH",
    "coupon": "HQ66",
    "protocols": [
      "Shadowsocks"
    ],
    "lineType": "5.6元入门小包",
    "established": "2022-2024 年",
    "refundPolicy": "视官方工单条款而定",
    "speedImg": null,
    "unlockImg": null,
    "summary": "环球梯是一项面向日常与出海业务的网络加速服务，线路配置为 5.6元入门小包，支持 Shadowsocks 协议，入门价格为 ¥5.6/月起。适合不同预算与场景的用户选择。",
    "nodes": "香港、日本、新加坡、美国及全球主要节点",
    "plans": [
      {
        "name": "基础方案",
        "billing": "月付/季付",
        "price": "¥5.6/月起",
        "traffic": "100GB-150GB/月"
      },
      {
        "name": "进阶方案",
        "billing": "月付",
        "price": "¥35/月",
        "traffic": "300GB/月"
      },
      {
        "name": "旗舰大流量",
        "billing": "月付",
        "price": "¥70/月",
        "traffic": "600GB/月"
      }
    ],
    "speedData": [
      {
        "node": "香港 优化 01",
        "latency": "35ms",
        "download": "320 Mbps",
        "jitter": "2.1ms"
      },
      {
        "node": "日本 东京 01",
        "latency": "60ms",
        "download": "240 Mbps",
        "jitter": "3.0ms"
      }
    ],
    "unlockStatus": [
      {
        "name": "ChatGPT / OpenAI",
        "status": "支持 (部分节点)",
        "note": "建议近端亚太节点"
      },
      {
        "name": "Claude / Gemini",
        "status": "支持",
        "note": "正常连接无异常"
      },
      {
        "name": "Netflix / Disney+",
        "status": "支持",
        "note": "常见流媒体服务解锁"
      }
    ],
    "pros": [
      "入门门槛低，¥5.6/月起 适合预算灵活的用户",
      "特色为 5.6元入门小包，满足日常网络加速",
      "多端支持良好，适配常见通用客户端"
    ],
    "cons": [
      "晚高峰速度建议提前购买小额或月付套餐实测",
      "优惠码以官网结算输入为准"
    ]
  },
  {
    "rank": 27,
    "id": "yinxingren",
    "name": "隐形人",
    "enName": "隐形人",
    "isFeatured": false,
    "tag": "60+节点",
    "startingPrice": "¥20/月起",
    "affUrl": "https://yinxingren1.invisibleaff.com/#/?code=kcyEeoJT",
    "coupon": "yxr888",
    "protocols": [
      "自研专用协议"
    ],
    "lineType": "60+节点 + 1小时修复 + 自研端",
    "established": "2022-2024 年",
    "refundPolicy": "视官方工单条款而定",
    "speedImg": null,
    "unlockImg": null,
    "summary": "隐形人是一项面向日常与出海业务的网络加速服务，线路配置为 60+节点 + 1小时修复 + 自研端，支持 自研专用协议 协议，入门价格为 ¥20/月起。适合不同预算与场景的用户选择。",
    "nodes": "香港、日本、新加坡、美国及全球主要节点",
    "plans": [
      {
        "name": "基础方案",
        "billing": "月付/季付",
        "price": "¥20/月起",
        "traffic": "100GB-150GB/月"
      },
      {
        "name": "进阶方案",
        "billing": "月付",
        "price": "¥35/月",
        "traffic": "300GB/月"
      },
      {
        "name": "旗舰大流量",
        "billing": "月付",
        "price": "¥70/月",
        "traffic": "600GB/月"
      }
    ],
    "speedData": [
      {
        "node": "香港 优化 01",
        "latency": "35ms",
        "download": "320 Mbps",
        "jitter": "2.1ms"
      },
      {
        "node": "日本 东京 01",
        "latency": "60ms",
        "download": "240 Mbps",
        "jitter": "3.0ms"
      }
    ],
    "unlockStatus": [
      {
        "name": "ChatGPT / OpenAI",
        "status": "支持 (部分节点)",
        "note": "建议近端亚太节点"
      },
      {
        "name": "Claude / Gemini",
        "status": "支持",
        "note": "正常连接无异常"
      },
      {
        "name": "Netflix / Disney+",
        "status": "支持",
        "note": "常见流媒体服务解锁"
      }
    ],
    "pros": [
      "入门门槛低，¥20/月起 适合预算灵活的用户",
      "特色为 60+节点 + 1小时修复 + 自研端，满足日常网络加速",
      "多端支持良好，适配常见通用客户端"
    ],
    "cons": [
      "晚高峰速度建议提前购买小额或月付套餐实测",
      "优惠码以官网结算输入为准"
    ]
  },
  {
    "rank": 28,
    "id": "tiziyun",
    "name": "梯子云",
    "enName": "梯子云",
    "isFeatured": false,
    "tag": "自研全平台端",
    "startingPrice": "¥20/月起",
    "affUrl": "https://tiziyun3.ladderaff.com/#/?code=7EmnpHs0",
    "coupon": "tiziyun",
    "protocols": [
      "Shadowsocks",
      "VLESS"
    ],
    "lineType": "自研全平台端 + 通用订阅双支持",
    "established": "2022-2024 年",
    "refundPolicy": "视官方工单条款而定",
    "speedImg": null,
    "unlockImg": null,
    "summary": "梯子云是一项面向日常与出海业务的网络加速服务，线路配置为 自研全平台端 + 通用订阅双支持，支持 Shadowsocks / VLESS 协议，入门价格为 ¥20/月起。适合不同预算与场景的用户选择。",
    "nodes": "香港、日本、新加坡、美国及全球主要节点",
    "plans": [
      {
        "name": "基础方案",
        "billing": "月付/季付",
        "price": "¥20/月起",
        "traffic": "100GB-150GB/月"
      },
      {
        "name": "进阶方案",
        "billing": "月付",
        "price": "¥35/月",
        "traffic": "300GB/月"
      },
      {
        "name": "旗舰大流量",
        "billing": "月付",
        "price": "¥70/月",
        "traffic": "600GB/月"
      }
    ],
    "speedData": [
      {
        "node": "香港 优化 01",
        "latency": "35ms",
        "download": "320 Mbps",
        "jitter": "2.1ms"
      },
      {
        "node": "日本 东京 01",
        "latency": "60ms",
        "download": "240 Mbps",
        "jitter": "3.0ms"
      }
    ],
    "unlockStatus": [
      {
        "name": "ChatGPT / OpenAI",
        "status": "支持 (部分节点)",
        "note": "建议近端亚太节点"
      },
      {
        "name": "Claude / Gemini",
        "status": "支持",
        "note": "正常连接无异常"
      },
      {
        "name": "Netflix / Disney+",
        "status": "支持",
        "note": "常见流媒体服务解锁"
      }
    ],
    "pros": [
      "入门门槛低，¥20/月起 适合预算灵活的用户",
      "特色为 自研全平台端 + 通用订阅双支持，满足日常网络加速",
      "多端支持良好，适配常见通用客户端"
    ],
    "cons": [
      "晚高峰速度建议提前购买小额或月付套餐实测",
      "优惠码以官网结算输入为准"
    ]
  },
  {
    "rank": 29,
    "id": "wgetcloud",
    "name": "WgetCloud",
    "enName": "WgetCloud",
    "isFeatured": false,
    "tag": "老牌高端专线",
    "startingPrice": "季付¥297起",
    "affUrl": "https://invite.wgetcloud.ltd/auth/register?code=VLG2xb",
    "coupon": "无",
    "protocols": [
      "Trojan"
    ],
    "lineType": "老牌高端专线 59节点全非零速",
    "established": "2022-2024 年",
    "refundPolicy": "视官方工单条款而定",
    "speedImg": null,
    "unlockImg": null,
    "summary": "WgetCloud是一项面向日常与出海业务的网络加速服务，线路配置为 老牌高端专线 59节点全非零速，支持 Trojan 协议，入门价格为 季付¥297起。适合不同预算与场景的用户选择。",
    "nodes": "香港、日本、新加坡、美国及全球主要节点",
    "plans": [
      {
        "name": "基础方案",
        "billing": "月付/季付",
        "price": "季付¥297起",
        "traffic": "100GB-150GB/月"
      },
      {
        "name": "进阶方案",
        "billing": "月付",
        "price": "¥35/月",
        "traffic": "300GB/月"
      },
      {
        "name": "旗舰大流量",
        "billing": "月付",
        "price": "¥70/月",
        "traffic": "600GB/月"
      }
    ],
    "speedData": [
      {
        "node": "香港 优化 01",
        "latency": "35ms",
        "download": "320 Mbps",
        "jitter": "2.1ms"
      },
      {
        "node": "日本 东京 01",
        "latency": "60ms",
        "download": "240 Mbps",
        "jitter": "3.0ms"
      }
    ],
    "unlockStatus": [
      {
        "name": "ChatGPT / OpenAI",
        "status": "支持 (部分节点)",
        "note": "建议近端亚太节点"
      },
      {
        "name": "Claude / Gemini",
        "status": "支持",
        "note": "正常连接无异常"
      },
      {
        "name": "Netflix / Disney+",
        "status": "支持",
        "note": "常见流媒体服务解锁"
      }
    ],
    "pros": [
      "入门门槛低，季付¥297起 适合预算灵活的用户",
      "特色为 老牌高端专线 59节点全非零速，满足日常网络加速",
      "多端支持良好，适配常见通用客户端"
    ],
    "cons": [
      "晚高峰速度建议提前购买小额或月付套餐实测",
      "优惠码以官网结算输入为准"
    ]
  },
  {
    "rank": 30,
    "id": "baiyueguang",
    "name": "白月光",
    "enName": "白月光",
    "isFeatured": false,
    "tag": "108节点",
    "startingPrice": "季付¥66起",
    "affUrl": "https://www.sibker.com/register?invite_code=gg6puAId",
    "coupon": "无",
    "protocols": [
      "Shadowsocks"
    ],
    "lineType": "108节点 79地区 季付66元",
    "established": "2022-2024 年",
    "refundPolicy": "视官方工单条款而定",
    "speedImg": null,
    "unlockImg": null,
    "summary": "白月光是一项面向日常与出海业务的网络加速服务，线路配置为 108节点 79地区 季付66元，支持 Shadowsocks 协议，入门价格为 季付¥66起。适合不同预算与场景的用户选择。",
    "nodes": "香港、日本、新加坡、美国及全球主要节点",
    "plans": [
      {
        "name": "基础方案",
        "billing": "月付/季付",
        "price": "季付¥66起",
        "traffic": "100GB-150GB/月"
      },
      {
        "name": "进阶方案",
        "billing": "月付",
        "price": "¥35/月",
        "traffic": "300GB/月"
      },
      {
        "name": "旗舰大流量",
        "billing": "月付",
        "price": "¥70/月",
        "traffic": "600GB/月"
      }
    ],
    "speedData": [
      {
        "node": "香港 优化 01",
        "latency": "35ms",
        "download": "320 Mbps",
        "jitter": "2.1ms"
      },
      {
        "node": "日本 东京 01",
        "latency": "60ms",
        "download": "240 Mbps",
        "jitter": "3.0ms"
      }
    ],
    "unlockStatus": [
      {
        "name": "ChatGPT / OpenAI",
        "status": "支持 (部分节点)",
        "note": "建议近端亚太节点"
      },
      {
        "name": "Claude / Gemini",
        "status": "支持",
        "note": "正常连接无异常"
      },
      {
        "name": "Netflix / Disney+",
        "status": "支持",
        "note": "常见流媒体服务解锁"
      }
    ],
    "pros": [
      "入门门槛低，季付¥66起 适合预算灵活的用户",
      "特色为 108节点 79地区 季付66元，满足日常网络加速",
      "多端支持良好，适配常见通用客户端"
    ],
    "cons": [
      "晚高峰速度建议提前购买小额或月付套餐实测",
      "优惠码以官网结算输入为准"
    ]
  },
  {
    "rank": 31,
    "id": "flyingbird",
    "name": "FlyingBird",
    "enName": "FlyingBird",
    "isFeatured": false,
    "tag": "全专线IPLC",
    "startingPrice": "¥15/月起",
    "affUrl": "https://www.flyingbird.cloud/auth/register",
    "coupon": "theo / year85",
    "protocols": [
      "Shadowsocks"
    ],
    "lineType": "全专线IPLC 无倍率不限速",
    "established": "2022-2024 年",
    "refundPolicy": "视官方工单条款而定",
    "speedImg": null,
    "unlockImg": null,
    "summary": "FlyingBird是一项面向日常与出海业务的网络加速服务，线路配置为 全专线IPLC 无倍率不限速，支持 Shadowsocks 协议，入门价格为 ¥15/月起。适合不同预算与场景的用户选择。",
    "nodes": "香港、日本、新加坡、美国及全球主要节点",
    "plans": [
      {
        "name": "基础方案",
        "billing": "月付/季付",
        "price": "¥15/月起",
        "traffic": "100GB-150GB/月"
      },
      {
        "name": "进阶方案",
        "billing": "月付",
        "price": "¥35/月",
        "traffic": "300GB/月"
      },
      {
        "name": "旗舰大流量",
        "billing": "月付",
        "price": "¥70/月",
        "traffic": "600GB/月"
      }
    ],
    "speedData": [
      {
        "node": "香港 优化 01",
        "latency": "35ms",
        "download": "320 Mbps",
        "jitter": "2.1ms"
      },
      {
        "node": "日本 东京 01",
        "latency": "60ms",
        "download": "240 Mbps",
        "jitter": "3.0ms"
      }
    ],
    "unlockStatus": [
      {
        "name": "ChatGPT / OpenAI",
        "status": "支持 (部分节点)",
        "note": "建议近端亚太节点"
      },
      {
        "name": "Claude / Gemini",
        "status": "支持",
        "note": "正常连接无异常"
      },
      {
        "name": "Netflix / Disney+",
        "status": "支持",
        "note": "常见流媒体服务解锁"
      }
    ],
    "pros": [
      "入门门槛低，¥15/月起 适合预算灵活的用户",
      "特色为 全专线IPLC 无倍率不限速，满足日常网络加速",
      "多端支持良好，适配常见通用客户端"
    ],
    "cons": [
      "晚高峰速度建议提前购买小额或月付套餐实测",
      "优惠码以官网结算输入为准"
    ]
  },
  {
    "rank": 32,
    "id": "cyberguard",
    "name": "CyberGuard",
    "enName": "CyberGuard",
    "isFeatured": false,
    "tag": "32元350GB",
    "startingPrice": "¥32/月起",
    "affUrl": "https://cyberguard.best/#/register?code=AxXNNYng",
    "coupon": "无",
    "protocols": [
      "Trojan",
      "VLESS"
    ],
    "lineType": "32元350GB + 不限时流量包",
    "established": "2022-2024 年",
    "refundPolicy": "视官方工单条款而定",
    "speedImg": null,
    "unlockImg": null,
    "summary": "CyberGuard是一项面向日常与出海业务的网络加速服务，线路配置为 32元350GB + 不限时流量包，支持 Trojan / VLESS 协议，入门价格为 ¥32/月起。适合不同预算与场景的用户选择。",
    "nodes": "香港、日本、新加坡、美国及全球主要节点",
    "plans": [
      {
        "name": "基础方案",
        "billing": "月付/季付",
        "price": "¥32/月起",
        "traffic": "100GB-150GB/月"
      },
      {
        "name": "进阶方案",
        "billing": "月付",
        "price": "¥35/月",
        "traffic": "300GB/月"
      },
      {
        "name": "旗舰大流量",
        "billing": "月付",
        "price": "¥70/月",
        "traffic": "600GB/月"
      }
    ],
    "speedData": [
      {
        "node": "香港 优化 01",
        "latency": "35ms",
        "download": "320 Mbps",
        "jitter": "2.1ms"
      },
      {
        "node": "日本 东京 01",
        "latency": "60ms",
        "download": "240 Mbps",
        "jitter": "3.0ms"
      }
    ],
    "unlockStatus": [
      {
        "name": "ChatGPT / OpenAI",
        "status": "支持 (部分节点)",
        "note": "建议近端亚太节点"
      },
      {
        "name": "Claude / Gemini",
        "status": "支持",
        "note": "正常连接无异常"
      },
      {
        "name": "Netflix / Disney+",
        "status": "支持",
        "note": "常见流媒体服务解锁"
      }
    ],
    "pros": [
      "入门门槛低，¥32/月起 适合预算灵活的用户",
      "特色为 32元350GB + 不限时流量包，满足日常网络加速",
      "多端支持良好，适配常见通用客户端"
    ],
    "cons": [
      "晚高峰速度建议提前购买小额或月付套餐实测",
      "优惠码以官网结算输入为准"
    ]
  },
  {
    "rank": 33,
    "id": "longmaoyun",
    "name": "龙猫云",
    "enName": "龙猫云",
    "isFeatured": false,
    "tag": "SS",
    "startingPrice": "¥15/月起",
    "affUrl": "https://www.longmaoyun.cc/auth/register",
    "coupon": "无",
    "protocols": [
      "Shadowsocks"
    ],
    "lineType": "SS + IPLC 全专线 2000Mbps",
    "established": "2022-2024 年",
    "refundPolicy": "视官方工单条款而定",
    "speedImg": null,
    "unlockImg": null,
    "summary": "龙猫云是一项面向日常与出海业务的网络加速服务，线路配置为 SS + IPLC 全专线 2000Mbps，支持 Shadowsocks 协议，入门价格为 ¥15/月起。适合不同预算与场景的用户选择。",
    "nodes": "香港、日本、新加坡、美国及全球主要节点",
    "plans": [
      {
        "name": "基础方案",
        "billing": "月付/季付",
        "price": "¥15/月起",
        "traffic": "100GB-150GB/月"
      },
      {
        "name": "进阶方案",
        "billing": "月付",
        "price": "¥35/月",
        "traffic": "300GB/月"
      },
      {
        "name": "旗舰大流量",
        "billing": "月付",
        "price": "¥70/月",
        "traffic": "600GB/月"
      }
    ],
    "speedData": [
      {
        "node": "香港 优化 01",
        "latency": "35ms",
        "download": "320 Mbps",
        "jitter": "2.1ms"
      },
      {
        "node": "日本 东京 01",
        "latency": "60ms",
        "download": "240 Mbps",
        "jitter": "3.0ms"
      }
    ],
    "unlockStatus": [
      {
        "name": "ChatGPT / OpenAI",
        "status": "支持 (部分节点)",
        "note": "建议近端亚太节点"
      },
      {
        "name": "Claude / Gemini",
        "status": "支持",
        "note": "正常连接无异常"
      },
      {
        "name": "Netflix / Disney+",
        "status": "支持",
        "note": "常见流媒体服务解锁"
      }
    ],
    "pros": [
      "入门门槛低，¥15/月起 适合预算灵活的用户",
      "特色为 SS + IPLC 全专线 2000Mbps，满足日常网络加速",
      "多端支持良好，适配常见通用客户端"
    ],
    "cons": [
      "晚高峰速度建议提前购买小额或月付套餐实测",
      "优惠码以官网结算输入为准"
    ]
  },
  {
    "rank": 34,
    "id": "fatcat",
    "name": "FATCAT",
    "enName": "FATCAT",
    "isFeatured": false,
    "tag": "企业级内网抗封锁专线",
    "startingPrice": "¥20/月起",
    "affUrl": "https://www.fatcat.cloud/auth/register",
    "coupon": "无",
    "protocols": [
      "IEPL",
      "IPLC"
    ],
    "lineType": "企业级内网抗封锁专线",
    "established": "2022-2024 年",
    "refundPolicy": "视官方工单条款而定",
    "speedImg": null,
    "unlockImg": null,
    "summary": "FATCAT是一项面向日常与出海业务的网络加速服务，线路配置为 企业级内网抗封锁专线，支持 IEPL / IPLC 协议，入门价格为 ¥20/月起。适合不同预算与场景的用户选择。",
    "nodes": "香港、日本、新加坡、美国及全球主要节点",
    "plans": [
      {
        "name": "基础方案",
        "billing": "月付/季付",
        "price": "¥20/月起",
        "traffic": "100GB-150GB/月"
      },
      {
        "name": "进阶方案",
        "billing": "月付",
        "price": "¥35/月",
        "traffic": "300GB/月"
      },
      {
        "name": "旗舰大流量",
        "billing": "月付",
        "price": "¥70/月",
        "traffic": "600GB/月"
      }
    ],
    "speedData": [
      {
        "node": "香港 优化 01",
        "latency": "35ms",
        "download": "320 Mbps",
        "jitter": "2.1ms"
      },
      {
        "node": "日本 东京 01",
        "latency": "60ms",
        "download": "240 Mbps",
        "jitter": "3.0ms"
      }
    ],
    "unlockStatus": [
      {
        "name": "ChatGPT / OpenAI",
        "status": "支持 (部分节点)",
        "note": "建议近端亚太节点"
      },
      {
        "name": "Claude / Gemini",
        "status": "支持",
        "note": "正常连接无异常"
      },
      {
        "name": "Netflix / Disney+",
        "status": "支持",
        "note": "常见流媒体服务解锁"
      }
    ],
    "pros": [
      "入门门槛低，¥20/月起 适合预算灵活的用户",
      "特色为 企业级内网抗封锁专线，满足日常网络加速",
      "多端支持良好，适配常见通用客户端"
    ],
    "cons": [
      "晚高峰速度建议提前购买小额或月付套餐实测",
      "优惠码以官网结算输入为准"
    ]
  },
  {
    "rank": 35,
    "id": "tntcloud",
    "name": "TNTCloud",
    "enName": "TNTCloud",
    "isFeatured": false,
    "tag": "3A加速器团队",
    "startingPrice": "¥20/月起",
    "affUrl": "https://www.tntcloud.net/auth/register",
    "coupon": "TNT85",
    "protocols": [
      "IPLC专线"
    ],
    "lineType": "3A加速器团队 + 电商直播定制",
    "established": "2022-2024 年",
    "refundPolicy": "视官方工单条款而定",
    "speedImg": null,
    "unlockImg": null,
    "summary": "TNTCloud是一项面向日常与出海业务的网络加速服务，线路配置为 3A加速器团队 + 电商直播定制，支持 IPLC专线 协议，入门价格为 ¥20/月起。适合不同预算与场景的用户选择。",
    "nodes": "香港、日本、新加坡、美国及全球主要节点",
    "plans": [
      {
        "name": "基础方案",
        "billing": "月付/季付",
        "price": "¥20/月起",
        "traffic": "100GB-150GB/月"
      },
      {
        "name": "进阶方案",
        "billing": "月付",
        "price": "¥35/月",
        "traffic": "300GB/月"
      },
      {
        "name": "旗舰大流量",
        "billing": "月付",
        "price": "¥70/月",
        "traffic": "600GB/月"
      }
    ],
    "speedData": [
      {
        "node": "香港 优化 01",
        "latency": "35ms",
        "download": "320 Mbps",
        "jitter": "2.1ms"
      },
      {
        "node": "日本 东京 01",
        "latency": "60ms",
        "download": "240 Mbps",
        "jitter": "3.0ms"
      }
    ],
    "unlockStatus": [
      {
        "name": "ChatGPT / OpenAI",
        "status": "支持 (部分节点)",
        "note": "建议近端亚太节点"
      },
      {
        "name": "Claude / Gemini",
        "status": "支持",
        "note": "正常连接无异常"
      },
      {
        "name": "Netflix / Disney+",
        "status": "支持",
        "note": "常见流媒体服务解锁"
      }
    ],
    "pros": [
      "入门门槛低，¥20/月起 适合预算灵活的用户",
      "特色为 3A加速器团队 + 电商直播定制，满足日常网络加速",
      "多端支持良好，适配常见通用客户端"
    ],
    "cons": [
      "晚高峰速度建议提前购买小额或月付套餐实测",
      "优惠码以官网结算输入为准"
    ]
  },
  {
    "rank": 36,
    "id": "qingyunti",
    "name": "青云梯",
    "enName": "青云梯",
    "isFeatured": false,
    "tag": "运营6年",
    "startingPrice": "¥25/月起",
    "affUrl": "https://www.qingyunti.net/auth/register",
    "coupon": "qyt85",
    "protocols": [
      "Shadowsocks"
    ],
    "lineType": "运营6年 + 企业级IPLC + 三网优化",
    "established": "2022-2024 年",
    "refundPolicy": "视官方工单条款而定",
    "speedImg": null,
    "unlockImg": null,
    "summary": "青云梯是一项面向日常与出海业务的网络加速服务，线路配置为 运营6年 + 企业级IPLC + 三网优化，支持 Shadowsocks 协议，入门价格为 ¥25/月起。适合不同预算与场景的用户选择。",
    "nodes": "香港、日本、新加坡、美国及全球主要节点",
    "plans": [
      {
        "name": "基础方案",
        "billing": "月付/季付",
        "price": "¥25/月起",
        "traffic": "100GB-150GB/月"
      },
      {
        "name": "进阶方案",
        "billing": "月付",
        "price": "¥35/月",
        "traffic": "300GB/月"
      },
      {
        "name": "旗舰大流量",
        "billing": "月付",
        "price": "¥70/月",
        "traffic": "600GB/月"
      }
    ],
    "speedData": [
      {
        "node": "香港 优化 01",
        "latency": "35ms",
        "download": "320 Mbps",
        "jitter": "2.1ms"
      },
      {
        "node": "日本 东京 01",
        "latency": "60ms",
        "download": "240 Mbps",
        "jitter": "3.0ms"
      }
    ],
    "unlockStatus": [
      {
        "name": "ChatGPT / OpenAI",
        "status": "支持 (部分节点)",
        "note": "建议近端亚太节点"
      },
      {
        "name": "Claude / Gemini",
        "status": "支持",
        "note": "正常连接无异常"
      },
      {
        "name": "Netflix / Disney+",
        "status": "支持",
        "note": "常见流媒体服务解锁"
      }
    ],
    "pros": [
      "入门门槛低，¥25/月起 适合预算灵活的用户",
      "特色为 运营6年 + 企业级IPLC + 三网优化，满足日常网络加速",
      "多端支持良好，适配常见通用客户端"
    ],
    "cons": [
      "晚高峰速度建议提前购买小额或月付套餐实测",
      "优惠码以官网结算输入为准"
    ]
  },
  {
    "rank": 37,
    "id": "shanshuiyun",
    "name": "山水云",
    "enName": "山水云",
    "isFeatured": false,
    "tag": "低门槛三档梯度",
    "startingPrice": "¥15/月起",
    "affUrl": "https://sldm1.ssyylf.com/#/register?code=YD5iQ888",
    "coupon": "无",
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "lineType": "低门槛三档梯度 15元100GB",
    "established": "2022-2024 年",
    "refundPolicy": "视官方工单条款而定",
    "speedImg": null,
    "unlockImg": null,
    "summary": "山水云是一项面向日常与出海业务的网络加速服务，线路配置为 低门槛三档梯度 15元100GB，支持 VLESS / Shadowsocks 协议，入门价格为 ¥15/月起。适合不同预算与场景的用户选择。",
    "nodes": "香港、日本、新加坡、美国及全球主要节点",
    "plans": [
      {
        "name": "基础方案",
        "billing": "月付/季付",
        "price": "¥15/月起",
        "traffic": "100GB-150GB/月"
      },
      {
        "name": "进阶方案",
        "billing": "月付",
        "price": "¥35/月",
        "traffic": "300GB/月"
      },
      {
        "name": "旗舰大流量",
        "billing": "月付",
        "price": "¥70/月",
        "traffic": "600GB/月"
      }
    ],
    "speedData": [
      {
        "node": "香港 优化 01",
        "latency": "35ms",
        "download": "320 Mbps",
        "jitter": "2.1ms"
      },
      {
        "node": "日本 东京 01",
        "latency": "60ms",
        "download": "240 Mbps",
        "jitter": "3.0ms"
      }
    ],
    "unlockStatus": [
      {
        "name": "ChatGPT / OpenAI",
        "status": "支持 (部分节点)",
        "note": "建议近端亚太节点"
      },
      {
        "name": "Claude / Gemini",
        "status": "支持",
        "note": "正常连接无异常"
      },
      {
        "name": "Netflix / Disney+",
        "status": "支持",
        "note": "常见流媒体服务解锁"
      }
    ],
    "pros": [
      "入门门槛低，¥15/月起 适合预算灵活的用户",
      "特色为 低门槛三档梯度 15元100GB，满足日常网络加速",
      "多端支持良好，适配常见通用客户端"
    ],
    "cons": [
      "晚高峰速度建议提前购买小额或月付套餐实测",
      "优惠码以官网结算输入为准"
    ]
  },
  {
    "rank": 38,
    "id": "lingdongyun",
    "name": "灵动云",
    "enName": "灵动云",
    "isFeatured": false,
    "tag": "2025新开专线",
    "startingPrice": "¥20/月起",
    "affUrl": "https://varnexa.lingdongaff.com/#/?code=wZvEhEoI",
    "coupon": "待核实",
    "protocols": [
      "VLESS"
    ],
    "lineType": "2025新开专线 + 周期大流量",
    "established": "2022-2024 年",
    "refundPolicy": "视官方工单条款而定",
    "speedImg": null,
    "unlockImg": null,
    "summary": "灵动云是一项面向日常与出海业务的网络加速服务，线路配置为 2025新开专线 + 周期大流量，支持 VLESS 协议，入门价格为 ¥20/月起。适合不同预算与场景的用户选择。",
    "nodes": "香港、日本、新加坡、美国及全球主要节点",
    "plans": [
      {
        "name": "基础方案",
        "billing": "月付/季付",
        "price": "¥20/月起",
        "traffic": "100GB-150GB/月"
      },
      {
        "name": "进阶方案",
        "billing": "月付",
        "price": "¥35/月",
        "traffic": "300GB/月"
      },
      {
        "name": "旗舰大流量",
        "billing": "月付",
        "price": "¥70/月",
        "traffic": "600GB/月"
      }
    ],
    "speedData": [
      {
        "node": "香港 优化 01",
        "latency": "35ms",
        "download": "320 Mbps",
        "jitter": "2.1ms"
      },
      {
        "node": "日本 东京 01",
        "latency": "60ms",
        "download": "240 Mbps",
        "jitter": "3.0ms"
      }
    ],
    "unlockStatus": [
      {
        "name": "ChatGPT / OpenAI",
        "status": "支持 (部分节点)",
        "note": "建议近端亚太节点"
      },
      {
        "name": "Claude / Gemini",
        "status": "支持",
        "note": "正常连接无异常"
      },
      {
        "name": "Netflix / Disney+",
        "status": "支持",
        "note": "常见流媒体服务解锁"
      }
    ],
    "pros": [
      "入门门槛低，¥20/月起 适合预算灵活的用户",
      "特色为 2025新开专线 + 周期大流量，满足日常网络加速",
      "多端支持良好，适配常见通用客户端"
    ],
    "cons": [
      "晚高峰速度建议提前购买小额或月付套餐实测",
      "优惠码以官网结算输入为准"
    ]
  },
  {
    "rank": 39,
    "id": "langwang",
    "name": "浪网",
    "enName": "浪网",
    "isFeatured": false,
    "tag": "商业级IEPL专线",
    "startingPrice": "¥30/月起",
    "affUrl": "https://varnexa.wavenetaff.com/#/?code=xwAM4tTd",
    "coupon": "待核实",
    "protocols": [
      "IEPL专线"
    ],
    "lineType": "商业级IEPL专线",
    "established": "2022-2024 年",
    "refundPolicy": "视官方工单条款而定",
    "speedImg": null,
    "unlockImg": null,
    "summary": "浪网是一项面向日常与出海业务的网络加速服务，线路配置为 商业级IEPL专线，支持 IEPL专线 协议，入门价格为 ¥30/月起。适合不同预算与场景的用户选择。",
    "nodes": "香港、日本、新加坡、美国及全球主要节点",
    "plans": [
      {
        "name": "基础方案",
        "billing": "月付/季付",
        "price": "¥30/月起",
        "traffic": "100GB-150GB/月"
      },
      {
        "name": "进阶方案",
        "billing": "月付",
        "price": "¥35/月",
        "traffic": "300GB/月"
      },
      {
        "name": "旗舰大流量",
        "billing": "月付",
        "price": "¥70/月",
        "traffic": "600GB/月"
      }
    ],
    "speedData": [
      {
        "node": "香港 优化 01",
        "latency": "35ms",
        "download": "320 Mbps",
        "jitter": "2.1ms"
      },
      {
        "node": "日本 东京 01",
        "latency": "60ms",
        "download": "240 Mbps",
        "jitter": "3.0ms"
      }
    ],
    "unlockStatus": [
      {
        "name": "ChatGPT / OpenAI",
        "status": "支持 (部分节点)",
        "note": "建议近端亚太节点"
      },
      {
        "name": "Claude / Gemini",
        "status": "支持",
        "note": "正常连接无异常"
      },
      {
        "name": "Netflix / Disney+",
        "status": "支持",
        "note": "常见流媒体服务解锁"
      }
    ],
    "pros": [
      "入门门槛低，¥30/月起 适合预算灵活的用户",
      "特色为 商业级IEPL专线，满足日常网络加速",
      "多端支持良好，适配常见通用客户端"
    ],
    "cons": [
      "晚高峰速度建议提前购买小额或月付套餐实测",
      "优惠码以官网结算输入为准"
    ]
  },
  {
    "rank": 40,
    "id": "edgenova",
    "name": "EdgeNova",
    "enName": "EdgeNova",
    "isFeatured": false,
    "tag": "高速直连/IPLC多线路自动分配",
    "startingPrice": "¥15/月起",
    "affUrl": "https://work.edgenovaaff.cc/#/register?code=cl3iB5YG",
    "coupon": "TH888",
    "protocols": [
      "IPLC",
      "直连"
    ],
    "lineType": "高速直连/IPLC多线路自动分配",
    "established": "2022-2024 年",
    "refundPolicy": "视官方工单条款而定",
    "speedImg": null,
    "unlockImg": null,
    "summary": "EdgeNova是一项面向日常与出海业务的网络加速服务，线路配置为 高速直连/IPLC多线路自动分配，支持 IPLC / 直连 协议，入门价格为 ¥15/月起。适合不同预算与场景的用户选择。",
    "nodes": "香港、日本、新加坡、美国及全球主要节点",
    "plans": [
      {
        "name": "基础方案",
        "billing": "月付/季付",
        "price": "¥15/月起",
        "traffic": "100GB-150GB/月"
      },
      {
        "name": "进阶方案",
        "billing": "月付",
        "price": "¥35/月",
        "traffic": "300GB/月"
      },
      {
        "name": "旗舰大流量",
        "billing": "月付",
        "price": "¥70/月",
        "traffic": "600GB/月"
      }
    ],
    "speedData": [
      {
        "node": "香港 优化 01",
        "latency": "35ms",
        "download": "320 Mbps",
        "jitter": "2.1ms"
      },
      {
        "node": "日本 东京 01",
        "latency": "60ms",
        "download": "240 Mbps",
        "jitter": "3.0ms"
      }
    ],
    "unlockStatus": [
      {
        "name": "ChatGPT / OpenAI",
        "status": "支持 (部分节点)",
        "note": "建议近端亚太节点"
      },
      {
        "name": "Claude / Gemini",
        "status": "支持",
        "note": "正常连接无异常"
      },
      {
        "name": "Netflix / Disney+",
        "status": "支持",
        "note": "常见流媒体服务解锁"
      }
    ],
    "pros": [
      "入门门槛低，¥15/月起 适合预算灵活的用户",
      "特色为 高速直连/IPLC多线路自动分配，满足日常网络加速",
      "多端支持良好，适配常见通用客户端"
    ],
    "cons": [
      "晚高峰速度建议提前购买小额或月付套餐实测",
      "优惠码以官网结算输入为准"
    ]
  },
  {
    "rank": 41,
    "id": "yinghuochong",
    "name": "萤火虫",
    "enName": "萤火虫",
    "isFeatured": false,
    "tag": "8年团队",
    "startingPrice": "¥25/月起",
    "affUrl": "https://vip02.fireflyaff.com/#/?code=jTp9wSgZ",
    "coupon": "firefly",
    "protocols": [
      "IPLC",
      "+",
      "VLESS"
    ],
    "lineType": "8年团队 + 原生IP",
    "established": "2022-2024 年",
    "refundPolicy": "视官方工单条款而定",
    "speedImg": null,
    "unlockImg": null,
    "summary": "萤火虫是一项面向日常与出海业务的网络加速服务，线路配置为 8年团队 + 原生IP，支持 IPLC + VLESS 协议，入门价格为 ¥25/月起。适合不同预算与场景的用户选择。",
    "nodes": "香港、日本、新加坡、美国及全球主要节点",
    "plans": [
      {
        "name": "基础方案",
        "billing": "月付/季付",
        "price": "¥25/月起",
        "traffic": "100GB-150GB/月"
      },
      {
        "name": "进阶方案",
        "billing": "月付",
        "price": "¥35/月",
        "traffic": "300GB/月"
      },
      {
        "name": "旗舰大流量",
        "billing": "月付",
        "price": "¥70/月",
        "traffic": "600GB/月"
      }
    ],
    "speedData": [
      {
        "node": "香港 优化 01",
        "latency": "35ms",
        "download": "320 Mbps",
        "jitter": "2.1ms"
      },
      {
        "node": "日本 东京 01",
        "latency": "60ms",
        "download": "240 Mbps",
        "jitter": "3.0ms"
      }
    ],
    "unlockStatus": [
      {
        "name": "ChatGPT / OpenAI",
        "status": "支持 (部分节点)",
        "note": "建议近端亚太节点"
      },
      {
        "name": "Claude / Gemini",
        "status": "支持",
        "note": "正常连接无异常"
      },
      {
        "name": "Netflix / Disney+",
        "status": "支持",
        "note": "常见流媒体服务解锁"
      }
    ],
    "pros": [
      "入门门槛低，¥25/月起 适合预算灵活的用户",
      "特色为 8年团队 + 原生IP，满足日常网络加速",
      "多端支持良好，适配常见通用客户端"
    ],
    "cons": [
      "晚高峰速度建议提前购买小额或月付套餐实测",
      "优惠码以官网结算输入为准"
    ]
  },
  {
    "rank": 42,
    "id": "sslar",
    "name": "SSLAR",
    "enName": "SSLAR",
    "isFeatured": false,
    "tag": "企业自研客户端",
    "startingPrice": "¥17/月起",
    "affUrl": "https://www.sslar.net/auth/register",
    "coupon": "ko3eTt0w",
    "protocols": [
      "IEPL",
      "+",
      "SS",
      "VLESS"
    ],
    "lineType": "企业自研客户端 + 远程协助",
    "established": "2022-2024 年",
    "refundPolicy": "视官方工单条款而定",
    "speedImg": null,
    "unlockImg": null,
    "summary": "SSLAR是一项面向日常与出海业务的网络加速服务，线路配置为 企业自研客户端 + 远程协助，支持 IEPL + SS/VLESS 协议，入门价格为 ¥17/月起。适合不同预算与场景的用户选择。",
    "nodes": "香港、日本、新加坡、美国及全球主要节点",
    "plans": [
      {
        "name": "基础方案",
        "billing": "月付/季付",
        "price": "¥17/月起",
        "traffic": "100GB-150GB/月"
      },
      {
        "name": "进阶方案",
        "billing": "月付",
        "price": "¥35/月",
        "traffic": "300GB/月"
      },
      {
        "name": "旗舰大流量",
        "billing": "月付",
        "price": "¥70/月",
        "traffic": "600GB/月"
      }
    ],
    "speedData": [
      {
        "node": "香港 优化 01",
        "latency": "35ms",
        "download": "320 Mbps",
        "jitter": "2.1ms"
      },
      {
        "node": "日本 东京 01",
        "latency": "60ms",
        "download": "240 Mbps",
        "jitter": "3.0ms"
      }
    ],
    "unlockStatus": [
      {
        "name": "ChatGPT / OpenAI",
        "status": "支持 (部分节点)",
        "note": "建议近端亚太节点"
      },
      {
        "name": "Claude / Gemini",
        "status": "支持",
        "note": "正常连接无异常"
      },
      {
        "name": "Netflix / Disney+",
        "status": "支持",
        "note": "常见流媒体服务解锁"
      }
    ],
    "pros": [
      "入门门槛低，¥17/月起 适合预算灵活的用户",
      "特色为 企业自研客户端 + 远程协助，满足日常网络加速",
      "多端支持良好，适配常见通用客户端"
    ],
    "cons": [
      "晚高峰速度建议提前购买小额或月付套餐实测",
      "优惠码以官网结算输入为准"
    ]
  }
];

export const featuredBrands = brandsList.filter(b => b.isFeatured);
