import { SITE_NAME,SITE_NAME_EN, WebSiteMeta} from "./configs"
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: `${SITE_NAME} - ${SITE_NAME_EN}`,
    htmlAttrs: {
      lang: 'en'
    },
    meta: WebSiteMeta,
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'ant-design-vue/dist/antd.less',
    'assets/css/global.less',
    'assets/css/common.less',
    'element-ui/lib/theme-chalk/color-picker.css'
  ],
  styleResources: {
    less: [
      './assets/css/variable.less'
    ]
  },
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
    '@nuxtjs/style-resources'
  ],
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loaders: {
      less: {
        lessOptions: { // less-loader 5.x以上才有 lessOptions , 5.x 以下直接配置
          javascriptEnabled: true,
          // 根据自己需要的主题颜色修改， antdV 的变量配置可以查看 https://github.com/vueComponent/ant-design-vue/blob/master/components/style/themes/default.less
          modifyVars: {
            'primary-color': '#533ef9',
          }
        },
      },
    },
  }
}
