import { Matcher } from "../lang/Matcher";
export declare class ArrayUtil {
    /**
     * 数组中元素未找到的下标，值为-1
     */
    static INDEX_NOT_FOUND: number;
    /**
     * 判断空
     * @param array 数组
     */
    static isEmpty<T>(array: Array<T> | null): boolean;
    /**
     * 数组是否为空<br>
     * 此方法会匹配单一对象，如果此对象为{@code null}则返回true<br>
     * 如果此对象为非数组，理解为此对象为数组的第一个元素，则返回false<br>
     * 如果此对象为数组对象，数组长度大于0情况下返回false，否则返回true
     *
     * @param array 数组
     * @return 是否为空
     */
    static isObjEmpty(array: object | null): boolean;
    /**
     * 获取数组长度<br>
     * 如果参数为{@code null}，返回0
     *
     * @param array 数组对象
     * @return 数组长度
     * @throws IllegalArgumentException 如果参数不为数组，抛出此异常
     * @see Array#getLength(Object)
     * @since 3.0.8
     */
    static getLength(array: object | null): number;
    /**
     * 对象是否为数组对象
     *
     * @param obj 对象
     * @return 是否为数组对象，如果为{@code null} 返回false
     */
    static isArray(obj: object): boolean;
    /**
     * 判断非空
     * @param array
     */
    static isNotEmpty<T>(array: Array<T> | null): boolean;
    /**
     * 是否包含{@code null}元素
     *
     * @param <T>   数组元素类型
     * @param array 被检查的数组
     * @return 是否包含{@code null}元素
     * @since 3.0.7
     */
    static hasNull<T>(array: Array<T>): boolean;
    /**
     * 多个字段是否全为null
     *
     * @param <T>   数组元素类型
     * @param array 被检查的数组
     * @return 多个字段是否全为null
     * @author dahuoyzs
     * @since 5.4.0
     */
    static isAllNull<T>(array: Array<T>): boolean;
    /**
     * 返回数组中第一个非空元素
     *
     * @param <T>   数组元素类型
     * @param array 数组
     * @return 非空元素，如果不存在非空元素或数组为空，返回{@code null}
     * @since 3.0.7
     */
    static firstNonNull<T>(array: Array<T>): T | null;
    /**
     * 返回数组中第一个匹配规则的值
     *
     * @param <T>     数组元素类型
     * @param matcher 匹配接口，实现此接口自定义匹配规则
     * @param array   数组
     * @return 匹配元素，如果不存在匹配元素或数组为空，返回 {@code null}
     * @since 3.0.7
     */
    static firstMatch<T>(matcher: Matcher<T>, array: Array<T>): T | null;
    /**
     * 返回数组中第一个匹配规则的值的位置
     *
     * @param <T>               数组元素类型
     * @param matcher           匹配接口，实现此接口自定义匹配规则
     * @param beginIndexInclude 检索开始的位置
     * @param array             数组
     * @return 匹配到元素的位置，-1表示未匹配到
     * @since 5.7.3
     */
    static matchIndex<T>(matcher: Matcher<T>, beginIndexInclude: number, array: Array<T>): number;
    /**
     * 新建一个空数组
     *
     * @param newSize       大小
     * @return 空数组
     */
    static newArray(newSize: number | null | undefined): Array<any>;
    /**
     * 取最小值
     *
     * @param <T>         元素类型
     * @param numberArray 数字数组
     * @param comparator  比较器，null按照默认比较
     * @return 最小值
     * @since 5.3.4
     */
    static min(numberArray: Array<number>): number;
    /**
     * 取最大值
     *
     * @param <T>         元素类型
     * @param numberArray 数字数组
     * @param comparator  比较器，null表示默认比较器
     * @return 最大值
     * @since 5.3.4
     */
    static max(numberArray: Array<number>): number;
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
     */
    private static compare;
    /**
     * 以数值方式比较两个int值。返回的值与通过以下方式返回的值相同：
     * @param x 要比较的第一个int
     * @param y 要比较的第二个int
     * @private 如果x == y则值为0 ；如果x < y则小于0的值；如果x > y ，则值大于0
     */
    private static compareTo;
    /**
     * 打乱数组顺序，会变更原数组
     *
     * @param <T>    元素类型
     * @param array  数组，会变更
     * @return 打乱后的数组
     * @author ices
     * @since 5.5.2
     */
    static shuffle<T>(array: Array<T>): Array<T>;
    /**
     * 交换数组中两个位置的值
     *
     * @param <T>    元素类型
     * @param array  数组
     * @param index1 位置1
     * @param index2 位置2
     * @return 交换后的数组，与传入数组为同一对象
     * @since 4.0.7
     */
    static swap<T>(array: Array<T>, index1: number, index2: number): Array<T>;
    /**
     * 计算null或空元素对象的个数
     *
     * @param args 被检查的对象,一个或者多个
     * @return 存在{@code null}的数量
     * @since 4.5.18
     */
    static emptyCount(args: Array<object>): number;
    /**
     * 是否存在{@code null}或空对象
     *
     * @param args 被检查对象
     * @return 是否存在
     * @since 4.5.18
     */
    static hasEmpty(args: Array<object>): boolean;
    /**
     * 是否存都为{@code null}或空对象，
     *
     * @param args 被检查的对象,一个或者多个
     * @return 是否都为空
     * @since 4.5.18
     */
    static isAllEmpty(args: Array<object>): boolean;
    /**
     * 是否存都不为{@code null}或空对象
     *
     * @param args 被检查的对象,一个或者多个
     * @return 是否都不为空
     * @since 4.5.18
     */
    static isAllNotEmpty(args: Array<object>): boolean;
    /**
     * 多个字段是否全部不为null
     *
     * @param <T>   数组元素类型
     * @param array 被检查的数组
     * @return 多个字段是否全部不为null
     * @since 5.4.0
     */
    static isAllNotNull<T>(array: Array<T>): boolean;
    /**
     * 去重数组中的元素，去重后生成新的数组，原数组不变<br>
     *
     * @param <T>   数组元素类型
     * @param array 数组
     * @return 去重后的数组
     */
    static distinct<T>(array: Array<T>): Array<T>;
    /**
     * 判断两个数组是否相等，判断依据包括数组长度和每个元素都相等。
     *
     * @param array1 数组1
     * @param array2 数组2
     * @return 是否相等
     * @since 5.4.2
     */
    static equals(array1: Array<any>, array2: Array<any>): boolean;
    /**
     * 嵌套数组比较
     * @param array1 数组1
     * @param array2 数组2
     * @private 是否相等
     */
    private static arrayEquals;
    /**
     * 返回数组中指定元素所在位置，未找到返回{@link #INDEX_NOT_FOUND}
     *
     * @param <T>               数组类型
     * @param array             数组
     * @param value             被检查的元素
     * @param beginIndexInclude 检索开始的位置
     * @return 数组中指定元素所在位置，未找到返回{@link #INDEX_NOT_FOUND}
     * @since 3.0.7
     */
    static indexOf<T>(array: Array<T>, value: any, beginIndexInclude: number): number;
    /**
     * 返回数组中指定元素所在最后的位置，未找到返回{@link #INDEX_NOT_FOUND}
     *
     * @param <T>   数组类型
     * @param array 数组
     * @param value 被检查的元素
     * @return 数组中指定元素所在位置，未找到返回{@link #INDEX_NOT_FOUND}
     * @since 3.0.7
     */
    static lastIndexOf<T>(array: Array<T>, value: any): number;
    /**
     * 返回数组中指定元素所在最后的位置，未找到返回{@link #INDEX_NOT_FOUND}
     *
     * @param <T>        数组类型
     * @param array      数组
     * @param value      被检查的元素
     * @param endInclude 查找方式为从后向前查找，查找的数组结束位置，一般为array.length-1
     * @return 数组中指定元素所在位置，未找到返回{@link #INDEX_NOT_FOUND}
     * @since 5.7.3
     */
    private static lastIndexOfPre;
    /**
     * 数组中是否包含元素
     *
     * @param <T>   数组元素类型
     * @param array 数组
     * @param value 被检查的元素
     * @return 是否包含
     */
    static contains<T>(array: Array<T>, value: T): boolean;
    /**
     * 数组中是否包含指定元素中的任意一个
     *
     * @param <T>    数组元素类型
     * @param array  数组
     * @param values 被检查的多个元素
     * @return 是否包含指定元素中的任意一个
     * @since 4.1.20
     */
    static containsAny<T>(array: Array<T>, ...values: Array<T>): boolean;
    /**
     * 数组中是否包含指定元素中的全部
     *
     * @param <T>    数组元素类型
     * @param array  数组
     * @param values 被检查的多个元素
     * @return 是否包含指定元素中的全部
     * @since 5.4.7
     */
    static containsAll<T>(array: Array<T>, ...values: Array<T>): boolean;
    /**
     * 统计数组中某个值出现的次数
     */
    static countOccurrences(arr: [], val: any): number;
    /**
     * 查找子数组的位置
     *
     * @param array        数组
     * @param beginInclude 查找开始的位置（包含）
     * @param subArray     子数组
     * @param <T>          数组元素类型
     * @return 子数组的开始位置，即子数字第一个元素在数组中的位置
     * @since 5.4.8
     */
    static indexOfSub<T>(array: Array<T>, beginInclude: number, subArray: Array<T>): number;
    /**
     * 查找最后一个子数组的开始位置
     *
     * @param array    数组
     * @param subArray 子数组
     * @param <T>      数组元素类型
     * @return 最后一个子数组的开始位置，即子数字第一个元素在数组中的位置
     * @since 5.4.8
     */
    static lastIndexOfSub<T>(array: Array<T>, subArray: Array<T>): number;
    /**
     * 查找最后一个子数组的开始位置
     *
     * @param array      数组
     * @param endInclude 查找结束的位置（包含）
     * @param subArray   子数组
     * @param <T>        数组元素类型
     * @return 最后一个子数组的开始位置，即子数字第一个元素在数组中的位置
     * @since 5.4.8
     */
    private static lastIndexOfSubEnd;
    /**
     * 克隆数组
     *
     * @param array 被克隆的数组
     * @return 新数组
     */
    static clone<T>(array: Array<T>): Array<T> | null;
}
