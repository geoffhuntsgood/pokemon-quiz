import { MoveCategory, Type } from "../enums";

export class Move {
  constructor(
    public readonly number: number,
    public readonly name: string,
    public readonly displayName: string,
    public readonly type: Type,
    public readonly category: MoveCategory
  ) {}
}
