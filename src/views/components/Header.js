import Component from "./Component";
import (/* webpackChunkName: "header" */"../../assest/css/header.css");

class Header extends Component {
  constructor() {
    super({element: 'header', className: 'header'}, {
      classList: ['header.css']
    });
  }

  addEvents() {
    this.shadowRoot.querySelectorAll('.header__link').forEach((link) => {
      link.addEventListener('click', (e) => window.router.navigate(e.target.getAttribute('link')));
    })
  }

  template = () => {
    const hash = window.router.getCurrentLocation().hashString;
    return `
    <a href="/#/" class="header__logo">Coin.</a>
    ${store.user.key ? `<nav class="header__nav">
      <ul class="header__list">
        <li class="header__item"><a class="header__link" link="">Банкоматы</a></li>
        <li class="header__item ${!hash ? 'active' : ''}"><a class="header__link" link="/">Счета</a></li>
        <li class="header__item ${hash === '/currency' ? 'active' : ''}"><a class="header__link" link="/currency">Валюта</a></li>
        <li class="header__item"><a class="header__link" link="">Выйти</a></li>
      </ul>
    </nav>` : ``}
    `;
  }
}

// зарегистрируем наш компонент как html-тэг
window.customElements.define('coin-header', Header);
