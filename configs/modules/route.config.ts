/**
 * 工具状态
 */
export enum ToolStatus {
    DEVELOPING,
    COMPLETED
}

export const routeArr: Array<Page> = [
    {
        path: "/tools/json-pretty",
        name: "JSON格式化工具",
        icon: "json",
        abbr: "Json Formatter",
        desc: "在线Json字符串格式美化工具",
        status: ToolStatus.COMPLETED
    },
    {
        path: "/tools/sql-fill",
        name: "SQL参数填充",
        icon: "sql",
        abbr: "SQL Params Fill",
        desc: "Mybatis/IBatis参数填充工具",
        status: ToolStatus.COMPLETED
    },
    {
        path: "/tools/url-codec",
        name: "URL编解码",
        icon: "url",
        abbr: "URL Codec",
        desc: "在线Url编码、Url解码工具",
        status: ToolStatus.COMPLETED
    },
    {
        path: "/tools/base64",
        name: "Base64编解码",
        icon: "code",
        abbr: "Base64 Codec",
        desc: "在线Base64编码、Base64解码工具",
        status: ToolStatus.COMPLETED
    },
    {
        path: "/tools/qrcode",
        name: "二维码生成",
        icon: 'qrcode',
        abbr: "Qrcode Generator",
        desc: "在线二维码生成、下载工具",
        status: ToolStatus.COMPLETED
    },
    {
        path: "/tools/regular",
        name: "正则表达式验证",
        icon: "regular",
        abbr: "Regular Expression",
        desc: "在线正则表达式验证、正则表达式替换工具",
        status: ToolStatus.DEVELOPING
    },
    {
        path: "/tools/rgb-hex",
        name: "RGB HEX互转",
        icon: "rgb",
        abbr: "RGB HEX Transfer",
        desc: "在线RGB转HEX、HEX转RGB工具",
        status: ToolStatus.DEVELOPING
    },
    {
        path: "/tools/cron-util",
        name: "Cron表达式工具",
        icon: 'cron',
        abbr: "Cron Expression",
        desc: "在线Cron表达式执行时间计算工具",
        status: ToolStatus.DEVELOPING
    },
    {
        path: "/tools/time-formater",
        name: "时间戳转换",
        icon: 'clock',
        abbr: "Time Converter",
        desc: "在线时间戳转换、时间格式转换工具",
        status: ToolStatus.DEVELOPING
    },
    {
        path: "/tools/java",
        name: "Java实体生成",
        icon: 'java',
        abbr: "Java Entity Generator",
        desc: "在线时间戳转换、时间格式转换工具",
        status: ToolStatus.DEVELOPING
    },
]
//路由Page结构定义
export interface Page {
    path: string,
    name: string,
    icon: string,
    abbr: string
    desc: string,
    status: ToolStatus
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