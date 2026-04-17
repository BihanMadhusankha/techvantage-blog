from PIL import Image
import os

imgs = [
    (r'C:\Users\BIHAN\.gemini\antigravity\brain\eb6aa7eb-7b11-4297-98aa-cddefc3a48d6\claude_opus_hero_1776398192557.png', r'G:\Affiliate PRojects\TechVantage\public\blog\claude-opus-4-7-hero.webp'),
    (r'C:\Users\BIHAN\.gemini\antigravity\brain\eb6aa7eb-7b11-4297-98aa-cddefc3a48d6\claude_coding_ai_1776398208866.png', r'G:\Affiliate PRojects\TechVantage\public\blog\claude-coding-ai.webp'),
    (r'C:\Users\BIHAN\.gemini\antigravity\brain\eb6aa7eb-7b11-4297-98aa-cddefc3a48d6\claude_model_comparison_1776398227757.png', r'G:\Affiliate PRojects\TechVantage\public\blog\claude-model-comparison.webp')
]

for src, dst in imgs:
    img = Image.open(src)
    img.save(dst, 'WEBP', quality=85)
    print(f'Converted {dst}')
