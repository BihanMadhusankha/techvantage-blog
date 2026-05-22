import sharp from 'sharp';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const srcDir = path.join('C:', 'Users', 'BIHAN', '.gemini', 'antigravity-ide', 'brain', 'c85522e8-2cb4-45f2-979b-dbd946b92675');
const destDir = path.join(__dirname, '..', 'public', 'blog', 'spacex-xai-grok-us-government-adoption-analysis');

// Ensure destination directory exists
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
  console.log(`📁 Created directory: ${destDir}`);
}

const images = [
  {
    src: 'grok_government_fail_hero_1779473539173.png',
    dest: 'grok_government_fail_hero.webp',
  },
  {
    src: 'ai_models_market_share_1779473560069.png',
    dest: 'ai_models_market_share.webp',
  },
  {
    src: 'spacex_xai_valuation_1779473576843.png',
    dest: 'spacex_xai_valuation.webp',
  },
];

for (const { src, dest } of images) {
  const input = path.join(srcDir, src);
  const output = path.join(destDir, dest);
  if (fs.existsSync(input)) {
    await sharp(input).webp({ quality: 80 }).toFile(output);
    console.log(`✅ Converted & Optimized: ${dest}`);
  } else {
    console.error(`❌ Source file not found: ${input}`);
  }
}

console.log('\n🎉 Grok blog post images converted successfully!');
