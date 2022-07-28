import { DateFormat } from "./DateFormat";
/**
 * 日期格式化类，提供常用的日期格式化对象
 *
 * */
export declare class DatePattern extends Date {
    /**
     * 标准日期时间格式，精确到秒：yyyy-MM-dd HH:mm:ss
     */
    static readonly NORM_DATETIME_PATTERN: string;
    /**
     * 标准日期格式：yyyy-MM-dd
     */
    static readonly NORM_DATE_PATTERN: string;
    /**
     * 标准时间格式：HH:mm:ss
     */
    static readonly NORM_TIME_PATTERN: string;
    /**
     * 标准日期格式：yyyy年MM月dd日
     */
    static readonly CHINESE_DATE_PATTERN: string;
    /**
     * 标准日期格式：yyyy年MM月dd日 HH时mm分ss秒
     */
    static readonly CHINESE_DATE_TIME_PATTERN: string;
    /**
     * 标准日期时间格式，精确到秒 ：yyyy-MM-dd HH:mm:ss
     */
    static readonly NORM_DATETIME_FORMAT: DateFormat;
    /**
     * 标准日期格式 {@link DateFormat}：yyyy-MM-dd
     */
    static readonly NORM_DATE_FORMAT: DateFormat;
    /**
     * 标准时间格式 {@link DateFormat}：HH:mm:ss
     */
    static readonly NORM_TIME_FORMAT: DateFormat;
    /**
     * 标准日期格式 {@link DateFormat}：yyyy年MM月dd日
     */
    static readonly CHINESE_DATE_FORMAT: DateFormat;
    /**
     * 标准日期格式 {@link DateFormat}：yyyy年MM月dd日HH时mm分ss秒
     */
    static readonly CHINESE_DATE_TIME_FORMAT: DateFormat;
}
