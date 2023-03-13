export function registerWindowOptions() {
  window.mainOptions = {
    contentContainer: document.getElementById('app'),
  };
  const link = document.createElement('link');
  link.setAttribute('rel', 'stylesheet');
  link.setAttribute('href', require(`../assest/css/main.css`).default);
  document.body.append(link);
}

export function randomString(i) {
  let rnd = '';
  while (rnd.length < i) rnd += Math.random().toString(36).substring(2);
  return rnd.substring(0, i);
}

export function validateField(formId) {
  for (const key in window.store) {
    if (window.store[key].form === formId) {
      console.log(window.store[key]);
      window.store[key].status = window.store[key].validator.test(window.store[key].value) ? 'success' : 'error';
      window.store[key].instance.render();
    }
  }
}
