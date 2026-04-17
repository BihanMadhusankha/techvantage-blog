from PIL import Image
import os

imgs = [
    (r'C:\Users\BIHAN\.gemini\antigravity\brain\eb6aa7eb-7b11-4297-98aa-cddefc3a48d6\claude_opus_hero_v2_1776398616844.png', r'G:\Affiliate PRojects\TechVantage\public\blog\claude-opus-4-7-hero.webp'),
    (r'C:\Users\BIHAN\.gemini\antigravity\brain\eb6aa7eb-7b11-4297-98aa-cddefc3a48d6\claude_coding_ai_v2_1776398634347.png', r'G:\Affiliate PRojects\TechVantage\public\blog\claude-coding-ai.webp'),
    (r'C:\Users\BIHAN\.gemini\antigravity\brain\eb6aa7eb-7b11-4297-98aa-cddefc3a48d6\claude_model_chart_1776398651648.png', r'G:\Affiliate PRojects\TechVantage\public\blog\claude-model-comparison.webp')
]

for src, dst in imgs:
    img = Image.open(src)
    w, h = img.size
    
    # Target 16:9 aspect ratio
    target_aspect = 16 / 9
    current_aspect = w / h
    
    if current_aspect > target_aspect:
        # Image is too wide, crop width
        new_w = int(h * target_aspect)
        left = (w - new_w) / 2
        right = w - left
        img = img.crop((left, 0, right, h))
    elif current_aspect < target_aspect:
        # Image is too tall, crop height
        new_h = int(w / target_aspect)
        top = (h - new_h) / 2
        bottom = h - top
        img = img.crop((0, top, w, bottom))
        
    img.save(dst, 'WEBP', quality=85)
    print(f'Converted and cropped (16:9) {dst}')
