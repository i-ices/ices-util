import { GroupTimeInterval } from "./GroupTimeInterval";
/**
 * 计时器<br>
 * 计算某个过程花费的时间，精确到毫秒或纳秒
 */
export declare class TimeInterval extends GroupTimeInterval {
    private static readonly DEFAULT_ID;
    constructor(isNano: boolean | null);
    /**
     * @return 开始计时并返回当前时间
     */
    start(): number | bigint;
    /**
     * @return 重新计时并返回从开始到当前的持续时间
     */
    intervalRestart(): number | bigint;
    /**
     * 重新开始计算时间（重置开始时间）
     *
     * @return this
     * @see #start()
     * @since 3.0.1
     */
    restart(): TimeInterval;
    /**
     * 从开始到当前的间隔时间（毫秒数）<br>
     * 如果使用纳秒计时，返回纳秒差，否则返回毫秒差
     *
     * @return 从开始到当前的间隔时间（毫秒数）
     */
    interval(): number | bigint;
}
