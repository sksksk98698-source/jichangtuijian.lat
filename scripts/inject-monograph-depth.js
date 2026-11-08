import fs from 'fs';

// Let's create an expansion script that adds the two new in-depth modules:
// Module: 物理专线与网络抓包逆向实操手册 (How to verify Real vs Fake Lines via Wireshark / BestTrace / Traceroute)
// Module: 跨国带宽成本核算模型与超售比精算 (Bandwidth economics & Over-subscription formula)
// Module: 规则分流与高级防 DNS 泄漏实战手册 (FakeIP vs Redir-Host, Anti-DNS Leak guide)

const additionalSection1 = `
          <!-- 模块 7.5：物理专线与公网中转网络逆向实操指南 -->
          <section id="reverse-engineering-guide" class="about-section">
            <div class="section-badge">网络逆向与抓包验证</div>
            <h2 class="section-title">专线真伪深度核验手册：使用 Traceroute 与 Wireshark 抓包实操</h2>
            <p>
              商家宣传的“IEPL专线”、“独享内网通道”是否属实，完全可以通过标准的网络诊断工具进行端到端逆向验证。许多伪专线实际上使用的是普通国内公网 VPS 搭建的隧道（例如普通的 Gost、WireGuard 或 FRP 转发），一旦遇到骨干网震荡立刻卡死。以下是评测工程师验证专线真伪的标准三步操作：
            </p>

            <h3 class="subsection-title">1. BestTrace / Traceroute 路由跳数精准溯源</h3>
            <p>
              在客户端连接节点前，通过测试工具追踪节点入口 IP 到落地 IP 的完整物理路径：
            </p>
            <div class="code-block-mock">
              <pre><code># 在 Linux/macOS 终端执行 ICMP/TCP 路由追踪
traceroute -T -p 443 [节点入口IP]

# 在 Windows 环境使用 BestTrace 工具或命令行：
tracert -d [节点入口IP]</code></pre>
            </div>
            <p>
              <strong>真专线的路由跳数特征</strong>：
              <br>&bull; <strong>跳数极少（&le; 5 跳）</strong>：本地宽带 &rarr; 本地城域网汇聚 &rarr; 省级核心路由 &rarr; 机场专线入口内网交换机 &rarr; 境外落地局域网。
              <br>&bull; <strong>中途绝无公网 163（202.97.*）或国际公网交换节点跳数</strong>：如果路由表中出现了 <code>202.97.*.*</code> 或 <code>59.43.*.*</code> 并且伴随 80ms 以上的跨国延迟跳跃，表明该节点在跨国段直接走了公网，属于<strong>伪专线</strong>。
            </p>

            <h3 class="subsection-title">2. 往返时延（RTT）物理光速法则硬核验证</h3>
            <p>
              光在光纤玻璃介质中的传播速度约为每毫秒 200 公里（折射率约 1.5）。加上中间网络交换机、光放大器（EDFA）与路由处理延迟，各跨国区间的<strong>理论最低物理延迟极限</strong>是固定不可逾越的：
            </p>
            <div class="table-container">
              <table class="monograph-table">
                <thead>
                  <tr>
                    <th>专线测试物理区间</th>
                    <th>光纤直线物理距离</th>
                    <th>理论物理单向延迟</th>
                    <th>真物理专线正常往返延迟 (RTT)</th>
                    <th>公网中转/假专线异常延迟</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>深圳 / 广州 &rarr; 香港</strong></td>
                    <td>约 30 &sim; 130 km</td>
                    <td>&lt; 1 ms</td>
                    <td><strong>3 ms &sim; 6 ms</strong>（极其稳定）</td>
                    <td>&gt; 25 ms（说明在公网多次绕路或拥堵）</td>
                  </tr>
                  <tr>
                    <td><strong>上海 &rarr; 日本东京</strong></td>
                    <td>约 1800 km（中日直达海缆）</td>
                    <td>约 9 ms</td>
                    <td><strong>25 ms &sim; 30 ms</strong></td>
                    <td>&gt; 65 ms（走公网甚至先绕道美西或北京）</td>
                  </tr>
                  <tr>
                    <td><strong>上海 &rarr; 美国西海岸 (洛杉矶)</strong></td>
                    <td>约 10400 km（跨太平洋直达海缆 NCP/TPE）</td>
                    <td>约 52 ms</td>
                    <td><strong>125 ms &sim; 140 ms</strong></td>
                    <td>&gt; 220 ms（普通公网晚高峰严重排队抖动）</td>
                  </tr>
                  <tr>
                    <td><strong>广州 &rarr; 新加坡</strong></td>
                    <td>约 2600 km（亚太直达海缆 APG/SJC）</td>
                    <td>约 13 ms</td>
                    <td><strong>33 ms &sim; 38 ms</strong></td>
                    <td>&gt; 80 ms（经过多次公网转发绕行）</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 class="subsection-title">3. Wireshark 抓包分析 TCP 拥塞控制与窗口缩放</h3>
            <p>
              通过 Wireshark 抓取代理端口（如 7890/7897）与境外目标服务器的连接报文：
              <br>&bull; <strong>真专线表现</strong>：TCP Window Size（接收窗口）平滑上升并保持在高位，<code>TCP Dup ACK</code>（重复确认包）与 <code>TCP Fast Retransmission</code>（快速重传）出现频率低于 0.1%；
              <br>&bull; <strong>恶劣公网中转表现</strong>：晚高峰频繁出现大量红黑相间的 <code>TCP Out-of-Order</code>（乱序包）和 <code>TCP Retransmission</code>（重传包），拥塞窗口剧烈锯齿状波动，导致用户看视频反复转圈。
            </p>
          </section>
`;

