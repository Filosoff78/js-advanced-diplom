export function registerWindowOptions() {
  window.mainOptions = {
    contentContainer: document.getElementById('app'),
  };
}

export function randomString(i) {
  let rnd = '';
  while (rnd.length < i) rnd += Math.random().toString(36).substring(2);
  return rnd.substring(0, i);
}

export function validateField(formId) {
  let notFindError = true;
  for (const key in window.store) {
    if (window.store[key].form === formId) {
      window.store[key].status = window.store[key].validator.test(window.store[key].value) ? 'success' : 'error';
      window.store[key].instance.render();
      if (notFindError) notFindError = window.store[key].status === 'success';
    }
  }
  return notFindError;
}
