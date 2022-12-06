export interface Page {
    path: string,
    name: string
}

export const routeArr: Array<Page> = [
    {
        path: "/JsonPretty",
        name: "JSON格式化工具"
    }, {
        path: "/UrlCodec",
        name: "URL编解码"
    },
    {
        path: "/Regular",
        name: "正则表达式验证"
    },
    {
        path: "/RgbHex",
        name: "RGB HEX互转"
    }
]
//
export const routeMap: Map<string, Page> = arrayToMap(routeArr);


//数组转map
function arrayToMap(array: Array<Page>) {
    let routeMap: Map<string, Page> = new Map();
    for (const item of array) {
        routeMap.set(item.path, item)
    }
    return routeMap;
}