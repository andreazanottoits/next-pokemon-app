export interface ApiAllPokemonResponse {
  count: number;
  next: string | null;
  previus: string | null;
  results: Pokemon[];
}

export interface Pokemon {
  name: string;
  url: string | null;
  image: string;
}

export interface PokemonDetails {
  id: number;
  name: string;
  height: number;
  weight: number;
  stats: Stat[];
  types: PokemonType[];
  abilities: Ability[];
  sprites: Sprites;
}

export interface Stat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

export interface PokemonType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface Ability {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}

export interface Sprites {
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
  other: {
    dream_world: {
      front_default: string | null;
      front_female: string | null;
    };
    home: {
      front_default: string | null;
      front_female: string | null;
      front_shiny: string | null;
      front_shiny_female: string | null;
    };
    "official-artwork": {
      front_default: string;
    };
  };
}
