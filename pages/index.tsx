import { PokemonCard } from "../components/pokemonCard";
import { ApiAllPokemonResponse, Pokemon } from "../types/types";

export async function getServerSideProps(): Promise<{
  props: { pokemons: ApiAllPokemonResponse };
}> {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=10");
  const pokemonsFetched: ApiAllPokemonResponse = await res.json();

  const pokemonDetail = await Promise.all(
    pokemonsFetched.results.map((element: Pokemon) =>
      fetch(`https://pokeapi.co/api/v2/pokemon/` + element.name).then(
        (response) => response.json()
      )
    )
  );
  for (let pokemonFetched of pokemonsFetched.results) {
    pokemonFetched.image = pokemonDetail.find(
      (element: Pokemon) => element.name === pokemonFetched.name
    ).sprites.front_default;
  }

  return {
    props: {
      pokemons: pokemonsFetched,
    },
  };
}

const Home = ({ pokemons }: any) => {
  return (
    <>
      <div className="flex justify-center flex-row">
        <h1 className="text-5xl font-bold mt-5 mb-4">Pokemon list</h1>
      </div>
      <div className="grid grid-cols-4 gap-4 m-3">
        {pokemons.results.map((pokemon: Pokemon, index: number) => (
          <PokemonCard key={index} name={pokemon.name} image={pokemon.image} />
        ))}
      </div>
    </>
  );
};

export default Home;
