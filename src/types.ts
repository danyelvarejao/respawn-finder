export interface Town {
  name: string;
}

export interface Respawn {
  code: string;
  name: string;
  town: Town;
}

export type Slot =
  | 'amulet'
  | 'helmet'
  | 'backpack'
  | 'weapon'
  | 'armor'
  | 'shield'
  | 'ring'
  | 'legs'
  | 'arrow'
  | 'boots';

export interface Audios {
  used?: string;
  ending?: string;
  finished?: string;
}

export interface Item {
  name: string;
  seconds: number;
  slot?: Slot;
  audios?: Audios;
}
