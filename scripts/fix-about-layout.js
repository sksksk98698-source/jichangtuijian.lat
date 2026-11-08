import fs from 'fs';

// Read existing about.astro to extract the monograph body
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

const newAboutAstro = `---
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
    .stats-wrapper {
      position: relative;
      min-height: 50vh;
      background-color: var(--color-bg);
      transform: translateY(88px);
    }

    .about-container {
      background: transparent;
      transform: translateY(-88px);
    }

    .profile-card {
      position: relative;
      display: grid;
      grid-template-columns: 240px minmax(0, 1fr);
      gap: 2em;
      padding: 2.2em;
      background: var(--color-surface);
      border: 1px solid color-mix(in srgb, var(--color-border) 78%, transparent);
      border-radius: 18px;
      box-shadow: var(--shadow-card);
      overflow: hidden;
    }

    .profile-card::before {
      content: '';
      position: absolute;
      inset: 0;
      pointer-events: none;
      background: linear-gradient(
        135deg,
        rgba(var(--accent-rgb), 0.08) 0%,
        transparent 45%,
        rgba(var(--shadow-color), 0.03) 100%
      );
    }

    .profile-media {
      position: relative;
      z-index: 1;
    }

    .avatar {
      width: 220px;
      height: 220px;
      border-radius: 50%;
      object-fit: cover;
      display: block;
      border: 1px solid color-mix(in srgb, var(--color-border) 74%, transparent);
      box-shadow:
        0 10px 18px rgba(var(--shadow-color), 0.2),
        0 24px 42px rgba(var(--shadow-color), 0.22),
        inset 0 1px 0 rgba(255, 255, 255, 0.35);
    }

    .avatar-placeholder {
      width: 220px;
      height: 220px;
      border-radius: 50%;
      background: linear-gradient(135deg, var(--accent), var(--color-gradient-start));
      color: white;
      display: grid;
      place-items: center;
      font-size: 4rem;
      font-weight: 700;
      box-shadow:
        0 10px 18px rgba(var(--shadow-color), 0.2),
        0 24px 42px rgba(var(--shadow-color), 0.22),
        inset 0 1px 0 rgba(255, 255, 255, 0.35);
    }

    .profile-content {
      position: relative;
      z-index: 1;
    }

    .profile-name {
      margin: 0;
      font-size: clamp(1.8rem, 2.5vw, 2.3rem);
      color: var(--color-text-strong);
      line-height: 1.2;
    }

    .profile-title {
      margin-top: 0.4em;
      color: var(--accent);
      font-weight: 600;
      letter-spacing: 0.2px;
    }

    .profile-bio {
      margin-top: 1em;
      margin-bottom: 1.4em;
      color: var(--color-text-secondary);
      line-height: 1.75;
      max-width: 70ch;
    }

    .meta-row {
      display: flex;
      flex-wrap: wrap;
      gap: 0.7em;
      margin-bottom: 1.5em;
    }

    .meta-chip {
      display: inline-flex;
      align-items: center;
      gap: 0.45em;
      padding: 0.45em 0.85em;
      border-radius: 999px;
      font-size: 0.88em;
      color: var(--color-text-secondary);
      background: color-mix(in srgb, var(--color-surface-elevated) 86%, transparent);
      border: 1px solid color-mix(in srgb, var(--color-border) 85%, transparent);
    }

    .meta-chip svg {
      width: 14px;
      height: 14px;
    }

    .social-row {
      display: flex;
      flex-wrap: wrap;
      gap: 0.7em;
    }

    .social-link {
      display: inline-flex;
      align-items: center;
      gap: 0.45em;
      padding: 0.5em 0.9em;
      border-radius: 999px;
      font-size: 0.9em;
      color: var(--color-text-strong);
      background: color-mix(in srgb, var(--color-surface-elevated) 86%, transparent);
      border: 1px solid color-mix(in srgb, var(--color-border) 85%, transparent);
      transition: all 0.2s ease;
      text-decoration: none;
    }

    .social-link:hover {
      background: var(--accent);
      color: white;
      border-color: var(--accent);
      transform: translateY(-1px);
    }

    .social-link svg {
      width: 14px;
      height: 14px;
    }

    @media (max-width: 768px) {
      .profile-card {
        grid-template-columns: 1fr;
        text-align: center;
        gap: 1.5em;
        padding: 1.5em;
      }

      .profile-media {
        display: flex;
        justify-content: center;
      }

      .avatar,
      .avatar-placeholder {
        width: 160px;
        height: 160px;
      }

      .meta-row,
      .social-row {
        justify-content: center;
      }
    }

    /* 专著目录与排版样式 */
    .monograph-wrapper {
      margin-top: 2.5rem;
      background: var(--color-surface);
      border: 1px solid color-mix(in srgb, var(--color-border) 78%, transparent);
      border-radius: 18px;
      box-shadow: var(--shadow-card);
      padding: 2.5rem;
    }

    @media (max-width: 640px) {
      .monograph-wrapper {
        padding: 1.25rem;
      }
    }

    .monograph-toc {
      margin-bottom: 2.5rem;
      padding: 1.25rem;
      background: color-mix(in srgb, var(--color-surface-elevated) 86%, transparent);
      border-radius: 12px;
      border: 1px solid color-mix(in srgb, var(--color-border) 85%, transparent);
    }

    .toc-title {
      font-size: 1.05rem;
      font-weight: 700;
      margin-bottom: 0.75rem;
      color: var(--color-text-strong);
    }

    .toc-links {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .toc-links a {
      font-size: 0.84rem;
      padding: 0.35rem 0.75rem;
      background: var(--color-surface);
      border: 1px solid color-mix(in srgb, var(--color-border) 80%, transparent);
      border-radius: 6px;
      color: var(--accent);
      text-decoration: none;
      transition: all 0.15s ease;
    }

    .toc-links a:hover {
      background: var(--accent);
      color: white;
    }

    .monograph-body {
      line-height: 1.85;
      color: var(--color-text-primary, #2d3748);
      font-size: 1rem;
    }

    .about-section {
      margin-top: 3.5rem;
      padding-top: 1rem;
      border-top: 1px dashed color-mix(in srgb, var(--color-border) 60%, transparent);
    }

    .about-section:first-child {
      border-top: none;
      margin-top: 0;
      padding-top: 0;
    }

    .section-badge {
      display: inline-block;
      font-size: 0.75rem;
      font-weight: 700;
      padding: 0.2rem 0.6rem;
      border-radius: 4px;
      background: color-mix(in srgb, var(--accent) 15%, transparent);
      color: var(--accent);
      margin-bottom: 0.5rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .section-title {
      font-size: 1.6rem;
      font-weight: 800;
      margin: 0.5rem 0 1.25rem 0;
      color: var(--color-text-strong);
      line-height: 1.35;
    }

    .subsection-title {
      font-size: 1.25rem;
      font-weight: 700;
      margin: 2rem 0 0.85rem 0;
      color: var(--color-text-strong);
    }

    .lead-text {
      font-size: 1.05rem;
      font-weight: 500;
      line-height: 1.8;
      color: var(--color-text-secondary);
      margin-bottom: 1.25rem;
    }

    .highlight-card {
      background: color-mix(in srgb, var(--color-surface-elevated) 90%, transparent);
      border: 1px solid color-mix(in srgb, var(--color-border) 85%, transparent);
      border-radius: 12px;
      padding: 1.5rem;
      margin: 1.5rem 0;
    }

    .highlight-title {
      font-size: 1.15rem;
      font-weight: 700;
      margin: 0 0 0.35rem 0;
      color: var(--color-text-strong);
    }

    .highlight-subtitle {
      font-size: 0.88rem;
      color: var(--color-text-muted);
      margin-bottom: 1rem;
    }

    .table-container {
      width: 100%;
      overflow-x: auto;
      margin: 1.25rem 0;
      border-radius: 8px;
      border: 1px solid color-mix(in srgb, var(--color-border) 80%, transparent);
    }

    .monograph-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.88rem;
      text-align: left;
    }

    .monograph-table th,
    .monograph-table td {
      padding: 0.8rem 0.9rem;
      border-bottom: 1px solid color-mix(in srgb, var(--color-border) 80%, transparent);
      vertical-align: middle;
    }

    .monograph-table th {
      background: color-mix(in srgb, var(--color-surface-elevated) 96%, transparent);
      font-weight: 700;
      color: var(--color-text-strong);
    }

    .monograph-table tr:last-child td {
      border-bottom: none;
    }

    .monograph-table a {
      color: var(--accent);
      font-weight: 600;
      text-decoration: underline;
    }

    .styled-list {
      margin: 1rem 0;
      padding-left: 1.4rem;
    }

    .styled-list li {
      margin-bottom: 0.65rem;
      line-height: 1.7;
    }

    .code-block-mock {
      background: #1e1e2e;
      color: #cdd6f4;
      padding: 1.2rem;
      border-radius: 8px;
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
      font-size: 0.84rem;
      line-height: 1.6;
      overflow-x: auto;
      margin: 1.25rem 0;
    }

    .code-block-mock code {
      background: none;
      padding: 0;
      color: inherit;
    }

    .timeline-container {
      margin: 1.5rem 0;
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
    }

    .timeline-step {
      display: flex;
      gap: 1rem;
      background: color-mix(in srgb, var(--color-surface-elevated) 85%, transparent);
      padding: 1.25rem;
      border-radius: 10px;
      border-left: 4px solid var(--accent);
    }

    .step-num {
      font-weight: 800;
      font-size: 0.85rem;
      color: var(--accent);
      white-space: nowrap;
      padding-top: 0.2rem;
    }

    .step-body h4 {
      margin: 0 0 0.5rem 0;
      font-size: 1.05rem;
      font-weight: 700;
      color: var(--color-text-strong);
    }

    .step-body p {
      margin: 0 0 0.5rem 0;
      font-size: 0.9rem;
      line-height: 1.65;
    }

    .category-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1.25rem;
      margin: 1.5rem 0;
    }

    @media (min-width: 768px) {
      .category-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    .category-card {
      background: color-mix(in srgb, var(--color-surface-elevated) 88%, transparent);
      border: 1px solid color-mix(in srgb, var(--color-border) 80%, transparent);
      border-radius: 12px;
      padding: 1.35rem;
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }

    .category-tag {
      align-self: flex-start;
      font-size: 0.75rem;
      font-weight: 700;
      padding: 0.2rem 0.6rem;
      border-radius: 4px;
    }

    .tag-flagship { background: #fee2e2; color: #991b1b; }
    .tag-value { background: #e0f2fe; color: #075985; }
    .tag-budget { background: #dcfce7; color: #166534; }
    .tag-payg { background: #fef3c7; color: #92400e; }

    .category-card h4 {
      margin: 0;
      font-size: 1.1rem;
      font-weight: 700;
      color: var(--color-text-strong);
    }

    .cat-summary {
      font-size: 0.88rem;
      line-height: 1.6;
      margin: 0;
      color: var(--color-text-secondary);
    }

    .cat-meta {
      font-size: 0.82rem;
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
      padding: 0.5rem 0;
      border-top: 1px dashed color-mix(in srgb, var(--color-border) 80%, transparent);
      border-bottom: 1px dashed color-mix(in srgb, var(--color-border) 80%, transparent);
    }

    .cat-target {
      font-size: 0.84rem;
      line-height: 1.6;
      color: var(--color-text-primary);
    }

    .comparison-dual-box {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1.25rem;
      margin: 1.5rem 0;
    }

    @media (min-width: 640px) {
      .comparison-dual-box {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    .dual-item {
      background: color-mix(in srgb, var(--color-surface-elevated) 88%, transparent);
      border: 1px solid color-mix(in srgb, var(--color-border) 80%, transparent);
      border-radius: 10px;
      padding: 1.25rem;
    }

    .dual-title {
      font-size: 0.98rem;
      font-weight: 700;
      margin: 0 0 0.5rem 0;
    }

    .dual-title.is-good { color: #166534; }
    .dual-title.is-warning { color: #9a3412; }

    .decision-flow {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
      margin: 1.5rem 0;
    }

    .decision-card {
      background: color-mix(in srgb, var(--color-surface-elevated) 88%, transparent);
      border: 1px solid color-mix(in srgb, var(--color-border) 80%, transparent);
      border-radius: 12px;
      padding: 1.35rem;
    }

    .decision-card .card-header {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      margin-bottom: 0.65rem;
    }

    .user-badge {
      font-size: 0.75rem;
      font-weight: 800;
      padding: 0.2rem 0.5rem;
      border-radius: 4px;
      background: var(--accent);
      color: #ffffff;
    }

    .decision-card .card-header h3 {
      margin: 0;
      font-size: 1.1rem;
      font-weight: 700;
      color: var(--color-text-strong);
    }

    .decision-card .card-content p {
      margin: 0 0 0.5rem 0;
      font-size: 0.88rem;
      line-height: 1.65;
    }

    .plan-recommend {
      margin-top: 0.75rem;
      padding: 0.65rem 0.85rem;
      background: var(--color-surface);
      border-radius: 8px;
      border: 1px solid color-mix(in srgb, var(--color-border) 80%, transparent);
      font-size: 0.86rem;
    }

    .plan-recommend a {
      color: var(--accent);
      font-weight: 700;
      text-decoration: underline;
    }

    .trouble-steps {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
      margin: 1.5rem 0;
    }

    .step-card {
      background: color-mix(in srgb, var(--color-surface-elevated) 88%, transparent);
      border: 1px solid color-mix(in srgb, var(--color-border) 80%, transparent);
      border-radius: 10px;
      padding: 1.25rem;
    }

    .step-card h4 {
      margin: 0 0 0.5rem 0;
      font-size: 1.05rem;
      font-weight: 700;
      color: var(--color-text-strong);
    }

    .step-card p {
      margin: 0 0 0.5rem 0;
      font-size: 0.88rem;
      line-height: 1.65;
    }

    .rules-box {
      background: color-mix(in srgb, var(--color-surface-elevated) 88%, transparent);
      border: 1px solid color-mix(in srgb, var(--color-border) 80%, transparent);
      border-radius: 12px;
      padding: 1.5rem;
      margin: 1.5rem 0;
    }

    .rules-title {
      font-size: 1.15rem;
      font-weight: 700;
      margin: 0 0 1rem 0;
      color: var(--color-text-strong);
    }

    .faq-accordion {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin: 1.5rem 0;
    }

    .faq-item {
      background: color-mix(in srgb, var(--color-surface-elevated) 88%, transparent);
      border: 1px solid color-mix(in srgb, var(--color-border) 80%, transparent);
      border-radius: 10px;
      padding: 1.25rem;
    }

    .faq-q {
      font-size: 1.05rem;
      font-weight: 700;
      margin: 0 0 0.65rem 0;
      color: var(--accent);
    }

    .faq-a p {
      margin: 0 0 0.5rem 0;
      font-size: 0.9rem;
      line-height: 1.7;
      color: var(--color-text-secondary);
    }

    .next-action-cards {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1rem;
      margin: 1.5rem 0;
    }

    @media (min-width: 640px) {
      .next-action-cards {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    .action-card {
      display: flex;
      flex-direction: column;
      background: color-mix(in srgb, var(--color-surface-elevated) 88%, transparent);
      border: 1px solid color-mix(in srgb, var(--color-border) 80%, transparent);
      border-radius: 12px;
      padding: 1.25rem;
      text-decoration: none;
      color: inherit;
      transition: all 0.2s ease;
    }

    .action-card:hover {
      transform: translateY(-2px);
      border-color: var(--accent);
      box-shadow: 0 6px 16px rgba(0, 0, 0, 0.06);
    }

    .card-icon {
      font-size: 1.75rem;
      margin-bottom: 0.5rem;
    }

    .card-info h4 {
      margin: 0 0 0.35rem 0;
      font-size: 0.98rem;
      font-weight: 700;
      color: var(--color-text-strong);
    }

    .card-info p {
      margin: 0;
      font-size: 0.82rem;
      line-height: 1.55;
      color: var(--color-text-secondary);
    }

    .card-arrow {
      margin-top: auto;
      padding-top: 0.75rem;
      color: var(--accent);
      font-weight: 700;
      font-size: 1.1rem;
    }

    .site-audit-footer {
      margin-top: 3rem;
      padding-top: 1.5rem;
      border-top: 1px solid color-mix(in srgb, var(--color-border) 70%, transparent);
      font-size: 0.82rem;
      color: var(--color-text-muted);
      line-height: 1.6;
    }

    .copyright-note {
      margin-top: 0.5rem;
    }

    .section-notice {
      margin-top: 1.5rem;
      padding: 0.85rem 1.1rem;
      background: color-mix(in srgb, var(--accent) 12%, transparent);
      border-radius: 8px;
      font-size: 0.88rem;
      color: var(--color-text-strong);
    }

    .text-link {
      color: var(--accent);
      font-weight: 700;
      text-decoration: underline;
    }
  </style>

  <HeroHeader
    text={aboutHero.text}
    subtitle={aboutHero.subtitle}
    backgroundImage={aboutHero.backgroundImage}
    compact={true}
  />

  <div class="stats-wrapper">
    <ContentCard>
      <div class="about-container">
        <!-- 原主题视觉头像与名片卡片 -->
        <article class="profile-card">
          <div class="profile-media">
            {
              profileAvatar ? (
                typeof profileAvatar === 'string' ? (
                  <img
                    class="avatar"
                    src={profileAvatar}
                    alt={profile.name}
                    width="440"
                    height="440"
                    loading="eager"
                    fetchpriority="high"
                  />
                ) : (
                  <Image
                    class="avatar"
                    src={profileAvatar}
                    alt={profile.name}
                    width={440}
                    height={440}
                    fit="cover"
                    format="webp"
                    quality={80}
                    loading="eager"
                    fetchpriority="high"
                  />
                )
              ) : (
                <div class="avatar-placeholder" aria-label={profile.name}>
                  {profileInitial}
                </div>
              )
            }
          </div>

          <div class="profile-content">
            <h1 class="profile-name">{profile.name}</h1>
            <div class="profile-title">{profile.title}</div>
            <p class="profile-bio">{profile.bio}</p>

            <div class="meta-row">
              {
                profile.location && (
                  <span class="meta-chip">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    {profile.location}
                  </span>
                )
              }
              {
                profile.email && (
                  <a class="meta-chip" href={profile.email.startsWith('mailto:') ? profile.email : \`mailto:\${profile.email}\`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                    {profile.email.replace(/^mailto:/, '')}
                  </a>
                )
              }
            </div>

            {
              socials.length > 0 && (
                <div class="social-row">
                  {socials.map((social) => (
                    <a
                      href={resolveSocialUrl(social.key, social.url)}
                      target={social.key === 'email' ? undefined : '_blank'}
                      rel={social.key === 'email' ? undefined : 'noreferrer'}
                      class="social-link"
                      title={social.label}
                    >
                      <span>{social.label}</span>
                    </a>
                  ))}
                </div>
              )
            }
          </div>
        </article>

        <!-- 专著级客观测评体系主体 -->
        <div class="monograph-wrapper">
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
        </div>
      </div>
    </ContentCard>
  </div>
</PageShell>
`;

fs.writeFileSync('src/pages/about.astro', newAboutAstro, 'utf8');
console.log('src/pages/about.astro successfully updated with exact theme profile header & monograph content!');
