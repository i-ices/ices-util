var icesUtil=function(t){"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function u(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&o(t,e)}function a(t){return a=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},a(t)}function o(t,e){return o=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},o(t,e)}function l(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function f(t,e,n){return f=l()?Reflect.construct.bind():function(t,e,n){var r=[null];r.push.apply(r,e);var u=new(Function.bind.apply(t,r));return n&&o(u,n.prototype),u},f.apply(null,arguments)}function s(t){var e="function"==typeof Map?new Map:void 0;return s=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return f(t,arguments,a(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),o(r,t)},s(t)}function c(t,e){if(e&&("object"==typeof e||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function y(t){var e=l();return function(){var n,r=a(t);if(e){var u=a(this).constructor;n=Reflect.construct(r,arguments,u)}else n=r.apply(this,arguments);return c(this,n)}}function h(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=a(t)););return t}function v(){return v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=h(t,e);if(r){var u=Object.getOwnPropertyDescriptor(r,e);return u.get?u.get.call(arguments.length<3?t:n):u.value}},v.apply(this,arguments)}function p(t){return function(t){if(Array.isArray(t))return t}(t)||d(t)||E(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(t){return function(t){if(Array.isArray(t))return g(t)}(t)||d(t)||E(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function E(t,e){if(t){if("string"==typeof t)return g(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?g(t,e):void 0}}function g(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function A(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=E(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,u=function(){};return{s:u,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:u}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,o=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return a=t.done,t},e:function(t){o=!0,i=t},f:function(){try{a||null==n.return||n.return()}finally{if(o)throw i}}}}var N,b=function(t){i(r,t);var e=y(r);function r(t){return n(this,r),c(
// 日期字符串
"string"==typeof t?e.call(this,t.replace(/-/g,"/")):"number"==typeof t?e.call(this,t):t&&"[object date]"===Object.prototype.toString.call(t).toLowerCase()?e.call(this,t.getTime()):e.call(this))}
/**
     * 是否为上午
     *
     * @return 是否为上午
     */return u(r,[{key:"isAM",value:function(){return this.getHours()<12}
/**
       * 是否为下午
       *
       * @return 是否为下午
       */},{key:"isPM",value:function(){return this.getHours()>12}
/**
       * 日期时间格式化输出
       * @param  {string} formatStr 格式化字符串，y-年、M-月、d-日、H-时(24小时制)、h-时(12小时制)、m-分、s-秒、S-毫秒、tt-上下午
       * @return {string} 格式化后的字符串
       */},{key:"format",value:function(t){var e=this,n=e.getFullYear(),r=(n+"").substring(2),u=e.getMonth()+1,i=e.getDate(),a=e.getHours(),o=a>12?a-12:a,l=e.getMinutes(),f=e.getSeconds(),s={yyyy:n,yy:r,MM:this.getDoubleNum(u),M:u,dd:this.getDoubleNum(i),d:i,HH:this.getDoubleNum(a),H:a,hh:this.getDoubleNum(o),h:o,mm:this.getDoubleNum(l),m:l,ss:this.getDoubleNum(f),s:f,S:e.getMilliseconds(),tt:a>12?"下午":"上午"};// 默认格式
// 循环遍历替换
for(var c in"string"==typeof t&&""!==t||(t="yyyy/MM/dd HH:mm:ss"),s)s.hasOwnProperty(c)&&(
// @ts-ignore
t=t.replace(new RegExp(c,"g"),s[c]));// 返回格式化后的结果
return t}
/**
       * 按照指定时间部分加减日期
       * @param  {String} part 时间部分，'second'-秒/'minute'-分/'hour'-时/'day'-天/'month'-月/'year'-年
       * @param  {Number} num      需要变更的数量
       * @return {this}
       */},{key:"calc",value:function(t,e){var n,r=this,
// 1分=60秒
u=36e5,
// 1天=24小时
i={second:1e3,minute:6e4,hour:u,day:864e5},a=r.getTime();// 自动处理2月份只有28天、29天的问题
return n="month"===t?r.setMonth(r.getMonth()+e):"year"===t?r.setFullYear(r.getFullYear()+e):a+(i[t]||0)*e,this.setTime(new Date(n).getTime()),this}
/**
       * 根据当前日期时间克隆出一个新的对象实例
       * @return {Object}
       */},{key:"clone",value:function(){return new r(this.getTime())}
/**
       * 判断一个日期字符串、日期对象是否是有效的日期时间
       * @param  {String|Date}  dateStr 需要判断的日期
       * @return {Boolean}
       */},{key:"isValid",value:function(t){var e=new r(t||"");return!isNaN(e.getFullYear())}},{key:"getWeekth",value:
/**
       * 返回一个日期时间处于一年中的第几周。
       * 如果是无效日期则返回NaN。
       * @param  {String|Date} dateStr 需要判断的日期
       * @return {Number}
       */
function(t){var e=new r(t||""),n=e.getFullYear();if(isNaN(n))return NaN;var u=new Date(n,0,1),i=u.getDay(),
// 与1月1日相差的天数
a=Math.floor((e.getTime()-u.getTime())/864e5);return Math.floor((a+i)/7)+1}},{key:"getMonthDays",value:
/**
       * 返回一个日期时间所处的当月有多少天，如果是无效日期则返回NaN。
       * @param  {String|Date} dateStr 需要判断的日期
       * @return {Number}
       */
function(t){var e=new r(t||""),n=e.getMonth()+1;// new Date(2014, 12, 0).getDate()的返回值是2014年11月的最后一天
return isNaN(n)?NaN:new Date(e.getFullYear(),n,0).getDate()}},{key:"diff",value:
/**
       * 计算两个日期之间的时间差，单位默认以“天”表示。
       * 如果其中一方为无效日期则返回NaN。
       * @param  {String|Date} startDate 起始日期时间
       * @param  {String|Date} endDate 结束日期时间
       * @param  {String} unit 时差的计量单位，默认为day。'second'-秒/'minute'-分/'hour'-时/'day'-天/'month'-月/'year'-年/'json'-按级别展示
       * @return {Number}
       */
function(t,e,n){var u,i,a,o,l,f,s,c,y,h,v,p,
// 1分=60秒
m=36e5,
// 1小时=60分
d=24*m,
// 1天=24小时
E={second:1e3,minute:6e4,hour:m,day:d},g="json"===n;// 确保startDate在endDate之前
// 如果其中一方为无效日期则返回NaN
return(t=new r(t||""))>(e=new r(e||""))&&(p=t,t=e,e=p),a=t.getTime(),o=e.getTime(),s=Math.abs(o-a),isNaN(a)||isNaN(o)?NaN:// 如果两个日期时间相同则返回0
a===o?0:(// 计算天、时、分、秒等单位的时间差，其他单位按照天计算时间差
// @ts-ignore
v=Math.floor(s/(E[n]||d)),// 按级别展示
g&&(// 判断最大有效单位
0!==(c={year:null,month:null,day:Math.floor(s/E.hour/24),hour:Math.floor(s/E.hour%24),minite:Math.floor(s/E.minute%60),second:Math.floor(s/E.second%60),maxUnit:""}).day?c.maxUnit="day":0!==c.hour?c.maxUnit="hour":0!==c.minite?c.maxUnit="minite":c.maxUnit="second"),// 计算月份时间差
"json|month|year".indexOf(n)>=0&&(
// 将起始日期和结束日期都调整到月初第一天
(u=new Date(t.getTime())).setDate(1),(i=new Date(e.getTime())).setDate(1),// 分别计算各自调整的天数
l=(a-u.getTime())/d,f=(o-i.getTime())/d,// 计算相差的月数
y=12*i.getFullYear()+i.getMonth()-(12*u.getFullYear()+u.getMonth()),// 如果起始日期的天数大于结束日期的天数，则需要将最终计算的月份减-
l>f&&y--,// 处理剩余天数
g?(
// @ts-ignore
c.day=Math.floor((e.getTime()-t.setMonth(t.getMonth()+y))/d),y>0&&(
// @ts-ignore
c.maxUnit="month")):v=y),// 计算年份时间差
"json|year".indexOf(n)>=0&&(
// @ts-ignore
h=Math.floor(y/12),g?(
// @ts-ignore
c.year=h,// @ts-ignore
c.month=y%12,h>0&&(
// @ts-ignore
c.maxUnit="year")):v=h),g?c:v)}},{key:"getDoubleNum",value:
/**
       * 返回两位数字，不足前置补零
       * @param  {Number} num 数字
       * @return {String}
       */
function(t){return t<10?"0"+t:t}}]),r}(s(Date)),T=function(){function t(e){n(this,t),this.pattern=e}return u(t,[{key:"format",value:function(t){var e={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours()%12==0?12:t.getHours()%12,"H+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds(),"q+":Math.floor((t.getMonth()+3)/3),S:t.getMilliseconds()};for(var n in/(y+)/.test(this.pattern)&&(this.pattern=this.pattern.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length))),/(E+)/.test(this.pattern)&&(
// @ts-ignore
this.pattern=this.pattern.replace(RegExp.$1,(RegExp.$1.length>1?RegExp.$1.length>2?"/u661f/u671f":"/u5468":"")+{0:"/u65e5",1:"/u4e00",2:"/u4e8c",3:"/u4e09",4:"/u56db",5:"/u4e94",6:"/u516d"}[this.getDay()+""])),e)new RegExp("("+n+")").test(this.pattern)&&(
// @ts-ignore
this.pattern=this.pattern.replace(RegExp.$1,1==RegExp.$1.length?e[n]:("00"+e[n]).substr((""+e[n]).length)));return this.pattern}}]),t}(),M=function(t){i(r,t);var e=y(r);function r(){return n(this,r),e.apply(this,arguments)}return u(r)}(s(Date));N=M,
/**
   * 标准日期时间格式，精确到秒：yyyy-MM-dd HH:mm:ss
   */
