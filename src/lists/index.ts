import type { Generation } from "../classes";
import { gen1 } from "./gen1";
import { gen2 } from "./gen2";
import { gen3 } from "./gen3";
import { gen4 } from "./gen4";
import { gen5 } from "./gen5";
import { gen6 } from "./gen6";
import { gen7 } from "./gen7";
import { gen8 } from "./gen8";
import { gen9 } from "./gen9";

export * from "./gen1";
export * from "./gen2";
export * from "./gen3";
export * from "./gen4";
export * from "./gen5";
export * from "./gen6";
export * from "./gen7";
export * from "./gen8";
export * from "./gen9";

export const allGens: Generation[] = [
  gen1,
  gen2,
  gen3,
  gen4,
  gen5,
  gen6,
  gen7,
  gen8,
  gen9
];
