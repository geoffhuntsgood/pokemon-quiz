import type { Ability, Generation } from "../classes";
import type { GenNumber } from "../enums";
import { allGens } from "../lists";

const allAbilities: Ability[] = allGens.flatMap(
  (gen: Generation) => gen.abilities
);

export const getAbilitiesByGeneration = (generation: GenNumber): Ability[] => {
  return generation === "All"
    ? allAbilities
    : allGens.filter((gen: Generation) => gen.number === generation)[0]
        .abilities;
};

export const getUniqueAbilities = (): Ability[] => {
  return allAbilities.filter((ability: Ability) => ability.isUnique);
};
