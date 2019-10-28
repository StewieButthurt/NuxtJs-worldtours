
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Туры',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { name: 'theme-color', content: '#4b5f6a' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/logo.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: false,
  /*
  ** Global CSS
  */
  css: [
    'animate.css/animate.min.css',
    'swiper/dist/css/swiper.css',
    'nprogress/nprogress.css'
    
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~plugins/globals.js',
    { src: '~/plugins/swiper.js', ssr: false },
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/recaptcha',
    '@bazzite/nuxt-optimized-images'
  ],
  optimizedImages: {
    optimizeImages: true
  },
  axios: {
    baseURL: process.env.BASE_URL || 'http://localhost:3000'
  },
  recaptcha: {
    // hideBadge: false, 
    language: 'ru',
    siteKey: '6LfaJb4UAAAAAJqaE651QxLCni4Hf0MCpXwdkhaU',   
    version: 2, 
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
