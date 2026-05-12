"""
US-001 Fix v3: Fix the missing `} ` between destructured params and type annotation.
Current: { locale = "en", dict, titleOverride, descriptionOverride: {
Should be: { locale = "en", dict, titleOverride, descriptionOverride }: {
"""

import os
import re

BASE_DIR = "C:/Users/jun/online-tools"

with open(os.path.join(BASE_DIR, "src/lib/tools.ts"), "r", encoding="utf-8") as f:
    tools_content = f.read()

tool_ids = re.findall(r'id:\s*"([^"]+)"', tools_content)
fixed = 0

for tool_id in tool_ids:
    client_path = os.path.join(BASE_DIR, f"src/app/tools/{tool_id}")
    if not os.path.isdir(client_path):
        continue

    client_files = [os.path.join(client_path, f) for f in os.listdir(client_path) if f.endswith("Client.tsx")]
    if not client_files:
        continue

    client_file = client_files[0]
    with open(client_file, "r", encoding="utf-8") as f:
        content = f.read()

    # Fix: descriptionOverride: {  ->  descriptionOverride }: {
    old = "descriptionOverride: {"
    new = "descriptionOverride }: {"

    if old in content and new not in content:
        content = content.replace(old, new)
        with open(client_file, "w", encoding="utf-8") as f:
            f.write(content)
        fixed += 1
        print(f"Fixed: {tool_id}")

print(f"\nFixed {fixed} signatures")
