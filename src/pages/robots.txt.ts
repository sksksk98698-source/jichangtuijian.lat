import { siteUrl } from '../config/site';

export const prerender = true;

function buildRobotsTxt() {
  const sitemapIndexUrl = new URL('sitemap-index.xml', siteUrl).toString();
  const sitemapXmlUrl = new URL('sitemap.xml', siteUrl).toString();

  return [
    'User-agent: *',
    'Allow: /',
    'Disallow: /search-index.json',
    '',
    'User-agent: Googlebot',
    'Allow: /',
    '',
    'User-agent: bingbot',
    'Allow: /',
    '',
    'User-agent: Baiduspider',
    'Allow: /',
    '',
    'User-agent: yisouspider',
    'Allow: /',
    '',
    `Sitemap: ${sitemapIndexUrl}`,
    `Sitemap: ${sitemapXmlUrl}`,
    '',
  ].join('\n');
}

export function GET() {
  return new Response(buildRobotsTxt(), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
