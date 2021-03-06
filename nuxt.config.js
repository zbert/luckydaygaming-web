module.exports = {
  env: {
    KEYSTONE_URL: process.env.KEYSTONE_URL || 'https://luckydaygaming-cms.herokuapp.com'
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'luckydaygaming-web',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '//fonts.googleapis.com/css?family=Roboto+Condensed:400,700,700i|Roboto:400,400i,700,700i' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  css: [
    // SCSS file in the project
    '@/assets/styles/main.scss'
  ],
  plugins: [
    // ssr: false to only include it on client-side
    { src: '~/plugins/vue-scroll.js', ssr: false }
  ],
  router: {
    middleware: 'get-layout'
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