M.NORM_DATETIME_PATTERN="yyyy-MM-dd HH:mm:ss",
/**
   * 标准日期格式：yyyy-MM-dd
   */
M.NORM_DATE_PATTERN="yyyy-MM-dd",
/**
   * 标准时间格式：HH:mm:ss
   */
M.NORM_TIME_PATTERN="HH:mm:ss",
/**
   * 标准日期格式：yyyy年MM月dd日
   */
M.CHINESE_DATE_PATTERN="yyyy年MM月dd日",
/**
   * 标准日期格式：yyyy年MM月dd日 HH时mm分ss秒
   */
M.CHINESE_DATE_TIME_PATTERN="yyyy年MM月dd日 HH时mm分ss秒",
/**
   * 标准日期时间格式，精确到秒 ：yyyy-MM-dd HH:mm:ss
   */
M.NORM_DATETIME_FORMAT=new T(N.NORM_DATETIME_PATTERN),
/**
   * 标准日期格式 {@link DateFormat}：yyyy-MM-dd
   */
M.NORM_DATE_FORMAT=new T(N.NORM_DATE_PATTERN),
/**
   * 标准时间格式 {@link DateFormat}：HH:mm:ss
   */
M.NORM_TIME_FORMAT=new T(N.NORM_TIME_PATTERN),
/**
   * 标准日期格式 {@link DateFormat}：yyyy年MM月dd日
   */
