import { store } from './Store';

export function registerStore() {
  store({
    key: '123123',
  }, 'user');
}
