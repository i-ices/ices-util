export interface Matcher<T> {
    /**
     * 给定对象是否匹配
     *
     * @param t 对象
     * @return 是否匹配
     */
    match(t: T): boolean;
}
