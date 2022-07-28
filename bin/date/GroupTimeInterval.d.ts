/**
 * 分组计时器<br>
 * 计算某几个过程花费的时间，精确到毫秒或纳秒
 */
export declare class GroupTimeInterval {
    private readonly isNano;
    protected readonly groupMap: Map<string, bigint | number>;
    /**
     * 构造
     *
     * @param isNano 是否使用纳秒计数，false则使用毫秒
     */
    constructor(isNano: boolean);
    /**
     * 清空所有定时记录
     *
     * @return this
     */
    clear(): GroupTimeInterval;
    /**
     * 开始计时并返回当前时间
     *
     * @param id 分组ID
     * @return 开始计时并返回当前时间
     */
    start(id: string): bigint | number;
    /**
     * 重新计时并返回从开始到当前的持续时间秒<br>
     * 如果此分组下没有记录，则返回0;
     *
     * @param id 分组ID
     * @return 重新计时并返回从开始到当前的持续时间
     */
    intervalRestart(id: string): number | bigint;
    /**
     * 从开始到当前的间隔时间（毫秒数）<br>
     * 如果使用纳秒计时，返回纳秒差，否则返回毫秒差<br>
     * 如果分组下没有开始时间，返回{@code null}
     *
     * @param id 分组ID
     * @return 从开始到当前的间隔时间（毫秒数）
     */
    interval(id: string): number | bigint;
    /**
     * 获取时间的毫秒或纳秒数，纳秒非时间戳
     *
     * @return 时间
     */
    private getTime;
}
