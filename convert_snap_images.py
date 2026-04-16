from PIL import Image
import os

imgs = [
    (r'C:\Users\BIHAN\.gemini\antigravity\brain\cdab707a-42bf-412f-960f-432f421531af\snap_layoff_hero_1776338465106.png', r'G:\Affiliate PRojects\TechVantage\public\blog\snap-layoff-hero.webp'),
    (r'C:\Users\BIHAN\.gemini\antigravity\brain\cdab707a-42bf-412f-960f-432f421531af\irenic_capital_impact_1776338482183.png', r'G:\Affiliate PRojects\TechVantage\public\blog\irenic-capital-impact.webp'),
    (r'C:\Users\BIHAN\.gemini\antigravity\brain\cdab707a-42bf-412f-960f-432f421531af\ai_replacing_jobs_1776338500306.png', r'G:\Affiliate PRojects\TechVantage\public\blog\ai-replacing-jobs.webp')
]

for src, dst in imgs:
    img = Image.open(src)
    img.save(dst, 'WEBP', quality=85)
    print(f'Converted {dst}')
