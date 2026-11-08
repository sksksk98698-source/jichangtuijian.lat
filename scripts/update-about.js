import fs from 'fs';

let c = fs.readFileSync('src/pages/about.astro', 'utf8');
const target = '</article>';
const section = `</article>

        <!-- 测评标准与免责透明度声明 (E-E-A-T) -->
        <section class="about-policy-section" style="margin-top: 2.8em; padding: 2em; background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 16px;">
          <h3 style="margin-top: 0; font-size: 1.3em;">🎯 我们的客观测评标准与方法论</h3>
          <p style="color: var(--color-text-secondary); line-height: 1.7; font-size: 0.93em;">
            「机场推荐」专注于为开发者、科研人员以及跨境出海团队提供公正、中立的网络加速服务评测。我们搭建了跨电信、联通、移动三网的多节点自动化监控探测集群，24 小时对主流机场进行晚高峰延迟、丢包率、流媒体 4K 缓冲吞吐以及 ChatGPT 等生成式 AI 工具的可用率监测。
          </p>
          <h4 style="margin: 1.5em 0 0.5em 0; font-size: 1.05em;">⚖️ 推广透明度与赞助声明 (Affiliate Disclosure)</h4>
          <p style="color: var(--color-text-secondary); line-height: 1.7; font-size: 0.93em; margin: 0;">
            为维持自动化测速节点集群与测试宽带的持续运行成本，本站测评文章中的部分注册按钮可能包含官方推广参数代码。当您通过本站链接注册时，可能会为本站带来一定的推荐支持。但所有评分、测速数据与优缺点剖析均基于真实测试环境，绝不接受任何形式的“花钱刷好评”，测评缺失的数据均明确标注“待核实”，确保每一位读者的知情权与决策利益。
          </p>
        </section>`;

c = c.replace(target, section);
fs.writeFileSync('src/pages/about.astro', c, 'utf8');
console.log('About page successfully enhanced with E-E-A-T section!');
