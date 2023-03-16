export default class Currency {
  render = () => {
    window.mainOptions.contentContainer.innerHTML = `
      <coin-header></coin-header>
      <div class="page__title__container">
        <h1 class="page__title">Валютный обмен</h1>
      </div>
      <div class="currency__container container">
        <div class="currency__block">
          <div class="block__content shadow">
            <h2>Ваши валюты</h2>
            <ul class="currency__list">
              <li class="currency__item">
                <span class="currency__name">AUD</span>
                <span class="currency__value">22,16</span>
                <span class="currency__border"></span>
              </li>
            </ul>
          </div>
          <div class="block__content shadow">
            <h2>Обмен валюты</h2>
          </div>
        </div>
        <div class="currency__block">
          <div class="block__content grey">
            <h2>Изменение курсов в реальном времени</h2>
            <exchange-rates></exchange-rates>
          </div>
        </div>
      </div>
      <style>
  .currency__container h2 {
    margin: 0 0 20px 0;
  }
  .page__title__container {
    margin: 50px;
  }
  .currency__container {
    display: flex;
  }
  .currency__block {
    width: 50%;
  }
  .currency__block:first-child {
    margin-right: 25px;
  }
  .block__content {
    padding: 50px;
    border-radius: 50px;
  }
  .block__content:first-child {
    margin-bottom: 25px;
  }
  .block__content.shadow {
    background: #FFFFFF;
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.25);
  }
  .block__content.grey {
    background: #E5E5E5;
  }
  .currency__list {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .currency__item:not(:last-child) {
    margin-bottom: 25px;
  }
  .currency__item {
    position: relative;
    display: inline-flex;
    width: 100%;
    justify-content: space-between;
  }
  .currency__name {
    padding-right: 10px;
    font-family: "WorkSans";
    font-size: 20px;
    font-weight: 600;
    background-color: white;
    z-index: 2;
  }
  .currency__value {
    padding-left: 10px;
    font-family: "WorkSans";
    font-size: 20px;
    font-weight: 400;
    background-color: white;
    z-index: 2;
  }
  .currency__border {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 3px;
    width: 100%;
    height: 2px;
    background-image: url(/assest/img/dotted-border.svg);
    background-repeat: repeat-x;
    z-index: 1;
  }
</style>
    `;
    console.log('currency render');
  }
}
