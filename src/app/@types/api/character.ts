interface House {
  name: string;
  town: string;
  paid: string;
  houseid: number;
}

interface Guild {
  name: string;
  rank: string;
}

interface Character {
  name: string;
  sex: string;
  title: string;
  unlocked_titles: number;
  vocation: string;
  level: number;
  achievement_points: number;
  world: string;
  residence: string;
  married_to: string;
  houses: House[];
  guild: Guild;
  last_login: string;
  account_status: string;
}

interface OtherCharacter {
  name: string;
  world: string;
  status: string;
  deleted: boolean;
  main: boolean;
  traded: boolean;
}

interface AccountInformation {
  created?: string;
  loyalty_title?: string;
}

interface CharactersResponse {
  characters: {
    character: Character;
    account_information: AccountInformation;
    other_characters?: OtherCharacter[];
  };
  information: {
    api_version: number;
    timestamp: string;
  };
}

export { AccountInformation, Character, CharactersResponse, Guild, House };
