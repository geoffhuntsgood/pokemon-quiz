export class Ability {
  constructor(
    public readonly number: number,
    public readonly name: string,
    public readonly displayName: string,
    public readonly description: string,
    public readonly isUnique?: boolean
  ) {}
}
