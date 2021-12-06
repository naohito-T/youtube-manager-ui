import { NuxtConfig } from '@nuxt/types';

const EXE_ENV = process.env.NODE_ENV ?? 'local';
const ENV_FILE = `./env/decrypt/.env.${EXE_ENV}`;
require('dotenv').config({ path: ENV_FILE });

const nuxtConfig: NuxtConfig = {
  // Global page headers: https://go.nuxtjs.dev/config-head
  srcDir: 'src/',
  globalName: 'youtube-manager-ui',
  head: {
    title: 'youtube-manager-ui',
    htmlAttrs: {
      lang: 'ja',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /** 設定されていなかったら基本、localのやつにする。 */
  env: {
    API_URL: process.env.API_URL ?? 'http://localhost',
    PORT: process.env.API_PORT ?? ':8080',
    // API_ENDPOINT: process.env.API_ENDPOINT ?? '/api',
    YOUTUBE_API_KEY: process.env.YOUTUBE_API_KEY ?? 'none',
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/sass/style.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '@/plugins/api' }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/composition-api/module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/style-resources',
    '@nuxtjs/dotenv',
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.API_URL,
  },
  // scss
  styleResources: {
    scss: ['@/assets/sass/_variables.scss', '@/assets/sass/_mixin.scss'],
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};

export default nuxtConfig;
