
import { message } from 'ant-design-vue';

/**
 * 防抖原理：一定时间内，只有最后一次操作，再过wait毫秒后才执行函数
 * 
 * @param {Function} func 要执行的回调函数 
 * @param {Number} wait 延时的时间
 * @param {Boolean} immediate 是否立即执行 
 * @return null
 */
export function debounce(func: Function, wait = 500, immediate: boolean = false) {
    let timeout: null | NodeJS.Timeout = null;
    // 清除定时器
    if (timeout !== null) clearTimeout(timeout);
    // 立即执行，此类情况一般用不到
    if (immediate) {
        var callNow = !timeout;
        timeout = setTimeout(function () {
            timeout = null;
        }, wait);
        if (callNow) typeof func === 'function' && func();
    } else {
        // 设置定时器，当最后一次操作后，timeout不会再被清除，所以在延时wait毫秒后执行func回调方法
        timeout = setTimeout(function () {
            typeof func === 'function' && func();
        }, wait);
    }
}

/**
 * 设置粘贴板内容
 * @param val 需要复制的内容
 * @returns null
 */
export function clipboard(val: string) {
    if (!val) {
        message.warning("复制内容为空")
        return false;
    }
    try {
        if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard.writeText(val);
        } else {
            const text = document.createElement("textarea");
            text.value = val;
            document.body.appendChild(text);
            text.select();
            document.execCommand("Copy");
            text.remove();
        }
        message.success('内容已复制至粘贴板')
        return true;
    }
    catch (e) {
        message.error("当前浏览器环境不支持复制");
    }
    return false;
}