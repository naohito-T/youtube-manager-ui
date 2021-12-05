<template>
  <main class="main">
    <TopVisual />
  </main>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import TopVisual from '@/components/molecules/TopVisual.vue';

export default defineComponent({
  components: {
    TopVisual,
  },
  setup() {
    return {};
  },
});
</script>

