import fs from 'node:fs';
import path from 'node:path';

const distDir = path.resolve('dist');

function getAllHtmlFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getAllHtmlFiles(filePath, fileList);
    } else if (file.endsWith('.html')) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

const htmlFiles = getAllHtmlFiles(distDir);
console.log(`Total HTML files in dist: ${htmlFiles.length}`);

// Audit Report Data
const auditData = {
  totalHtmlPages: htmlFiles.length,
  canonicalIssues: [],
  outboundLinksWithoutNofollow: [],
  emptyAnchorTags: [],
  internalDeadLinks: [],
  thinContentPages: [],
  schemaErrors: [],
  titleIssues: { missing: [], duplicates: {} },
  descriptionIssues: { missing: [], duplicates: {} },
  trackingCodeAudit: [],
  infrastructureLeaks: [],
};

// Existing paths set for fast link checking
const existingPaths = new Set();
for (const file of htmlFiles) {
  let relative = path.relative(distDir, file).replace(/\\/g, '/');
  if (relative.endsWith('index.html')) {
    let route = '/' + relative.replace(/index\.html$/, '');
    existingPaths.add(route);
    if (route.endsWith('/') && route.length > 1) {
      existingPaths.add(route.slice(0, -1));
    }
  } else {
    existingPaths.add('/' + relative);
  }
}

// Global sets for duplicate checks
const titleMap = new Map();
const descMap = new Map();

