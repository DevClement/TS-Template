import dotenv from 'dotenv';

const envFound = dotenv.config();
if (envFound.error) {
  throw new Error('Couldn\'t find .env file');
}

export default {
  port: parseInt(envFound.parsed.PORT, 10),
  nodeEnv: envFound.parsed.NODE_ENV,
  secretKey: envFound.parsed.SECRET_KEY,

  database: {
    host: envFound.parsed.MYSQL_HOST,
    name: envFound.parsed.MYSQL_NAME,
    user: envFound.parsed.MYSQL_USER,
    password: envFound.parsed.MYSQL_PASSWORD,
  },
};
