export function store (data, name) {
  function emit (type, detail) {
    let event = new CustomEvent(type, {
      bubbles: true,
      cancelable: true,
      detail: detail
    });

    return document.dispatchEvent(event);
  }

  function handler (name, data) {
    return {
      get: function (obj, prop) {
        if (prop === '_isProxy') return true;
        if (['object', 'array'].includes(Object.prototype.toString.call(obj[prop]).slice(8, -1).toLowerCase()) && !obj[prop]._isProxy) {
          obj[prop] = new Proxy(obj[prop], handler(name, data));
        }
        return obj[prop];
      },
      set: function (obj, prop, value) {
        if (obj[prop] === value) return true;
        obj[prop] = value;
        emit(name, data);
        return true;
      },
      deleteProperty: function (obj, prop) {
        delete obj[prop];
        emit(name, data);
        return true;
      }
    };
  }
  window.store = window.store ?? {};
  window.store[name] = new Proxy(data, handler(name, data));
}
