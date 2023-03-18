import Component from "./Component";
import {Api} from "../../services/Api";
import (/* webpackChunkName: "accountsList" */"../../assest/css/accountsList.css");


class AccountsList extends Component {
  constructor() {
    super({element: 'div', className: 'account__list'}, {
      classList: ['accountsList.css']
    });
    this._accounts = [];

    Api.get('accounts').then((e) => {
      window.store['user'].accounts = this._accounts = e;
      this.render();
    });

    document.addEventListener(`user`,  (e) => {
      if(e.detail.accounts.length !== this._accounts)
        this.render();
    });
  }

  template = () => {
    return this._accounts.map(account =>
      `<account-item data-id="${account.account}" data-money="${account.balance}" data-last-transaction=""></account-item>`
    ).join('');
  }
}

// зарегистрируем наш компонент как html-тэг
window.customElements.define('accounts-list', AccountsList);
