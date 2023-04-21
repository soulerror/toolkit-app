import { SITE_NAME } from "./site.config";
interface Meta {
  title: string;
  meta: Array<MetaContent>;
}

interface MetaContent {
  hid?: string;
  name: string;
  content: string;
  charset?: string;
}

const COMMON_TITLE = " - " + SITE_NAME;

export const WebSiteMeta: Array<MetaContent> = [
  { charset: "utf-8", name: "", content: "" },
  { name: "viewport", content: "width=device-width, initial-scale=1" },
  {
    name: "keyword",
    content:
      "在线工具,开发人员工具,代码格式化、压缩、加密、解密,编码,解码,进制转换,二维码,时间戳,rgb,hex,cron表达式,base64,正则表达式,json格式化,照片压缩,pdf合并",
  },
  {
    hid: "description",
    name: "description",
    content:
      "在线工具,开发人员工具,代码格式化、压缩、加密、解密,编码,解码,进制转换,二维码,时间戳,rgb,hex,cron表达式,base64,正则表达式,json格式化,照片压缩,pdf合并",
  },
  { name: "format-detection", content: "telephone=no" },
];

export const JsonMeta: Meta = {
  title: "JSON格式化" + COMMON_TITLE,
  meta: [
    {
      name: "keywords",
      content:
        "在线,json校验,格式化,工具,在线工具,在线json格式化工具,json字符串格式化,json在线,json字符串,json tools online",
    },
    {
      name: "description",
      hid: "description",
      content:
        "在线,json校验,格式化,工具,在线工具,在线json格式化工具,json字符串格式化,json在线,json字符串,json tools online",
    },
  ],
};

export const UrlCodecMeta: Meta = {
  title: "URL编码解码" + COMMON_TITLE,
  meta: [
    {
      name: "keywords",
      content:
        "在线,url编码,url解码,url编解码,url编码解码,在线工具,在线url编码工具,在线url解码工具,url在线,url转换,url解析,url翻译,url codec tools online",
    },
    {
      name: "description",
      hid: "description",
      content:
        "在线,url编码,url解码,url编解码,url编码解码,在线工具,在线url编码工具,在线url解码工具,url在线,url转换,url解析,url翻译,url codec tools online",
    },
  ],
};

export const RegularMeta: Meta = {
  title: "正则表达式校验" + COMMON_TITLE,
  meta: [
    {
      name: "keywords",
      content:
        "在线,url编码,url解码,url编解码,url编码解码,在线工具,在线url编码工具,在线url解码工具,url在线,url转换,url解析,url翻译,url codec tools online",
    },
    {
      name: "description",
      hid: "description",
      content:
        "在线,url编码,url解码,url编解码,url编码解码,在线工具,在线url编码工具,在线url解码工具,url在线,url转换,url解析,url翻译,url codec tools online",
    },
  ],
};
