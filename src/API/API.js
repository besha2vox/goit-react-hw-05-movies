import axios from 'axios';

class API {
  constructor() {
    this._queryToFetch = null;
    this.BASE_URL = 'https://api.themoviedb.org/3/';
    this.API_KEY = '9cca312caffd11f4ae9f11244d585025';
  }

  async basicFetch(url, query) {
    return await axios(url, {
      baseURL: this.BASE_URL,
      params: {
        api_key: this.API_KEY,
        [query]: this.queryToFetch,
      },
    });
  }

  async getTrendingMovies() {
    const url = 'trending/movie/day';

    return await this.basicFetch(url);
  }

  async getSearchMoviesByID(id) {
    const url = `movie/${id}`;

    return await this.basicFetch(url);
  }

  async getSearchMoviesCredits(id) {
    const url = `movie/${id}/credits`;

    return await this.basicFetch(url);
  }

  async getSearchMoviesReview(id) {
    const url = `movie/${id}/reviews`;

    return await this.basicFetch(url);
  }

  async getMoviesByKeyWord() {
    const url = 'search/movie';

    return await this.basicFetch(url, 'query');

    // const params = new URLSearchParams({
    //   api_key: this.API_KEY,

    //   query: this._queryToFetch,
    //   page: this.pageToFetch,
    // });

    // const url = `${this.BASE_URL}search/movie?${params.toString()}`;

    // return await this.basicFetch(url);
  }

  get queryToFetch() {
    return this._queryToFetch;
  }

  set queryToFetch(keyword) {
    this._queryToFetch = keyword;
  }
}

const api = new API();

export default api;
