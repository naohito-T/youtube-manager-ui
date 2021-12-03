import { NuxtConfig } from '@nuxt/types';

const EXE_ENV = process.env.NODE_ENV ?? 'local';
const ENV_FILE = `./env/decrypt/.env.${EXE_ENV}`;
require('dotenv').config({ path: ENV_FILE });

const nuxtConfig: NuxtConfig = {
  // Global page headers: https://go.nuxtjs.dev/config-head
  srcDir: 'src/',
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
  /** 設定されていなかったら基本、envのやつにする。 */
  env: {
    API_URL: process.env.API_URL ?? 'http://localhost',
    PORT: process.env.API_PORT ?? ':8080',
    API_ENDPOINT: process.env.API_ENDPOINT ?? '/api',
    YOUTUBE_API_KEY: process.env.YOUTUBE_API_KEY ?? 'none',
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

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
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    '@nuxtjs/dotenv',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};

export default nuxtConfig;
