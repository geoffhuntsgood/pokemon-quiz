import type { ItemList } from "../utils/types";

export class Settings {
  constructor(
    public readonly label: string,
    public readonly items: ItemList
  ) {}
}
