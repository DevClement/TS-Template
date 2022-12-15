import express from 'express';
import APIController from '../controllers/APIController';
import APIMiddleware from '../middleware/APIMiddleware';

// eslint-disable-next-line new-cap
const route: express.Router = express.Router();

export default (app: express.Router) => {
  route.get('/settings/locales/update',
      [
        APIMiddleware.requireAdmin,
      ],
      APIController.localesUpdate);

  app.use('/api/', route);
};
