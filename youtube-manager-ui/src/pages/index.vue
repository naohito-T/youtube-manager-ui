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
    console.log(app.$api.home);
    return {};
  },
});
</script>

<style lang="scss" scoped>
</style>
