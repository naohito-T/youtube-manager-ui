<template>
  <div v-if="isOpen" class="modal" @click="close">
    <div class="modal-inner">
      <slot></slot>
    </div>
    <a v-if="hasCloseButton" class="modal-close" @click="close">
      <span class="modal-close__bar"></span>
      <span class="modal-close__bar"></span>
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import { ModalStore } from '@/composables/stores';

export default defineComponent({
  props: {
    modalStoreKey: {
      /** keyを指定する。 */
      type: Symbol as () => InjectionKey<ModalStore>,
      required: true,
    },
    hasCloseButton: {
      type: Boolean,
      required: true,
    },
  },
  setup(props) {
    const modal = inject(props.modalStoreKey); // modalstore key注入
    const isOpen = computed(() => modal.openModal);

    watch(isOpen, (currentIsOpen) => changeBodyScroll(currentIsOpen ?? false));
  },
});
</script>

<style lang="scss">
</style>
