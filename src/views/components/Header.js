import Component from "./Component";
import "../../assest/css/field.css";

class Header extends Component {
  constructor() {
    super({element: 'header', className: 'header'}, ['header.css']);

    this._settings.instance = this;

    this._basicElement.innerHTML = this.template();
    this.shadowRoot.appendChild(this._basicElement);

    this.createStore();
    this._store = window.store[`component-${this._settings.id}`]

    document.addEventListener(`user`,  () => {
      super.render();
    });
  }
  template = () => {
    return `
    <a href="/" class="header__logo">Coin.</a>
    ${store.user.key ? `<nav class="header__nav">
      <ul class="header__list">
        <li class="header__item"><a class="header__link">Банкоматы</a></li>
        <li class="header__item"><a class="header__link">Счета</a></li>
        <li class="header__item"><a class="header__link">Валюта</a></li>
        <li class="header__item"><a class="header__link">Выйти</a></li>
      </ul>
    </nav>` : ``}
    `;
  }
}

// зарегистрируем наш компонент как html-тэг
window.customElements.define('coin-header', Header);
