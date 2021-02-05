export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Sooman Che | Full-stack Developer',
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
        throw new Error(
          [
            'Could not find the existing image loader rule.',
            ' The webpack config has been edited, perhaps by another Nuxt module.',
            ' To resolve this error try placing this module first in your Nuxt modules array',
            ' or use a custom webpack configuration instead.',
          ].join('')
        )
      }

      /* Update the loader so it's no longer respo∏nsible for png/jpg/webp files */
      if (existingImageLoader) {
        existingImageLoader.test = /\.(svg|gif)$/i
      }

      /* Add the new loader rule */
      config.module.rules.push({
        test: /\.(png|jpe?g|webp)$/,
        loader: 'responsive-loader',
        options: {
          placeholder: true,
          placeholderSize: 20,
          quality: 60,
          sizes: [960],
          adapter: require('responsive-loader/sharp'),
          format: 'webp',
        },
      })
    },
  },
}
