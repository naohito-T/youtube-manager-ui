<template>
  <!-- デフォルト右。モーダルのとき左にするため左にする。 -->
  <section class="visual">
    <div class="visual-inner">
      <div class="visual-inner-nav">
        <ul class="navs">
          <li class="navs-item"><nuxt-link to="VIDEO">- VIDEO</nuxt-link></li>
          <li class="navs-item"><nuxt-link to="VIDEO">- VIDEO</nuxt-link></li>
          <li class="navs-item"><nuxt-link to="VIDEO">- VIDEO</nuxt-link></li>
          <li class="navs-item"><nuxt-link to="VIDEO">- VIDEO</nuxt-link></li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.visual {
  /** size 間 */
  width: 250px;
  height: 50vh;
  &-inner {
    &-nav {
      .navs {
        @include displayFlex(center, column, space-between);
      }
    }
  }
}
</style>
