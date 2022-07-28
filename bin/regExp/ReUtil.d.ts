import { RegExpPattern } from "./RegExpPattern";
export declare class ReUtil extends RegExpPattern {
    /**
     * 正则
     */
    static test(str: string, re: RegExp): boolean;
    /**
     * 正则
     */
    static exec(str: string, re: RegExp): RegExpExecArray | null;
}
