/* eslint-disable no-undef */
export default {
  port: parseInt(process.env.PORT, 10),
  nodeEnv: process.env.NODE_ENV,
  secretKey: process.env.SECRET_KEY,
  websiteURL: process.env.URL,
  version: '1.0.1',
  activity: process.env.ACTIVITY,

  database: {
    host: process.env.MYSQL_HOST,
    name: process.env.MYSQL_NAME,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    prefix: process.env.MYSQL_PREFIX,
    port: Number.parseInt(process.env.MYSQL_PORT, 10),
  },

  mailer: {
    host: process.env.MAILER_HOST,
    port: process.env.MAILER_PORT,
    auth: {
      user: process.env.MAILER_AUTH_USER,
      password: process.env.MAILER_AUTH_PASSWORD,
    },
    sender: {
      name: process.env.MAILER_SENDER_NAME,
    },
    internal: process.env.MAILER_INTERNAL.split(','),
  },
};
