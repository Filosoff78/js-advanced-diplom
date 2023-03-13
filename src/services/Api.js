import {API_URL} from "./Constants";

export const Api = {
  post: ({
           url,
           body,
           headers = new Headers({ "Content-Type": `application/json` }),
  }) => {
    return fetch(API_URL + url, {
      method: 'POST',
      body: JSON.stringify(body),
      headers,
    }).then(r => r.json());
  }
}
