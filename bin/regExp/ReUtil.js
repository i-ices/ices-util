import { RegExpPattern } from "./RegExpPattern";
export class ReUtil extends RegExpPattern {
    /**
     * 正则
     */
    static test(str, re) {
        return re.test(str);
    }
    /**
     * 正则
     */
    static exec(str, re) {
        return re.exec(str);
    }
}
