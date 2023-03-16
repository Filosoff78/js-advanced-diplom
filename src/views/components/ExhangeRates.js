import Component from "./Component";
import {API_URL} from "../../services/Constants";
import {Api} from "../../services/Api";
import (/* webpackChunkName: "exchangeRates" */"../../assest/css/exchangeRates.css");

class ExhangeRates extends Component {
  constructor() {
    super({element: 'div'}, ['exchangeRates.css']);

    this._currenciesExchange = [];
    this._settings.socket = new WebSocket('ws://localhost:3000/currency-feed');

    this._settings.socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.type !== 'EXCHANGE_RATE_CHANGE')
        return true;
      this._currenciesExchange.unshift(data);
      if (this._currenciesExchange.length > 12)
        this._currenciesExchange.splice(this._currenciesExchange.length - 1);
      this.render();
    };
  }

  render() {
    console.log(this._currenciesExchange);
    this._basicElement.innerHTML = this.template();
  }

  unRender() {
    this._settings.socket.close();
  }

  template = () => {
    return `
      <ul class="currency__list">
      ${this._currenciesExchange?.map((exchange) =>
          `<li class="currency__item ${exchange.change === 0 ? '' : exchange.change > 0 ? 'green' : 'red'}">
            <span class="currency__name">${exchange.from}/${exchange.to}</span>
            <span class="currency__value">${exchange.rate}</span>
            <span class="currency__border"></span>
          </li>`).join("")}
      </ul>
    `;
  }
}

// зарегистрируем наш компонент как html-тэг
window.customElements.define('exchange-rates', ExhangeRates);
