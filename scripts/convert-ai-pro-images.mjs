/**
 * Run this script ONCE to convert the generated PNG images to WebP
 * and copy them to the public/blog directory.
 *
 * Usage: node scripts/convert-ai-pro-images.mjs
 * Requires: npm install -D sharp   (if not already installed)
 */
import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const srcDir = path.join('C:', 'Users', 'BIHAN', '.gemini', 'antigravity', 'brain', 'f06710ed-e712-4e3b-90de-a744ae9655c9');
const destDir = path.join(__dirname, '..', 'public', 'blog');

const images = [
  {
    src: 'google_ai_pro_5tb_hero_1775107885862.png',
    dest: 'google-ai-pro-5tb-storage-hero.webp',
  },
  {
    src: 'google_ai_pro_storage_tiers_1775107900997.png',
    dest: 'google-ai-pro-storage-tiers-comparison.webp',
  },
  {
    src: 'google_ai_pro_ecosystem_1775107918759.png',
    dest: 'google-ai-pro-ecosystem-gmail-drive-photos.webp',
  },
];

for (const { src, dest } of images) {
  const input = path.join(srcDir, src);
  const output = path.join(destDir, dest);
  await sharp(input).webp({ quality: 85 }).toFile(output);
  console.log(`✅ Converted: ${dest}`);
}

console.log('\n🎉 All images converted successfully!');
