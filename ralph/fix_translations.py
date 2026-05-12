"""
US-001 Batch Fix: Pass translated title/description from page.tsx to all Client components.

Modifies:
1. page.tsx - Extract translations, pass as props to Client
2. Client.tsx - Accept new props, use in ToolLayout
"""

import os
import re

BASE_DIR = "C:/Users/jun/online-tools"

# Read tools to get IDs
with open(os.path.join(BASE_DIR, "src/lib/tools.ts"), "r", encoding="utf-8") as f:
    tools_content = f.read()

tool_ids = re.findall(r'id:\s*"([^"]+)"', tools_content)
print(f"Found {len(tool_ids)} tools")

modified_pages = 0
modified_clients = 0
errors = []

for tool_id in tool_ids:
    page_path = os.path.join(BASE_DIR, f"src/app/[locale]/tools/{tool_id}/page.tsx")
    client_path = os.path.join(BASE_DIR, f"src/app/tools/{tool_id}")

    # Find actual Client file (directory may have different case)
    client_files = []
    if os.path.isdir(client_path):
        for f in os.listdir(client_path):
            if f.endswith("Client.tsx"):
                client_files.append(os.path.join(client_path, f))

    if not os.path.exists(page_path):
        errors.append(f"Missing page: {tool_id}")
        continue
    if not client_files:
        errors.append(f"Missing client: {tool_id}")
        continue

    client_file = client_files[0]

    # === Page.tsx modification ===
    with open(page_path, "r", encoding="utf-8") as f:
        page_content = f.read()

    if "titleOverride" not in page_content:
        # 1. Add translation extraction after dict line
        new_lines = """  const toolTitle = (tool as any).nameTranslations?.[locale] || tool.name;
  const toolDescription = (tool as any).descriptionTranslations?.[locale] || tool.description;
"""
        if "const dict = await getDictionary(locale);" in page_content:
            page_content = page_content.replace(
                "const dict = await getDictionary(locale);",
                "const dict = await getDictionary(locale);\n" + new_lines
            )
        else:
            errors.append(f"No dict line in {tool_id} page.tsx")
            continue

        # 2. Add props to Client component tag
        # Match: <SomeClient locale={...} dict={dict} />
        # Add: titleOverride={toolTitle} descriptionOverride={toolDescription}
        client_tag_pattern = r'(<\w+Client\s+)([^>]*?)(/\s*>)'
        def add_props(match):
            prefix = match.group(1)
            attrs = match.group(2)
            closing = match.group(3)
            # Check if already has titleOverride
            if "titleOverride" in attrs:
                return match.group(0)
            return f'{prefix}{attrs} titleOverride={{toolTitle}} descriptionOverride={{toolDescription}} {closing}'

        page_content = re.sub(client_tag_pattern, add_props, page_content)

        with open(page_path, "w", encoding="utf-8") as f:
            f.write(page_content)
        modified_pages += 1
        print(f"  page.tsx: {tool_id}")

    # === Client.tsx modification ===
    with open(client_file, "r", encoding="utf-8") as f:
        client_content = f.read()

    if "titleOverride" not in client_content:
        # 1. Modify function signature
        # Pattern for single-line: }: { locale?: string; dict?: Record<string, unknown> } = {}) {
        # Pattern for multi-line (LifeHacks): }: {\n  locale?: string;\n  dict?: Record<string, unknown>;\n} = {}) {

        sig_pattern = r'(dict[^}]*\}):\s*\{([^}]*)\}\s*=\s*\{\s*\}\s*\)'
        def modify_sig(match):
            destructured = match.group(1)  # dict }
            type_content = match.group(2)  # locale?: string; dict?: Record<string, unknown>;
            new_destructured = destructured.rstrip() + ", titleOverride, descriptionOverride"
            new_type = type_content.rstrip().rstrip(";") + ";\n  titleOverride?: string;\n  descriptionOverride?: string;"
            return f"{new_destructured}}}: {{ {new_type} }} = {{}})"

        if re.search(sig_pattern, client_content, re.DOTALL):
            client_content = re.sub(sig_pattern, modify_sig, client_content, flags=re.DOTALL)
        else:
            errors.append(f"Bad sig in {tool_id} Client.tsx")
            continue

        # 2. Modify ToolLayout rendering
        # Find <ToolLayout ...> and add title/description overrides
        # The {...metadata} spread is the key anchor

        # Approach: find the ToolLayout line and replace {...metadata} with expanded version
        tl_pattern = r'(<ToolLayout\s+\{[^}]*metadata\}[^>]*>)'

        def modify_tool_layout(match):
            tag = match.group(0)
            if "title={titleOverride" in tag:
                return tag
            # Insert after {...metadata}
            return tag.replace(
                '{...metadata}',
                '{...metadata}\n        title={titleOverride || metadata.title}\n        description={descriptionOverride || metadata.description}'
            )

        new_client = re.sub(tl_pattern, modify_tool_layout, client_content, flags=re.DOTALL)
        if new_client == client_content:
            errors.append(f"No ToolLayout match in {tool_id} Client.tsx")
            continue
        client_content = new_client

        with open(client_file, "w", encoding="utf-8") as f:
            f.write(client_content)
        modified_clients += 1
        print(f"  Client.tsx: {tool_id}")

print(f"\n=== SUMMARY ===")
print(f"Pages modified: {modified_pages}")
print(f"Clients modified: {modified_clients}")
print(f"Errors: {len(errors)}")
for e in errors:
    print(f"  - {e}")