const additionalSection2 = `
          <!-- 模块 7.6：跨境带宽成本精算模型与超售比大起底 -->
          <section id="bandwidth-economics" class="about-section">
            <div class="section-badge">成本核算与行业内幕</div>
            <h2 class="section-title">跨境带宽成本模型揭秘：为什么低于 10 元/月的专线大概率跑路？</h2>
            <p>
              许多消费者经常在各种论坛看到“9.9包年、19.9永久千兆专线”的诱人广告，结果使用不到两个月便全线失联。了解机场上游机房与专线带宽的真实采购成本，能够让你在选购时拥有火眼金睛，彻底避开跑路诈骗盘。
            </p>

            <h3 class="subsection-title">1. 2026 年主流跨境网络资源真实采购成本表</h3>
            <div class="table-container">
              <table class="monograph-table">
                <thead>
                  <tr>
                    <th>网络资源类型</th>
                    <th>上游提供商代表</th>
                    <th>每 Mbps 真实月采购成本</th>
                    <th>1 Gbps (千兆) 专线每月物理支出</th>
                    <th>服务商跑路风险系数</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>合规企业级 IPLC/IEPL 物理专线</strong></td>
                    <td>三大运营商政企部、阿里云 CEN、华为云 CC</td>
                    <td><strong>&yen;120 &sim; &yen;220 / Mbps / 月</strong></td>
                    <td><strong>&yen;120,000 &sim; &yen;220,000 / 月</strong></td>
                    <td>极低（需正规资质与大额押金）</td>
                  </tr>
                  <tr>
                    <td><strong>国内优质 BGP 入口中转服务器</strong></td>
                    <td>江苏/广东/上海多线高防机房</td>
                    <td><strong>&yen;15 &sim; &yen;35 / Mbps / 月</strong></td>
                    <td><strong>&yen;15,000 &sim; &yen;35,000 / 月</strong></td>
                    <td>低（技术成熟，机房抗DDOS）</td>
                  </tr>
                  <tr>
                    <td><strong>电信 CN2 GIA / 联通 9929 精品公网</strong></td>
                    <td>境外高端机房（DMIT / 瓦工等）</td>
                    <td><strong>&yen;25 &sim; &yen;50 / Mbps / 月</strong></td>
                    <td><strong>&yen;25,000 &sim; &yen;50,000 / 月</strong></td>
                    <td>低（单价偏高，通常限量配额）</td>
                  </tr>
                  <tr>
                    <td><strong>普通 163 国际出口直连 VPS</strong></td>
                    <td>廉价机房（OVH / 斯巴达 / 搬瓦工低配）</td>
                    <td><strong>&yen;0.5 &sim; &yen;2.0 / Mbps / 月</strong></td>
                    <td><strong>&yen;500 &sim; &yen;2,000 / 月</strong></td>
                    <td>极高（极易被骨干网断流淘汰）</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 class="subsection-title">2. 超售比（Over-subscription Ratio）精算模型</h3>
            <p>
              没有一家机场会为每个用户独享 1Gbps 物理专线，因为那意味着单个用户的月成本就要数千元。机场行业维持运转的核心在于<strong>统计复用与超售比控制</strong>：
            </p>
            <div class="code-block-mock">
              <pre><code>超售比 (Ratio) = (活跃用户总数 &times; 签约峰值带宽) &divide; 实际采购的物理专线总带宽

&bull; 顶级旗舰专线 (如光速云): 超售比严格控制在 1:3 至 1:6。晚高峰所有用户同时在线，依然能保障每人 100M～300M 充足带宽，因此定价在 30～50元/月。
&bull; 均衡型中转机场: 超售比控制在 1:15 至 1:25。晚高峰人均分得 30M～50M 带宽，基本满足 4K 播放，定价在 15～25元/月。
&bull; 劣质超售/跑路预备盘: 超售比高达 1:100 甚至 1:300！只要晚高峰一到，千人挤占 1Gbps 共享管道，人均带宽跌破 1Mbps，直接断流红盘。</code></pre>
            </div>
            <p>
              <strong>防骗结论</strong>：当你看到有商家宣称“全专线千兆不限速、月费仅需 5 元”时，根据上述数学公式，其要么是 1:200 的极端超售劣质盘，要么就是纯粹收取资金后 1～3 个月直接关门跑路的“庞氏资金盘”。
            </p>
          </section>
`;

