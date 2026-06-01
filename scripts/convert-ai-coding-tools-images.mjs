/**
 * Run this script ONCE to convert the generated PNG images to WebP
 * and copy them to the public/blog/top-ai-coding-tools-2026 directory.
 *
 * Usage: node scripts/convert-ai-coding-tools-images.mjs
 */
import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const srcDir = path.join(__dirname, '..', 'public', 'blog', 'top-ai-coding-tools-2026');
const destDir = path.join(__dirname, '..', 'public', 'blog', 'top-ai-coding-tools-2026');

const images = [
  {
    src: 'ai_coding_tools_2026_hero.png',
    dest: 'ai_coding_tools_2026_hero.webp',
  },
  {
    src: 'ai_coding_tools_comparison_2026.png',
    dest: 'ai_coding_tools_comparison_2026.webp',
  },
  {
    src: 'ai_coding_winning_combos_2026.png',
    dest: 'ai_coding_winning_combos_2026.webp',
  },
];

for (const { src, dest } of images) {
  const input = path.join(srcDir, src);
  const output = path.join(destDir, dest);
  await sharp(input).webp({ quality: 85 }).toFile(output);
  console.log(`✅ Converted: ${dest}`);
}

console.log('\n🎉 All images converted successfully!');
