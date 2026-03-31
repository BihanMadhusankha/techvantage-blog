const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\BIHAN\\.gemini\\antigravity\\brain\\5c27a863-8ebb-450c-9f60-5daf6769a9e6\\';
const destDir = 'g:\\Affiliate PRojects\\TechVantage\\public\\blog\\';

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const files = [
  { src: 'critique_logic_visualization_1774935218966.png', dest: 'microsoft-copilot-cowork-critique-logic-2026.webp' },
  { src: 'council_dashboard_ui_1774935246608.png', dest: 'microsoft-copilot-cowork-council-dashboard-2026.webp' },
  { src: 'agentic_coworker_workflow_1774935267543.png', dest: 'microsoft-copilot-cowork-agentic-coworker-2026.webp' }
];

files.forEach(file => {
  const srcPath = path.join(srcDir, file.src);
  const destPath = path.join(destDir, file.dest);
  try {
    if (fs.existsSync(srcPath)) {
      fs.copyFileSync(srcPath, destPath);
      console.log(`Copied ${file.src} to ${file.dest}`);
    } else {
      console.error(`Source file not found: ${srcPath}`);
    }
  } catch (err) {
    console.error(`Failed to copy ${file.src}:`, err);
  }
});
