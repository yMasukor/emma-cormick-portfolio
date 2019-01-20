const pkg = require('./package')

const metaData = {
  title: 'Emma Cormick – Interior & Spatial Designer',
  desc:
    'Interior & spatial designer based in Sydney, Australia. Currently available for hire.',
  image: ''
}

const defaultMeta = [
  { hid: 'charset', charset: 'utf-8' },
  { hid: 'httpEquiv', httpEquiv: 'X-UA-Compatible', content: 'IE=edge' },
  {
    hid: 'viewport',
    name: 'viewport',
    content: 'width=device-width, initial-scale=1.0'
  },
  { hid: 'description', name: 'description', content: metaData.desc },
  { hid: 'og:title', property: 'og:title', content: metaData.title },
  { hid: 'og:type', property: 'og:type', content: 'website' },
  { hid: 'og:image', property: 'og:image', content: metaData.image },
  { hid: 'og:description', property: 'og:description', content: metaData.desc }
]

module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: metaData.title,
    meta: defaultMeta,
    htmlAttrs: {
      lang: 'en-us'
    },
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/icons/favicon.ico' },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/icons/apple-touch-icon.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/icons/favicon-32x32.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/icons/favicon-16x16.png'
      },
      { rel: 'manifest', href: '/icons/site.webmanifest' },
      {
        rel: 'mask-icon',
        href: '/icons/safari-pinned-tab.svg',
        color: '#00DBBF'
      },
      { name: 'msapplication-TileColor', content: '#ffffff' },
      { name: 'theme-color', content: '#ffffff' }
    ],
    script: [
      {
        src:
          'https://cdn.polyfill.io/v2/polyfill.min.js?features=IntersectionObserver'
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#0043FF' },

  /*
  ** Global CSS
  */
  css: ['~assets/scss/main.scss'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: ['~/plugins/globals'],

  /*
  ** Nuxt.js modules
  */
  modules: [],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }

      const urlLoader = config.module.rules.find(
        rule =>
          rule.test.toString() === /\.(png|jpe?g|gif|svg|webp)$/.toString()
      )
      urlLoader.exclude = /\.(jpe?g|png)$/

      config.module.rules.push({
        test: /\.(jpe?g|png)$/i,
        loader: 'responsive-loader',
        options: {
          // disable:true,
          sizes: [400, 800, 1200, 1440],
          // adapter: require('responsive-loader/sharp'),
          quality: 75
        }
      })
    }
  }
}
