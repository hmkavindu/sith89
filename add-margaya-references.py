#!/usr/bin/env python3
"""
Add Abhidharma Margaya references to all citta detail pages
This script updates all citta-X-detailed-page.html files to include the reference loader
"""

import os
import re
from pathlib import Path

# Base directory
BASE_DIR = Path(__file__).parent

# Script tags to add
SCRIPT_TAGS = '''
    <!-- Abhidharma Margaya References -->
    <script src="abhidharma-margaya-references.js"></script>
    <script src="abhidharma-margaya-section-loader.js"></script>
'''

def update_citta_page(file_path, citta_id):
    """Update a single citta detail page to include Abhidharma Margaya references"""
    
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if already has the script tags
        if 'abhidharma-margaya-references.js' in content:
            print(f"  ✓ {file_path.name} already has references")
            return False
        
        # Find the DOMContentLoaded event listener
        dom_pattern = r"document\.addEventListener\('DOMContentLoaded',\s*function\(\)\s*\{"
        
        if re.search(dom_pattern, content):
            # Replace function() with async function()
            content = re.sub(
                r"document\.addEventListener\('DOMContentLoaded',\s*function\(\)\s*\{",
                f"document.addEventListener('DOMContentLoaded', async function() {{",
                content
            )
            
            # Find toggleSection('lvl1'); and add the reference loader after it
            toggle_pattern = r"(toggleSection\('lvl1'\);)"
            replacement = f"""\\1
                
                // Load Abhidharma Margaya reference section
                if (typeof window.abhidharmaMargayaSectionLoader !== 'undefined') {{
                    await window.abhidharmaMargayaSectionLoader.addToPage({citta_id}, 'sectionsContainer');
                }}"""
            
            content = re.sub(toggle_pattern, replacement, content)
        
        # Add script tags before </body>
        content = content.replace('</body>', f'{SCRIPT_TAGS}\n</body>')
        
        # Write back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"  ✓ Updated {file_path.name}")
        return True
        
    except Exception as e:
        print(f"  ✗ Error updating {file_path.name}: {e}")
        return False

def main():
    """Main function to update all citta detail pages"""
    
    print("🔄 Adding Abhidharma Margaya references to citta detail pages...\n")
    
    updated_count = 0
    skipped_count = 0
    error_count = 0
    
    # Find all citta detail pages (citta-1 to citta-89)
    for i in range(1, 90):
        file_name = f"citta-{i}-detailed-page.html"
        file_path = BASE_DIR / file_name
        
        if not file_path.exists():
            continue
        
        print(f"Processing {file_name}...")
        
        result = update_citta_page(file_path, i)
        
        if result:
            updated_count += 1
        elif result is False:
            skipped_count += 1
        else:
            error_count += 1
    
    print(f"\n✅ Complete!")
    print(f"   Updated: {updated_count}")
    print(f"   Skipped: {skipped_count}")
    print(f"   Errors:  {error_count}")

if __name__ == "__main__":
    main()
