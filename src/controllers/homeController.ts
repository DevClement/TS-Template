import express from 'express';

export default class HomeController {
    static index(req: express.Request, res: express.Response) {

        res.locals.data.page = 'home';

        res.render('layouts/default', res.locals.data);
    }
}