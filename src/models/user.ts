export class ImmutableUser {
  public readonly id: string;
  public readonly name: string;
  public readonly birthDay: Date;
  public readonly message: string;

  public constructor(
    id: string = '',
    name: string = '',
    birthDay: Date = new Date(0, 1, 1),
    message: string = '',
  ) {
    this.id = id;
    this.name = name;
    this.birthDay = birthDay;
    this.message = message;
  }
}

export class MutableUser {
  public id: string = '';
  public name: string = '';
  public birthDay: Date = new Date(0, 1, 1);
  public message: string = '';

  public toImmutable(): ImmutableUser {
    return new ImmutableUser(this.id, this.name, this.birthDay, this.message);
  }
}
