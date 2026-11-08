import fs from 'node:fs';
import path from 'node:path';

// Helper to count Chinese characters
function countChinese(str) {
  return (str.match(/[\u4e00-\u9fa5]/g) || []).length;
}

console.log('Generating 5 monograph-grade pillar pages (>10,000 Chinese characters each)...');
