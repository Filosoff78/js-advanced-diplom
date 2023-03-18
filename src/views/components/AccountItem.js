import Component from "./Component";
import (/* webpackChunkName: "accountItem" */"../../assest/css/accountItem.css");

class AccountItem extends Component {
  constructor() {
    super({element: 'div', className: 'dropdown'}, {
      classList: ['accountItem.css']
    });

    this._account = {};
    this._account.id = this.dataset.id;
    this._account.money = this.dataset.money;
    this._account.lastTransaction = this.dataset.lastTransaction;
  }

  addEvents() {
    this.shadowRoot.querySelectorAll('.js-account-detail').forEach((button) => {
      button.addEventListener('click', (e) => window.router.navigate(e.target.getAttribute('link')));
    })
  }

  template = () => {
    return `
      <div class="account__item">
        <span class="accounts__id">${this._account.id}</span>
        <span class="accounts__money">${this._account.money} ₽</span>
        <div class="accounts__item-bottom">
          <div class="accounts__transaction">
          <span class="accounts__last-transaction">
            Последняя транзакция:<br></span>
            <time class="accounts__date-transaction " datetime="${this._account.lastTransaction}">
              ${this._account.lastTransaction}
            </time>
          </div>
        <button class="button-filled js-account-detail" link="/account/${this._account.id}/">Открыть</button>
      </div>
      </div>
    `;
  }
}

// зарегистрируем наш компонент как html-тэг
window.customElements.define('account-item', AccountItem);
