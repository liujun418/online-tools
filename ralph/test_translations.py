from playwright.sync_api import sync_playwright
import os
import json

results = []
errors = []

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(viewport={"width": 1440, "height": 900})

    # Test pages: (URL, expected translated text to check)
    tests = [
        ("http://localhost:3000/en/tools/bmi-calculator", "BMI Calculator"),
        ("http://localhost:3000/es/tools/bmi-calculator", "Calculadora de IMC"),
        ("http://localhost:3000/ar/tools/bmi-calculator", "حاسبة مؤشر كتلة الجسم"),
        ("http://localhost:3000/es/", None),  # Homepage Spanish
        ("http://localhost:3000/ar/", None),  # Homepage Arabic
    ]

    for url, expected_text in tests:
        try:
            page.goto(url, wait_until="networkidle", timeout=30000)
            h1 = page.locator("h1").first.text_content()
            desc = page.locator("header p").first.text_content()
            print(f"  {url}")
            print(f"    H1: {h1}")
            print(f"    DESC: {desc}")

            if expected_text:
                if expected_text in h1:
                    print(f"    PASS: Expected '{expected_text}' found")
                else:
                    print(f"    FAIL: Expected '{expected_text}', got '{h1}'")
                    errors.append(f"{url}: Expected '{expected_text}', got '{h1}'")

            # Screenshot
            safe_name = url.replace("http://", "").replace("/", "_").replace(":", "_")
            screenshot_path = f"C:/Users/jun/online-tools/ralph/screenshots/{safe_name}_desktop.png"
            os.makedirs(os.path.dirname(screenshot_path), exist_ok=True)
            page.screenshot(path=screenshot_path, full_page=True)
            print(f"    Screenshot: {screenshot_path}")
            results.append({"url": url, "h1": h1, "status": "PASS"})
        except Exception as e:
            print(f"    ERROR: {e}")
            errors.append(f"{url}: {e}")

    # Mobile viewport test
    mobile_page = browser.new_page(viewport={"width": 375, "height": 812})
    mobile_tests = [
        ("http://localhost:3000/es/tools/bmi-calculator", "Calculadora de IMC"),
        ("http://localhost:3000/ar/tools/bmi-calculator", "حاسبة مؤشر كتلة الجسم"),
        ("http://localhost:3000/", None),
    ]

    for url, expected_text in mobile_tests:
        try:
            mobile_page.goto(url, wait_until="networkidle", timeout=30000)
            h1 = mobile_page.locator("h1").first.text_content()
            print(f"  MOBILE {url}")
            print(f"    H1: {h1}")

            safe_name = url.replace("http://", "").replace("/", "_").replace(":", "_")
            screenshot_path = f"C:/Users/jun/online-tools/ralph/screenshots/{safe_name}_mobile.png"
            os.makedirs(os.path.dirname(screenshot_path), exist_ok=True)
            mobile_page.screenshot(path=screenshot_path, full_page=True)
            print(f"    Screenshot: {screenshot_path}")

            if expected_text:
                if expected_text in h1:
                    print(f"    PASS")
                else:
                    print(f"    FAIL")
                    errors.append(f"Mobile {url}: Expected '{expected_text}', got '{h1}'")
        except Exception as e:
            print(f"    ERROR: {e}")
            errors.append(f"Mobile {url}: {e}")

    # Console log check
    console_logs = []
    page.on("console", lambda msg: console_logs.append(msg.text))
    for url, _ in tests[:3]:
        console_logs.clear()
        page.goto(url, wait_until="networkidle", timeout=30000)
        js_errors = [log for log in console_logs if "error" in log.lower()]
        if js_errors:
            print(f"  CONSOLE ERRORS on {url}: {js_errors[:5]}")
            errors.append(f"Console errors on {url}")
        else:
            print(f"  CONSOLE: OK on {url}")

    browser.close()

print(f"\n=== SUMMARY ===")
print(f"Passed: {len(results)}")
print(f"Errors: {len(errors)}")
for e in errors:
    print(f"  ERROR: {e}")