M.CHINESE_DATE_FORMAT=new T(N.CHINESE_DATE_PATTERN),
/**
   * 标准日期格式 {@link DateFormat}：yyyy年MM月dd日HH时mm分ss秒
   */
M.CHINESE_DATE_TIME_FORMAT=new T(N.CHINESE_DATE_TIME_PATTERN);var k=function(){function t(){n(this,t)}return u(t,null,[{key:"capitalize",value:
/**
       * 将字符串的首字母转成大写.
       * @param first
       * @param rest
       */
// @ts-ignore
function(t){var e=p(t),n=e[0],r=e.slice(1);return n.toUpperCase()+r.join("")}
/**
       * 将一个句子中每个单词首字母转换成大写字母
       * @param str
       */},{key:"capitalizeEveryWord",value:function(t){return t.replace(/\b[a-z]/g,(function(t){return t.toUpperCase()}))}
/**
       * 字符串是否为空
       *
       * @param str 被检测的字符串
       * @return 是否为空
       * @see #isBlank(CharSequence)
       */},{key:"isEmpty",value:function(t){return null==t||0==t.length}}]),t}();
/**
   * 字符串常量：空字符串 {@code ""}
   */k.EMPTY="";var O=function(){function t(){n(this,t)}return u(t,null,[{key:"notNull",value:
/**
       * 断言对象是否不为{@code null} ，如果为{@code null} 抛出{@link IllegalArgumentException} 异常 Assert that an object is not {@code null} .
       *
       * <pre class="code">
       * Assert.notNull(clazz, "The class must not be null");
       * </pre>
       *
       * @param <T>              被检查对象泛型类型
       * @param object           被检查对象
       * @param errorMsgTemplate 错误消息模板，变量使用{}表示
       * @param params           参数
       * @return 被检查后的对象
       * @throws IllegalArgumentException if the object is {@code null}
       */
function(t,e){if(null==t)throw Error(e);return t}
/**
       * 断言是否为真，如果为 {@code false} 抛出 {@code IllegalArgumentException} 异常<br>
       *
       * <pre class="code">
       * Assert.isTrue(i &gt; 0, "The value must be greater than zero");
       * </pre>
       *
       * @param expression       布尔值
       * @param errorMsgTemplate 错误抛出异常附带的消息模板，变量用{}代替
       * @param params           参数列表
       * @throws IllegalArgumentException if expression is {@code false}
       */},{key:"isTrue",value:function(t,e){if(0==t)throw Error(e)}}]),t}(),_=function(){function t(){n(this,t)}return u(t,null,[{key:"isEmpty",value:
/**
       * 判断空
       * @param array 数组
       */
function(t){return null==t||0==t.length}
/**
       * 数组是否为空<br>
       * 此方法会匹配单一对象，如果此对象为{@code null}则返回true<br>
       * 如果此对象为非数组，理解为此对象为数组的第一个元素，则返回false<br>
       * 如果此对象为数组对象，数组长度大于0情况下返回false，否则返回true
       *
       * @param array 数组
       * @return 是否为空
       */},{key:"isObjEmpty",value:function(t){return null==t||!!this.isArray(t)&&0==this.getLength(t)}
/**
       * 获取数组长度<br>
       * 如果参数为{@code null}，返回0
       *
       * @param array 数组对象
       * @return 数组长度
       * @throws IllegalArgumentException 如果参数不为数组，抛出此异常
       * @see Array#getLength(Object)
       * @since 3.0.8
       */},{key:"getLength",value:function(t){return null==t?0:Array.from(t).length;// @ts-ignore
}
/**
       * 对象是否为数组对象
       *
       * @param obj 对象
       * @return 是否为数组对象，如果为{@code null} 返回false
       */},{key:"isArray",value:function(t){return null!=t&&Array.isArray(t)}
/**
       * 判断非空
       * @param array
       */},{key:"isNotEmpty",value:function(t){return null!=t&&0!=t.length}
/**
       * 是否包含{@code null}元素
       *
       * @param <T>   数组元素类型
       * @param array 被检查的数组
       * @return 是否包含{@code null}元素
       * @since 3.0.7
       */},{key:"hasNull",value:function(t){if(this.isNotEmpty(t)){var e,n=A(t);try{for(n.s();!(e=n.n()).done;){var r=e.value;if(D.isNull(r))return!0}}catch(t){n.e(t)}finally{n.f()}}return null==t}
/**
       * 多个字段是否全为null
       *
       * @param <T>   数组元素类型
       * @param array 被检查的数组
       * @return 多个字段是否全为null
       * @author dahuoyzs
       * @since 5.4.0
       */},{key:"isAllNull",value:function(t){return null==this.firstNonNull(t)}
/**
       * 返回数组中第一个非空元素
       *
       * @param <T>   数组元素类型
       * @param array 数组
       * @return 非空元素，如果不存在非空元素或数组为空，返回{@code null}
       * @since 3.0.7
       */},{key:"firstNonNull",value:function(t){return this.firstMatch(new(function(){function t(){n(this,t)}return u(t,[{key:"match",value:function(t){return D.isNotNull(t)}}]),t}()),t)}
/**
       * 返回数组中第一个匹配规则的值
       *
       * @param <T>     数组元素类型
       * @param matcher 匹配接口，实现此接口自定义匹配规则
       * @param array   数组
       * @return 匹配元素，如果不存在匹配元素或数组为空，返回 {@code null}
       * @since 3.0.7
       */},{key:"firstMatch",value:function(t,e){var n=this.matchIndex(t,0,e);return n<0?null:e[n]}
/**
       * 返回数组中第一个匹配规则的值的位置
       *
       * @param <T>               数组元素类型
       * @param matcher           匹配接口，实现此接口自定义匹配规则
       * @param beginIndexInclude 检索开始的位置
       * @param array             数组
       * @return 匹配到元素的位置，-1表示未匹配到
       * @since 5.7.3
       */},{key:"matchIndex",value:function(t,e,n){if(O.notNull(t,"Matcher must be not null !"),this.isNotEmpty(n))for(var r=e;r<n.length;r++)if(t.match(n[r]))return r;return this.INDEX_NOT_FOUND}
/**
       * 新建一个空数组
       *
       * @param newSize       大小
       * @return 空数组
       */},{key:"newArray",value:function(t){return new Array(t)}
/**
       * 取最小值
       *
       * @param <T>         元素类型
       * @param numberArray 数字数组
       * @param comparator  比较器，null按照默认比较
       * @return 最小值
       * @since 5.3.4
       */},{key:"min",value:function(t){if(this.isEmpty(t))throw Error("Number array must not empty !");var e,n=t[0],r=A(t);try{for(r.s();!(e=r.n()).done;){var u=e.value;this.compare(n,u,!1)>0&&(n=u)}}catch(t){r.e(t)}finally{r.f()}return n}
/**
       * 取最大值
       *
       * @param <T>         元素类型
       * @param numberArray 数字数组
       * @param comparator  比较器，null表示默认比较器
       * @return 最大值
       * @since 5.3.4
       */},{key:"max",value:function(t){if(this.isEmpty(t))throw Error("Number array must not empty !");for(var e=t[0],n=1;n<t.length;n++)this.compare(e,t[n],!1)<0&&(e=t[n]);return e}
/**
       * 对象比较，比较结果取决于comparator，如果被比较对象为null，传入的comparator对象应处理此情况<br>
       * 如果传入comparator为null，则使用默认规则比较（此时被比较对象必须实现Comparable接口）
       *
       * <p>
       * 一般而言，如果c1 &lt; c2，返回数小于0，c1==c2返回0，c1 &gt; c2 大于0
       *
       * @param <T>        被比较对象类型
       * @param c1         对象1
       * @param c2         对象2
       * @param comparator 比较器
       * @return 比较结果
       * @since 4.6.9
       */},{key:"compare",value:function(t,e,n){return t==e?0:null==t?n?1:-1:null==e?n?-1:1:this.compareTo(t,e)}
/**
       * 以数值方式比较两个int值。返回的值与通过以下方式返回的值相同：
       * @param x 要比较的第一个int
       * @param y 要比较的第二个int
       * @private 如果x == y则值为0 ；如果x < y则小于0的值；如果x > y ，则值大于0
       */},{key:"compareTo",value:function(t,e){return t<e?-1:t==e?0:1}
/**
       * 打乱数组顺序，会变更原数组
       *
       * @param <T>    元素类型
       * @param array  数组，会变更
       * @return 打乱后的数组
       * @author ices
       * @since 5.5.2
       */},{key:"shuffle",value:function(t){if(null==t||t.length<=1)return t;for(var e=t.length;e>1;e--)this.swap(t,e-1,Math.floor(Math.random()*e));return t}
/**
       * 交换数组中两个位置的值
       *
       * @param <T>    元素类型
       * @param array  数组
       * @param index1 位置1
       * @param index2 位置2
       * @return 交换后的数组，与传入数组为同一对象
       * @since 4.0.7
       */},{key:"swap",value:function(t,e,n){if(this.isEmpty(t))throw Error("Array must not empty !");var r=t[e];return t[e]=t[n],t[n]=r,t}
/**
       * 计算null或空元素对象的个数
       *
       * @param args 被检查的对象,一个或者多个
       * @return 存在{@code null}的数量
       * @since 4.5.18
       */},{key:"emptyCount",value:function(t){var e=0;if(this.isNotEmpty(t)){var n,r=A(t);try{for(r.s();!(n=r.n()).done;){var u=n.value;D.isEmpty(u)&&e++}}catch(t){r.e(t)}finally{r.f()}}return e}
/**
       * 是否存在{@code null}或空对象
       *
       * @param args 被检查对象
       * @return 是否存在
       * @since 4.5.18
       */},{key:"hasEmpty",value:function(t){if(this.isNotEmpty(t)){var e,n=A(t);try{for(n.s();!(e=n.n()).done;){var r=e.value;if(D.isEmpty(r))return!0}}catch(t){n.e(t)}finally{n.f()}}return!1}
/**
       * 是否存都为{@code null}或空对象，
       *
       * @param args 被检查的对象,一个或者多个
       * @return 是否都为空
       * @since 4.5.18
       */},{key:"isAllEmpty",value:function(t){var e,n=A(t);try{for(n.s();!(e=n.n()).done;){var r=e.value;if(0==D.isEmpty(r))return!1}}catch(t){n.e(t)}finally{n.f()}return!0}
/**
       * 是否存都不为{@code null}或空对象
       *
       * @param args 被检查的对象,一个或者多个
       * @return 是否都不为空
       * @since 4.5.18
       */},{key:"isAllNotEmpty",value:function(t){return 0==this.hasEmpty(t)}
/**
       * 多个字段是否全部不为null
       *
       * @param <T>   数组元素类型
       * @param array 被检查的数组
       * @return 多个字段是否全部不为null
       * @since 5.4.0
       */},{key:"isAllNotNull",value:function(t){return 0==this.hasNull(t)}
/**
       * 去重数组中的元素，去重后生成新的数组，原数组不变<br>
       *
       * @param <T>   数组元素类型
       * @param array 数组
       * @return 去重后的数组
       */},{key:"distinct",value:function(t){return this.isEmpty(t)?t:Array.from(new Set(t))}
/**
       * 判断两个数组是否相等，判断依据包括数组长度和每个元素都相等。
       *
       * @param array1 数组1
       * @param array2 数组2
       * @return 是否相等
       * @since 5.4.2
       */},{key:"equals",value:function(t,e){return t==e||!this.hasNull(t)&&!this.hasNull(e)&&(O.isTrue(this.isArray(t),"First is not a Array !"),O.isTrue(this.isArray(e),"Second is not a Array !"),t.length==e.length&&this.arrayEquals(t,e))}
/**
       * 嵌套数组比较
       * @param array1 数组1
       * @param array2 数组2
       * @private 是否相等
       */},{key:"arrayEquals",value:function(t,e){for(var n=0,r=t.length;n<r;n++)
// 检查是否为内嵌数组
if(t[n]instanceof Array&&e[n]instanceof Array){
// 递归比较数组
if(!this.arrayEquals(t[n],e[n]))return!1}else if(t[n]!=e[n])
//标量比较
return!1;return!0}
/**
       * 返回数组中指定元素所在位置，未找到返回{@link #INDEX_NOT_FOUND}
       *
       * @param <T>               数组类型
       * @param array             数组
       * @param value             被检查的元素
       * @param beginIndexInclude 检索开始的位置
       * @return 数组中指定元素所在位置，未找到返回{@link #INDEX_NOT_FOUND}
       * @since 3.0.7
       */},{key:"indexOf",value:function(t,e,r){return this.matchIndex(new(function(){function t(){n(this,t)}return u(t,[{key:"match",value:function(t){return D.equal(e,t)}}]),t}()),null!=r?r:0,t)}
/**
       * 返回数组中指定元素所在最后的位置，未找到返回{@link #INDEX_NOT_FOUND}
       *
       * @param <T>   数组类型
       * @param array 数组
       * @param value 被检查的元素
       * @return 数组中指定元素所在位置，未找到返回{@link #INDEX_NOT_FOUND}
       * @since 3.0.7
       */},{key:"lastIndexOf",value:function(t,e){return this.isEmpty(t)?this.INDEX_NOT_FOUND:this.lastIndexOfPre(t,e,t.length-1)}
/**
       * 返回数组中指定元素所在最后的位置，未找到返回{@link #INDEX_NOT_FOUND}
       *
       * @param <T>        数组类型
       * @param array      数组
       * @param value      被检查的元素
       * @param endInclude 查找方式为从后向前查找，查找的数组结束位置，一般为array.length-1
       * @return 数组中指定元素所在位置，未找到返回{@link #INDEX_NOT_FOUND}
       * @since 5.7.3
       */},{key:"lastIndexOfPre",value:function(t,e,n){if(this.isNotEmpty(t))for(var r=n;r>=0;r--)if(D.equal(e,t[r]))return r;return this.INDEX_NOT_FOUND}
/**
       * 数组中是否包含元素
       *
       * @param <T>   数组元素类型
       * @param array 数组
       * @param value 被检查的元素
       * @return 是否包含
       */},{key:"contains",value:function(t,e){return this.indexOf(t,e,0)>this.INDEX_NOT_FOUND}
/**
       * 数组中是否包含指定元素中的任意一个
       *
       * @param <T>    数组元素类型
       * @param array  数组
       * @param values 被检查的多个元素
       * @return 是否包含指定元素中的任意一个
       * @since 4.1.20
       */},{key:"containsAny",value:function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];for(var u=0,i=n;u<i.length;u++){var a=i[u];if(this.contains(t,a))return!0}return!1}
/**
       * 数组中是否包含指定元素中的全部
       *
       * @param <T>    数组元素类型
       * @param array  数组
       * @param values 被检查的多个元素
       * @return 是否包含指定元素中的全部
       * @since 5.4.7
       */},{key:"containsAll",value:function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];for(var u=0,i=n;u<i.length;u++){var a=i[u];if(0==this.contains(t,a))return!1}return!0}
