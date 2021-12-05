import { InjectionKey } from '@nuxtjs/composition-api';
import { ModalStore } from '../stores';

const ModalKey: InjectionKey<ModalStore> = Symbol('ModalStore');
export default ModalKey;
