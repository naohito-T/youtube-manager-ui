<template>
  <Modal :has-close-button="true">
    <VisualNav />
  </Modal>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import Modal from '@/components/atoms/Modal.vue';
import VisualNav from '@/components/atoms/VisualNav.vue';

export default defineComponent({
  components: {
    Modal,
    VisualNav,
  },
  setup() {
    return {};
  },
});
</script>
