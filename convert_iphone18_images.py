import os
from PIL import Image

# Setup paths
src_dir = r"C:\Users\BIHAN\.gemini\antigravity\brain\05914e68-f4fd-4b59-a1c5-5e8e25e73ae0"
dest_dir = r"g:\Affiliate PRojects\TechVantage\public\blog\iphone-18-pro-pricing-features"

# Create destination directory if it doesn't exist
os.makedirs(dest_dir, exist_ok=True)

# Image files
images = [
    ("iphone_18_pro_aggressive_price_1779019521620.png", "iphone_18_hero.webp"),
    ("a20_chip_2nm_1779019538010.png", "a20_chip.webp"),
    ("iphone_18_dynamic_island_1779019554980.png", "dynamic_island.webp")
]

for src_name, dest_name in images:
    src_path = os.path.join(src_dir, src_name)
    dest_path = os.path.join(dest_dir, dest_name)
    
    if os.path.exists(src_path):
        img = Image.open(src_path)
        
        # Resize/Crop to 16:9
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