for (const file of htmlFiles) {
  const content = fs.readFileSync(file, 'utf-8');
  const relativePath = path.relative(distDir, file).replace(/\\/g, '/');
  const pageUrl = '/' + relativePath.replace(/index\.html$/, '');

  // 1. Check Canonical
  const canonicalMatch = content.match(/<link[^>]+rel=["']canonical["'][^>]*href=["']([^"']+)["']/i) ||
                         content.match(/<link[^>]+href=["']([^"']+)["'][^>]*rel=["']canonical["']/i);
  if (!canonicalMatch) {
    auditData.canonicalIssues.push({ pageUrl, issue: 'Missing canonical link' });
  } else {
    const canonicalHref = canonicalMatch[1];
    if (!canonicalHref.startsWith('https://jichangtuijian.lat')) {
      auditData.canonicalIssues.push({ pageUrl, canonicalHref, issue: 'Canonical not pointing to official domain https://jichangtuijian.lat' });
    }
  }

  // 2. Check Title
  const titleMatch = content.match(/<title>([^<]*)<\/title>/i);
  if (!titleMatch || !titleMatch[1].trim()) {
    auditData.titleIssues.missing.push(pageUrl);
  } else {
    const t = titleMatch[1].trim();
    if (!titleMap.has(t)) titleMap.set(t, []);
    titleMap.get(t).push(pageUrl);
  }

  // 3. Check Description
  const descMatch = content.match(/<meta[^>]+name=["']description["'][^>]*content=["']([^"']*)["']/i) ||
                    content.match(/<meta[^>]+content=["']([^"']*)["'][^>]*name=["']description["']/i);
  if (!descMatch || !descMatch[1].trim()) {
    auditData.descriptionIssues.missing.push(pageUrl);
  } else {
    const d = descMatch[1].trim();
    if (!descMap.has(d)) descMap.set(d, []);
    descMap.get(d).push(pageUrl);
  }

  // 4. Check Outbound links (Commercial / Affiliate & External)
  const anchorRegex = /<a\s+([^>]+)>/gi;
  let match;
  while ((match = anchorRegex.exec(content)) !== null) {
    const attrs = match[1];
    const hrefMatch = attrs.match(/href=["']([^"']*)["']/i);
    const relMatch = attrs.match(/rel=["']([^"']*)["']/i);

    if (!hrefMatch) {
      auditData.emptyAnchorTags.push({ pageUrl, snippet: match[0], issue: 'Anchor tag without href' });
      continue;
    }

    const href = hrefMatch[1].trim();
    const rel = relMatch ? relMatch[1].toLowerCase() : '';

    if (!href || href === '#') {
      // Check if it has aria-label or role, or just empty
      if (!attrs.includes('data-') && !attrs.includes('role="button"')) {
        auditData.emptyAnchorTags.push({ pageUrl, snippet: match[0], issue: 'Empty or hash-only href' });
      }
      continue;
    }

    // Check external commercial links
    if (href.startsWith('http://') || href.startsWith('https://')) {
      if (!href.startsWith('https://jichangtuijian.lat') && !href.startsWith('http://localhost')) {
        // External link
        const isAffiliate = href.includes('aff') || href.includes('code=') || href.includes('ref=') || href.includes('channel=');
        const hasNofollow = rel.includes('nofollow');
        const hasSponsored = rel.includes('sponsored');

        if (isAffiliate && (!hasNofollow || !hasSponsored)) {
          auditData.outboundLinksWithoutNofollow.push({
            pageUrl,
            href,
            rel,
            issue: 'Commercial/Affiliate outbound link missing nofollow or sponsored'
          });
        }
      }
    } else if (href.startsWith('/') && !href.startsWith('//')) {
      // Internal Link Check
      const cleanHref = href.split('#')[0].split('?')[0];
      if (cleanHref && cleanHref !== '/' && !cleanHref.endsWith('.xml') && !cleanHref.endsWith('.png') && !cleanHref.endsWith('.jpg') && !cleanHref.endsWith('.svg') && !cleanHref.endsWith('.webp') && !cleanHref.endsWith('.json')) {
        const normalizedHref = cleanHref.endsWith('/') ? cleanHref : cleanHref + '/';
        if (!existingPaths.has(cleanHref) && !existingPaths.has(normalizedHref)) {
          auditData.internalDeadLinks.push({ pageUrl, href, issue: 'Internal dead link (404)' });
        }
      }
    }
  }

  // 5. Check Content Word Count (Pure Chinese Chars)
  const pureChinese = (content.match(/[\u4e00-\u9fa5]/g) || []).length;
  // Exclude list/index/tags utility pages from thin content warning
  const isUtilityPage = pageUrl.startsWith('/tags') || pageUrl.startsWith('/blog/page') || pageUrl === '/search/' || pageUrl === '/404/';
  if (!isUtilityPage && pureChinese < 600) {
    auditData.thinContentPages.push({ pageUrl, chineseCharCount: pureChinese });
  }

  // 6. JSON-LD Check
  const jsonLdRegex = /<script\s+type=["']application\/ld\+json["']>([\s\S]*?)<\/script>/gi;
  let jsonLdMatch;
  while ((jsonLdMatch = jsonLdRegex.exec(content)) !== null) {
    try {
      const parsed = JSON.parse(jsonLdMatch[1]);
      if (!parsed['@context']) {
        auditData.schemaErrors.push({ pageUrl, issue: 'JSON-LD missing @context' });
      }
    } catch (err) {
      auditData.schemaErrors.push({ pageUrl, issue: `Invalid JSON-LD syntax: ${err.message}` });
    }
  }

  // 7. Security / Infrastructure Exposure Check
  if (content.includes('C:\\Users\\') || content.includes('/home/') || content.match(/\b192\.168\.\d+\.\d+\b/)) {
    // Check if it's within article text explaining private IPs or true leakage
    // Only flag if outside normal technical tutorial text
    const leakMatch = content.match(/C:[\\\/]Users[\\\/][a-zA-Z0-9_\-\.]+/);
    if (leakMatch) {
      auditData.infrastructureLeaks.push({ pageUrl, leak: leakMatch[0], issue: 'Local filesystem absolute path leaked' });
    }
  }
}

// Record duplicate titles (>1 page)
for (const [title, pages] of titleMap.entries()) {
  if (pages.length > 1) {
    auditData.titleIssues.duplicates[title] = pages;
  }
}

// Record duplicate descriptions (>1 page)
for (const [desc, pages] of descMap.entries()) {
  if (pages.length > 1) {
    auditData.descriptionIssues.duplicates[desc] = pages;
  }
}

console.log('--- AUDIT RESULTS SUMMARY ---');
console.log(`Canonical issues: ${auditData.canonicalIssues.length}`);
console.log(`Outbound commercial links missing nofollow/sponsored: ${auditData.outboundLinksWithoutNofollow.length}`);
console.log(`Empty anchor tags: ${auditData.emptyAnchorTags.length}`);
console.log(`Internal dead links: ${auditData.internalDeadLinks.length}`);
console.log(`Thin content pages (<600 Chinese chars, non-utility): ${auditData.thinContentPages.length}`);
console.log(`Schema JSON-LD errors: ${auditData.schemaErrors.length}`);
console.log(`Missing titles: ${auditData.titleIssues.missing.length}`);
console.log(`Duplicate titles: ${Object.keys(auditData.titleIssues.duplicates).length}`);
console.log(`Missing descriptions: ${auditData.descriptionIssues.missing.length}`);
console.log(`Duplicate descriptions: ${Object.keys(auditData.descriptionIssues.duplicates).length}`);
console.log(`Local path leaks: ${auditData.infrastructureLeaks.length}`);

fs.writeFileSync('scripts/audit-raw-data.json', JSON.stringify(auditData, null, 2), 'utf-8');
console.log('Audit data saved to scripts/audit-raw-data.json');
