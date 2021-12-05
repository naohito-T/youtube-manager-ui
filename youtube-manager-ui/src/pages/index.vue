<template>
  <TopTemplate />
</template>

<script lang="ts">
import { defineComponent, useContext } from '@nuxtjs/composition-api';
import TopTemplate from '@/components/template/TopTemplate.vue';

export default defineComponent({
  components: {
    TopTemplate,
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
