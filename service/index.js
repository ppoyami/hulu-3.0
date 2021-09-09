import axios from 'axios';

// M:  Next.js data fetching methods and API routes 내부에서만 불러올 수 있다.(next.config로 설정이 필요함)
class TMDB {
  constructor() {
    this.httpClient = axios.create({
      baseURL: 'https://api.themoviedb.org/3',
      params: {
        api_key: process.env.API_KEY,
      },
    });
  }

  async get(url) {
    const response = await this.httpClient.get(url);
    return response;
  }

  async getMovieDetail(id) {
    const { data } = await this.httpClient.get(`/movie/${id}`);
    return data;
  }
}

const tmdb = new TMDB();

export default tmdb;
