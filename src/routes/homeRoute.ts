import { Router } from 'express';
import HomeController from '../controllers/homeController';

const route: Router = Router();

export default (app: Router) => {
    route.get('/', HomeController.index);

    app.use('/', route);
};