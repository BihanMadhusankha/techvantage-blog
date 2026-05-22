import os
import shutil
from PIL import Image

src_path = r"C:\Users\BIHAN\.gemini\antigravity\brain\8d266cda-bb9c-4204-9225-231c627f2025\abstract_tech_hero_banner_1777480060318.png"
target_dir = r"g:\Affiliate PRojects\TechVantage\public\hero"
os.makedirs(target_dir, exist_ok=True)
dest_path = os.path.join(target_dir, "tech_hero_banner.webp")

try:
    with Image.open(src_path) as img:
        img = img.convert("RGB")
        img.save(dest_path, "WEBP", quality=85)
        print(f"Successfully saved {dest_path}")
except Exception as e:
    print(f"Error processing {src_path}: {e}")
