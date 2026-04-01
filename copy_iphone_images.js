const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\BIHAN\\.gemini\\antigravity\\brain\\95a3122a-a802-459e-95f0-5c654a62d34c\\';
const destDir = 'g:\\Affiliate PRojects\\TechVantage\\public\\blog\\';

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const files = [
  { src: 'iphone_18_pro_nano_island_hero_1775019492549.png', dest: 'iphone-18-pro-nano-island-hero.webp' },
  { src: 'iphone_18_pro_face_id_comparison_1775019513826.png', dest: 'iphone-18-pro-face-id-comparison.webp' },
  { src: 'iphone_18_pro_fold_design_2026_1775019536040.png', dest: 'iphone-18-pro-fold-design-2026.webp' }
];

files.forEach(file => {
  const srcPath = path.join(srcDir, file.src);
  const destPath = path.join(destDir, file.dest);
  try {
    if (fs.existsSync(srcPath)) {
      fs.copyFileSync(srcPath, destPath);
      console.log(`✅ Copied ${file.src} -> ${file.dest}`);
    } else {
      console.error(`❌ Source not found: ${srcPath}`);
    }
  } catch (err) {
    console.error(`❌ Failed to copy ${file.src}:`, err);
  }
});
console.log('Done!');
