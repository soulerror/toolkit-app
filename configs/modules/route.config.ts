export const routeArr: Array<Page> = [
    {
        path: "/tools/json-pretty",
        name: "JSON格式化工具",
        icon: "tools"
    },
    {
        path: "/tools/url-codec",
        name: "URL编解码",
        icon: "tools"
    },
    {
        path: "/tools/base64",
        name: "Base64编解码",
        icon: "tools"
    },
    {
        path: "/tools/regular",
        name: "正则表达式验证",
        icon: "tools"
    },
    {
        path: "/tools/rgb-hex",
        name: "RGB HEX互转",
        icon: "tools"
    },
    {
        path: "/tools/cron-util",
        name: "Cron表达式工具",
        icon: 'tools'
    },
    {
        path: "/tools/time-formater",
        name: "时间戳转换",
        icon: 'tools'
    },
    {
        path: "/tools/qrcode",
        name: "二维码生成识别",
        icon: 'tools'
    }
]
//路由Page结构定义
export interface Page {
    path: string,
    name: string,
    icon: string
}

//路由map
export const routeMap: Map<string, Page> = arrayToMap(routeArr);
//热门工具
export const hotList: Array<Page> = hottestHis(routeArr);

//数组转map
function arrayToMap(array: Array<Page>) {
    let routeMap: Map<string, Page> = new Map();
    for (const item of array) {
        routeMap.set(item.path, item)
    }
    return routeMap;
}

/**
 * 最火热的4条记录
 * @param routeArr 记录
 * @returns 记录
 */
function hottestHis(routeArr: Array<Page>) {
    let hots = [...routeArr]
    if (hots.length > 4) {
        hots.splice(4)
    }
    return hots;
};