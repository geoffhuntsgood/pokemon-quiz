import { PokemonCategory, Type } from "../enums";

export class Pokemon {
  constructor(
    public readonly dex: number,
    public readonly name: string,
    public readonly displayName: string,
    public readonly type: Type,
    public readonly img?: string,
    public readonly type2?: Type,
    public readonly isVariant?: boolean,
    public readonly noDefaultForm?: boolean,
    public readonly category?: PokemonCategory,
    public readonly category2?: PokemonCategory
  ) {}
}
