export declare class DateTime extends Date {
    constructor(dateStr: any);
    /**
     * 是否为上午
     *
     * @return 是否为上午
     */
    isAM(): boolean;
    /**
     * 是否为下午
     *
     * @return 是否为下午
     */
    isPM(): boolean;
    /**
     * 日期时间格式化输出
     * @param  {string} formatStr 格式化字符串，y-年、M-月、d-日、H-时(24小时制)、h-时(12小时制)、m-分、s-秒、S-毫秒、tt-上下午
     * @return {string} 格式化后的字符串
     */
    format(formatStr: string): string;
    /**
     * 按照指定时间部分加减日期
     * @param  {String} part 时间部分，'second'-秒/'minute'-分/'hour'-时/'day'-天/'month'-月/'year'-年
     * @param  {Number} num      需要变更的数量
     * @return {this}
     */
    calc(part: string, num: number): this;
    /**
     * 根据当前日期时间克隆出一个新的对象实例
     * @return {Object}
     */
    clone(): DateTime;
    /**
     * 判断一个日期字符串、日期对象是否是有效的日期时间
     * @param  {String|Date}  dateStr 需要判断的日期
     * @return {Boolean}
     */
    isValid(dateStr: string | Date): boolean;
    /**
     * 返回一个日期时间处于一年中的第几周。
     * 如果是无效日期则返回NaN。
     * @param  {String|Date} dateStr 需要判断的日期
     * @return {Number}
     */
    getWeekth(dateStr: string): number;
    /**
     * 返回一个日期时间所处的当月有多少天，如果是无效日期则返回NaN。
     * @param  {String|Date} dateStr 需要判断的日期
     * @return {Number}
     */
    getMonthDays(dateStr: string): number;
    /**
     * 计算两个日期之间的时间差，单位默认以“天”表示。
     * 如果其中一方为无效日期则返回NaN。
     * @param  {String|Date} startDate 起始日期时间
     * @param  {String|Date} endDate 结束日期时间
     * @param  {String} unit 时差的计量单位，默认为day。'second'-秒/'minute'-分/'hour'-时/'day'-天/'month'-月/'year'-年/'json'-按级别展示
     * @return {Number}
     */
    diff(startDate: Date | String, endDate: Date | String, unit: string): number | {
        year: null;
        month: null;
        day: number;
        hour: number;
        minite: number;
        second: number;
        maxUnit: string;
    } | undefined;
    /**
     * 返回两位数字，不足前置补零
     * @param  {Number} num 数字
     * @return {String}
     */
    private getDoubleNum;
}
