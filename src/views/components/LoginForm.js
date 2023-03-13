import Component from "./Component";
import {validateField} from "../../services/Helpers";
class LoginForm extends Component {
  constructor() {
    super({element: 'div', className: 'login'}, ['loginForm.css']);
    this._basicElement.innerHTML = this.template();
  }

  addEvents() {
    const button = this.shadowRoot.querySelector('.js-login-button');
    button.addEventListener('click', () => {
      if(validateField(this._settings.id)) {
        store.user.key = '123';
      }
    })
  }

  template = () => {
    return `
      <div class="login__container">
        <h1 class="login__title">
          Вход в аккаунт
        </h1>
        <div class="login__form">
          <coin-field id="${this._settings.id}" validator="login" label="Логин"></coin-field>
          <coin-field id="${this._settings.id}" validator="login" label="Пароль"></coin-field>
          <div class="login__button_container">
            <button type="button" class="login__button js-login-button">Войти</button>
          </div>
        </div>
      </div>
    `;
  }
}

// зарегистрируем наш компонент как html-тэг
window.customElements.define('login-form', LoginForm);
