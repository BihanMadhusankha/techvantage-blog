import sys
import os
from PIL import Image

brain_dir = r"C:\Users\BIHAN\.gemini\antigravity\brain\a2b5c7d3-37ae-4ec8-a580-0bbebfa57464"
public_blog_dir = r"g:\Affiliate PRojects\TechVantage\public\blog"

files_to_process = {
    "claude_design_interface_1776579207418.png": "claude-design-interface.webp",
    "claude_design_collaboration_1776579234390.png": "claude-design-collaboration.webp",
    "claude_design_system_1776579262592.png": "claude-design-system.webp"
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
