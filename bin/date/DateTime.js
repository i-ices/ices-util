export class DateTime extends Date {
    constructor(dateStr) {
        // 日期字符串
        if (typeof dateStr === 'string') {
            super(dateStr.replace(/-/g, '/')); // IE8不支持 2016-01-02 这种字符串转换
        }
        // 时间戳
        else if (typeof dateStr === 'number') {
            super(dateStr);
        }
        // Date对象实例
        else if (dateStr && Object.prototype.toString.call(dateStr).toLowerCase() === "[object date]") {
            super(dateStr.getTime()); // 新建实例，避免对原对象进行覆盖
        }
        // 缺省参数，默认为当前时间
        else {
            super();
        }
    }
    /**
     * 是否为上午
     *
     * @return 是否为上午
     */
    isAM() {
        return this.getHours() < 12;
    }
    /**
     * 是否为下午
     *
     * @return 是否为下午
     */
    isPM() {
        return this.getHours() > 12;
    }
    /**
     * 日期时间格式化输出
     * @param  {string} formatStr 格式化字符串，y-年、M-月、d-日、H-时(24小时制)、h-时(12小时制)、m-分、s-秒、S-毫秒、tt-上下午
     * @return {string} 格式化后的字符串
     */
    format(formatStr) {
        const oDate = this, fullYear = oDate.getFullYear(), year = (fullYear + '').substring(2), month = oDate.getMonth() + 1, day = oDate.getDate(), hours24 = oDate.getHours(), hours12 = hours24 > 12 ? hours24 - 12 : hours24, minutes = oDate.getMinutes(), seconds = oDate.getSeconds(), partObj = {
            'yyyy': fullYear,
            'yy': year,
            'MM': this.getDoubleNum(month),
            'M': month,
            'dd': this.getDoubleNum(day),
            'd': day,
            'HH': this.getDoubleNum(hours24),
            'H': hours24,
            'hh': this.getDoubleNum(hours12),
            'h': hours12,
            'mm': this.getDoubleNum(minutes),
            'm': minutes,
            'ss': this.getDoubleNum(seconds),
            's': seconds,
            'S': oDate.getMilliseconds(),
            'tt': hours24 > 12 ? '下午' : '上午',
        };
        // 默认格式
        if (typeof formatStr !== 'string' || formatStr === '')
            formatStr = 'yyyy/MM/dd HH:mm:ss';
        // 循环遍历替换
        for (const name in partObj) {
            if (partObj.hasOwnProperty(name)) {
                // @ts-ignore
                formatStr = formatStr.replace(new RegExp(name, 'g'), partObj[name]);
            }
        }
        // 返回格式化后的结果
        return formatStr;
    }
    /**
     * 按照指定时间部分加减日期
     * @param  {String} part 时间部分，'second'-秒/'minute'-分/'hour'-时/'day'-天/'month'-月/'year'-年
     * @param  {Number} num      需要变更的数量
     * @return {this}
     */
    calc(part, num) {
        let oDate = this, second = 1000, // 1秒=1000毫秒
        minute = second * 60, // 1分=60秒
        hour = minute * 60, // 1小时=60分
        day = hour * 24, // 1天=24小时
        timeJSON = {
            'second': second,
            'minute': minute,
            'hour': hour,
            'day': day
        }, dateValue = oDate.getTime(), result;
        // 自动处理2月份只有28天、29天的问题
        if (part === 'month') {
            result = oDate.setMonth(oDate.getMonth() + num);
        }
        // 自动处理闰年366天，非闰年365天的问题
        else if (part === 'year') {
            result = oDate.setFullYear(oDate.getFullYear() + num);
        }
        // 其他时间部分直接加上对应的毫秒数即可
        else {
            // @ts-ignore
            result = dateValue + (timeJSON[part] || 0) * num;
        }
        this.setTime(new Date(result).getTime());
        return this;
    }
    /**
     * 根据当前日期时间克隆出一个新的对象实例
     * @return {Object}
     */
    clone() {
        return new DateTime(this.getTime());
    }
    /**
     * 判断一个日期字符串、日期对象是否是有效的日期时间
     * @param  {String|Date}  dateStr 需要判断的日期
     * @return {Boolean}
     */
    isValid(dateStr) {
        const oDate = new DateTime(dateStr || '');
        return !isNaN(oDate.getFullYear());
    }
    ;
    /**
     * 返回一个日期时间处于一年中的第几周。
     * 如果是无效日期则返回NaN。
     * @param  {String|Date} dateStr 需要判断的日期
     * @return {Number}
     */
    getWeekth(dateStr) {
        const oDate = new DateTime(dateStr || ''), year = oDate.getFullYear();
        if (isNaN(year)) {
            return NaN;
        }
        const first = new Date(year, 0, 1), firstWeekday = first.getDay(), 
        // 与1月1日相差的天数
        dateDiff = Math.floor((oDate.getTime() - first.getTime()) / (1000 * 60 * 60 * 24)), 
        // 1月1日所处的周为一年的第一周，通过与1月1日相差的天数和1月1日所处的星期几相加再除以1周的基数7即可获得当前日期位于一年的第几周
        weekth = Math.floor((dateDiff + firstWeekday) / 7) + 1;
        return weekth;
    }
    ;
    /**
     * 返回一个日期时间所处的当月有多少天，如果是无效日期则返回NaN。
     * @param  {String|Date} dateStr 需要判断的日期
     * @return {Number}
     */
    getMonthDays(dateStr) {
        const oDate = new DateTime(dateStr || ''), month = oDate.getMonth() + 1;
        // new Date(2014, 12, 0).getDate()的返回值是2014年11月的最后一天
        return isNaN(month) ? NaN : new Date(oDate.getFullYear(), month, 0).getDate();
    }
    ;
    /**
     * 计算两个日期之间的时间差，单位默认以“天”表示。
     * 如果其中一方为无效日期则返回NaN。
     * @param  {String|Date} startDate 起始日期时间
     * @param  {String|Date} endDate 结束日期时间
     * @param  {String} unit 时差的计量单位，默认为day。'second'-秒/'minute'-分/'hour'-时/'day'-天/'month'-月/'year'-年/'json'-按级别展示
     * @return {Number}
     */
    diff(startDate, endDate, unit) {
        let startTemp, endTemp, startTime, endTime, startChange, endChange, diffTime, diffJSON, diffMonth, diffYear, result, temp, second = 1000, // 1秒=1000毫秒
        minute = second * 60, // 1分=60秒
        hour = minute * 60, // 1小时=60分
        day = hour * 24, // 1天=24小时
        timeJSON = {
            'second': second,
            'minute': minute,
            'hour': hour,
            'day': day
        }, isReturnJSON = unit === 'json';
        // 确保startDate在endDate之前
        startDate = new DateTime(startDate || '');
        endDate = new DateTime(endDate || '');
        if (startDate > endDate) {
            temp = startDate;
            startDate = endDate;
            endDate = temp;
        }
        startTime = startDate.getTime();
        endTime = endDate.getTime();
        diffTime = Math.abs(endTime - startTime);
        // 如果其中一方为无效日期则返回NaN
        if (isNaN(startTime) || isNaN(endTime))
            return NaN;
        // 如果两个日期时间相同则返回0
        if (startTime === endTime)
            return 0;
        // 计算天、时、分、秒等单位的时间差，其他单位按照天计算时间差
        // @ts-ignore
        result = Math.floor(diffTime / (timeJSON[unit] || day));
        // 按级别展示
        if (isReturnJSON) {
            diffJSON = {
                year: null,
                month: null,
                day: Math.floor(diffTime / timeJSON['hour'] / 24),
                hour: Math.floor(diffTime / timeJSON['hour'] % 24),
                minite: Math.floor(diffTime / timeJSON['minute'] % 60),
                second: Math.floor(diffTime / timeJSON['second'] % 60),
                maxUnit: '', // 最大有效单位
            };
            // 判断最大有效单位
            if (diffJSON.day !== 0) {
                diffJSON.maxUnit = 'day';
            }
            else if (diffJSON.hour !== 0) {
                diffJSON.maxUnit = 'hour';
            }
            else if (diffJSON.minite !== 0) {
                diffJSON.maxUnit = 'minite';
            }
            else {
                diffJSON.maxUnit = 'second';
            }
        }
        // 计算月份时间差
        if ('json|month|year'.indexOf(unit) >= 0) {
            // 将起始日期和结束日期都调整到月初第一天
            (startTemp = new Date(startDate.getTime())).setDate(1);
            (endTemp = new Date(endDate.getTime())).setDate(1);
            // 分别计算各自调整的天数
            startChange = (startTime - startTemp.getTime()) / day;
            endChange = (endTime - endTemp.getTime()) / day;
            // 计算相差的月数
            diffMonth = (endTemp.getFullYear() * 12 + endTemp.getMonth()) - (startTemp.getFullYear() * 12 + startTemp.getMonth());
            // 如果起始日期的天数大于结束日期的天数，则需要将最终计算的月份减-
            if (startChange > endChange) {
                diffMonth--;
            }
            // 处理剩余天数
            if (isReturnJSON) {
                // @ts-ignore
                diffJSON['day'] = Math.floor((endDate.getTime() - startDate.setMonth(startDate.getMonth() + diffMonth)) / day);
                if (diffMonth > 0) { // @ts-ignore
                    diffJSON.maxUnit = 'month';
                }
            }
            else {
                result = diffMonth;
            }
        }
        // 计算年份时间差
        if ('json|year'.indexOf(unit) >= 0) {
            // @ts-ignore
            diffYear = Math.floor(diffMonth / 12);
            if (isReturnJSON) {
                // @ts-ignore
                diffJSON['year'] = diffYear;
                // @ts-ignore
                diffJSON['month'] = diffMonth % 12;
                if (diffYear > 0) { // @ts-ignore
                    diffJSON.maxUnit = 'year';
                }
            }
            else {
                result = diffYear;
            }
        }
        return isReturnJSON ? diffJSON : result;
    }
    ;
    /**
     * 返回两位数字，不足前置补零
     * @param  {Number} num 数字
     * @return {String}
     */
    getDoubleNum(num) {
        return num < 10 ? '0' + num : num;
    }
}
