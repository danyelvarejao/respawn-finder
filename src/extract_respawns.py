import re

input_string = """
 Ab Dendriel:
     [1] Barkless
     [2] Hellgate
     [3] Poacher Cave
     [4] Troll
     [5] Wasp
 Ankrahmun:
     [50a] Ancient Scarab North
     [50b] Ancient Scarab West
     [51] GS Tomb
     [52] Gold Token
     [53] Hydra (Passage)
     [54] Lion's Rock
     [55] Mother of Scarabs Lair
     [56] Oasis Tomb
     [57] Peninsula Tomb
     [58] Rahemos
     [59] Stone Tomb
     [60] Terramite
     [61] Vashresamun
     [62a] Cobra Bastion (-1)
     [62b] Cobra Bastion (0 e +1 até flask)
     [62c] Cobra Bastion (+1 depois do flask, +2, +3 e +4)
     [62d] Cobra Bastion (Mini Boss Fire)
     [62e] Cobra Bastion (Mini Boss Smoke)
     [62f] Cobra Bastion (0 e +1)
     [62g] Cobra Bastion (+2, +3 e +4)
     [62h] Cobra Bastion (+3 e +4)
     [63a] Weretiger (-1)
     [63b] Weretiger (-2)
     [63c] Weretiger (-1 e -2)
     [64a] Werecrocodile (-1)
     [64b] Werecrocodile (-2)
     [64c] Werecrocodile (-1 e -2)
 Carlin:
     [100] Corym
     [101] Cults
     [102] Demona
     [103] Dragon
     [104a] Secret Library (Bitting Book)
     [104b] Secret Library (Earth)
     [104c] Secret Library (Energy)
     [104d] Secret Library (Fire)
     [104e] Secret Library (Ice)
 Darashia:
     [150] Ancient Scarabs Tomb
     [151] Cults & Lizards
     [152] Dragon
     [153] Dragon Lord
     [154a] Drefia Grim Reaper (Floor 1)
     [154b] Drefia Grim Reaper (Floor 1+2)
     [154c] Drefia Grim Reaper (Floor All)
     [155a] Ferumbra's (South)
     [155b] Ferumbra's Arc
     [155c] Ferumbra's DT Seal
     [155d] Ferumbra's Fury Seal
     [155e] Ferumbra's Jugger Seal
     [155f] Ferumbra's Lair (Entrance)
     [155g] Ferumbra's Plague Seal
     [155h] Ferumbra's Pumin
     [155i] Ferumbra's Undead Seal
     [155j] Ferumbra's Bazir Seal
     [155k] Ferumbra's DT Seal -1
     [155l] Ferumbra's Pumin After
     [155m] Ferumbra's Pumin Before
     [156] Haunted Nexus (Darashia)
     [157] Nightmare Isles
     [158a] Rotworm (East)
     [158b] Rotworm (West)
     [159a] Skeleton Elite Warrior (Inside)
     [159b] Skeleton Elite Warrior (Outside)
     [160] Terramite's Cave
     [161] Wyrm
     [162a] Werehyena -1
     [162b] Werehyena -2
     [163a] Werelion -1
     [163b] Werelion -2
     [163c] Werelion -2 ->
     [163d] Werelion -2 <-
     [164a] Rotten Blood (Blood Vestibule)
     [164b] Rotten Blood (Darklight Core)
     [164c] Rotten Blood (Gloom Pillars)
     [164d] Rotten Blood (Jaded Roots)
     [164e] Rotten Blood (Putrefactory)
 Edron:
     [200] Asharak Demon
     [201] Bog Raider (Cave Earth Elemental)
     [202] Bog Raider East (Hidden)
     [203a] Cyclopolis
     [203b] Cyclopolis Behemoths
     [204] Demon (Demon Helmet Quest)
     [205] Demon (Novo)
     [206] Demon Forge
     [207] Dragon Lair
     [208] Dryad Gardens
     [209] Earth Elemental
     [210a] Elemental Quest - Soil ED
     [210b] Elemental Quest - Soil EK
     [210c] Elemental Quest - Soil MS
     [210d] Elemental Quest - Soil RP
     [211a] Falcon Bastion
     [211b] Falcon Mini-Bosses
     [211c] Falcon Underground
     [212a] Flimsy -1
     [213] Forgotten Tomb
     [214] Grimvale
     [215a] Hero Fortress -1 (Bonebeast)
     [215b] Hero Fortress -2
     [215c] Hero Fortress -2 e -3
     [215d] Hero Fortress -3
     [216a] Inquisition
     [216b] Inquisition Hellhound
     [217] Servants (Mad Mage)
     [218] Shaburak Demons
     [219] Vampire Crypt
     [220] Werefox Cave
     [221] Zugurosh
     [222] Usurper East
     [223] Bounac
     [224] Ancient Lion Knight
     [225] Crypt Warden
     [226] Carnisylvan
     [227a] Ingol (Surface)
     [227b] Ingol (-1)
     [227c] Ingol (-2)
     [227d] Ingol (-3)
     [227e] Ingol (-4)
 Farmine:
     [250a] Brimstone Bug (Hidden)
     [250b] Brimstone Bug (Shovel)
     [250c] Brimstone Bug (Surface)
     [250d] Brimstone Bug (Wrath)
     [251a] Corruption Hole -1
     [251b] Corruption Hole -2
     [252] Dragon
     [253a] Dragon Lord (Antes do TP)
     [253b] Dragon Lord (Depois do TP)
     [254] Dragonblaze
     [255] Draken Elite
     [256a] Draken Wall
     [256b] Draken Wall (Bottom)
     [256c] Draken Wall (Top)
     [256d] Draken Wall (Tower Meio)
     [257a] Flimsy -1
     [258a] Ghastly Dragon
     [258b] Ghastly Dragon (Mission 10)
     [258c] Ghastly Dragon (Mission 7)
     [258d] Ghastly Dragon (Palace)
     [259] Gold Token
     [260] Hidden Lizards (Mission 7)
     [261] Killer Caiman
     [262] Lizard Camp (Muggy Plains)
     [263] Lizard Chosen (New - 1,2,3)
     [264] Lizard Chosen (New - 4,5)
     [265] Lizard City
     [266] Lizards (Mortal Kombat)
     [267] Souleaters
     [268] Stampors
     [269] Stone Golems
     [270] Wailing Widow Cave
     [271] Yielothax
 Feyrist:
     [300] Dream Labyrinth (Fire)
     [301] Dream Labyrinth (Ice)
     [302] Feyrist Faun Cave
     [303] Feyrist Surface Faes
     [304] Fire Shrine
     [305a] Mini Roshamuul (All)
     [305b] Mini Roshamuul -1
     [305c] Mini Roshamuul -1 (East)
     [305d] Mini Roshamuul -1 (West)
     [305e] Mini Roshamuul -2
     [305f] Mini Roshamuul -2 (East)
     [305g] Mini Roshamuul -2 (West)
     [306] Summer Court
     [307] Winter Court
 Forbidden Islands:
     [350] Behemoths
     [351] Giant Spiders
     [352] Hydras
 Goroma:
     [400] Cults
     [401] Dragon Lair
     [402] Ferumbras Tower
     [403] Giant Spiders
     [404] Hydras
     [405] Lich Hell
     [406a] Medusa -1 (East)
     [406b] Medusa -1 (West) & West
     [406c] Medusa East & Northeast
     [406d] Medusa North & Northwest
     [407] Quara Scout (GS Island)
     [408] Quara Scout (Hydra Island)
 Gray Island:
     [450a] Deathling (Port Hope)
     [450b] Deathling Cave -1
     [450c] Deathling Cave -2
     [451a] Deepling (East)
     [451b] Deepling (North - Hardcore)
     [451c] Deepling (North)
     [451d] Deepling (South - Library)
     [451e] Deepling (West)
     [452] Hive Surface
     [453a] Hive Tower
     [453b] Hive Tower (East - Stage 1)
     [453c] Hive Tower (Northeast - Stage 2)
     [453d] Hive Tower (West - Stage 3)
     [454] Hive Underground
 Issavi:
     [500] Bridge (West)
     [501] Desert (South)
     [502a] Sphinx Cave -1
     [502b] Sphinx Cave -2
     [503] Undergrond (Bueiro/Sewers)
     [504] Waterfall
     [505a] Pirat Ship
     [505b] Pirat -1
     [505c] Pirat -2
     [505d] Pirat -1 -2
     [506a] Exotic Cave -1
     [506b] Exotic Cave -2
     [506c] Exotic Cave -1 -2
     [507] Ruins of Nuur (Bilu)
     [508] Salt Caves (Bashmu)
     [509] Goannas
 Kazordoon:
     [550] Corym
     [551a] Drillworms (East)
     [551b] Drillworms (West)
     [552a] Lost Dwarfs (East)
     [552b] Lost Dwarfs (Small Respawn)
     [552c] Lost Dwarfs (West Up)
     [552d] Lost Dwarfs (West)
     [553] Lower Spikes
 Krailos:
     [600] Brimstone Bugs
     [601] Nightmare Krailos
 Liberty Bay:
     [650] Behemoths
     [651a] Calassa Quara East
     [651b] Calassa Quara West
     [652] Coryms
     [653] Crystal Garden
     [654] Cult
     [655] Earth Elemental
     [656] Gargoyles (Meriana)
     [657] Hive Outpost
     [658] Laguna Island
     [659] Night Stalker -1
     [660] Pirates (Nargor)
     [661] Quara (New)
     [662a] Wyrms +1
     [662b] Wyrms +2
     [663] Wyrms Cave (New)
     [664] Zombie (Treasure Island)
 Oramond:
     [700a] Catacombs
     [700b] Catacombs (East)
     [700c] Catacombs (Entrance)
     [700d] Catacombs (West)
     [701] Demons & Grim Reaper
     [702] Devourer & Quaras (West)
     [703] Fury & Spectre
     [704a] Glooth Bandits (East)
     [704b] Glooth Bandits (South)
     [704c] Glooth Bandits (West)
     [705] Glooth Factory
     [706] Glooth Golem (300 pts)
     [707] Glooth Tower
     [708] Humongous Fungus
     [709a] Hydras & Bog Raider (Deeper)
     [709b] Hydras & Bog Raider (Surface)
     [710] Maxxen (500 pts)
     [711] Metal Gargoyle Factory
     [712] Metal Gargoyles
     [713a] Minotaurs (East - North)
     [713b] Minotaurs (East - South)
     [713c] Minotaurs (Entrance)
     [713d] Minotaurs (North)
     [713e] Minotaurs (Northeast)
     [714] Oramond Raid (300 pts)
     [715a] Oramond Sewer
     [715b] Oramond Sewer (-1)
     [716a] Seacrest (East)
     [716b] Seacrest (North)
     [716c] Seacrest (West)
 Port Hope:
     [750a] Asura (Mirror) Mirror
     [750b] Asura (Mirror) Palace
     [750c] Asura (Mirror) True (-1)
     [750d] Asura (Mirror) True (-2)
     [750e] Asura (Mirror) True (All)
     [751] Asura Palace
     [752a] Banuta (Surface)
     [752b] Banuta -1
     [752c] Banuta -2
     [752d] Banuta -3
     [752e] Banuta -4
     [753] Carniphila Cave
     [754a] Carnivora's Rock -1
     [754b] Carnivora's Rock -2
     [754c] Carnivora's Rock -2 e -3
     [754d] Carnivora's Rock -3
     [754e] Carnivora's Rock -1 e -2
     [755] Corym
     [756] Dragon Lair (Forbidden)
     [757a] Flimsy -1
     [757b] Flimsy -2
     [758] Haunted Nexus (Port Hope)
     [759] Hydras (Waterfall)
     [760] Lizard (Chor)
     [761] Medusa Tower
     [762] Spider Cave
     [763] Tarantula
     [764] Tortoise
     [765] Water Elemental
     [766] Water Elemental (New)
 Roshamuul:
     [800] Bridge
     [801] Choking Fear (DP Northeast)
     [802a] Guzzlemaw Valley (Center)
     [802b] Guzzlemaw Valley (East)
     [802c] Guzzlemaw Valley (West)
     [803a] Prison
     [803b] Prison (-1)
     [803c] Prison (-2)
     [803d] Prison (-3)
     [804a] Roshamuul DP (North)
     [804b] Roshamuul DP (South)
     [805a] Roshamuul Mountain (East)
     [805b] Roshamuul Mountain (North East)
     [805c] Roshamuul Mountain (South)
     [806] Shock Head
     [807a] Surface (-3)
     [807b] Surface (Buckets - East)
     [807c] Surface (Buckets - West)
     [807d] Surface (Buckets)
 Svargrond:
     [850a] Barbarian Camp (Big)
     [850b] Barbarian Camp (Medium)
     [850c] Barbarian Camp (Small)
     [851] Crystal Spiders (Hidden)
     [852] Crystal Spiders (New)
     [853] Crystal Spiders (Nibelor)
     [854] Crystal Spiders (Old)
     [855] Crystal Spiders North (New)
     [856] Crystal Spiders South (New)
     [857] Cults Hidden
     [858] Cults Mines (East)
     [859] Cults Mines (North West)
     [860] Frost Giant
     [861] Gold Token
     [862] Hidden Formogar Mines
     [863] Ice Wich Temple (New)
     [864] Mammoth Factory
     [865] Mines -2
     [866] Mines -3
     [867] Mines South East -Z
     [868] Mines Yakchal Floor
     [869a] Okolnir Frost Dragons (East)
     [869b] Okolnir Frost Dragons (West)
     [870a] Sea Serpent North (Old Cave)
     [870b] Sea Serpent South (Old Cave)
 Thais:
     [900a] Minotaur Cult Cave -1
     [900b] Minotaur Cult Cave -2
     [901] Mintwallin
     [902] Thais Fury
 Venore:
     [950] Amazon Camp
     [951a] Buried Cathedral -1
     [951b] Buried Cathedral -2
     [951c] Buried Cathedral -3
     [952] Dark Cathedral
     [953a] Dragon Lair (East)
     [953b] Dragon Lair (West)
     [954] Dragon Lord (POI)
     [955a] Flimsy -1
     [955b] Flimsy -2
     [955c] Flimsy -3
     [955d] Flimsy -2 e -3
     [955e] Flimsy -1, -2 e -3
     [956] Haunted Nexus (PoH)
     [957a] Orc Fortress (Inside)
     [957b] Orc Fortress (Outside)
     [958] Salamandra
     [959] Stonerefiner
     [960] Tainted Soul Cave
 Warzone:
     [1000] Crystal Golems
     [1001] Crystal Grounds
     [1002a] Diremaw (North)
     [1002b] Diremaw (South)
     [1003] Gnoman's Land
     [1004] Gnomegate Hotspot
     [1005] Mushroom Gardens
     [1006] Warzone 3
     [1007a] Warzone 4
     [1007b] Warzone 4  - LaRva LuRke
     [1007c] Warzone 4  - Ravenous LaRva LuRke
     [1007d] Warzone 4 (North)
     [1007e] Warzone 4 (South)
     [1008a] Warzone 5
     [1008b] Warzone 5 (North)
     [1008c] Warzone 5 (South)
     [1009a] Warzone 6
     [1009b] Warzone 6 (North)
     [1009c] Warzone 6 (South)
     [1010a] Warzone 7
     [1010b] Warzone 7 (-1)
     [1010c] Warzone 7 (-2)
     [1011] Warzone 8
     [1012a] Warzone 9
     [1012b] Warzone 9 (Superior)
     [1012c] Warzone 9 (Inferior)
     [1013a] Monster Graveyard
     [1013b] Monster Graveyard (Left)
     [1013c] Monster Graveyard (Right)
     [1014a] Crystal Enigma
     [1014b] Crystal Enigma (Left)
     [1014c] Crystal Enigma (Right)
     [1015a] Sparkling Pools
     [1015b] Sparkling Pools (Left)
     [1015c] Sparkling Pools (Right)
 Yalahar:
     [1050] Arena Quarter
     [1051] Barbarian Bloodwalker
     [1052] Blue Djinn
     [1053] Bog Raider (North)
     [1054] Bog Raider + Nightmare + Destroyer
     [1055] Cemetery -1
     [1056a] Cemetery Ghoul (East)
     [1056b] Cemetery Ghoul (West)
     [1057] Cemetery Zombies
     [1058] Cults
     [1059a] Cycs Mistrock (Center)
     [1059b] Cycs Mistrock (North)
     [1059c] Cycs Mistrock (South)
     [1060a] Demon (East)
     [1060b] Demon (West)
     [1061a] Dragon (Hydra)
     [1061b] Dragon (NW)
     [1061c] Dragon (SE)
     [1061d] Dragon (Serpent)
     [1062] Dragon Lord (Fenrock)
     [1063] Giant Spider
     [1064] Green Djinn
     [1065a] Grim Reaper (East)
     [1065b] Grim Reaper (West)
     [1066] Haunted Treeling
     [1067a] Hellspawn (-1)
     [1067b] Hellspawn (Surface)
     [1068] Magician
     [1069] Minotaurs
     [1070] Mutated Human
     [1071] Mutated Rat
     [1072a] Necromancer (East)
     [1072b] Necromancer (West)
     [1073] Nightmare
     [1074] Pirates
     [1075] Sunken Quaras
     [1076] Tortoise & Barbarian (Fenrock)
     [1077] Vengoth Castle
     [1078] Vengoth Castle (North)
     [1079] War Golem
     [1080a] War Golem New (East)
     [1080b] War Golem New (West)
     [1081] Werewolf
     [1082] Worker Golem
     [1083] Claustrophobic Inferno
     [1084a] Rotten Wasteland
     [1084b] Rotten Wasteland (North)
     [1084c] Rotten Wasteland (South)
     [1085] Ebb and Flow
     [1086] Furious Crater
     [1087] Mirrored Nightmare
 Marapur:
     [1100a] Foam Stalker (-1 -2)
     [1100b] Foam Stalker (-1)
     [1100c] Foam Stalker (-2)
     [1101a] Naga (-1 -2)
     [1101b] Naga (-1)
     [1101c] Naga (-2)
 Extra:
     [1150a] Dummy A
     [1150b] Dummy B
     [1150c] Dummy C
     [1150d] Dummy D
     [1150e] Dummy E
     [1150f] Dummy F
     [1150g] Dummy G
     [1150h] Dummy H
     [1150i] Dummy I
     [1150j] Dummy J
     [1150k] Dummy K
     [1150l] Dummy L
     [1150m] Dummy M
     [1150n] Dummy N
     [1150o] Dummy O
     [1151] Respawn 1
     [1152] Respawn 2
     [1153] Respawn 3
     [1154] Respawn 4
     [1155] Respawn 5
     [1156] Respawn 6
     [1157] Respawn 7
     [1158] Respawn 8
     [1159] Respawn 9
     [1160] Respawn 10
     [1161] Respawn 11
     [1162] Respawn 12
     [1163] Respawn 13
     [1164] Respawn 14
     [1165] Respawn 15
     [1166] Respawn 16
     [1167] Respawn 17
     [1168] Respawn 18
     [1169] Respawn 19
     [1170] Respawn 20
     [1171] Boosted Creature
"""

towns = []
respawns = []
current_town = None
for line in input_string.split("\n"):
    town_match = re.match(r"^([\w\s']+):\s*$", line)
    if town_match:
        current_town = {"name": town_match.group(1)}
        towns.append(current_town)
    elif current_town:
        respawn_match = re.match(r"^ +\[(\w+)\] (.+)$", line)
        if respawn_match:
            respawns.append({
                "code": respawn_match.group(1),
                "name": respawn_match.group(2),
                "town": current_town
            })

print(respawns)
