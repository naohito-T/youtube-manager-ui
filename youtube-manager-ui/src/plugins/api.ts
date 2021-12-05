import { Plugin } from '@nuxt/types';
import { api } from '../lib/app';

const plugin: Plugin = (_, inject) => {
  inject('api', api);
};

export default plugin;
