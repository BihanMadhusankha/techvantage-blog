import sys
import shutil
import os
from PIL import Image

brain_dir = r"C:\Users\BIHAN\.gemini\antigravity\brain\fb96be8d-a007-41d6-a9b5-6462b917811a"
public_blog_dir = r"g:\Affiliate PRojects\TechVantage\public\blog"

files_to_process = {
    "pixel_10a_flat_design_1774849315095.png": "pixel-10a-flat-design.webp",
    "pixel_10a_vs_camera_bump_1774849329697.png": "pixel-10a-vs-camera-bump.webp"
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
