import os
from PIL import Image

# Setup paths
src_dir = r"C:\Users\BIHAN\.gemini\antigravity\brain\d0a64f1a-55a1-4aa3-b433-a432b04304a8"
dest_dir = r"g:\Affiliate PRojects\TechVantage\public\blog\pokemon-go-super-rocket-radar-giovanni"

# Create destination directory if it doesn't exist
os.makedirs(dest_dir, exist_ok=True)

# Image files
images = [
    ("giovanni_showdown_1777826053066.png", "giovanni_showdown.webp"),
    ("super_rocket_radar_1777826077188.png", "super_rocket_radar.webp"),
    ("shadow_legendary_1777826103894.png", "shadow_legendary.webp")
]

for src_name, dest_name in images:
    src_path = os.path.join(src_dir, src_name)
    dest_path = os.path.join(dest_dir, dest_name)
    
    if os.path.exists(src_path):
        img = Image.open(src_path)
        
        # Resize to 16:9 if needed (optional depending on generated size, assuming they are 1024x1024)
        # We will crop them to 16:9 ratio
        width, height = img.size
        target_height = int(width * 9 / 16)
        if height > target_height:
            top = (height - target_height) // 2
            bottom = top + target_height
            img = img.crop((0, top, width, bottom))
            
        img.save(dest_path, "WEBP", quality=85)
        print(f"Converted {src_name} to {dest_name}")
    else:
        print(f"Source file {src_path} not found.")
