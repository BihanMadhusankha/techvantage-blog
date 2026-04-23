import os
from PIL import Image

def convert_to_webp(input_path, output_path):
    with Image.open(input_path) as img:
        img.save(output_path, "WEBP", quality=85)

images = [
    (r"C:\Users\BIHAN\.gemini\antigravity\brain\dc553b34-b9bd-429d-880b-272be2d1a4ab\chatgpt_images2_hero_1776919183002.png", "chatgpt-images-2-hero.webp"),
    (r"C:\Users\BIHAN\.gemini\antigravity\brain\dc553b34-b9bd-429d-880b-272be2d1a4ab\codex_labs_enterprise_1776919203666.png", "codex-labs-enterprise.webp"),
    (r"C:\Users\BIHAN\.gemini\antigravity\brain\dc553b34-b9bd-429d-880b-272be2d1a4ab\chatgpt_capabilities_1776919222575.png", "chatgpt-images-2-features.webp"),
]

output_dir = r"g:\Affiliate PRojects\TechVantage\public\blog\openai-chatgpt-images-2-codex-labs"
os.makedirs(output_dir, exist_ok=True)

for in_path, out_name in images:
    out_path = os.path.join(output_dir, out_name)
    convert_to_webp(in_path, out_path)
    print(f"Converted {in_path} to {out_path}")
