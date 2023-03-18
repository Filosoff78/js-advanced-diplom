import Component from "./Component";
import {Api} from "../../services/Api";
import (/* webpackChunkName: "userAccounts" */"../../assest/css/userAccounts.css");

class UserAccounts extends Component {
  constructor() {
    super({element: 'div', className: 'field'}, {
      classList: ['userAccounts.css']
    });

    this._dropdown = {};
    this._dropdown.li = [
      {
        text: 'По номеру',
        id: 'number',
      },
      {
        text: 'По балансу',
        id: 'balance',
      },
      {
        text: 'По последней транзакции',
        id: 'lastTransaction',
      },
    ]
  }
  addEvents() {
    this.shadowRoot.querySelector('.js-add-account').addEventListener('click', () => this.createAccount())
  }

  createAccount() {
    Api.post({url:'create-account'}).then((e) => window.store.user.accounts.push(e));
  }

  template = () => {
    return `
      <div class="accounts__top">
        <h1 class="section-title">Ваши счета</h1>
        <coin-dropdown li="${encodeURIComponent(JSON.stringify(this._dropdown.li))}"></coin-dropdown>
        <div class="accounts__button">
          <button class="accounts__button-add button-filled">
            <svg class="accounts__icon" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path d="M12 4.00001L12 12M12 12L12 20M12 12L20 12M12 12L4 12" stroke="white" stroke-width="2"></path>
            </svg>
            <span class="accounts__button-title js-add-account">Создать новый счет</span>
          </button>
        </div>
      </div>
      <accounts-list></accounts-list>
    `;
  }
}

// зарегистрируем наш компонент как html-тэг
window.customElements.define('user-accounts', UserAccounts);
