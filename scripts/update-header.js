import fs from 'node:fs';

let content = fs.readFileSync('src/components/Header.astro', 'utf-8');

// Replace desktop links
const oldDesktop = /<div class="internal-links">[\s\S]*?<div class="nav-indicator" id="nav-indicator"><\/div>\s*<\/div>/;
const newDesktop = `<div class="internal-links">
			<HeaderLink href="/">首页</HeaderLink>
			<HeaderLink href="/reviews">42家测评</HeaderLink>
			<HeaderLink href="/airports">机场推荐库</HeaderLink>
			<HeaderLink href="/trials">免费试用</HeaderLink>
			<HeaderLink href="/warnings">跑路预警</HeaderLink>
			<HeaderLink href="/faq">常见FAQ</HeaderLink>
			<HeaderLink href="/free-nodes">免费节点</HeaderLink>
			<HeaderLink href="/clients">客户端</HeaderLink>
			<HeaderLink href="/blog">测评矩阵</HeaderLink>
			<HeaderLink href="/about">关于本站</HeaderLink>
			<div class="nav-indicator" id="nav-indicator"></div>
		</div>`;

content = content.replace(oldDesktop, newDesktop);

// Replace mobile drawer links
const oldMobile = /<nav class="mobile-nav-links"[^>]*>[\s\S]*?<\/nav>/;
const newMobile = `<nav class="mobile-nav-links" aria-label="移动端导航">
			<a href="/" class="mobile-nav-link">首页</a>
			<a href="/reviews" class="mobile-nav-link">42家机场全景测评</a>
			<a href="/airports" class="mobile-nav-link">机场推荐库 (42家)</a>
			<a href="/trials" class="mobile-nav-link">免费试用与退款保障</a>
			<a href="/warnings" class="mobile-nav-link">跑路黑名单与风险预警</a>
			<a href="/faq" class="mobile-nav-link">机场选购与排障FAQ</a>
			<a href="/free-nodes" class="mobile-nav-link">免费节点防坑指南</a>
			<a href="/clients" class="mobile-nav-link">客户端配置与下载</a>
			<a href="/blog" class="mobile-nav-link">测评文章矩阵</a>
			<a href="/tags" class="mobile-nav-link">分类标签索引</a>
			<a href="/about" class="mobile-nav-link">关于我们</a>
		</nav>`;

content = content.replace(oldMobile, newMobile);

// Update gap and padding for compact desktop navbar
content = content.replace(/gap:\s*1em;\s*position:\s*relative;/, 'gap: 0.5em;\n        position: relative;\n        font-size: 0.88rem;');
content = content.replace(/padding:\s*1em\s*0\.5em;/, 'padding: 0.8em 0.3em;\n        font-size: 0.88rem;');
content = content.replace(/@media\s*\(\s*max-width:\s*900px\s*\)/, '@media (max-width: 1080px)');

fs.writeFileSync('src/components/Header.astro', content, 'utf-8');
console.log('Header.astro successfully updated with 5 new topic pillars!');
