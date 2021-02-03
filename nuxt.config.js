export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'tmp_blog',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['assets/styles/main.pcss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    '@nuxtjs/fontawesome',
    '@nuxtjs/google-fonts',
  ],

  googleFonts: {
    families: {
      'Dancing+Script': [700],
      'Noto+Sans+KR': [400, 500, 700],
    },
  },

  fontawesome: {
    component: 'fa',
    icons: {
      // if you have bought the Pro packages
      // list the icons you want to add, not listed icons will be tree-shaked
      solid: [
        'faBars',
        'faHome',
        'faAddressCard',
        'faBriefcase',
        'faPen',
        'faEnvelope',
        'faTimes',
        'faSearch',
      ],
      // include all icons. But dont do this.
      brands: [
        'faJsSquare',
        'faCss3Alt',
        'faJava',
        'faCentos',
        'faUbuntu',
        'faAws',
        'faVuejs',
      ],
      regular: [],
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
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
  },
}
