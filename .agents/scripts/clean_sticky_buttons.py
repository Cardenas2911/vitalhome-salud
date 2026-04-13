import os
import glob

# Find all .astro files in src
files = glob.glob('c:/Users/User/Desktop/Develop/VitalHome Salud/src/**/*.astro', recursive=True)

removed_count = 0

for file in files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Try different opening variants
    sticky_markers = [
        '{/* STICKY AWARENESS */}',
        '<div class="fixed bottom-8 right-8',
        '<div class="fixed bottom-8 right-8 z-50 group">',
        '<div class="fixed bottom-8 right-8 z-50">'
    ]
    
    start_idx = -1
    for marker in sticky_markers:
        start_idx = content.find(marker)
        if start_idx != -1:
            # If we found the div directly but there's a comment right above it, remove the comment too
            if marker.startswith('<div'):
                comment_idx = content.rfind('{/* STICKY AWARENESS */}', 0, start_idx)
                if comment_idx != -1 and (start_idx - comment_idx) < 100:
                    start_idx = comment_idx
            break
            
    if start_idx != -1:
        # Find closing Layout tag which usually wraps these floating buttons at the very end of the file
        layout_idx = content.find('</Layout>', start_idx)
        if layout_idx != -1:
            new_content = content[:start_idx].rstrip() + '\n\n' + content[layout_idx:]
            with open(file, 'w', encoding='utf-8') as f:
                f.write(new_content)
            removed_count += 1
            print(f"Borrados botones flotantes locales en: {file}")

print(f"\nLimpieza completada. Se eliminaron botones locales en {removed_count} archivos.")
