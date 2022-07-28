import { DateUtil } from "./date/DateUtil";
import { StrUtil } from "./util/StrUtil";
import { MathUtil } from "./util/MathUtil";
import { ArrayUtil } from "./util/ArrayUtil";
import { RandomUtil } from "./util/RandomUtil";
import { ReUtil } from "./regExp/ReUtil";
declare global {
    interface Window {
        DateUtil?: DateUtil;
        StrUtil?: StrUtil;
        MathUtil?: MathUtil;
        ArrayUtil?: ArrayUtil;
        RandomUtil?: RandomUtil;
        ReUtil?: ReUtil;
    }
}
export { DateUtil };
export { StrUtil };
export { MathUtil };
export { ArrayUtil };
export { RandomUtil };
export { ReUtil };
