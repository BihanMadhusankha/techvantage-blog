import os
from PIL import Image

def convert_to_webp(input_path, output_path):
    with Image.open(input_path) as img:
        img.save(output_path, "WEBP")

images = [
    (r"C:\Users\BIHAN\.gemini\antigravity\brain\4165f2e6-4d51-4e45-9475-22570dd62fb4\mythos_firefox_security_1_1776831184029.png", "mythos-firefox-security-1.webp"),
    (r"C:\Users\BIHAN\.gemini\antigravity\brain\4165f2e6-4d51-4e45-9475-22570dd62fb4\mythos_firefox_security_2_1776831206045.png", "mythos-firefox-security-2.webp"),
    (r"C:\Users\BIHAN\.gemini\antigravity\brain\4165f2e6-4d51-4e45-9475-22570dd62fb4\mythos_firefox_security_3_1776831226525.png", "mythos-firefox-security-3.webp"),
]

output_dir = r"g:\Affiliate PRojects\TechVantage\public\blog\mozilla-mythos-firefox-150-vulnerabilities"
os.makedirs(output_dir, exist_ok=True)

for in_path, out_name in images:
    out_path = os.path.join(output_dir, out_name)
    convert_to_webp(in_path, out_path)
    print(f"Converted {in_path} to {out_path}")
