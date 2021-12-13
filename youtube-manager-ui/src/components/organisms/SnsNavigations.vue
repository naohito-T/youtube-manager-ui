<template>
  <div class="sns">
    <p class="sns-title">SHARE</p>
    <ul class="sns-title">
      <li>
        <a href=""><MdiIcon :mdi="mdiGithub" /></a>
      </li>
      <li>
        <a href=""><MdiIcon :mdi="mdiInstagram" /></a>
      </li>
      <li>
        <a href=""><MdiIcon :mdi="mdiTwitter" /></a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import { mdiGithub, mdiInstagram, mdiTwitter } from '@mdi/js';
import MdiIcon from '@/components/atoms/MdiIcon.vue';

export default defineComponent({
  components: {
    MdiIcon,
  },
  setup() {
    return {
      mdiGithub,
      mdiInstagram,
      mdiTwitter,
    };
  },
});
</script>

<style lang="scss" scoped>
.sns {

}
</style>
