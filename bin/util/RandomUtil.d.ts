/**
 * 随机工具类
 *
 * @author ices
 */
export declare class RandomUtil {
    /**
     * 用于随机选的数字
     */
    static BASE_NUMBER: string;
    /**
     * 用于随机选的字符
     */
    static BASE_CHAR: string;
    /**
     * 用于随机选的字符和数字
     */
    static BASE_CHAR_NUMBER: string;
    /**
     * 获得随机Boolean值
     *
     * @return true or false
     * @since 4.5.9
     */
    static randomBoolean(): boolean;
    /**
     * 随机汉字（'\u4E00'-'\u9FFF'）
     *
     * @return 随机的汉字字符
     * @since 5.7.15
     */
    static randomChinese(): string;
    /**
     * 获得指定范围内的随机数 [0,limit)
     *
     * @param limit 限制随机数的范围，不包括这个数
     * @return 随机数
     * @see Random#nextInt(int)
     */
    static randomInt(max: number | null, min: number | null): number;
    /**
     * 随机获得列表中的元素
     *
     * @param <T>   元素类型
     * @param list  列表
     * @param limit 限制列表的前N项
     * @return 随机元素
     */
    static randomEle<T>(list: Array<T>, limit: number | null): T;
    /**
     * 随机字符
     *
     * @param baseString 随机字符选取的样本
     * @return 随机字符
     * @since 3.1.2
     */
    static randomChar(): string;
    /**
     * 随机数字，数字为0~9单个数字
     *
     * @return 随机数字字符
     * @since 3.1.2
     */
    static randomNumber(): number;
    /**
     * 生成随机颜色
     *
     * @return 随机颜色
     * @since 4.1.5
     * @deprecated 使用ImgUtil.randomColor()
     */
    static randomColor(): string;
}
