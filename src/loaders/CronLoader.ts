import {setInterval} from 'timers';
import config from '../config';
import LocalesModel from '../models/LocalesModel';

/**
 * The CronLoader allows to create Cron loop.
 */
export default class CronLoader {
  /**
   * Allows to create Class
   */
  constructor() {
    this.getLocales();

    setTimeout(() => {
      this.callAll();

      setInterval(() => {
        this.callAll();
      }, 1000 * 60 * 5);
    }, 1000 * 5);
  }

  /**
   * Allows to call all functions
   */
  private callAll(): void {
    this.getLocales();
  }

  /**
   * Allows to get locales
   */
  private async getLocales(): Promise<void> {
    const locales = await LocalesModel.getAll(config.activity);

    for (const locale of locales) {
      locale.saveFile();
    }
  }
}
