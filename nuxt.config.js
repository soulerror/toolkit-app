export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '在线小工具',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'keyword', content: "在线工具,开发人员工具,代码格式化、压缩、加密、解密,编码,解码,进制转换,二维码,时间戳,rgb,hex,cron表达式,base64,正则表达式,json格式化,照片压缩,pdf合并" },
      { hid: 'description', name: 'description', content:"在线工具,开发人员工具,代码格式化、压缩、加密、解密,编码,解码,进制转换,二维码,时间戳,rgb,hex,cron表达式,base64,正则表达式,json格式化,照片压缩,pdf合并" },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'ant-design-vue/dist/antd.less',
    'assets/css/global.less'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/antd-ui',
    '@/plugins/localstorage'
  ],
  router: {
    middleware: [
      'route'
    ],
  },
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loaders: {
      less: {
        lessOptions: { // less-loader 5.x以上才有 lessOptions , 5.x 以下直接配置
          javascriptEnabled: true,
          modifyVars: { // 根据自己需要的主题颜色修改， antdV 的变量配置可以查看 https://github.com/vueComponent/ant-design-vue/blob/master/components/style/themes/default.less
            'primary-color': '#533ef9',
          }
        },
      },
    },
  }
}
