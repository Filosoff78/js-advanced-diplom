export default class Home {
  render = () => {
    window.mainOptions.contentContainer.innerHTML = `
      <coin-header></coin-header>
      <div class="container">
          ${!store.user.key ? '<login-form></login-form>' : ''}
      </div>
    `;
    document.addEventListener(`user`,  () => {
      this.render();
    });
  }
}
