<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    :height="height"
    :width="width"
    role="img"
    aria-hidden="true"
  >
    <path :d="mdi" />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  props: {
    mdi: {
      type: String,
      required: true,
    },
    width: {
      type: Number,
      default: 24,
    },
    height: {
      type: Number,
      default: 24,
    },
  },
  setup() {
    return {};
  },
});
</script>

