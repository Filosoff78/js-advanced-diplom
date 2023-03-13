import { store } from './Store';

export function registerStore() {
  store({
    key: null,
  }, 'user');
}
