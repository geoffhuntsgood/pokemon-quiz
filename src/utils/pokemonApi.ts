import type { Generation, Pokemon } from "../classes";
import type { GenNumber, PokemonCategory, Type } from "../enums";
import { allGens } from "../lists";

const allPokemon: Pokemon[] = allGens.flatMap((gen: Generation) => gen.pokemon);

export const getPokemonByGeneration = (generation: GenNumber): Pokemon[] => {
  const genPokemon: Pokemon[] =
    generation === "All"
      ? allPokemon
      : allGens.filter(
          (gen: Generation) => gen.number === generation
        )[0].pokemon;

  return genPokemon.filter((pokemon: Pokemon) => !pokemon.isVariant);
};

export const getPokemonByType = (type: Type): Pokemon[] => {
  return allPokemon.filter(
    (pokemon: Pokemon) => pokemon.type === type || pokemon.type2 === type
  );
};

export const getPokemonByCategory = (category: PokemonCategory): Pokemon[] => {
  return allPokemon.filter(
    (pokemon: Pokemon) =>
      pokemon.category === category || pokemon.category2 === category
  );
};
