<template>
  <Modal :has-close-button="true"></Modal>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import Modal from '@/components/atoms/Modal.vue';

export default defineComponent({
  components: {
    Modal,
  },
  setup() {},
});
</script>
