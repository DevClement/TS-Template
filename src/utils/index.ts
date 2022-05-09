import {PRIORITY_HIGH} from 'constants';
import config from '../config';

/**
 * Utils Class
 * Allows to manage all the small logical functions
 */
export default class Utils {
  /**
   * Allows to create logs with time and date
   * @param {number} priotity Priority of log
   * @param {any[]} data Data for print
   */
  public static log(priotity: number, ...data: any[]): void {
    if (config.nodeEnv === 'development' || priotity === PRIORITY_HIGH) {
      const date: string = new Date().toLocaleDateString(
          'fr-FR', {day: 'numeric', month: 'numeric', year: 'numeric'},
      );
      const time: string = new Date().toLocaleTimeString(
          'fr-FR', {hour12: false},
      );
      console.log(`[${date} - ${time}] ${data.join(' ')}`);
    }
  }
}
