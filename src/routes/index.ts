import express from 'express';
import home from './homeRoute';

export default () => {
  // eslint-disable-next-line new-cap
  const route: express.Router = express.Router();

  home(route);

  return route;
};
