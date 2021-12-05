import { ref } from '@nuxtjs/composition-api';

export const useModal = () => {
  const isModal = ref(false);

  const closeModal = () => {
    isModal.value = false;
  };

  const openModal = () => {
    isModal.value = true;
  };

  return {
    isModal,
    closeModal,
    openModal,
  };
};
export type ModalStore = ReturnType<typeof useModal>;
