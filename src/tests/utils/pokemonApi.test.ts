import { describe, expect, test } from "vitest";
import { GenNumber, PokemonCategory, Type } from "../../enums";
import {
  getPokemonByCategory,
  getPokemonByGeneration,
  getPokemonByType
} from "../../utils/pokemonApi";

describe("pokemonApi tests", () => {
  describe("getPokemonByGeneration tests", () => {
    const expected = {
      [GenNumber.All]: 1025,
      [GenNumber.One]: 151,
      [GenNumber.Two]: 100,
      [GenNumber.Three]: 135,
      [GenNumber.Four]: 107,
      [GenNumber.Five]: 156,
      [GenNumber.Six]: 72,
      [GenNumber.Seven]: 88,
      [GenNumber.Eight]: 96,
      [GenNumber.Nine]: 120
    };

    test("Check isVariant", () => {
      expect(
        getPokemonByGeneration(GenNumber.All).filter((p) => p.isVariant)
      ).toHaveLength(0);
    });

    Object.values(GenNumber).forEach((gen: GenNumber) => {
      test(`${gen}`, () => {
        expect(getPokemonByGeneration(gen)).toHaveLength(expected[gen]);
      });
    });
  });

  describe("getPokemonByType tests", () => {
    const expected = {
      [Type.Bug]: 105,
      [Type.Dark]: 94,
      [Type.Dragon]: 94,
      [Type.Electric]: 88,
      [Type.Fairy]: 83,
      [Type.Fighting]: 104,
      [Type.Fire]: 107,
      [Type.Flying]: 134,
      [Type.Ghost]: 82,
      [Type.Grass]: 151,
      [Type.Ground]: 91,
      [Type.Ice]: 66,
      [Type.Normal]: 148,
      [Type.Poison]: 104,
      [Type.Psychic]: 137,
      [Type.Rock]: 89,
      [Type.Steel]: 91,
      [Type.Varies]: 5,
      [Type.Water]: 177
    };

    test("Check isVariant", () => {
      expect(
        getPokemonByType(Type.Bug).filter((p) => p.isVariant)
      ).toHaveLength(13);
    });

    test("Check type2", () => {
      expect(
        getPokemonByType(Type.Dark).filter((p) => p.type2 === Type.Dark)
      ).toHaveLength(35);
    });

    test("check noDefaultForm", () => {
      expect(
        getPokemonByType(Type.Fire).filter((p) => p.noDefaultForm)
      ).toHaveLength(0);
    });

    Object.values(Type).forEach((type: Type) => {
      test(`${type}`, () => {
        expect(getPokemonByType(type)).toHaveLength(expected[type]);
      });
    });
  });

  describe("getPokemonByCategory tests", () => {
    const expected = {
      [PokemonCategory.Baby]: 19,
      [PokemonCategory.Fossil]: 25,
      [PokemonCategory.Legendary]: 74,
      [PokemonCategory.Mythical]: 23,
      [PokemonCategory.Paradox]: 22,
      [PokemonCategory.UltraBeast]: 11
    };

    test("Check category2", () => {
      expect(
        getPokemonByCategory(PokemonCategory.Paradox).filter(
          (p) => p.category2 === PokemonCategory.Paradox
        )
      ).toHaveLength(2);
    });

    Object.values(PokemonCategory).forEach((category: PokemonCategory) => {
      test(`${category}`, () => {
        expect(getPokemonByCategory(category)).toHaveLength(expected[category]);
      });
    });
  });
});
