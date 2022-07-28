import { DateTime } from "./DateTime";
import { DatePattern } from "./DatePattern";
import { TimeInterval } from "./TimeInterval";
/**
 * 时间工具类
 */
export class DateUtil {
    /**
     * 当前时间，转换为{@link DateTime}对象
     *
     * @return 当前时间
     */
    static date(date) {
        return new DateTime(date);
    }
    /**
     * 当前时间的时间戳
     *
     * @return 时间
     */
    static current() {
        return Date.now();
    }
    /**
     * 当前时间的时间戳（秒）
     *
     * @return 当前时间秒数
     * @since 4.0.0
     */
    static currentSeconds() {
        return this.current() / 1000;
    }
    /**
     * 当前时间，格式 yyyy-MM-dd HH:mm:ss
     *
     * @return 当前时间的标准形式字符串
     */
    static now() {
        return this.formatDateTime(new DateTime(null));
    }
    /**
     * 当前日期，格式 yyyy-MM-dd
     *
     * @return 当前日期的标准形式字符串
     */
    static today() {
        return this.formatDate(new DateTime(null));
    }
    /**
     * 格式化日期部分（不包括时间）<br>
     * 格式 yyyy-MM-dd
     *
     * @param date 被格式化的日期
     * @return 格式化后的字符串
     */
    static formatDate(date) {
        if (null == date) {
            return null;
        }
        return DatePattern.NORM_DATE_FORMAT.format(date);
    }
    /**
     * 格式化日期时间<br>
     * 格式 yyyy-MM-dd HH:mm:ss
     *
     * @param date 被格式化的日期
     * @return 格式化后的日期
     */
    static formatDateTime(date) {
        if (null == date) {
            return null;
        }
        return DatePattern.NORM_DATETIME_FORMAT.format(date);
    }
    /**
     * 格式化时间<br>
     * 格式 HH:mm:ss
     *
     * @param date 被格式化的日期
     * @return 格式化后的字符串
     * @since 3.0.1
     */
    static formatTime(date) {
        if (null == date) {
            return null;
        }
        return DatePattern.NORM_TIME_FORMAT.format(date);
    }
    /**
     * 格式化为中文日期格式，则返回类似：2018年10月24日，否则返回二〇一八年十月二十四日
     *
     * @param date        被格式化的日期
     * @param isUppercase 是否采用大写形式
     * @param withTime    是否包含时间部分
     * @return 中文日期字符串
     * @since 5.3.9
     */
    static formatChineseDate(date, withTime) {
        if (null == date) {
            return null;
        }
        return ((withTime !== null && withTime !== void 0 ? withTime : true) ? DatePattern.CHINESE_DATE_TIME_FORMAT : DatePattern.CHINESE_DATE_FORMAT).format(date);
    }
    /**
     * 计时器<br>
     * 计算某个过程花费的时间，精确到毫秒
     *
     * @return Timer
     */
    static timer(isNano) {
        return new TimeInterval(isNano);
    }
    /**
     * 是否为上午
     *
     * @return 是否为上午
     */
    static isAM() {
        return this.date(null).getHours() < 12;
    }
    /**
     * 是否为下午
     *
     * @return 是否为下午
     */
    static isPM() {
        return this.date(null).getHours() > 12;
    }
    /**
     * 判断一个年份是否是闰年
     * @param  {Number}  year
     * @return {Boolean}
     */
    static isLeapYear(year) {
        year = Number(year);
        // 判断是否为闰年（普通年能被4整除且不能被100整除的年份是闰年，世纪年能被400整除的年份是闰年）
        return isNaN(year) ? false : (year % 400 === 0 || year % 4 === 0 && year % 100 !== 0);
    }
    ;
}
