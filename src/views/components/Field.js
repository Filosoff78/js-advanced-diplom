import Component from "./Component";
import Validator from "../../services/Validator";
import "../../assest/css/field.css";

class Field extends Component {
  constructor() {
    super({element: 'div', className: 'field'});

    if (this.getAttribute('validator'))
      this._settings.validator = Validator[this.getAttribute('validator')];

    this._settings.status = '';
    this._settings.form = this.getAttribute('id');
    this._settings.value = '';
    this._settings.instance = this;
    this._settings.label = this.getAttribute('label');

    this._basicElement.innerHTML = this.template();
  }
  addEvents() {
    this.shadowRoot.querySelector('input').addEventListener('change', (e) => {
      this._settings.value = store[`component-${this._settings.id}`].value = e.target.value;
    })
  }
  render() {
    this._basicElement.innerHTML = this.template();
    this.addEvents();
  }
  template = () => {
    return `
        <link rel="stylesheet" href="/css/field.css">
        <label for="login-name" class="field__label">${this._settings.label}</label>
        <input class="field__input ${this._settings.status}" type="text" id="login-name" name="name" value="${this._settings.value}"/>
    `;
  }
}

// зарегистрируем наш компонент как html-тэг
window.customElements.define('coin-field', Field);
