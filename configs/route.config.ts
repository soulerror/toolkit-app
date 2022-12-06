interface Page {
    path: string,
    name: string
}

const hisPathKey: string = 'tool-history'

const routeMap: Map<string, Page> = new Map([
    ["/tools/JsonPretty", {
        path: "/tools/JsonPretty",
        name: "JSON格式化工具"
    }],
    ["/tools/UrlCodec", {
        path: "/tools/UrlCodec",
        name: "URL编解码"
    }],
    ["/tools/Regular",
        {
            path: "/tools/Regular",
            name: "正则表达式验证"
        }],
    ["/tools/RgbHex", {
        path: "/tools/RgbHex",
        name: "RGB HEX互转"
    }],
]
)

export { routeMap, hisPathKey, Page }