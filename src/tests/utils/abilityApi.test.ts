import { describe, expect, test } from "vitest";
import { GenNumber } from "../../enums";
import {
  getAbilitiesByGeneration,
  getUniqueAbilities
} from "../../utils/abilityApi";

describe("abilityApi tests", () => {
  describe("getAbilitiesByGeneration tests", () => {
    const expected = {
      [GenNumber.All]: 316,
      [GenNumber.One]: 0,
      [GenNumber.Two]: 0,
      [GenNumber.Three]: 76,
      [GenNumber.Four]: 47,
      [GenNumber.Five]: 41,
      [GenNumber.Six]: 27,
      [GenNumber.Seven]: 42,
      [GenNumber.Eight]: 34,
      [GenNumber.Nine]: 49
    };

    Object.values(GenNumber).forEach((gen: GenNumber) => {
      test(`${gen}`, () => {
        expect(getAbilitiesByGeneration(gen)).toHaveLength(expected[gen]);
      });
    });
  });

  describe("getUniqueAbilities tests", () => {
    test("Unique", () => {
      expect(getUniqueAbilities()).toHaveLength(68);
    });
  });
});
