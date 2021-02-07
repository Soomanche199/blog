import fontawesome from './configs/fontawesome'
import global from './utils/metaGlobal'
import getSiteMeta from './utils/getSiteMeta'
import getRoutes from './utils/getRoutes'

const meta = getSiteMeta()

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: {
      lang: 'en',
    },
    title: global.siteTitle,
    meta: [
      ...meta,
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: global.siteDesc || '',
      },
      { property: 'og:site_name', content: global.siteName || '' },
      {
        hid: 'description',
        name: 'description',
        content: global.siteDesc || '',
      },
      { property: 'og:image:width', content: '740' },
      { property: 'og:image:height', content: '300' },
      { name: 'twitter:site', content: global.siteName || '' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        hid: 'canonical',
        rel: 'canonical',
        href: global.siteUrl,
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['assets/styles/main.pcss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    '~/components',
    { path: '~/components/icons/', prefix: 'icons' },
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    '@nuxtjs/fontawesome',
    '@nuxtjs/google-fonts',
    '@nuxtjs/google-analytics',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/sitemap',
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        'postcss-normalize': {},
      },
      preset: {
        features: {
          'nesting-rules': true,
          'custom-media-queries': { importFrom: 'assets/styles/main.pcss' },
        },
      },
    },

    extend(config, ctx) {
      const existingImageLoader = config.module.rules.find(
        (rule) =>
          rule.test.test('.png') &&
          rule.test.test('.jpg') &&
          rule.test.test('.gif') &&
          rule.test.test('.webp') &&
          rule.test.test('.svg')
      )

      if (!existingImageLoader) {
        throw new Error([].join(''))
      }

      if (existingImageLoader) {
        existingImageLoader.test = /\.(svg|gif)$/i
      }

      config.module.rules.push({
        test: /\.(png|jpe?g|webp)$/,
        loader: 'responsive-loader',
        options: {
          quality: 60,
          sizes: [960],
          adapter: require('responsive-loader/sharp'),
          format: 'webp',
        },
      })
    },
  },

  googleFonts: {
    families: {
      'Dancing+Script': [700],
      'Noto+Sans+KR': [400, 500, 700],
    },
  },

  fontawesome,

  googleAnalytics: {
    id: 'UA-71949752-3',
  },

  sitemap: {
    hostname: global.siteUrl,
    routes() {
      return getRoutes()
    },
    trailingSlash: false,
  },

  generate: {
    fallback: true,
    routes() {
      return getRoutes()
    },
  },
}
