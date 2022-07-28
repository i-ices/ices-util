import { StrUtil } from "./StrUtil";
import { ArrayUtil } from "./ArrayUtil";
import { MapUtil } from "./MapUtil";
export class ObjectUtil {
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
    static isNull(obj) {
        return null == obj || Object.is(null, obj);
    }
    /**
     * 检查对象是否不为null
     * <pre>
     * 1. != null
     * 2. not equals(null)
     * </pre>
     *
     * @param obj 对象
     * @return 是否为非null
     */
    static isNotNull(obj) {
        return null != obj && false == Object.is(null, obj);
    }
    /**
     * 判断指定对象是否为空，支持：
     *
     * @param obj 被判断的对象
     * @return 是否为空，如果类型不支持，返回false
     * @since 4.5.7
     */
    static isEmpty(obj) {
        if (null == obj) {
            return true;
        }
        if (obj instanceof String) {
            return StrUtil.isEmpty(String(obj));
        }
        else if (obj instanceof Map) {
            return MapUtil.isEmpty(obj);
        }
        else if (ArrayUtil.isArray(obj)) {
            return ArrayUtil.isObjEmpty(obj);
        }
        return false;
    }
    /**
     * 判断指定对象是否为非空，支持：
     *
     * @param obj 被判断的对象
     * @return 是否为空，如果类型不支持，返回true
     */
    static isNotEmpty(obj) {
        return false == this.isEmpty(obj);
    }
    /**
     * 如果给定对象为{@code null}返回默认值
     *
     * @param <T>          对象类型
     * @param object       被检查对象，可能为{@code null}
     * @param defaultValue 被检查对象为{@code null}返回的默认值，可以为{@code null}
     * @return 被检查对象为{@code null}返回默认值，否则返回原值
     * @since 3.0.7
     */
    static defaultIfNull(object, defaultValue) {
        return this.isNull(object) ? defaultValue : object;
    }
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
     */
    static equal(obj1, obj2) {
        // 指向同一内存时
        if (obj1 === obj2) {
            return true;
        }
        else if ((typeof obj1 == "object" && obj1 != null) && (typeof obj2 == "object" && obj2 != null)) {
            if (Object.keys(obj1).length !== Object.keys(obj2).length) {
                return false;
            }
            for (const prop in obj1) {
                if (obj2.hasOwnProperty(prop)) {
                    if (!this.equal(obj1[prop], obj2[prop]))
                        return false;
                }
                else {
                    return false;
                }
            }
            return true;
        }
        else {
            return false;
        }
    }
}
