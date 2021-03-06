import express from 'express';
import cors from 'cors';
import routes from '../routes';
import path from 'path';
import i18nLoader from './i18nLoader';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import config from '../config';
/*

declare module 'express-session' {
    interface SessionData {}
};

*/

export default ({app}: { app: express.Application }) => {
  app.use(cors());

  app.use(cookieParser());

  const sessionMiddleware = session({
    secret: config.secretKey,
    resave: true,
    saveUninitialized: false,
    name: 'token',
    cookie: {
      path: '/',
      secure: false,
    },
  });

  app.use(express.json());
  app.use(express.urlencoded({extended: true}));

  app.use(sessionMiddleware);

  app.use(i18nLoader.init);

  app.use('/public', express.static(path.join(path.resolve(), '/dist/public')));

  app.use((req, res, next) => {
    res.locals.data = {};
    next();
  });

  app.use('/', routes());

  app.set('views', path.join(path.resolve(), '/dist/views'));

  app.set('view engine', 'ejs');

  app.use((req, res, next) => {
    const err = new Error('Not Found');
    res.status(404);
    next(err);
  });

  app.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
      return res
          .status(err.status)
          .send({message: err.message})
          .end();
    }
    return next(err);
  });

  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
      errors: {
        message: err.message,
      },
    });
  });
};
