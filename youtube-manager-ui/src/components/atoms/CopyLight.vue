<template>
  <div class="copylight">
    <span class="copylight__text">© naohito-T</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
export default defineComponent({
  setup() {},
});
</script>

<style lang="scss" scoped>
.copylight {
  line-height: 1;
  padding: 2vw;
  text-align: center;

  &__text {
    font-weight: 700;
    text-shadow: $textGlow;
  }
}
</style>
