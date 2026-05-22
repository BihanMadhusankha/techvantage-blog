import os
import subprocess
from PIL import Image

brain_dir = r"C:\Users\BIHAN\.gemini\antigravity\brain\189f6f06-abec-497e-8af8-4ecad8117af6"
public_blog_dir = r"g:\Affiliate PRojects\TechVantage\public\blog"
project_dir = r"g:\Affiliate PRojects\TechVantage"

files_to_process = {
    "anthropic_amazon_hero_1776767057196.png": "anthropic-amazon-hero.webp",
    "trainium_chip_ai_1776767082570.png": "anthropic-trainium-chips.webp",
    "claude_aws_cloud_1776767101796.png": "claude-aws-cloud.webp"
}

if not os.path.exists(public_blog_dir):
    os.makedirs(public_blog_dir)

print("Starting image conversions...")
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

print("Proceeding to git commit and push...")

try:
    os.chdir(project_dir)
    subprocess.run(["git", "add", "."], check=True)
    subprocess.run(["git", "commit", "-m", "Publish Anthropic Amazon compute post"], check=True)
    subprocess.run(["git", "push"], check=True)
    print("Successfully pushed to GitHub.")
except subprocess.CalledProcessError as e:
    print(f"Git operation failed: {e}")
except Exception as e:
    print(f"An error occurred: {e}")
