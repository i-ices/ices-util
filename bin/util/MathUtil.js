export class MathUtil {
    /**
     * 相加
     * @param args
     */
    static sum(...args) {
        return args.reduce((prev, total) => total + prev, 0);
    }
    /**
     * 求平均值
     * @param args
     */
    static average(...args) {
        return this.sum(...args) / args.length;
    }
}
