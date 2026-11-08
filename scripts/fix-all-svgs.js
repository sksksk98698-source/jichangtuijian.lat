import fs from 'fs';
import path from 'path';

function walk(dir) {
  let files = [];
  for (const f of fs.readdirSync(dir)) {
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) files = files.concat(walk(p));
    else if (p.endsWith('.astro') || p.endsWith('.vue') || p.endsWith('.svelte')) files.push(p);
  }
  return files;
}

const allFiles = walk('src');
let count = 0;

for (const file of allFiles) {
  let content = fs.readFileSync(file, 'utf8');
  let modified = false;

  // Replace <svg> that lacks width/height
  content = content.replace(/<svg\b([^>]*?)>/gi, (match, attrs) => {
    // If it's mermaid or already has width/height, skip
    if (attrs.includes('width=') && attrs.includes('height=')) return match;
    if (attrs.includes('mermaid')) return match;

    modified = true;
    count++;
    console.log(`Fixing SVG in: ${file}`);

    // If it has class search-icon, give width 18 height 18
    if (attrs.includes('search-icon')) {
      return `<svg width="18" height="18" style="width: 18px; height: 18px; flex-shrink: 0;" ${attrs.trim()}>`;
    }
    // If it's tag-meta-item or post-meta-item or similar, give width 14 height 14
    return `<svg width="14" height="14" style="width: 14px; height: 14px; flex-shrink: 0;" ${attrs.trim()}>`;
  });

  if (modified) {
    fs.writeFileSync(file, content, 'utf8');
  }
}

// Also add a defensive rule in src/styles/global.css so no SVG can ever explode again
let globalCss = fs.readFileSync('src/styles/global.css', 'utf8');
if (!globalCss.includes('/* DEFENSIVE_SVG_PROTECTION */')) {
  const protection = `
/* DEFENSIVE_SVG_PROTECTION */
svg:not(.mermaid-diagram__canvas svg):not([width]) {
  width: 1rem !important;
  height: 1rem !important;
  max-width: 1rem !important;
  max-height: 1rem !important;
  flex-shrink: 0;
}
.tag-meta-item svg,
.post-meta-item svg,
.meta-chip svg,
.meta-item svg {
  width: 14px !important;
  height: 14px !important;
  max-width: 14px !important;
  max-height: 14px !important;
  flex-shrink: 0 !important;
  display: inline-block !important;
  vertical-align: middle !important;
}
`;
  globalCss += protection;
  fs.writeFileSync('src/styles/global.css', globalCss, 'utf8');
  console.log('Added global defensive SVG protection rule to src/styles/global.css!');
}

console.log(`Fixed ${count} SVGs across codebase!`);
