import express from 'express';
import HomeController from '../controllers/homeController';

// eslint-disable-next-line new-cap
const route: express.Router = express.Router();

export default (app: express.Router) => {
  route.get('/', HomeController.index);

  app.use('/', route);
};
