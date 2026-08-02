import type { Ability, Move, Pokemon } from "../classes";
import type { GenNumber, MoveCategory, PokemonCategory, Type } from "../enums";

export type Selection = "Pokémon" | "Moves" | "Abilities";
export type SubSelection = "Generation" | "Type" | "Category" | "Unique";
export type ItemList = Ability[] | Move[] | Pokemon[];

export type ButtonSet =
  | GenNumber[]
  | Type[]
  | MoveCategory[]
  | PokemonCategory[]
  | string[];

export type BestTime = {
  player_name: boolean;
  category: string;
  best_time: string;
};
