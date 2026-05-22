import sys
import shutil
import os
from PIL import Image

brain_dir = r"C:\Users\BIHAN\.gemini\antigravity\brain\7bc77b06-e4e8-4fb6-8877-7bca16be1547"
public_blog_dir = r"g:\Affiliate PRojects\TechVantage\public\blog"

files_to_process = {
    "gemini_extensions_hero_1776661463103.png": "gemini-extensions-hero.webp",
    "gemini_workspace_integration_1776661482400.png": "gemini-workspace-integration.webp",
    "gemini_apps_deleted_1776661500308.png": "gemini-apps-deleted.webp"
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
