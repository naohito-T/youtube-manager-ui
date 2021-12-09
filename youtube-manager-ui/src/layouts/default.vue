<template>
  <div id="root">
    <Header :en-title="'Youtube API'" :ja-title="'naohito-T'" />
    <nuxt />
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import Header from '@/components/common/Header.vue';
import Footer from '@/components/common/Footer.vue';

export default defineComponent({
  components: {
    Header,
    Footer,
  },
  setup() {},
});
</script>

<style lang="scss" scoped>
/**
 * レイアウトをここで組んでいる(聖杯レイアウト)
 * @see https://coliss.com/articles/build-websites/operation/css/useful-layouts-using-modern-css.html
 */

/** web */
#root {
  display: grid;
  grid-template: auto 1fr auto / auto 1fr auto;

  .header {
    grid-column: 1 / 4;
    background-color: blue;
  }

  .footer {
    grid-column: 1 / 4;
  }
}
</style>
