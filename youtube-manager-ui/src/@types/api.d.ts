import '@nuxt/types';
import { API } from '@/lib/app';

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $api: API;
  }
}