/**
       * 统计数组中某个值出现的次数
       */},{key:"countOccurrences",value:function(t,e){return t.reduce((function(t,n){return n===e?t+1:t}),0)}
/**
       * 查找子数组的位置
       *
       * @param array        数组
       * @param beginInclude 查找开始的位置（包含）
       * @param subArray     子数组
       * @param <T>          数组元素类型
       * @return 子数组的开始位置，即子数字第一个元素在数组中的位置
       * @since 5.4.8
       */},{key:"indexOfSub",value:function(t,e,n){if(this.isEmpty(t)||this.isEmpty(n)||n.length>t.length)return this.INDEX_NOT_FOUND;var r=this.indexOf(t,n[0],e);if(r<0||r+n.length>t.length)return this.INDEX_NOT_FOUND;for(var u=0;u<n.length;u++)if(0==D.equal(t[u+r],n[u]))return this.indexOfSub(t,r+1,n);return r}
/**
       * 查找最后一个子数组的开始位置
       *
       * @param array    数组
       * @param subArray 子数组
       * @param <T>      数组元素类型
       * @return 最后一个子数组的开始位置，即子数字第一个元素在数组中的位置
       * @since 5.4.8
       */},{key:"lastIndexOfSub",value:function(t,e){return this.isEmpty(t)||this.isEmpty(e)?this.INDEX_NOT_FOUND:this.lastIndexOfSubEnd(t,t.length-1,e)}
/**
       * 查找最后一个子数组的开始位置
       *
       * @param array      数组
       * @param endInclude 查找结束的位置（包含）
       * @param subArray   子数组
       * @param <T>        数组元素类型
       * @return 最后一个子数组的开始位置，即子数字第一个元素在数组中的位置
       * @since 5.4.8
       */},{key:"lastIndexOfSubEnd",value:function(t,e,n){if(this.isEmpty(t)||this.isEmpty(n)||n.length>t.length||e<0)return this.INDEX_NOT_FOUND;var r=this.lastIndexOf(t,n[0]);if(r<0||r+n.length>t.length)return this.INDEX_NOT_FOUND;for(var u=0;u<n.length;u++)if(0==D.equal(t[u+r],n[u]))return this.lastIndexOfSubEnd(t,r-1,n);return r}
/**
       * 克隆数组
       *
       * @param array 被克隆的数组
       * @return 新数组
       */},{key:"clone",value:function(t){return null==t?null:m(t)}}]),t}();
