"""
US-001 Batch Fix v2: Fix broken signatures from v1, then do remaining tools.
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

    # Fix broken signatures from v1
    # Bad: ({ locale = "en", dict }, titleOverride, descriptionOverride}: {  locale?: string; ...
    # Good: ({ locale = "en", dict, titleOverride, descriptionOverride }: { locale?: string; ...

    # Multi-line pattern to catch both single and multi-line signatures
    pattern = r'(\{[^}]*dict)(\s*\}),\s*(titleOverride,\s*descriptionOverride\}):\s*\{(\s*)([^}]+)\}'

    def fix_sig(match):
        destructured = match.group(1)  # { locale = "en", dict
        type_open = match.group(2)     # }
        new_props = match.group(3)     # titleOverride, descriptionOverride}
        type_indent = match.group(4)   # whitespace
        type_body = match.group(5)     # locale?: string; ... titleOverride?: string; ...

        # Combine: put titleOverride, descriptionOverride inside the destructured object
        new_destructured = destructured + ", titleOverride, descriptionOverride"
        # Clean type body - remove duplicates if titleOverride already added
        new_type = "{\n  " + type_body.strip() + "\n}"

        return new_destructured + ": " + new_type

    new_content = re.sub(pattern, fix_sig, content, flags=re.DOTALL)

    if new_content != content:
        with open(client_file, "w", encoding="utf-8") as f:
            f.write(new_content)
        fixed += 1
        print(f"Fixed: {tool_id}")

print(f"Fixed {fixed} client signatures")
