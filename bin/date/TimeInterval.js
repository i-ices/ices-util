import { GroupTimeInterval } from "./GroupTimeInterval";
import { StrUtil } from "../util/StrUtil";
/**
 * 计时器<br>
 * 计算某个过程花费的时间，精确到毫秒或纳秒
 */
export class TimeInterval extends GroupTimeInterval {
    constructor(isNano) {
        super(isNano !== null && isNano !== void 0 ? isNano : false);
    }
    /**
     * @return 开始计时并返回当前时间
     */
    start() {
        return super.start(TimeInterval.DEFAULT_ID);
    }
    /**
     * @return 重新计时并返回从开始到当前的持续时间
     */
    intervalRestart() {
        return super.intervalRestart(TimeInterval.DEFAULT_ID);
    }
    /**
     * 重新开始计算时间（重置开始时间）
     *
     * @return this
     * @see #start()
     * @since 3.0.1
     */
    restart() {
        super.start(TimeInterval.DEFAULT_ID);
        return this;
    }
    /**
     * 从开始到当前的间隔时间（毫秒数）<br>
     * 如果使用纳秒计时，返回纳秒差，否则返回毫秒差
     *
     * @return 从开始到当前的间隔时间（毫秒数）
     */
    interval() {
        return super.interval(TimeInterval.DEFAULT_ID);
    }
}
TimeInterval.DEFAULT_ID = StrUtil.EMPTY;
