import Vue from 'vue'

/**
 * 存数据到localStorage
 * @param key 键值
 * @param val 数据
 */
const storeLocal = (key: string, val: any) => {
    if (process.browser) {
        let strVal = (typeof (val) == 'string') ? val : JSON.stringify(val)
        localStorage.setItem(key, strVal);
    }
    else {
        console.log("非浏览器环境不支持读写LocalStorage");
    }
}

/**
 * 
 * @param key 键值
 * @returns 数据
 */
const getLocal = (key: string) => {
    if (process.browser) {
        return localStorage.getItem(key);
    }
    else {
        console.log("非浏览器环境不支持读写LocalStorage");
    }
}

Vue.prototype.$storeLocal = storeLocal
Vue.prototype.$getLocal = getLocal
export { getLocal, storeLocal };