/**
   * 数组中元素未找到的下标，值为-1
   */
_.INDEX_NOT_FOUND=-1;var w=function(){function t(){n(this,t)}return u(t,null,[{key:"isEmpty",value:
/**
       * Map是否为空
       *
       * @param map 集合
       * @return 是否为空
       */
function(t){return null==t||0==t.size}}]),t}(),D=function(){function t(){n(this,t)}return u(t,null,[{key:"isNull",value:
/**
       * 检查对象是否为null<br>
       * 判断标准为：
       *
       * <pre>
       * 1. == null
       * 2. equals(null)
       * </pre>
       *
       * @param obj 对象
       * @return 是否为null
       */
function(t){return null==t||Object.is(null,t)}
/**
       * 检查对象是否不为null
       * <pre>
       * 1. != null
       * 2. not equals(null)
       * </pre>
       *
       * @param obj 对象
       * @return 是否为非null
       */},{key:"isNotNull",value:function(t){return null!=t&&0==Object.is(null,t)}
/**
       * 判断指定对象是否为空，支持：
       *
       * @param obj 被判断的对象
       * @return 是否为空，如果类型不支持，返回false
       * @since 4.5.7
       */},{key:"isEmpty",value:function(t){return null==t||(t instanceof String?k.isEmpty(String(t)):t instanceof Map?w.isEmpty(t):!!_.isArray(t)&&_.isObjEmpty(t))}
/**
       * 判断指定对象是否为非空，支持：
       *
       * @param obj 被判断的对象
       * @return 是否为空，如果类型不支持，返回true
       */},{key:"isNotEmpty",value:function(t){return 0==this.isEmpty(t)}
/**
       * 如果给定对象为{@code null}返回默认值
       *
       * @param <T>          对象类型
       * @param object       被检查对象，可能为{@code null}
       * @param defaultValue 被检查对象为{@code null}返回的默认值，可以为{@code null}
       * @return 被检查对象为{@code null}返回默认值，否则返回原值
       * @since 3.0.7
       */},{key:"defaultIfNull",value:function(t,e){return this.isNull(t)?e:t}
/**
       * 比较两个对象是否相等。<br>
       * 相同的条件有两个，满足其一即可：<br>
       * <ol>
       * <li>obj1 == null &amp;&amp; obj2 == null</li>
       * <li>obj1.equals(obj2)</li>
       * <li>如果是BigDecimal比较，0 == obj1.compareTo(obj2)</li>
       * </ol>
       *
       * @param obj1 对象1
       * @param obj2 对象2
       * @return 是否相等
       * @see Objects#equals(Object, Object)
       */},{key:"equal",value:function(t,n){
// 指向同一内存时
if(t===n)return!0;if("object"==e(t)&&null!=t&&"object"==e(n)&&null!=n){if(Object.keys(t).length!==Object.keys(n).length)return!1;for(var r in t){if(!n.hasOwnProperty(r))return!1;if(!this.equal(t[r],n[r]))return!1}return!0}return!1}}]),t}(),I=function(t){i(r,t);var e=y(r);function r(t){return n(this,r),e.call(this,null!=t&&t)}
/**
     * @return 开始计时并返回当前时间
     */return u(r,[{key:"start",value:function(){return v(a(r.prototype),"start",this).call(this,r.DEFAULT_ID)}
/**
       * @return 重新计时并返回从开始到当前的持续时间
       */},{key:"intervalRestart",value:function(){return v(a(r.prototype),"intervalRestart",this).call(this,r.DEFAULT_ID)}
/**
       * 重新开始计算时间（重置开始时间）
       *
       * @return this
       * @see #start()
       * @since 3.0.1
       */},{key:"restart",value:function(){return v(a(r.prototype),"start",this).call(this,r.DEFAULT_ID),this}
/**
       * 从开始到当前的间隔时间（毫秒数）<br>
       * 如果使用纳秒计时，返回纳秒差，否则返回毫秒差
       *
       * @return 从开始到当前的间隔时间（毫秒数）
       */},{key:"interval",value:function(){return v(a(r.prototype),"interval",this).call(this,r.DEFAULT_ID)}}]),r}(function(){
/**
     * 构造
     *
     * @param isNano 是否使用纳秒计数，false则使用毫秒
     */
function t(e){n(this,t),this.isNano=e,this.groupMap=new Map}
/**
     * 清空所有定时记录
     *
     * @return this
     */return u(t,[{key:"clear",value:function(){return this.groupMap.clear(),this}
/**
       * 开始计时并返回当前时间
       *
       * @param id 分组ID
       * @return 开始计时并返回当前时间
       */},{key:"start",value:function(t){var e=this.getTime();return this.groupMap.set(t,e),e}
/**
       * 重新计时并返回从开始到当前的持续时间秒<br>
       * 如果此分组下没有记录，则返回0;
       *
       * @param id 分组ID
       * @return 重新计时并返回从开始到当前的持续时间
       */},{key:"intervalRestart",value:function(t){var e=this.getTime();// @ts-ignore
return e-D.defaultIfNull(this.groupMap.get(t,e),e)}
/**
       * 从开始到当前的间隔时间（毫秒数）<br>
       * 如果使用纳秒计时，返回纳秒差，否则返回毫秒差<br>
       * 如果分组下没有开始时间，返回{@code null}
       *
       * @param id 分组ID
       * @return 从开始到当前的间隔时间（毫秒数）
       */},{key:"interval",value:function(t){var e=this.groupMap.get(t);return null==e||null==e?0:this.getTime()-e;// @ts-ignore
}
/**
       * 获取时间的毫秒或纳秒数，纳秒非时间戳
       *
       * @return 时间
       */},{key:"getTime",value:function(){return this.isNano?process.hrtime.bigint():Date.now()}}]),t}());I.DEFAULT_ID=k.EMPTY;
