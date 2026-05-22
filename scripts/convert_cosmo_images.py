import os
import shutil
from PIL import Image

# Setup paths
src_dir = r"C:\Users\BIHAN\.gemini\antigravity\brain\f23d204c-76a6-4c88-93e1-b3de7a69b429"
dest_dir = r"g:\Affiliate PRojects\TechVantage\public\blog\google-cosmo-ai-assistant-app"

# Create destination directory if it doesn't exist
os.makedirs(dest_dir, exist_ok=True)

# Image files
images = [
    ("google_cosmo_ai_app_1777707166828.png", "cosmo_app_hero.webp"),
    ("google_cosmo_ai_chip_1777707198447.png", "cosmo_gemini_nano.webp"),
    ("google_cosmo_ai_skills_1777707234552.png", "cosmo_ai_skills.webp")
]

for src_name, dest_name in images:
    src_path = os.path.join(src_dir, src_name)
    dest_path = os.path.join(dest_dir, dest_name)
    
    if os.path.exists(src_path):
        img = Image.open(src_path)
        img.save(dest_path, "WEBP", quality=85)
        print(f"Converted {src_name} to {dest_name}")
    else:
        print(f"Source file {src_path} not found.")
