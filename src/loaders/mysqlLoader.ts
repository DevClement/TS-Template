import mysql2, { Pool } from 'mysql2/promise';

import config from '../config';

export default class MysqlLoader {
    private static instance: Pool;

    public static getInstance(): Pool {
        if(MysqlLoader.instance === undefined) {
            MysqlLoader.createConnection();
        }
        return MysqlLoader.instance;
    }

    private static createConnection(): any {
        MysqlLoader.instance = mysql2.createPool({
            host: config.database.host,
            user: config.database.user,
            database: config.database.name,
            password: config.database.password,
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0,
            charset: 'utf8_general_ci'
        });
    }
}