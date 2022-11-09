import express from 'express';
import {createServer} from 'http';
import config from './config';
import Utils from './utils';
import {PRIORITY_HIGH} from 'constants';

import expressLoader from './loaders/expressLoader';
import CronLoader from './loaders/CronLoader';

const app = express();
const server = createServer(app);

expressLoader({app});

// eslint-disable-next-line no-unused-vars
new CronLoader();

server.listen(config.port, () => {
  Utils.log(PRIORITY_HIGH, 'Starting', config.websiteURL);
  Utils.log(PRIORITY_HIGH, 'Port :', config.port);
  Utils.log(PRIORITY_HIGH, 'Version :', config.version);
});
