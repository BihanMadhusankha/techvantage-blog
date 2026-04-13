"""Run this script to convert Outlook Lite shutdown blog images to WebP format."""
from PIL import Image
import os

imgs = [
    (
        r'C:\Users\BIHAN\.gemini\antigravity\brain\dcc760a0-d873-4764-aef2-c5d312103943\outlook_lite_shutdown_hero_1776066652777.png',
        r'G:\Affiliate PRojects\TechVantage\public\blog\outlook-lite-shutdown-hero.webp'
    ),
    (
        r'C:\Users\BIHAN\.gemini\antigravity\brain\dcc760a0-d873-4764-aef2-c5d312103943\outlook_mobile_upgrade_path_1776066673267.png',
        r'G:\Affiliate PRojects\TechVantage\public\blog\outlook-mobile-upgrade-path.webp'
    ),
    (
        r'C:\Users\BIHAN\.gemini\antigravity\brain\dcc760a0-d873-4764-aef2-c5d312103943\outlook_security_lockdown_1776068869731.png',
        r'G:\Affiliate PRojects\TechVantage\public\blog\outlook-security-lockdown.webp'
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

print('\nAll done! Images are ready.')
