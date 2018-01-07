module.exports = {
  loading: '~/components/Loading/loading.vue',
  plugins: [{
    src: '~plugins/vue-notifications',
    ssr: false
  }],
  /*
  ** Headers of the page
  */
  head: {
    title: 'utau-oy',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'Nuxt.js project'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },
  /*
  ** Customize the progress bar color
  */
  // loading: {color: '#3B8070'},
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    /*
  ** 配置全局样式
  */
    css: [
      {src: '~/assets/style/global.scss', lang: 'scss'}
    ]
  },
  transition: {
    name: 'fade',
    mode: 'out-in'
  },
  head: {
    title: 'UTAU | This\'s display About me blog',
    titleTemplate: 'UTAU | Ouy',
    htmlAttrs: {
      lang: 'zh'
    }
  },
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'cleartype', content: 'on' },
      { name: 'author', content: 'surmon@foxmail.com' },
      { name: 'MobileOptimized', content: '320' },
      { name: 'HandheldFriendly', content: 'True' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, user-scalable=no' },
      { hid: 'keywords', name: 'keywords', content: 'UTAU,AllenOYang,Vue教程,前端技术开发,javascript技术' },
      { hid: 'description', name: 'description', content: '知行' }
    ]
}
