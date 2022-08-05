import Link from "next/link";
import { InferGetServerSidePropsType } from "next/types";
import { Ability, PokemonDetails, PokemonType, Stat } from "../../types/types";

export async function getServerSideProps(context: any): Promise<{
  props: { pokemon: PokemonDetails };
}> {
  const { slug } = context.query;
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/` + slug);
  const pokemon: PokemonDetails = await res.json();
  return { props: { pokemon } };
}

export default function PokemonDetail({
  pokemon,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div className="w-2/3 m-auto mt-4 bg-slate-200 h-full">
      <div className="flex justify-center flex-col items-center">
        <div className="self-start">
          <Link href="/">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              Go Back
            </button>
          </Link>
        </div>
        <div>
          <img
            src={pokemon.sprites.other["official-artwork"].front_default}
            alt="pokemon image"
          />
        </div>
        <div className="self-start">
          <p className="text-2xl font-bold">Name: {pokemon.name}</p>
          <p className="text-2xl font-bold">Height: {pokemon.height}</p>
          <p className="text-2xl font-bold">Weight: {pokemon.weight}</p>
          <p className="text-2xl font-bold">
            {pokemon.types.length > 1 ? "Types" : "Type"}
          </p>
          <ul className="list-disc ml-8">
            {pokemon.types.map((type: PokemonType, index: number) => (
              <li key={index} className="text-2xl font-bold">
                {type.type.name}
              </li>
            ))}
          </ul>
          <p className="text-2xl font-bold">
            {pokemon.abilities.length > 1 ? "Abilities" : "Ability"}
          </p>
          <ul className="list-disc ml-8">
            {pokemon.abilities.map((ability: Ability, index: number) => (
              <li key={index} className="text-2xl font-bold">
                {ability.ability.name}
              </li>
            ))}
          </ul>
          <p className="text-2xl font-bold">Base Stats:</p>
          <ul className="list-disc ml-8">
            {pokemon.stats.map((stat: Stat, index: number) => (
              <li key={index} className="text-2xl font-bold">
                {stat.stat.name} - value: {stat.base_stat}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
