import ILocale from '../interfaces/ILocale';
import fs from 'fs';
import path from 'path';
import Utils from '../../utils';
import {PRIORITY_HIGH} from 'constants';

/**
 * LocaleEntity class
 * Allows to manage an Locale entity
 */
export default class LocaleEntity {
  private _id: number;
  private _lang: string;
  private _activity: string;
  private _type: string;
  private _translation: JSON;

  public static DEFAULT = new Map();

  /**
   * Create Locale entity
   * @param {ILocale} locale The locale interface
   */
  constructor(locale: ILocale) {
    this.id = locale.id;
    this.lang = locale.lang;
    this.activity = locale.activity;
    this.type = locale.type;

    try {
      this.translation = JSON.parse(locale.translation);

      LocaleEntity.DEFAULT.set(this.lang, this.translation);
    } catch (error) {
      if (LocaleEntity.DEFAULT.get(this.lang)) {
        this.translation = LocaleEntity.DEFAULT.get(this.lang);
        Utils.log(PRIORITY_HIGH, `Language ${this.lang} JSON is not well trained`);
      } else {
        throw new Error(`Language ${this.lang} JSON is not well trained`);
      }
    }

    Object.setPrototypeOf(this, LocaleEntity.prototype);
  }

  /**
   * Allows to save Locale to file.json
   */
  public async saveFile(): Promise<void> {
    fs.writeFileSync(path.join(path.resolve(), `/dist/locales/${this.lang.toLowerCase()}.json`), JSON.stringify(this.translation), {encoding: 'utf-8'});
  }

  /**
   * Getter id
   * @return {number}
   */
  public get id(): number {
    return this._id;
  }

  /**
   * Getter lang
   * @return {string}
   */
  public get lang(): string {
    return this._lang;
  }

  /**
   * Getter activity
   * @return {string}
   */
  public get activity(): string {
    return this._activity;
  }

  /**
   * Getter type
   * @return {string}
   */
  public get type(): string {
    return this._type;
  }

  /**
   * Getter translation
   * @return {JSON}
   */
  public get translation(): JSON {
    return this._translation;
  }

  /**
   * Setter id
   * @param {number} value
   */
  public set id(value: number) {
    this._id = value;
  }

  /**
   * Setter lang
   * @param {string} value
   */
  public set lang(value: string) {
    this._lang = value;
  }

  /**
   * Setter activity
   * @param {string} value
   */
  public set activity(value: string) {
    this._activity = value;
  }

  /**
   * Setter type
   * @param {string} value
   */
  public set type(value: string) {
    this._type = value;
  }

  /**
   * Setter translation
   * @param {JSON} value
   */
  public set translation(value: JSON) {
    this._translation = value;
  }
}
