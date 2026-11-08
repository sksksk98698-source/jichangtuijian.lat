import fs from 'fs';
const html = fs.readFileSync('dist/index.html', 'utf8');
const count = (html.match(/top-brand-card/g) || []).length;
console.log('Total brand cards in dist/index.html:', count);
