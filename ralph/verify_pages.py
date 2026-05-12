"""
US-007: Verify translations via HTML inspection (curl-based since Playwright unavailable)
"""

import subprocess
import json
import re

tests = [
    # (url, expected_h1_text, expected_desc_contains, description)
    ("http://localhost:3000/en/tools/bmi-calculator", "BMI Calculator", "Body Mass Index", "English BMI"),
    ("http://localhost:3000/es/tools/bmi-calculator", "Calculadora de IMC", "Índice de Masa Corporal", "Spanish BMI"),
    ("http://localhost:3000/ar/tools/bmi-calculator", "حاسبة مؤشر كتلة الجسم", "", "Arabic BMI"),
    ("http://localhost:3000/en/tools/word-counter", "Word Counter", "", "English Word Counter"),
    ("http://localhost:3000/es/tools/word-counter", "Contador de Palabras", "palabras", "Spanish Word Counter"),
    ("http://localhost:3000/ar/tools/word-counter", "عداد الكلمات", "", "Arabic Word Counter"),
    ("http://localhost:3000/en/tools/age-calculator", "Age Calculator", "", "English Age Calc"),
    ("http://localhost:3000/es/tools/age-calculator", "Calculadora de Edad", "edad", "Spanish Age Calc"),
    ("http://localhost:3000/ar/tools/age-calculator", "حاسبة العمر", "", "Arabic Age Calc"),
    ("http://localhost:3000/es/", "Free Online Tools" if False else "Herramientas", "Herramientas", "Spanish Home"),
    ("http://localhost:3000/ar/", "", "", "Arabic Home"),
]

passed = 0
failed = 0

for url, expected_h1, expected_desc, desc_label in tests:
    try:
        result = subprocess.run(
            ["curl", "-s", url],
            capture_output=True, text=True, timeout=15
        )
        html = result.stdout

        # Extract H1
        h1_match = re.search(r'<h1[^>]*>(.*?)</h1>', html, re.DOTALL)
        h1_text = h1_match.group(1).strip() if h1_match else "NO H1 FOUND"
        # Remove any nested tags
        h1_text = re.sub(r'<[^>]+>', '', h1_text).strip()

        # Extract description (first header p)
        desc_match = re.search(r'<p class="mt-2 text-zinc-500[^"]*"[^>]*>(.*?)</p>', html, re.DOTALL)
        desc_text = desc_match.group(1).strip() if desc_match else "NO DESC FOUND"
        desc_text = re.sub(r'<[^>]+>', '', desc_text).strip()

        # Check
        status = "PASS"
        if expected_h1 and expected_h1 not in h1_text:
            status = "FAIL"
        if expected_desc and expected_desc not in desc_text:
            status = "FAIL"

        # Check breadcrumbs
        breadcrumb_match = re.search(r'<nav[^>]*aria-label="Breadcrumb"[^>]*>.*?</nav>', html, re.DOTALL)
        has_breadcrumb = breadcrumb_match is not None

        # Check JSON-LD
        jsonld_match = re.search(r'<script type="application/ld\+json">(.*?)</script>', html, re.DOTALL)
        has_jsonld = jsonld_match is not None

        result_str = "PASS" if status == "PASS" else f"FAIL"
        print(f"  {result_str} | {desc_label}")
        print(f"    URL: {url}")
        print(f"    H1: {h1_text}")
        if desc_text:
            print(f"    DESC: {desc_text[:80]}...")
        if status == "FAIL":
            failed += 1
            if expected_h1 and expected_h1 not in h1_text:
                print(f"    >> Expected H1: '{expected_h1}'")
            if expected_desc and expected_desc not in desc_text:
                print(f"    >> Expected DESC: '{expected_desc}'")
        else:
            passed += 1

    except Exception as e:
        failed += 1
        print(f"  ERROR | {desc_label}")
        print(f"    URL: {url}")
        print(f"    Error: {e}")

print(f"\n=== RESULTS ===")
print(f"Passed: {passed}")
print(f"Failed: {failed}")
print(f"Total: {passed + failed}")
