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

export interface AnalyzerPlayerAndTheirBalance {
  name: string;
  balance: number;
}

export interface AnalyzerWhoToPayAndHowMuch {
  name: string;
  amount: number;
  toWho: string;
}

export interface AnalyzerData {
  sessionDate: string;
  sessionDuration: string;
  numberOfPlayers: number;
  playersAndTheirBalance: AnalyzerPlayerAndTheirBalance[];
  totalProfitOrWaste: number;
  profitOrWastePerPlayer: number;
  whoToPayAndHowMuch: AnalyzerWhoToPayAndHowMuch[];
}
