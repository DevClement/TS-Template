import { FieldPacket, OkPacket, ResultSetHeader, RowDataPacket } from "mysql2";
import MysqlLoader from "../loaders/mysqlLoader";
import DefaultEntity from "./entities/defaultEntity";

export default class DefaultsModel {
    static async getAll(): Promise<DefaultEntity> {
        return await MysqlLoader.getInstance().query("SELECT * FROM default")
        .then((value: [RowDataPacket[] | RowDataPacket[][] | OkPacket | OkPacket[] | ResultSetHeader, FieldPacket[]]) => {

            if((value).values().next().value[0] === undefined) {
                return null;
            }

            for (const defaultRow of (value).values().next().value) {
                // default row is row
            }

            return null;
        });
    }
}