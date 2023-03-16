import Navigo from 'navigo';
import Home from '../views/pages/Home';
import Currency from '../views/pages/Currency';

window.router = new Navigo('/', { hash: true });

const routing = [
  {
    url: '/',
    page: new Home(),
  },
  {
    url: '/currency',
    page: new Currency(),
  },
];

function registerRouting() {
  routing.forEach(({ url, page }) => {
    window.router.on(url, () => {
      page.render();
    });
    console.log(url);
  });

  window.router.resolve();
}

export default registerRouting;
