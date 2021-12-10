<template>
  <main class="main">
    <!-- 上から順に各ブロックを並べる順番です。コンテンツの重要度はHTMLで上から記述した順になるのが理想。そのためleft main right と配置するが文章内ではmain left rightとする -->
    <div class="main-top">
      <div class="contents">
        <!-- ここは大きな文字を出してかっこつけるかアニメーション -->
        Main Content
        <p>aaaa</p>
        <p>aaaa</p>
        <p>aaaa</p>
        <p>aaaa</p>
        <p>aaaa</p>
      </div>
      <!-- これ追尾にする？ -->
      <article class="left">
        <SnsNavigations />
      </article>
      <aside class="right">
        <TopVisual />
      </aside>
    </div>
    <div class="main-center">
      <!-- realtime youtubeの人気記事を出す -->
    </div>
    <!-- あとはfooter -->
  </main>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import TopVisual from '@/components/molecules/TopVisual.vue';
import SnsNavigations from '@/components/organisms/SnsNavigations.vue';

export default defineComponent({
  components: {
    SnsNavigations,
    TopVisual,
  },
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
