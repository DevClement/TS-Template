import config from '../config';
import MysqlLoader from '../loaders/mysqlLoader';
import LocaleEntity from './entities/LocaleEntity';
import ILocale from './interfaces/ILocale';

/**
 * LocalesModel class
 * Used for use locales table
 */
export default class LocalesModel {
  // The name of the table
  static TABLE_NAME = `print_locales`;

  /**
   * Retrieves all ToOffer entity from the store_to_offer table
   * @param {string} activity The activity
   */
  static async getAll(activity: string): Promise<LocaleEntity[]> {
    const [rows] = await MysqlLoader.getInstance().query(`SELECT * FROM ${LocalesModel.TABLE_NAME} WHERE type = 'NA' AND activity = ?`, [activity]);

    const locales: LocaleEntity[] = [];

    // Get if the result is an Array type and is upper 0 element
    if (Array.isArray(rows) && rows.length >= 0) {
      rows.forEach((localeRow) => {
        locales.push(new LocaleEntity(localeRow as ILocale));
      });
    }
    return locales;
  }

  /**
   * Allows to sync locales.
   */
  static async syncLocales(): Promise<void> {
    const locales = await LocalesModel.getAll(config.activity);

    for (const locale of locales) {
      locale.saveFile();
    }
  }
}
