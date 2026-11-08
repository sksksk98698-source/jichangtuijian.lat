import fs from 'fs';

const currentAbout = fs.readFileSync('src/pages/about.astro', 'utf8');

// Extract the article monograph-body content
const match = currentAbout.match(/<article class="monograph-body">([\s\S]*?)<\/article>/);
if (!match) {
  console.error('Could not find monograph-body');
  process.exit(1);
}
const monographBody = match[1];

// Extract Schema
const schemaMatch = currentAbout.match(/const aboutPageSchema = \{[\s\S]*?\n\};\n---/);
const schemaSnippet = schemaMatch ? schemaMatch[0].replace(/\n---$/, '') : '';

const optimizedAboutAstro = `---
import { Image } from 'astro:assets';
import ContentCard from '../components/ContentCard.astro';
import HeroHeader from '../components/HeroHeader.astro';
import PageShell from '../layouts/PageShell.astro';
import { heroConfig, profileConfig, siteTitle } from '../config';
import { buildSameAsLinks, getRenderableSocials, resolveSocialUrl } from '../lib/profile/social';

const profile = profileConfig;
const aboutHero = heroConfig.about;
const siteURL = Astro.site ?? Astro.url;
const profileInitial = profile.name.trim().charAt(0).toUpperCase() || 'U';
const socials = getRenderableSocials(profile.socials);
const sameAs = buildSameAsLinks(profile);
const profileAvatar = profile.avatar;
const profileAvatarSrc = typeof profileAvatar === 'string' ? profileAvatar : profileAvatar?.src;

${schemaSnippet}
---

<PageShell
  title="关于本站与客观评测标准体系 - 机场推荐网"
  description="深入了解「机场推荐」评测团队的自动化测速集群、IEPL/IPLC专线量化评测体系、42家主流机场分类模型、流媒体与ChatGPT解锁真伪核验方法论及赞助透明度披露。"
  schema={aboutPageSchema}
  transparentHeader={true}
  pageId="about"
>
  <style>
    /* 容器与半屏背景浮动衔接 */
    .about-page-wrapper {
      position: relative;
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1.25rem 4rem 1.25rem;
      transform: translateY(-80px);
      z-index: 20;
    }

    /* 顶部团队名片卡片 (1:1 还原用户最满意的原主题精美视觉) */
    .profile-showcase-card {
      background: var(--color-surface, #ffffff);
      border: 1px solid color-mix(in srgb, var(--color-border, #e2e8f0) 80%, transparent);
      border-radius: 20px;
      box-shadow: 0 12px 36px rgba(0, 0, 0, 0.08);
      padding: 2.25rem;
      display: flex;
      flex-direction: column;
      gap: 1.75rem;
      align-items: center;
      transition: box-shadow 0.3s ease;
    }

    @media (min-width: 768px) {
      .profile-showcase-card {
        flex-direction: row;
        align-items: center;
        gap: 2.5rem;
        padding: 2.75rem;
      }
    }

    .profile-avatar-wrap {
      flex-shrink: 0;
    }

    .profile-avatar-img {
      width: 140px;
      height: 140px;
      border-radius: 50%;
      object-fit: cover;
      display: block;
      border: 4px solid var(--color-surface, #ffffff);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
    }

    .profile-avatar-initial {
      width: 140px;
      height: 140px;
      border-radius: 50%;
      background: linear-gradient(135deg, var(--accent, #005ac1), #3b82f6);
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 3.5rem;
      font-weight: 800;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
    }

    .profile-info {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 0.65rem;
      text-align: center;
    }

    @media (min-width: 768px) {
      .profile-info {
        text-align: left;
      }
    }

    .profile-name {
      font-size: clamp(1.8rem, 2.5vw, 2.25rem);
      font-weight: 800;
      color: var(--color-text-strong, #0f172a);
      margin: 0;
      line-height: 1.25;
    }

    .profile-title {
      font-size: 1rem;
      font-weight: 700;
      color: var(--accent, #005ac1);
      margin: 0;
    }

    .profile-bio {
      font-size: 0.95rem;
      line-height: 1.7;
      color: var(--color-text-secondary, #475569);
      margin: 0.25rem 0 0.5rem 0;
      max-width: 72ch;
    }

    .profile-chips-row {
      display: flex;
      flex-wrap: wrap;
      gap: 0.65rem;
      justify-content: center;
    }

    @media (min-width: 768px) {
      .profile-chips-row {
        justify-content: flex-start;
      }
    }

    .profile-pill {
      display: inline-flex;
      align-items: center;
      gap: 0.45rem;
      padding: 0.4rem 0.85rem;
      border-radius: 9999px;
      background: color-mix(in srgb, var(--color-surface-elevated, #f1f5f9) 92%, transparent);
      border: 1px solid color-mix(in srgb, var(--color-border, #cbd5e1) 75%, transparent);
      font-size: 0.86rem;
      color: var(--color-text-secondary, #334155);
      text-decoration: none;
      transition: all 0.2s ease;
    }

    .profile-pill:hover {
      background: color-mix(in srgb, var(--accent, #005ac1) 12%, transparent);
      color: var(--accent, #005ac1);
      border-color: var(--accent, #005ac1);
    }

    .profile-actions-row {
      display: flex;
      flex-wrap: wrap;
      gap: 0.65rem;
      margin-top: 0.25rem;
      justify-content: center;
    }

    @media (min-width: 768px) {
      .profile-actions-row {
        justify-content: flex-start;
      }
    }

    .action-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.45rem;
      padding: 0.45rem 1rem;
      border-radius: 8px;
      font-size: 0.88rem;
      font-weight: 600;
      background: var(--color-surface, #ffffff);
      color: var(--color-text-strong, #0f172a);
      border: 1px solid color-mix(in srgb, var(--color-border, #cbd5e1) 85%, transparent);
      text-decoration: none;
      transition: all 0.2s ease;
    }

    .action-btn:hover {
      background: var(--accent, #005ac1);
      color: #ffffff;
      border-color: var(--accent, #005ac1);
      transform: translateY(-1px);
    }

    /* 专著内容主卡片 */
    .monograph-content-card {
      margin-top: 2rem;
      background: var(--color-surface, #ffffff);
      border: 1px solid color-mix(in srgb, var(--color-border, #e2e8f0) 80%, transparent);
      border-radius: 20px;
      box-shadow: 0 12px 36px rgba(0, 0, 0, 0.06);
      padding: 2.25rem;
    }

    @media (min-width: 768px) {
      .monograph-content-card {
        padding: 3.5rem;
      }
    }

    /* 专著目录导航 */
    .monograph-toc {
      margin-bottom: 3rem;
      padding: 1.5rem;
      background: color-mix(in srgb, var(--color-surface-elevated, #f8fafc) 95%, transparent);
      border-radius: 14px;
      border: 1px solid color-mix(in srgb, var(--color-border, #e2e8f0) 85%, transparent);
    }

    .toc-title {
      font-size: 1.1rem;
      font-weight: 800;
      margin-bottom: 0.85rem;
      color: var(--color-text-strong, #0f172a);
      display: flex;
      align-items: center;
      gap: 0.4rem;
    }

    .toc-links {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .toc-links a {
      font-size: 0.85rem;
      font-weight: 600;
      padding: 0.38rem 0.85rem;
      background: var(--color-surface, #ffffff);
      border: 1px solid color-mix(in srgb, var(--color-border, #cbd5e1) 75%, transparent);
      border-radius: 6px;
      color: var(--accent, #005ac1);
      text-decoration: none;
      transition: all 0.15s ease;
    }

    .toc-links a:hover {
      background: var(--accent, #005ac1);
      color: #ffffff;
      border-color: var(--accent, #005ac1);
    }

    /* 专著正文排版 */
    .monograph-body {
      line-height: 1.9;
      color: var(--color-text-primary, #334155);
      font-size: 1.02rem;
    }

    .about-section {
      margin-top: 3.5rem;
      padding-top: 1.5rem;
      border-top: 1px dashed color-mix(in srgb, var(--color-border, #e2e8f0) 90%, transparent);
    }

    .about-section:first-child {
      border-top: none;
      margin-top: 0;
      padding-top: 0;
    }

    .section-badge {
      display: inline-block;
      font-size: 0.78rem;
      font-weight: 800;
      padding: 0.25rem 0.65rem;
      border-radius: 6px;
      background: color-mix(in srgb, var(--accent, #005ac1) 12%, transparent);
      color: var(--accent, #005ac1);
      margin-bottom: 0.65rem;
      text-transform: uppercase;
      letter-spacing: 0.04em;
    }

    .section-title {
      font-size: clamp(1.4rem, 2.2vw, 1.85rem);
      font-weight: 800;
      margin: 0.4rem 0 1.25rem 0;
      color: var(--color-text-strong, #0f172a);
      line-height: 1.35;
    }

    .subsection-title {
      font-size: 1.3rem;
      font-weight: 750;
      margin: 2.25rem 0 0.85rem 0;
      color: var(--color-text-strong, #0f172a);
    }

    .lead-text {
      font-size: 1.08rem;
      font-weight: 500;
      line-height: 1.85;
      color: var(--color-text-secondary, #475569);
      margin-bottom: 1.25rem;
    }

    /* 提示高亮框 */
    .highlight-card {
      background: color-mix(in srgb, var(--color-surface-elevated, #f8fafc) 92%, transparent);
      border: 1px solid color-mix(in srgb, var(--color-border, #e2e8f0) 85%, transparent);
      border-radius: 14px;
      padding: 1.75rem;
      margin: 1.75rem 0;
    }

    .highlight-title {
      font-size: 1.18rem;
      font-weight: 800;
      margin: 0 0 0.4rem 0;
      color: var(--color-text-strong, #0f172a);
    }

    .highlight-subtitle {
      font-size: 0.92rem;
      color: var(--color-text-muted, #64748b);
      margin-bottom: 1.15rem;
    }

    /* 表格容器自适应防溢出 */
    .table-container {
      width: 100%;
      overflow-x: auto;
      margin: 1.5rem 0;
      border-radius: 10px;
      border: 1px solid color-mix(in srgb, var(--color-border, #e2e8f0) 80%, transparent);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.02);
    }

    .monograph-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.9rem;
      text-align: left;
      min-width: 620px;
    }

    .monograph-table th,
    .monograph-table td {
      padding: 0.85rem 1rem;
      border-bottom: 1px solid color-mix(in srgb, var(--color-border, #e2e8f0) 80%, transparent);
      vertical-align: middle;
    }

    .monograph-table th {
      background: color-mix(in srgb, var(--color-surface-elevated, #f1f5f9) 90%, transparent);
      font-weight: 750;
      color: var(--color-text-strong, #0f172a);
    }

    .monograph-table tr:hover {
      background: color-mix(in srgb, var(--color-surface-elevated, #f8fafc) 50%, transparent);
    }

    .monograph-table a {
      color: var(--accent, #005ac1);
      font-weight: 700;
      text-decoration: underline;
    }

    /* 代码块与命令行示范 */
    .code-block-mock {
      background: #181825;
      color: #cdd6f4;
      padding: 1.35rem;
      border-radius: 10px;
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
      font-size: 0.86rem;
      line-height: 1.65;
      overflow-x: auto;
      margin: 1.5rem 0;
      box-shadow: inset 0 2px 6px rgba(0, 0, 0, 0.3);
    }

    .code-block-mock code {
      background: none;
      padding: 0;
      color: inherit;
    }

    /* 时间轴步骤 */
    .timeline-container {
      margin: 1.75rem 0;
      display: flex;
      flex-direction: column;
      gap: 1.35rem;
    }

    .timeline-step {
      display: flex;
      gap: 1.15rem;
      background: color-mix(in srgb, var(--color-surface-elevated, #f8fafc) 90%, transparent);
      padding: 1.35rem;
      border-radius: 12px;
      border-left: 4px solid var(--accent, #005ac1);
      border-top: 1px solid color-mix(in srgb, var(--color-border, #e2e8f0) 60%, transparent);
      border-right: 1px solid color-mix(in srgb, var(--color-border, #e2e8f0) 60%, transparent);
      border-bottom: 1px solid color-mix(in srgb, var(--color-border, #e2e8f0) 60%, transparent);
    }

    .step-num {
      font-weight: 800;
      font-size: 0.88rem;
      color: var(--accent, #005ac1);
      white-space: nowrap;
      padding-top: 0.2rem;
    }

    .step-body h4 {
      margin: 0 0 0.5rem 0;
      font-size: 1.1rem;
      font-weight: 750;
      color: var(--color-text-strong, #0f172a);
    }

    .step-body p {
      margin: 0 0 0.5rem 0;
      font-size: 0.92rem;
      line-height: 1.7;
    }

    /* 分类卡片网格 */
    .category-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1.35rem;
      margin: 1.75rem 0;
    }

    @media (min-width: 768px) {
      .category-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    .category-card {
      background: color-mix(in srgb, var(--color-surface-elevated, #f8fafc) 90%, transparent);
      border: 1px solid color-mix(in srgb, var(--color-border, #e2e8f0) 80%, transparent);
      border-radius: 14px;
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }

    .category-tag {
      align-self: flex-start;
      font-size: 0.78rem;
      font-weight: 800;
      padding: 0.25rem 0.65rem;
      border-radius: 6px;
    }

    .tag-flagship { background: #fee2e2; color: #991b1b; }
    .tag-value { background: #e0f2fe; color: #075985; }
    .tag-budget { background: #dcfce7; color: #166534; }
    .tag-payg { background: #fef3c7; color: #92400e; }

    .category-card h4 {
      margin: 0;
      font-size: 1.15rem;
      font-weight: 750;
      color: var(--color-text-strong, #0f172a);
    }

    .cat-summary {
      font-size: 0.9rem;
      line-height: 1.65;
      margin: 0;
      color: var(--color-text-secondary, #475569);
    }

    .cat-meta {
      font-size: 0.85rem;
      display: flex;
      flex-direction: column;
      gap: 0.3rem;
      padding: 0.6rem 0;
      border-top: 1px dashed color-mix(in srgb, var(--color-border, #e2e8f0) 80%, transparent);
      border-bottom: 1px dashed color-mix(in srgb, var(--color-border, #e2e8f0) 80%, transparent);
    }

    .cat-target {
      font-size: 0.86rem;
      line-height: 1.65;
      color: var(--color-text-primary, #334155);
    }

    /* 对比双列盒 */
    .comparison-dual-box {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1.35rem;
      margin: 1.75rem 0;
    }

    @media (min-width: 640px) {
      .comparison-dual-box {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    .dual-item {
      background: color-mix(in srgb, var(--color-surface-elevated, #f8fafc) 90%, transparent);
      border: 1px solid color-mix(in srgb, var(--color-border, #e2e8f0) 80%, transparent);
      border-radius: 12px;
      padding: 1.4rem;
    }

    .dual-title {
      font-size: 1.05rem;
      font-weight: 750;
      margin: 0 0 0.65rem 0;
    }

    .dual-title.is-good { color: #15803d; }
    .dual-title.is-warning { color: #c2410c; }

    /* 决策流程卡片 */
    .decision-flow {
      display: flex;
      flex-direction: column;
      gap: 1.35rem;
      margin: 1.75rem 0;
    }

    .decision-card {
      background: color-mix(in srgb, var(--color-surface-elevated, #f8fafc) 90%, transparent);
      border: 1px solid color-mix(in srgb, var(--color-border, #e2e8f0) 80%, transparent);
      border-radius: 14px;
      padding: 1.5rem;
    }

    .decision-card .card-header {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      margin-bottom: 0.75rem;
    }

    .user-badge {
      font-size: 0.78rem;
      font-weight: 800;
      padding: 0.22rem 0.6rem;
      border-radius: 6px;
      background: var(--accent, #005ac1);
      color: #ffffff;
    }

    .decision-card .card-header h3 {
      margin: 0;
      font-size: 1.15rem;
      font-weight: 750;
      color: var(--color-text-strong, #0f172a);
    }

    .decision-card .card-content p {
      margin: 0 0 0.55rem 0;
      font-size: 0.92rem;
      line-height: 1.7;
    }

    .plan-recommend {
      margin-top: 0.85rem;
      padding: 0.75rem 1rem;
      background: var(--color-surface, #ffffff);
      border-radius: 8px;
      border: 1px solid color-mix(in srgb, var(--color-border, #e2e8f0) 80%, transparent);
      font-size: 0.88rem;
    }

    .plan-recommend a {
      color: var(--accent, #005ac1);
      font-weight: 750;
      text-decoration: underline;
    }

    /* 故障排查步骤 */
    .trouble-steps {
      display: flex;
      flex-direction: column;
      gap: 1.35rem;
      margin: 1.75rem 0;
    }

    .step-card {
      background: color-mix(in srgb, var(--color-surface-elevated, #f8fafc) 90%, transparent);
      border: 1px solid color-mix(in srgb, var(--color-border, #e2e8f0) 80%, transparent);
      border-radius: 12px;
      padding: 1.4rem;
    }

    .step-card h4 {
      margin: 0 0 0.55rem 0;
      font-size: 1.1rem;
      font-weight: 750;
      color: var(--color-text-strong, #0f172a);
    }

    .step-card p {
      margin: 0 0 0.55rem 0;
      font-size: 0.92rem;
      line-height: 1.7;
    }

    /* 规则盒 */
    .rules-box {
      background: color-mix(in srgb, var(--color-surface-elevated, #f8fafc) 90%, transparent);
      border: 1px solid color-mix(in srgb, var(--color-border, #e2e8f0) 80%, transparent);
      border-radius: 14px;
      padding: 1.75rem;
      margin: 1.75rem 0;
    }

    .rules-title {
      font-size: 1.18rem;
      font-weight: 800;
      margin: 0 0 1.15rem 0;
      color: var(--color-text-strong, #0f172a);
    }

    /* FAQ 手风琴问答 */
    .faq-accordion {
      display: flex;
      flex-direction: column;
      gap: 1.15rem;
      margin: 1.75rem 0;
    }

    .faq-item {
      background: color-mix(in srgb, var(--color-surface-elevated, #f8fafc) 90%, transparent);
      border: 1px solid color-mix(in srgb, var(--color-border, #e2e8f0) 80%, transparent);
      border-radius: 12px;
      padding: 1.35rem;
    }

    .faq-q {
      font-size: 1.1rem;
      font-weight: 750;
      margin: 0 0 0.65rem 0;
      color: var(--accent, #005ac1);
    }

    .faq-a p {
      margin: 0 0 0.55rem 0;
      font-size: 0.92rem;
      line-height: 1.75;
      color: var(--color-text-secondary, #475569);
    }

    /* 下一步核心内链卡片 */
    .next-action-cards {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1.15rem;
      margin: 1.75rem 0;
    }

    @media (min-width: 640px) {
      .next-action-cards {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    .action-card {
      display: flex;
      flex-direction: column;
      background: color-mix(in srgb, var(--color-surface-elevated, #f8fafc) 90%, transparent);
      border: 1px solid color-mix(in srgb, var(--color-border, #e2e8f0) 80%, transparent);
      border-radius: 14px;
      padding: 1.35rem;
      text-decoration: none;
      color: inherit;
      transition: all 0.25s ease;
    }

    .action-card:hover {
      transform: translateY(-3px);
      border-color: var(--accent, #005ac1);
      box-shadow: 0 10px 24px rgba(0, 0, 0, 0.08);
    }

    .card-icon {
      font-size: 2rem;
      margin-bottom: 0.5rem;
    }

    .card-info h4 {
      margin: 0 0 0.35rem 0;
      font-size: 1.05rem;
      font-weight: 750;
      color: var(--color-text-strong, #0f172a);
    }

    .card-info p {
      margin: 0;
      font-size: 0.86rem;
      line-height: 1.6;
      color: var(--color-text-secondary, #475569);
    }

    .card-arrow {
      margin-top: auto;
      padding-top: 0.85rem;
      color: var(--accent, #005ac1);
      font-weight: 800;
      font-size: 1.2rem;
    }

    /* 审计记录页脚 */
    .site-audit-footer {
      margin-top: 3.5rem;
      padding-top: 1.75rem;
      border-top: 1px solid color-mix(in srgb, var(--color-border, #e2e8f0) 80%, transparent);
      font-size: 0.85rem;
      color: var(--color-text-muted, #64748b);
      line-height: 1.65;
    }

    .copyright-note {
      margin-top: 0.5rem;
    }

    .section-notice {
      margin-top: 1.75rem;
      padding: 0.95rem 1.25rem;
      background: color-mix(in srgb, var(--accent, #005ac1) 10%, transparent);
      border-radius: 8px;
      font-size: 0.92rem;
      color: var(--color-text-strong, #0f172a);
    }

    .text-link {
      color: var(--accent, #005ac1);
      font-weight: 750;
      text-decoration: underline;
    }

    .styled-list {
      margin: 1.15rem 0;
      padding-left: 1.5rem;
    }

    .styled-list li {
      margin-bottom: 0.75rem;
      line-height: 1.75;
    }
  </style>

  <HeroHeader
    text={aboutHero.text}
    subtitle={aboutHero.subtitle}
    backgroundImage={aboutHero.backgroundImage}
    compact={true}
  />

  <main class="about-page-wrapper">
    <!-- 顶部团队名片卡片 (原主题头像与名片视觉，杜绝任何异常SVG膨胀) -->
    <header class="profile-showcase-card">
      <div class="profile-avatar-wrap">
        {
          profileAvatar ? (
            typeof profileAvatar === 'string' ? (
              <img
                class="profile-avatar-img"
                src={profileAvatar}
                alt={profile.name}
                width="140"
                height="140"
                loading="eager"
              />
            ) : (
              <Image
                class="profile-avatar-img"
                src={profileAvatar}
                alt={profile.name}
                width={280}
                height={280}
                loading="eager"
              />
            )
          ) : (
            <div class="profile-avatar-initial">{profileInitial}</div>
          )
        }
      </div>

      <div class="profile-info">
        <h1 class="profile-name">{profile.name}</h1>
        <div class="profile-title">{profile.title}</div>
        <p class="profile-bio">{profile.bio}</p>

        <div class="profile-chips-row">
          {
            profile.location && (
              <span class="profile-pill">
                <span>📍</span>
                <span>{profile.location}</span>
              </span>
            )
          }
          {
            profile.email && (
              <a
                class="profile-pill"
                href={profile.email.startsWith('mailto:') ? profile.email : \`mailto:\${profile.email}\`}
              >
                <span>✉️</span>
                <span>{profile.email.replace(/^mailto:/, '')}</span>
              </a>
            )
          }
        </div>

        <div class="profile-actions-row">
          <a href="/" class="action-btn">
            <span>🌐 本站首页</span>
          </a>
          {
            profile.email && (
              <a href={profile.email.startsWith('mailto:') ? profile.email : \`mailto:\${profile.email}\`} class="action-btn">
                <span>✉️ 邮件联系</span>
              </a>
            )
          }
          <a href="/airports/" class="action-btn">
            <span>🚀 机场品牌库</span>
          </a>
          <a href="/clients/" class="action-btn">
            <span>💻 客户端下载</span>
          </a>
        </div>
      </div>
    </header>

    <!-- 专著级客观测评体系主体卡片 -->
    <section class="monograph-content-card">
      <!-- 快速跳转锚点导航条 -->
      <nav class="monograph-toc" aria-label="正文快速跳转目录">
        <div class="toc-title">📑 专著级测评体系快速目录导航</div>
        <div class="toc-links">
          <a href="#executive-summary">核心摘要与答案</a>
          <a href="#testing-methodology">量化评测体系</a>
          <a href="#lines-and-protocols">线路与传输协议</a>
          <a href="#brands-classification">42家机场分类模型</a>
          <a href="#unlock-verification">流媒体与AI解锁核验</a>
          <a href="#decision-tree">科学选购决策树</a>
          <a href="#troubleshooting-guide">故障排障全攻略</a>
          <a href="#reverse-engineering-guide">专线真伪抓包实操</a>
          <a href="#bandwidth-economics">带宽成本与超售精算</a>
          <a href="#advanced-routing-rules">高级分流防DNS泄漏</a>
          <a href="#affiliate-disclosure">透明度与行业道德</a>
          <a href="#faq-section">10大深度FAQ</a>
          <a href="#next-actions">下一步资源延伸</a>
        </div>
      </nav>

      <article class="monograph-body">
${monographBody}
      </article>
    </section>
  </main>
</PageShell>
`;

fs.writeFileSync('src/pages/about.astro', optimizedAboutAstro, 'utf8');
console.log('src/pages/about.astro has been completely optimized and cleaned!');
