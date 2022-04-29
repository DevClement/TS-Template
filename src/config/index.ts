import dotenv from 'dotenv';

const envFound = dotenv.config();
if (envFound.error) {
    throw new Error("Couldn't find .env file");
}

export default {
    port: parseInt(process.env.PORT, 10),
    nodeEnv: process.env.NODE_ENV,
    secretKey: process.env.SECRET_KEY,

    database: {
        host: process.env.MYSQL_HOST,
        name: process.env.MYSQL_NAME,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD
    },
};