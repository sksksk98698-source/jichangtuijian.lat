/**
 * Site-level settings shared by header, SEO tags, and feed generation.
 */
export interface SiteConfig {
  /**
   * Canonical production URL of this site.
   */
  siteUrl: string;
  /**
   * Global site title used in header and metadata.
   */
  siteTitle: string;
  /**
   * Optional suffix appended to browser/SEO page titles.
   */
  siteTitleSuffix: string;
  /**
   * Default site description used by index and RSS metadata.
   */
  siteDescription: string;
  /**
   * BCP-47 locale tag (for example: zh-CN, en-US).
   */
  locale: string;
  /**
   * Repository URL shown in the header action area (optional).
   */
  headerGithubRepoUrl: string;
  /**
   * Global favicon ico path served from the public directory.
   */
  faviconIco: string;
}

export const siteConfig: SiteConfig = {
  siteUrl: 'https://jichangtuijian.lat',
  siteTitle: '机场推荐',
  siteTitleSuffix: '高速稳定网络加速与节点评测指南',
  siteDescription: '专注于高速稳定的网络加速节点、优质机场推荐、全平台客户端配置与性能评测，为您提供权威客观的网络加速指南与使用技巧。',
  locale: 'zh-CN',
  headerGithubRepoUrl: '',
  faviconIco: '/favicon.ico',
};

export const { siteUrl, siteTitle, siteTitleSuffix, siteDescription, locale, headerGithubRepoUrl, faviconIco } = siteConfig;

export interface SearchEngineVerification {
  google?: string;
  bing?: string;
  baidu?: string;
  shenma?: string;
}

/**
 * 搜索引擎站长平台所有权验证 Meta 占位。
 * 当用户提供验证码后，直接在此处填入字符串即可在全站 <head> 中自动输出对应验证标签。
 */
export const verificationConfig: SearchEngineVerification = {
  google: '', // Google Search Console: <meta name="google-site-verification" content="..." />
  bing: '',   // Bing Webmaster Tools: <meta name="msvalidate.01" content="..." />
  baidu: '',  // 百度搜索资源平台: <meta name="baidu-site-verification" content="..." />
  shenma: '', // 神马站长平台: <meta name="shenma-site-verification" content="..." />
};

