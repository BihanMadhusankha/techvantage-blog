import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const srcDir = path.join('C:', 'Users', 'BIHAN', '.gemini', 'antigravity', 'brain', '16b1a4d5-d4f0-43b4-9876-5d95a64db444');
const destDir = path.join(__dirname, '..', 'public', 'blog');

const images = [
  {
    src: 'meta_muse_spark_hero_1775706701088.png',
    dest: 'meta-muse-spark-hero.webp',
  },
  {
    src: 'meta_health_ai_1775706719031.png',
    dest: 'meta-muse-spark-health.webp',
  },
  {
    src: 'meta_shopping_mode_1775706737570.png',
    dest: 'meta-muse-spark-shopping.webp',
  },
];

for (const { src, dest } of images) {
  const input = path.join(srcDir, src);
  const output = path.join(destDir, dest);
  await sharp(input).webp({ quality: 85 }).toFile(output);
  console.log(`✅ Converted: ${dest}`);
}

console.log('\n🎉 All images converted successfully!');
