import Page from "./Page";

export default class Home extends Page {
  _userLogin = false;

  constructor() {
    super();
    this._userLogin = store.user.key;

    this.render();

    document.addEventListener(`user`,  (e) => {
      if(e.detail.key !== this._userLogin)
        this.render();
    });
  }

  template() {
    return `
      <coin-header></coin-header>
      <div class="container">
          ${!store.user.key ? '<login-form></login-form>' : '<user-accounts></user-accounts>'}
      </div>
    `;
  }
}
