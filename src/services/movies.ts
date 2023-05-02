import HttpClient from '@/services/common/http';
import { type MovieResponse } from '@/types/movies';

export default class MoviesService {
  private http: HttpClient = HttpClient.getInstance();

  // Endpoint prefix definitions.
  private get moviesPrefix() {
    return 'movies';
  }

  public getMovies(): Promise<MovieResponse> {
    return this.http.get(`${this.moviesPrefix}`);
  }
}
