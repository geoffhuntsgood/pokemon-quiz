import { describe, expect, test } from "vitest";
import { GenNumber, MoveCategory, Type } from "../../enums";
import {
  getMovesByCategory,
  getMovesByGeneration,
  getMovesByType
} from "../../utils/moveApi";

describe("moveApi tests", () => {
  describe("getMovesByGeneration tests", () => {
    const expected = {
      [GenNumber.All]: 920,
      [GenNumber.One]: 165,
      [GenNumber.Two]: 86,
      [GenNumber.Three]: 103,
      [GenNumber.Four]: 113,
      [GenNumber.Five]: 92,
      [GenNumber.Six]: 62,
      [GenNumber.Seven]: 121,
      [GenNumber.Eight]: 108,
      [GenNumber.Nine]: 70
    };

    test("All with G-Max", () => {
      expect(getMovesByGeneration(GenNumber.All, true)).toHaveLength(953);
    });

    Object.values(GenNumber).forEach((gen: GenNumber) => {
      test(`${gen}`, () => {
        expect(getMovesByGeneration(gen)).toHaveLength(expected[gen]);
      });
    });
  });

  describe("getMovesByType tests", () => {
    const expected = {
      [Type.Bug]: 35,
      [Type.Dark]: 54,
      [Type.Dragon]: 33,
      [Type.Electric]: 51,
      [Type.Fairy]: 35,
      [Type.Fighting]: 58,
      [Type.Fire]: 50,
      [Type.Flying]: 32,
      [Type.Ghost]: 36,
      [Type.Grass]: 63,
      [Type.Ground]: 32,
      [Type.Ice]: 34,
      [Type.Normal]: 203,
      [Type.Poison]: 37,
      [Type.Psychic]: 79,
      [Type.Rock]: 27,
      [Type.Steel]: 40,
      [Type.Varies]: 0,
      [Type.Water]: 54
    };

    Object.values(Type).forEach((type: Type) => {
      test(`${type}`, () => {
        expect(getMovesByType(type)).toHaveLength(expected[type]);
      });
    });
  });

  describe("getMovesByCategory tests", () => {
    const expected = {
      [MoveCategory.Physical]: 372,
      [MoveCategory.Special]: 259,
      [MoveCategory.Status]: 271,
      [MoveCategory.Max]: 18,
      [MoveCategory.GMax]: 33
    };

    Object.values(MoveCategory).forEach((cat: MoveCategory) => {
      test(`${cat}`, () => {
        expect(getMovesByCategory(cat)).toHaveLength(expected[cat]);
      });
    });
  });
});
