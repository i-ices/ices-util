export declare class StrUtil {
    /**
     * 字符串常量：空字符串 {@code ""}
     */
    static readonly EMPTY: string;
    /**
     * 将字符串的首字母转成大写.
     * @param first
     * @param rest
     */
    static capitalize([first, ...rest]: [any, ...any[]]): string;
    /**
     * 将一个句子中每个单词首字母转换成大写字母
     * @param str
     */
    static capitalizeEveryWord(str: string): string;
    /**
     * 字符串是否为空
     *
     * @param str 被检测的字符串
     * @return 是否为空
     * @see #isBlank(CharSequence)
     */
    static isEmpty(str: string | null): boolean;
}
