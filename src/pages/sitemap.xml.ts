import { siteUrl } from '../config/site';

export const prerender = true;

export function GET() {
  const sitemap0Url = new URL('sitemap-0.xml', siteUrl).toString();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${sitemap0Url}</loc>
  </sitemap>
</sitemapindex>
`;

  return new Response(xml.trim(), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
