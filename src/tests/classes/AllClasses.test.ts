import { describe, expect, test } from "vitest";
import { Ability, Generation, Move, Pokemon, Settings } from "../../classes";
import { GenNumber, MoveCategory, PokemonCategory, Type } from "../../enums";

describe("Class instantiation sanity checks", () => {
  test("Ability check", () => {
    const ability = new Ability(1, "name", "Name", "Description");
    expect(ability.name).toBe("name");
  });

  test("Generation check", () => {
    const generation = new Generation(GenNumber.One, [], [], []);
    expect(generation.number).toBe(GenNumber.One);
  });

  test("Move check", () => {
    const move = new Move(1, "name", "Name", Type.Bug, MoveCategory.Max);
    expect(move.type).toBe(Type.Bug);
  });

  test("Pokemon check", () => {
    const pokemon = new Pokemon(
      1,
      "name",
      "Name",
      Type.Bug,
      "img",
      Type.Dark,
      false,
      false,
      PokemonCategory.Baby,
      PokemonCategory.Fossil
    );
    expect(pokemon.type).toBe(Type.Bug);
  });

  test("Settings check", () => {
    const settings = new Settings("Settings", []);
    expect(settings.label).toBe("Settings");
  });
});
