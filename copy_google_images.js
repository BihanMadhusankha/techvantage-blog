const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\BIHAN\\.gemini\\antigravity\\brain\\95a3122a-a802-459e-95f0-5c654a62d34c\\';
const destDir = 'g:\\Affiliate PRojects\\TechVantage\\public\\blog\\';

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const files = [
  { src: 'google_ai_pro_5tb_hero_1775109688848.png', dest: 'google-ai-pro-5tb-hero.webp' },
  { src: 'google_ai_pro_plan_comparison_1775109702525.png', dest: 'google-ai-pro-plan-comparison.webp' },
  { src: 'google_drive_photos_gmail_5tb_1775109713419.png', dest: 'google-drive-photos-gmail-5tb.webp' }
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
