/**
 * Script to add AdPlaceholder banners to all custom blog post pages.
 * 
 * Strategy:
 * 1. Add import for AdPlaceholder at the top of each file
 * 2. Add a header banner after the hero image section 
 * 3. Add an in-article banner roughly mid-content (before FAQ or Verdict)
 * 4. Add a sidebar/footer banner before the related posts footer
 */

const fs = require('fs');
const path = require('path');

const BLOG_DIR = path.join(__dirname, '..', 'src', 'app', 'blog');

// Get all blog post directories (skip [slug])
const dirs = fs.readdirSync(BLOG_DIR).filter(d => {
  const fullPath = path.join(BLOG_DIR, d);
  return fs.statSync(fullPath).isDirectory() && d !== '[slug]';
});

const AD_IMPORT = `import { AdPlaceholder } from '@/components/ads/AdPlaceholder';`;

// Header ad banner - placed after the hero image
const HEADER_AD = `
        {/* Advertisement Banner */}
        <AdPlaceholder type="header" />
`;

// In-article ad banner  
const CONTENT_AD = `
        {/* In-Article Advertisement */}
        <AdPlaceholder type="content" description="In-Article Advertisement" />
`;

// Footer ad banner - before related posts
const FOOTER_AD = `
      {/* Advertisement Before Related Posts */}
      <AdPlaceholder type="content" description="Post-Article Advertisement" />
`;

let successCount = 0;
let skipCount = 0;
let errorCount = 0;

dirs.forEach(dir => {
  const filePath = path.join(BLOG_DIR, dir, 'page.tsx');
  
  if (!fs.existsSync(filePath)) {
    console.log(`SKIP: ${dir}/page.tsx not found`);
    skipCount++;
    return;
  }

  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Skip if already has AdPlaceholder
  if (content.includes('AdPlaceholder')) {
    console.log(`SKIP: ${dir}/page.tsx already has AdPlaceholder`);
    skipCount++;
    return;
  }

  try {
    // 1. Add import
    // Find the last import line and add our import after it
    const importLines = content.split('\n');
    let lastImportIndex = -1;
    for (let i = 0; i < importLines.length; i++) {
      if (importLines[i].startsWith('import ') || importLines[i].startsWith("import {")) {
        lastImportIndex = i;
      }
      // Stop searching after we hit non-import content
      if (lastImportIndex >= 0 && !importLines[i].startsWith('import') && importLines[i].trim() !== '' && !importLines[i].includes('from ')) {
        break;
      }
    }
    
    if (lastImportIndex === -1) {
      console.log(`ERROR: ${dir}/page.tsx - could not find import section`);
      errorCount++;
      return;
    }

    importLines.splice(lastImportIndex + 1, 0, AD_IMPORT);
    content = importLines.join('\n');

    // 2. Add header ad after hero image
    // Look for the closing of the hero image div - common pattern: rounded-3xl or rounded-[2.5rem] with group
    // Find the prose section start and add ad before it
    const proseMatch = content.match(/(<div className="prose)/);
    if (proseMatch) {
      const proseIndex = content.indexOf(proseMatch[0]);
      content = content.slice(0, proseIndex) + HEADER_AD + '\n      ' + content.slice(proseIndex);
    }

    // 3. Add in-article ad before FAQ section or Verdict section
    // Look for FAQ section or "TechVantage Verdict" or "Key Takeaways"
    const faqPattern = /{\/\* FAQ Section \*\/}/;
    const verdictPattern = /{\/\* Verdict/;
    const keyTakeawaysPattern = /{\/\* Key Takeaways/;
    const tagsPattern = /{\/\* Tags \*\/}/;
    
    let insertBeforePattern = null;
    let insertMatch = null;
    
    // Try each pattern in order of preference
    for (const pattern of [faqPattern, verdictPattern, keyTakeawaysPattern, tagsPattern]) {
      insertMatch = content.match(pattern);
      if (insertMatch) {
        insertBeforePattern = pattern;
        break;
      }
    }

    if (insertMatch) {
      const insertIndex = content.indexOf(insertMatch[0]);
      content = content.slice(0, insertIndex) + CONTENT_AD + '\n      ' + content.slice(insertIndex);
    }

    // 4. Add footer ad before related posts
    // Look for the <footer> tag
    const footerMatch = content.match(/(<footer className=)/);
    if (footerMatch) {
      const footerIndex = content.indexOf(footerMatch[0]);
      content = content.slice(0, footerIndex) + FOOTER_AD + '\n      ' + content.slice(footerIndex);
    }

    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`✅ DONE: ${dir}/page.tsx`);
    successCount++;
  } catch (err) {
    console.log(`ERROR: ${dir}/page.tsx - ${err.message}`);
    errorCount++;
  }
});

console.log(`\n========================================`);
console.log(`Results: ${successCount} updated, ${skipCount} skipped, ${errorCount} errors`);
console.log(`========================================`);
