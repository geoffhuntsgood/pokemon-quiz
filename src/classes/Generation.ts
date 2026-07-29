import type { GenNumber } from "../enums";
import type { Ability } from "./Ability";
import type { Move } from "./Move";
import type { Pokemon } from "./Pokemon";

export class Generation {
  constructor(
    public readonly number: GenNumber,
    public readonly abilities: Ability[],
    public readonly moves: Move[],
    public readonly pokemon: Pokemon[]
  ) {}
}
