<template>
  <div>
    <Header />
    <Tutorial />
    <nuxt-link to="/video">VIDEO Pageに行く</nuxt-link>
  </div>
</template>

<script lang="ts">
import { defineComponent, useContext } from '@nuxtjs/composition-api';
import Tutorial from '@/components/Tutorial.vue';
import Header from '@/components/common/Header.vue';

export default defineComponent({
  components: {
    Tutorial,
    Header,
  },
  setup() {
    const { app } = useContext();
    const a = async () => {
      const a = await app.$api.home.fetchMostPopularVideos();
      console.log(a);
    };
    a();
    return {};
  },
});
</script>

<style lang="scss" scoped>
</style>
