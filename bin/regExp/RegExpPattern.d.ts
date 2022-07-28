/**
 * 正则常用类，提供常用的正则对象
 * */
export declare class RegExpPattern {
    /**
     * 银行卡正则
     * @private 银行卡
     */
    static readonly BANK_CARD: RegExp;
    /**
     * 手机号正则
     * @private
     */
    static readonly PHONE: RegExp;
    /**
     * email正则
     */
    static readonly EMAIL: RegExp;
    /**
     * 身份证正则
     * @private
     */
    static readonly ID: RegExp;
    /**
     * 座机电话
     * @private
     */
    static readonly LANDLINE_TELEPHONE: RegExp;
    /**
     * 数字正则
     * @private
     */
    static readonly NUMBER: RegExp;
    /**
     * qq正则
     * @private
     */
    static readonly QQ: RegExp;
    /**
     * 小数正则
     */
    static readonly DECIMAL: RegExp;
    /**
     * 汉字正则
     */
    static readonly CHINESE_CHARACTERS: RegExp;
    /**
     * 英文字母正则
     */
    static readonly ENGLISH: RegExp;
    /**
     * 小写英文正则
     */
    static readonly LOWER_ENGLISH: RegExp;
    /**
     * 大写英文正则
     */
    static readonly CAPITALIZE_ENGLISH: RegExp;
    /**
     * IPV4正则
     */
    static readonly IPV4: RegExp;
    /**
     * IPV6正则
     */
    static readonly IPV6: RegExp;
    /**
     * 颜色正则
     */
    static readonly COLOR: RegExp;
    /**
     * 邮政编码正则
     */
    static readonly POSTAL_CODE: RegExp;
}
