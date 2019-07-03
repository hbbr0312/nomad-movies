import { makeURL } from "./makeUrl";

export const getResults = word => {
  const url = makeURL(word);
  return fetch(url)
    .then(res => res.json())
    .catch(error => console.log(error));
};

export const appendAndRetResults = (url, paramName, param) => {
  const encodedParam = encodeURIComponent(param);
  const new_url = makeURL(url) + `&${paramName}=${encodedParam}`;
  return getResults(new_url);
};
