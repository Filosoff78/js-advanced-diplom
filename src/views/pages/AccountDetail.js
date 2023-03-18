import Page from "./Page";
import Chart from 'chart.js/auto';
import {Api} from "../../services/Api";
import (/* webpackChunkName: "accountDetail" */"../../assest/css/accountDetail.css");

export default class AccountDetail extends Page {
  _data = null;
  constructor(data) {
    super({classList: ['accountDetail.css']});
    this._data = data;

    this.render();

    Api.get(`account/${data.id}`).then((e) => console.log(e));
  }

  addEvents() {
    const ctx = document.getElementById('myChart');

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  template() {
    return `
      <coin-header></coin-header>
      <div class="container">
        <div class="accounts__top">
          <h1 class="section-title">Просмотр счета</h1>
          <div class="accounts__button">
            <button class="accounts__button-add button-filled">
              <svg class="account__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.83 11L11.41 7.41L10 6L4 12L10 18L11.41 16.59L7.83 13H20V11H7.83Z" fill="white"/>
              </svg>
              <span class="accounts__button-title js-add-account">Вернуться назад</span>
            </button>
          </div>
        </div>
        <div class="accounts__detail-description">
            <span>№ ${this._data.id}</span>
            <div class="description__right">
              <span class="description__right-balance">Баланс</span>
              <span class="description__right-money">31 235 ₽</span>
            </div>
        </div>
        <div class="accounts__detail-content">
          <div data-index="0" class="account__first-component">
            <div data-item="b">
                <canvas id="myChart"></canvas>
            </div>
          </div>
          <div data-index="1" class="account__second-component"></div>
          <div data-index="2"  class="account__third-component"></div>
        </div>
      </div>

      <class>

      </class>
    `;
  }
}
