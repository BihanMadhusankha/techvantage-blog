import os
from PIL import Image

# Setup paths
src_dir = r"C:\Users\BIHAN\.gemini\antigravity\brain\05914e68-f4fd-4b59-a1c5-5e8e25e73ae0"
dest_dir = r"g:\Affiliate PRojects\TechVantage\public\blog\anthropic-mythos-ai-hacking"

# Create destination directory if it doesn't exist
os.makedirs(dest_dir, exist_ok=True)

# Image files
images = [
    ("anthropic_mythos_ai_1778261137518.png", "anthropic_mythos_ai.webp"),
    ("ai_vulnerability_scan_1778261170486.png", "ai_vulnerability_scan.webp"),
    ("ai_tax_loophole_1778261189403.png", "ai_tax_loophole.webp")
]

for src_name, dest_name in images:
    src_path = os.path.join(src_dir, src_name)
    dest_path = os.path.join(dest_dir, dest_name)
    
    if os.path.exists(src_path):
        img = Image.open(src_path)
        
        # Resize to 16:9 if needed
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
