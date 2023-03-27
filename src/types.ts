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

export type PartyReceipt = {
  name: string;
  loot: number;
  supplies: number;
  balance: number;
};

export type PartyTransaction<ReferenceType> = {
  from: ReferenceType;
  to: ReferenceType;
  amount: number;
};

export type PartyExtraExpenses = Record<string, number>;

export type PartyHuntData = {
  timestamp: number;
  teamReceipt: PartyReceipt;
  playerReceipts: PartyReceipt[];
  transactions: PartyTransaction<string>[];
  players: string[];
};

export type BlessingType = 'regular' | 'pvp' | 'enhanced';

export type Blessing = {
  name: string;
  type: BlessingType;
};
