<template>
  <main class="main">
    <!-- 上から順に各ブロックを並べる順番です。コンテンツの重要度はHTMLで上から記述した順になるのが理想。そのためleft main right と配置するが文章内ではmain left rightとする -->
    <div class="contents">
      Main Content
      <p>aaaa</p>
      <p>aaaa</p>
      <p>aaaa</p>
      <p>aaaa</p>
      <p>aaaa</p>
    </div>
    <div class="left">Left Sidebar</div>
    <div class="right">Right Sidebar</div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
// import TopVisual from '@/components/molecules/TopVisual.vue';

export default defineComponent({
  // components: {
  //   TopVisual,
  // },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
/** layout include */
@include topLayout();

.main {
  .contents {
  }
}
</style>
