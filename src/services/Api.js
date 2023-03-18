import { API_URL } from './Constants';

export const Api = {
  post: ({
    url,
    body = null,
    headers = new Headers({ 'Content-Type': 'application/json' }),
  }) => {
    headers.append('authorization', 'Basic ZGV2ZWxvcGVyOnNraWxsYm94');

    return fetch(API_URL + url, {
      method: 'POST',
      body: body ? JSON.stringify(body) : null,
      headers,
    })
      .then((r) => r.json())
      .then((r) => r.payload);
  },

  get: (url) => {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('authorization', 'Basic ZGV2ZWxvcGVyOnNraWxsYm94');

    return fetch(API_URL + url, {
      headers,
    })
      .then((r) => r.json())
      .then((r) => r.payload);
  },
};
