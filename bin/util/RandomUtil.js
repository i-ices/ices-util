var _a;
/**
 * 随机工具类
 *
 * @author ices
 */
export class RandomUtil {
    /**
     * 获得随机Boolean值
     *
     * @return true or false
     * @since 4.5.9
     */
    static randomBoolean() {
        return 0 == this.randomInt(2, null);
    }
    /**
     * 随机汉字（'\u4E00'-'\u9FFF'）
     *
     * @return 随机的汉字字符
     * @since 5.7.15
     */
    static randomChinese() {
        return String.fromCharCode(this.randomInt(7424, null));
    }
    /**
     * 获得指定范围内的随机数 [0,limit)
     *
     * @param limit 限制随机数的范围，不包括这个数
     * @return 随机数
     * @see Random#nextInt(int)
     */
    static randomInt(max, min) {
        min = min !== null && min !== void 0 ? min : 0;
        return Math.floor(Math.random() * (max == null ? 1 : max - min) + min);
    }
    /**
     * 随机获得列表中的元素
     *
     * @param <T>   元素类型
     * @param list  列表
     * @param limit 限制列表的前N项
     * @return 随机元素
     */
    static randomEle(list, limit) {
        if (list.length < (limit !== null && limit !== void 0 ? limit : -1)) {
            limit = list.length;
        }
        return list[(this.randomInt(limit, null))];
    }
    /**
     * 随机字符
     *
     * @param baseString 随机字符选取的样本
     * @return 随机字符
     * @since 3.1.2
     */
    static randomChar() {
        return this.BASE_CHAR_NUMBER.charAt(this.randomInt(this.BASE_CHAR_NUMBER.length, null));
    }
    /**
     * 随机数字，数字为0~9单个数字
     *
     * @return 随机数字字符
     * @since 3.1.2
     */
    static randomNumber() {
        return this.randomInt(10, null);
    }
    /**
     * 生成随机颜色
     *
     * @return 随机颜色
     * @since 4.1.5
     * @deprecated 使用ImgUtil.randomColor()
     */
    static randomColor() {
        return `${this.randomInt(256, null)}, ${this.randomInt(256, null)}, ${this.randomInt(256, null)}`;
    }
}
_a = RandomUtil;
/**
 * 用于随机选的数字
 */
RandomUtil.BASE_NUMBER = "0123456789";
/**
 * 用于随机选的字符
 */
RandomUtil.BASE_CHAR = "abcdefghijklmnopqrstuvwxyz";
/**
 * 用于随机选的字符和数字
 */
RandomUtil.BASE_CHAR_NUMBER = _a.BASE_CHAR + _a.BASE_NUMBER;
