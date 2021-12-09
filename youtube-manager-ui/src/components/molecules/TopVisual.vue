<template>
  <article class="wrapper">
    <VisualNav />
  </article>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import VisualNav from '@/components/atoms/VisualNav.vue';

export default defineComponent({
  components: {
    VisualNav,
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.wrapper {
}
</style>
