import defaultBackground from '../assets/blog-placeholder-1.webp';

/**
 * Hero copy and background settings for one page.
 */
export interface HeroSectionConfig {
  /**
   * Main hero headline text.
   */
  text: string;
  /**
   * Optional hero subtitle text.
   */
  subtitle?: string;
  /**
   * Hero background image URL.
   */
  backgroundImage: string;
}

/**
 * Centralized hero configuration for all top-level pages and post fallback.
 */
export interface HeroConfig {
  home: HeroSectionConfig;
  blog: HeroSectionConfig;
  tags: HeroSectionConfig;
  about: HeroSectionConfig;
  /**
   * Default hero image shared by all article pages.
   */
  postDefaultBackground: string;
}

export const heroConfig: HeroConfig = {
  home: {
    text: '高速稳定的网络加速节点与评测指南',
    subtitle: '专注真实网络测试，提供优质节点推荐、协议对比与全平台客户端配置教程。',
    backgroundImage: defaultBackground.src,
  },
  blog: {
    text: '全部评测与技术文章',
    subtitle: '探索网络加速节点测评、协议深度解析与客户端实战指南。',
    backgroundImage: defaultBackground.src,
  },
  tags: {
    text: '文章标签与分类',
    subtitle: '按协议、地域与客户端快速检索网络评测与使用教程。',
    backgroundImage: defaultBackground.src,
  },
  about: {
    text: '关于我们',
    subtitle: '了解我们的客观测评标准、网络监控方法与站点愿景。',
    backgroundImage: defaultBackground.src,
  },
  postDefaultBackground: defaultBackground.src,
};
