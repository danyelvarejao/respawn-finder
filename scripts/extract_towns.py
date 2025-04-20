import re
import json

with open('data/respawns.txt', 'r', encoding='utf-8') as f:
  input_string = f.read()

towns = []
seen = set()
current_town = None

for line in input_string.strip().splitlines():
  line = line.strip()
  if not line:
    continue

  if re.match(r"^\d+[a-z]?\s", line, re.IGNORECASE):
    if current_town and current_town not in seen:
      towns.append({"name": current_town})
      seen.add(current_town)
  else:
    current_town = line

with open("towns.json", "w", encoding="utf-8") as f:
    json.dump(towns, f, indent=2, ensure_ascii=False)
