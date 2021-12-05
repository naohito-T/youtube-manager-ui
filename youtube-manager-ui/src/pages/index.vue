<template>
  <Tutorial />
</template>

<script lang="ts">
import { defineComponent, useContext } from '@nuxtjs/composition-api';
import Tutorial from '@/components/Tutorial.vue';

export default defineComponent({
  components: {
    Tutorial,
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
