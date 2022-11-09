import dotenv from 'dotenv';

const envFound = dotenv.config();
if (envFound.error) {
  throw new Error('Couldn\'t find .env file');
}

export default {
  port: parseInt(envFound.parsed.PORT, 10),
  nodeEnv: envFound.parsed.NODE_ENV,
  secretKey: envFound.parsed.SECRET_KEY,
  websiteURL: envFound.parsed.URL,
  version: '1.0.1',
  activity: envFound.parsed.ACTIVITY,

  database: {
    host: envFound.parsed.MYSQL_HOST,
    name: envFound.parsed.MYSQL_NAME,
    user: envFound.parsed.MYSQL_USER,
    password: envFound.parsed.MYSQL_PASSWORD,
    prefix: envFound.parsed.MYSQL_PREFIX,
  },

  mailer: {
    host: envFound.parsed.MAILER_HOST,
    port: envFound.parsed.MAILER_PORT,
    auth: {
      user: envFound.parsed.MAILER_AUTH_USER,
      password: envFound.parsed.MAILER_AUTH_PASSWORD,
    },
    sender: {
      name: envFound.parsed.MAILER_SENDER_NAME,
    },
    internal: envFound.parsed.MAILER_INTERNAL.split(','),
  },
};
