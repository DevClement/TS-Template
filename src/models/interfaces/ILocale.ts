/**
 * Interface of Locale Entity
 */
declare interface ILocale {
  id: number,
  lang: string,
  activity: string,
  type: string,
  translation: string
}

export default ILocale;
