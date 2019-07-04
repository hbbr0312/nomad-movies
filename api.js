import { getResults, appendAndRetResults } from "./utils/getApi";

export const movieApi = {
  getNowPlaying: () => getResults("movie/now_playing"),
  getUpcoming: () => getResults("movie/upcoming"),
  getPopular: () => getResults("movie/popular"),
  getMovie: id =>
    appendAndRetResults(`movie/${id}`, "append_to_response", "videos"),
  searchMovies: term => appendAndRetResults("search/movie", "query", term)
};

export const tvApi = {
  getTopRated: () => getResults("tv/top_rated"),
  getPopular: () => getResults("tv/popular"),
  getAiringToday: () => getResults("tv/airing_today"),
  getTV: id => appendAndRetResults(`tv/${id}`, "append_to_response", "videos"),
  searchTV: term => appendAndRetResults("search/tv", "query", `${term}`)
};
