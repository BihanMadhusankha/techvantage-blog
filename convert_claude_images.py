import os
from PIL import Image

target_dir = r"g:\Affiliate PRojects\TechVantage\public\blog\claude-cursor-ai-deletes-database-pocketos"
os.makedirs(target_dir, exist_ok=True)

images = [
    {
        "src": r"C:\Users\BIHAN\.gemini\antigravity\brain\8d266cda-bb9c-4204-9225-231c627f2025\ai_agent_database_delete_hero_1777478168722.png",
        "dest": "claude_agent_db_delete_hero.webp"
    },
    {
        "src": r"C:\Users\BIHAN\.gemini\antigravity\brain\8d266cda-bb9c-4204-9225-231c627f2025\ai_cursor_mistake_terminal_1777478202742.png",
        "dest": "ai_cursor_mistake_terminal.webp"
    },
    {
        "src": r"C:\Users\BIHAN\.gemini\antigravity\brain\8d266cda-bb9c-4204-9225-231c627f2025\cloud_backup_wipe_alert_1777478234070.png",
        "dest": "cloud_backup_wipe_alert.webp"
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
