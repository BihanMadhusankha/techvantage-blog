import os
from PIL import Image
import shutil

# Target directory
target_dir = r"g:\Affiliate PRojects\TechVantage\public\blog\apple-ios-26-4-1-stolen-device-protection"
os.makedirs(target_dir, exist_ok=True)

# Source images
images = [
    {
        "src": r"C:\Users\BIHAN\.gemini\antigravity\brain\021301ba-fcf0-424f-922e-1e293c917304\apple_ios_security_1_1777268684781.png",
        "dest": "ios_26_4_1_security_1.webp"
    },
    {
        "src": r"C:\Users\BIHAN\.gemini\antigravity\brain\021301ba-fcf0-424f-922e-1e293c917304\apple_ios_security_2_1777268710841.png",
        "dest": "ios_26_4_1_security_2.webp"
    },
    {
        "src": r"C:\Users\BIHAN\.gemini\antigravity\brain\021301ba-fcf0-424f-922e-1e293c917304\apple_ios_security_3_1777268727022.png",
        "dest": "ios_26_4_1_security_3.webp"
    }
]

for img_info in images:
    try:
        with Image.open(img_info["src"]) as img:
            # Resize if needed to ensure 16:9? The generation was prompted for 16:9.
            # Convert to RGB (in case of RGBA) before saving to WebP
            img = img.convert("RGB")
            dest_path = os.path.join(target_dir, img_info["dest"])
            img.save(dest_path, "WEBP", quality=85)
            print(f"Successfully saved {img_info['dest']}")
    except Exception as e:
        print(f"Error processing {img_info['src']}: {e}")
