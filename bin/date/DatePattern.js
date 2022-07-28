var _a;
import { DateFormat } from "./DateFormat";
/**
 * 日期格式化类，提供常用的日期格式化对象
 *
 * */
export class DatePattern extends Date {
}
_a = DatePattern;
/**
 * 标准日期时间格式，精确到秒：yyyy-MM-dd HH:mm:ss
 */
DatePattern.NORM_DATETIME_PATTERN = "yyyy-MM-dd HH:mm:ss";
/**
 * 标准日期格式：yyyy-MM-dd
 */
DatePattern.NORM_DATE_PATTERN = "yyyy-MM-dd";
/**
 * 标准时间格式：HH:mm:ss
 */
DatePattern.NORM_TIME_PATTERN = "HH:mm:ss";
/**
 * 标准日期格式：yyyy年MM月dd日
 */
DatePattern.CHINESE_DATE_PATTERN = "yyyy年MM月dd日";
/**
 * 标准日期格式：yyyy年MM月dd日 HH时mm分ss秒
 */
DatePattern.CHINESE_DATE_TIME_PATTERN = "yyyy年MM月dd日 HH时mm分ss秒";
/**
 * 标准日期时间格式，精确到秒 ：yyyy-MM-dd HH:mm:ss
 */
DatePattern.NORM_DATETIME_FORMAT = new DateFormat(_a.NORM_DATETIME_PATTERN);
/**
 * 标准日期格式 {@link DateFormat}：yyyy-MM-dd
 */
DatePattern.NORM_DATE_FORMAT = new DateFormat(_a.NORM_DATE_PATTERN);
/**
 * 标准时间格式 {@link DateFormat}：HH:mm:ss
 */
DatePattern.NORM_TIME_FORMAT = new DateFormat(_a.NORM_TIME_PATTERN);
/**
 * 标准日期格式 {@link DateFormat}：yyyy年MM月dd日
 */
DatePattern.CHINESE_DATE_FORMAT = new DateFormat(_a.CHINESE_DATE_PATTERN);
/**
 * 标准日期格式 {@link DateFormat}：yyyy年MM月dd日HH时mm分ss秒
 */
DatePattern.CHINESE_DATE_TIME_FORMAT = new DateFormat(_a.CHINESE_DATE_TIME_PATTERN);
