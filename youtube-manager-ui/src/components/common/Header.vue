<template>
  <header class="header">
    <Title :en-title="enTitle" :ja-title="jaTitle" />
  </header>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import Title from '@/components/atoms/Title.vue';

export default defineComponent({
  components: {
    Title,
  },
  props: {
    enTitle: {
      type: String,
      required: true,
    },
    jaTitle: {
      type: String,
      required: true,
    },
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss">
/** ここは縦にする。 */
</style>
