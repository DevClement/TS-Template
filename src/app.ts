import express from 'express';
import { createServer } from "http";
import config from './config';
import Utils from './utils';
import { PRIORITY_HIGH } from 'constants';

import expressLoader from './loaders/expressLoader';

const app = express();
const server = createServer(app);

expressLoader({ app, server });

server.listen(config.port, () => {
    Utils.log(PRIORITY_HIGH, "Server is listening on", config.port)
});