/**
   * 时间工具类
   */
var R,F=function(){function t(){n(this,t)}return u(t,null,[{key:"date",value:
/**
       * 当前时间，转换为{@link DateTime}对象
       *
       * @return 当前时间
       */
function(t){return new b(t)}
/**
       * 当前时间的时间戳
       *
       * @return 时间
       */},{key:"current",value:function(){return Date.now()}
/**
       * 当前时间的时间戳（秒）
       *
       * @return 当前时间秒数
       * @since 4.0.0
       */},{key:"currentSeconds",value:function(){return this.current()/1e3}
/**
       * 当前时间，格式 yyyy-MM-dd HH:mm:ss
       *
       * @return 当前时间的标准形式字符串
       */},{key:"now",value:function(){return this.formatDateTime(new b(null))}
/**
       * 当前日期，格式 yyyy-MM-dd
       *
       * @return 当前日期的标准形式字符串
       */},{key:"today",value:function(){return this.formatDate(new b(null))}
/**
       * 格式化日期部分（不包括时间）<br>
       * 格式 yyyy-MM-dd
       *
       * @param date 被格式化的日期
       * @return 格式化后的字符串
       */},{key:"formatDate",value:function(t){return null==t?null:M.NORM_DATE_FORMAT.format(t)}
/**
       * 格式化日期时间<br>
       * 格式 yyyy-MM-dd HH:mm:ss
       *
       * @param date 被格式化的日期
       * @return 格式化后的日期
       */},{key:"formatDateTime",value:function(t){return null==t?null:M.NORM_DATETIME_FORMAT.format(t)}
/**
       * 格式化时间<br>
       * 格式 HH:mm:ss
       *
       * @param date 被格式化的日期
       * @return 格式化后的字符串
       * @since 3.0.1
       */},{key:"formatTime",value:function(t){return null==t?null:M.NORM_TIME_FORMAT.format(t)}
/**
       * 格式化为中文日期格式，则返回类似：2018年10月24日，否则返回二〇一八年十月二十四日
       *
       * @param date        被格式化的日期
       * @param isUppercase 是否采用大写形式
       * @param withTime    是否包含时间部分
       * @return 中文日期字符串
       * @since 5.3.9
       */},{key:"formatChineseDate",value:function(t,e){return null==t?null:(null==e||e?M.CHINESE_DATE_TIME_FORMAT:M.CHINESE_DATE_FORMAT).format(t)}
/**
       * 计时器<br>
       * 计算某个过程花费的时间，精确到毫秒
       *
       * @return Timer
       */},{key:"timer",value:function(t){return new I(t)}
/**
       * 是否为上午
       *
       * @return 是否为上午
       */},{key:"isAM",value:function(){return this.date(null).getHours()<12}
/**
       * 是否为下午
       *
       * @return 是否为下午
       */},{key:"isPM",value:function(){return this.date(null).getHours()>12}
/**
       * 判断一个年份是否是闰年
       * @param  {Number}  year
       * @return {Boolean}
       */},{key:"isLeapYear",value:function(t){// 判断是否为闰年（普通年能被4整除且不能被100整除的年份是闰年，世纪年能被400整除的年份是闰年）
return t=Number(t),!isNaN(t)&&(t%400==0||t%4==0&&t%100!=0)}}]),t}(),S=function(){function t(){n(this,t)}return u(t,null,[{key:"sum",value:
/**
       * 相加
       * @param args
       */
function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.reduce((function(t,e){return e+t}),0)}
/**
       * 求平均值
       * @param args
       */},{key:"average",value:function(){return this.sum.apply(this,arguments)/arguments.length}}]),t}(),x=function(){function t(){n(this,t)}return u(t,null,[{key:"randomBoolean",value:
/**
       * 获得随机Boolean值
       *
       * @return true or false
       * @since 4.5.9
       */
function(){return 0==this.randomInt(2,null)}
/**
       * 随机汉字（'\u4E00'-'\u9FFF'）
       *
       * @return 随机的汉字字符
       * @since 5.7.15
       */},{key:"randomChinese",value:function(){return String.fromCharCode(this.randomInt(7424,null))}
/**
       * 获得指定范围内的随机数 [0,limit)
       *
       * @param limit 限制随机数的范围，不包括这个数
       * @return 随机数
       * @see Random#nextInt(int)
       */},{key:"randomInt",value:function(t,e){return e=null!=e?e:0,Math.floor(Math.random()*(null==t?1:t-e)+e)}
/**
       * 随机获得列表中的元素
       *
       * @param <T>   元素类型
       * @param list  列表
       * @param limit 限制列表的前N项
       * @return 随机元素
       */},{key:"randomEle",value:function(t,e){return t.length<(null!=e?e:-1)&&(e=t.length),t[this.randomInt(e,null)]}
/**
       * 随机字符
       *
       * @param baseString 随机字符选取的样本
       * @return 随机字符
       * @since 3.1.2
       */},{key:"randomChar",value:function(){return this.BASE_CHAR_NUMBER.charAt(this.randomInt(this.BASE_CHAR_NUMBER.length,null))}
/**
       * 随机数字，数字为0~9单个数字
       *
       * @return 随机数字字符
       * @since 3.1.2
       */},{key:"randomNumber",value:function(){return this.randomInt(10,null)}
/**
       * 生成随机颜色
       *
       * @return 随机颜色
       * @since 4.1.5
       * @deprecated 使用ImgUtil.randomColor()
       */},{key:"randomColor",value:function(){return"".concat(this.randomInt(256,null),", ").concat(this.randomInt(256,null),", ").concat(this.randomInt(256,null))}}]),t}();R=x,
