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


/**
 * 
 * @param storeKey 存储的键
 * @param storeValue 存储的值
 */
const storeArrayItem = (storeKey: string, storeValue: string) => {
    let oldHis = getLocal(storeKey)
    let hisArr: Array<string> = oldHis ? JSON.parse(oldHis) : [];
    if (hisArr) {        
        let index = hisArr.findIndex((item) => item == storeValue);
        index != -1 && hisArr.splice(index, 1);
    }
    hisArr.unshift(storeValue);
    storeLocal(storeKey, JSON.stringify(hisArr))
}

/**
 * 
 * @param storeKey 存储的键
 */
const getArrayStore = <T>(storeKey: string): Array<T> => {
    let hisStr = getLocal(storeKey);
    return hisStr ? JSON.parse(hisStr) : [];
}

Vue.prototype.$storeLocal = storeLocal
Vue.prototype.$getLocal = getLocal
Vue.prototype.$getArrayStore = getArrayStore
Vue.prototype.$storeArrayItem = storeArrayItem

export { getLocal, storeLocal, storeArrayItem, getArrayStore };