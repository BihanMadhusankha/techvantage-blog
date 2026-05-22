const sharp = require('sharp');
const fs = require('fs');

async function convert(infile, outfile) {
    try {
        await sharp(infile).webp({ quality: 88 }).toFile(outfile);
        console.log(`Successfully converted ${infile} to ${outfile}`);
    } catch (err) {
        console.error(`Error converting ${infile}:`, err);
    }
}

Promise.all([
    convert('C:\\Users\\BIHAN\\.gemini\\antigravity\\brain\\fe963500-ee42-4125-b9f8-edc37c21cccc\\ps6_price_hero_1775969086074.png', 'g:\\Affiliate PRojects\\TechVantage\\public\\blog\\ps6-price-hero.webp'),
    convert('C:\\Users\\BIHAN\\.gemini\\antigravity\\brain\\fe963500-ee42-4125-b9f8-edc37c21cccc\\ps6_price_poll_chart_1775969102749.png', 'g:\\Affiliate PRojects\\TechVantage\\public\\blog\\ps6-price-poll-chart.webp'),
    convert('C:\\Users\\BIHAN\\.gemini\\antigravity\\brain\\fe963500-ee42-4125-b9f8-edc37c21cccc\\ps6_specs_hardware_1775969116306.png', 'g:\\Affiliate PRojects\\TechVantage\\public\\blog\\ps6-specs-hardware.webp')
]).then(() => console.log('All conversions done.'));
