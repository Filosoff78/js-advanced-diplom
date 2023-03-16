import {randomString} from "../../services/Helpers";
import {store} from "../../store/Store";

export default class Component extends HTMLElement {
  _settings = {};
  constructor({element, className}, classList = []) {
    super();
    this._settings.id = randomString(12);
    this.attachShadow({ mode: "open" });

    this._basicElement = document.createElement(element);
    this._basicElement.classList.add(className);
    this._basicElement.id = this._settings.id;
    this._settings.element = this._basicElement;

    classList.forEach((className) => {
      const link = document.createElement('link');
      link.setAttribute('rel', 'stylesheet');
      link.setAttribute('href', `/css/${className}`);
      this.shadowRoot.append(link);
    })
  }
  connectedCallback() {
    this._basicElement.innerHTML = this._settings.template ?? this.template();
    this.shadowRoot.appendChild(this._basicElement);
    this.createStore();
    this.addEvents();
  }

  disconnectedCallback() {
    this.unRender();
    delete window.store[`component-${this._settings.id}`];
  }

  addEvents() {}
  unRender() {}

  createStore() {
    store(this._settings, `component-${this._settings.id}`);
  }

  render() {
    this._basicElement.innerHTML = this.template();
  }
}
