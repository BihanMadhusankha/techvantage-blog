import os
from PIL import Image

# Setup paths
src_dir = r"C:\Users\BIHAN\.gemini\antigravity\brain\05914e68-f4fd-4b59-a1c5-5e8e25e73ae0"
dest_dir = r"g:\Affiliate PRojects\TechVantage\public\blog\nintendo-switch-2-price-increase"

# Create destination directory if it doesn't exist
os.makedirs(dest_dir, exist_ok=True)

# Image files
images = [
    ("nintendo_switch_2_price_increase_1778261448949.png", "nintendo_switch_2_hero.webp"),
    ("ai_data_center_chip_shortage_1778261467548.png", "chip_shortage.webp"),
    ("console_war_pricing_1778261485520.png", "console_pricing.webp")
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
