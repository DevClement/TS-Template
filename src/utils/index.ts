import { PRIORITY_HIGH, PRIORITY_NORMAL } from "constants";
import config from "../config";

export default class Utils {
    static log(priotity: number, ...data: any[]): void {
        if(config.nodeEnv === "development" || priotity === PRIORITY_HIGH) {
            const date: string = new Date().toLocaleDateString("fr-FR", {day: 'numeric', month: 'numeric', year: 'numeric'})
            const time: string = new Date().toLocaleTimeString('fr-FR', { hour12: false});
            console.log(`[${date} - ${time}] ${data.join(' ')}`);
        }
    }
}