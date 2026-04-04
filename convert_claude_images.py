"""Run this script once to convert Claude Code blog images to WebP format."""
from PIL import Image
import os

imgs = [
    (
        r'C:\Users\BIHAN\.gemini\antigravity\brain\6a18372c-b5bc-405f-8be8-b0a1505963ae\claude_code_leak_hero_1775190635340.png',
        r'G:\Affiliate PRojects\TechVantage\public\blog\claude-code-leak-hero.webp'
    ),
    (
        r'C:\Users\BIHAN\.gemini\antigravity\brain\6a18372c-b5bc-405f-8be8-b0a1505963ae\claude_code_kairos_autodream_1775190655362.png',
        r'G:\Affiliate PRojects\TechVantage\public\blog\claude-code-kairos-autodream.webp'
    ),
    (
        r'C:\Users\BIHAN\.gemini\antigravity\brain\6a18372c-b5bc-405f-8be8-b0a1505963ae\claude_code_features_overview_1775190677312.png',
        r'G:\Affiliate PRojects\TechVantage\public\blog\claude-code-features-overview.webp'
    ),
    (
        r'C:\Users\BIHAN\.gemini\antigravity\brain\9ee669ff-19c2-441b-be33-af7934b26d3a\quantum_supply_chain_hero_1775276870399.png',
        r'G:\Affiliate PRojects\TechVantage\public\blog\quantum-supply-chain-hero.webp'
    ),
    (
        r'C:\Users\BIHAN\.gemini\antigravity\brain\9ee669ff-19c2-441b-be33-af7934b26d3a\quantum_semiconductor_manufacturing_1775276888786.png',
        r'G:\Affiliate PRojects\TechVantage\public\blog\quantum-semiconductor-manufacturing.webp'
    ),
]

for src, dst in imgs:
    if not os.path.exists(src):
        print(f'ERROR: source not found: {src}')
        continue
    img = Image.open(src)
    img.save(dst, 'WEBP', quality=85)
    size_kb = os.path.getsize(dst) // 1024
    print(f'✅ Saved ({size_kb}KB): {os.path.basename(dst)}')

print('\nAll done! You can now delete this script.')
