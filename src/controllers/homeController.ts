import express from 'express';

/**
 * HomeController class
 * Used for home route controllers
 */
export default class HomeController {
  /**
   * Render index
   * @param {express.Request} req The request
   * @param {express.Response} res The response
   */
  static index(req: express.Request, res: express.Response) {
    const data: any = {
      page: 'home',
    };

    res.render('layouts/default', {
      data,
    });
  }
}
