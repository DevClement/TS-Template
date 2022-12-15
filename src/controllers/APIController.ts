import express from 'express';
import LocalesModel from '../models/LocalesModel';

/**
 * APIController class
 * Used for API routes
 */
export default class APIController {
  /**
   * Update locales
   * @param {express.Request} req The request
   * @param {express.Response} res The response
   */
  static async localesUpdate(req: express.Request, res: express.Response) {
    await LocalesModel.syncLocales();

    res.json({status: true});
  }
}