const additionalSection3 = `
          <!-- 模块 7.7：高级分流策略与 DNS 泄漏防范实战 -->
          <section id="advanced-routing-rules" class="about-section">
            <div class="section-badge">高阶进阶技巧</div>
            <h2 class="section-title">客户端高级分流与 DNS 防泄漏配置实战指南</h2>
            <p>
              即使购买了顶级的物理专线节点，如果客户端的分流规则配置不当，依然可能发生：访问国内网站变慢、企业邮箱定位错误、或者向境外 DNS 服务器暴露了国内真实的本地 IP 地址（即 <strong>DNS Leak 泄漏</strong>）。以下是保障隐私与网络速度的标准生产环境配置规范：
            </p>

            <h3 class="subsection-title">1. FakeIP 模式 vs Redir-Host 模式原理对比</h3>
            <p>
              在 Clash Verge Rev 与 Sing-box 客户端中，核心 DNS 解析模式通常有两种选择：
            </p>
            <ul class="styled-list">
              <li>
                <strong>FakeIP 模式（强烈推荐，现代默认标准）</strong>：
                <br>当本地程序（如 Chrome 浏览器）发起 DNS 查询时，客户端内核立即返回一个局部的保留伪装 IP（如 <code>198.18.0.1/16</code>）。浏览器随即直接向该 FakeIP 建立 TCP 连接。内核拦截到该连接后，将真实的域名随同加密代理握手包直接发送给境外远端落地节点，由远端服务器在境外本地发起 DNS 解析。
                <br><strong>优势</strong>：省去了本地向公网 DNS 发送查询的往返延迟（DNS 握手延迟直接降为 0ms），彻底杜绝本地 DNS 污染与 DNS 泄漏！
              </li>
              <li>
                <strong>Redir-Host 模式（传统模式，逐步淘汰）</strong>：
                <br>客户端先向本地或上游 DNS 服务器发起真实解析，获得真实 IP 后，再根据 IP 路由表决定是否走代理。
                <br><strong>劣势</strong>：多了一次本地公网 DNS 往返耗时；且某些未匹配分流规则的海外域名会被本地运营商劫持并记录访问行为。
              </li>
            </ul>

            <h3 class="subsection-title">2. 生产级经典分流规则组配置范式</h3>
            <p>一套优秀的客户端规则策略组应当包含以下四个明确的分流层级：</p>
            <div class="code-block-mock">
              <pre><code>rules:
  # 1. 本地局域网与私有地址直连
  - GEOIP,lan,DIRECT,no-resolve
  
  # 2. 国内主流应用直连（直连加速，走本地运营商物理带宽）
  - GEOSITE,cn,DIRECT
  - GEOIP,CN,DIRECT
  
  # 3. 极严风控平台走高纯净度专线节点（如 OpenAI, Claude, PayPal）
  - GEOSITE,openai,AI-Dedicated-Group
  - DOMAIN-SUFFIX,anthropic.com,AI-Dedicated-Group
  - DOMAIN-SUFFIX,claude.ai,AI-Dedicated-Group
  
  # 4. 高码率海外流媒体走大带宽落地组（如 Netflix, Disney+, YouTube）
  - GEOSITE,netflix,Streaming-Group
  - GEOSITE,youtube,Streaming-Group
  
  # 5. 最终兜底规则
  - MATCH,Final-Proxy-Group</code></pre>
            </div>
            <p>
              按照此规则配置后，本地无论是微信聊天、网银支付、腾讯视频，还是海外 ChatGPT 对话、Netflix 4K 追剧，均能在毫秒级实现无感智能自动分流，无需手动反复频繁开关代理。
            </p>
          </section>
`;

// Read current about.astro
let currentAbout = fs.readFileSync('src/pages/about.astro', 'utf8');

// Insert additional sections before <!-- 模块 8：商业模式
const targetMarker = '<!-- 模块 8：商业模式、赞助透明度与行业道德准则 -->';
if (currentAbout.includes(targetMarker)) {
  const combinedAdditional = `${additionalSection1}\n${additionalSection2}\n${additionalSection3}\n          `;
  currentAbout = currentAbout.replace(targetMarker, `${combinedAdditional}${targetMarker}`);
  
  // Also update monograph-toc links
  const tocTarget = '<a href="#affiliate-disclosure">透明度与行业道德</a>';
  const tocAddition = `
          <a href="#reverse-engineering-guide">专线真伪抓包实操</a>
          <a href="#bandwidth-economics">带宽成本与超售精算</a>
          <a href="#advanced-routing-rules">高级分流防DNS泄漏</a>
          <a href="#affiliate-disclosure">透明度与行业道德</a>`;
  currentAbout = currentAbout.replace(tocTarget, tocAddition);

  fs.writeFileSync('src/pages/about.astro', currentAbout, 'utf8');
  console.log('Successfully injected additional in-depth monograph sections!');
} else {
  console.error('Target marker not found in src/pages/about.astro!');
}
