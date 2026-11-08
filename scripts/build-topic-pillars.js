import fs from 'fs';
import path from 'path';

// 确保目录存在
const dirs = [
  'src/pages/reviews',
  'src/pages/trials',
  'src/pages/warnings',
  'src/pages/faq',
  'src/pages/free-nodes'
];
dirs.forEach(d => {
  if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true });
});

console.log('Topic directories initialized.');
