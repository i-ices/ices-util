import { ObjectUtil } from "../util/ObjectUtil";
/**
 * 分组计时器<br>
 * 计算某几个过程花费的时间，精确到毫秒或纳秒
 */
export class GroupTimeInterval {
    /**
     * 构造
     *
     * @param isNano 是否使用纳秒计数，false则使用毫秒
     */
    constructor(isNano) {
        this.isNano = isNano;
        this.groupMap = new Map();
    }
    /**
     * 清空所有定时记录
     *
     * @return this
     */
    clear() {
        this.groupMap.clear();
        return this;
    }
    /**
     * 开始计时并返回当前时间
     *
     * @param id 分组ID
     * @return 开始计时并返回当前时间
     */
    start(id) {
        const time = this.getTime();
        this.groupMap.set(id, time);
        return time;
    }
    /**
     * 重新计时并返回从开始到当前的持续时间秒<br>
     * 如果此分组下没有记录，则返回0;
     *
     * @param id 分组ID
     * @return 重新计时并返回从开始到当前的持续时间
     */
    intervalRestart(id) {
        const now = this.getTime();
        // @ts-ignore
        return now - ObjectUtil.defaultIfNull(this.groupMap.get(id, now), now);
    }
    /**
     * 从开始到当前的间隔时间（毫秒数）<br>
     * 如果使用纳秒计时，返回纳秒差，否则返回毫秒差<br>
     * 如果分组下没有开始时间，返回{@code null}
     *
     * @param id 分组ID
     * @return 从开始到当前的间隔时间（毫秒数）
     */
    interval(id) {
        const lastTime = this.groupMap.get(id);
        if (null == lastTime || undefined == lastTime) {
            return 0;
        }
        // @ts-ignore
        return this.getTime() - lastTime;
    }
    /**
     * 获取时间的毫秒或纳秒数，纳秒非时间戳
     *
     * @return 时间
     */
    getTime() {
        return this.isNano ? process.hrtime.bigint() : Date.now();
    }
}
