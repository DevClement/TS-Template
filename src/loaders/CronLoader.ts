/**
 * The CronLoader allows to create Cron loop.
 */
export default class CronLoader {
  /**
   * Allows to create Class
   */
  constructor() {
    setTimeout(() => {
      this.callAll();
    }, 1000 * 5);
  }

  /**
   * Allows to call all functions
   */
  private callAll(): void {
    // Call functions
  }
}
