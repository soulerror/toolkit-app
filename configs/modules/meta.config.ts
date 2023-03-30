import { SITE_NAME } from "./site.config"
interface Meta {
    title: string,
    meta: Array<MetaContent>
}

interface MetaContent {
    hid?: string,
    name: string,
    content: string
}

const COMMON_TITLE = " - " + SITE_NAME;

export const JsonMeta: Meta = {
    title: "JSON格式化" + COMMON_TITLE,
    meta: [
        {
            name: "keywords",
            content: "在线,json校验,格式化,工具,在线工具,在线json格式化工具,json字符串格式化,json在线,json字符串,json tools online"
        },
        {
            name: "description",
            hid: "description",
            content: "在线,json校验,格式化,工具,在线工具,在线json格式化工具,json字符串格式化,json在线,json字符串,json tools online",
        }
    ]
}

export const UrlCodecMeta: Meta = {
    title: "URL编码解码" + COMMON_TITLE,
    meta: [
        {
            name: "keywords",
            content: "在线,url编码,url解码,url编解码,url编码解码,在线工具,在线url编码工具,在线url解码工具,url在线,url转换,url解析,url翻译,url codec tools online"
        },
        {
            name: "description",
            hid: "description",
            content: "在线,url编码,url解码,url编解码,url编码解码,在线工具,在线url编码工具,在线url解码工具,url在线,url转换,url解析,url翻译,url codec tools online"
        }
    ]
}

export const RegularMeta: Meta = {
    title: "正则表达式校验" + COMMON_TITLE,
    meta: [
        {
            name: "keywords",
            content: "在线,url编码,url解码,url编解码,url编码解码,在线工具,在线url编码工具,在线url解码工具,url在线,url转换,url解析,url翻译,url codec tools online"
        },
        {
            name: "description",
            hid: "description",
            content: "在线,url编码,url解码,url编解码,url编码解码,在线工具,在线url编码工具,在线url解码工具,url在线,url转换,url解析,url翻译,url codec tools online"
        }
    ]
}
