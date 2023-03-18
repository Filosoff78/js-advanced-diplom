import Navigo from 'navigo';
import Home from '../views/pages/Home';
import Currency from '../views/pages/Currency';
import AccountDetail from '../views/pages/AccountDetail';

window.router = new Navigo('/', { hash: true });

const routing = [
  {
    url: '/',
    page: Home,
  },
  {
    url: '/currency',
    page: Currency,
  },
  {
    url: '/account/:id/',
    page: AccountDetail,
  },
];

function registerRouting() {
  routing.forEach(({ url, page }) => {
    window.router.on(url, ({ data }) => {
      new page(data);
    });
    console.log(url);
  });

  window.router.resolve();
}

export default registerRouting;
