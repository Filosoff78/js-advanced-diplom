export default class Page {
  constructor(settings = {}) {

    settings.classList?.forEach((className) => {
      const link = document.createElement('link');
      link.setAttribute('rel', 'stylesheet');
      link.setAttribute('href', `/css/${className}`);
      console.log(window.mainOptions.contentContainer);
      window.mainOptions.contentContainer.append(link);
    })
  }

  template() {};
  addEvents() {};

  render() {
    window.mainOptions.contentContainer.innerHTML = this.template();
    this.addEvents();
  }
}
