import Component from "./Component";
import (/* webpackChunkName: "dropdown" */"../../assest/css/dropdown.css");

class Dropdown extends Component {
  constructor() {
    super({element: 'div', className: 'dropdown'}, {
      classList: ['dropdown.css']
    });

    this._settings.li = JSON.parse(decodeURIComponent(this.getAttribute('li')));
    this._settings.selectId = this._settings.li[0];
  }

  clickLi(id) {
    this._settings.selectId = this._settings.li.filter((li) => li.id === id)[0];
    this.render();
  }

  addEvents() {
    this.shadowRoot.querySelector('div.dropdown-container')
      .addEventListener('click', function () {this.classList.toggle('dropdown-open')});

    this.shadowRoot.querySelectorAll('li').forEach((li) =>
      li.addEventListener('click',  () => this.clickLi(li.dataset.value))
    );
  }

  template = () => {
    return `
      <div class="dropdown-container">
        <div class="dropdown-toggle click-dropdown js-contact-field">${this._settings.selectId.text}</div>
        <div class="dropdown-menu dropdown-active">
          <ul class="dropdown-group">
            ${this._settings.li.map((li) => `
              <li data-value="${li.id}">
                  <a class="dropdown-item" href="#">${li.text}</a>
              </li>
            `).join('')}
          </ul>
        </div>
      </div>
    `;
  }
}

// зарегистрируем наш компонент как html-тэг
window.customElements.define('coin-dropdown', Dropdown);
