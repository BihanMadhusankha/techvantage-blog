const sharp = require('sharp');
const fs = require('fs');

async function convert(infile, outfile) {
    try {
        await sharp(infile).webp().toFile(outfile);
        console.log(`Successfully converted ${infile} to ${outfile}`);
    } catch (err) {
        console.error(`Error converting ${infile}:`, err);
    }
}

Promise.all([
    convert('C:\\Users\\BIHAN\\.gemini\\antigravity\\brain\\b5bb00c6-9227-4dd7-b6f5-09a1b019f6d3\\tcl_nxtpaper_hero_1775796834863.png', 'g:\\Affiliate PRojects\\TechVantage\\public\\blog\\tcl-nxtpaper-hero.webp'),
    convert('C:\\Users\\BIHAN\\.gemini\\antigravity\\brain\\b5bb00c6-9227-4dd7-b6f5-09a1b019f6d3\\tcl_nxtpaper_sunlight_1775796852050.png', 'g:\\Affiliate PRojects\\TechVantage\\public\\blog\\tcl-nxtpaper-sunlight.webp'),
    convert('C:\\Users\\BIHAN\\.gemini\\antigravity\\brain\\b5bb00c6-9227-4dd7-b6f5-09a1b019f6d3\\tcl_nxtpaper_switch_1775796867534.png', 'g:\\Affiliate PRojects\\TechVantage\\public\\blog\\tcl-nxtpaper-switch.webp')
]).then(() => console.log('All conversions done.'));
