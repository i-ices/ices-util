import { ObjectUtil } from "./ObjectUtil";
import { Assert } from "../lang/Assert";
export class ArrayUtil {
    /**
     * 判断空
     * @param array 数组
     */
    static isEmpty(array) {
        return array == null || array.length == 0;
    }
    /**
     * 数组是否为空<br>
     * 此方法会匹配单一对象，如果此对象为{@code null}则返回true<br>
     * 如果此对象为非数组，理解为此对象为数组的第一个元素，则返回false<br>
     * 如果此对象为数组对象，数组长度大于0情况下返回false，否则返回true
     *
     * @param array 数组
     * @return 是否为空
     */
    static isObjEmpty(array) {
        if (array != null) {
            if (this.isArray(array)) {
                return 0 == this.getLength(array);
                ;
            }
            return false;
        }
        return true;
    }
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
    static getLength(array) {
        if (null == array) {
            return 0;
        }
        // @ts-ignore
        return Array.from(array).length;
    }
    /**
     * 对象是否为数组对象
     *
     * @param obj 对象
     * @return 是否为数组对象，如果为{@code null} 返回false
     */
    static isArray(obj) {
        return null != obj && Array.isArray(obj);
    }
    /**
     * 判断非空
     * @param array
     */
    static isNotEmpty(array) {
        return (null != array && array.length != 0);
    }
    /**
     * 是否包含{@code null}元素
     *
     * @param <T>   数组元素类型
     * @param array 被检查的数组
     * @return 是否包含{@code null}元素
     * @since 3.0.7
     */
    static hasNull(array) {
        if (this.isNotEmpty(array)) {
            for (let t of array) {
                if (ObjectUtil.isNull(t)) {
                    return true;
                }
            }
        }
        return array == null;
    }
    /**
     * 多个字段是否全为null
     *
     * @param <T>   数组元素类型
     * @param array 被检查的数组
     * @return 多个字段是否全为null
     * @author dahuoyzs
     * @since 5.4.0
     */
    static isAllNull(array) {
        return null == this.firstNonNull(array);
    }
    /**
     * 返回数组中第一个非空元素
     *
     * @param <T>   数组元素类型
     * @param array 数组
     * @return 非空元素，如果不存在非空元素或数组为空，返回{@code null}
     * @since 3.0.7
     */
    static firstNonNull(array) {
        return this.firstMatch(new class {
            match(t) {
                return ObjectUtil.isNotNull(t);
            }
        }, array);
    }
    /**
     * 返回数组中第一个匹配规则的值
     *
     * @param <T>     数组元素类型
     * @param matcher 匹配接口，实现此接口自定义匹配规则
     * @param array   数组
     * @return 匹配元素，如果不存在匹配元素或数组为空，返回 {@code null}
     * @since 3.0.7
     */
    static firstMatch(matcher, array) {
        const index = this.matchIndex(matcher, 0, array);
        if (index < 0) {
            return null;
        }
        return array[index];
    }
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
    static matchIndex(matcher, beginIndexInclude, array) {
        Assert.notNull(matcher, "Matcher must be not null !");
        if (this.isNotEmpty(array)) {
            for (let i = beginIndexInclude; i < array.length; i++) {
                if (matcher.match(array[i])) {
                    return i;
                }
            }
        }
        return this.INDEX_NOT_FOUND;
    }
    /**
     * 新建一个空数组
     *
     * @param newSize       大小
     * @return 空数组
     */
    static newArray(newSize) {
        return new Array(newSize);
    }
    /**
     * 取最小值
     *
     * @param <T>         元素类型
     * @param numberArray 数字数组
     * @param comparator  比较器，null按照默认比较
     * @return 最小值
     * @since 5.3.4
     */
    static min(numberArray) {
        if (this.isEmpty(numberArray)) {
            throw Error("Number array must not empty !");
        }
        let min = numberArray[0];
        for (let t of numberArray) {
            if (this.compare(min, t, false) > 0) {
                min = t;
            }
        }
        return min;
    }
    /**
     * 取最大值
     *
     * @param <T>         元素类型
     * @param numberArray 数字数组
     * @param comparator  比较器，null表示默认比较器
     * @return 最大值
     * @since 5.3.4
     */
    static max(numberArray) {
        if (this.isEmpty(numberArray)) {
            throw Error("Number array must not empty !");
        }
        let max = numberArray[0];
        for (let i = 1; i < numberArray.length; i++) {
            if (this.compare(max, numberArray[i], false) < 0) {
                max = numberArray[i];
            }
        }
        return max;
    }
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
    static compare(c1, c2, isNullGreater) {
        if (c1 == c2) {
            return 0;
        }
        else if (c1 == null) {
            return isNullGreater ? 1 : -1;
        }
        else if (c2 == null) {
            return isNullGreater ? -1 : 1;
        }
        return this.compareTo(c1, c2);
    }
    /**
     * 以数值方式比较两个int值。返回的值与通过以下方式返回的值相同：
     * @param x 要比较的第一个int
     * @param y 要比较的第二个int
     * @private 如果x == y则值为0 ；如果x < y则小于0的值；如果x > y ，则值大于0
     */
    static compareTo(x, y) {
        return (x < y) ? -1 : ((x == y) ? 0 : 1);
    }
    /**
     * 打乱数组顺序，会变更原数组
     *
     * @param <T>    元素类型
     * @param array  数组，会变更
     * @return 打乱后的数组
     * @author ices
     * @since 5.5.2
     */
    static shuffle(array) {
        if (array == null || array.length <= 1) {
            return array;
        }
        for (let i = array.length; i > 1; i--) {
            this.swap(array, i - 1, Math.floor(Math.random() * i));
        }
        return array;
    }
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
    static swap(array, index1, index2) {
        if (this.isEmpty(array)) {
            throw Error("Array must not empty !");
        }
        let tmp = array[index1];
        array[index1] = array[index2];
        array[index2] = tmp;
        return array;
    }
    /**
     * 计算null或空元素对象的个数
     *
     * @param args 被检查的对象,一个或者多个
     * @return 存在{@code null}的数量
     * @since 4.5.18
     */
    static emptyCount(args) {
        let count = 0;
        if (this.isNotEmpty(args)) {
            for (let arg of args) {
                if (ObjectUtil.isEmpty(arg)) {
                    count++;
                }
            }
        }
        return count;
    }
    /**
     * 是否存在{@code null}或空对象
     *
     * @param args 被检查对象
     * @return 是否存在
     * @since 4.5.18
     */
    static hasEmpty(args) {
        if (this.isNotEmpty(args)) {
            for (let arg of args) {
                if (ObjectUtil.isEmpty(arg)) {
                    return true;
                }
            }
        }
        return false;
    }
    /**
     * 是否存都为{@code null}或空对象，
     *
     * @param args 被检查的对象,一个或者多个
     * @return 是否都为空
     * @since 4.5.18
     */
    static isAllEmpty(args) {
        for (let obj of args) {
            if (false == ObjectUtil.isEmpty(obj)) {
                return false;
            }
        }
        return true;
    }
    /**
     * 是否存都不为{@code null}或空对象
     *
     * @param args 被检查的对象,一个或者多个
     * @return 是否都不为空
     * @since 4.5.18
     */
    static isAllNotEmpty(args) {
        return false == this.hasEmpty(args);
    }
    /**
     * 多个字段是否全部不为null
     *
     * @param <T>   数组元素类型
     * @param array 被检查的数组
     * @return 多个字段是否全部不为null
     * @since 5.4.0
     */
    static isAllNotNull(array) {
        return false == this.hasNull(array);
    }
    /**
     * 去重数组中的元素，去重后生成新的数组，原数组不变<br>
     *
     * @param <T>   数组元素类型
     * @param array 数组
     * @return 去重后的数组
     */
    static distinct(array) {
        if (this.isEmpty(array)) {
            return array;
        }
        return Array.from(new Set(array));
    }
    /**
     * 判断两个数组是否相等，判断依据包括数组长度和每个元素都相等。
     *
     * @param array1 数组1
     * @param array2 数组2
     * @return 是否相等
     * @since 5.4.2
     */
    static equals(array1, array2) {
        if (array1 == array2) {
            return true;
        }
        if (this.hasNull(array1) || this.hasNull(array2)) {
            return false;
        }
        Assert.isTrue(this.isArray(array1), "First is not a Array !");
        Assert.isTrue(this.isArray(array2), "Second is not a Array !");
        return array1.length == array2.length && this.arrayEquals(array1, array2);
    }
    /**
     * 嵌套数组比较
     * @param array1 数组1
     * @param array2 数组2
     * @private 是否相等
     */
    static arrayEquals(array1, array2) {
        let i = 0, l = array1.length;
        for (; i < l; i++) {
            // 检查是否为内嵌数组
            if (array1[i] instanceof Array && array2[i] instanceof Array) {
                // 递归比较数组
                if (!this.arrayEquals(array1[i], array2[i])) {
                    return false;
                }
            }
            else if (array1[i] != array2[i]) { //标量比较
                return false;
            }
        }
        return true;
    }
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
    static indexOf(array, value, beginIndexInclude) {
        return this.matchIndex(new class {
            match(t) {
                return ObjectUtil.equal(value, t);
            }
        }, beginIndexInclude !== null && beginIndexInclude !== void 0 ? beginIndexInclude : 0, array);
    }
    /**
     * 返回数组中指定元素所在最后的位置，未找到返回{@link #INDEX_NOT_FOUND}
     *
     * @param <T>   数组类型
     * @param array 数组
     * @param value 被检查的元素
     * @return 数组中指定元素所在位置，未找到返回{@link #INDEX_NOT_FOUND}
     * @since 3.0.7
     */
    static lastIndexOf(array, value) {
        if (this.isEmpty(array)) {
            return this.INDEX_NOT_FOUND;
        }
        return this.lastIndexOfPre(array, value, array.length - 1);
    }
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
    static lastIndexOfPre(array, value, endInclude) {
        if (this.isNotEmpty(array)) {
            for (let i = endInclude; i >= 0; i--) {
                if (ObjectUtil.equal(value, array[i])) {
                    return i;
                }
            }
        }
        return this.INDEX_NOT_FOUND;
    }
    /**
     * 数组中是否包含元素
     *
     * @param <T>   数组元素类型
     * @param array 数组
     * @param value 被检查的元素
     * @return 是否包含
     */
    static contains(array, value) {
        return this.indexOf(array, value, 0) > this.INDEX_NOT_FOUND;
    }
    /**
     * 数组中是否包含指定元素中的任意一个
     *
     * @param <T>    数组元素类型
     * @param array  数组
     * @param values 被检查的多个元素
     * @return 是否包含指定元素中的任意一个
     * @since 4.1.20
     */
    static containsAny(array, ...values) {
        for (let value of values) {
            if (this.contains(array, value)) {
                return true;
            }
        }
        return false;
    }
    /**
     * 数组中是否包含指定元素中的全部
     *
     * @param <T>    数组元素类型
     * @param array  数组
     * @param values 被检查的多个元素
     * @return 是否包含指定元素中的全部
     * @since 5.4.7
     */
    static containsAll(array, ...values) {
        for (let value of values) {
            if (false == this.contains(array, value)) {
                return false;
            }
        }
        return true;
    }
    /**
     * 统计数组中某个值出现的次数
     */
    static countOccurrences(arr, val) {
        return arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
    }
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
    static indexOfSub(array, beginInclude, subArray) {
        if (this.isEmpty(array) || this.isEmpty(subArray) || subArray.length > array.length) {
            return this.INDEX_NOT_FOUND;
        }
        let firstIndex = this.indexOf(array, subArray[0], beginInclude);
        if (firstIndex < 0 || firstIndex + subArray.length > array.length) {
            return this.INDEX_NOT_FOUND;
        }
        for (let i = 0; i < subArray.length; i++) {
            if (false == ObjectUtil.equal(array[i + firstIndex], subArray[i])) {
                return this.indexOfSub(array, firstIndex + 1, subArray);
            }
        }
        return firstIndex;
    }
    /**
     * 查找最后一个子数组的开始位置
     *
     * @param array    数组
     * @param subArray 子数组
     * @param <T>      数组元素类型
     * @return 最后一个子数组的开始位置，即子数字第一个元素在数组中的位置
     * @since 5.4.8
     */
    static lastIndexOfSub(array, subArray) {
        if (this.isEmpty(array) || this.isEmpty(subArray)) {
            return this.INDEX_NOT_FOUND;
        }
        return this.lastIndexOfSubEnd(array, array.length - 1, subArray);
    }
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
    static lastIndexOfSubEnd(array, endInclude, subArray) {
        if (this.isEmpty(array) || this.isEmpty(subArray) || subArray.length > array.length || endInclude < 0) {
            return this.INDEX_NOT_FOUND;
        }
        let firstIndex = this.lastIndexOf(array, subArray[0]);
        if (firstIndex < 0 || firstIndex + subArray.length > array.length) {
            return this.INDEX_NOT_FOUND;
        }
        for (let i = 0; i < subArray.length; i++) {
            if (false == ObjectUtil.equal(array[i + firstIndex], subArray[i])) {
                return this.lastIndexOfSubEnd(array, firstIndex - 1, subArray);
            }
        }
        return firstIndex;
    }
    /**
     * 克隆数组
     *
     * @param array 被克隆的数组
     * @return 新数组
     */
    static clone(array) {
        if (array == null) {
            return null;
        }
        return [...array];
    }
}
/**
 * 数组中元素未找到的下标，值为-1
 */
ArrayUtil.INDEX_NOT_FOUND = -1;
