export interface ApiAllPokemonResponse {
  count: number;
  next: string | null;
  previus: string | null;
  results: Pokemon[];
}

export interface Pokemon {
  name: string;
  url: string;
  image: string;
}
