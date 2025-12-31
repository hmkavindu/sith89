#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Script to remove specific phrases from cetasika detailed explanations in script.js
"""

import re

# Read the file
with open('script.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Define the phrases to remove
phrases_to_remove = [
    "ත්‍රිපිටකයේ අභිධර්ම පිටකයේ දක්වා ඇති පරිදි, ",
    "රේනුකානේ චන්දවිමල හිමිගේ ග්‍රන්ථයන්හි දක්වා ඇති පරිදි, ",
    "අභිධර්ම මාර්ගයේ දක්වා ඇති පරිදි, ",
    "කෙලෙස් එකදහස් පන්සියයේ දක්වා ඇති පරිදි, "
]

# Remove each phrase
for phrase in phrases_to_remove:
    content = content.replace(phrase, "")

# Write the modified content back
with open('script.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Successfully removed all specified phrases from script.js")
print(f"Removed phrases:")
for phrase in phrases_to_remove:
    print(f"  - {phrase}")
