import {PRIORITY_HIGH} from 'constants';
import express from 'express';
import requestIp from 'request-ip';
import Utils from '../utils';

/**
 * APIMiddleware class
 * Use to manage API
 */
export default class APIMiddleware {
  /**
   * Check if request is execute by admin IP
   * @param {express.Request} req The request
   * @param {express.Response} res The response
   * @param {express.NextFunction} next The callback
   * @return {express.NextFunction | express.Response} Next middleware / controller of redirect
   */
  static requireAdmin(req: express.Request, res: express.Response, next: express.NextFunction): express.NextFunction | express.Response {
    if (requestIp.getClientIp(req) !== '82.64.70.229' && requestIp.getClientIp(req) !== '::1') {
      Utils.log(PRIORITY_HIGH, 'Not authorized IP:', requestIp.getClientIp(req));
      Utils.log(PRIORITY_HIGH, 'Authorized IP:', '82.64.70.229', 'or', '::1');

      return res.sendStatus(401);
    }
    next();
  }
}