/**
   * 用于随机选的数字
   */
x.BASE_NUMBER="0123456789",
/**
   * 用于随机选的字符
   */
x.BASE_CHAR="abcdefghijklmnopqrstuvwxyz",
/**
   * 用于随机选的字符和数字
   */
x.BASE_CHAR_NUMBER=R.BASE_CHAR+R.BASE_NUMBER;
/**
   * 正则常用类，提供常用的正则对象
   * */
var U=u((function t(){n(this,t)}));
/**
   * 银行卡正则
   * @private 银行卡
   */U.BANK_CARD=/^([1-9]{1})(\d{15}|\d{18})$/,
/**
   * 手机号正则
   * @private
   */
U.PHONE=/^1((3[\d])|(4[5,6,7,9])|(5[0-3,5-9])|(6[5-7])|(7[0-8])|(8[\d])|(9[1,8,9]))\d{8}$/,
/**
   * email正则
   */
U.EMAIL=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
/**
   * 身份证正则
   * @private
   */
U.ID=/(^\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$)|(^\d{6}(18|19|20)\d{2}(0\d|10|11|12)([0-2]\d|30|31)\d{3}(\d|X|x)$)/,
/**
   * 座机电话
   * @private
   */
U.LANDLINE_TELEPHONE=/\d{3}-\d{8}|\d{4}-\d{7}/,
/**
   * 数字正则
   * @private
   */
