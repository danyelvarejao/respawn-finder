import re
import json

with open('data/respawns.txt', 'r', encoding='utf-8') as f:
  input_string = f.read()

towns = []
respawns = []
current_town = None
for line in input_string.strip().splitlines():
  line = line.strip()
  if not line:
    continue

  if re.match(r"^\d+[a-z]?\s", line, re.IGNORECASE):
    parts = line.split(' ', 1)
    code = parts[0]
    name = parts[1] if len(parts) > 1 else ''
    respawns.append({
      "code": code,
      "name": name,
      "town": {
        "name": current_town,
      }
    })
  else:
    current_town = line

with open("respawns.json", "w", encoding="utf-8") as f:
  json.dump(respawns, f, indent=2, ensure_ascii=False)
