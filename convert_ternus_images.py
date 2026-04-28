import os
from PIL import Image

target_dir = r"g:\Affiliate PRojects\TechVantage\public\blog\apple-ceo-john-ternus-virtual-reality-origins-palmer-luckey"
os.makedirs(target_dir, exist_ok=True)

images = [
    {
        "src": r"C:\Users\BIHAN\.gemini\antigravity\brain\62b5e6fd-6cf2-4f18-8b8f-17487ed23949\vr_headset_retro_1_1777389583757.png",
        "dest": "vr_headset_retro_1.webp"
    },
    {
        "src": r"C:\Users\BIHAN\.gemini\antigravity\brain\62b5e6fd-6cf2-4f18-8b8f-17487ed23949\vr_engineering_90s_2_1777389829413.png",
        "dest": "vr_engineering_90s_2.webp"
    },
    {
        "src": r"C:\Users\BIHAN\.gemini\antigravity\brain\62b5e6fd-6cf2-4f18-8b8f-17487ed23949\apple_vr_future_3_1777389946785.png",
        "dest": "apple_vr_future_3.webp"
    }
]

for img_info in images:
    try:
        with Image.open(img_info["src"]) as img:
            img = img.convert("RGB")
            dest_path = os.path.join(target_dir, img_info["dest"])
            img.save(dest_path, "WEBP", quality=85)
            print(f"Successfully saved {img_info['dest']}")
    except Exception as e:
        print(f"Error processing {img_info['src']}: {e}")