U.NUMBER=/^\d{1,}$/,
/**
   * qq正则
   * @private
   */
U.QQ=/^[1-9][0-9]{4,10}$/,
/**
   * 小数正则
   */
U.DECIMAL=/^\d+\.\d+$/,
/**
   * 汉字正则
   */
U.CHINESE_CHARACTERS=/^[\u4E00-\u9FA5]+$/,
/**
   * 英文字母正则
   */
U.ENGLISH=/^[a-zA-Z]+$/,
/**
   * 小写英文正则
   */
U.LOWER_ENGLISH=/^[a-z]+$/,
/**
   * 大写英文正则
   */
U.CAPITALIZE_ENGLISH=/^[A-Z]+$/,
/**
   * IPV4正则
   */
U.IPV4=/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
/**
   * IPV6正则
   */
U.IPV6=/^((([0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))$/i,
/**
   * 颜色正则
   */
U.COLOR=/^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/,
/**
   * 邮政编码正则
   */
U.POSTAL_CODE=/^(0[1-7]|1[0-356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[0-5]|8[013-6])\d{4}$/;var H=function(t){i(r,t);var e=y(r);function r(){return n(this,r),e.apply(this,arguments)}return u(r,null,[{key:"test",value:
/**
       * 正则
       */
function(t,e){return e.test(t)}
/**
       * 正则
       */},{key:"exec",value:function(t,e){return e.exec(t)}}]),r}(U);return window.DateUtil=F,window.StrUtil=k,window.MathUtil=S,window.ArrayUtil=_,window.RandomUtil=x,window.ReUtil=H,t.ArrayUtil=_,t.DateUtil=F,t.MathUtil=S,t.RandomUtil=x,t.ReUtil=H,t.StrUtil=k,Object.defineProperty(t,"__esModule",{value:!0}),t}({});
