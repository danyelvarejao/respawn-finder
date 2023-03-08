import { Respawn, Town, Item } from './types';

export const towns: Town[] = [
  { name: "Ab'Dendriel" },
  { name: 'Ankrahmun' },
  { name: 'Carlin' },
  { name: 'Darashia' },
  { name: 'Edron' },
  { name: 'Farmine' },
  { name: 'Feyrist' },
  { name: 'Forbidden Islands' },
  { name: 'Goroma' },
  { name: 'Gray Island' },
  { name: 'Issavi' },
  { name: 'Kazordoon' },
  { name: 'Krailos' },
  { name: 'Liberty Bay' },
  { name: 'Oramond' },
  { name: 'Port Hope' },
  { name: 'Roshamuul' },
  { name: 'Svargrond' },
  { name: 'Thais' },
  { name: 'Venore' },
  { name: 'Warzone' },
  { name: 'Yalahar' },
  { name: 'Marapur' },
  { name: 'Extra' },
];

export const respawns: Respawn[] = [
  { code: '1', name: 'Barkless', town: { name: "Ab'Dendriel" } },
  { code: '2', name: 'Hellgate', town: { name: "Ab'Dendriel" } },
  { code: '3', name: 'Poacher Cave', town: { name: "Ab'Dendriel" } },
  { code: '4', name: 'Troll', town: { name: "Ab'Dendriel" } },
  { code: '5', name: 'Wasp', town: { name: "Ab'Dendriel" } },
  { code: '50a', name: 'Ancient Scarab North', town: { name: 'Ankrahmun' } },
  { code: '50b', name: 'Ancient Scarab West', town: { name: 'Ankrahmun' } },
  { code: '51', name: 'GS Tomb', town: { name: 'Ankrahmun' } },
  { code: '52', name: 'Gold Token', town: { name: 'Ankrahmun' } },
  { code: '53', name: 'Hydra (Passage)', town: { name: 'Ankrahmun' } },
  { code: '54', name: "Lion's Rock", town: { name: 'Ankrahmun' } },
  { code: '55', name: 'Mother of Scarabs Lair', town: { name: 'Ankrahmun' } },
  { code: '56', name: 'Oasis Tomb', town: { name: 'Ankrahmun' } },
  { code: '57', name: 'Peninsula Tomb', town: { name: 'Ankrahmun' } },
  { code: '58', name: 'Rahemos', town: { name: 'Ankrahmun' } },
  { code: '59', name: 'Stone Tomb', town: { name: 'Ankrahmun' } },
  { code: '60', name: 'Terramite', town: { name: 'Ankrahmun' } },
  { code: '61', name: 'Vashresamun', town: { name: 'Ankrahmun' } },
  { code: '62a', name: 'Cobra Bastion (-1)', town: { name: 'Ankrahmun' } },
  {
    code: '62b',
    name: 'Cobra Bastion (0 e +1 até flask)',
    town: { name: 'Ankrahmun' },
  },
  {
    code: '62c',
    name: 'Cobra Bastion (+1 depois do flask, +2, +3 e +4)',
    town: { name: 'Ankrahmun' },
  },
  {
    code: '62d',
    name: 'Cobra Bastion (Mini Boss Fire)',
    town: { name: 'Ankrahmun' },
  },
  {
    code: '62e',
    name: 'Cobra Bastion (Mini Boss Smoke)',
    town: { name: 'Ankrahmun' },
  },
  { code: '62f', name: 'Cobra Bastion (0 e +1)', town: { name: 'Ankrahmun' } },
  {
    code: '62g',
    name: 'Cobra Bastion (+2, +3 e +4)',
    town: { name: 'Ankrahmun' },
  },
  {
    code: '62h',
    name: 'Cobra Bastion (+3 e +4)',
    town: { name: 'Ankrahmun' },
  },
  { code: '100', name: 'Corym', town: { name: 'Carlin' } },
  { code: '101', name: 'Cults', town: { name: 'Carlin' } },
  { code: '102', name: 'Demona', town: { name: 'Carlin' } },
  { code: '103', name: 'Dragon', town: { name: 'Carlin' } },
  {
    code: '104a',
    name: 'Secret Library (Bitting Book)',
    town: { name: 'Carlin' },
  },
  { code: '104b', name: 'Secret Library (Earth)', town: { name: 'Carlin' } },
  { code: '104c', name: 'Secret Library (Energy)', town: { name: 'Carlin' } },
  { code: '104d', name: 'Secret Library (Fire)', town: { name: 'Carlin' } },
  { code: '104e', name: 'Secret Library (Ice)', town: { name: 'Carlin' } },
  { code: '150', name: 'Ancient Scarabs Tomb', town: { name: 'Darashia' } },
  { code: '151', name: 'Cults & Lizards', town: { name: 'Darashia' } },
  { code: '152', name: 'Dragon', town: { name: 'Darashia' } },
  { code: '153', name: 'Dragon Lord', town: { name: 'Darashia' } },
  {
    code: '154a',
    name: 'Drefia Grim Reaper (Floor 1)',
    town: { name: 'Darashia' },
  },
  {
    code: '154b',
    name: 'Drefia Grim Reaper (Floor 1+2)',
    town: { name: 'Darashia' },
  },
  {
    code: '154c',
    name: 'Drefia Grim Reaper (Floor All)',
    town: { name: 'Darashia' },
  },
  { code: '155a', name: "Ferumbra's (South)", town: { name: 'Darashia' } },
  { code: '155b', name: "Ferumbra's Arc", town: { name: 'Darashia' } },
  { code: '155c', name: "Ferumbra's DT Seal", town: { name: 'Darashia' } },
  { code: '155d', name: "Ferumbra's Fury Seal", town: { name: 'Darashia' } },
  { code: '155e', name: "Ferumbra's Jugger Seal", town: { name: 'Darashia' } },
  {
    code: '155f',
    name: "Ferumbra's Lair (Entrance)",
    town: { name: 'Darashia' },
  },
  { code: '155g', name: "Ferumbra's Plague Seal", town: { name: 'Darashia' } },
  { code: '155h', name: "Ferumbra's Pumin", town: { name: 'Darashia' } },
  { code: '155i', name: "Ferumbra's Undead Seal", town: { name: 'Darashia' } },
  { code: '155j', name: "Ferumbra's Bazir Seal", town: { name: 'Darashia' } },
  { code: '155k', name: "Ferumbra's DT Seal -1", town: { name: 'Darashia' } },
  { code: '155l', name: "Ferumbra's Pumin After", town: { name: 'Darashia' } },
  {
    code: '155m',
    name: "Ferumbra's Pumin Before",
    town: { name: 'Darashia' },
  },
  {
    code: '156',
    name: 'Haunted Nexus (Darashia) (Burster Spectre)',
    town: { name: 'Darashia' },
  },
  {
    code: '157',
    name: 'Nightmare Isles (Choking Fear, Retching Horror, Silencer)',
    town: { name: 'Darashia' },
  },
  { code: '158a', name: 'Rotworm (East)', town: { name: 'Darashia' } },
  { code: '158b', name: 'Rotworm (West)', town: { name: 'Darashia' } },
  {
    code: '159a',
    name: 'Skeleton Elite Warrior (Inside)',
    town: { name: 'Darashia' },
  },
  {
    code: '159b',
    name: 'Skeleton Elite Warrior (Outside)',
    town: { name: 'Darashia' },
  },
  { code: '160', name: "Terramite's Cave", town: { name: 'Darashia' } },
  { code: '161', name: 'Wyrm', town: { name: 'Darashia' } },
  { code: '162a', name: 'Werehyena -1', town: { name: 'Darashia' } },
  { code: '162b', name: 'Werehyena -2', town: { name: 'Darashia' } },
  { code: '163a', name: 'Werelion -1', town: { name: 'Darashia' } },
  { code: '163b', name: 'Werelion -2', town: { name: 'Darashia' } },
  { code: '163c', name: 'Werelion -2 ->', town: { name: 'Darashia' } },
  { code: '163d', name: 'Werelion -2 <-', town: { name: 'Darashia' } },
  { code: '200', name: 'Asharak Demon', town: { name: 'Edron' } },
  {
    code: '201',
    name: 'Bog Raider (Cave Earth Elemental)',
    town: { name: 'Edron' },
  },
  { code: '202', name: 'Bog Raider East (Hidden)', town: { name: 'Edron' } },
  { code: '203a', name: 'Cyclopolis', town: { name: 'Edron' } },
  { code: '203b', name: 'Cyclopolis Behemoths', town: { name: 'Edron' } },
  { code: '204', name: 'Demon (Demon Helmet Quest)', town: { name: 'Edron' } },
  { code: '205', name: 'Demon (Novo)', town: { name: 'Edron' } },
  { code: '206', name: 'Demon Forge', town: { name: 'Edron' } },
  { code: '207', name: 'Dragon Lair', town: { name: 'Edron' } },
  { code: '208', name: 'Dryad Gardens', town: { name: 'Edron' } },
  { code: '209', name: 'Earth Elemental', town: { name: 'Edron' } },
  { code: '210a', name: 'Elemental Quest - Soil ED', town: { name: 'Edron' } },
  { code: '210b', name: 'Elemental Quest - Soil EK', town: { name: 'Edron' } },
  { code: '210c', name: 'Elemental Quest - Soil MS', town: { name: 'Edron' } },
  { code: '210d', name: 'Elemental Quest - Soil RP', town: { name: 'Edron' } },
  { code: '211a', name: 'Falcon Bastion', town: { name: 'Edron' } },
  { code: '211b', name: 'Falcon Mini-Bosses', town: { name: 'Edron' } },
  { code: '211c', name: 'Falcon Underground', town: { name: 'Edron' } },
  { code: '212a', name: 'Flimsy -1', town: { name: 'Edron' } },
  { code: '213', name: 'Forgotten Tomb', town: { name: 'Edron' } },
  { code: '214', name: 'Grimvale', town: { name: 'Edron' } },
  {
    code: '215a',
    name: 'Hero Fortress -1 (Bonebeast)',
    town: { name: 'Edron' },
  },
  { code: '215b', name: 'Hero Fortress -2', town: { name: 'Edron' } },
  { code: '215c', name: 'Hero Fortress -2 e -3', town: { name: 'Edron' } },
  { code: '215d', name: 'Hero Fortress -3', town: { name: 'Edron' } },
  { code: '216a', name: 'Inquisition', town: { name: 'Edron' } },
  { code: '216b', name: 'Inquisition Hellhound', town: { name: 'Edron' } },
  { code: '217', name: 'Servants (Mad Mage)', town: { name: 'Edron' } },
  { code: '218', name: 'Shaburak Demons', town: { name: 'Edron' } },
  { code: '219', name: 'Vampire Crypt', town: { name: 'Edron' } },
  { code: '220', name: 'Werefox Cave', town: { name: 'Edron' } },
  { code: '221', name: 'Zugurosh', town: { name: 'Edron' } },
  { code: '222', name: 'Usurper East', town: { name: 'Edron' } },
  { code: '223', name: 'Bounac', town: { name: 'Edron' } },
  { code: '224', name: 'Ancient Lion Knight', town: { name: 'Edron' } },
  { code: '225', name: 'Crypt Warden', town: { name: 'Edron' } },
  { code: '226', name: 'Carnisylvan', town: { name: 'Edron' } },
  { code: '227a', name: 'Ingol (Surface)', town: { name: 'Edron' } },
  { code: '227b', name: 'Ingol (-1)', town: { name: 'Edron' } },
  { code: '227c', name: 'Ingol (-2)', town: { name: 'Edron' } },
  { code: '227d', name: 'Ingol (-3)', town: { name: 'Edron' } },
  { code: '227e', name: 'Ingol (-4)', town: { name: 'Edron' } },
  { code: '250a', name: 'Brimstone Bug (Hidden)', town: { name: 'Farmine' } },
  { code: '250b', name: 'Brimstone Bug (Shovel)', town: { name: 'Farmine' } },
  { code: '250c', name: 'Brimstone Bug (Surface)', town: { name: 'Farmine' } },
  { code: '250d', name: 'Brimstone Bug (Wrath)', town: { name: 'Farmine' } },
  { code: '251a', name: 'Corruption Hole -1', town: { name: 'Farmine' } },
  { code: '251b', name: 'Corruption Hole -2', town: { name: 'Farmine' } },
  { code: '252', name: 'Dragon', town: { name: 'Farmine' } },
  {
    code: '253a',
    name: 'Dragon Lord (Antes do TP)',
    town: { name: 'Farmine' },
  },
  {
    code: '253b',
    name: 'Dragon Lord (Depois do TP)',
    town: { name: 'Farmine' },
  },
  { code: '254', name: 'Dragonblaze', town: { name: 'Farmine' } },
  { code: '255', name: 'Draken Elite', town: { name: 'Farmine' } },
  { code: '256a', name: 'Draken Wall', town: { name: 'Farmine' } },
  { code: '256b', name: 'Draken Wall (Bottom)', town: { name: 'Farmine' } },
  { code: '256c', name: 'Draken Wall (Top)', town: { name: 'Farmine' } },
  {
    code: '256d',
    name: 'Draken Wall (Tower Meio)',
    town: { name: 'Farmine' },
  },
  { code: '257a', name: 'Flimsy -1', town: { name: 'Farmine' } },
  { code: '258a', name: 'Ghastly Dragon', town: { name: 'Farmine' } },
  {
    code: '258b',
    name: 'Ghastly Dragon (Mission 10)',
    town: { name: 'Farmine' },
  },
  {
    code: '258c',
    name: 'Ghastly Dragon (Mission 7)',
    town: { name: 'Farmine' },
  },
  { code: '258d', name: 'Ghastly Dragon (Palace)', town: { name: 'Farmine' } },
  { code: '259', name: 'Gold Token', town: { name: 'Farmine' } },
  {
    code: '260',
    name: 'Hidden Lizards (Mission 7)',
    town: { name: 'Farmine' },
  },
  { code: '261', name: 'Killer Caiman', town: { name: 'Farmine' } },
  {
    code: '262',
    name: 'Lizard Camp (Muggy Plains)',
    town: { name: 'Farmine' },
  },
  {
    code: '263',
    name: 'Lizard Chosen (New - 1,2,3)',
    town: { name: 'Farmine' },
  },
  {
    code: '264',
    name: 'Lizard Chosen (New - 4,5)',
    town: { name: 'Farmine' },
  },
  { code: '265', name: 'Lizard City', town: { name: 'Farmine' } },
  { code: '266', name: 'Lizards (Mortal Kombat)', town: { name: 'Farmine' } },
  { code: '267', name: 'Souleaters', town: { name: 'Farmine' } },
  { code: '268', name: 'Stampors', town: { name: 'Farmine' } },
  { code: '269', name: 'Stone Golems', town: { name: 'Farmine' } },
  { code: '270', name: 'Wailing Widow Cave', town: { name: 'Farmine' } },
  { code: '271', name: 'Yielothax', town: { name: 'Farmine' } },
  { code: '300', name: 'Dream Labyrinth (Fire)', town: { name: 'Feyrist' } },
  { code: '301', name: 'Dream Labyrinth (Ice)', town: { name: 'Feyrist' } },
  { code: '302', name: 'Feyrist Faun Cave', town: { name: 'Feyrist' } },
  { code: '303', name: 'Feyrist Surface Faes', town: { name: 'Feyrist' } },
  { code: '304', name: 'Fire Shrine', town: { name: 'Feyrist' } },
  { code: '305a', name: 'Mini Roshamuul (All)', town: { name: 'Feyrist' } },
  { code: '305b', name: 'Mini Roshamuul -1', town: { name: 'Feyrist' } },
  {
    code: '305c',
    name: 'Mini Roshamuul -1 (East)',
    town: { name: 'Feyrist' },
  },
  {
    code: '305d',
    name: 'Mini Roshamuul -1 (West)',
    town: { name: 'Feyrist' },
  },
  { code: '305e', name: 'Mini Roshamuul -2', town: { name: 'Feyrist' } },
  {
    code: '305f',
    name: 'Mini Roshamuul -2 (East)',
    town: { name: 'Feyrist' },
  },
  {
    code: '305g',
    name: 'Mini Roshamuul -2 (West)',
    town: { name: 'Feyrist' },
  },
  { code: '306', name: 'Summer Court', town: { name: 'Feyrist' } },
  { code: '307', name: 'Winter Court', town: { name: 'Feyrist' } },
  { code: '350', name: 'Behemoths', town: { name: 'Forbidden Islands' } },
  { code: '351', name: 'Giant Spiders', town: { name: 'Forbidden Islands' } },
  { code: '352', name: 'Hydras', town: { name: 'Forbidden Islands' } },
  { code: '400', name: 'Cults', town: { name: 'Goroma' } },
  { code: '401', name: 'Dragon Lair', town: { name: 'Goroma' } },
  { code: '402', name: 'Ferumbras Tower', town: { name: 'Goroma' } },
  { code: '403', name: 'Giant Spiders', town: { name: 'Goroma' } },
  { code: '404', name: 'Hydras', town: { name: 'Goroma' } },
  { code: '405', name: 'Lich Hell', town: { name: 'Goroma' } },
  { code: '406a', name: 'Medusa -1 (East)', town: { name: 'Goroma' } },
  { code: '406b', name: 'Medusa -1 (West) & West', town: { name: 'Goroma' } },
  { code: '406c', name: 'Medusa East & Northeast', town: { name: 'Goroma' } },
  { code: '406d', name: 'Medusa North & Northwest', town: { name: 'Goroma' } },
  { code: '407', name: 'Quara Scout (GS Island)', town: { name: 'Goroma' } },
  {
    code: '408',
    name: 'Quara Scout (Hydra Island)',
    town: { name: 'Goroma' },
  },
  {
    code: '450a',
    name: 'Deathling (Port Hope)',
    town: { name: 'Gray Island' },
  },
  { code: '450b', name: 'Deathling Cave -1', town: { name: 'Gray Island' } },
  { code: '450c', name: 'Deathling Cave -2', town: { name: 'Gray Island' } },
  { code: '451a', name: 'Deepling (East)', town: { name: 'Gray Island' } },
  {
    code: '451b',
    name: 'Deepling (North - Hardcore)',
    town: { name: 'Gray Island' },
  },
  { code: '451c', name: 'Deepling (North)', town: { name: 'Gray Island' } },
  {
    code: '451d',
    name: 'Deepling (South - Library)',
    town: { name: 'Gray Island' },
  },
  { code: '451e', name: 'Deepling (West)', town: { name: 'Gray Island' } },
  { code: '452', name: 'Hive Surface', town: { name: 'Gray Island' } },
  { code: '453a', name: 'Hive Tower', town: { name: 'Gray Island' } },
  {
    code: '453b',
    name: 'Hive Tower (East - Stage 1)',
    town: { name: 'Gray Island' },
  },
  {
    code: '453c',
    name: 'Hive Tower (Northeast - Stage 2)',
    town: { name: 'Gray Island' },
  },
  {
    code: '453d',
    name: 'Hive Tower (West - Stage 3)',
    town: { name: 'Gray Island' },
  },
  { code: '454', name: 'Hive Underground', town: { name: 'Gray Island' } },
  { code: '500', name: 'Bridge (West)', town: { name: 'Issavi' } },
  { code: '501', name: 'Desert (South)', town: { name: 'Issavi' } },
  { code: '502a', name: 'Sphinx Cave -1', town: { name: 'Issavi' } },
  { code: '502b', name: 'Sphinx Cave -2', town: { name: 'Issavi' } },
  {
    code: '503',
    name: 'Undergrond (Bueiro/Sewers)',
    town: { name: 'Issavi' },
  },
  { code: '504', name: 'Waterfall', town: { name: 'Issavi' } },
  { code: '505a', name: 'Pirat Ship', town: { name: 'Issavi' } },
  { code: '505b', name: 'Pirat -1', town: { name: 'Issavi' } },
  { code: '505c', name: 'Pirat -2', town: { name: 'Issavi' } },
  { code: '505d', name: 'Pirat -1 -2', town: { name: 'Issavi' } },
  { code: '506a', name: 'Exotic Cave -1', town: { name: 'Issavi' } },
  { code: '506b', name: 'Exotic Cave -2', town: { name: 'Issavi' } },
  { code: '506c', name: 'Exotic Cave -1 -2', town: { name: 'Issavi' } },
  { code: '507', name: 'Ruins of Nuur (Bilu)', town: { name: 'Issavi' } },
  { code: '508', name: 'Salt Caves (Bashmu)', town: { name: 'Issavi' } },
  { code: '509', name: 'Goannas', town: { name: 'Issavi' } },
  { code: '550', name: 'Corym', town: { name: 'Kazordoon' } },
  { code: '551a', name: 'Drillworms (East)', town: { name: 'Kazordoon' } },
  { code: '551b', name: 'Drillworms (West)', town: { name: 'Kazordoon' } },
  { code: '552a', name: 'Lost Dwarfs (East)', town: { name: 'Kazordoon' } },
  {
    code: '552b',
    name: 'Lost Dwarfs (Small Respawn)',
    town: { name: 'Kazordoon' },
  },
  { code: '552c', name: 'Lost Dwarfs (West Up)', town: { name: 'Kazordoon' } },
  { code: '552d', name: 'Lost Dwarfs (West)', town: { name: 'Kazordoon' } },
  { code: '553', name: 'Lower Spikes', town: { name: 'Kazordoon' } },
  { code: '600', name: 'Brimstone Bugs', town: { name: 'Krailos' } },
  {
    code: '601',
    name: 'Nightmare Krailos (Nightmare Scion)',
    town: { name: 'Krailos' },
  },
  { code: '650', name: 'Behemoths', town: { name: 'Liberty Bay' } },
  { code: '651a', name: 'Calassa Quara East', town: { name: 'Liberty Bay' } },
  { code: '651b', name: 'Calassa Quara West', town: { name: 'Liberty Bay' } },
  { code: '652', name: 'Coryms', town: { name: 'Liberty Bay' } },
  { code: '653', name: 'Crystal Garden', town: { name: 'Liberty Bay' } },
  { code: '654', name: 'Cult', town: { name: 'Liberty Bay' } },
  { code: '655', name: 'Earth Elemental', town: { name: 'Liberty Bay' } },
  { code: '656', name: 'Gargoyles (Meriana)', town: { name: 'Liberty Bay' } },
  { code: '657', name: 'Hive Outpost', town: { name: 'Liberty Bay' } },
  { code: '658', name: 'Laguna Island', town: { name: 'Liberty Bay' } },
  { code: '659', name: 'Night Stalker -1', town: { name: 'Liberty Bay' } },
  { code: '660', name: 'Pirates (Nargor)', town: { name: 'Liberty Bay' } },
  { code: '661', name: 'Quara (New)', town: { name: 'Liberty Bay' } },
  { code: '662a', name: 'Wyrms +1', town: { name: 'Liberty Bay' } },
  { code: '662b', name: 'Wyrms +2', town: { name: 'Liberty Bay' } },
  { code: '663', name: 'Wyrms Cave (New)', town: { name: 'Liberty Bay' } },
  {
    code: '664',
    name: 'Zombie (Treasure Island)',
    town: { name: 'Liberty Bay' },
  },
  { code: '700a', name: 'Catacombs', town: { name: 'Oramond' } },
  { code: '700b', name: 'Catacombs (East)', town: { name: 'Oramond' } },
  { code: '700c', name: 'Catacombs (Entrance)', town: { name: 'Oramond' } },
  { code: '700d', name: 'Catacombs (West)', town: { name: 'Oramond' } },
  { code: '701', name: 'Demons & Grim Reaper', town: { name: 'Oramond' } },
  { code: '702', name: 'Devourer & Quaras (West)', town: { name: 'Oramond' } },
  { code: '703', name: 'Fury & Spectre', town: { name: 'Oramond' } },
  { code: '704a', name: 'Glooth Bandits (East)', town: { name: 'Oramond' } },
  { code: '704b', name: 'Glooth Bandits (South)', town: { name: 'Oramond' } },
  { code: '704c', name: 'Glooth Bandits (West)', town: { name: 'Oramond' } },
  { code: '705', name: 'Glooth Factory', town: { name: 'Oramond' } },
  { code: '706', name: 'Glooth Golem (300 pts)', town: { name: 'Oramond' } },
  { code: '707', name: 'Glooth Tower', town: { name: 'Oramond' } },
  { code: '708', name: 'Humongous Fungus', town: { name: 'Oramond' } },
  {
    code: '709a',
    name: 'Hydras & Bog Raider (Deeper)',
    town: { name: 'Oramond' },
  },
  {
    code: '709b',
    name: 'Hydras & Bog Raider (Surface)',
    town: { name: 'Oramond' },
  },
  { code: '710', name: 'Maxxen (500 pts)', town: { name: 'Oramond' } },
  { code: '711', name: 'Metal Gargoyle Factory', town: { name: 'Oramond' } },
  { code: '712', name: 'Metal Gargoyles', town: { name: 'Oramond' } },
  {
    code: '713a',
    name: 'Minotaurs (East - North)',
    town: { name: 'Oramond' },
  },
  {
    code: '713b',
    name: 'Minotaurs (East - South)',
    town: { name: 'Oramond' },
  },
  { code: '713c', name: 'Minotaurs (Entrance)', town: { name: 'Oramond' } },
  { code: '713d', name: 'Minotaurs (North)', town: { name: 'Oramond' } },
  { code: '713e', name: 'Minotaurs (Northeast)', town: { name: 'Oramond' } },
  { code: '714', name: 'Oramond Raid (300 pts)', town: { name: 'Oramond' } },
  { code: '715a', name: 'Oramond Sewer', town: { name: 'Oramond' } },
  { code: '715b', name: 'Oramond Sewer (-1)', town: { name: 'Oramond' } },
  { code: '716a', name: 'Seacrest (East)', town: { name: 'Oramond' } },
  { code: '716b', name: 'Seacrest (North)', town: { name: 'Oramond' } },
  { code: '716c', name: 'Seacrest (West)', town: { name: 'Oramond' } },
  { code: '750a', name: 'Asura (Mirror) Mirror', town: { name: 'Port Hope' } },
  { code: '750b', name: 'Asura (Mirror) Palace', town: { name: 'Port Hope' } },
  {
    code: '750c',
    name: 'Asura (Mirror) True (-1)',
    town: { name: 'Port Hope' },
  },
  {
    code: '750d',
    name: 'Asura (Mirror) True (-2)',
    town: { name: 'Port Hope' },
  },
  {
    code: '750e',
    name: 'Asura (Mirror) True (All)',
    town: { name: 'Port Hope' },
  },
  { code: '751', name: 'Asura Palace', town: { name: 'Port Hope' } },
  {
    code: '752a',
    name: 'Banuta (Surface) (Medusa, Serpent Spawn, Hydra)',
    town: { name: 'Port Hope' },
  },
  {
    code: '752b',
    name: 'Banuta -1 (Medusa, Serpent Spawn, Hydra)',
    town: { name: 'Port Hope' },
  },
  {
    code: '752c',
    name: 'Banuta -2 (Medusa, Serpent Spawn, Hydra)',
    town: { name: 'Port Hope' },
  },
  {
    code: '752d',
    name: 'Banuta -3 (Medusa, Serpent Spawn, Hydra)',
    town: { name: 'Port Hope' },
  },
  {
    code: '752e',
    name: 'Banuta -4 (Medusa, Serpent Spawn, Hydra)',
    town: { name: 'Port Hope' },
  },
  { code: '753', name: 'Carniphila Cave', town: { name: 'Port Hope' } },
  { code: '754a', name: "Carnivora's Rock -1", town: { name: 'Port Hope' } },
  { code: '754b', name: "Carnivora's Rock -2", town: { name: 'Port Hope' } },
  {
    code: '754c',
    name: "Carnivora's Rock -2 e -3",
    town: { name: 'Port Hope' },
  },
  { code: '754d', name: "Carnivora's Rock -3", town: { name: 'Port Hope' } },
  {
    code: '754e',
    name: "Carnivora's Rock -1 e -2",
    town: { name: 'Port Hope' },
  },
  { code: '755', name: 'Corym', town: { name: 'Port Hope' } },
  {
    code: '756',
    name: 'Dragon Lair (Forbidden)',
    town: { name: 'Port Hope' },
  },
  { code: '757a', name: 'Flimsy -1', town: { name: 'Port Hope' } },
  { code: '757b', name: 'Flimsy -2', town: { name: 'Port Hope' } },
  {
    code: '758',
    name: 'Haunted Nexus (Port Hope) (Gazer Spectre, Thanatursus)',
    town: { name: 'Port Hope' },
  },
  { code: '759', name: 'Hydras (Waterfall)', town: { name: 'Port Hope' } },
  { code: '760', name: 'Lizard (Chor)', town: { name: 'Port Hope' } },
  { code: '761', name: 'Medusa Tower', town: { name: 'Port Hope' } },
  { code: '762', name: 'Spider Cave', town: { name: 'Port Hope' } },
  { code: '763', name: 'Tarantula', town: { name: 'Port Hope' } },
  { code: '764', name: 'Tortoise', town: { name: 'Port Hope' } },
  { code: '765', name: 'Water Elemental', town: { name: 'Port Hope' } },
  { code: '766', name: 'Water Elemental (New)', town: { name: 'Port Hope' } },
  { code: '800', name: 'Bridge', town: { name: 'Roshamuul' } },
  {
    code: '801',
    name: 'Choking Fear (DP Northeast)',
    town: { name: 'Roshamuul' },
  },
  {
    code: '802a',
    name: 'Guzzlemaw Valley (Center)',
    town: { name: 'Roshamuul' },
  },
  {
    code: '802b',
    name: 'Guzzlemaw Valley (East)',
    town: { name: 'Roshamuul' },
  },
  {
    code: '802c',
    name: 'Guzzlemaw Valley (West)',
    town: { name: 'Roshamuul' },
  },
  { code: '803a', name: 'Prison', town: { name: 'Roshamuul' } },
  { code: '803b', name: 'Prison (-1)', town: { name: 'Roshamuul' } },
  { code: '803c', name: 'Prison (-2)', town: { name: 'Roshamuul' } },
  { code: '803d', name: 'Prison (-3)', town: { name: 'Roshamuul' } },
  { code: '804a', name: 'Roshamuul DP (North)', town: { name: 'Roshamuul' } },
  { code: '804b', name: 'Roshamuul DP (South)', town: { name: 'Roshamuul' } },
  {
    code: '805a',
    name: 'Roshamuul Mountain (East)',
    town: { name: 'Roshamuul' },
  },
  {
    code: '805b',
    name: 'Roshamuul Mountain (North East)',
    town: { name: 'Roshamuul' },
  },
  {
    code: '805c',
    name: 'Roshamuul Mountain (South)',
    town: { name: 'Roshamuul' },
  },
  { code: '806', name: 'Shock Head', town: { name: 'Roshamuul' } },
  { code: '807a', name: 'Surface (-3)', town: { name: 'Roshamuul' } },
  {
    code: '807b',
    name: 'Surface (Buckets - East)',
    town: { name: 'Roshamuul' },
  },
  {
    code: '807c',
    name: 'Surface (Buckets - West)',
    town: { name: 'Roshamuul' },
  },
  { code: '807d', name: 'Surface (Buckets)', town: { name: 'Roshamuul' } },
  { code: '850a', name: 'Barbarian Camp (Big)', town: { name: 'Svargrond' } },
  {
    code: '850b',
    name: 'Barbarian Camp (Medium)',
    town: { name: 'Svargrond' },
  },
  {
    code: '850c',
    name: 'Barbarian Camp (Small)',
    town: { name: 'Svargrond' },
  },
  {
    code: '851',
    name: 'Crystal Spiders (Hidden)',
    town: { name: 'Svargrond' },
  },
  { code: '852', name: 'Crystal Spiders (New)', town: { name: 'Svargrond' } },
  {
    code: '853',
    name: 'Crystal Spiders (Nibelor)',
    town: { name: 'Svargrond' },
  },
  { code: '854', name: 'Crystal Spiders (Old)', town: { name: 'Svargrond' } },
  {
    code: '855',
    name: 'Crystal Spiders North (New)',
    town: { name: 'Svargrond' },
  },
  {
    code: '856',
    name: 'Crystal Spiders South (New)',
    town: { name: 'Svargrond' },
  },
  { code: '857', name: 'Cults Hidden', town: { name: 'Svargrond' } },
  { code: '858', name: 'Cults Mines (East)', town: { name: 'Svargrond' } },
  {
    code: '859',
    name: 'Cults Mines (North West)',
    town: { name: 'Svargrond' },
  },
  { code: '860', name: 'Frost Giant', town: { name: 'Svargrond' } },
  { code: '861', name: 'Gold Token', town: { name: 'Svargrond' } },
  { code: '862', name: 'Hidden Formogar Mines', town: { name: 'Svargrond' } },
  { code: '863', name: 'Ice Wich Temple (New)', town: { name: 'Svargrond' } },
  { code: '864', name: 'Mammoth Factory', town: { name: 'Svargrond' } },
  { code: '865', name: 'Mines -2', town: { name: 'Svargrond' } },
  { code: '866', name: 'Mines -3', town: { name: 'Svargrond' } },
  { code: '867', name: 'Mines South East -Z', town: { name: 'Svargrond' } },
  { code: '868', name: 'Mines Yakchal Floor', town: { name: 'Svargrond' } },
  {
    code: '869a',
    name: 'Okolnir Frost Dragons (East)',
    town: { name: 'Svargrond' },
  },
  {
    code: '869b',
    name: 'Okolnir Frost Dragons (West)',
    town: { name: 'Svargrond' },
  },
  {
    code: '870a',
    name: 'Sea Serpent North (Old Cave)',
    town: { name: 'Svargrond' },
  },
  {
    code: '870b',
    name: 'Sea Serpent South (Old Cave)',
    town: { name: 'Svargrond' },
  },
  { code: '900a', name: 'Minotaur Cult Cave -1', town: { name: 'Thais' } },
  { code: '900b', name: 'Minotaur Cult Cave -2', town: { name: 'Thais' } },
  { code: '901', name: 'Mintwallin', town: { name: 'Thais' } },
  { code: '902', name: 'Thais Fury', town: { name: 'Thais' } },
  { code: '950', name: 'Amazon Camp', town: { name: 'Venore' } },
  {
    code: '951a',
    name: 'Buried Cathedral -1 (Ripper Spectre, Gazer Spectre, Arachnophobica)',
    town: { name: 'Venore' },
  },
  {
    code: '951b',
    name: 'Buried Cathedral -2 (Ripper Spectre, Gazer Spectre, Burster Spectre)',
    town: { name: 'Venore' },
  },
  {
    code: '951c',
    name: 'Buried Cathedral -3 (Ripper Spectre, Gazer Spectre, Burster Spectre, Arachnophobica)',
    town: { name: 'Venore' },
  },
  { code: '952', name: 'Dark Cathedral', town: { name: 'Venore' } },
  { code: '953a', name: 'Dragon Lair (East)', town: { name: 'Venore' } },
  { code: '953b', name: 'Dragon Lair (West)', town: { name: 'Venore' } },
  { code: '954', name: 'Dragon Lord (POI)', town: { name: 'Venore' } },
  { code: '955a', name: 'Flimsy -1', town: { name: 'Venore' } },
  { code: '955b', name: 'Flimsy -2', town: { name: 'Venore' } },
  { code: '955c', name: 'Flimsy -3', town: { name: 'Venore' } },
  { code: '955d', name: 'Flimsy -2 e -3', town: { name: 'Venore' } },
  { code: '955e', name: 'Flimsy -1, -2 e -3', town: { name: 'Venore' } },
  {
    code: '956',
    name: 'Haunted Nexus (PoH) (Ripper Spectre, Arachnophobica)',
    town: { name: 'Venore' },
  },
  { code: '957a', name: 'Orc Fortress (Inside)', town: { name: 'Venore' } },
  { code: '957b', name: 'Orc Fortress (Outside)', town: { name: 'Venore' } },
  { code: '958', name: 'Salamandra', town: { name: 'Venore' } },
  { code: '959', name: 'Stonerefiner', town: { name: 'Venore' } },
  { code: '960', name: 'Tainted Soul Cave', town: { name: 'Venore' } },
  { code: '1000', name: 'Crystal Golems', town: { name: 'Warzone' } },
  { code: '1001', name: 'Crystal Grounds', town: { name: 'Warzone' } },
  { code: '1002a', name: 'Diremaw (North)', town: { name: 'Warzone' } },
  { code: '1002b', name: 'Diremaw (South)', town: { name: 'Warzone' } },
  { code: '1003', name: "Gnoman's Land", town: { name: 'Warzone' } },
  { code: '1004', name: 'Gnomegate Hotspot', town: { name: 'Warzone' } },
  { code: '1005', name: 'Mushroom Gardens', town: { name: 'Warzone' } },
  { code: '1006', name: 'Warzone 3', town: { name: 'Warzone' } },
  { code: '1007a', name: 'Warzone 4', town: { name: 'Warzone' } },
  {
    code: '1007b',
    name: 'Warzone 4  - Lava Lurker',
    town: { name: 'Warzone' },
  },
  {
    code: '1007c',
    name: 'Warzone 4  - Ravenous Lava Lurker',
    town: { name: 'Warzone' },
  },
  { code: '1007d', name: 'Warzone 4 (North)', town: { name: 'Warzone' } },
  { code: '1007e', name: 'Warzone 4 (South)', town: { name: 'Warzone' } },
  { code: '1008a', name: 'Warzone 5', town: { name: 'Warzone' } },
  { code: '1008b', name: 'Warzone 5 (North)', town: { name: 'Warzone' } },
  { code: '1008c', name: 'Warzone 5 (South)', town: { name: 'Warzone' } },
  { code: '1009a', name: 'Warzone 6', town: { name: 'Warzone' } },
  { code: '1009b', name: 'Warzone 6 (North)', town: { name: 'Warzone' } },
  { code: '1009c', name: 'Warzone 6 (South)', town: { name: 'Warzone' } },
  { code: '1010a', name: 'Warzone 7', town: { name: 'Warzone' } },
  { code: '1010b', name: 'Warzone 7 (-1)', town: { name: 'Warzone' } },
  { code: '1010c', name: 'Warzone 7 (-2)', town: { name: 'Warzone' } },
  { code: '1011', name: 'Warzone 8', town: { name: 'Warzone' } },
  { code: '1012a', name: 'Warzone 9', town: { name: 'Warzone' } },
  { code: '1012b', name: 'Warzone 9 (Superior)', town: { name: 'Warzone' } },
  { code: '1012c', name: 'Warzone 9 (Inferior)', town: { name: 'Warzone' } },
  { code: '1013a', name: 'Monster Graveyard', town: { name: 'Warzone' } },
  {
    code: '1013b',
    name: 'Monster Graveyard (Left)',
    town: { name: 'Warzone' },
  },
  {
    code: '1013c',
    name: 'Monster Graveyard (Right)',
    town: { name: 'Warzone' },
  },
  { code: '1014a', name: 'Crystal Enigma', town: { name: 'Warzone' } },
  { code: '1014b', name: 'Crystal Enigma (Left)', town: { name: 'Warzone' } },
  { code: '1014c', name: 'Crystal Enigma (Right)', town: { name: 'Warzone' } },
  { code: '1015a', name: 'Sparkling Pools', town: { name: 'Warzone' } },
  { code: '1015b', name: 'Sparkling Pools (Left)', town: { name: 'Warzone' } },
  {
    code: '1015c',
    name: 'Sparkling Pools (Right)',
    town: { name: 'Warzone' },
  },
  { code: '1050', name: 'Arena Quarter', town: { name: 'Yalahar' } },
  { code: '1051', name: 'Barbarian Bloodwalker', town: { name: 'Yalahar' } },
  { code: '1052', name: 'Blue Djinn', town: { name: 'Yalahar' } },
  { code: '1053', name: 'Bog Raider (North)', town: { name: 'Yalahar' } },
  {
    code: '1054',
    name: 'Bog Raider + Nightmare + Destroyer',
    town: { name: 'Yalahar' },
  },
  { code: '1055', name: 'Cemetery -1', town: { name: 'Yalahar' } },
  { code: '1056a', name: 'Cemetery Ghoul (East)', town: { name: 'Yalahar' } },
  { code: '1056b', name: 'Cemetery Ghoul (West)', town: { name: 'Yalahar' } },
  { code: '1057', name: 'Cemetery Zombies', town: { name: 'Yalahar' } },
  { code: '1058', name: 'Cults', town: { name: 'Yalahar' } },
  { code: '1059a', name: 'Cycs Mistrock (Center)', town: { name: 'Yalahar' } },
  { code: '1059b', name: 'Cycs Mistrock (North)', town: { name: 'Yalahar' } },
  { code: '1059c', name: 'Cycs Mistrock (South)', town: { name: 'Yalahar' } },
  { code: '1060a', name: 'Demon (East)', town: { name: 'Yalahar' } },
  { code: '1060b', name: 'Demon (West)', town: { name: 'Yalahar' } },
  { code: '1061a', name: 'Dragon (Hydra)', town: { name: 'Yalahar' } },
  { code: '1061b', name: 'Dragon (NW)', town: { name: 'Yalahar' } },
  { code: '1061c', name: 'Dragon (SE)', town: { name: 'Yalahar' } },
  { code: '1061d', name: 'Dragon (Serpent)', town: { name: 'Yalahar' } },
  { code: '1062', name: 'Dragon Lord (Fenrock)', town: { name: 'Yalahar' } },
  { code: '1063', name: 'Giant Spider', town: { name: 'Yalahar' } },
  { code: '1064', name: 'Green Djinn', town: { name: 'Yalahar' } },
  { code: '1065a', name: 'Grim Reaper (East)', town: { name: 'Yalahar' } },
  { code: '1065b', name: 'Grim Reaper (West)', town: { name: 'Yalahar' } },
  { code: '1066', name: 'Haunted Treeling', town: { name: 'Yalahar' } },
  { code: '1067a', name: 'Hellspawn (-1)', town: { name: 'Yalahar' } },
  { code: '1067b', name: 'Hellspawn (Surface)', town: { name: 'Yalahar' } },
  { code: '1068', name: 'Magician', town: { name: 'Yalahar' } },
  { code: '1069', name: 'Minotaurs', town: { name: 'Yalahar' } },
  { code: '1070', name: 'Mutated Human', town: { name: 'Yalahar' } },
  { code: '1071', name: 'Mutated Rat', town: { name: 'Yalahar' } },
  { code: '1072a', name: 'Necromancer (East)', town: { name: 'Yalahar' } },
  { code: '1072b', name: 'Necromancer (West)', town: { name: 'Yalahar' } },
  { code: '1073', name: 'Nightmare', town: { name: 'Yalahar' } },
  { code: '1074', name: 'Pirates', town: { name: 'Yalahar' } },
  { code: '1075', name: 'Sunken Quaras', town: { name: 'Yalahar' } },
  {
    code: '1076',
    name: 'Tortoise & Barbarian (Fenrock)',
    town: { name: 'Yalahar' },
  },
  { code: '1077', name: 'Vengoth Castle', town: { name: 'Yalahar' } },
  { code: '1078', name: 'Vengoth Castle (North)', town: { name: 'Yalahar' } },
  { code: '1079', name: 'War Golem', town: { name: 'Yalahar' } },
  { code: '1080a', name: 'War Golem New (East)', town: { name: 'Yalahar' } },
  { code: '1080b', name: 'War Golem New (West)', town: { name: 'Yalahar' } },
  { code: '1081', name: 'Werewolf', town: { name: 'Yalahar' } },
  { code: '1082', name: 'Worker Golem', town: { name: 'Yalahar' } },
  { code: '1083', name: 'Claustrophobic Inferno', town: { name: 'Yalahar' } },
  { code: '1084a', name: 'Rotten Wasteland', town: { name: 'Yalahar' } },
  {
    code: '1084b',
    name: 'Rotten Wasteland (North)',
    town: { name: 'Yalahar' },
  },
  {
    code: '1084c',
    name: 'Rotten Wasteland (South)',
    town: { name: 'Yalahar' },
  },
  { code: '1085', name: 'Ebb and Flow', town: { name: 'Yalahar' } },
  { code: '1086', name: 'Furious Crater', town: { name: 'Yalahar' } },
  { code: '1087', name: 'Mirrored Nightmare', town: { name: 'Yalahar' } },
  { code: '1100a', name: 'Foam Stalker (-1 -2)', town: { name: 'Marapur' } },
  { code: '1100b', name: 'Foam Stalker (-1)', town: { name: 'Marapur' } },
  { code: '1100c', name: 'Foam Stalker (-2)', town: { name: 'Marapur' } },
  { code: '1101a', name: 'Naga (-1 -2)', town: { name: 'Marapur' } },
  { code: '1101b', name: 'Naga (-1)', town: { name: 'Marapur' } },
  { code: '1101c', name: 'Naga (-2)', town: { name: 'Marapur' } },
  { code: '1150a', name: 'Dummy A', town: { name: 'Extra' } },
  { code: '1150b', name: 'Dummy B', town: { name: 'Extra' } },
  { code: '1150c', name: 'Dummy C', town: { name: 'Extra' } },
  { code: '1150d', name: 'Dummy D', town: { name: 'Extra' } },
  { code: '1150e', name: 'Dummy E', town: { name: 'Extra' } },
  { code: '1150f', name: 'Dummy F', town: { name: 'Extra' } },
  { code: '1150g', name: 'Dummy G', town: { name: 'Extra' } },
  { code: '1150h', name: 'Dummy H', town: { name: 'Extra' } },
  { code: '1150i', name: 'Dummy I', town: { name: 'Extra' } },
  { code: '1150j', name: 'Dummy J', town: { name: 'Extra' } },
  { code: '1150k', name: 'Dummy K', town: { name: 'Extra' } },
  { code: '1150l', name: 'Dummy L', town: { name: 'Extra' } },
  { code: '1150m', name: 'Dummy M', town: { name: 'Extra' } },
  { code: '1150n', name: 'Dummy N', town: { name: 'Extra' } },
  { code: '1150o', name: 'Dummy O', town: { name: 'Extra' } },
  { code: '1151', name: 'Respawn 1', town: { name: 'Extra' } },
  { code: '1152', name: 'Respawn 2', town: { name: 'Extra' } },
  { code: '1153', name: 'Respawn 3', town: { name: 'Extra' } },
  { code: '1154', name: 'Respawn 4', town: { name: 'Extra' } },
  { code: '1155', name: 'Respawn 5', town: { name: 'Extra' } },
  { code: '1156', name: 'Respawn 6', town: { name: 'Extra' } },
  { code: '1157', name: 'Respawn 7', town: { name: 'Extra' } },
  { code: '1158', name: 'Respawn 8', town: { name: 'Extra' } },
  { code: '1159', name: 'Respawn 9', town: { name: 'Extra' } },
  { code: '1160', name: 'Respawn 10', town: { name: 'Extra' } },
  { code: '1161', name: 'Respawn 11', town: { name: 'Extra' } },
  { code: '1162', name: 'Respawn 12', town: { name: 'Extra' } },
  { code: '1163', name: 'Respawn 13', town: { name: 'Extra' } },
  { code: '1164', name: 'Respawn 14', town: { name: 'Extra' } },
  { code: '1165', name: 'Respawn 15', town: { name: 'Extra' } },
  { code: '1166', name: 'Respawn 16', town: { name: 'Extra' } },
  { code: '1167', name: 'Respawn 17', town: { name: 'Extra' } },
  { code: '1168', name: 'Respawn 18', town: { name: 'Extra' } },
  { code: '1169', name: 'Respawn 19', town: { name: 'Extra' } },
  { code: '1170', name: 'Respawn 20', town: { name: 'Extra' } },
  { code: '1171', name: 'Boosted Creature', town: { name: 'Extra' } },
];

export const items: Item[] = [
  {
    name: 'Ring of Red Plasma',
    seconds: 30 * 60,
    slot: 'ring',
  },
  {
    name: 'Collar of Red Plasma',
    seconds: 30 * 60,
    slot: 'amulet',
  },
  {
    name: 'Ring of Green Plasma',
    seconds: 30 * 60,
    slot: 'ring',
  },
  {
    name: 'Collar of Green Plasma',
    seconds: 30 * 60,
    slot: 'amulet',
  },
  {
    name: 'Ring of Blue Plasma',
    seconds: 30 * 60,
    slot: 'ring',
  },
  {
    name: 'Collar of Blue Plasma',
    seconds: 30 * 60,
    slot: 'amulet',
  },
  {
    name: 'Mastermind Potion',
    seconds: 10 * 60,
    slot: 'item',
  },
  {
    name: 'Bullseye Potion',
    seconds: 10 * 60,
    slot: 'item',
  },
  {
    name: 'Berserk Potion',
    seconds: 10 * 60,
    slot: 'item',
  },
];
