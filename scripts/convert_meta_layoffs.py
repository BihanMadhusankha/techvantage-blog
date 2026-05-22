import sys
import shutil
import os
from PIL import Image

brain_dir = r"C:\Users\BIHAN\.gemini\antigravity\brain\27e9f08d-d4eb-4dde-b2b0-61a6cce7ccc1"
public_blog_dir = r"g:\Affiliate PRojects\TechVantage\public\blog\meta-ai-layoffs-10-percent-2026"

files_to_process = {
    "meta_ai_layoffs_1_1777009588863.png": "meta_ai_layoffs_1.webp",
    "meta_ai_layoffs_2_1777009522071.png": "meta_ai_layoffs_2.webp",
    "meta_ai_layoffs_3_1777009555025.png": "meta_ai_layoffs_3.webp"
}

if not os.path.exists(public_blog_dir):
    os.makedirs(public_blog_dir)

for src_name, dest_name in files_to_process.items():
    src_path = os.path.join(brain_dir, src_name)
    dest_path = os.path.join(public_blog_dir, dest_name)
    
    if os.path.exists(src_path):
        print(f"Converting {src_name} to {dest_name}...")
        try:
            im = Image.open(src_path)
            im.save(dest_path, "webp")
            print(f"Successfully saved {dest_path}")
        except Exception as e:
            print(f"Error processing {src_name}: {str(e)}")
    else:
        print(f"Source file not found: {src_path}")
