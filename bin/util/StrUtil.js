export class StrUtil {
    /**
     * 将字符串的首字母转成大写.
     * @param first
     * @param rest
     */
    // @ts-ignore
    static capitalize([first, ...rest]) {
        return first.toUpperCase() + rest.join('');
    }
    /**
     * 将一个句子中每个单词首字母转换成大写字母
     * @param str
     */
    static capitalizeEveryWord(str) {
        return str.replace(/\b[a-z]/g, char => char.toUpperCase());
    }
    /**
     * 字符串是否为空
     *
     * @param str 被检测的字符串
     * @return 是否为空
     * @see #isBlank(CharSequence)
     */
    static isEmpty(str) {
        return str == null || str.length == 0;
    }
}
/**
 * 字符串常量：空字符串 {@code ""}
 */
StrUtil.EMPTY = "";
