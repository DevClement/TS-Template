/**
 * DefaultEntity class
 * Allows to manage a Default entity
 */
export default class DefaultEntity {
  private _id: number;
  private _name: string;

  /**
   * Create Default entity
   * @param {number} id The id of entity
   * @param {string} name The name of entity
   */
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;

    Object.setPrototypeOf(this, DefaultEntity.prototype);
  }

  /**
   * Getter id
   * @return {number}
   */
  public get id(): number {
    return this._id;
  }

  /**
   * Getter name
   * @return {string}
   */
  public get name(): string {
    return this._name;
  }

  /**
   * Setter id
   * @param {number} value
   */
  public set id(value: number) {
    this._id = value;
  }

  /**
   * Setter name
   * @param {string} value
   */
  public set name(value: string) {
    this._name = value;
  }
}
