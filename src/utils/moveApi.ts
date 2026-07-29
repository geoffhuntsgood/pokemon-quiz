import type { Generation, Move } from "../classes";
import { GenNumber, MoveCategory, type Type } from "../enums";
import { allGens } from "../lists";

const allMoves: Move[] = allGens.flatMap((gen: Generation) => gen.moves);

export const getMovesByGeneration = (
  generation: GenNumber,
  gmax?: boolean
): Move[] => {
  const moves =
    generation === "All"
      ? allMoves
      : allGens.filter((gen: Generation) => gen.number === generation)[0].moves;

  return gmax
    ? moves
    : moves.filter((move: Move) => move.category !== MoveCategory.GMax);
};

export const getMovesByType = (type: Type): Move[] => {
  return allMoves.filter((move: Move) => move.type === type);
};

export const getMovesByCategory = (category: MoveCategory): Move[] => {
  return allMoves.filter((move: Move) => move.category === category);
};
