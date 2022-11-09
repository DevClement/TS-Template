/**
 * Utils Helpeur
 * Allows you to interact with the view
 */
export default class Helpeur {
  /**
   * Allows add 0 before number
   * @param {number} num The number
   * @return {string} number formated
   */
  public static addLeadingZero(num: number): string {
    return String(num).padStart(2, '0');
  }
}
