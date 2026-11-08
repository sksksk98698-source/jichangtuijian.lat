import type { ImageMetadata } from 'astro';
import defaultAvatar from '../assets/profile.jpg';

/**
 * Allowed social entry keys in profile configuration.
 */
export type ProfileSocialKey = 'github' | 'x' | 'email' | 'website';

/**
 * One social link item rendered on `/about`.
 */
export interface ProfileSocialLink {
  key: ProfileSocialKey;
  label: string;
  url: string;
}

/**
 * Personal profile settings used by About page and article author schema.
 */
export interface ProfileConfig {
  /**
   * Optional avatar URL for About page and structured data.
   */
  avatar?: string | ImageMetadata;
  /**
   * Display name used across the site.
   */
  name: string;
  /**
   * Short headline/title shown on About page.
   */
  title: string;
  /**
   * Short bio text shown on About page and in schema.
   */
  bio: string;
  /**
   * Optional location text.
   */
  location?: string;
  /**
   * Optional contact email.
   */
  email?: string;
  /**
   * Personal GitHub profile URL (separate from repo URL).
   */
  githubProfileUrl: string;
  /**
   * Social links displayed in About page social row.
   */
  socials: ProfileSocialLink[];
}

export const profileConfig: ProfileConfig = {
  avatar: defaultAvatar,
  name: '网络评测团队',
  title: '网络性能分析 & 节点测评工程师',
  bio: '深入探索全球高速网络连接技术，持续输出客观中立的网络服务评测、真实延迟与吞吐量测速报告，以及全平台网络客户端配置指南。',
  location: 'Global / Singapore',
  email: 'contact@jichangtuijian.lat',
  githubProfileUrl: '',
  socials: [
    { key: 'website', label: '本站首页', url: '/' },
    { key: 'email', label: '邮件联系', url: 'mailto:contact@jichangtuijian.lat' },
  ],
};
