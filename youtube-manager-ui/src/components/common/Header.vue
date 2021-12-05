<template>
  <header class="header">
    <nav class="header-navs">
      <ul class="header-navs-list">
        <li class="header-navs-list__item">
          <nuxt-link to="video"></nuxt-link>VIDEO
        </li>
        <li class="header-navs-list__item">
          <nuxt-link to="video"></nuxt-link>VIDEO
        </li>
        <li class="header-navs-list__item">
          <nuxt-link to="video"></nuxt-link>VIDEO
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  setup() {},
});
</script>

<style lang="scss">
/** ここは縦にする。 */
.header {
  width: 100%;
  height: 100%;
  z-index: 5;

  &-navs {
    &-list {
      &__item {
      }
    }
  }
}
</style>
