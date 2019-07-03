export const makePhotoUrl = (path, size = "w500") =>
  `https://image.tmdb.org/t/p/${size}${path}`;

const API_KEY = "116f372fe281367e5eba4d9d52eb6e0e";

export const makeURL = term =>
  `https://api.themoviedb.org/3/${term}?api_key=${API_KEY}&language=en-US`;
