import Navigo from 'navigo';
import Home from '../views/pages/Home';

const router = new Navigo('/');

const routing = [
  {
    url: '/',
    page: new Home,
  },
];

export function registerRouting() {
  routing.forEach((route) => {
    router.on('/', () => {
      route.page.render();
    });
  });

  router.resolve();
}
